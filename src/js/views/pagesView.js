import elements from "./base";

const renderPages = (page, lastPage) => {
    const html = `
        ${page > 1 
        ? `<a href="#${page - 1}" class="col-3 badge badge-light p-2">Назад</a>` 
        : `<div class="col-3"> </div>`}
        <div class="col-6 text-center">Страница ${page}(${lastPage})</div>
        ${page < lastPage ? `<a href="#${page + 1}" class="col-3 badge badge-light p-2 ">Вперед</a>` : ''}
    `;
    elements.pages.innerHTML = html;
};

export default renderPages;