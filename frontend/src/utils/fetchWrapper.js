export class FetchWrapper{
    constructor(baseURL){
        this.baseURL = baseURL;
    }
    get (endpoint) {
        return this.#methodRequest("GET", endpoint);
    };

    post (endpoint) {
        return this.#methodRequest("POST", endpoint);
    }

    put (endpoint) {
        return this.#methodRequest("PUT", endpoint);
    }

    delete (endpoint) {
        return this.#methodRequest("DELETE", endpoint);
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