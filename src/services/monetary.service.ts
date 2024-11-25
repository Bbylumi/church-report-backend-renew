import Monetary, { Imonetary } from "../models/monetary.model"
import { createMonetaryDTO, updateMonetaryDTO } from "../dtos/monetary.dtos"

class MonetaryService {
    async generateReport(name: string, date: string) {
        return await Monetary.find({
            name: name,
            date: new Date(date)
        });
    }


    async createMonetary( data: createMonetaryDTO): Promise<Imonetary>{
        const monetary = new Monetary( data );
        return await monetary.save();
    }

    async getMonetary(): Promise<Imonetary[]>{
        return await Monetary.find();
    }

    async getMonetaryById(id: String): Promise<Imonetary | null>{
        return await Monetary.findById(id);
    }

    async updateMonetary(id: string, data: updateMonetaryDTO): Promise<Imonetary | null>{
        return await Monetary.findByIdAndUpdate(id, data, {new: true });
    }

    async deleteMonetary(id: String): Promise<Imonetary | null>{
        return await Monetary.findByIdAndDelete(id);
    }
}

export default new MonetaryService();