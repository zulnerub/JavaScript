function solve(obj) {
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const uriRegEx = /([A-Za-z0-9.]+)$/gm;
    const validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    const messageRegEx = /[<>\\&'"]+/gm;

    if (!obj.method){
        throw new TypeError(`Invalid request header: Invalid Method`);
    }else if (!validMethods.includes(obj.method)){
        throw new TypeError(`Invalid request header: Invalid Method`);
    }

    if (!(obj.uri && (obj.uri.match(uriRegEx) || "*"))){
        throw new TypeError(`Invalid request header: Invalid URI`);
    }

    if (!(obj.version && validVersions.includes(obj.version))){
        throw new TypeError(`Invalid request header: Invalid Version`);
    }
    if (obj.message){
        if (obj.message.match(messageRegEx)){
            throw new TypeError(`Invalid request header: Invalid Message`);
        }
    }else if (obj.message !== ""){
        throw new TypeError(`Invalid request header: Invalid Message`);
    }

    return obj;

}


solve(test0 = {
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: 'asda'
});