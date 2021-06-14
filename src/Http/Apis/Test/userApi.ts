import HttpResource from '../../httpResource';
import testClient from '../../Clients/testClient';

import UserFactory from '../../../Factories/resources/test/user.factory';
import PostFactory from '../../../Factories/resources/test/post.factory';
import AlbumFactory from '../../../Factories/resources/test/album.factory';
import TaskFactory from '../../../Factories/resources/test/task.factory';

class UserApi extends HttpResource {
    constructor() {
        super('users', testClient, UserFactory);
    }

    public async getData(): Promise<any> {
        const { data } = await this.httpClient.get(this.baseUrl);

        if(!data) return [];

        return this.formatJSON(data, "collection");
    }

    public async getById(id: string) : Promise<any> {
        const { data } = await this.httpClient.get(this.endpointUrl(id));

        if(!data) return undefined;

        return this.formatJSON(data, "create");
    }

    public async getUserPosts(id: string) : Promise<any> {
        const { data } = await this.httpClient.get(this.endpointUrl(id)+"/posts");

        if(!data) return [];

        return this.formatJSON(data, "collection", PostFactory);
    }

    public async getUserAlbums(id: string) : Promise<any> {
        const { data } = await this.httpClient.get(this.endpointUrl(id)+"/albums");

        if(!data) return [];

        return this.formatJSON(data, "collection", AlbumFactory);
    }

    public async getUserTasks(id: string) : Promise<any> {
        const { data } = await this.httpClient.get(this.endpointUrl(id)+"/todos");

        if(!data) return [];

        return this.formatJSON(data, "collection", TaskFactory);
    }
}

const userApi = new UserApi();

export default userApi;