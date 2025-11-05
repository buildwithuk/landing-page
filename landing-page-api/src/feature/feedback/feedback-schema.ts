import { Schema, Model, model } from 'mongoose';
import { IFeedback } from './feedback-interface';

const feedbackSchema: Schema<IFeedback> = new Schema({

    feedback: {
        type: String,
        required: true,
        maxLength: 100,
        trim: true
    },
    rating: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }

});

export const Feedback:Model<IFeedback> = model("Feedback", feedbackSchema);