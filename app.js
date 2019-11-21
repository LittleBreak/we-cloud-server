const Koa = require("koa");
const app = new Koa();
const logger = require("koa-logger");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");

const userRouter = require("./router/user");
const router = new Router({ prefix: "/api" });

// logger
app.use(logger());
app.use(bodyParser());

router.get("/json", (ctx, next) => {
  ctx.body = {
    message: "Page Not Found lalla"
  };
});


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

app.use(router.routes()).use(userRouter.routes());

// response

// app.use(async ctx => {
//   ctx.body = {
//     message: "Page Not Found"
//   };
//   // ctx.body = 'Hello World';
// });

app.listen(3001);
