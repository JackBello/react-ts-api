import Factory from '../../factory';

export default class CommentFactory extends Factory {
    useFormat() {
        const map = this._map;

        return {
            id: map.id,
            name: map.name,
            email: map.email,
            body: map.body
        };
    }
}