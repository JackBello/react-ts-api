import Factory from '../../factory';

export default class CommentFactory extends Factory {
    useFormat() {
        const map = this._map;

        return {
            id: map.id,
            title: map.title,
            user_id: map.userId
        };
    }
}