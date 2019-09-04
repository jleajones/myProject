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
  logger.info('Creating New SeverStyleSheet');
  const muiSheets = new ServerStyleSheets();
  const store = configureStore();

  // TODD: mui SSR doesn't work with this configuration
  const staticMarkup = await frontloadServerRender(() => {
    const markup = extractor.collectChunks(
      muiSheets.collect(
        <ServerApp req={req} staticContext={staticContext} store={store} />
      )
    );
    return ReactDOMServer.renderToString(markup);
  });

  logger.info('static markup complete...');
  if (staticContext.statusCode === 302) {
    res.redirect(302, staticContext.url);
  } else {
    const scriptTags = extractor.getScriptTags();
    const muiCss = muiSheets.toString();

    const meta = Helmet.renderStatic();
    logger.info('📦 ==> sending html', { status: staticContext.statusCode });
    res.status(staticContext.statusCode || 200).send(
      html({
        body: staticMarkup,
        meta,
        scripts: scriptTags,
        muiCss,
        state: store.getState()
      })
    );
  }
};

export default renderer;
