// const dummy = require('./api').dummy
// const app = require('./api').app
//
// test('multiply 2', () => {
//     expect(dummy(2)).toBe(4);
// });

const url = "http://localhost:3000/courses"
const cnn = "https://cnn.com"
const fetch = require("node-fetch");

// it('works with get', () => {
//     expect.assertions(1);
//     return fetch(url)
//         .then(r => r.json())
//         .then( data => expect(data[0]).toEqual({"id": 21, "name": "HCI"}) );
// });

it('works with get', () => {
    expect.assertions(1);
    return fetch(cnn)
        .then(r => expect(r.status).toEqual(200));
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
