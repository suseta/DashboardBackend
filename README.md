# productDb.js is used to store all the jsondata into the MongoDB from jsondata.json file.

Different routes have been created to get different data from the MongoDB -

BaseUri -> http://localhost:5001/api/v0

1. / -> to get All Products info from database

2. Data based on intensity
/intensity -> to get All Intensity info from database 
    and 
/intensity?min=4&max=5 -> to get all the information which have intensity between 4 and 5

3. Data based on likelihood
/likelihood -> to get All likelihood info from database 
and
/likelihood?min=2&max=3 -> to get all the information which have likelihood between 2 and 3

4. Data based on relevance
/relevance -> to get All relevance info from database 
and
/relevance?min=2&max=3 -> to get all the information which have relevance between 2 and 3

5. Data based on year
/year -> to get All start year and end year info from database 
and
/year?start=2018&end=2020 -> to get all the information which have year between 2018 and 2020

5. Data based on country
/country -> to get All country info from database 
and
/country?country=Mexico -> to get all the information which have the country which is requested in the query params

6. Data based on topics
/topics -> to get All topics info from database 
and
/topics?topic=oil -> to get all the information which have the topic which is requested in the query params

7. Data based on region
/region -> to get All region info from database 
and
/region?region=World -> to get all the information which have the region which is requested in the query params

To install the required packages - 
    npm i

To start the backend server -
    npm run dev


