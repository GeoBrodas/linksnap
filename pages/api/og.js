import { renderToString } from 'react-dom/server';
import React from 'react';
import chromium from 'chrome-aws-lambda';

const getCss = () => `

  body {
    background-color: black;
  }

  h1 { 
    color: white;
  }

  .center-container {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bio {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

  img {
    width: 30%;
    border-radius: 50%;
  }
`;

const getContent = ({ name, imgUrl, twiiter, github }) => `<html>
  <style>
    ${getCss()}
  </style>
  <body>
    <div class="center-container">
      <div class="bio">
        <img src="${imgUrl}" alt="${name}" width="50%" height="100%">
        <h1>${name}</h1>
      </div>
    </div>
  </body>
</html>`;

const GenerateThumbnail = async (req, res) => {
  const { name, imgUrl, twiiter, github } = req.query;

  const html = getContent({ name, imgUrl, twiiter, github });
  const browser = await chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
    ignoreHTTPSErrors: true,
  });
  const page = await browser.newPage();
  await page.setContent(html);
  await page.setViewport({ width: 1200, height: 630 });
  const imageBuffer = await page.screenshot();
  await browser.close();
  res.setHeader('Content-Type', 'image/jpg');
  res.setHeader(
    'Cache-Control',
    `public, immutable, no-transform, s-maxage=2592000, max-age=2592000`
  );
  res.send(imageBuffer);
};

export default GenerateThumbnail;
