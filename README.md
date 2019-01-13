# **CreateReactBookSearchApp to Search Goodreads Book**

This application uses goodreads api to look for books by Title, Author or Isbn code.

This project was bootstrapped with `create-react-app` and deployed live at

-----NOT YET DEPLOYED----

# Running the application locally

**Prerequisites:** You need to have Node + NPM installed.

**Clone the repo:**

git clone https://github.com/yashwantsinghzala/CreateReactBookSearchApp.git

change branch to ReactBookSearchAppWithExpress


**Install dependencies:**

run 

npm install

 command for both client app dependency(open the command prompt on client folder) and  server app. (open the command prompt on root of the application)
   

    

**Starting the application in development mode:**

run 

npm start

 command for both client app dependency(open the command prompt on client folder) and  server app. (open the command prompt on root of the application)


# Building the application:

To build the production assets, run

    npm run build

# Testing the App:(client folder)

    npm test
    
   Note: Written unit test cases for all reducer , some of the actions and react component to ensure it renders correctly on ui .

# Features of App currently :

1. Search for books by title, author, or ISBN. (example: if we search by keyword "Harry", it displays 10 related books on it)
2. Displays search results in bootstrap cards.
3. Displays error inline if it fails for any reason.
4. Displays only title, author, and link to goodreads page.
5. See the description and rating, and other details by clicking on individual result.

# Technical Stack of App currently :
 1. Used redux and redux thunk to maintain the data in store and manage it across the containers with in the app.
 2. Components consist of dump ui component  which needs data which is provided by the container component 
    which is connected through the store.
 3. Used bootstrap for css modules .
 4. Used express to make cross domain api request.
 
# With the more time could have done below list of tasks:

1. Error handling could have been done in more detail.
2. More test cases related to asynchronous action and api testing.
3. Could have implemented separate loader for book selected ,although it is already done but currently it loads whole page .
4. Could have introduced error boundries.
5. Slidly restructure the rendering part of the app.
6. Could have give some of the more feature to app while showing selected book with good ui experience.

