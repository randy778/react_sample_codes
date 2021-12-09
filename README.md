# Create React App

This work is created by using Create React App, which is a CLI tool that help people to create standard React app. You can find more detail here: 
[Create React App](https://github.com/facebook/create-react-app)

# API
This work is using api from https://vpic.nhtsa.dot.gov/api. And I choose 'GetAllManufacturers' as the data to show up on the page.

# Run the project
1. Make sure you have node.js and npm installed.
2. In the root folder of this project, use command-line、Powershell or Visual Studio Code to run 'npm install' to install the dependencies of the project.
3. After the dependencies get installed successfully, run 'npm start' to start the app. The browser should open automatically and you will see the web page then.
4. If the browser does not pop up, you can use http://localhost:3000/ to access the page. 

# Details of the work
1. Since this question or requirement is simple, I did not use any UI libarary for the components. I just use pure JS、HTML and css to do the styling.
2. 'pages' folder contains the codes for the page.
3. 'components' folder contains the codes for the ui components, such as table, pagination and filter.
4. 'constants' contains any constant values, such api definition for this case.
5. 'ultils' contains any common services, such ajax request for this case. I did not user any http request libarary for this work, I just use plan js to deal with the ajax call (fetch api for this case)
