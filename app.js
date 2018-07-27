/**
 * Created by Administrator on 2018/5/29/029.
 */
const Koa = require('koa');
const path = require('path');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const nunjucks = require('koa-nunjucks-2');
const staticFiles = require('koa-static');
const miSend = require('./middleware/mi-send/index');
const miLog = require('./middleware/mi-log/index');
const router = require('./router');

app.use(bodyParser());
app.use(miLog());
app.use(miSend());
app.use(staticFiles(path.resolve(__dirname, './static')));

app.use(nunjucks({
    ext: 'html',
    path: path.join(__dirname, 'views'),
    nunjucksConfig: {
        trimBlocks: true
    }
}));
router(app);


app.listen(3000, () => {
    console.log('server is on start on 3000');
});