# 22852_CA1_BACK-END-DORSET

## About the Project

CA1 Project 22852

This is a solo project which had the purpose to perform CRUD Request through NodeJS & Express

## Dependencies

- JS
- Node
- Express
- Nodemon
- Body-Parser
- MongoDB


## Installation

Launch the Server

```bash
nodemon index

```

## Requirements

- Use Postman online version : 

   [Postman Web Version](https://identity.getpostman.com/signup?continue=https%3A%2F%2Fgo.postman.co%2Fbuild)

OR 

- Download Postman App :

   [Postman MacOS](https://identity.getpostman.com/signup?continue=https%3A%2F%2Fgo.postman.co%2Fbuild)

   [Postman Windows x32](https://dl.pstmn.io/download/latest/win32)

   [Postman Windows x64](https://dl.pstmn.io/download/latest/win64)

   [Postman Linux x64](https://dl.pstmn.io/download/latest/linux64)



## Perform CRUD REQUESTS

Warning :  To have access to your POSTMAN's workspace !! you must be registered with your postman account in order to make requests 

###DATABASE INFORMATIONS

- Database : MongoDB
- Name : Users
- Collection : infos

- Database's properties : 
   
```
users.infos {
    name : name of the user | String
    familyname : familyname of the user | String
    age :  age of the user | Int32
    real : real user | Boolean
}
```

- Url used to make the requests : http://localhost:3000/user


### CREATE / POST REQUEST

The POST method requests that the server accept the entity enclosed in the request as a new subordinate of the web resource identified by the URI.
To make the post request : 

- CONNECT to your Postman's workspace
- WRITE inside the input http://localhost:3000/user
- SELECT POST Option from the scrolling menu
- On Body's section, CHOOSE x-www-form-encoded
- Then, ENTER name,familyname,age,real and their values
- CLICK on send button

If successful, the console should return :

````shell script
POST Request on user route OK !

````

while Postman should return in its body : 

```
OK
```

### READ / GET REQUEST

The GET method requests a representation of the specified resource. Requests using GET should only retrieve data and should have no other effect. 

To make the GET Request : 

- CONNECT to your Postman's workspace
- WRITE inside the input http://localhost:3000/user
- SELECT GET Option from the scrolling menu
- CLICK on send button

If successful, the console should return :

````shell script
GET Request on user route OK !

````

while Postman should return in its body : 

```
OK
```


### UPDATE / PUT REQUEST

The PUT method requests that the enclosed entity be stored under the supplied URI. If the URI refers to an already existing resource, it is modified; if the URI does not point to an existing resource, then the server can create the resource with that URI

To make the PUT Request :

- CONNECT to your Postman's workspace
- WRITE inside the input http://localhost:3000/user
- SELECT PUT Option from the scrolling menu
- On Body's section, CHOOSE x-www-form-encoded
- RETRIEVE the ID of the document that you want to update
- Then, ENTER name,familyname,age,real and their new values
- CLICK on send button

If successful, the console should return :

````shell script
PUT Request on user route OK !

````

while Postman should return in its body : 

```
OK
```



### DELETE / DELETE REQUEST

The DELETE method deletes the specified resource.

To make the DELETE Request : 

- CONNECT to your Postman's workspace
- WRITE inside the input http://localhost:3000/user
- SELECT DELETE Option from the scrolling menu
- RETRIEVE the ID of the document that you want to update
- CLICK on send button

If successful, the console should return :

````shell script
DELETE Request on user route OK !

````

while Postman should return in its body : 

```
OK
```



## License

[ISC](https://choosealicense.com/licenses/isc/)









