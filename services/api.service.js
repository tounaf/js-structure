/**
 * Service to call HTTP request via Axios
 */
const ApiService = {
    uri: '/api/v1/admin',

    /**
     * Set akk HTTP request
     */
    requests: {},

    /**
     * Set the default HTTP request headers
     */
    setHeader() {
        // Nothing
    },

    /**
     * Set the default Accept-Language request language
     */
    setLanguage(value) {
        axios.defaults.headers.common['Accept-Language'] = value;
    },

    /**
     * Set the default X-Currency request value
     */
    setCurrency(value) {
        axios.defaults.headers.common['X-Currency'] = value;
    },

    /**
     * Set the default HTTP request URI
     */
    setUri(value) {
        this.uri = value
    },

    /**
     * Send the GET HTTP request
     * @param resource
     * @param params
     * @param main
     * @returns {*}
     */
    get(resource, params, main = false) {
        if(main){
            if(this.requests[resource]){
                this.requests[resource].cancel()
            }
            this.requests[resource] = axios.CancelToken.source();
            if(!params){
                params = {}
            }
            params.cancelToken = this.requests[resource].token
        }
        return axios.get(this.uri + resource, params)
    },

    /**
     * Set the POST HTTP request
     * @param resource
     * @param params
     * @returns {*}
     */
    post(resource, params) {
        return axios.post(this.uri + resource, params)
    },

    /**
     * Set the PUT HTTP request
     * @param resource
     * @param params
     * @returns {*}
     */
    put(resource, params) {
        return axios.put(this.uri + resource, params)
    },

    /**
     * Set the DELETE HTTP request
     * @param resource
     * @param params
     * @returns {*}
     */
    delete(resource, params) {
        return axios.delete(this.uri + resource, params)
    }
};

export default ApiService;
