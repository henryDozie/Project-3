## Project Title:

- WingRecruiter

---

##### TZAR

- Henry

---

## Project Planning

- In This project, we will implement a backEnd-server using Express and data will be stored in the database (wingRecruiter_db)
- Also, the frontend will be managed using a react framework for servicing the client/users

---

## MVP

Our application is a client based system that aims to address the visibility of jobs and opportunities within the job martket. We aim to use this web service to bridge the gap between employers and potential employees.
To extend the spectrum of usability, our application will provide job visibility to all users (registered or not) and allow registered users (employers/recruiters) to post their job opportunities with variable descriptions and requirements. Furhtermore, recruiters have the ability to do the following:

- Create/Post Job opening
- Update existing positions
- Delete job positions after they have been taken
  Also, alll users/visitors will have ability to retrieve information regarding the jobs based on title and location. They will also have access to;
- Recruiter ratings
- Recruiter reviews

---

## Features

wingRecruiter will be made up of the following features:

- Create
- Update
- Delete
- Verify
- Restrict

---

## Wireframes

![WIRE1](https://imgur.com/zY4VCI0.png)
![WIRE2](https://imgur.com/rsdH7kF.png)
![WIRE3](https://imgur.com/lCFNLmc.png)
![WIRE4](https://imgur.com/tzaTfPE.png)

---

## Goals

Principally, we aim to build a fullstack application that is reliable in terms of security amd simulteneously flexible for any user to navigate and retirieve required information.
Furthermore, our goal is to galvanize user experience with data privacy.

## Libraries

#### auth.js

- This is used for the user authorization (generating the web token)

#### models.js

- Create the the variable that is a connection to the database
- Creates the table colunm as relations.

#### Routes

- for handling different functions such as the post, get, etc. from the sql database

#### Axios

- For sending requests from the front end to the backend

#### React-Router-Dom

- For creating routes ansd links to enhance navigation and user experience

#### Body-parser

- This parser accepts any Unicode encoding of the body and supports automatic inflation of gzip and deflate encodings. It essentially returns a middleware that only passes JSON

---

## Component Hierarchy

Use this section to define your React components and the data architecture of your app.
src
|** assets/
|** data-tests
|** fonts
|** graphics
|** images
|** mockups
|** components/
|** Header.jsx
|** Home.jsx
|** LoginForm.jsx
|** RegisterFormjsx
|** CreateFormjsx
|** JobApplications.jsx
|** Footer
|** services/
|** api_helper.jsx
React_app
|** client(react app)/
|**App.jsx
|\_\_ App.css
Component Type state props Description
Header functional n n The header will contain the navigation and logo.
Navigation functional n n The navigation will provide a link to each of the pages.
Gallery class y n The gallery will render the job search page using in flexbox.
Gallery Card functional n y The cards will render the job application info via props.
Footer functional n n The footer will show info about me and a link to my portfolio.
Component Estimates
Add Contact Form L 3 hrs 2 hrs 3 hrs
Create CRUD Actions H 3 hrs 1 hrs TBD
TOTAL 6 hrs 3 hrs TBD

---

## Back End

1.models.js----create three tables(user, jobs, locations )
2.resetDb.js
3.seed.js
4.server.js
5.routes
5.1.UserRouter
5.2.PostRouter
6.services
6.1.auth.js

---

## Database

Name: wingRecuiter_db
1.user----(username, password)
2.jobs----(jobTitle, jobId, jobRequirements, locations, salary)
3.recruiter---(rating, reviews, jobCount, imge_url)

---

## ERD

## ![ERD1](https://imgur.com/0F6P51f.png)

## Styling

- Flexbox for style alignments
- media queries for responsiveness

---

## team expectations document:

- TimeLine ======> 5-6 days
- Teammates ======> Omnia, Henry, Jpseph
- Team Values ======> Teamwork is very essential in almost every application build.
- Team Practices ======> have an equal overview, build the contents of the project and design to build out the web application.

---
