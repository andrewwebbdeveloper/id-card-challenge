# id-card-challenge

## Intro

The goal of this challenge will be to create ID cards from source files, api-generated user data, developer-generated data, and developer formated data.

This will test ( at least ) these skills:

- Data fetching / asynchonous JS
- Data ( Object ) management
- Logic skills
- String manipulation
- CSS skills
- HTML skills
- Building HTML with JS
- Randomly-generated numbers / strings
- Date Formatting

## User API

You can fetch random users from the `randomuser.me` api.

> For example, to get 12 random users ( from the USA ) use `https://randomuser.me/api/?nat=us&results=12`

## #Goals

- **Each ID should display:**

  - Photo of person
  - First and last names
  - Gender as abbriviated letter ( M or F )
  - City & state with state abbriviated to two characters ( Los Angeles, CA )
  - Social Security Number with first 5 digits X'd out. ( xxx-xx-1234 )
  - Date of Birth (DOB) in a common format ( Jan 9th, 1987 )
  - Background of ID card should be a faded image of the home state's flag. ( Provided in assets folder )
  - Randomly-generated height between [the shortest person in the world](https://en.wikipedia.org/wiki/Chandra_Bahadur_Dangi) and [the tallest person in the world](https://en.wikipedia.org/wiki/Robert_Wadlow)...or some other average height range...formated in feet and inches ( 5'- 9" )
  - Randomly-generated weight between [the lightest person in the world](https://en.wikipedia.org/wiki/Luc%C3%ADa_Z%C3%A1rate) and [the heaviest person in the world](https://en.wikipedia.org/wiki/Jon_Brower_Minnoch)...or some other average weight range... formated in pouds ( 180 lbs )

- **Display all of the cards in a responsive grid so that they look good at _most_ screen sizes.**

---

The design of the app and the ID card(s) are up to you. However, the goal is that they should look like some kind ID card or a driver's license.
