const request = require('request');


const token = 'AIzaSyC-ukkQ3n0lrfQ3IBe5HEMgomaP2hUOMJk';
const lat = -17.3836317;
const lng = -66.2658546;
const radius = 5000;
const GOOGLE_PAGINATION_DELAY = 1000;
var nextPage = '';
var url;
var hospitals = [];


getHospitals();

function getHospitals() {
    url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&type=hospital&key=${token}&pagetoken=${nextPage}`;
    request({url: url}, (error, response) => {
        let data = JSON.parse(response.body);
        data.results.forEach(place => {
            hospitals.push({
                name: place.name,
                lat: place.geometry.location.lat,
                lng: place.geometry.location.lng
            });
        });

        if (data.next_page_token) {
            nextPage = data.next_page_token;
            setTimeout(() => {
                getHospitals();
            }, GOOGLE_PAGINATION_DELAY);
        } else {
            console.log(hospitals);
        }
    })
}
