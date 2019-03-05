import { types } from 'mobx-state-tree';

const Book = types.model({
    "Title": types.string,
    "Author": types.string,
    "Genre": types.string,
    "Height": types.number,
    "Publisher": types.string
}).views(self => ({
    searchValue() {
        return (`
            ${self.Title} 
            ${self.Author} 
            ${self.Genre} 
            ${self.Height} 
            ${self.Publisher}`);
    }
}));

export default Book;