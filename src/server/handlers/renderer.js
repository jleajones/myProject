import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Frontload, frontloadServerRender } from 'react-frontload';
import { ServerStyleSheet } from 'styled-components';
import { ServerStyleSheets } from '@material-ui/styles';
import { ChunkExtractor } from '@loadable/server';

import html from '@server/html';
import App from '@components/App';
import MyThemeProvider from '@shared/theme';

const statsFile = path.resolve('./build/loadable-stats.json');
const extractor = new ChunkExtractor({ statsFile });

const renderer = async (req, res) => {
  let staticContext = {};
  const scSheets = new ServerStyleSheet();
  const muiSheets = new ServerStyleSheets();

  const getStaticMarkup = () => {
    // extractor.collectChunks captures all loadable components
    const html = extractor.collectChunks(
        // collect MaterialUI Styles
      muiSheets.collect(
        <StaticRouter location={req.url} context={staticContext}>
          <Frontload isServer>
            <MyThemeProvider>
              <App />
            </MyThemeProvider>
          </Frontload>
        </StaticRouter>
      )
    );
    // collect Styled-Components Styles
    scSheets.collectStyles(html);
    return ReactDOMServer.renderToStaticMarkup(html);
  };

  const staticMarkup = await frontloadServerRender(getStaticMarkup);
  if (staticContext.statusCode === 302) {
    // Somewhere a `<Redirect>` was rendered
    res.redirect(302, staticContext.url);
  } else {
    // we're good, send the response
    // NOTE: could be 404
    // get script tags
    const scriptTags = extractor.getScriptTags();
    // get css styles
    const styleTags = extractor.getStyleTags();
    // get material-ui styles
    const muiCss = muiSheets.toString();
    // get styled components styles
    const scCss = scSheets.getStyleTags();
    scSheets.seal();

    let meta = Helmet.renderStatic();
    res.status(staticContext.statusCode || 200).send(
      html({
        body: staticMarkup,
        meta,
        scripts: scriptTags,
        styles: styleTags,
        muiCss,
        scCss
      })
    );
  }
};

export default renderer;
