
import Dispatcher from "../Dispatcher/Dispatcher";

import { Author } from "../model/Author";
import { AuthorAPI } from "../api/AuthorAPI";
import { ActionTypes } from "../constants/actionTypes";



class AuthorActions {

    private AuthorService: AuthorAPI;
    constructor() {
        this.AuthorService = new AuthorAPI();
    }

   
    updateAuthor(author: Author) {
        

         this.AuthorService.saveAuthor(author).then((item) => {      
             debugger; 
            Dispatcher.dispatch({
                actionType: ActionTypes.UPDATE_AUTHOR,
                author: item
            });              
         });        
        
    }
}

export default new AuthorActions();
