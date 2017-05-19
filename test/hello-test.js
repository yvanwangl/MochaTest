const assert = require('assert');
const sum = require('../hello');

describe('#hello.js', ()=>{
    describe('#sum() function', ()=>{
        before(()=> console.log('before test'));

        beforeEach(()=> console.log('before each test'));

        it('sum() should return 0', ()=>{
            assert.strictEqual(sum(), 0);
        });

        it('sum(1,2) should return 3', ()=>{
            assert.strictEqual(sum(1,2), 3);
        });

        it('sum(1,2,3) should return 6', ()=>{
            assert.strictEqual(sum(1,2,3), 6);
        });

        afterEach(()=> console.log('after each test'));

        after(()=> console.log('after test'));
    });
});