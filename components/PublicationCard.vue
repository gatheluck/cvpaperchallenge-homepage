<template>
  <b-card 
  v-bind:title="publication.title"
  v-bind:sub-title="publication.authors"
  class="mt-2 with-shadow">

    <!-- infomation of conference / journal / workshop -->  
    <a v-bind:href="publication.conference_url">
      <!-- conference / journal with abbreviation --> 
      <b-card-text v-if="publication.conference_workshop=='' && publication.conference_abbreviation!=''">
        {{ publication.conference_name }} ({{ publication.conference_abbreviation }}), {{publication.conference_year}}
      </b-card-text>
      <!-- conference / journal without abbreviation --> 
      <b-card-text v-else-if="publication.conference_workshop=='' && publication.conference_abbreviation==''">
        {{ publication.conference_name }}, {{publication.conference_year}}
      </b-card-text>
      <!-- workshop --> 
      <b-card-text v-else v-bind:href="publication.conference_url">
        {{ publication.conference_abbreviation }} Workshop on {{ publication.conference_workshop }}, {{publication.conference_year}}
      </b-card-text>
    </a>

    <!-- urls of pdf / github --> 
    <a v-if="publication.paper_url!=''" v-bind:href="publication.paper_url" :class="card-link">[PDF]</a>
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