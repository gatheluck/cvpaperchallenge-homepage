<template>
  <b-card 
  v-bind:title="slide.title"
  v-bind:sub-title="slide.authors"
  class="mt-2">
    <!-- urls of slide / event --> 
    <a v-if="slide.url!=''" v-bind:href="slide.url" :class="card-link">[Slide]</a>
  </b-card>
</template>

<script>
export default {
	props:{
		slide: Object
  },
};
</script>