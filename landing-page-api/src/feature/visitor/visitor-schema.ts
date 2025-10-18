import { Schema, Model, model } from 'mongoose';
import { IVisitors } from './visitor-interface';

const visitorsSchema: Schema<IVisitors> = new Schema({

    visitorsReceived: {
        type: Number,
        required: true
    }
});

export const Visitors: Model<IVisitors> = model("Visitors", visitorsSchema);