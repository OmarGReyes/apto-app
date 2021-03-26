# Apartment app

Application created for the management of information from a database (MongoDB) of houses and meets the following requirements of the client: 

1) Endpoint GET which allows to pass attributes to be able to filter the result of the data by: 1.(Minimum and maximum price range), 2.(Number of rooms).

2) Function in which 3 attributes are passed (Latitude, Longitude, Distance km), and this will return the average price per square meter.

3) Method that allows the user to create reports in CSV and PDF from filters applied to the data.

## Development tools:

* HTML.
* CSS.
* Javascript.
* Bootstrap.
* NodeJS (Express, Handlebars, Mongoose).
* MongoDB (Atlas, Compass).

## Deployment: 

This project was deployed on <a href= "https://glacial-bastion-13235.herokuapp.com/" target="_blank">Heroku</a>
and for the MongoDB cloud services was used <a href= "https://www.mongodb.com/cloud/atlas" target="_blank">MongoDB Atlas</a>

<h2> Installation on local server </h2>
 
 * Download or clone git repository
 * in cmd:
       
      * Go to files location
      * npm install
      * npm run dev
      
## Screenshots

### Index: 

![Image of App](https://github.com/OmarGReyes/apto-app/blob/master/src/public/img/index.png)

### Search:
![Image of App](https://github.com/OmarGReyes/apto-app/blob/master/src/public/img/busqueda.png)

### Filter and report table:

![Image of App](https://github.com/OmarGReyes/apto-app/blob/master/src/public/img/filtro.png)



