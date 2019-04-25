import path from 'path';
import React from 'react';
import { Helmet } from 'react-helmet';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Frontload, frontloadServerRender } from 'react-frontload';
import { ChunkExtractor } from '@loadable/server';

import html from '@server/html';
import App from '@client/components/App';

const statsFile = path.resolve('./build/loadable-stats.json');
const extractor = new ChunkExtractor({ statsFile });

const renderer = async (req, res) => {
  let staticContext = {};
  const getStaticMarkup = () => {
    // extractor.collectChunks captures all loadable components
    const html = extractor.collectChunks(
      <StaticRouter location={req.url} context={staticContext}>
        <Frontload isServer>
          <App />
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
    let meta = Helmet.renderStatic();
    res.status(staticContext.statusCode || 200).send(
      html({
        body: staticMarkup,
        meta,
        scripts: scriptTags,
        styles: styleTags
      })
    );
  }
};

export default renderer;
