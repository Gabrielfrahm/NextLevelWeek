import Knex from '../database/connection';
import {Request, Response} from 'express';

class  ItemsController {
    async index(req : Request , res : Response){
        const items = await Knex('items').select('*');
        const serializadeItems = items.map(item =>{ 
            return { 
                id : item.id,
                title : item.title,
                image_url: `http://192.168.0.106:3333/uploads/${item.image}`,
            };
        });
     
        return res.json(serializadeItems);
    }
}
export default ItemsController;