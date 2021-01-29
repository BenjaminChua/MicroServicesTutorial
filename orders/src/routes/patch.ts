import express, { Request, Response } from 'express';
import {
  NotAuthorisedError,
  NotFoundError,
  requireAuth,
} from '@bc_tickets/common';
import { Order, OrderStatus } from '../models/order';

const router = express.Router();

router.patch(
  '/api/orders/:orderId',
  requireAuth,
  async (req: Request, res: Response) => {
    const { orderId } = req.params;

    const order = await Order.findById(orderId);

    if (!order) {
      throw new NotFoundError();
    }

    if (order.userId !== req.currentUser!.id) {
      throw new NotAuthorisedError();
    }

    order.status = OrderStatus.Cancelled;
    await order.save();

    // publishing an order cancelled event

    res.send(order);
  }
);

export { router as deleteOrderRouter };
