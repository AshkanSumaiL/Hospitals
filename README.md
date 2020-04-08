## GOOGLE PLACES - HOSPITALS
This app gets all hospitals name,lat,lon around 5km of radius ,it gets the max 60 results (3 pages of 20 results) according to :
[Google Places Docs - JS docs](https://developers.google.com/maps/documentation/javascript/places#PlaceSearchPaging)

Also a delay has been set if theres an existing next page token,according to google for page generation theres a delay,thats why in app.js exists a constant "GOOGLE_PAGINATION_DELAY":
[Google Places Docs - WebServices docs](https://developers.google.com/places/web-service/search#PlaceSearchPaging)

