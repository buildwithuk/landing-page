import { Schema, Model, model } from 'mongoose';
import { IFeedback } from './feedback-interface';

const feedbackSchema: Schema<IFeedback> = new Schema({

    feedback: {
        type: String,
        required: false,
        maxLength: 100,
        trim: true
    },
    rating: {
        type: Number,
        required: false
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }

});

export const Feedback:Model<IFeedback> = model("Feedback", feedbackSchema);