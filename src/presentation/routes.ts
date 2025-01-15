import { Router } from 'express';
import { CustomerRouters } from './customers/routes';




export class AppRoutes {


  static get routes(): Router {

    const router = Router();
    
    router.use('/css', CustomerRouters.routes);



    return router;
  }


}

