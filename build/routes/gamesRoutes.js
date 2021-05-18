"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesControler_1 = __importDefault(require("../controlers/gamesControler"));
class GamesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    //Se crea la ruta de la app
    config() {
        this.router.get('/', gamesControler_1.default.list);
        this.router.get('/:id', gamesControler_1.default.getOne);
        this.router.post('/', gamesControler_1.default.create);
        this.router.delete('/:id', gamesControler_1.default.delete);
        this.router.put('/:id', gamesControler_1.default.update);
    }
}
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
