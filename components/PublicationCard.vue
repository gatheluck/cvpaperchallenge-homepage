<template>
  <b-card 
  v-bind:title="publication.title"
  v-bind:sub-title="publication.authors"
  class="mt-2 with-shadow">

    <!-- name of the conference / journal / arXiv Preprint --> 
    <b-card-text class="mb-2">
      <a v-if="publication.preprint=='No'" v-bind:href="publication.conference_url"> {{ publication.confname_for_display }} </a>
      <a v-else> {{ publication.confname_for_display }} </a>
    </b-card-text>

    <!-- urls of pdf / github --> 
    <a v-if="publication.paper_url!=''" v-bind:href="publication.paper_url" :class="card-link">[Paper]</a>
    <a v-if="publication.github_url!=''" v-bind:href="publication.github_url" :class="card-link">[GitHub]</a>
  </b-card>
</template>

<script>
export default {
	props:{
		publication: Object
  },
};
</script>