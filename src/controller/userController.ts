import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class UserController {
    async getAll(req: Request, res: Response): Promise<Response> {
        const result = await prismaClient.user.findMany();

        return res.status(200).json({result: result})
    }
}