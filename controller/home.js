/**
 * Created by Administrator on 2018/6/6/006.
 */
const HomeService = require('../service/home');

module.exports = {
    index: async (ctx, next) => {
        ctx.response.body = '<h1>index page</h1>';
        await ctx.render('home/index',{
            welcomeMsg:'hello koa2'
        });
    },
    home: async (ctx, next) => {
        ctx.response.body = '<h1>home page</h1>';
    },
    homePara: async (ctx, next) => {
        console.log('url:' + ctx.request.url);
        console.log('originalUrl:' + ctx.request.originalUrl);
        console.log('params:' + ctx.params);
        ctx.response.body = `<h1>hello id:${ctx.params.id},name:${ctx.params.name} </h1>`
    },
    login: async (ctx, next) => {
        let btnName = '登录';
        await ctx.render('home/login', {
            btnName: btnName
        });
    },
    regist: async (ctx, next) => {
        let {name, password} = ctx.request.body;
        let welcomeMsg = '';
        welcomeMsg = await HomeService.regist(name, password);
        await ctx.render('home/index', {
            welcomeMsg: welcomeMsg
        })
    }
}
;