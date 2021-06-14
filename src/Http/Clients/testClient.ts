import { AxiosRequestConfig, AxiosResponse } from 'axios';

import HttpClient from '../httpClient';

class TestClient extends HttpClient {
    constructor() {
        const clientConfig: AxiosRequestConfig = {
            baseURL: 'https://jsonplaceholder.typicode.com', //config.APP_URL_API,
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            },
        };
        super(clientConfig);
    }

    public onEachResponse(response: AxiosResponse<any>): AxiosResponse {
        // console.log("Test API Response:", response);
        return response;
    }
}

const testClient = new TestClient();

export default testClient;