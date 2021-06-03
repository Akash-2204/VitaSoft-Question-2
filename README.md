# VitaSoft 
 ## `Round 2 Prototype`

### Git Hub
>>>
Clone or download the repo
Go to the directory of the repo using a text editor or Terminal
>>>

<br><br>

### MYSQL
>>>
Create a database named posts.
>>>

<br><br>

### Editor

Navigate to the /config/config.json and change the password and Database to your MYSQL password and database name.

```
{
  "host": "localhost",
  "user": "root",
  "database": "<posts>",
  "password": "< password >"
}
```
**Start the server**

```
npm start

```

<br><br>

### POSTMAN
 
 
You can test the following apis

**POST** `http://lohalhost:3000/login`

**POST** `http://lohalhost:3000/signup`

**GET** `http://lohalhost:3000/form/save-details`

**DELETE** `http://lohalhost:3000/form/delete-details`


