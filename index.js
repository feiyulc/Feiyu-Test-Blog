const http = require('http');
const url = require('url');
const db = require('./db.js');
const auth = require('./auth.js');

const server = http.createServer(async (req, res) => {
    const reqUrl = url.parse(req.url, true);

    if (reqUrl.pathname == '/api/register' && req.method === 'POST') {
        // 这里是一个模拟的用户注册过程。在实际应用中，你可能需要从请求体中获取用户名和密码，然后将它们存储到数据库中。
        res.statusCode = 200;
        res.end();
    } else if (reqUrl.pathname == '/api/login' && req.method === 'POST') {
        // 这里是一个模拟的用户登录过程。在实际应用中，你可能需要从请求体中获取用户名和密码，然后与数据库中的记录进行比较。
        const token = await auth.generateToken();
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ token }));
    } else if (reqUrl.pathname == '/api/blogs' && req.method === 'GET') {
        const blogs = await db.getBlogs();
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ blogs }));
    } else if (reqUrl.pathname == '/api/blogs' && req.method === 'POST') {
        // 这里是一个模拟的博客发布过程。在实际应用中，你可能需要从请求体中获取博客的标题和内容，然后将它们存储到数据库中。
        res.statusCode = 200;
        res.end();
    } else if (reqUrl.pathname.startsWith('/api/blogs/') && req.method === 'GET') {
        const id = reqUrl.pathname.split('/')[3];
        const blog = await db.getBlog(id);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ blog }));
    } else if (reqUrl.pathname.startsWith('/api/blogs/') && req.method === 'POST') {
        const id = reqUrl.pathname.split('/')[3];
        // 这里是一个模拟的博客评论过程。在实际应用中，你可能需要从请求体中获取评论的内容，然后将它存储到数据库中。
        res.statusCode = 200;
        res.end();
    } else {
        res.statusCode = 404;
        res.end();
    }
});

module.exports = server;
