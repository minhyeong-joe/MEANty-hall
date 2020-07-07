# MEANtyHall

## Inspired By **[Monty Hall Problem](https://en.wikipedia.org/wiki/Monty_Hall_problem)**

This is an interactive experiment of Monty Hall Problem.

The user is able to participate as a contestant.

All records/statistics will be kept and computed to see if contestants who switch to other door have a 2/3 chance of winning a car.

---

## Heroku Deployment

URL: N/A

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
