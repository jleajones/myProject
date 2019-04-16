export default ({ body, meta, scripts, styles }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        ${meta.title.toString()}
        ${styles}
      </head>
      <body>
        <div id="root">${body}</div>
        ${scripts}
      </body>
    </html>
  `;
};
