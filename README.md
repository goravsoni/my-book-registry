## Setup 

````git clone https://github.com/goravsoni/my-book-registry````
<br />
````npm install````

Keep track of the books you've read online.



This data is requested using a GraphQL query.

To make custom query's and explore database use the /graphcli

https://registry-prod.herokuapp.com/graphcli

````Schema````
Authors
  Name
  Age
  ID
Books
  Name
  Genre
  ID

Nested queries are supported. For example, if you wanted to find a particular author or find all the books in the registry and their respective author names.

![image](https://user-images.githubusercontent.com/49302341/162526536-0c09266e-4a17-4391-ba22-5cdbc331f720.png)
