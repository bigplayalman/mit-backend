import "./db";
import express from "express";
import appRoutes from "./routes/routes";

const app = express();
app.disable("x-powered-by");
const port = process.env.PORT || 9001;
const rootPath = process.env.ROOT_PATH || '/';
app.use(express.json());
app.use(rootPath, appRoutes);

app.listen(port, () => {
  console.log(`App listening at http://localhost`);
});
