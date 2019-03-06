import { types } from 'mobx-state-tree';
import { capitalize } from '~/utils/strings';

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
            ${self.formattedAuthor()} 
            ${self.formattedGenre()} 
            ${self.Height} 
            ${self.Publisher}`);
    },
    formattedGenre() {
        let formattedGenre = self.Genre;

        if (!self.Genre || self.Genre.length === 0) {
            formattedGenre = 'Unkown';
        }

        if (self.Genre.indexOf('_') !== -1) {
            const genreArray = self.Genre.split('_');
            const capitalizedGenreArray = genreArray.map(s => capitalize(s));
            formattedGenre = capitalizedGenreArray.join(' ');
        } else {
            formattedGenre = capitalize(formattedGenre);
        }

        return formattedGenre;
    },
    formattedAuthor() {
        let formattedAuthor = self.Author;

        if (!self.Author || self.Author.length === 0) {
            formattedAuthor = 'Unkown';
        }

        if (self.Author.indexOf(',') !== -1) {
            const authorArray = self.Author.split(',');
            formattedAuthor = `${authorArray[1]} ${authorArray[0]}`;
        }

        return formattedAuthor;
    },
    authorKey() {
        return self.Author.toLowerCase().trim().replace('', '-');
    },
    genreKey() {
        return self.Genre.toLowerCase().trim();
    }
}));

export default Book;