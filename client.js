const fetch = require("node-fetch");

//const url = "https://maps.googleapis.com/maps/api/geocode/json?address=Florence"
//const url = "https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400"

const url = "http://localhost:3000/"

const get = async url => {
console.log('\ngetting ' + url)
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json)
  } catch (error) {
    console.log(error);
  }
};

async function postBody(url, body) {
    console.log('\nposting ' + url, body)

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
              'Content-Type': 'application/json',
            },
        });
        console.log(response.status)
        const json = await response.json();
        console.log(json)
    } catch (error) {
        console.log(error);
    }
}

async function postQuery(url, params) {
    console.log('\nposting params to ' + url, params)

    try {
        const response = await fetch(url+params, {
            method: 'POST',
            // body: JSON.stringify(body),
            // headers: { 'Content-Type': 'application/json' },
        });
        console.log(response.status)
        const json = await response.json();
        console.log(json)
    } catch (error) {
        console.log(error);
    }
}

async function deleteResource(url,resource_ID) {
    console.log('\ndeleting ' + url, resource_ID)

    try {
        const response = await fetch(url+'/'+resource_ID, {
            method: 'DELETE',
            //body: JSON.stringify(body),
            //headers: { 'Content-Type': 'application/json' },
        });
        console.log(response.status)
        // const json = await response.json();
        // console.log(json)
    } catch (error) {
        console.log(error);
    }
}




// getLocation(url);

get(url+'courses')


postBody(url+'courses',{name: 'hello course'})

get(url+'courses')

postQuery (url+'students','?newstudent=45')

deleteResource(url+'courses', 'hellocourse')

get(url+'courses')

// deleteCourse('28')