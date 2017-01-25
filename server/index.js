/*jshint node:true*/

// To use it create some files under `mocks/`
// e.g. `server/mocks/ember-hamsters.js`
//
// module.exports = function(app) {
//   app.get('/ember-hamsters', function(req, res) {
//     res.send('hello');
//   });
// };

// 参数解析
const bodyParser = require('body-parser');

module.exports = function(app) {
  var globSync   = require('glob').sync;
  var mocks      = globSync('./mocks/**/*.js', { cwd: __dirname }).map(require);
  var proxies    = globSync('./proxies/**/*.js', { cwd: __dirname }).map(require);

  //
  app.use(bodyParser.urlencoded({ extended: true }));

  // Log proxy requests
  var morgan  = require('morgan');
  app.use(morgan('dev'));  //请求日志

  mocks.forEach(function(route) { route(app); });
  proxies.forEach(function(route) { route(app); });


  // 拦截 /api/codes 请求
  app.get('/homepage/crud', function(req, res) {
      //获取数据之前先校验请求者是否有权访问资源
      //  做一个非常简单的判断，如果请求的头信息不等于BLOG.DDLISTING.COM则认为无权限
      if (req.headers['authorization'] !== 'BLOG.DDLISTING.COM') {
          return res.status(403).send('您无权访问此资源！')
      }
      // 直接返回正确状态和测试数据
      
      return res.status(200).send({
          crud: [
            { id: 1, title: '111', accepted: true,analyzing: true, assigned: true, closed: false, closing:false},
            { id: 2, title: '222', accepted: true,analyzing: false, assigned: false, closed: true, closing:false},
            { id: 3, title: '333', accepted: true ,analyzing: true, assigned: false, closed: false, closing:true},
            { id: 4, title: '444', accepted: false ,analyzing: true, assigned: false, closed: true, closing:false},
            { id: 5, title: '555', accepted: true ,analyzing: true, assigned: false, closed: false, closing:true},
            { id: 6, title: '666', accepted: false ,analyzing: false, assigned: true, closed: false, closing:false},
            { id: 7, title: '777', accepted: true ,analyzing: true, assigned: false, closed: false, closing:false},
            { id: 8, title: '888', accepted: true ,analyzing: true, assigned: false, closed: true, closing:false}
          ]
      });
  });
  // 登录
  app.post('/homepage*', function(req, res) {
      //判断用户名和密码是否正确，这里就直接判断字符串了，实际中通常是通过查询数据去判断登录的用户是否存在
      if (req.body.username === 'zhangwj'
        && req.body.password === 'zhangwj123') {
            res.send({ access_token: 'BLOG.DDLISTING.COM' });
        } else {
            res.status(400).send({ error: '获取token错误！' });
        }
  });
};