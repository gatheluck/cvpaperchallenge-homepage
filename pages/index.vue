<template>
<div>
  <b-jumbotron header-level="4">
    <template slot="header">
      <b-container>
      <div class="text-center">
        <b-img fluid :src="require('~/static/image/logo/title.png')" width="400"/>
      </div>
      </b-container>
    </template>

    <template slot="lead">
      <b-container>
        <div class="text-center">コンピュータビジョン分野の今を映し、新しいトレンドを創り出す。</div>
      </b-container>
    </template>

    <b-container>
      <hr class="my-4"/>
    </b-container>

    <!-- Button -->
    <b-container>
    <div class="text-center mb-3">
      <b-button class="main-button" to="/xccv" size="lg" variant="primary">
        <span>PRMU/CVIM RMP x cvpaper.challenge<br>研究メンバー募集ページ</span>
        <font-awesome-icon icon="angle-right"/>
      </b-button>
    </div>
    </b-container>

    <b-container>
    <div class="text-center">
      <b-button class="main-button" to="/recruit" size="lg" variant="dark">
        <span>メンバー募集ページ</span>
        <font-awesome-icon icon="angle-right"/>
      </b-button>
    </div>
    </b-container>
  </b-jumbotron>

  <!-- New Feed -->
  <b-container>
  <div class="mt-4">
    <b-row class="mt-5">
      <b-col cols="12">
        <news-feed :news="news" :isLoading="isLoading"/>
      </b-col>
    </b-row>
  </div>
  </b-container>

  <!-- Contact -->
  <b-container>
  <div class="mt-4">
    <h2>Contact</h2>
    <a href="mailto:cvpaper.challenge&#64;gmail.com">cvpaper.challenge [at] gmail.com</a>
  </div>
  </b-container>
</div>
</template>

<script>
import NewsFeed from "~/components/NewsFeed.vue";
import axios from "axios";

export default {
  components: {
    NewsFeed
  },
  asyncData() {
    let news = require('~/static/data/news.json').content;
    return {
      news,
      isLoading: false,
    }
  },
};
</script>

<style>
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
} */


.main-button {
  border-radius: 25px;
}
</style>
