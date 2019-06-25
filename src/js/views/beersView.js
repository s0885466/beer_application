import elements from "./base";

const renderBeer = (beer) => {
    const {id, image_url, name, contributed_by,
        first_brewed, ibu, abv, description} = beer;
    return `
        <div class="col-md-4 col-sm-6 card border-light" style="width:18rem;">
            <div class="container mt-3">
                <div class="row">
                    <div class="col-md-4"></div>
                    <div class="col-md-4" style="display:flex; align-items: flex-end;">
                        <img src="${image_url}" class="card-img-top" alt="${name}" style="width: 70%; height: auto">
                    </div>
                    <div class="col-md-4"></div>
                </div>
            </div>
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <ul class="list-group">
                    <li class="list-group-item">Поставщик: ${contributed_by}</li>
                    <li class="list-group-item">Впервые сварено: ${first_brewed}</li>
                    <li class="list-group-item">Горечь IBU: ${ibu}</li>
                    <li class="list-group-item">Алкоголь ${abv}%</li>
                </ul>
                <h6 class="mt-2">Описание</h6>
                <div class="overflow-auto" style="max-height: 150px">
                    <p class="card-text p-2">${description}</p>
                </div>
                <button data-favorites ="${id}" class="btn btn-block btn btn-secondary">
                ${(!beer.favorites)
                    ?'<i class="far fa-heart"></i>'
                    :'<i class="fas fa-heart"></i>'}
                В избранное</button>
            </div>
        </div>
        `
    };

const clearBeers = () => {
    elements.beers.innerHTML = '';
};

const renderBeers = (beers, page = 1, amount = 6) => {
    clearBeers();
    //сортируем массив в зависимости от страницы и количества
    const firstIndex = (page - 1) * amount;
    const lastIndex = page * amount - 1;
    beers = beers.slice(firstIndex, lastIndex + 1);

    const html = beers.map(beer => renderBeer(beer)).join('');
    elements.beers.insertAdjacentHTML('beforeend', html);
};

export default renderBeers;


