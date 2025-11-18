enum Countries {
    Belgium,
    France
}

interface AddressInterface {
  street?: string,
  number?: string,
  zip: string,
  town: string,
  country: Countries,
}

// Partial
function updateAddress(address: AddressInterface, data: Partial<AddressInterface>) {
    return {
        ...address,
        ...data
    }
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

function createAddress(address: Required<AddressInterface>) {

}

createAddress({
    street: "",
    number: "",
    zip: "",
    town: "",
    country: Countries.Belgium
})

type ReadonlyAddress = Readonly<AddressInterface>;

const addr: ReadonlyAddress = {
    zip: "7000",
    town: "Mons",
    country: Countries.Belgium
};

type ReadOnlyArray = ReadonlyArray<number>;

let tableauLectureSeule: ReadOnlyArray = [11];

// (tableauLectureSeule as any).push()
// addr.number = "aa";

function updateAddress2(
    address: AddressInterface,
    data: Pick<AddressInterface, 'country' | 'street'>
) {

}

// updateAddress2({

// }, {
//     street: '',
//     country: ''
// })

// Omit

interface UserModelInterface2 {
    id: string,
    username: string,
    password: string
}

type UserModelCreate = Omit<UserModelInterface2, 'id'>;

function createUser(prop: UserModelCreate): UserModelInterface2 {
    return {
        id: Math.random().toString(),
        ...prop
    }
}

createUser({
    username: '',
    password: ''
})

// Record

type UnknownObject = {
    [key: string]: unknown
}

const objRecord : Record<string, unknown> = {};

objRecord['aa'] = 585;
objRecord['bb'] = 'test';

