import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import { authRouter } from './modules/auth';

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());

app.use('/auth', authRouter);

app.listen(PORT, () => {
  process.stdout.write(`[LOG] Running on ...:${PORT}\n`);
});
