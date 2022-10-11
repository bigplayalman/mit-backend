import { CastingContext } from "csv-parse";

export const castData = (value: string, context: CastingContext) => {
  switch (context.column) {
    case "start":
      return value;
    default: {
      return value;
    }
  }
};
