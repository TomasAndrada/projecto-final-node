import express from "express";
import {join, __dirname} from "./utils/index.js";
import cors from 'cors';
import productsRouter from "./routes/products.routes.js";
import authRouter from "./routes/auth.routes.js";
import {authentication} from "./middlewares/authentication.js";
//settings
const app = express();
app.set("PORT", 8000);

const corsOptions = {
    origin: "*",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
};

// middlewares
app.use(express.json());
app.use(express.static(join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(cors(corsOptions))

//routes
app.use("/auth", authRouter);
app.use("/api/products", authentication, productsRouter);

// Middleware para manejar errores 404
app.use((req, res) => {
    res.status(404).send('Recurso no encontrado');
});

//listeners
app.listen(app.get("PORT"), () => {
    console.log(`Server on port http://localhost:${app.get("PORT")}`);
});
