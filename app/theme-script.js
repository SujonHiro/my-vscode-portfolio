export const themeScript = `
  (function() {
    const theme = localStorage.getItem('theme') || 'github';
    document.body.setAttribute('data-theme', theme);
  })()
`;
