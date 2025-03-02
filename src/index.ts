import { PrismaClient } from "@prisma/client";
import express from "express";
const app = express();
const prismaClient = new PrismaClient();
app.listen(3000);

app.get("/", async (_, res) => {
  const users = await prismaClient.user.findMany();
  res.json({ message: "get endpoint", data: users });
});
app.post("/", async (_, res) => {
  await prismaClient.user.create({
    data: {
      username: Math.random().toString(),
      password: Math.random().toString(),
    },
  });
  res.json({ message: "post endpoint" });
});
