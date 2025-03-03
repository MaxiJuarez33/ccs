import { Router } from 'express';
import { CustomerRouters } from './customers/routes';
import { TimeSlotRoutes } from './time-slot/routes';
import { WashTypesRoutes } from './wash-types/routes';




export class AppRoutes {


  static get routes(): Router {

    const router = Router();
    
    router.use('/ccs', CustomerRouters.routes); // For user, funciona todo
    router.use('/ccs/dashboard', TimeSlotRoutes.routes); // For admin, funciona todo
    router.use('/ccs/dashboard', WashTypesRoutes.routes); // For admin, funciona todo



    return router;
  }


}

