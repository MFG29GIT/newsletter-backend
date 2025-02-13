import { Hono } from "hono";
import { Newsletter } from "../models/newsletter";

export const newsletter = new Hono();

newsletter.get("/", async (c) => {
  const newsletters = await Newsletter.findAll();

  return c.json(
    {
      data: newsletters,
    },
    200
  );
});

newsletter.get("/:id", async (c) => {
  const { id } = c.req.param();
  const newsletter = await Newsletter.findById(id);

  return c.json(
    {
      data: newsletter,
    },
    200
  );
});
