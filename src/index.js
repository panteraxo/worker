export default {
  async fetch(request) {
    const url = new URL(request.url);
    
    // Reemplaza con la URL de tu proyecto de Astro en Pages
    const targetUrl = 'https://podologies.pages.dev';
    
    const newUrl = targetUrl + url.pathname + url.search;
    
    const response = await fetch(newUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body
    });
    
    return response;
  }
}