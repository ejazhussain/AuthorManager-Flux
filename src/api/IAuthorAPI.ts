
import { Author } from '../model';

export interface IAuthorAPI {
    getAllAuthors();
    getAuthorById(itemId: string): Promise<Author>;
    saveAuthor(author: Author);
    removeAuthor(itemId:string);
    _clone(author:Author);
}