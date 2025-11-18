"use strict";
var Countries;
(function (Countries) {
    Countries[Countries["Belgium"] = 0] = "Belgium";
    Countries[Countries["France"] = 1] = "France";
})(Countries || (Countries = {}));
// Partial
function updateAddress(address, data) {
    return {
        ...address,
        ...data
    };
}
const address = {
    street: 'street',
    number: '14',
    zip: "Amaury",
    town: "Mons",
    country: Countries.Belgium
};
console.log("Old address", address);
const newAddress = updateAddress(address, {
    street: "Rue des capucins",
    zip: "newZip"
});
console.log("Updated address", newAddress);
