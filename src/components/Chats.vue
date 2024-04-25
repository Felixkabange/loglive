<template>
    <v-app>
      <v-main>
        <v-container>
          <v-text-field label="Search for username" v-model="searchUsername" @keyup.enter="searchUser"></v-text-field>
          <v-text-field label="Enter your message" v-model="message" :disabled="!userFound"></v-text-field>
          <v-btn :disabled="!userFound" @click="send">Send</v-btn>
          <div v-if="searchResult !== null">
            {{ searchResult }}
          </div>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script>
  import { io } from 'socket.io-client';
  import axios from 'axios'; 
  
  export default {
    name: 'ChatComponent', 
    data() {
      return {
        searchUsername: '',
        message: '',
        username: '',
        socket: null,
        userFound: false,
        searchResult: null,
      };
    },
    created() {
      this.initializeSocket();
    },
    methods: {
      initializeSocket() {
        // Establish connection with the Socket.IO server
        this.socket = io('http://localhost:3000');
  
        // Listen for incoming messages
        this.socket.on('chat message', (msg) => {
          // Handle the incoming message as needed
          console.log('Received message:', msg);
        });
      },
      searchUser() {
        // Use axios to send a GET request to your server to search for the username
        axios.get(`/api/users/${this.searchUsername}`)
          .then(response => {
            // Handle response - check if the user was found
            if (response.data.found) {
              this.userFound = true;
              this.searchResult = "User found! You can now send a message.";
            } else {
              this.userFound = false;
              this.searchResult = "No user found with that username.";
            }
          })
          .catch(error => {
            console.error('Error searching for user:', error);
            this.userFound = false;
            this.searchResult = "There was an error searching for the user.";
          });
      },
      send() {
        // Only allow sending if the user was found
        if (this.userFound) {
          this.socket.emit('chat message', {
            username: this.searchUsername,
            content: this.message,
          });
  
          // Clear the message field
          this.message = '';
        }
      },
    },
  };
  </script>
  
