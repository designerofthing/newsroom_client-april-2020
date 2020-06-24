 [![Build Status](https://semaphoreci.com/api/v1/jysmys/newsroom_client-april-2020/branches/development/badge.svg)](https://semaphoreci.com/jysmys/newsroom_client-april-2020)

![Daily News Sense](https://github.com/designerofthing/newsroom_client-april-2020/blob/development/src/images/DailyNewsSense.png)

# News App Public Client -  Daily News Sense

## About this project
This is the public facing application of a World News site, deliverable in 2 languages with geolocation services for local news and weather.  
It is one of 4 applications created in a 3 week project, the others being:   
[Daily News Sense - Mobile Client](https://github.com/designerofthing/newsroom_mobile-april-2020)   
[Daily News Sense - Staff Client](https://github.com/designerofthing/newsroom_staff-april-2020)   
[Daily News Sense - API](https://github.com/designerofthing/newsroom_api-april-2020) 


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).  
The project also uses [SemanticUI](https://semantic-ui.com/) mixed with custom CSS for styling.  
[Redux](https://redux.js.org/) was employed for state management, [J-Tock Auth](https://github.com/Eth3rnit3/j-tockauth) and [Devise](https://github.com/heartcombo/devise#the-devise-wiki) for authorisation, [I18n](https://www.i18next.com/) for translation. 


The application's features are tested using Cypress.


This project was a collaboration between the 6 members of the Craft Academy Bootcamp April 2020 Cohort:  
https://github.com/kermit-klein  
https://github.com/erikbjoern  
https://github.com/jysmys  
https://github.com/ViaMarcus  
https://github.com/PaulineBA  
https://github.com/designerofthing.

## Dependencies
To run locally you will need to install the packages in the package.json using a package manager for JavaScript.


## Deployment
### Online
https://dailynewssense.netlify.app/

### Instructions for local deployment
To deploy locally, clone the repository and install packages using your package manager, then run:
#### `yarn start`

Run the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.  
It requires the API to run on concurrently.

## Acknowledgements:
Built with the guidance of the Craft Academy coaches and documentation, Reactjs.org, Semanticui.com and Stackoverflow.

This application consumes the [Open Weather API](https://openweathermap.org/)  

## Improvements
- rating system for articles
- improved styling
- OAuth authentication via Facebook and Google

## License
This app is open source software [licensed as MIT](https://mit-license.org/).
