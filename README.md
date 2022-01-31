# Encounter World/Story Building

World building for table-top roleplaying games like Dungeons and Dragons can be a daunting feat even for experienced home-brew game masters. Encounter provides an easy-to-use, sophisticated storyboarding interface that streamlines game management and allows game masters to focus on creative development. Encounter can be used in game for smoother gameplay by keeping dungeon master resources well organized and easily accessible.

## Technologies
This project uses the following technologies:
- Frontend: React.js with Bootstrap v5 and custom CSS
- Backend: Ruby on Rails, Postgresql, ActiveRecord
- Deployed on Heroku at https://encounterdnd.herokuapp.com/

## Launch
Either visit https://encounterdnd.herokuapp.com/

Launch backend
```
$ bundle install
$ rails db:migrate
$ rails db:seed
$ rails s
```
Launch frontend
```
$ cd client/
$ npm install
$ npm start
```
Navigate
```
localhost:3000/
```

## Features


<img width="1431" alt="Screen Shot 2022-01-31 at 10 07 16 AM" src="https://user-images.githubusercontent.com/89401426/151842906-256a33c9-189c-4bfe-a965-9439535d1c95.png">


### Login Screen
- Encounter offers full user authentication utilizing the Bcrypt gem.


<img width="1431" alt="Screen Shot 2022-01-31 at 10 07 24 AM" src="https://user-images.githubusercontent.com/89401426/151843066-1ad43744-68db-447c-ae64-3848062eb128.png">


### Sign Up Screen
- Users can sign up and create a new account.


<img width="1431" alt="Screen Shot 2022-01-31 at 10 07 59 AM" src="https://user-images.githubusercontent.com/89401426/151843204-9f6c4634-7710-4d2c-b3d5-434d1803bad7.png">

<img width="1431" alt="Screen Shot 2022-01-31 at 10 08 13 AM" src="https://user-images.githubusercontent.com/89401426/151844875-430c1edc-7717-43e8-b139-ae47f4776089.png">


### Home Page
Users can do the following from the home page:
- Create, Update, View, and Delete campaigns
- Search for campaigns
- Archive and filter campaigns


![Screen Shot 2022-01-31 at 10 08 46 AM](https://user-images.githubusercontent.com/89401426/151843502-3c4a39e9-bc52-4691-a346-3fe7df147410.png)


### Campaign Page
Users can do the following from the campaign page:
- Create, Update, View, and Delete encounters
- Search for encounters
- Archive and filter encounters


![Screen Shot 2022-01-31 at 10 09 07 AM](https://user-images.githubusercontent.com/89401426/151845278-aa38b562-fee7-4dbc-8627-b72283db05be.png)

![Screen Shot 2022-01-31 at 10 09 25 AM](https://user-images.githubusercontent.com/89401426/151845303-bd014287-377e-4ea0-b15c-9b79ce2888fb.png)

![Screen Shot 2022-01-31 at 10 09 40 AM](https://user-images.githubusercontent.com/89401426/151845797-f33303d8-846e-4ba6-9ae7-b07ff85562cf.png)


### Encounter Page
Users can do the following from the encounter page:
- View encounter Notes, Location, Description, Items, Npcs, Monsters
- Create Location, Items, Npcs, Monsters


### Video Demo
https://youtu.be/F54RhgqaASo


## Created By

 ### Matt Eva
 - Github: <a href="https://github.com/Matt-Eva/">Matt-Eva</a>
 - LinekdIn: <a href="https://www.linkedin.com/in/mattheweva/">Matt Eva's LinkedIn</a>
 - Email: <a href='mailto: matteweva@gmail.com'>matteweva@gmail.com</a>
 - Medium: <a href='https://medium.com/@matteweva'>@matteweva</a>

 ### Garrett Strohm
 - Github: <a href="https://github.com/garrettstrohm/">garrettstrohm</a>
 - LinkedIn: <a href='https://www.linkedin.com/in/gstrohm/'>Garrett Strohm's LinkedIn</a>
 - Email: <a href='mailto: garres4@vt.edu'>garres4@vt.edu</a>
 - Medium: <a href='https://medium.com/@garres4'>@garres4</a>


 ### Kindred Lee
 - Github: <a href="https://github.com/kvyshh/">kvyshh</a>
 - LinkedIn: <a href='https://www.linkedin.com/in/kindredlee/'>Kindred Lee's LinkedIn</a>
 - Email: <a href='mailto: kindred4lee@gmail.com'>kindred4lee@gmail.com</a>
 - Devto: <a href='https://dev.to/kvyshh'>kvyssh</a>
