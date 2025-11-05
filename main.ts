import {Hono} from '@hono/hono';

const app = new Hono();

app.get('/', (c) => {
  return c.text('Hello, bruh!');
});

Deno.serve(app.fetch);