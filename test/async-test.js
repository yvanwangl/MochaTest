const asyncHello =  require('../asyncHello');
const assert = require('assert');


describe('async test', ()=>{

    it('asyncHello should return 10', async ()=>{
        const result = await asyncHello();
        assert.strictEqual(result, 10);
    });
});