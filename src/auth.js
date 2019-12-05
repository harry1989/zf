const headerToSet = 'Authorization';
const headerValue = (token) => `Bearer ${token}`;
let authToken;

/**
 * Initializes the auth token once the
 * client is initialized.
 */
setAuthToken (token) {
    authToken = token;
}

/**
 * Super agent middleware which adds the
 * auth header.
 */
addAuthHeaders(request) {
    request.set(headerToSet, headerValue(authToken));
}

export {
    setAuthToken,
    addAuthHeaders
}
