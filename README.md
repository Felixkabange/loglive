# client

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Chatty App

Chatty is a simple real-time chat application that allows users to register and send messages to other users based on their usernames. It leverages Vue.js for the frontend and Node.js with Express for the backend, using Socket.IO for real-time communication and Sequelize as the ORM for database operations.

## Features

- User registration
- Real-time messaging
- User search by username

## Technologies

- **Frontend**: Vue.js, Vuetify for UI components.
- **Backend**: Node.js, Express.js server.
- **Real-Time Engine**: Socket.IO.
- **Database**: MySQL with Sequelize as the ORM.
- **Styling**: Vuetify.

## Project setup

First, clone the repository to your local machine:

```bash
git clone (https://github.com/Felixkabange/loglive.git)
cd client

** Development Decisions ** 

** Frontend ** 
Vue.js: Chosen for its ease of integration, reactivity, and community support.
Vuetify: Provides a suite of UI components that are both attractive and functional, speeding up the development process.

** Backend **

Node.js and Express: A popular combination for building efficient and scalable server-side applications.
Socket.IO: Enables real-time, bidirectional and event-based communication.

** Database **

Sequelize: Provides easy handling of SQL operations and data models. It also allows for simple migration and has robust support for transactions and rollbacks.

** Architecture **

The application follows a standard MVC architecture for the backend and a component-based architecture for the frontend, promoting separation of concerns and making the codebase easier to manage and scale.

** How to Use ** 

Register: Start by registering a username.
Login: Currently implicit once registered.
Chat: After, use the chat interface to send messages to registered users. 


