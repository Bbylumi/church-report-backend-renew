import { Request, Response } from "express";
import monetaryService from "../services/monetary.service";

class MonetaryController{
    async createMonetary(req: Request, res: Response): Promise <void> {
        try{
            const monetary = await monetaryService.createMonetary(req.body);
            res.status(201).json(monetary)
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message)
                res.status(500).json({ message: "An error occur while Creating Monetary Report" })
            }
        }
    }


    async getMonetary(_req: Request, res: Response): Promise<void>{
        try{
            const monetary = await monetaryService.getMonetary();
            res.json(monetary);
        } catch (error){
            console.error(error);
            res.status(500).json({ messgae: "AN error occured while Fecthing the Monetary Report" })
        }
    }

    async getMonetaryById(req: Request, res: Response): Promise<void>{
        try{
            const monetary = await monetaryService.getMonetaryById(req.params.id);
            if (monetary) {
                res.json(monetary);
            } else{
                res.status(404).json({meassage: "Monetary Report not Found"});
            }
        } catch (error){
            console.error(error)
            res.status(500).json({message: "An error occured while fecthing the data"})
        }
    }


    async updateMonetary( req: Request, res: Response): Promise<void>{
        try{
            const monetary = await monetaryService.updateMonetary(req.params.id, req.body);
            if (monetary) {
                res.json({message: "Monetary Report updated Successfully", data: monetary});
            } else{
                res.status(404).json({message: "Monetary Not Found"});
            }
        } catch (error){
            console.error(error)
            res.status(500).json({messgae: "An error Occured while trying to Update the data"})
        }
    }


    async deleteMonetary( req: Request, res: Response): Promise<void>{
        try{
            const monetary = await monetaryService.deleteMonetary(req.params.id);
            if (monetary) {
                res.json({message: "Monetary Report Deleted Successfully", data: monetary});
            } else{
                res.status(404).json({message:"Monetary Report not Found" })
            }
        } catch (error) {
            console.error(error)
            res.status(500).json({message: "An error occured while trying to delete the data"})
        }
    }
}

export default new MonetaryController();