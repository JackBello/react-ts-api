import Factory from '../../factory';

export default class PhotoFactory extends Factory {
    useFormat() {
        const map = this._map;

        return {
            id: map.id,
            title: map.title,
            photo: map.url,
            thumbnail: map.thumbnailUrl,
            album_id: map.albumId
        };
    }
}