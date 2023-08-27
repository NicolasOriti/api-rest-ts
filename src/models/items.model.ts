import { Schema, Types, model, Model } from 'mongoose';
import { ICar } from './../interfaces/car.interface';

const ItemsSchema = new Schema<ICar>(
  {
    name: { type: String, required: true },
    color: { type: String, required: true },
    gas: { type: String, enum: ['Gasoline', 'Diesel', 'Electric', 'Hybrid'], required: true },
    year: { type: Number, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true, versionKey: false }
);

const ItemModel = model<ICar>('Items', ItemsSchema);

export default ItemModel;
