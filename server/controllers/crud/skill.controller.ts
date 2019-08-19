import { CrudController } from '../crud.controller'
import { skillService } from '../../services/index'


export class SkillController extends CrudController<typeof skillService>{
    constructor(){
        super(skillService);
    }
    
}