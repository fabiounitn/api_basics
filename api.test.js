// const dummy = require('./api').dummy
// const app = require('./api').app
//


// const url = "http://localhost:3000/courses"
const url = 'https://ts2myfirstapi.herokuapp.com/courses'
const cnn = "https://cnn.com"
const fetch = require("node-fetch");

test('multiply 2', () => {
    expect(4).toBe(4);
});



it('works with get and post', () => {
    var store=1
    expect.assertions(2);
    return fetch(url)
        .then(r => r.json())
        .then( data => {
            expect(data[0]).toEqual({"id": 21, "name": "HCI"})
             store +=  data[0].id
        } )
        .then(r => {
            console.log(store, r)
        })
        .then(r => {
             return fetch(url, {
                method: 'POST',
                body: JSON.stringify({name: 'hello course'+ store}),
                headers: {
                'Content-Type': 'application/json',
            },
        })})
        .then(r => r.json())
        .then(data => expect(data.id).toEqual("hellocourse"+store) )
        .then(r => console.log(store+10, r))


});

it('works with get', () => {
    expect.assertions(1);
    return fetch(cnn)
        .then(r => expect(r.status).toEqual(200))


});


// it('works with post', () => {
//     expect.assertions(1);
//     return fetch(url, {
//         method: 'POST',
//             body: JSON.stringify({name: 'hello course'}),
//             headers: {
//             'Content-Type': 'application/json',
//             },
//         })
//         // .then(r => r.json())
//         .then(r => expect(r.status).toEqual(201));
// });


test('multiply 3', () => {
    expect(3).toBe(3);
});
