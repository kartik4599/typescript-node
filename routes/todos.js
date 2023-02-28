"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = [];
const router = (0, express_1.Router)();
router.get("/", (req, res, next) => {
    res.status(200).json({ todos });
});
router.post("/todo", (req, res, next) => {
    const newTodo = {
        id: req.body.id,
        text: req.body.text,
    };
    todos.push(newTodo);
    res.json(todos);
});
router.put("/todo/:id", (req, res, next) => {
    const newTodo = todos.map((e) => {
        if (e.id === +req.params.id) {
            return Object.assign(Object.assign({}, e), { text: req.body.text });
        }
        return e;
    });
    todos = [...newTodo];
    res.json(todos);
});
router.delete("/todo/:id", (req, res, next) => {
    const newTodo = todos.filter((e) => e.id !== +req.params.id);
    todos = newTodo;
    res.json(todos);
});
exports.default = router;
