import { Hono } from "hono";
import { Subscriber } from "../models/subscriber";

export const subscriber = new Hono();

subscriber.get("/", async (c) => {
  const subscribers = await Subscriber.findAll();

  return c.json(
    {
      data: subscribers,
    },
    200
  );
});

subscriber.get("/:id", async (c) => {
  const { id } = c.req.param();
  const subscriber = await Subscriber.findById(id);

  return c.json(
    {
      data: subscriber,
    },
    200
  );
});

subscriber.post("insertSub", async (c) => {
  try {
    const body = await c.req.json();
    const newSubscriber = await Subscriber.insertSubscriber(body);

    return c.json(
      {
        data: subscriber,
      },
      201
    );
  } catch (err) {
    console.error("❌ Fehler beim Einfügen:", err);
  }
});
