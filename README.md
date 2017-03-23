# Live Coding Handoko
*Live coding ini merupakan salah satu syarat kelulusan bootcamp di Hacktiv8. Adapun spesifikasinya adalah sebagai berikut dibawah: *

* Node.Js
* ExpressJS
* MongoDB
* JsonWebToken
* UI Framework (Bootstrap, Semantic UI, materializecss, etc)
* JQuery
* VueJS (Recommended)

### Database table

Di live coding ini, ada dua table yang akan di `create`, yaitu tabel `User` & `Article`. Dan berikut dibawah adalah END-Point kedua tabel tersebut.

##### END-POINT USER

REST | REQUEST | DESCRIPTION
------------ | -------------
USERS | GET |  Get all user informations
USER/:ID | GET | get user information by Id
USER | POST | create new user
USER/:ID | PUT | update user
USER/:ID | DELETE | remove user

##### END-POINT ARTICLE

REST | REQUEST | DESCRIPTION
------------ | -------------
ARTICLES | GET |  Get all user informations
ARTICLE/:SLUG | GET | get user information by Id
ARTICLE | POST | create new user
ARTICLE/:SLUG | PUT | update user
ARTICLE/:SLUG | DELETE | remove user

##### USAGE
```javascript  
http://localhost:3000/api/users
// OR
http://localhost:3000/api/article/mengapa-nasi-padang-itu-lezat

```

### Working Steps
##### Server Side
* NPM install (Install all requirements)
* Configuring database with Mongoose MongoDB ODM, creating models
* Generating ExpressJS Framework
* Configuring Server Side (models, controllers, routing)
* Creating API Register/Login, User, & Articles
* Adding JWT to Server Side
* Testing CRUD

##### Client Side
* NPM install (Install all requirements)
* Generating VueJS Frontend Framework
* Layouting framework with bootstrap
* Testing Register & Login from Front End
* Testing CRUD from Frontend

##### Validation
* Adding validation from server-side
* Adding validatin from clint-side (frontend)

##### Refactoring
* Refactoring the codes
