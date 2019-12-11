<template>
  <div id="app">
    <div id="nav">
      <div>{{ userId }}</div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import ky from 'ky'

export default {
  data() {
    return {
      userId: null,
    }
  },
  created() {
    ;(async () => {
      this.userId = await ky.get('http://localhost:3000/api/login').json()
    })()
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
