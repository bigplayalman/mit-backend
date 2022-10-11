import { model, Schema, Document, SchemaTypes } from "mongoose";

interface Plan extends Document {
  name: string;
  mechanics: any[];
  mitigations: any[];
  party: string[];
}

const PlanSchema = new Schema({
  name: {
    type: String,
  },
  mechanics: {
    type: SchemaTypes.Mixed,
  },
  mitigactions: {
    type: SchemaTypes.Mixed,
  },
});

const PlanModel = model<Plan>("plan", PlanSchema);

export { PlanModel, Plan };