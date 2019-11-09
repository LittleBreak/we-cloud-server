const Koa = require("koa");
const app = new Koa();

// logger

// app.use(async (ctx, next) => {
//   console.log('before logger');

//   await next();
//   console.log('after logger');
// });

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  //console.log("before xxx");

  await next();
  //console.log("after xxx");

  const ms = Date.now() - start;
  ctx.set("X-Response-Time", `${ms}ms`);
});

// response

app.use(async ctx => {
  console.log(`${ctx.method} ${ctx.url}`);
  ctx.body = {
    message: "Page Not Found"
  };
  // ctx.body = 'Hello World';
});

app.listen(3001);
