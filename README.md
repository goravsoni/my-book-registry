## Setup 

Clone Repo & npm install.

Keep track of the books you've read online.

This backend API is structured using GraphQL. To make custom queries to the server use Postman on the following URL:

https://registry-prod.herokuapp.com/graphcli

## Schema

Authors<br />&nbsp;
  Name<br />&nbsp;
  Age<br />&nbsp;
  ID<br />
Books<br />&nbsp;
  Name<br />&nbsp;
  Genre<br />&nbsp;
  ID<br />&nbsp;

Nested queries are supported. For example, if you wanted to find a particular author or find all the books in the registry and their respective author names.

![image](https://user-images.githubusercontent.com/49302341/162526536-0c09266e-4a17-4391-ba22-5cdbc331f720.png)

## Database & Vulnerabilities 

The database URI is not secure. This is purely for sample purposes only. If you are going to use this application I suggest creating a .env file which contains the db URI. Insert the authentication in your perfred hosting platform as a config. That being said the application does not track IP address or have a session ID to block attacks.
To add a new author you must create a custom mutation query. 

```
Mutation{
  addAuthor(name:<>, age:<>){
    name
  }
}
```
## Stack

NodeJS + Express | MongoDB | React | Heroku
