import HttpResource from '../../httpResource';
import testClient from '../../Clients/testClient';

import PostFactory from '../../../Factories/resources/test/post.factory';
import CommnetFactory from '../../../Factories/resources/test/comment.factory';

class PostApi extends HttpResource {
    constructor() {
        super('posts', testClient, PostFactory);
    }

    public async getById(id: string) : Promise<any> {
        const { data } = await this.httpClient.get(this.endpointUrl(id));

        if(!data) return undefined;

        return this.formatJSON(data, "create");
    }

    public async getPostComments(id: string) : Promise<any> {
        const { data } = await this.httpClient.get(this.endpointUrl(id)+"/comments");

        if(!data) return [];

        return this.formatJSON(data, "collection", CommnetFactory);
    }
}

const postApi = new PostApi();

export default postApi;