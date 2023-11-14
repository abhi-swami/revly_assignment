export class FetchWrapper{
    constructor(baseURL){
        this.baseURL = baseURL;
    }
    get (endpoint) {
        return this.#methodRequest("GET", endpoint);
    };

    post (endpoint,userBody) {
        return this.#methodRequest("POST", endpoint, userBody);
    }

    put (endpoint,userBody) {
        return this.#methodRequest("PUT", endpoint, userBody);
    }

    delete (endpoint,userBody) {
        return this.#methodRequest("DELETE", endpoint, userBody);
    }

    #methodRequest (method,endpoint,userBody = {}) {
        if(method === "GET") {
            return fetch(`${this.baseURL}/${endpoint}`);
        }else{
            return fetch(`${this.baseURL}/${endpoint}`,{
                method,
                body : JSON.stringify(userBody),
                headers : {"Content-Type" : "application/json"}
            });
        }
    }
}