"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexControler = void 0;
class IndexControler {
    index(req, res) {
        //res.send('Hello')
        res.json({ text: 'API esta en /api/games' });
    }
}
exports.indexControler = new IndexControler();
