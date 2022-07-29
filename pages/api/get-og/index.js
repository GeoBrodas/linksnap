import { withOGImage } from 'next-api-og-image';

export default withOGImage({
  template: {
    html: ({ name, occupation, imgUrl }) => `
      <html>
        <head>
          <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
        </head>
        <body
            class="h-screen relative bg-black"
        >
            <div
                class="absolute bottom-0 top-20 left-20 text-white text-center"
            >
                <img class="rounded-full" style="width: 350px; height: 350px;" src="${imgUrl}" alt="${name}">
            </div>
                <div
                    class="absolute bottom-40 right-40 text-white text-center"
                >
                    <h1 class="flex flex-row text-6xl text-white">${name}</h1>
                    <p class="flex mt-6 flex-row text-2xl text-white">${occupation}</p>
                </div>
        
          </body>
      </html>
    `,
  },
  dev: {
    inspectHtml: true,
  },
});
