export default ({ body, meta, scripts, styles, css, styledComponents }) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        ${meta.title.toString()}
        ${styles}
        <style id="jss-server-side">${css}</style>
        ${styledComponents}
  </head>
      <body>
        <div id="root">${body}</div>
        ${scripts}
      </body>
    </html>
  `;
};
