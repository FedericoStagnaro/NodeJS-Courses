const http = require('http')
const PORT = process.env.PORT || 3000

const server = http.createServer((req,res)=>{
    console.log('REQUEST Method', req.method)

    // res.setHeader('Content-Type','application/json') // option 1
    // res.writeHead(200 ,{ 'Content-Type': 'application/json'}) // option 2
    
    res.writeHead(200 ,{ 'Content-Type': 'application/json'}) 

    const payload = JSON.stringify({ title: 'Hello world!'})
    
    res.end(payload)
})

server.listen(PORT, ()=> {
    console.log(`Server listen on port ${PORT}...`)
})