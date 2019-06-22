export default ({ body, meta, scripts, styles, muiCss, scCss }) => {
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
        ${scripts}
      </body>
    </html>
  `;
};
