# Book Search

This full-stack MERN app allows the user to query the google books api to find books and save them to their list. 

## Starting the app locally

  * Clone the project down with `git clone https://github.com/Awfulnaut/book-search.git`.

  * Run `npm install`, which will install all dependencies for both the server and the front end

  * Run `yarn start` and the app will open at <localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

To deploy, perform the following:

  * Log into heroku with `heroku login` and then run `heroku create` to generate a new heroku instance.

  * Add a MongoLab Addon by running `heroku addons:create mongolab`

  * `git add` and `git commit` any changes and push up to heroku with `git push heroku master`. The NPM scripts should take care of the rest.

---
For more information, email [cadin.mcqueen@gmail.com](mailto:cadin.mcqueen@gmail.com).
