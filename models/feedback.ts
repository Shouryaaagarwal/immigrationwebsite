import mongoose, { Document, Schema } from 'mongoose';

export interface IFeedback extends Document {
  rating: number;               // Star count
  testimonial?: string;
  userId: mongoose.Schema.Types.ObjectId;
  createdAt: Date;
  name: string;                // New field
  description: string;         // New field
}

const FeedbackSchema: Schema = new Schema({
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  testimonial: {
    type: String,
    required: false
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.Feedback || mongoose.model<IFeedback>('Feedback', FeedbackSchema);
