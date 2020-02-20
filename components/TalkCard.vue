<template>
  <b-card 
  v-bind:title="talk.name"
  v-bind:sub-title="talk.speaker"
  class="mt-2">
    <!-- urls of slide / event --> 
    <a v-if="talk.event_url!=''" v-bind:href="talk.event_url" :class="card-link">[Event]</a>
    <a v-if="talk.slide_url!=''" v-bind:href="talk.slide_url" :class="card-link">[Slide]</a>
  </b-card>
</template>

<script>
export default {
	props:{
		talk: Object
  },
};
</script>