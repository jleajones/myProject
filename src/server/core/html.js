/**
 *
 * @param body
 * @param meta
 * @param scripts
 * @param styles
 * @param muiCss
 * @param scCss
 * @param state
 * @returns {string}
 */
export default ({ body, meta, scripts, muiCss, state }) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        ${meta.title.toString()}
        <style id="jss-server-side">${muiCss}</style>
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
