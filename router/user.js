const Router = require("koa-router");

const router = new Router({ prefix: "/api" });

router.get("/user", (ctx, next) => {
  ctx.body = {
    message: "user"
  };
});

module.exports = router;
