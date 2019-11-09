const serve = require("koa-static");
const Koa = require("koa");
const app = new Koa();
const port = 3002;
const prefixAPI = "/api";

app.use(serve("./dist"));
app.use(async function rootInterface(ctx) {
  // 请求url,若以/api开头，则调用接口
  const requestUrl = ctx.request.url;
  const isAPI = requestUrl.startsWith(prefixAPI);
  if (isAPI) {
    //ctx.status = 200;
    if (requestUrl === "/api/login/account") {
      ctx.body = {
        status: "ok",
        type: "account",
        currentAuthority: "admin"
      };
    }
  }
});
app.listen(port);

console.log(`listening on port ${port}`);
