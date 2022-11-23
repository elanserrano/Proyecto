// Importando el Router de Express
import { Router } from 'express';
// Importando el controlador
import homeController from './homeController';
// Creando instancia del enrutador
const router = new Router();

// Enrutamos
// Get '/'
// Get '/home'
// Get '/index'
router.get(['/', '/home', '/index'], homeController.home);

// Get '/about
router.get(['/about'], homeController.about);
// Get Citas
router.get(['/Citas'], homeController.Citas);
// Get Servicios
router.get(['/Servicios'], homeController.Servicios);
// Get Accesar
// router.get(['/Accesar'], homeController.Accesar);
// Get Registrarse
// router.get(['/Registro'], homeController.Registro);

// Exporto este tramo de ruta
export default router;
