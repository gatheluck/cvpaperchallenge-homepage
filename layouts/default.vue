<template>
  <div class="site">
    <navbar/>
    <main class="content">
      <nuxt/>
    </main>
    <my-footer/>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import MyFooter from "~/components/Footer.vue";

export default {
  components: {
    Navbar,
    MyFooter
  }
};
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

/* .button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
} */

.site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.content {
  display: flex;
  min-height: 80vh;
  flex-direction: column;
}
.footer {
  min-height: 10vh;
  background-color: #f5f5f5;
  flex: 1;
}
</style>
