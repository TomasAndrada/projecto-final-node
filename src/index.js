import express from "express";
import {join, __dirname} from "./utils/index.js";
import cors from 'cors';
import productsRouter from "./routes/products.route.js";
//settings
const app = express();
app.set("PORT", 8000);

// middlewares
app.use(express.json());
app.use(express.static(join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(cors())

//routes
app.use("/api/products", productsRouter);

// // Middleware para manejar errores 404
// app.use((req, res, next) => {
//   res.status(404).send('Recurso no encontrado');
// });

//listeners
app.listen(app.get("PORT"), () => {
    console.log(`Server on port http://localhost:${app.get("PORT")}`);
});
