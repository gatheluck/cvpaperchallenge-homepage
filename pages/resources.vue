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
            サーベイ資料等を公開しております。
          </div>
        </b-container>
      </template>
    </b-jumbotron>

    <!-- Survey part -->
    <b-container>
      <div class="mt-4">
        <h2>Survey</h2>
        <b-card title="網羅的サーベイ"
                class="mt-2 with-shadow">
          <b-card-text>
            CV分野のトップ会議に採択された論文の網羅的なサーベイを行い、まとめ資料を公開しています。
          </b-card-text>

          <a target="_blank" href="http://xpaperchallenge.org/cv/survey/">[Project page]</a>
        </b-card>
      </div>
    </b-container>

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
      <div align="left" v-for="([ slide1, slide2 ], idx) in slidePairs" :key="idx"  class="mb-1">
        <!-- if both slide1 and slide2 have values -->
        <div v-if="slide2">
          <!-- use b-card-group to automatically align the hight of slide cards -->
          <b-card-group deck>  
            <slide-card :slide="slide1"/>
            <slide-card :slide="slide2"/>
          </b-card-group>
        </div>

        <!-- only slide1 has value -->
        <div v-else>
          <!-- use b-row and b-col to prevent weird stretch of last card -->
          <b-row class="mb-1">
            <b-col class="mb-1" cols="12" md="6">
              <slide-card :slide="slide1"/>
            </b-col>
          </b-row>
        </div>
      </div>

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

export default {
  components: {
    SlideCard,
    TalkCard,
  },
  asyncData() {
    let slides = require('~/static/data/slides.json').content;
    let talks = require('~/static/data/talks.json').content;
    let slidesPerPage = 4;
    let talksPerPage = 4;
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
        return this.slides.sort(this.$compareByDate).reduce(this.$makePair, []).slice((this.slidesCurrentPage-1)*this.slidesPerPage, this.slidesCurrentPage*this.slidesPerPage)
      } else {
        return this.slides.sort(this.$compareByDate).reduce(this.$makePair, []).slice((this.slidesCurrentPage-1)*this.slidesPerPage)
      }
    },
    talkPairs() {
      if (this.talksCurrentPage < this.talksNumPage){
        return this.talks.sort(this.$compareByDate).reduce(this.$makePair, []).slice((this.talksCurrentPage-1)*this.talksPerPage, this.talksCurrentPage*this.talksPerPage)
      } else {
        return this.talks.sort(this.$compareByDate).reduce(this.$makePair, []).slice((this.talksCurrentPage-1)*this.talksPerPage)
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