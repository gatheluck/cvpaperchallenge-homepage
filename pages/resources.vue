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
		    v-model="slidesCurrentPage"
        :total-rows="Math.ceil(slides.length/2)"
        :per-page="slidesPerPage"
        align="center"
        @change="handleChangeSlidePage">
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
        v-model="talksCurrentPage"
        :total-rows="Math.ceil(talks.length/2)"
        :per-page="talksPerPage"
        align="center"
        @change="handleChangeTalksPage">
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

// used for sort by date 
function compareByDate(a, b) { 
  return new Date(b.date) - new Date(a.date);
};

// used for create pair
function makePair(prev, curr) {
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
} 

export default {
  components: {
    SlideCard,
    TalkCard,
  },
  asyncData() {
    let slides = require('~/static/data/slides.json').content;
    let talks = require('~/static/data/talks.json').content;
    let slidesPerPage = 3;
    let talksPerPage = 3;
    let slidesNumPage = Math.ceil(Math.ceil(slides.length/2)/slidesPerPage);
    let talksNumPage = Math.ceil(Math.ceil(talks.length/2)/talksPerPage);
    return {
      talks,
      slides,
      isLoading: false,
      slidesPerPage: slidesPerPage,
      talksPerPage: talksPerPage,
      slidesNumPage: slidesNumPage,
      talksNumPage: talksNumPage,
      slidesCurrentPage: 1,
      talksCurrentPage: 1,
    }
  },
  computed: {
    slidePairs() {
      if (this.slidesCurrentPage < this.slidesNumPage){
        return this.slides.sort(compareByDate).reduce(makePair, []).slice((this.slidesCurrentPage-1)*this.slidesPerPage, this.slidesCurrentPage*this.slidesPerPage)
      } else {
        return this.slides.sort(compareByDate).reduce(makePair, []).slice((this.slidesCurrentPage-1)*this.slidesPerPage)
      }
    },
    talkPairs() {
      if (this.talksCurrentPage < this.talksNumPage){
        return this.talks.sort(compareByDate).reduce(makePair, []).slice((this.talksCurrentPage-1)*this.talksPerPage, this.talksCurrentPage*this.talksPerPage)
      } else {
        return this.talks.sort(compareByDate).reduce(makePair, []).slice((this.talksCurrentPage-1)*this.talksPerPage)
      }
    },
  },
  methods: {
    handleChangeSlidePage(page) {
      this.slidesCurrentPage=page;
    },
    handleChangeTalkPage(page) {
      this.talksCurrentPage=page;
    }
  },
};
</script>