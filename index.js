//1.  import json-server
const jsonServer = require('json-server');

//2. create a server application
const docServer = jsonServer.create()

//3. setup path for db.json
const router = jsonServer.router('db.json')

//4. return a middlware instance used by json-server
const middleware = jsonServer.defaults()

//5. setup port for the db.json
const port = 6003



//6. use in server
docServer.use(middleware)
docServer.use(router)

//7. to run the server(restserver)
docServer.listen(port,()=>{
    console.log("doc server listening on port" +port);
})
