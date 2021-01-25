# OMDB React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Live Hosted Version

[Live Version](https://omdb-react-app.web.app/movies)

## Note
- Helvetica Neue was not used due to it being a premium font - used google fonts Roboto for now
- Due to being constrained to using Card to display results I believe UX flow could have been improved slightly such as this previous application I made [TMDB App](https://afternoon-spire-06540.herokuapp.com/movies) in this [Older repo](https://github.com/xXValhallaCoderXx/the-movie-db-app-react)

## Application Commands

#### Local Environment

- **START** `yarn start` - Used to start development server
- **BUILD** `yarn build` - Bundle and package production build

## Application Choices

#### UI Choices

- Instead of importing components directly from a 3rd party library, I like to create my own 'component library' and create a wrapper around the components
  - This is to aid with ease of refactoring in future, if ever a UI Component library was to change, it would only be in one place
- Atomic Design Principles of breaking down components into their smallest structure, and combining them to create other components

## Screen Shots

#### List View Desktop

![Screenshot](docs/main-desktop.png)

#### List View Mobile

![Screenshot](docs/main-mobile.png)

#### List View Results Desktop

![Screenshot](docs/list-desktop.png)

#### List View Results Mobile

![Screenshot](docs/list-mobile.png)

#### Detail View Results Desktop

![Screenshot](docs/detail-desktop.png)

#### Detail View Results Mobile

![Screenshot](docs/detail-mobile.png)

#### Not Found

![Screenshot](docs/not-found-desktop.png)
