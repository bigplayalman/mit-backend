import { model, Schema, Document, SchemaTypes } from "mongoose";

interface Mitigation extends Document {
  mechanic: string;
  plan: string;
  actions: any[];
}

const MitigationSchema = new Schema({
  mechanic: {
    type: String,
  },
  plan: {
    type: String,
  },
  actions: {
    type: SchemaTypes.Mixed,
  },
});

const MitigationModel = model<Mitigation>("mitigation", MitigationSchema);

export { MitigationModel, Mitigation };