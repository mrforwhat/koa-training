/**
 * Created by Administrator on 2018/6/6/006.
 */
const router = require('koa-router')();
const homeController = require('./controller/home');
module.exports = (app) => {
    router
        .get('/', homeController.index)
        .get('/home', homeController.home)
        .get('/home/:id/:name', homeController.homePara)
        .get('/user/login', homeController.login)
        .post('/user/regist', homeController.regist);

    app.use(router.routes())
        .use(router.allowedMethods());
};