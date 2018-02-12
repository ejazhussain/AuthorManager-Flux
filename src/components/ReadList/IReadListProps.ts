import { Author } from "../../model/Author";


export interface IReadListProps {
    items: Author[]
    changeAppMode: (currentMode: string, ItemId: string) => void;
}