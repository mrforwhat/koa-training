/**
 * Created by Administrator on 2018/6/11/011.
 */

module.exports = {
    regist: async (name, pwd) => {
        let data;
        if (name === 'Bob' && pwd === '123456') {
            data = `welcome ${name}`
        } else {
            data = `账户信息不正确`
        }
        return data;
    }
};