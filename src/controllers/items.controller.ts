import { Response, Request } from 'express';
import { handleHttpError } from '../utils/error.handle';
import {
  createItemService,
  deleteItemService,
  getItemByIdService,
  getItemsService,
  updateItemService,
} from '../services/items.service';

// EL CONTROLADOR NO DEBE TENER LOGICA DE NEGOCIO
const getItems = async (req: Request, res: Response) => {
  try {
    const responseItems = await getItemsService();
    res.json({
      message: 'Items found',
      result: responseItems,
    });
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_ITEMS');
  }
};
const getItemById = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const responseItem = getItemByIdService(id);
    res.json({
      message: 'Item found',
      result: responseItem,
    });
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_ITEM_BY_ID');
  }
};
const createItem = async (req: Request, res: Response) => {
  try {
    const { body } = req;

    const responseItem = await createItemService(body);

    res.json({
      message: 'Item created',
      result: responseItem,
    });
  } catch (error) {
    handleHttpError(res, 'ERROR_CREATE_ITEM', error);
  }
};
const updateItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const responseItem = await updateItemService(id, body);
    res.json({
      message: 'Item updated',
      result: responseItem,
    });
  } catch (error) {
    handleHttpError(res, 'ERROR_UPDATE_ITEM');
  }
};
const deleteItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const responseItem = await deleteItemService(id);
    res.json({
      message: 'Item deleted',
      result: responseItem,
    });
  } catch (error) {
    handleHttpError(res, 'ERROR_DELETE_ITEM');
  }
};

export { getItemById, getItems, createItem, updateItem, deleteItem };
