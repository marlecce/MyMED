import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/api/facility/:facilityId', async (req: Request, res: Response) => {
    res.status(200).send({id : 1})
});

export { router as showFacilityRouter };