import HttpClient from './httpClient';

export default class HttpEntity {
    protected entityName: string;
    protected httpClient: HttpClient;

    constructor(entityName: string, httpClient: HttpClient) {
        this.entityName = entityName;
        this.httpClient = httpClient || new HttpClient();
    }

    get baseUrl(): string {
        return `${this.httpClient.config?.baseURL}/${this.entityName}`;
    }

    public endpointUrl(subpath: string): string {
        return `${this.baseUrl}/${subpath}`
    }
}