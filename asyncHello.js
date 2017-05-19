const fs = require('mz/fs');

module.exports = async ()=>{
    let expression  = await fs.readFile('sample.txt', 'utf-8');
    return (new Function(`return ${expression}`))();
};