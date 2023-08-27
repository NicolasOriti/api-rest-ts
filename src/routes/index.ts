import { Router } from 'express';
import { readdirSync } from 'fs';

import itemRouter from './items.routes';

const PATH_ROTUER = `${__dirname}`;
const router = Router();

const cleanFileName = (fileName: string) => {
  const file = fileName.split('.')[0];
  return file;
};

// Carga de rutas dinamicamente
readdirSync(PATH_ROTUER).filter((fileName) => {
  if (fileName === 'index.ts') return false;
  const cleanName = cleanFileName(fileName);

  import(`./${fileName}`).then((module) => {
    router.use(`/${cleanName}`, module.default);
  });
});

// router.use('/items', itemRouter);

export default router;
