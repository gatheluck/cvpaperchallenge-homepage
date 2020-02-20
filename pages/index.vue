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
          <div class="text-center">コンピュータビジョン分野の今を映し、創り出す挑戦です。</div>
        </b-container>
      </template>

      <b-container>
        <hr class="my-4">

        <div class="text-center">
          <b-button class="main-button" to="/members" size="lg" variant="info">
            <span>メンバー募集ページ</span>
            <font-awesome-icon icon="angle-right"/>
          </b-button>
        </div>

		    <b-row class="mt-5">
          <b-col cols="12">
            <news-feed :news="news" :isLoading="isLoading"/>
          </b-col>
        </b-row>
      </b-container>
    </b-jumbotron>
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
