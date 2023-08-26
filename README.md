# HireFrame

![logo](https://user-images.githubusercontent.com/107942776/263493921-d3c8b367-cc1b-4004-8f60-4e48ec4a8329.png)

<!-- [GSD Live Demo](https://www.loom.com/share/33bdbc8002d44138a09159332885b55f) - Loom Walkthrough -->

[Check out HireFrame for yourself!](hf.ericlfrey.com) - Link to App

## Topics
- [Overview](#overview)
- [MVP Features](#mvp-features)
- [Try the App Yourself](#try-the-app-yourself)
- [Planning HireFrame](#planning)
- [Code Snippets](#code-snippets)
- [Tech Stacks for HireFrame](#tech-stacks)
<!-- - [Stretch Features](#stretch-features) -->

## Overview
Wireframe helps you track job prospects with a clear kanban-style board. Sort opportunities into Wishlist, Applied, Interview, Offer, and Rejected categories. Built with React Hooks, Next JS Routes, Google Firebase, and Bootstrap, Wireframe offers a streamlined experience to help organize your job search.

## MVP Features 

<em>Jobs:</em>
- Sign in via Google Authentication
- Add a new Job by adding a Company Name, Job Title, Description, and Category.
- Clicking the Job Card takes the User to the Job Details modal which has the Job information, and also functions as a real time Edit Form for the Job.
- The "Move" dropdown has options for the User to change the category of the Job.
- The home page shows all of the User's Jobs filtered into columns by category.
<img src="https://user-images.githubusercontent.com/107942776/263494589-86668cd7-c7d0-4a02-bce0-9b15c5a634e8.png" width="500"/>
<img src="https://user-images.githubusercontent.com/107942776/263495102-83c1b1e8-2155-4e56-95fc-40017cfedaa0.png" width="500"/>

<em>Search:</em>
- The Search input in the OffCanvas allows the User to search for Jobs by Title, Company, or Description.
- Any Jobs that meet the search criteria are shown in the Search Query page.
<img src="https://user-images.githubusercontent.com/107942776/263495285-af2ca721-da18-4bda-b655-fe94403139f6.png" width="500"/>


## Try the app yourself
<!--Watch the [Video Walkthrough](https://www.loom.com/share/33bdbc8002d44138a09159332885b55f) on Loom! -->

HireFrame is deployed on my [Portfolio Website](www.ericlfrey.com), and can be [viewed here](hf.ericlfrey.com).

1. Set up a [Firebase](https://firebase.google.com/) project - [Here's how to setup](https://www.loom.com/share/163ffe1539bb482196efa713ed6231e9)
2. Clone GSD to your local machine 
```
git@github.com:ericlfrey/PROject-Planner.git
```

3. Next, create an .env file at the root of the project and paste the following keys into the .env file:
```
NEXT_PUBLIC_FIREBASE_API_KEY=""
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=""
NEXT_PUBLIC_FIREBASE_DATABASE_URL=""
NEXT_PUBLIC_FIREBASE_PROJECT_ID=""
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=""
NEXT_PUBLIC_FIREBASE_APP_ID=""
```
4. The last portion of the Firebase walkthrough from step 1 highlights where to find the values to put in the empty strings in the code snippet of step 3 . From Firebase, copy the values and paste them into the empty strings of the respective keys located in the .env file.
5. Be in the root directory and from your command line, run
```
npm i
```
6. Now from your command line, run:
```
npm run prepare
```
7. To start Get Shit Done, run:
```
npm run dev
```
8. Click http://localhost:3000 in the terminal to open the browser



## Planning
#### ERD for HireFrame 2.0 **Note - This ERD is not accurate for the FrontEnd version, and is for the upcoming Full Stack version
<img src="https://user-images.githubusercontent.com/107942776/263494114-47b989c5-d5d4-4ec8-b628-ca59600065d9.png" width="500"/>

[Link to ERD](https://dbdiagram.io/d/64adea7502bd1c4a5ee863ff)


## Code Snippets
#### Job Card
<img src="https://user-images.githubusercontent.com/107942776/263494015-e5bce5ad-4d92-4047-8935-8edfaa6fc6f0.png" width="600"/>

#### Job Context
<img src="https://user-images.githubusercontent.com/107942776/263494066-e532bce5-1379-490b-a171-26bc7dc01fd6.png" width="600"/>

## Tech Stacks
<div align="center">  
<a href="https://reactjs.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React" height="50" /></a>  
<a href="https://nextjs.org/" target="_blank" rel="noreferrer"> <img src="https://cdn.worldvectorlogo.com/logos/next-js.svg" alt="nextjs" width="40" height="40"/>
<a href="https://firebase.google.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/firebase.png" alt="Firebase" height="50" /></a> 
<a href="https://www.w3schools.com/css/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" height="50" /></a>  
<a href="https://en.wikipedia.org/wiki/HTML5" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5" height="50" /></a>  
<a href="https://getbootstrap.com/docs/3.4/javascript/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/bootstrap-plain.svg" alt="Bootstrap" height="50" /></a>  
</div>


## Contributors
- [Eric Frey](https://github.com/ericlfrey)

