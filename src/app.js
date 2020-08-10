import 'module-alias/register';
import Koa from 'koa';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';
import compress from 'koa-compress';
import pino from 'koa-pino-logger';

import router from '@routes';

const app = new Koa();

app.use(pino());

app.use(
  cors({
    origin: [process.env.FRONTEND],
  }),
);

app.use(compress());
app.use(bodyParser());

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
