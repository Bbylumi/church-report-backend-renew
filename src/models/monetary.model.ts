 import mongoose, { Schema, Document  } from "mongoose";


 export interface Ipercentage{
    level: String;
    amount: number;
 }

 export interface Imonetary extends Document {
    name: String;
    date: String;
    percentages:  Ipercentage[];
 }

 const percentageSchema: Schema = new Schema({
    level: {type: String, required: true},
    amount: { type: Number, required: true, min: 0},    
 });

 const monetarySchema: Schema = new Schema({
    name: {type: String, required: true},
    date: {type: String, required: true },
    percentages: {type: [percentageSchema], required: true}     
});


export default mongoose.model<Imonetary>("monetary", monetarySchema)