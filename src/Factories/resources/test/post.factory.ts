import Factory from '../../factory';

export default class PostFactory extends Factory {
    useFormat() {
        const map = this._map;

        return {
            id: map.id,
            title: map.title,
            description: map.body,
            user_id: map.userId
        };
    }
}