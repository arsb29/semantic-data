const processorEngine = require("./processor-engine");

const purchase = {
    sum: 249
};
processorEngine(purchase).then(result => {
    console.log(result.fact)
})