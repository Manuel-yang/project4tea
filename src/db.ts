import { Config, JsonDB } from "node-json-db";

const wallet = new JsonDB(new Config("db/wallet", true, true, "/"));

export const DataBase = {
  wallet: wallet,
};