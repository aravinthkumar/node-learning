# Node World - For Learning


Document on the Learning is placed in the following documentation github
https://github.com/aravinthkumar/Documentation/blob/main/Technologies/NodeJs/complete-guide.md

## Completed the first assignment

- Created a server running on port 3000 `server.js` file
- Created `router.js` file to serve the following urls
  - `/` endpoint which has Hello title.
  - `/users` endpoint shows the list of users (user1,user2)
- Created a html form to receive user for creation in `/` endpoint.
- Once the entry is entered it calls the `/create-user` and logs the out put in console.


## Completed the second assignment 
> Present in branch [secondAssignment](https://github.com/aravinthkumar/node-world/tree/secondAssignment)

- Create end-points `/` and `/user` which sends a html file as a response, present in view folder `user.htm` and `welcome.html`
- it also serves static files `css` present in public folder.


## To run the application

Follow the steps

- Install the dependencies `npm install`
- `npm start` to run the server

> [`nodemon`](https://www.npmjs.com/package/nodemon) is added for detecting the any changes to files and restarting the server.