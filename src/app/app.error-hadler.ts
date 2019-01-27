import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export class ErrorHandler {

    static handlerError(error : Response | any){
        let erroMessage : string;

        if(error instanceof Response){
            erroMessage = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`
        }else{
            erroMessage = error.toString();
        }

        console.log(erroMessage);
        return Observable.throw(erroMessage);
    }
}
