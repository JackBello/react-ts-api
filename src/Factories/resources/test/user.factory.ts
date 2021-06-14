import Factory from '../../factory';

export default class UserFactory extends Factory {
    useFormat() {
        const map = this._map;

        return {
            id: map.id,
            name: map.name,
            username: map.username,
            email: map.email,
            address: {
                street: map.address.street,
                suite: map.address.suite,
                city: map.address.city,
                zipcode: map.address.zipcode,
                geolocation: {
                    latitude: map.address.geo.lat,
                    longitude: map.address.geo.lng
                }
            },
            phone: map.phone,
            website: map.website,
            company: {
                name: map.company.name,
                catch_phrase: map.company.catchPhrase,
                bachelor_of_science: map.company.bs
            }
        };
    }
}