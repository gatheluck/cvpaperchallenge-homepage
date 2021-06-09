<template>
  <div class="pub">
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

    <b-container>
      <div class="text-center pub-item">
      <b-card
        v-for="pub in publications"
        :key="pub.title"
        no-body
        align="left"
        class="border-0 mb-4"
      >
        <b-row no-gutters>
          <!-- left side -->
          <b-col
            v-if="pub.image"
            xl="2"
            lg="3"
            md="4"
            sm="auto"
            cols="auto"
            class="mr-3"
          >
            <b-card-img
              :src="require('~/static/image/publications/' + pub.image)"
              alt="Image"
              style="max-width: 300px"
            ></b-card-img>
          </b-col>
          <!-- right side -->
          <b-col
            xl="10"
            lg="9"
            md="8"
            sm="12"
            cols="12"
            class="mt-n4 mb-n4 ml-n3"
          >
            <b-card-body>
              <!-- title -->
              <b-card-title title-tag="h2">
                <span v-html="pub.title"></span>
              </b-card-title>
              <!-- in -->
              <b-card-sub-title sub-title-tag="p">
                In <span v-html="pub.in" class="font-italic"></span> <span v-html="pub.year"></span>
                <span v-if="pub.mention" v-html="', '"></span>
                <span v-if="pub.mention" v-html="pub.mention" class="text-primary"></span>
              </b-card-sub-title>
              <!-- authors and links -->
              <b-card-text>
                <span v-html="pub.author"></span>
                <br>
                <b-button class="btn" variant="outline-primary" v-bind:href="link" target='_blank' v-for="(link, key) in pub.links" :key="key">
                  <span v-html="key"></span>
                </b-button>
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>

    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    const publications = require('~/data/publications.json')
    console.log(publications);
    return {
      publications,
    }
  },
}
</script>

<style>
.pub .pub-item h2 {
  font-size: 24px;
}

.pub .pub-item p {
  font-size: 14px;
}

/* .pub .pub-item .mention {
  color: primary;
} */

.pub .btn {
  margin-top: 4px;
  margin-right: 4px;
  font-size: 14px
}
</style>