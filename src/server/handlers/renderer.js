import { SheetsRegistry } from 'jss';
import path from 'path';
import React from 'react';
import { Helmet } from 'react-helmet';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Frontload, frontloadServerRender } from 'react-frontload';
import JssProvider from 'react-jss/lib/JssProvider';

import {
  MuiThemeProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import { ChunkExtractor } from '@loadable/server';

import html from '@server/html';
import App from '@client/components/App';
import { theme } from '@components/theme';

const statsFile = path.resolve('./build/loadable-stats.json');
const extractor = new ChunkExtractor({ statsFile });

const renderer = async (req, res) => {
  let staticContext = {};
  const sheetsRegistry = new SheetsRegistry();
  const sheetsManager = new Map();
  const generateClassName = createGenerateClassName();

  const getStaticMarkup = () => {
    // extractor.collectChunks captures all loadable components
    const html = extractor.collectChunks(
      <StaticRouter location={req.url} context={staticContext}>
        <Frontload isServer>
          <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
            <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
              <App />
            </MuiThemeProvider>
          </JssProvider>
        </Frontload>
      </StaticRouter>
    );

    return ReactDOMServer.renderToStaticMarkup(html);
  };

  const staticMarkup = await frontloadServerRender(getStaticMarkup);
  if (staticContext.statusCode === 302) {
    // Somewhere a `<Redirect>` was rendered
    res.redirect(302, staticContext.url);
  } else {
    // we're good, send the response NOTE: could be 404
    const scriptTags = extractor.getScriptTags();
    const styleTags = extractor.getStyleTags();
    const css = sheetsRegistry.toString()
    let meta = Helmet.renderStatic();
    res.status(staticContext.statusCode || 200).send(
      html({
        body: staticMarkup,
        meta,
        scripts: scriptTags,
        styles: styleTags,
        css
      })
    );
  }
};

export default renderer;
