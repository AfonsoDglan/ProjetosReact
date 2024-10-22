import http from 'node:http'

const users = []


const server = http.createServer((req, res) => {
    const {method, url} = req
    if (method === 'GET' && url === '/users') {
        return res
            .setHeader('Content-type', 'application/json')
            .end(JSON.stringify(users))
    }

    else if (method === 'POST' && url === '/users') {
        users.push({
            id: 1,
            name: 'John',
            email: 'John@gmail.com',
        })
        res.writeHead(201).end()
    }
})

server.listen(3333)