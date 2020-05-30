export interface IUser {
    id: number,
    name: string,
    username: string,
    email: string,
    address: address,
    phone: string,
    website: string,
    company: company,
}

export interface address {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
}

export interface company {
    name: string,
    catchPhrase: string,
    bs: string,
}