<template>
  <v-app id="app">
    <!-- <div id="nav">
      <router-link to="/">daraz home</router-link> |
      <router-link to="/about">daraz About</router-link>
    </div>-->
    <app-toolbar></app-toolbar>
    <router-view />
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import AppToolbar from "./components/AppToolbar";
import AppFooter from "./components/AppFooter";
export default {
  components: { AppToolbar, AppFooter }
};
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
