import dotenv from 'dotenv';
import express from 'express';
import connectDB1 from './db/index.js';

dotenv.config({
    path: './.env',  // Corrected the path
});

const app = express();

connectDB1()

.then(() => {
    app.listen(process.env.PORT || 3000, () =>{
         console.log(`Server is running at port : ${process.env.PORT}`);
    })
        
    
})
.catch((err) => {
    console.log("MONGO Db connection failed !!!", err);
})



