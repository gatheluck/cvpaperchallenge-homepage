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
            100人以上の研究メンバーと1,700人以上のサーベイメンバーが所属を超えて活動しています。</br>
            ご参加になりたい方は<nuxt-link to="/recruit">メンバー募集ページ</nuxt-link>をご覧下さい。
          </div>
        </b-container>
      </template>
    </b-jumbotron>

    <b-container>
      <h2>Headquarters team</h2>
	  <b-row>
        <b-col
          v-for="(member, index) in members"
          :key="index"
          cols="12" sm="6" md="4" lg="3"
          class="d-flex mb-4"
        >
          <MemberCard :member="member" class="card-item" />
        </b-col>
      </b-row>
    </b-container>

    <b-container class="mt-4">
      <div style="font-size:1.2em">
        <p>総勢100名を超えるメンバーが研究活動を行っています。</p>
      </div>
    </b-container>
  </div>
</template>

<script>
import MemberCard from "~/components/MemberCard.vue";

const members = require('~/data/members.json').content;

export default {
  components: {
    MemberCard
  },
  data() {
    return {
      members
    }
  }
}
</script>

<style>
.card-wrapper {
  width: 250px;
}

b-row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;
}

b-col {
  display: flex;
  justify-content: flex-start;
}
</style>