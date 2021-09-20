# Pocket Caddie

<!-- Link for deployed site -->

## Project Description

Pocket Caddie is an Airtable and React build where the user is able to add multiple players and edit their golf scores, yardages, and courses. From the homepage, the user is able navigate via navbar to add a player, add a course, see a list of courses, and a list of players. From the course list, the user can select a course to display and/or edit information. From the player list, the user can select a specific player to display and/or edit information, including club yardages. The user will be able to delete courses and players from the respective list pages.

## Wireframes

Desktop View

![Desktop wireframe for mainpage, player/course, details, and edit pages](https://i.imgur.com/yJIXh6X.png "Desktop wireframe for mainpage, player/course, details, and edit pages.")

Mobile View

![Mobile wireframe for mainpage, player/course, details, and edit pages](https://i.imgur.com/m3J6Ipn.png "Mobile wireframe for mainpage, player/course, details, and edit pages.")

## Component Hierarchy

![Component hierarchy](https://i.imgur.com/FrZPla4.png "Component hierarchy")

## API and Data Sample

<!-- Link -->

Airtable is returning data for an array of players.

```
{
    "records": [
        {
            "id": "rec16GtjMew2ERJKe",
            "fields": {
                "lw": "100",
                "sw": "110",
                "aw": "120",
                "pw": "140",
                "nineir": "150",
                "eightir": "165",
                "sevenir": "175",
                "sixir": "185",
                "fiveir": "195",
                "fourir": "205",
                "threeir": "215",
                "twoir": "225",
                "fivewd": "240",
                "threewd": "250",
                "hybrid": "270",
                "driver": "290",
                "playerName": "Ryu",
                "handicap": "20",
                "playerImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF-rueZ2jsqoKMpyaV1Me42lM_Tvf5ZobgWw&usqp=CAU"
            },
            "createdTime": "2021-09-16T20:53:45.000Z"
        },
        {
            "id": "recJ2tnF9nuPAWPyi",
            "fields": {
                "playerName": "Stevie",
                "handicap": "2",
                "playerImage": "https://i.imgur.com/n6ZFeWR.jpg"
            },
            "createdTime": "2021-09-18T00:19:54.000Z"
        },
        {
            "id": "rectuR2MQocREQv1e",
            "fields": {
                "playerName": "Sonic",
                "handicap": "25",
                "playerImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgyTJO2IoEMJC-2FqxR-mrvVm-UaaDoakZkw&usqp=CAU",
                "lw": "70",
                "sw": "80",
                "aw": "90",
                "pw": "100",
                "nineir": "110",
                "eightir": "120",
                "sevenir": "130",
                "sixir": "140",
                "fiveir": "150",
                "fourir": "160",
                "threeir": "170",
                "twoir": "180",
                "fivewd": "190",
                "threewd": "200",
                "hybrid": "210",
                "driver": "220"
            },
            "createdTime": "2021-09-17T20:02:29.000Z"
        }
    ]
}

```

### MVP/PostMVP

#### MVP

- Home page with clickable links that route to their respective pages.
- Create new players and courses and add to Airtable.
- Read and append list of players and courses from Airtable.
- Read and append specific player and course information from Airtable.
- Update players and courses in Airtable.
- Delete players and courses from Airtable.
- Create responsive-design for mobile applications using Tailwind CSS.

#### PostMVP

- Add round scores for players and add associations with courses in Airtable.
- Add handicap calculator using previous 5 round scores.
- Add club suggestion page.

## Project Schedule

| Day          | Deliverable                                | Status   |
| ------------ | ------------------------------------------ | -------- |
| Sept 17      | Proposal approval / Airtable Setup         | Complete |
| Sept 18-19   | CRUD component logic / Route & Link logic  | Complete |
| Sept 20-21   | CSS styling / Responsive design            | Complete |
| Sept 22-23   | Post MVP                                   | Incomplete |
| Sept 24      | Presentations                              | Incomplete |

## Timeframes

| Component                 | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------- | :------: | :------------: | :-----------: | :---------: |
| Proposal Approval         |    H     |      3hrs      |      3hrs     |    3hrs     |
| Airtable setup            |    H     |      1hr       |      2hrs     |    5hrs     |
| App.js and Routes logic   |    H     |      1hr       |      .5hrs    |    5.5hrs   |
| Navbar pg 1               |    H     |      1hr       |      .5hrs    |    6hrs     |
| Axios POST logic          |    H     |      2hrs      |      .5hrs    |    6.5hrs   |
| Form creation pg 2        |    H     |      2hrs      |      .5hrs    |    7hrs     |
| Form creation pg 3        |    H     |      2hrs      |      .5hrs    |    7.5hrs   |
| Axios GET logic           |    H     |      2hrs      |      .5hrs    |    8hrs     |
| List creation pg  4 & 5   |    H     |      3hrs      |      1hr      |    9hrs     |
| Details creation pg 6 & 7 |    H     |      3hrs      |      1hr      |    10hrs    |
| Axios PUT logic           |    H     |      2hrs      |      .5hrs    |    10.5hrs  |
| Edit creation pg 8 & 9    |    H     |      2hrs      |      1hr      |    11.5hrs  |
| Edit creation pg 10       |    H     |      3hrs      |      1hr      |    12.5hrs  |
| Axios DELETE logic        |    H     |      2hrs      |      .5hrs    |    13hrs    |
| Data deletion pg 4 & 5    |    H     |      2hrs      |      .5hrs    |    13.5hrs  |
| Data deletion pg 6 & 7    |    H     |      2hrs      |      .5hrs    |    14hrs    |
| Component CSS pg 1        |    H     |      2hrs      |      6hrs     |    20hrs    |
| Component CSS pg 2        |    H     |      2hrs      |      1.5hrs   |    21.5hrs  |
| Component CSS pg 3        |    H     |      2hrs      |      .5hrs    |    22hrs    |
| Component CSS pg 4        |    H     |      2hrs      |      2hrs     |    24hrs    |
| Component CSS pg 5        |    H     |      2hrs      |      .5hrs    |    20.5hrs  |
| Component CSS pg 6        |    H     |      2hrs      |      4hrs     |    24.5hrs  |
| Component CSS pg 7        |    H     |      2hrs      |      .5hrs    |    25hrs    |
| Component CSS pg 8        |    H     |      2hrs      |      1hr      |    26hrs    |
| Component CSS pg 9        |    H     |      2hrs      |      1hr      |    27hrs    |
| Component CSS pg 10       |    H     |      2hrs      |      1hr      |    28hrs    |
| Total                     |    H     |    52hrs     |          |    28hrs     |

## SWOT Analysis

### Strengths:
I have a solid idea of how to structure the logic for this project to keep my main files fairly legible and clean. 
### Weaknesses:
I want to challenge myself by using Tailwind CSS to style this project. I am also not super confident with how to design this app so that it's responsive without repetetive code.
### Opportunities:
This is a great chance to learn a useful styling framework, as well as making a full CRUD application from scratch.
### Threats:
There could be potential issues with how my airtable is setup. In order to accomplish my post-mvp, I will need to also learn how to utilize associations.
