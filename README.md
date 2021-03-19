# simple-django-app

## This is test task for Synergy Way company

### To start my project you need to:
1. Clone this repo to your local machine ---> ```git clone git@github.com:Oleksandr-Yurchyk/react-django-app.git```
2. Get into project directory ---> ```cd react-django-app/```
3. Create .env file in the root directory of project ---> ```touch .env```
4. Create two constants SECRET_KEY=some_secret_key & DEBUG=True in .env file
5. Build and up the project ---> ```docker-compose up --build```
6. There should now be two servers running:
- http://127.0.0.1:8000 is the Django app
- http://127.0.0.1:3000 is the React app

On the Django server you can navigate to the:
- http://127.0.0.1:8000/users/api/ - Users api page
- http://127.0.0.1:8000/groups/api/ - Groups api page
