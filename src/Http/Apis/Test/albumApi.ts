import HttpResource from '../../httpResource';
import testClient from '../../Clients/testClient';

import AlbumFactory from '../../../Factories/resources/test/album.factory';
import PhotoFactory from '../../../Factories/resources/test/photo.factory';

class AlbumApi extends HttpResource {
    constructor() {
        super('albums', testClient, AlbumFactory);
    }

    public async getById(id: string) : Promise<any> {
        const { data } = await this.httpClient.get(this.endpointUrl(id));

        if(!data) return undefined;

        return this.formatJSON(data, "create");
    }

    public async getAlbumPhotos(id: string) : Promise<any> {
        const { data } = await this.httpClient.get(this.endpointUrl(id)+"/photos");

        if(!data) return [];

        return this.formatJSON(data, "collection", PhotoFactory);
    }
}

const albumApi = new AlbumApi();

export default albumApi;