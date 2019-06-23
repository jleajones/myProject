export default ({ body, meta, scripts, styles, muiCss, scCss, state }) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        ${meta.title.toString()}
        ${styles}
        <style id="jss-server-side">${muiCss}</style>
        ${scCss}
      </head>
      <body>
        <div id="root">${body}</div>
       
        <script>window.__INITIAL_STATE__= ${JSON.stringify(state).replace(
          /</g,
          '\\\u003c'
        )}</script>
        ${scripts}
      </body>
    </html>
  `;
};
