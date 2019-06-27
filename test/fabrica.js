//CarMaker - родительский конструктор
//factory() - статический метод
// Carmarker.Compact
// Carmarker.SUV
//Carmarker.Convertible

var corolla = CarMarker.factory('Compact');
var solstice = CarMarker.factory('Convertible');
var cherokee = CarMarker.factory('SUV');

corolla.drive(); // Vroom I have 4 doors
solstice.drive(); // Vroom I have 2 doors
cherokee.drive(); // Vroom I have 24 doors

function CarMaker() {

}

CarMaker.prototype.drive = function () {
  return `Vroom I have ${this.doors} doors`
};

CarMaker.factory = function (type) {
    var constr = type,
        newcar;
    if(typeof CarMaker[constr] !== "function"){
        throw {
            name: 'Error',
            message: `${constr} doesnt exist`
        }
    }

    if (typeof CarMaker[constr].prototype.drive !== 'function') {
        CarMaker[constr].prototype = new CarMaker();
    }

};