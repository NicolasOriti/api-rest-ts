import ItemModel from '../models/items.model';
import { ICar } from './../interfaces/car.interface';

const getItemsService = async () => {
  const responseItem = await ItemModel.find({});
  return responseItem;
};

const getItemByIdService = async (id: string) => {
  const responseItem = await ItemModel.findOne({ _id: id });
  return responseItem;
};

const createItemService = async (item: ICar) => {
  const responseItem = await ItemModel.create(item);
  return responseItem;
};

const updateItemService = async (id: string, data: ICar) => {
  const responseItem = await ItemModel.findOneAndUpdate({ _id: id }, data, { new: true });
  return responseItem;
};

const deleteItemService = async (id: string) => {
  const responseItem = await ItemModel.findOneAndDelete({ _id: id });
  return responseItem;
};

export {
  getItemsService,
  getItemByIdService,
  createItemService,
  updateItemService,
  deleteItemService,
};
