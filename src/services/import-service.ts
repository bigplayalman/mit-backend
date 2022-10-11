import { Mechanic, MechanicModel } from "../models/mechanic";
import { importCSV } from "../utility/importCSV";

const mapMechanicRecords = (doc: any) => {
  return {
    updateOne: {
      filter: { step: doc.step },
      update: doc,
      upsert: true,
    },
  };
}

export const importData = async () => {
  const tables = [
    {table: "mitigation", boss: "Hephaistos Part 1", file: 'p8s-part1'}
  ];
  const imported: string[] = [];
  try {
    for (const duty of tables) {
      const records: any[] = await importCSV(duty.file);
      const updates: any[] = records.map((doc: Mechanic) => mapMechanicRecords(doc));
      await MechanicModel.bulkWrite(updates);
      imported.push(duty.boss);
    }

    return {
      status: 200,
      data: { status: "complete", imported },
    };
  } catch (error) {
    return {
      status: 500,
      data: { error: JSON.stringify(error) },
    };
  }
};
