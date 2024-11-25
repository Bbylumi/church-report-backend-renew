import Monetary, {Imonetary} from "../models/monetary.model"

export class monetaryRepository{

    async create( monetaryData: Partial<Imonetary>): Promise<Imonetary>{
        const monetary = new Monetary( monetaryData );
        return await monetary.save();
    }

    async findAll(): Promise<Imonetary[]>{
        return Monetary.find();
    }

    async findById(MonetaryId: String): Promise<Imonetary | null>{
        return Monetary.findById(MonetaryId)
    }
    
    async update(MonetaryId: string, updateData: Partial<Imonetary>): Promise<Imonetary | null>{
        return Monetary.findByIdAndUpdate(MonetaryId, updateData, {new: true});
    }

    async delete(MonetaryId: string): Promise<Imonetary | null>{
        return Monetary.findByIdAndDelete(MonetaryId)
    }
}