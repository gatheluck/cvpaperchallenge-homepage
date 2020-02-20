<template>
  <div>
    <b-jumbotron header-level="4">
      <template slot="header">
        <b-container>
          <div class="text-center">Recruit</div>
        </b-container>
      </template>

      <template slot="lead">
        <b-container>
          <div class="text-center">
          </div>
        </b-container>
      </template>
    </b-jumbotron>

    <b-container v-if="!isLoading">

    </b-container>
    <p v-else class="text-center">
      <font-awesome-icon class="mr-5" :icon="['fas', 'spinner']" pulse size="2x"/>
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  components: {
    
  },
};
</script>