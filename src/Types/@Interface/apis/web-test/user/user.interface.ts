export default interface IApiTestUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: IApiTestUserAddress;
    phone: string;
    website: string;
    company: IApiTestUserCompany;
}

interface IApiTestUserAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geolocation: { latitude: string; longitude: string; };
};

interface IApiTestUserCompany {
    name: string;
    catch_phrase: string;
    bachelor_of_science: string;
}