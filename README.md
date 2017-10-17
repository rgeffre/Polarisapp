# Polaris Emergency Preparation
#### By Renee Geffre, David Goodrich, Michael Kallgren, Brian Martin

## Quick Overview
### What this app is for

### Why we did it
  The impetus for this project came about during the Atlantic hurricane season of 2017. After Hurricane Harvey flooded Houston, people used social media to broadcast medical emergency information so first responder crews could get to the correct places. And after a double blow from Hurricanes Irma and Maria, Puerto Rico’s infrastructure collapsed – no electricity but what portable generators could make,no running water, and numerous roads wiped away in the waters. The goal of Polaris is twofold: 
1.	We want to teach people how to help themselves in the immediate aftermath of disaster.
2.	We want to set up an easy tracking system for relief crews to get people the help they cannot give themselves. 


<a id = "backToTop"></a>
# Table of Contents

1. [Site Features](#features)
2. [How to use](#howToUse)
	1. [Sign Up Process](#signup)
	2. [Creation of Emergency Profile](#makingEmergencyProfile)
	3. [Searching Articles](#searchArticles)
	4. [Writing Articles](#writeArticles)
    	* [Why Article Vetting is So Important](#whyVetting)
3. [Use of Emergency Profile](#usingEmergencyProfile)
	1. [When is the Emergency Profile Activated?](#activeEmergency)
	2. [How to Update Emergency Profile](#updateEmergencyProfile)
	3. [Types of Emergency Categories](#emergencyCategories)
4. [Resource Sharing](#resourceSharing)
	1. [Drone Database](#droneDatabase)
5. [Privacy](#privacy)
	1. [Personal Data Access](#personalData)
6. [Technical Data](#techData)
	1. [Dependencies](#dependencies)
	2. [User Authentication](#userAuth)
7. [Future Improvements](#futureImprovements)
	1. [List of Future Features We Want to Have](#futureFeatures)
8. [Aditional Resources](#additionalResources)


<!-- SECTION 1 - SITE FEATURES -->
<a id= "features"></a>
# Site Features
* __Catalog of articles written by vetted users and taken from official sources__
* __For users who sign up and create a profile:__
    * The ability to save useful articles so you can have all the info you need in one place
    * An emergency status profile _(optional but highly recommended)_:
        * Your geocoded address so emergency crews can know your last known location
        * The ability to mark yourself either "safe" or "not safe"
        * If you are not safe, you can let emergency responders know what your needs are, 
        from immediate medical attention, to childcare supplies, to medicine, to food.
    * The opportunity to apply for "blogger" status, which lets you submit emergency prep articles,DIY tutorials, survival tips, etc.


<!-- SECTION 2 - HOW TO USE -->
<a id= "howToUse"></a>
# How To Use

<a id= "signup"></a>
## Sign Up Process

<a id= "makingEmergencyProfile"></a>
## Creation of Emergency Profile

The Emergency Profile is something that all registered users are strongly recommended to fill out. It is a tool first and foremost meant for use by relief crews to assist you and create a more cohesive "sitational awareness map" for their efforts. It is also a tool for allowing friends and family to be kept abreast of your situation in the event that they cannot contact you (and vice versa) directly.

The Emergency Profile is populated by the following fields:
1. Your name
2. Your street address

See [Personal Data Access](#personalData) for information about how your personal data is stored and used.

<a id= "searchArticles"></a>
## Searching Articles

<a id= "writeArticles"></a>
## Writing Articles

<a id= "whyVetting"></a>
### Why Article Vetting is So Important

In a survival situation, two things are incredibly lethal: __ignorance__ and __misinformation__.  The goal of this website is to help avoid ignorance in the event of an emergency, and the last thing we want is to undermine any good we do by spreading misinformation. This is why anyone who wishes to become a blogger must submit an application wherein they discuss their credentials. Even after approval, articles will still have to go through a collaborative editing process (similar to Wikipedia's model) to ensure accuracy.


<!-- SECTION 3 - USE OF EMERGENCY PROFILE -->
<a id = "usingEmergencyProfile"></a>
# Use of Emergency Profile

In the event of an emergency, your status will be automatically switched to "Not Safe" until either you, a person with your login credentials (such as an emergency contact) , or a relief crew switch your status to "Safe". See below for further details.

<a id = 'activeEmergency'></a>
## When is the Emergency Profile Activated?

The Emergency Profile is 'activated' in the event of a natural disaster by an administrator outside of the disaster zone. Using the address you provided when creating your profile, the adminstrator will determine if you are in the affected zone or not. They will then switch your Emergency Status to "Not Safe" so that relief crews know to keep an ear to the ground for you. 

<a id = 'updateEmergencyProfile'></a>
## How to Update Your Emergency Profile

You can log in at any time to mark yourself 'Safe'. If you are unable to access the webpage in the aftermath of an emergency, but you are able to reach your emergency contacts or a local relief crew who can access the webpage, they can update your status for you.

<a id = 'emergencyCategories'></a>
## Emergency Categories

In the aftermath of an emergency you have several options when marking yourself "Not Safe". To assist with relief crew triage, we have included a set of categories that you can mark yourself under/in need of: 
* Medical Assistance (Life Threatening) - for medical emergencies. __*THIS SELECTION SHOULD ALWAYS BE MADE IN CONJUCTION WITH AN ATTEMPT TO CALL TO YOUR LOCAL EMERGENCY CREW (I.E. 911).*__
* Medical/Supply Needs (Urgent but Non-Life Threatening) - for medical needs that are not urgent at the moment, i.e. you have insulin now but need a supply within the next day or two or you need water purification tablets.
* Childcare - for infant needs such as formula.
* Miscellaneous  - for anything else that is not of an urgent nature. This includes running low on food (anything over three days' worth).

<!-- SECTION 4 - RESOURCE SHARING -->
<a id= "resourceSharing"></a>
# Resource Sharing




<!-- SECTION 5 - PRIVACY -->
<a id= "privacy"></a>
# Privacy

<a id = "personalData"></a>
## Personal Data Access

The only individuals with access to your personal profile are:
  * You
  * Anyone you give your login access to (such as a personal emergency contact)

In the future, the only people who can see your location and emergency data ([see above](#usingEmergencyProfile)) will be yourself, anyone with your login info, and registered emergency crews. For the moment - while Polaris is going through development - all users can see all other users' location and emergency data on the emergency map.

<!-- SECTION 6 - TECHNICAL DATA -->
<a id = "techData"></a>
# Technical Data

<a id = "dependencies"></a>
## Dependencies

__Server Dependencies__
  	"dependencies": {
		"auth0-js": "^8.10.1",
		"body-parser": "~1.18.2",
		"concurrently": "^3.5.0",
		"cookie-parser": "~1.4.3",
		"debug": "~2.6.9",
		"express": "~4.15.5",
		"express-router": "0.0.1",
		"mongoose": "^4.11.14",
		"morgan": "~1.9.0",
		"multer": "^1.3.0",
		"nodemon": "^1.12.1",
		"react-bootstrap": "^0.31.3",
		"yarn": "^1.1.0"
  	}

__Client Dependencies__
  "dependencies": {
    "auth0-js": "^8.10.1",
    "axios": "^0.16.2",
    "concurrently": "^3.5.0",
    "react": "^16.0.0",
    "react-bootstrap": "^0.31.3",
    "react-dom": "^16.0.0",
    "react-router-dom": "^4.2.2",
    "react-scripts": "1.0.14"
  }


<a id = "userAuth"></a>
## User Authentication

Polaris authenticates users using [Auth0](https://auth0.com/), a middleware client that provides user authentication and password management services. Polaris' and Auth0's administrative teams are the only individuals with access, and your password is protected by being hashed and salted (i.e. it will never appear as plain text.)

<!-- SECTION 7 - FUTURE FEATURES -->
<a id = "futureImprovements"></a>
# Future Improvements

The following is a list of improvements we want to make.

<a id ="futureFeatures"></a>
## Features

* We want to include a medical data field for the Emergency Profile so that emergency responders can know what medicines you are taking and/or medicines you are allergic to.
*  

<a id ="knownBugs"></a>

<a id ="collabs"></a>

###


 
 Why you would want to enter information in the Drone database 
 
 
Current limitations
 
 How to contribute 
 
 Places you can go to get general information about emergency preparedness
