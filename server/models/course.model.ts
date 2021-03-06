import * as mongoose from 'mongoose';
import { BaseModel } from './base.model';

const Schema = mongoose.Schema;

export type CourseModel = BaseModel & {
    name: string
    slug: string
    shortDescription: string
    description: string
    metaTitle: string
    metaDescription: string
    thumb: string
    benefits: string[]
    quantity: number
    pricePerMonth?: number
    currentStudentAmount: number
    color: string
}

const courseSchema = new Schema({
    name: { type: String, required: true },
    slug: { type: String, unique: true },
    quantity: { type: Number, default: 0 },
    pricePerMonth: { type: Number, default: 0 },
    currentStudentAmount: { type: Number, default: 0 },
    shortDescription: { type: String },
    description: { type: String },
    metaTitle: { type: String },
    metaDescription: { type: String },
    thumb: { type: String },
    benefits: { type: [{ type: String }], default: [] },
    color: { type: String },
    status: { type: String, enum: ["active", "deactive"], default: "active" }
}, { timestamps: true })

export let Course: mongoose.Model<CourseModel> = mongoose.model('Course', courseSchema);


