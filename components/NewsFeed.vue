<template>
  <div>
    <h2>What's New</h2>
    <b-list-group v-if="!isLoading" class="mt-4">
      <b-list-group-item
        v-for="(news, idx) in latestNews"
        :key="idx"
        :href="news.url"
        target="_blank"
      >
        <b-row>
          <b-col
            cols="4"
            md="2"
            class="text-right"
          >{{ new Date(news.date).toLocaleDateString('ja-JP') }}</b-col>
          <b-col>{{ news.content }}</b-col>
        </b-row>
      </b-list-group-item>
    </b-list-group>


  </div>
  
</template>

<script>
export default {
  props: {
    news: Array,
    isLoading: Boolean
  },

  computed: {
    latestNews() {
      return [...this.news].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
    }
  }
}
</script>