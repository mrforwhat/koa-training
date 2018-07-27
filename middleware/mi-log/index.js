const log4js = require('log4js');
const path = require('path');
const methods = ["trace", "debug", "info", "warn", "error", "fatal", "mark"];

module.exports = (options) => {
    let contextLogger = {};
    return async (ctx, next) => {
        const start = Date.now();
        log4js.configure({
            appenders: {koa: {type: 'file', filename: path.resolve('/log','koa.log')}},
            categories: {default: {appenders: ['koa'], level: 'info'}}
        });
        const logger = log4js.getLogger('koa');

        methods.forEach((method, i) => {
            contextLogger[method] = (message) => {
                logger[method](message);
            }
        });

        ctx.log = contextLogger;
        await next();
        const end = Date.now();
        const responseTime = end - start;
        logger.info(`响应时间为:${responseTime / 1000}s`);
    }
};
