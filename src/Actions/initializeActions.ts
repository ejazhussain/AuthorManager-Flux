
import Dispatcher from "../Dispatcher/Dispatcher";
import { Author } from "../model/Author";
import { AuthorAPI } from "../api/AuthorAPI";
import { ActionTypes } from './../constants/actionTypes';
import { authors } from './../api/AuthorAPI';

class InitializeActions {

    private AuthorService: AuthorAPI;
    constructor() {
        this.AuthorService = new AuthorAPI();
    }
    public initApp() {
        const authors = this.AuthorService.getAllAuthors();       
        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALIZE,
            initialData: {
                authors
            }
        });
    }
};

export default new InitializeActions();
