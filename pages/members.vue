<template>
  <div>
    <b-jumbotron header-level="4">
      <template slot="header">
        <b-container>
          <div class="text-center">Members</div>
        </b-container>
      </template>

      <template slot="lead">
        <b-container>
          <div class="text-center">
            ご参加になりたい方は
			<nuxt-link to="/recruit">メンバー募集ページ</nuxt-link>
			をご覧下さい。
            <!-- <a href="https://twitter.com/NlpaperChalleng" target="_blank">@NlpaperChalleng</a>へDMください。 -->
          </div>
        </b-container>
      </template>
    </b-jumbotron>

    <b-container v-if="!isLoading">
      <b-row v-for="([ member1, member2 ], idx) in memberPairs" :key="idx" class="mb-2">
        <b-col class="mb-2" cols="12" md="6">
          <member-card :member="member1"/>
        </b-col>
        <b-col v-if="member2">
          <member-card :member="member2"/>
        </b-col>
      </b-row>
    </b-container>
    <p v-else class="text-center">
      <font-awesome-icon class="mr-5" :icon="['fas', 'spinner']" pulse size="2x"/>
    </p>
  </div>
</template>

<script>
import MemberCard from "~/components/MemberCard.vue";
import axios from "axios";

export default {
  components: {
    MemberCard
  },
  asyncData() {
    let members = require('~/static/data/members.json').content;
    return {
      members,
      isLoading: false
    }
  },
  computed: {
    memberPairs() {
      return this.members.reduce((prev, curr) => {
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
    }
  }
};
</script>