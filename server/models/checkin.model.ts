import * as mongoose from 'mongoose';
import { BaseModel } from './base.model';
import { StudentModel, ClassModel, CourseModel } from '.';

const Schema = mongoose.Schema;

export type CheckinModel = BaseModel & {
    checkinAt: Date
    student: string | StudentModel
    class: string | ClassModel
    course: string | CourseModel
}

const checkinSchema = new Schema({
    checkinAt: { type: Date, required: true },
    student: { type: Schema.Types.ObjectId, ref: "Student" },
    class: { type: Schema.Types.ObjectId, ref: "Class" },
    course: { type: Schema.Types.ObjectId, ref: "Course" },
    status: { type: String, enum: ["active", "deactive"], default: "active" }
}, { timestamps: true })

export let Checkin: mongoose.Model<CheckinModel> = mongoose.model('Checkin', checkinSchema);


