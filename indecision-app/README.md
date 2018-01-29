## Indecision App

### How to run?

1. Install yarn via npm &rarr; ```npm install yarn -g```
2. Install live-server via yarn &rarr; ```yarn global add live-server```
3. Install babel via yarn &rarr; ```yarn global add babel@6.24.1```
5. Make sure that your yarn bin folder is in your Path
    - To find out the global path of yarn use the following command &rarr; ```yarn global bin```
5. From the root folder run &rarr; ```live-server public```
6. A browser should open automatically presenting your *index.html*

### Setting up the transpiler (React JSX &rarr; ES5)
1. Run the following command from the root folder to let babel always transpile your React-Code 
   to native ES5 Code &rarr; ```babel <pathToYourJSFile> --out-file=public/scripts/app.js --presets=env,react --watch```