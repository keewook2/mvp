import express, { Request, Response } from 'express';
const router = express.Router();

const app = express();

router.get('/', (req: Request, res: Response) => {
  res.send('hi');
});

module.exports = router;