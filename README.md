# Titile: ---MGI--- `MyGameInfo` 
MGI (MyGameInfo) is an interactive application for game lovers and enthusiasts out there. This application will be heavily reliant on gamers being graphically motivated and constantly informed on the events happening in the gaming community. Data ranging from release dates, production manufacturers, skins and a lot more will be accessible on this application.
The main target group for this application will be virtually everyone interested in making background reserach about games before they invest in them.

# API

![wireframe0](https://imgur.com/Um3EdIe.jpg)

The API employed in the project is acquired from:
`RAWG Video Games Database API`
RAWG is the largest video game database and game discovery service. And they are gladly sharing our 350,000+ games, search, and machine learning recommendations with the world.

# Features
This application will have a richly styled outlook in CSS which will help ensure user experience is enhanced. Several methods such as the responses to the following queries will be incoported:
`
- What console games were released last month?
- What are the most anticipated upcoming games?
- What games were published by Annapurna Interactive in the 2019?
- What are the most popular games in 2019?
- What is the highest rated game by Electronic Arts?

The main section will contain about 6 div elements that function display units. this display will be in a square box making it better responsive on varying screen dimensions. These will be function/class based components including;

- Header
- Footer
- Categories
- Forms `For collecting serch query`
- Users `A locally stored list of users`
- Comments `(Users can leave comments on there favourite/worst games)`

## API Call
This API has been tested and returned data is the following format;
GameList:
` https://rawg-video-games-database.p.rapidapi.com/games
`

![wireframe1](https://imgur.com/ww0240D.jpg)

Porpular games in a Year:
`https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-added
`

![wireframe2](https://imgur.com/H9Vd0Er.jpg)
etc.

# MVP
- Get data from the API calls
- Render the data on screen in an interactive format
- Grant users access to highlight clips on hover

## Wireframe
##### home
![wireframe3](https://imgur.com/en9Rlea.jpg)

##### CategoriesPage

![wireframe4](https://imgur.com/WZXT0DT.jpg)

# Technology used
- React
- React-Router
- Axios
- Font Awesome
- Google Fonts
- RAWG API
- Weather Api (optional addon)

## Future features
- User authenticated accounts.
- Location based game festival suggestions.
- Gaming platform central authurisation systems for account management. 
