<template>
  <div>
    <b-jumbotron header-level="4">
      <template slot="header">
        <b-container>
          <div class="text-center">Publications</div>
        </b-container>
      </template>

      <template slot="lead">
        <b-container>
          <div class="text-center">
          </div>
        </b-container>
      </template>
    </b-jumbotron>

    <b-container v-if="!isLoading">
      <v-row 
        v-for="(publication, idx) in latestPublications"
        :key="idx"
        :href="publication.paper_url"
        target="_blank">
        <b-col>
          <publication-card :publication="publication"/>
        </b-col>
      </v-row>

    </b-container>
    <p v-else class="text-center">
      <font-awesome-icon class="mr-5" :icon="['fas', 'spinner']" pulse size="2x"/>
    </p>
  </div>
</template>

<script>
import PublicationCard from "~/components/PublicationCard.vue";
import axios from "axios";

export default {
  components: {
    PublicationCard
  },
  asyncData() {
    let publications = require('~/static/data/publications.json').content;
    return {
      publications,
      isLoading: false
    }
  },
  computed: {
    latestPublications() {
      return [...this.publications].sort(
        (a, b) => new Date(b.Timestamp) - new Date(a.Timestamp)
      );
    }
  }
};
</script>