import { model, Schema, Document } from "mongoose";

interface Mechanic extends Document {
  start: Number;
  end: Number;
  step: number;
  name: string;
  boss: string;
  damageType: string;
  damageActor: string;
}

const MechanicSchema = new Schema({
  start: {
    type: Number,
  },
  end: {
    type: Number,
  },
  step: {
    type: Number,
  },
  name: {
    type: String,
  },
  boss: {
    type: String,
  },
  damageType: {
    type: String,
  },
  damageActor: {
    type: String,
  },
});

const MechanicModel = model<Mechanic>("mechanic", MechanicSchema);

export { MechanicModel, Mechanic };