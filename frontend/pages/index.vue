// app/pages/index.vue

<template lang="pug">
h1 Welcome to TRM
.login-container 
  h2 Login
  form @submit.prevent="handleLogin"
    div
      label(for="username") Username
      input(type="text" name="username" v-model="username" required)
    div
      label(for="password") Password
      input(type="password" name="password" v-model="password" required)
    button(type="submit") Login
    p(v-if="error") {{ error }}
</template>


<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

// Defining the response type
type LoginResponse = {
  success: boolean;
  message?: string;
  data?: any;
}

export default defineComponent({
  data() {
    return {
      username: '',
      password: '',
      error: null as string | null 
    };
  },

  methods: {
    async handleLogin() {
      this.error = null;

      try {
        // Indicating that the response should be of type LoginResponse
        const response = await $fetch<LoginResponse>('backend/server/api/auth/login', {
          method: 'POST',
          body: {
            username: this.username,
            password: this.password
          }
        });

        if (response.success) {
          // Using the router for navigation
          this.$router.push('/dashboard');
        } else {
          this.error = 'Invalid username or password';
        }

      } catch (err) {
        this.error ='An error occured. Please try again later.';
      }
    },
    async checkSession() {
      let ret = await $fetch("backend/server/api/session/bar");
      (this.$refs.ret as HTMLPreElement).innerHTML = JSON.stringify(
        ret,
        null,
        4
      );  
    },
  },
});
</script>

