# NASA Astronomy Photo of the Day Application

![NASA APOD](https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/potw2115a.jpg)

## Description

> [!IMPORTANT]
> Make sure to see Usage heading at bottom before forking. It contains vital information for this to work. 

This application allows users to explore NASA's collection of Astronomy Photos of the Day (APOD) by specifying a date. It features a minimalistic user interface to have more focus on the pictures. Additionally, for a pleasing U/X, this application comes with toggleable cards that provide additional information about the selected photo. Users can also mark their favorite photos for easy access. The application employs several technologies for data management, including Regex for state management, Thunk for middleware, and persistData for local storage data persistence. It is styled using Reactstrap, styled-components, and CSS. Icons used in the application are sourced from [Google Fonts Icons](https://fonts.google.com/icons). Additionally, users can add and delete their favorite photos.

## Features

1. **Date-Based Query:** Users can search for NASA's APOD by specifying a date.

2. **Toggleable Cards:** Each search result has additional information available as a card, and users can toggle the cards to reveal the information about the photos.

3. **Favorites:** Users can mark photos as favorites for quick access in the future.

4. **Data Management:** The application utilizes Regex for state management, Thunk for middleware, and persistData for local storage data persistence.

5. **Styling:** The user interface is designed using Reactstrap, styled-components, and CSS for an aesthetically pleasing experience.

6. **Icons:** Icons used in the application are sourced from [Google Fonts Icons](https://fonts.google.com/icons).

## Getting Started

To run this application locally, follow these steps:

1. Clone the repository to your local machine:
   ```
   git clone https://github.com/your-username/nasa-apod-app.git
   ```
2. Navigate to the project directory:
   ```
   cd nasa-apod-app
   ```
3. Install the required dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```
## Usage 
> [!IMPORTANT]
> * When you launch the application, you will have to navigate to the photoFormReducer.js file in the reducers folder in the components folder
> * There, you will see a variable named `const API_KEY = ""`
> * You will have to generate your own from this [website](https://api.nasa.gov/) and insert it in that variable. 
> * It is very important you do not push your fork if it is both public and has your API_KEY visible. 
> * You can also use the DEMO_KEY they give you, but this is limited to 30 calls an hour versus 1000 for free with API_KEY
   
