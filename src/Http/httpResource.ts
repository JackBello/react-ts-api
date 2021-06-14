import { AxiosResponse } from 'axios';

import HttpClient from './httpClient';
import HttpEntity from './httpEntity';

import Factory from '../Factories/factory';

import { TFormatsJSON } from '../Types/@Typed';

export default class HttpResource extends HttpEntity {
    static entityPath: string;
    static httpClient: HttpClient;
    private factory: any;

    constructor(entityName: string | undefined, httpClient: HttpClient | undefined, factory: any | undefined) {
        super(
            entityName ?? HttpResource.entityPath,
            httpClient ?? HttpResource.httpClient
        );

        this.factory = factory;
    }

    public getData() : Promise<AxiosResponse> {
        return this.httpClient.get(this.baseUrl);
    }

    public getPaginated(page: number = 1) : Promise<AxiosResponse> {
        return this.httpClient.get(this.baseUrl, { params: { page }});
    }

    public getById(id: string) : Promise<AxiosResponse> {
        return this.httpClient.get(this.endpointUrl(id));
    }

    public create(data: any) : Promise<AxiosResponse> {
        return this.httpClient.post(this.baseUrl, data);
    }

    public update(id: string, data: any) : Promise<AxiosResponse> {
        return this.httpClient.put(this.endpointUrl(id), data);
    }

    public delete(id: string) : Promise<AxiosResponse> {
        return this.httpClient.delete(this.endpointUrl(id));
    }

    public formatJSON(data: any, type: TFormatsJSON, factory?:any) {
        if(type === "collection") return Factory.collection(data, (factory === undefined) ? this.factory : factory);
        if(type === "create") return Factory.create(data, (factory === undefined) ? this.factory : factory);
    }
}
