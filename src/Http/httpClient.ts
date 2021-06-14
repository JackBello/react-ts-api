import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export default class HttpClient {
    private _instance: AxiosInstance;
    private _config: AxiosRequestConfig | undefined;

    constructor(clientConfig: AxiosRequestConfig | undefined = undefined) {
        this._config = clientConfig;
        this._instance = Axios.create(clientConfig);

        this._instance.interceptors.request.use(
            this.onEachRequest,
            this.onClientReject
        );

        this._instance.interceptors.response.use(
            this.onEachResponse,
            this.onServerReject
        );
    }

    get instance(): AxiosInstance {
        return this._instance;
    }

    get config(): AxiosRequestConfig | undefined {
        return this._config;
    }

    public onEachResponse(response: AxiosResponse): AxiosResponse {
        // console.log('onResponse', response);
        return response;
    }

    public onEachRequest(request: AxiosRequestConfig) {
        // console.log('onRequest', request);
        return request;
    }

    public onClientReject(error: any) {
        // console.log('onClientReject', error);
        return error;
    }

    public onServerReject(error: any) {
        // console.log('onServerReject', error);
        return error;
    }

    public get(
        url: string,
        config: AxiosRequestConfig | undefined = undefined
    ): Promise<AxiosResponse> {
        return this._instance.get(url, config);
    }

    public post(
        url: string,
        data: any,
        config: AxiosRequestConfig | undefined = undefined
    ): Promise<AxiosResponse> {
        return this._instance.post(url, data, config);
    }

    public delete(
        url: string,
        config: AxiosRequestConfig | undefined = undefined
    ): Promise<AxiosResponse> {
        return this._instance.delete(url, config);
    }

    public put(
        url: string,
        data: any,
        config: AxiosRequestConfig | undefined = undefined
    ): Promise<AxiosResponse> {
        return this._instance.put(url, data, config);
    }
}
