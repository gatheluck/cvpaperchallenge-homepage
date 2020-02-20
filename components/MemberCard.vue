<template>
  <b-card class="with-shadow">
    <b-media>
      <b-img
        v-if="member.image"
        slot="aside"
        :src="member.image"
        width="100"
        height="100"
        alt="placeholder"
      />
      <b-img
        v-else
        slot="aside"
        :src="require('~/static/image/avatar/members.jpg')"
        width="100"
        height="100"
        alt="placeholder"
      />
      <h5 class="mt-0">{{ member.name }}</h5>
      <p>{{ member.affiliation }}</p>
      <a :href="member.url" target="_blank" class="btn stretched-link"></a>
    </b-media>
  </b-card>
</template>

<script>
export default {
  props: {
    member: Object
  }
};
</script>