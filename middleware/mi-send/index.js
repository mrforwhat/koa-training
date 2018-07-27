/**
 * Created by Administrator on 2018/6/8/008.
 */
module.exports = () => {
    function render(json) {
        this.set("Content-Type", "application/json");
        this.body = JSON.stringify(json);
    }

    return async (ctx, next) => {
        ctx.send = render.bind(ctx);
        ctx.log.error('日志中间件发来了一个错误');
        await next();
    }
};