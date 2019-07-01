
export default class Modal {
    constructor(options) {
        this.minLenPhone = options.minLenPhone;
        this.minLenPassword = options.minLenPassword;
        this.phoneChk = '';
        this.passwordChk = '';
        this.emailChk = '';
        this.phone = '';
        this.password = '';
        this.email = '';
        this.submitButtonDisabled = true;
    }

    setPhone(phone){
        this.phone = phone;
        this._checkPhone();
        this._setSubmitButton()
    }

    setEmail(email){
        this.email = email;
        this._checkEmail();
        this._setSubmitButton()
    }

    setPassword(password){
        this.password = password;
        this._checkPassword();
        this._setSubmitButton()
    }

    _checkPhone(){
        if (this.phone === '') {
            this.phoneChk = false;
            return false;
        }
        const pattern = new RegExp(`[0-9]{${this.minLenPhone},}`,'');
        this.phoneChk = pattern.test(this.phone);
        console.log('this.phoneChk', this.phoneChk);
    }

    _checkPassword(){
        if (this.password === '') {
            this.passwordChk = false;
            return false;
        }
        this.passwordChk = this.password.trim().length >= this.minLenPassword;
    }

    _checkEmail() {
        if (this.email === '') {
            this.emailChk = false;
            return false;
        }
        const pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.emailChk = pattern.test(this.email);
    }

    _setSubmitButton(){
        this.submitButtonDisabled = !(this.phoneChk && this.passwordChk && this.emailChk);
    }
}
