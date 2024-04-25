<template>
  <v-container>
    <v-form @submit.prevent="registerUser">
      <v-text-field v-model="username" label="Username" required></v-text-field>
      <v-btn type="submit" color="success">Register</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import axios from 'axios';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

export default {
  name: 'UserRegister',
  setup() {
    const username = ref('');
    const router = useRouter();

    const registerUser = () => {
      axios.post('/api/register', { username: username.value })
        .then(response => {
          console.log(response.data);
          router.push('/chats');  // Use router.push to navigate
        })
        .catch(error => {
          console.error(error);
        });
    };

    return { username, registerUser };
  }
};
</script>


  
  