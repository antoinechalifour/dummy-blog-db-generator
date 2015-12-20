# dummyblog-db-generator

Generates data to be consumed by dummyblog-* projects.

Copy the content of db-schema.js into json-generator.com to generate the database. Copy the generated json in a db.json file.

Run the data base using the json-server package :

`json-server --watch db.json`