import { vegetablePlots } from "../data/settlementBuildings";

const knex = require("../knex");

export const createVegetablePlot = async (vegetablePlot) => {
  //create plot from data
  const newPlotInput = vegetablePlots.filter((plot) => {
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

export const fetchVegetablePlotBySettlementId = async (id) => {
  const vegPlot = await knex("vegetable_plots").where("settlement_id", id);

  return vegPlot[0];
};
