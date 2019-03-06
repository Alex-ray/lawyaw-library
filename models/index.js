// Libs
import { types } from 'mobx-state-tree';
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
            const emptyFilters = self.filters.emptyFilters();

            // If no filters have been set, show all books.
            if (emptyFilters) return self.books;

            return self.books.filter((book) => {
                const matchesAuthor = self.filters.authorFilter(book.authorKey());
                const matchesGenre = self.filters.genreFilter(book.genreKey());

                // If no genre or author filters are set, show them all.
                if (self.filters.noGenreFilters() && self.filters.noAuthorFilters()) {
                    return true;
                }

                return (matchesAuthor || matchesGenre);
            });
        },
        searchFilteredBooks () {
            // We need to first filter books by genre and author 
            // so we can search within the genre and author subsets.
            // 
            // Using two filters here is not ideal and should be improved 
            return self.filteredBooks().filter((book) => {
                const valueString = book.searchValue();
                const matchesSearch = self.filters.searchFilter(valueString.toLowerCase());

                // If no search filter is present, show all books.
                if (self.filters.noSearchFilter()) return true;

                return matchesSearch;
            });
        },

        genreOptions () {
            const optionsDictionary = {};

            // This for loop and the for loop in authorOptions 
            // can and should be abstracted into one function
            self.books.forEach((book) => {
                var genreKey = book.genreKey();

                if (!optionsDictionary[genreKey]) {
                    optionsDictionary[genreKey] = {
                        value: genreKey,
                        label: book.formattedGenre(),
                        count: 1,
                        selected: self.filters.genreSelected(genreKey)
                    };
                } else {
                    optionsDictionary[genreKey].count++;
                }
            });

            return Object.values(optionsDictionary);
        },

        authorOptions() {
            const optionsDictionary = {};

            self.books.forEach((book) => {
                var authorKey = book.authorKey();
                if (!optionsDictionary[authorKey]) {
                    const label = book.formattedAuthor();
                    optionsDictionary[authorKey] = {
                        value: authorKey,
                        label: label,
                        count: 1,
                        selected: self.filters.authorSelected(authorKey)
                    };
                } else {
                    optionsDictionary[authorKey].count++;
                }
            });

            return Object.values(optionsDictionary);
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