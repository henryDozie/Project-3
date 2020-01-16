## Project Title:
 WingRecruiter

-----------------------------------------
TZAR -----Henry
-----------------------------------------
## Project Planning

this application is about the job hunting where the Recruiter has to register through the company 
once he do thid he will be able to perform the following :
Recruiter can register then login 
after login he creates a job appliction (form) for the employee to fill it out 
and the Recruiter has to be able to perform the following:
index or show
create, update, and delete

------------------------------------------
## Wireframes


Front End:
React rendered components
1.Header
2.Home
3.RegisterForm
4.UserForm
5.CreateForm
6.Posts(quotes....etc)
7.Footer

Services
1.api_helper.js

React-App:
1.App.js
2.App.css

---------------------------------

Back End:

1.models.js----create three tables(user, application, )
2.resetDb.js
3.seed.js
4.index.js
5.routes
5.1.UserRouter
5.2.PostRouter
6.services
6.1.auth.js(index.js)

DatabaseName: 


In application table we can have (Role, roleId, description, location, createdAt)


-----------------------------------------------------------------

Styling:
Use flexbox (display: flex)

------------------------------------------------------------------
team expectations document:

TimeLine
Teammates
Team Values
Team Practices




----------------------------------------------------------------------------------------------------------------








Use the Wireframes section to display desktop, tablet and mobile views.
Desktop Landing

Desktop Landing

Desktop Hero

Desktop Hero

Desktop Data Index

Desktop Data Index

Tablet Data Index

Tablet Data Index

Mobile Data Index

Mobile Data Index


MVP

The Minimum Viable Product should be a well-planned and easily-communicated product, ensuring that the client's deliverable will be achievable and meet specifications within the time frame estimated.
The Project Title MVP lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus fermentum risus vitae bibendum. Integer vel ipsum mollis odio sollicitudin ornare eu vel ex. In quis fringilla velit, ac maximus quam. Etiam eget placerat neque. Aenean faucibus sem non nisi lobortis ullamcorper.

Goals

Lorem ipsum, dolor sit amet,
consectetur adipiscing elit.
Phasellus dapibus fermentum risus vitae bibendum.
Integer vel ipsum mollis odio sollicitudin ornare eu vel ex.
etc.
Libraries

Use this section to list all supporting libraries and their role in the project.
Library	Description
React Router	Lorem ipsum dolor sit amet, consectetur.
React SemanticUI	Lorem ipsum dolor sit amet, consectetur.
React Spring	Lorem ipsum dolor sit amet, consectetur.
API Data

Use the Data Section to define the API(s) you will be consuming for your project, inluding sample URL queries.
API	Quality Docs?	Website	Sample Query
WeatherAPI	yes	example.com	example.com/mickeymouse?s=movies&t=10
React Components

Component Hierarchy

Use this section to define your React components and the data architecture of your app.
src
|__ assets/
      |__ data-tests
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
      |__ Hero.jsx
      |__ Ipsum.jsx
      |__ Lorem.jsx
      |__ CTA.jsx
      |__ Footer.jsx
Component Breakdown

Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.
Component	Type	state	props	Description
Header	functional	n	n	The header will contain the navigation and logo.
Navigation	functional	n	n	The navigation will provide a link to each of the pages.
Gallery	class	y	n	The gallery will render the posts using cards in flexbox.
Gallery Card	functional	n	y	The cards will render the post info via props.
Footer	functional	n	n	The footer will show info about me and a link to my portfolio.
Component Estimates

Use this section to estimate the time necessary to build out each of the components you've described above.
Task	Priority	Estimated Time	Time Invested	Actual Time
Add Contact Form	L	3 hrs	2 hrs	3 hrs
Create CRUD Actions	H	3 hrs	1 hrs	TBD
TOTAL		6 hrs	3 hrs	TBD
Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evalute possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe.


Post-MVP

Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!
Post-MVP Goals

Add user account and auth capabilities.
Post-MVP Data

Utilize the Giphy API to welcome new users with funny gifs.
