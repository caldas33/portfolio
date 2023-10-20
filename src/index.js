const Bun = require('bun'); // Import the 'bun' module (if available) or use the appropriate import statement based on your project setup.

Bun.serve({
  fetch(req) {
    if (req.url.endsWith('.css')) {
      return new Response(Bun.file('./website.css'));
    } 
    else if(req.url.endsWith('.pdf')){
      return new Response(Bun.file('/mnt/c/Users/calda/Desktop/BunProject/quickstart/quickstart/project_assets/CV.pdf'))
    }
    else {
      return new Response(Bun.file('./index.html'));
    }
  },

  port: process.env.PORT || 3000,
});

