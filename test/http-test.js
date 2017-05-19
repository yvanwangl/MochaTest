const request = require('supertest');
const app = require('../app');

describe('#http test', ()=>{
    let server = app.listen(9000);

    it('#test GET /', async ()=>{
        let res = await request(server)
                        .get('/')
                        .expect('Content-Type', /text\/html/)
                        .expect(200, '<h1> Hello, world</h1>');
    })

    it('#test GET /path?name=wangyafei', async ()=>{
        let res = await request(server)
                        .get('/path?name=wangyafei')
                        .expect('Content-Type', /text\/html/)
                        .expect(200, '<h1> Hello, wangyafei</h1>');
    });
});