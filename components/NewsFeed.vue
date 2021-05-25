<template>
<div>
    <h2>What's New</h2>
    <b-list-group v-if="!isLoading" class="mt-4">
      <b-list-group-item
        v-for="(news, idx) in newsItems"
        :key="idx"
        :href="news.link"
        target="_blank"
      >
        <b-row>
          <b-col
            cols="2"
            md="2"
            class="text-left"
          >{{ news.date }}</b-col>
          <b-col>{{ news.title }}</b-col>
        </b-row>
      </b-list-group-item>
    </b-list-group>
    <b-button :pressed.sync="isShowingAllNews" variant="dark" class="mt-2">{{ showButtonMessage  }}</b-button>
</div>  
</template>

<script>
const allNews = require('~/data/news.json')

export default {
	data() {
    return {
      isShowingAllNews: false
    }
  },
  computed:{
    newsItems() {
      if (this.isShowingAllNews) {
        return allNews
      }
      return allNews.slice(0, 5)
    },
    showButtonMessage() {
      if (this.isShowingAllNews) {
        return "Hide"
      } else {
        return "Read More"
      }
    }  
  }
}
</script>