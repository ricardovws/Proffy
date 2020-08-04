import express from 'express';

const app = express();

app.post('/users', (request, response) => {
    
    const users =[
        {name: 'Ricardo', age: 27},
        {name: 'Adão', age: 31}
    ];
    
    return response.send(users);
});

app.listen(3333);