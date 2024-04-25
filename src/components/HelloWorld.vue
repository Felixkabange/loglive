<template>
  <v-app>
    <v-app-bar app color="deep-purple accent-4" dark>
      <v-toolbar-title>Chatty</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/chats">Chats</v-btn>
      <v-btn text to="/register">Register</v-btn>
    </v-app-bar>

    <!-- Hero Section -->
    <v-img
      src="https://via.placeholder.com/1920x1080.png?text=Chatty+App"  
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="60vh"
    >
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1 class="display-1 text-white mb-4">Welcome to Chatty</h1>
            <h4 class="subheading text-white">Connect with friends across the globe.</h4>
            <v-btn large color="pink" to="/register" class="mt-5">Get Started</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-img>

    <v-main>
      <v-container>
        <h3>Explore Features</h3>
        <p>
          Visit the <v-btn text to="/chats" color="deep-purple accent-4">Chats</v-btn> to start messaging.
        </p>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<style scoped>
.v-btn {
  color: white;
}
.hero-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
}
</style>
