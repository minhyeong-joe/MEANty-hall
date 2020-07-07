# MEANtyHall

## Inspired By **[Monty Hall Problem](https://en.wikipedia.org/wiki/Monty_Hall_problem)**

This is an interactive experiment of Monty Hall Problem.

The user is able to participate as a contestant.

All records/statistics will be kept and computed to see if contestants who switch to other door have a 2/3 chance of winning a car.

---

## Heroku Deployment

URL: [https://meanty-hall.herokuapp.com/](https://meanty-hall.herokuapp.com/)

### To deploy on Heroku:

1. Create a local branch `heroku`

2. Create a new app at [Heroku](htttps://heroku.com) Dashboard page.

3. In `heroku` branch, do the following:

    1. exclude `dist`, `config.env` from the `.gitignore`, as they are required for the app to run properly
    2. In `package.json`, change `"start": "ng serve"` to `"start": "node server"` so that heroku runs app using node.js not angular.

4. add remote heroku repo and push heroku branch by running:
    ```
    git add remote heroku https://git.heroku.com/<app-name>.git
    
    // git push <remote-name> <local-branch>:<remote-branch>
    git push heroku heroku:master
    ```

---

## Local Deployment

1. git clone repository
2. run `npm install` to install dependencies as node_modules
3. Manually create `config.env` under `config` directory:
    ```
    DB_URI=mongodb+srv://<username>:<password>@<host>/<db-name>?retryWrites=true&w=majority
    ```
4. Run `npm run dev` and verify that node server runs correctly and database connection is successful.

    You should see something like below in CLI
    ```
    Server running on Port <PORT_NUMBER>
    MongoDB connected to: <DB_HOST> 
    ```
5. Run `ng build` and you will see an angular web app built into `dist` directory
6. You can now try the app locally at `http://localhost:<PORT_NUMBER>`
