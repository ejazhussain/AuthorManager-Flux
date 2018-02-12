export interface IAuthor {
  id: string;
  firstName: string;
  lastName: string;
}

export class Author implements IAuthor {
  /**
   *
   */
  id: string;
  firstName: string;
  lastName: string;

  constructor() {
    this.id = ""
    this.firstName = ""
    this.lastName = ""
  }
}
