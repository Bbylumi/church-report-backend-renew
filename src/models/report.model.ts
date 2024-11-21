import mongoose, { Schema, Document } from "mongoose";

export interface IReport extends Document {
    month: string;
    year: string
} 