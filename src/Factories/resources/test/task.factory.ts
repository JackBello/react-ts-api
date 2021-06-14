import Factory from '../../factory';

export default class TaskFactory extends Factory {
    useFormat() {
        const map = this._map;

        return {
            id: map.id,
            title: map.title,
            completed: map.completed,
        };
    }
}