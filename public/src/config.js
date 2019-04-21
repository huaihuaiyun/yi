let server = '';
if (process.env.NODE_ENV=='development') {
    server = 'http://localhost:8081/';
}else {
    server = 'aaa.com';
}
export const SERVER = server;
