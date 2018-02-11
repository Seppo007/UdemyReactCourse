## Indecision App

### How to run?
1. Install yarn via npm &rarr; ```npm install yarn -g```
2. Install live-server via yarn &rarr; ```yarn add live-server```
3. Install babel via yarn &rarr; ```yarn add babel@6.24.1```
4. Run ```yarn run serve``` to start live-server
5. A browser should open automatically presenting your *index.html*

### Setting up the transpiler (React JSX &rarr; ES5)
1. Run the following command from the root folder to let babel always transpile your React-Code 
   to native ES5 Code &rarr; ```yarn run build```