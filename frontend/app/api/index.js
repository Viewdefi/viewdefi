let SERVER_URI = "http://localhost:5000"

let defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
}

async function bodyHandler(res, url, req) {
    let body = await res.json();
    console.info(`---- [request : ${url}] -------`)
    console.info(`body: ${JSON.stringify(req)}`)
    // console.info(`result: ${JSON.stringify(body)}`)
    console.info(`---- [end request] -------`)
    return {
        ...body,
        statusCode: res.status
    }
}

function buildHeaders() {
    return defaultHeaders
}


function _get(url){
    try {
        return fetch(SERVER_URI + url, {
            headers: buildHeaders()
        }).then(res => bodyHandler(res, url));
    } catch(err) {
        console.error(err);
        return Promise.resolve(err);
    }
}

function _post(url, body) {
    try {
        let _body = null;
        if(body) {
            _body = JSON.stringify(body);
        }
        
        return fetch(SERVER_URI + url, {
            method: 'POST',
            headers: buildHeaders(),
            body: _body,
        }).then(res => bodyHandler(res, url, body));
    } catch(err) {
        console.error(err);
        return Promise.resolve(err);
    }
}

function _put(url, body) {
    try {
        let _body = null;
        if(body) {
            _body = JSON.stringify(body);
        }

        return fetch(SERVER_URI + url, {
            method: 'PUT',
            headers: buildHeaders(),
            body: _body,
        }).then(res => bodyHandler(res, url, body));
    } catch(err) {
        console.error(err);
        return Promise.resolve(err);
    }
}

function _delete(url, body) {
    try {
        let _body = null;
        if(body) {
            _body = JSON.stringify(body);
        }

        return fetch(SERVER_URI + url, {
            method: 'DELETE',
            headers: buildHeaders(),
            body: _body,
        }).then(res => bodyHandler(res, url, body));
    } catch(err) {
        console.error(err);
        return Promise.resolve(err);
    }
}

export const fetchLocations = () => {
    return _get("/all_locations")
}