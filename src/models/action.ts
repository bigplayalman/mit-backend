import { model, Schema, Document } from "mongoose";

interface Action extends Document {
  job: string;
  name: string;
  cooldown: number;
  duration: number;
  gcd: boolean;
  physicalReduction: number;
  magicalReduction: number;
}

const ActionSchema = new Schema({
  job: {
    type: String,
  },
  name: {
    type: String,
  },
  cooldown: {
    type: Number,
  },
  duration: {
    type: Number,
  },
  gcd: {
    type: Boolean,
  },
  physicalReduction: {
    type: Number
  },
  magicalReduction: {
    type: Number
  }
});

const ActionModel = model<Action>("action", ActionSchema);

export { ActionModel, Action };