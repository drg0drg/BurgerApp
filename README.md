# BurgerApp
    
## Description 
    
Burger App is an application that allows one to order a specific burger and then devour it.
It is built on Node environment with _express_ and _express-handlebars_ dependencies, featuring _ORM_ modeling, _MySQL_ database and is deployed on Heroku.

After establishing a SQL connection in _connection.js_ file, the ORM model is structured to feature _selectAll_, _insertOne_, _updateOne_ methods further used by the app when the user creates requests via front end.

Code block in _burger.js_ file acts as a model (_burger_) creating calls for the methods in ORM using burger specific information.

Code block in _burgers-controller.js_ file creates the routes by which the model's methods are invoked.

Further, the front end is built using handlebars. In _index.handlebars_ file, ```{{#each burgers}}``` is used to wrap the content of each ```<li>``` that receives the burger model information: ```{{id}}. {{burger_name}}```. This is fed later on in _main.handlebars_ file using ```{{{body}}}```.

When the user hits `/` or `/index`, all the data from MySQL database is read and provided to front end via handlebars.
When the user hits `/burger/create` by accessing the form, a new burger is sent to the database and the front end receives all the entries from db via handlebars, the new burger being part of _ready to be eaten_ list.

When the user hits `/burger/eat/:id` by accessing the _Devour it_ button, the _devoured_ attribute is changed to `true` in the database and the new information is sent to front end via handlebars, the specific burger being now part of _Already eaten_ list. 


    

## Table of Contents
    
[Description](#description)
    
[Installation](#installation)
    
[Usage](#usage)
    
[Tests](#tests)
    
[Contribution](#contribution)
    
[License](#badgeURL)
    
[Author](#name)
    
[Contact](#contact)
    

## Installation
    
App is Heroku deployed, hence no installation is required.
    

## Usage
    
Access the link: 

## https://eat-the-burger-drg.herokuapp.com


![BurgerAppGIF](https://user-images.githubusercontent.com/60710786/86014136-d9d74780-ba17-11ea-8d35-18e7a9e3f0c9.gif)



## Tests
    
All test manually conducted, no additional frameworks added.

## Contribution

Pull requests || reformatting || bugs addressing is welcome. 

Please [create an issue](https://github.com/drg0drg/BurgerApp/issues).
    

## License
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
    

https://opensource.org/licenses/MIT
    

## Author
    

 Name: Dragos Dragomir
    

 GitHub: drg0drg
    

 ![Alt Text](https://avatars1.githubusercontent.com/u/60710786?v=4)
    

## Contact
dragomir_costin_dragos@yahoo.com