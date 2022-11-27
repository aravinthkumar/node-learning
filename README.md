# Node World - For Learning

Document on the Learning is placed in the following documentation github
https://github.com/aravinthkumar/Documentation/blob/main/Technologies/NodeJs/complete-guide.md


Third assignment 
> Present in branch [thirdAssignment](https://github.com/aravinthkumar/node-world/tree/thirdAssignment)

- `/` and `/user` end-points render the template engine (ejs) with res.render(), 
  - `/` points to `welcome.ejs` file and `/user` points to `user.ejs` file.
- `ejs` files are stored in `views` folder where html was previously present.
- `/user` has http `get` and `post` methods implemented
   - `post` method adds the title value send by the form to user[] array.
- `/` has the http `get` implemented and read the `user[]` and loops inside the `welcome.ejs` file to dynamically to render the users list.

Also have implemented includes for reuse purpose
- `views/includes/head.ejs`
- `views/includes/navigation.ejs`
- `views/includes/end.ejs`



## 

To run the project follow the steps.

- Install the dependencies `npm install`
- `npm start` to run the server

> [`nodemon`](https://www.npmjs.com/package/nodemon) is added for detecting the any changes to files and restarting the server.



