"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexControler_1 = require("../controlers/indexControler");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    //Se crea la ruta inicial de la app
    config() {
        this.router.get('/', indexControler_1.indexControler.index);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
