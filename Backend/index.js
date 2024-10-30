require("dotenv").config();
const express = require('express');
const app = express();
const connectDb = require('./utils/db');
const userRouter = require('./Router/user');
const contactRouter = require('./Router/contact');
const cors = require('cors');
const serviceRouter = require("./Router/service");
const adminUserRouter = require("./Router/admin-user");
const adminContactRouter = require('./Router/admin-contact');

const controlCors = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH",
    credentials: true,
}
app.use(cors(controlCors));
app.use(express.json());

app.use("/api/user", userRouter);   
app.use("/api/form", contactRouter);
app.use("/api/services", serviceRouter);
app.use("/api/admin", adminUserRouter);
app.use("/api/admin", adminContactRouter);
const PORT = 5000;
connectDb().then(() => 
    app.listen(PORT, () => {
        console.log(`listening on http://localhost:${PORT}`);
    })
)