<template>
  <div>
	<!-- page head -->
    <b-jumbotron header-level="4">
      <template slot="header">
        <b-container>
          <div class="text-center">Resources</div>
        </b-container>
      </template>

      <template slot="lead">
        <b-container>
          <div class="text-center">
          </div>
        </b-container>
      </template>
    </b-jumbotron>

    <!-- Slides part -->
    <b-container v-if="!isLoading">
      <div class="mt-4">
        <h2>Slides</h2>
        <b-pagination
        :value="1"
        :total-rows="totalCount"
        :per-page="5"
        align="center"
        @change="handleChangePage">
        </b-pagination>
      </div>

      <!-- slide items -->
      <b-row v-for="([ slide1, slide2 ], idx) in slidePairs" :key="idx" class="mb-1">
        <b-col class="mb-1" cols="12" md="6">
          <slide-card :slide="slide1"/>
        </b-col>
        <b-col v-if="slide2">
          <slide-card :slide="slide2"/>
        </b-col>
      </b-row>
    </b-container>
    <p v-else class="text-center">
      <font-awesome-icon class="mr-5" :icon="['fas', 'spinner']" pulse size="2x"/>
    </p>


    <!-- Talk part -->
    <b-container v-if="!isLoading">
      <div class="mt-4">
        <h2>Talks</h2>
        <!-- pagenation -->
        <b-pagination
        :value="1"
        :total-rows="totalCount"
        :per-page="5"
        align="center"
        @change="handleChangePage">
        </b-pagination>
      </div>

      <!-- talk items -->
      <b-row v-for="([ talk1, talk2 ], idx) in talkPairs" :key="idx" class="mb-1">
        <b-col class="mb-1" cols="12" md="6">
          <talk-card :talk="talk1"/>
        </b-col>
        <b-col v-if="talk2">
          <talk-card :talk="talk2"/>
        </b-col>
      </b-row>
    </b-container>
    <p v-else class="text-center">
      <font-awesome-icon class="mr-5" :icon="['fas', 'spinner']" pulse size="2x"/>
    </p>
  </div>
</template>

<script>
import TalkCard from "~/components/TalkCard.vue";
import SlideCard from "~/components/SlideCard.vue";
import axios from "axios";

export default {
  components: {
    TalkCard,
    SlideCard,
  },
  asyncData() {
    let talks = require('~/static/data/talks.json').content;
    let slides = require('~/static/data/slides.json').content;
    return {
      talks,
      slides,
      isLoading: false
    }
  },
  computed: {
    talkPairs() {
      return this.talks.sort((a, b) => new Date(b.date) - new Date(a.date)).reduce((prev, curr) => {
        if (prev.length == 0) {
          return [[curr]];
        } else {
          if (prev.slice(-1)[0].length == 1) {
            return [
              ...prev.slice(0, prev.length - 1),
              [...prev.slice(-1)[0], curr]
            ];
          } else {
            return [...prev, [curr]];
          }
        }
      }, []);
    },
    slidePairs() {
      return this.slides.sort((a, b) => new Date(b.date) - new Date(a.date)).reduce((prev, curr) => {
        if (prev.length == 0) {
          return [[curr]];
        } else {
          if (prev.slice(-1)[0].length == 1) {
            return [
              ...prev.slice(0, prev.length - 1),
              [...prev.slice(-1)[0], curr]
            ];
          } else {
            return [...prev, [curr]];
          }
        }
      }, []);
    },
  }
};
</script>