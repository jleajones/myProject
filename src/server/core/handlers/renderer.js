import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Helmet } from 'react-helmet';
import { frontloadServerRender } from 'react-frontload';
import { ServerStyleSheets } from '@material-ui/styles';
import { ChunkExtractor } from '@loadable/server';

import configureStore from '@store/index';
import html from '@serverCore/html';
import ServerApp from '@serverCore/components/ServerApp';

const statsFile = path.resolve('./build/loadable-stats.json');
const extractor = new ChunkExtractor({ statsFile });

/**
 *
 * @param req
 * @param res
 * @param logger
 * @returns {Promise<void>}
 */
const renderer = async (req, res, logger) => {
  logger.info('🖌==> rendering ', { url: req.url });
  const staticContext = {};
  const store = configureStore();
  const sheets = new ServerStyleSheets();

  const generateMarkup = () => {
    return ReactDOMServer.renderToString(
      extractor.collectChunks(
        sheets.collect(
          <ServerApp req={req} staticContext={staticContext} store={store} />
        )
      )
    );
  };

  const markup = await frontloadServerRender(generateMarkup);

  if (staticContext.statusCode === 302) {
    logger.info('🔁 ==> redirecting ', { url: staticContext.url });
    res.redirect(302, staticContext.url);
  } else {
    logger.info('📦 ==> sending html', { status: staticContext.statusCode });
    // Grab the JS from our extractor.
    const scripts = extractor.getScriptTags();
    // Grab the CSS from our sheets.
    const css = sheets.toString();
    // Send the rendered page back to the client.
    res.status(staticContext.statusCode || 200).send(
      html({
        body: markup,
        meta: Helmet.renderStatic(),
        scripts,
        css,
        state: store.getState()
      })
    );
  }
};

export default renderer;
