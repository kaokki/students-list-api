import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir
// router.get('/', userController.index); // lista usuarios
// router.get('/:id', userController.show); // lista usuario

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

// index -> lista todos os usuarios -> GET
// store/create -> cria um novo usuarios -> POST
// delete -> apaga um usuarios -> DELETE
// show -> mostra um usuarios -> SHOW
// update -> atualiza um usuario -> PATCH ou PUT
