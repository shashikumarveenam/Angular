export class UserInterfaces {
    'name': string;
    'mobile': string;
}

export class CountryInterface {
    'country': string;
    'state': string;
    'city': string;
}
export class A {
    'name': string;
    'address': CityName[]
}
class CityName {
    'city': string
}

export interface eachUser {
    'userId': number | string;
    'id': number;
    'title': string;
    'body': string;
}

export interface userData {
    user_name: string;
}

export interface loginInterface {
    auth_id? : string;
    msg: string;
    status: number;
    userdata: userData;
    email: string;
}