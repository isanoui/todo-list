## Todo List 

A fullstack CRUD application used to keep track of todo items, built with ReactJS and Java Spring Boot using a MySQL server. 


### Project: 

[Click here to view project](https://festive-chandrasekhar-e40420.netlify.app/)

## Features

- Login/Register users (email not required)
- Add todo item
- Edit todo item
- Delete todo item
- data persistence, clear cache to reset 
  

## Reflection

This was a project to showcase my skills and knowledge in ReactJS and Java Spring. Project goals included using technologies learned up until this point and familiarizing myself with documentation for new features.  

One of the obstacles I ran into was properly handling primary key references (TodoList Table linking to User Table) in the HTTP response object as well as state persistence on first load and refresh. This lead me to spend a couple days researching localstorage in react hooks as well as how the Spring repository's handle data as well as its annotations for linking tables together. 

### Note

Passwords are NOT encrypted in database as I'm still doing research into the Spring Security framework. Encryption, OAuth, and Tokenization are things I'm looking into.
