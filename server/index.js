import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import DalleRoutes from "./routes/dalle.routes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use("/api/v1/dalle", DalleRoutes);

app.listen(port, () => console.log(`Server has started on port ${port}`));
