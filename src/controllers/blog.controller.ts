import { Response, Request } from 'express';
import { handleHttpError } from '../utils/error.handle';

// EL CONTROLADOR NO DEBE TENER LOGICA DE NEGOCIO
const getItems = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_ITEMS');
  }
};
const getItemById = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_ITEM_BY_ID');
  }
};
const createItem = (req: Request, res: Response) => {
  try {
    const { body } = req;

    res.json({ body });
  } catch (error) {
    handleHttpError(res, 'ERROR_CREATE_ITEM');
  }
};
const updateItem = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttpError(res, 'ERROR_UPDATE_ITEM');
  }
};
const deleteItem = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttpError(res, 'ERROR_DELETE_ITEM');
  }
};

export { getItemById, getItems, createItem, updateItem, deleteItem };
