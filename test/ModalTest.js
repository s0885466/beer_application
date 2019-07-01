var assert = require("assert");

function _checkPhone(phone, len){
    if (phone === '') {
        return false;
    }
    const pattern = new RegExp(`[0-9]{${len},}`,'');
    return pattern.test(phone);
}

describe('Тестирование _checkPhone', function(){

    it('_checkPhone(89110885466, 7)', function(){
        assert.equal(true, _checkPhone(89110885466, 7));
    });

    it('_checkPhone(891108, 7)', function(){
        assert.equal(false, _checkPhone(89110885, 7));
    });

    it('_checkPhone(fdfgfg, 7)', function(){
        assert.equal(false, _checkPhone('fdfgf',7));
    });

});