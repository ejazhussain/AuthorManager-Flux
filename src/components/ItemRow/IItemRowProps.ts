import { Author } from "../../model/Author";

 export interface IItemRowProps {
    item: Author
    changeAppMode: (currentMode: string, itemId: string) => void;
}