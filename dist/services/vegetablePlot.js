"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchVegetablePlotBySettlementId = exports.createVegetablePlot = void 0;
const settlementBuildings_1 = require("../data/settlementBuildings");
const knex = require("../knex");
const createVegetablePlot = async (vegetablePlot) => {
    //create plot from data
    const newPlotInput = settlementBuildings_1.vegetablePlots.filter((plot) => {
        return plot.level === 1;
    });
    const input = {
        ...newPlotInput[0],
        settlement_id: vegetablePlot.settlement_id,
        condition: 100,
    };
    const newVegPlot = await knex("vegetable_plots").returning("*").insert(input);
    return newVegPlot[0];
};
exports.createVegetablePlot = createVegetablePlot;
const fetchVegetablePlotBySettlementId = async (id) => {
    const vegPlot = await knex("vegetable_plots").where("settlement_id", id);
    return vegPlot[0];
};
exports.fetchVegetablePlotBySettlementId = fetchVegetablePlotBySettlementId;
