[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/CViV37hj)

# u08 -Business Idea
<span style="color:#; font-family: ; font-size: 4em;">Chat</span> <span style="color:#8B5CF6;font-family: ; font-size: 4em;">Labs</span> 

![Chat Labs logo](/chatlabs/src/assets/logo2.png "Chat Labs logo")

# Innehållsförteckning 

1. [Installation](#installation)
2. [Kodbas](#kodbas)
3. [Användning](#användning)
4. [Dokumentation](#dokumentation)
5. [Bidragarna](#bidragarna)
6. [Licens](#licens)


# Installation
För att komma igång med det här projektet, följ stegen nedan:

Klona repo till dator:

bash
Copy code
git clone https://github.com/your-username/your-project.git
<br>Navigera till projektkatalogen:

bash

cd your-project
Installera frontend-dependenciesn med npm:

bash

cd frontend
npm install
Installera backend-dependensies med npm:

bash

cd ../backend
npm install
Set up MongoDB databas:


# Kodbas
Projektet består av följande kodbaser/komponenter

### 1. **Frontend**:

* Description: The frontend codebase is responsible for the user interface and client-side functionality.
* Technologies/Libraries Used: React, HTML, CSS (Tailwind), JavaScript, etc.
* Directory Structure:
    * chatlabs/: main map for frontend
        * .env:
        * src/: contains source code
             * components/: 
                 * CharacterForm.tsx:
                 * ChatPrompt.tsx:
                 * Footer.tsx:
                 * NavBar.tsx:
                 * Steps.tsx: .
            <br>
             * pages/: 
                 * Dashboard.tsx:
                 * db-2.tsx:
                 * db-4.tsx:
                 * FormModal.tsx:
            * App.tsx:
            * index.css:
            * main.tsx :

              
             

### 2. **Backend**:

* Beskrivning: Handles server-side logic and interacts with databases or external APIs.
* Technologies/Libraries Used: Node.js, Express, MongoDB/Mongoose, etc.
* Directory Structure:
    *  backend/: main map for backend. 
        * **'.env'**: contains environment variables used in the application. Let's break down the variables:
            * **'NODE_ENV'**: Specifies the environment mode, usually set to development in this case.
            * **'PORT'**: Specifies the port on which the server will listen for incoming requests, set to 4000.
            * **'OPENAI_API_KEY'**: API key for OpenAI GPT-3.5 Turbo model, used for generating responses.
            * **'ELEVENLABS_KEY'**: API key for Eleven Labs text-to-speech API, used for converting text to audio.

        * **'app.js'**: the entry point of the application and sets up the Express server:

            * Importing necessary packages such as express, cors, fs, mongoose, axios, and body-parser.

            *  Using dotenv package to load environment variables from the **.env** file.

            * Configuring middleware for request handling, including cors to enable cross-origin resource sharing, and body-parser to parse JSON and URL-encoded data.

            * Establishing a connection to the MongoDB database using the mongoose package.

            * Routes setup: Defining various routes using app.put(), app.delete(), app.post(), and app.get() methods. These routes handle different CRUD operations for the user characters.

            
        * **'userCRUD.js'**: Exports functions for performing CRUD operations on user characters. Here's a breakdown of the functions:

             * **'create'**: Creates a new user character by saving it to the database.
            * **'readAll'**: Retrieves all user characters from the database.
            * **'read'**: Retrieves a specific user character based on the provided id.

        * **userSchema.js**: Defines the Mongoose schema for the user and character objects. Here's a breakdown of the schema:
            * **'email'**: String field representing the email of the user. It is required.
            * **'sub'**: String field representing a subject, not required.
            * **'Characters'**: An array field containing objects representing user characters. Each character object has the following properties:

            * **'name'**: String field representing the name of the character. It is required.
            * **'backstory'**: String field representing the backstory of the character. It is required.
            * **'traits'**: String field representing the traits of the character. It is required.

# Användning

# Dokumentation

# Bidragarna

# Licens

