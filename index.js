const http=require('http');
const jsondata=require("./Jsonpackage")
 
const server=http.createServer((req,res)=>{
     if(req.url==='/'){
        res.write('<h1>Que-What is node js ?</h1>')
        res.write("<h3>Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser.</h3>")
        res.end();
     }
     else if(req.url==="/student"){
        res.write('<h1>welcome in the student page</h1>')
        res.end();
     }
     else if(req.url==="/product"){
        const storeage=JSON.stringify(jsondata)
        // res.write('<h1>welcome in the about page</h1>')
        res.write(storeage)
        res.end();
     }
     else {
        res.write('<h1>404 server not found</h1>')
        res.end();
     }
})
server.listen(3000,()=>{
    console.log('server is running on port 3000')
})