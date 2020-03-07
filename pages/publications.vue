<template>
  <div>
    <b-jumbotron header-level="4">
      <template slot="header">
        <b-container>
          <div class="text-center">Publications</div>
        </b-container>
      </template>

      <template slot="lead">
        <b-container>
          <div class="text-center">
            For an idea that does not first seem insane, there is no hope - Alboert Ainstain
          </div>
        </b-container>
      </template>
    </b-jumbotron>

    <b-container v-if="!isLoading">
      <v-row 
        v-for="(publication, idx) in latestPublications"
        :key="idx"
        :href="publication.paper_url"
        target="_blank">
        <b-col>
          <publication-card :publication="publication"/>
        </b-col>
      </v-row>

    </b-container>
    <p v-else class="text-center">
      <font-awesome-icon class="mr-5" :icon="['fas', 'spinner']" pulse size="2x"/>
    </p>
  </div>
</template>

<script>
import PublicationCard from "~/components/PublicationCard.vue";
import axios from "axios";

// 
function parseConferenceName(publication) {
  // arxiv preprint
  if (publication.preprint=='Yes') 
    return publication.conference_name;
  
  var confname_for_display = '';

  // workshop
  if (publication.conference_workshop) {
    if (publication.conference_abbreviation){
      confname_for_display += publication.conference_abbreviation;
    } else {
      confname_for_display += publication.conference_name;
    }
    confname_for_display += '  Workshop on  ' + publication.conference_workshop;
  // conference procceding or journal
  } else {
    confname_for_display += publication.conference_name;
    if (publication.conference_abbreviation)
      confname_for_display += ' ('+ publication.conference_abbreviation +')';
  }

	if (publication.conference_year) {
		confname_for_display += ', ' + publication.conference_year;
  }
  
	return confname_for_display;
}

export default {
  components: {
    PublicationCard
  },
  asyncData() {
    let publications = require('~/static/data/publications.json').content;
    return {
      publications,
      isLoading: false
    }
  },
  computed: {
	  latestPublications() {
      let sorted_publications = this.publications.sort(this.$compareByDate);
	  
	    sorted_publications.forEach(
        function(value, index) {
          sorted_publications[index]['confname_for_display'] = parseConferenceName(value);
        });
      
      return sorted_publications
    }
  }
};
</script>