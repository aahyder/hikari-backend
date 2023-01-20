import express from 'express';

const indexRouter = express.Router();

indexRouter.post('/create-customer', (req, res) =>
  res.status(201).json({ message: 'Create Customer Successful!' })
);

indexRouter.get('/', (req, res) =>
    res.status(200).json({ message: 'Hikari API Running!' })
);

export default indexRouter;
