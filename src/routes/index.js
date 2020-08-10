import Router from '@koa/router';

const router = new Router();

router.get('/', ctx => {
  ctx.body = {
    message: 'The app was built successfully',
  };
});

export default router;
