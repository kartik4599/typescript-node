import { Router } from "express";
import { Todo } from "../models/todo";

let todos: Todo[] = [];

const router = Router();

router.get("/", (req, res, next) => {
  res.status(200).json({ todos });
});

router.post("/todo", (req, res, next) => {
  const newTodo: Todo = {
    id: req.body.id,
    text: req.body.text,
  };
  todos.push(newTodo);
  res.json(todos);
});

router.put("/todo/:id", (req, res, next) => {
  const newTodo: Todo[] = todos.map((e) => {
    if (e.id === +req.params.id) {
      return { ...e, text: req.body.text };
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

export default router;
