import {setAuthToken} from './auth'
import * apis from './api'

const zf_api_uri_base = 'https://api.zenefits.com/core';
const defaultOpts = {
    url: zf_api_uri_base
}

/**
 * A client stub to interact with the Zenefits REST APIs.
 */
class ZFClient {

    constructor(options){
        this.opts = Object.assign({}, defaultOpts, options);
        this.validate();
        setAuthToken(this.options.authToken);
    }

    /**
     * Validate all intial properties. 
     */
    validate() {
        if(!this.opts.authToken){
            throw Error('Auth Token is needed.');
        }
    }

    listCompanies() {
        apis.listCompanies().done(function(){

        });
    }

    getAllEmployeesOfaCompnay(companyId){

    }

    getEmployeeDetails(companyId){

    }
}


