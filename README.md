# RestApi

Created with CodeSandbox

add mongoose as dependency

1.)create config/db.js file.and create the db connectcion init.Import the db-connection file in index.js file

2.)create models folder and create author.js/Post.js file iniit.

3.)create the schemas for author and post.

4.)create seeds folder and create seedpost.js file init.

5.)In seedPost.js,import db-config,faker,author and posts files init.create seedposts and clearposts functions init.create a query that stores three array of authors and three posts for each author using the faker library in seedposts function.use the terminal to check the seedposts function works perfectly.

6.)In clearposts function,add the query that deletes all the posts and authors

7.)Add body-parser,cookie-parser,express and create a simple express server that returns "blog api server" in h1-tag

8.)create routers folder and add auhtorRouter.js and postsrouter.js file init.

9.)In postrouter.js,create the postrouter that returns "post router" in h3-tag and import it in indexjs as a middleware("/posts" ).

10.)In postrouter.js,create the get-method that returns all the posts along author(populate) in json format and also create post method that saves the posts for the respective author.Note:add body-parser in index.js as middleware so that u can access the post-method data.Use postman to test it.

11.)In authorRouter.js,create the authorRouter that returns "Auhtor router" in h3-tag and import it in indexjs as a middleware("/author" ).

12.)In authorrouter.js,create the get-method that returns all the authors in json format and also create post method that saves new atuthor.

13.)In postRouter.js,create a get-method that returns a individual post using the post-id using req.params.

14.)create Admin.js file in models folder and create the admin schema.

15.)create seedAdmin.js file in seeds folder.

16.)create a services folder and create hash.js file init.Add bcrypt as dependency and create a generatehash function that converts the plaintext into hashed text using a promise.

17.)In seedAdmin.js,Import the generatehash function and create seedAdmin function that saves the admin makae sure that password of admin is in hashed format and also create clearAdmin function that clears the admin.

18.)ad jsonwebtoken as dependency and create a admintokenmanager.js in services folder.

19.)In admintokenManager.js,import jsonwebtoken and create admintokenmanager function that returns the jwttoken.

20.)In hash.js,create a comparehash functionthat return compared password as a promise.

21.)create adminROuter.js in routers.folder.
Import the comparehash function init and create the a post method for login that return sucess as json if compare hash returns true.

22.)add cookie-parser as dependency and use it as middleware in index.js.

23.)In adminRouter,add res.cookie to store the jwt for httpOnly and also add secure flag init.

24.)add cors as dependency and use it as middleware in index.js to access the api from any domain.

25.)add all routeing of business model in BusinessRouters.js
