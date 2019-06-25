import elements from "./base";

const renderFavorite = (beer) => {
    const {id, name} = beer;
    return `
            <li class="list-group-item">
                ${name} <h6 class="float-right text-secondary">
                <i data-favorites="${id}" class="fas fa-trash-alt" style="cursor: pointer"></i></h6>
            </li>
    `;
};

const btnClearFavorites = () => {
  return `
        <button data-clear="clear" class="btn btn-secondary btn-block">
        Очистить все</i>
        </button>
  `;
};

export const clearFavorites = () => {
    elements.favorites.innerHTML = '';
};

export const renderFavorites = (beers) => {
    clearFavorites();
    beers = beers.filter(el => el.favorites);
    let html = beers.map((beer) => renderFavorite(beer)).join('');

    if (beers.length){
        html += btnClearFavorites();
    }

    elements.favorites.insertAdjacentHTML('beforeend', html);

};

