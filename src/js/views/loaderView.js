import elements from "./base";

export const renderLoader = parent => {
    const loader = `
            <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
                <span class="sr-only"></span>
            </div>
    `;
    parent.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = (parent) => {
    parent.innerHTML = '';
};
