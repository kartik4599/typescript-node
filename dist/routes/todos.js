"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = [];
const router = (0, express_1.Router)();
router.get("/", (req, res, next) => {
    res.status(200).json({ todos });
});
router.post("/todo", (req, res, next) => {
    const body = req.body;
    const newTodo = {
        id: body.id,
        text: body.text,
    };
    todos.push(newTodo);
    res.json(todos);
});
router.put("/todo/:id", (req, res, next) => {
    const params = req.params;
    const body = req.body;
    const newTodo = todos.map((e) => {
        if (e.id === +params.id) {
            return Object.assign(Object.assign({}, e), { text: body.text });
        }
        return e;
    });
    todos = [...newTodo];
    res.json(todos);
});
router.delete("/todo/:id", (req, res, next) => {
    const params = req.params;
    const newTodo = todos.filter((e) => e.id !== +params.id);
    todos = newTodo;
    res.json(todos);
});
exports.default = router;
