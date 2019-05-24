# REST API

A typical Node.js application is a server implementing a RESTful API. Let's try out writing one.

## Exercise

Your task is to implement a server that manages Point of Interest (POI) data. Users can fetch POI data, add new POIs, modify and delete existing ones using a REST API. 

## API specification

- POI object:
    ```javascript
    {
        id: {string},
        name: {string},
        description: {string},
        city: {string}
        coordinates: {
            lat: {number},
            lng: {number}
        }
    }
    ```

- Base URL: `/api/v1`
- Request content type: `application/json`
- Response body content type: `application/json`

### Get all Pois
```
GET /pois
``` 
Responses:
- 200: OK
    - Response body: List of POIs

### Get a POI by id
```
GET /pois/:id
```` 
Responses:
- 200: OK
  - Response body: POI
- 404: Id not found


### Add a POI
```
POST /pois/
Request body: {POI}
```

Responses:
- 201: OK
    - Response body: the created POI
- 400: Invalid or missing POI data

### Update POI
```
PUT /pois/:id
Request body: {POI}
```
Responses:
- 200: Update OK
  - Response body: POI
- 201: New POI created for id 
  - Response body: POI
- 400: Invalid or missing POI data

### Delete POI
```
DELETE /pois/:id
```` 
Responses:
- 204: Deleted
- 404: Id not found

## Instructions

- There is a mockup database implementation `db.js` that you can use in your server. The mockup database is not a real persistent storage, it will be reset every time the server is restarted.
- Pay attention to the response codes and contents specified for different operations and situations. 
- You can implement the base URL setting conveniently by using `express.Router`

## Bonus
You can challenge yourself further by adding one more feature:
### Get POIS by radius
Get all POIS within a given radius from a given center point. The radius is given in kilometers.
```
GET /pois
Query parameters:
    filter: radius
    radius: { number }
    center: { lat: {number}, lng: {number} }
```
You can use the library `haversine-js`to calculate great-circle distances between locations.