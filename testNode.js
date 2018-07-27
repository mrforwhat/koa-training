/**
 * Created by Administrator on 2018/7/26/026.
 */

const path = require('path');
console.log('dirname:'+ __dirname);
console.log('filename:'+ __filename);
console.log('fileName:'+ path.dirname(__filename));

console.log('resolve path1:'+path.resolve(__dirname,'./static'));
console.log('resolve path2:'+path.resolve(__dirname,'/static'));