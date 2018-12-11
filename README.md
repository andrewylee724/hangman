Note: 
(1) To run, please clone or fork this repository.  In the command line in the root directory, run "npm install" and "npm start".
(2) Go to https://andrewylee724.github.io/hangman

Hangman Application
created by Andrew Lee

Intro:
A simple Hangman application was first created in Vanilla JavaScript.  Then refactored using React.  Then refactored again using Redux for state management.

Summary:
I developed this app to display my candidacy for a software engineer position at LinkedIn.  The game showcases many of the engineering and UI concepts that I have learned, including:

React - to build the UI in a declarative approach, utilizing component-based architecture, and the virtual DOM
Redux - to manage state globally
Redux-Thunk - to handle asynchronous data fetching within the Redux architecture
SASS - as a CSS processor and to use variables and mixins.  No component libraries (i.e. Semantic UI, Material UI) were used as I wanted to showcase my ability to harness CSS styling
CORS Proxy - I utilized a third-party CORS proxy during my api fetches to overcome the "No-CORS" roadblock on the REACH dictionary server.  I assumed that I was not allowed to ask REACH's backend server to allow Cross Origin Requests.
Semantic HTML - semantic HTML elements were used to provide context and meaning, but some div's were required for positioning purposes

Workflow:
To show my knowledge of the Git workflow, I had master, develop, and feature branches.  Each branch represented a hypothetical ticket on JIRA.  I would merge individual feature branches onto develop, and then merge develop onto master.

The following are the features (i.e. user stories) that I implemented:

Feature-1: User should see displayed letters in visually appealing Letter Blocks.

Feature-2: User should input guesses by clicking visual keyboard and also by using his/her own keyboard

Feature-3: User should be able to see a visual Hangman drawing, that updates depending on how many strikes are left

Feature-4: App should fetch words from Dictionary API and select a random word from the collection.

Feature-5: User should be able to guess the whole word at once.

Feature-6: App should display list of incorrect guesses

Feature-7: App should have a "Game Over" mode and the ability to start a new game

Feature-8: Deploy web application on Github Pages: andrewylee724.github.io/hangman