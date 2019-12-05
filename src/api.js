import {addAuthHeaders} from './auth';

const superagent = require('superagent');
const companyEndPoint = () => 'https://api.zenefits.com/core/companies';
const employeesEndPoint = (companyId) => `https://api.zenefits.com/core/companies/${companyId}/people`;
const singleEmployeeEndPoint = (id) => `http://api.zenefits.com/core/people/${id}`;


var listCompanies = function() {
    return superagent.get(companyEndPoint())
        .use(addAuthHeaders)
        .end();
}

var listEmployees = function(companyId){
    return superagent.get(employeesEndPoint(companyId)())
        .use(addAuthHeaders)
        .end();
}

var listEmployees = function(companyId){
    return superagent.get(employeesEndPoint(companyId)())
        .use(addAuthHeaders)
        .end();
}

export {
    listCompanies,
    listEmployees,
    getEmployeeDetails
}
