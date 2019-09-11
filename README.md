# Gorila Invest Admission Test

- Deploy link: https://gorila-test.herokuapp.com

---

In this project, created as part of Gorila Invest admission test, I've created a full stack app where you can register your investments and see all of them in a table and pie chart. To do so, I've used Node.js to build a REST API and React to make the front-end. 

---

## Technologies Used

- Node.js
- Express.js
- React.js
- SASS
- MongoDB
- Docker
- Mocha/Chai/SuperTest
- Jest/Enzyme
- Heroku
- Postman

---

# Instructions for use

## You can use the deploy link:

-  https://gorila-test.herokuapp.com


## Or, test it locally:

This project is divided in client and server side. After downloading or cloning it you can do the following:

- ### Running Client and Server side simultaneously
    - In the **root folder** of this project, run the docker-compose commands in your terminal so both sides can start: 
        - Build: <code>docker-compose build</code> 
        - Run container: <code>docker-compose up</code>
        - If you wish to stop the container: <code>docker-compose down</code>
        - Note: Client side will run on **port 3000** and server side will run on **port 8000**, so to access it use http://localhost:PORT/

---

- ### (If you wish to run only the server side) Server Side:
- Inside **server folder**, run in your terminal:
  - Running it with docker: 
    - Build: <code>docker-compose build</code> 
    - Run container: <code>docker-compose up</code>
    - If you wish to stop the container: <code>docker-compose down</code>
    - Note: This container will run on the **port 8000**, so to access it use http://localhost:8000/
    
  - Running with npm:
      - Install all dependencies: <code>npm install</code>
      - Run project: <code>npm start</code>
      - Note: With this approach, you will need MongoDB installed and running. Also, you will need to configure a **.env** file with PORT and MONGODB_URI.
      
---

- ### (If you wish to run only the client side) Client Side:
- Inside **client folder**, run in your terminal:
  - Running it with docker: 
    - Build: <code>docker-compose build</code> 
    - Run container: <code>docker-compose up</code>
    - If you wish to stop the container: <code>docker-compose down</code>
    - Note: This container will run on the **port 3000**, so to access it use http://localhost:3000/
    
  - Running with npm:
      - Install all dependencies: <code>npm install</code>
      - Run project: <code>npm start</code>
      - Note: This will run only the front-end, without the API. 

---


# Testing:
- ## Server side
    - In the server folder run: <code>npm test</code>
    - Note: MongoDB must be installed and running. 
- ## Client side
    - In the client folder run: <code>npm test</code>


---

# API EndPoints

- **API Documentation can be found on this endpoint:** https://gorila-test.herokuapp.com/api-docs/

        note: if running locally use localhost url rather than heroku url.

    - **(GET) Show all investments:**
`https://gorila-test.herokuapp.com/api/investments`
    <br><br>
    - **(POST) Register a new investment:** 
`https://gorila-test.herokuapp.com/api/investments`
        - Requires type, value and date.
    <br>

    - **(DELETE) Delete an investment:**
`https://gorila-test.herokuapp.com/api/investments/{investment_ID}`

