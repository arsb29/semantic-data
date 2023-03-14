const Engine = require("rules-js");

const engine = new Engine();

engine.closures.add("checkSum", (fact, context) => {
    const {maxSum} = context.parameters;
    if (fact.sum < context.parameters.minSum ) return false;
    if (maxSum && (fact.sum > maxSum)) return false;
    return true;
});

engine.closures.add("addPoints", (fact, context) => {
    fact.points = context.parameters.points;
    return fact;
});

const definitions = require("./rules.json");
engine.add(definitions);

module.exports = function (order) {
    return engine.process("process-purchase", order);
}