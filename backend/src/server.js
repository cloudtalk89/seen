import express from 'express';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config(); 
const app = express();  
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
app.use(express.static(path.join(__dirname, '../frontend/dist')));
app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
}
)

}

