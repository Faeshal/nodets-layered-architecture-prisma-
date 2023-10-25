import * as categoryRepo from "../repositories/category"
const log = require("log4js").getLogger("service:category");
log.level = "debug";

export const add = async (body: any) => {
    log.info("body:", body);
    const data = await categoryRepo.create(body);
    return data;
};

export const getAll = async (body: any) => {
    log.info("body:", body);
    let data = await categoryRepo.findAll(body);
    return data;
};