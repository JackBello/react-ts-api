import HttpResource from '../../httpResource';
import testClient from '../../Clients/testClient';

import PhotoFactory from '../../../Factories/resources/test/photo.factory';

class PhotoApi extends HttpResource {
    constructor() {
        super('photos', testClient, PhotoFactory);
    }

    public async getById(id: string) : Promise<any> {
        const { data } = await this.httpClient.get(this.endpointUrl(id));

        if(!data) return undefined;

        return this.formatJSON(data, "create");
    }
}

const photoApi = new PhotoApi();

export default photoApi;