import { Router } from "express";
import { importData } from "../services/import-service";

const routes = Router();

routes.get("/import", async (req, res) => {
  const { status, data } = await importData();
  res.status(status).send(data);
});

export default routes;
