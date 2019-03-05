// Libs
import { types, applySnapshot } from 'mobx-state-tree';
import deepmerge from 'deepmerge';

// Models
import FiltersModel from '~/models/filters.js';
import BookModel from '~/models/book.js';

// Data
import books from '~/data/books.json';

let Store = null;

const initalState = {
    books: books,
    filters: {
        search: '',
        genres: [],
        authors: []
    }
};

const store = types
    .model({
        filters: FiltersModel,
        books: types.array(BookModel)
    }).views(self => ({
        filteredBooks () {
            return self.books.filter((book) => {
                const valueString = book.searchValue();

                return (
                    self.filters.searchFilter(valueString.toLowerCase()) ||
                    self.filters.genreFilter(book.Genre.toLowerCase()) ||
                    self.filters.authorFilter(book.Author.toLowerCase())
                );
            });
        }
    }));

export function initializeStore(isServer, state = {}) {
    const initialStoreState = deepmerge(initalState, state);

    if (isServer) {
        Store = store.create(initialStoreState);
    }

    if (Store === null) {
        Store = store.create(initialStoreState);
    }

    return Store;
}