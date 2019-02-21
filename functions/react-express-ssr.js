import serverless from 'serverless-http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Categories from './react-app/Categories';
import Clue from './react-app/Clue';
import { getClue, getRandomCategories } from './react-app/usersData';
import fs from 'fs';
import path from 'path';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.resolve(__dirname, "./Browser")))

const Html = ({ body, styles, title }) => {
  const stylesheet = styles ? `<style>${styles}</style>` : '';
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        ${stylesheet}
        <link rel="stylesheet" type="text/css" href="/index.css">
      </head>
      <body style="margin:0">
        <div id="root">${body}</div>
        </body>
        </html>
        `;
};
// <script src="/dev/bundle.js"></script>

const makePath = functionName =>
  process.env.NODE_ENV === 'dev'
    ? `/${functionName}`
    : `/.netlify/functions/${functionName}/`;
const categoriesPath = makePath('categories');
const cluePath = makePath('clue');

app.get([categoriesPath, categoriesPath + ':offset'], (req, res) => {
  // console.log('params', req.params);
  getRandomCategories(req.params).then(categories => {
    const reactAppHtml = renderToString(
      <Categories data={categories} params={req.params} />
    );
    const html = Html({
      title: 'React SSR via Functions!',
      body: reactAppHtml
    });
    res.send(html);
  });
});
app.get([cluePath + ':category/:value'], (req, res) => {
  // console.log('params', req.params);
  getClue(req.params).then(clue => {
    console.log({ clue });
    const reactAppHtml = renderToString(
      <Clue data={clue} params={req.params} />
    );
    const html = Html({
      title: 'React SSR via Functions!',
      body: reactAppHtml
    });
    res.send(html);
  });
});

exports.handler = serverless(app);
