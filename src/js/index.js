import {url} from "./config";
import Beers from './models/Beers';
import LS from './models/LS';
import elements from "./views/base";
import {renderLoader, clearLoader} from "./views/loaderView";
import renderBeers from "./views/beersView";
import renderPages from './views/pagesView';
import {renderFavorites, clearFavorites} from "./views/favoritesView";

const state = {
    pages: {
        page: 1,
        amount: 6,
        lastPage: 1
    }
};

state.ls = new LS('beers');
state.controllers = {};

const dataController = () => {
    renderLoader(elements.loader);
    state.beers = new Beers(url);
    state.beers.getData()
        .then(() => {
            const len = state.beers.data.length;
            state.pages.lastPage = Math.ceil(len/state.pages.amount);

            //блок который отработает при перезагрузке, если location.hash есть
            const newPage = parseInt(location.hash.slice(1));
            //установка в state текущей страницы
            if ((newPage !== NaN) && (newPage >= 1) && (newPage <= state.pages.lastPage)){
                state.pages.page = newPage;
            }

            //добавление в state favorites из LocalStorage
            updateFavorites();

            clearLoader(elements.loader);
            renderBeers(state.beers.data, state.pages.page, state.pages.amount);
            renderPages(state.pages.page, state.pages.lastPage);
            renderFavorites(state.beers.data);

            //console.log(state.beers.data);
        })
        .catch(error => console.error('error fetching data', error));
};

dataController();

[elements.beers, elements.favorites].forEach(elem => {
    elem.addEventListener('click', e => {
        const target = e.target.closest('[data-favorites]');
        if (target !== null){
            const idFavorites = +target.dataset.favorites;

            state.ls.isIdInLocalStorage(idFavorites) ? state.ls.delFromLocalStorage(idFavorites): state.ls.addToLocalStorage(idFavorites);

            //добавление в state favorites из LocalStorage
            updateFavorites();
            renderBeers(state.beers.data, state.pages.page, state.pages.amount);
            renderFavorites(state.beers.data);
        }
    })
});

//событие на кнопки сортировок
elements.sort.addEventListener('click', e => {
    const target = e.target.closest('[data-sort_abv]') || e.target.closest('[data-sort_ibu]');
    if (target !== null) {
        const sort_abv = target.dataset.sort_abv;
        const sort_ibu = target.dataset.sort_ibu;

        if (sort_abv){
            state.beers.data.sort((a,b) => {
                return (sort_abv === 'up')
                ? b.abv - a.abv
                : a.abv - b.abv;
            });
        } else if (sort_ibu){
            state.beers.data.sort((a,b) => {
                return (sort_ibu === 'up')
                ? b.ibu - a.ibu
                : a.ibu - b.ibu
            });
        }

        renderBeers(state.beers.data, state.pages.page, state.pages.amount);
    }

});

//событие на кнопку очистка избранного
elements.favorites.addEventListener('click', e => {
    if (e.target.dataset.clear){
        clearFavorites();
        state.ls.delAllFromLocalStorage();
        state.beers.data.forEach(el => {
            el.favorites = false;
        });
        renderBeers(state.beers.data, state.pages.page, state.pages.amount);
    }
});

//Событие смена hash
window.addEventListener('hashchange', (e) => {
    const newPage = parseInt(location.hash.slice(1));
    if ((newPage !== NaN) && (newPage >= 1) && (newPage <= state.pages.lastPage)){
        state.pages.page = newPage;

        renderBeers(state.beers.data, newPage, state.pages.amount);
        renderPages(newPage, state.pages.lastPage);
        renderFavorites(state.beers.data);
    }
});

function updateFavorites(){
    if (state.ls.isBeersLocalStorage()){
        state.beers.data.forEach((el) => {
            if (state.ls.isIdInLocalStorage(el.id)) el.favorites = true;
            else el.favorites = false;
        });
    }
}
