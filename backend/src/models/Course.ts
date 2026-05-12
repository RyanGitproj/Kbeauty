/**
 * Propriété exclusive de RAKOTOAHIJOHN Tsioritiana Ryan - Tous droits réservés
 */
import mongoose, { Schema, Document } from 'mongoose';

export interface ICourse extends Document {
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  duration: string;
  image: string;
  category: string;
  features: string[];
  rating: number;
  reviews: number;
  available: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const CourseSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true,
      min: 0
    },
    originalPrice: {
      type: Number,
      min: 0
    },
    duration: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    features: [{
      type: String
    }],
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5
    },
    reviews: {
      type: Number,
      default: 0
    },
    available: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model<ICourse>('Course', CourseSchema);
