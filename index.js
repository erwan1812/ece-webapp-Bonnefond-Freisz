const http = require('http')
const handles = require('./handles')
const server = http.createServer(handles.serverHandle)
server.listen(8080)




//const server = http.createServer(serverHandle);
//server.listen(8080)

