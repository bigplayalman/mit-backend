import { parse } from "csv";
import fs from "fs";
import { finished } from "stream/promises";

import { castData } from "../utility/castData";

export const importCSV = async (filename: string) => {
  const records: any[] = [];
  const parser = fs.createReadStream(__dirname + `/../imports/${filename}.csv`).pipe(
    parse({
      cast: castData,
      columns: true,
    })
  );
  parser.on("error", () => {
    console.log("Issue on importCSV");
  });
  parser.on("readable", () => {
    let record;
    while ((record = parser.read()) !== null) {
      const copy: any = {};
      for (const prop in record) {
        if (record[prop]) {
          copy[prop] = record[prop];
        }
      }
      records.push(copy);
    }
  });
  await finished(parser);
  return records;
}