import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Helmet } from 'react-helmet';
import { frontloadServerRender } from 'react-frontload';
import { ServerStyleSheet } from 'styled-components';
import { ServerStyleSheets } from '@material-ui/styles';
import { ChunkExtractor } from '@loadable/server';

import configureStore from '@store/index';
import html from '@serverCore/html';
import ServerApp from '@serverCore/components/ServerApp';

const statsFile = path.resolve('./build/loadable-stats.json');
const extractor = new ChunkExtractor({ statsFile });

const renderer = async (req, res, logger) => {
  logger.info('⚙️ ==> rendering ', { url: req.url });
  const staticContext = {};
  const scSheets = new ServerStyleSheet();
  const muiSheets = new ServerStyleSheets();
  const store = configureStore();

  const getStaticMarkup = () => {
    const markup = extractor.collectChunks(
      muiSheets.collect(
        <ServerApp req={req} staticContext={staticContext} store={store} />
      )
    );
    scSheets.collectStyles(markup);
    return ReactDOMServer.renderToString(markup);
  };

  const staticMarkup = await frontloadServerRender(getStaticMarkup);
  if (staticContext.statusCode === 302) {
    res.redirect(302, staticContext.url);
  } else {
    const scriptTags = extractor.getScriptTags();
    const styleTags = extractor.getStyleTags();
    const muiCss = muiSheets.toString();
    const scCss = scSheets.getStyleTags();
    scSheets.seal();

    const meta = Helmet.renderStatic();
    logger.info('📦 ==> sending html', { status: staticContext.statusCode });
    res.status(staticContext.statusCode || 200).send(
      html({
        body: staticMarkup,
        meta,
        scripts: scriptTags,
        styles: styleTags,
        muiCss,
        scCss,
        state: store.getState()
      })
    );
  }
};

export default renderer;
