import { Router } from "express";
import { UserController } from "../controller/userController";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const router = Router();

const userController = new UserController();

router.get("/", userController.getAll);

router.post("/user", async (req, res) => {
  try {
    const { Name, Email } = req.body;

    let user = await prisma.user.findUnique({
        where: {
            ID: undefined
        }
    })

    if(user) {
        return res.json({ error: "Já existe um user com esse id"});
    }

    await prisma.user.create({
      data: {
        Name,
        Email,
      },
    });

    return res.json(user);
  } catch (error) {}
});

export { router };
