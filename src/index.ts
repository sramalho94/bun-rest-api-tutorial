import { Elysia } from "elysia";

const app = new Elysia().get("/", () => "Hello, I am practicing Bun and Elysia")
.get('/post/:id', ({params: {id}}) => {return {id: id, title: 'Learn Bun'}})
.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
