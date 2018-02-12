

import { IAuthorAPI } from '../api/IAuthorAPI'
import { Author } from './../model/Author';

const _ = require('lodash');

export let authors: Author[] = [
    {
        id: "1",
        firstName: 'Cory',
        lastName: 'House'
    },
    {
        id: "2",
        firstName: 'Scott',
        lastName: 'Allen'
    },
    {
        id: "3",
        firstName: 'Dan',
        lastName: 'Wahlin'
    }

]


export class AuthorAPI implements IAuthorAPI {


    public getAllAuthors() {
        let output: Array<Author> = authors;
        return output;        
    }
    public getAuthorById(itemId: string): Promise<Author> {
        return new Promise<Author>((resolve, reject) => {

            let output: Author = _.find(authors, { id: itemId });

            // let output: any = authors.filter((Item: Author, index: number) => {                               
            //     return (
            //          itemId == Item.id                    
            //     );
            // });            
            resolve(output);
        });
    }
    public saveAuthor(author: Author): Promise<Author> {
        return new Promise<Author>((resolve, reject) => {
            //pretend an ajax call to web api is made here
            console.log('Pretend this just saved the author to the DB via AJAX call...');
            var existingAuthorIndex = _.indexOf(authors, _.find(authors, {id: author.id})); 
			authors.splice(existingAuthorIndex, 1, author);
            let output: Author = author;
            // let output: any = authors.filter((Item: Author, index: number) => {                               
            //     return (
            //          itemId == Item.id                    
            //     );
            // });            
            resolve(output);
        });
    }

    public removeAuthor(itemId:string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
         
          
            console.log('Pretend this just deleted the author from the DB via an AJAX call...');
            _.remove(authors, { id: itemId});

            resolve("Author of ID " + itemId + "  has been removed");
        });
    }


    //     //This would be performed on the server in a real app. Just stubbing in.
    // public _generateId(author) {
    // 	return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase();
    // };
    public _clone(author:Author) {
        return JSON.parse(JSON.stringify(author)); //return cloned copy so that the item is passed by value instead of by reference
    };



}






