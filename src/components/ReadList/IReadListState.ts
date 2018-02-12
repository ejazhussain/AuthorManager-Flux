import { Author } from "../../model/Author";


export interface IReadListState {
    items?: Author[]    
    selectionDetails?: string;
}