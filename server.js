const express = require('express');
const authRouter = require('./router/auth-router');
const contactRouter = require('./router/contact-router');
const adminRouter = require('./router/admin-router');
const errorMiddleware = require('./middlewares/error-middleware');
const connectDB = require('./utils/db');
const cors = require('cors')
const app = express();
const PORT = 8080;


require('dotenv').config();
app.use(express.json());
app.use(cors());



app.use('/api/auth', authRouter);
app.use('/api/form', contactRouter);
//lets define admin routes

app.use('/api/admin', adminRouter);
app.use(errorMiddleware);

connectDB().then(() => {
   console.log("Database connected");
});

app.listen(PORT, () => {
      console.log(`server listening on http://localhost:${PORT}`);
   })
