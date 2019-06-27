import elements from "./base";

const renderSome = (someChk) => {
    const html = (someChk === true )
        ? `<h3><i class="far fa-smile"></i></h3>`
        : (someChk === false )
        ? `<h3><i class="far fa-frown"></i></h3>`
        : `<h3><i class="fas fa-pen"></i></h3>`;
    return html;
};

export const renderPhone = ({phoneChk}) => {
    const html = renderSome(phoneChk);
    elements.checkPhone.innerHTML = html;
};

export const renderPassword = ({passwordChk}) => {
    const html = renderSome(passwordChk);
    elements.checkPassword.innerHTML = html;
};

export const renderEmail = ({emailChk}) => {
    const html = renderSome(emailChk);
    elements.checkEmail.innerHTML = html;
};

export const renderSubmit = ({submitButtonDisabled}) => {
    console.log('Проверяем кнопку', submitButtonDisabled);

    elements.btnSubmit.disabled = submitButtonDisabled;
};

