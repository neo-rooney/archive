// require('dotenv').config();
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import api from './api/index.js';
import dotenv from 'dotenv';
import createFakeData from './createFakeData.js';
import jwtMiddleware from './lib/jwtMiddleware.js';
import serve from 'koa-static';
import path from 'path';
import send from 'koa-send';

dotenv.config();

const { PORT, MONGO_URL } = process.env;

mongoose
  .connect(MONGO_URL, {})
  .then(() => {
    console.log('Connected to MongoDB');
    // createFakeData();
  })
  .catch((e) => {
    console.error(e);
  });

const app = new Koa();
const router = new Router();

router.use('/api', api.routes());

// 라우터 적용하기 전에 bodyParser 적용
app.use(bodyParser());
app.use(jwtMiddleware);

// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());
const __dirname = path.resolve();
const buildDirectory = path.resolve(__dirname, '../front/build');

app.use(serve(buildDirectory));
app.use(async (ctx) => {
  if (ctx.status == 404 && ctx.path.indexOf('/api') !== 0) {
    await send(ctx, 'index.html', { root: buildDirectory });
  }
});

const port = PORT || 4000;
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
