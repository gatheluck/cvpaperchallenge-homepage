<template>
  <b-navbar toggleable="md" type="dark" variant="info" sticky="true" class="bg-dark">
    <b-container>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand to="/">
        <b-img
          thumbnail
          height="50"
          width="250"
          :src="require('~/static/image/logo/brand.png')"
          class="d-inline-block align-top"
          fluid
          alt="Brand"
        />
      </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/publications" :active="isActive('/publications')">Publications</b-nav-item>
          <b-nav-item to="/members" :active="isActive('/members')">Members</b-nav-item>
          <b-nav-item to="/resources" :active="isActive('/resources')">Resources</b-nav-item>
          <b-nav-item to="/recruit" :active="isActive('/recruit')">Recruit</b-nav-item>
          

          <b-nav-item-dropdown text="Program">
            <b-dropdown-item to="/ccc/cccs2022">cvpaper.challenge conference summer 2022 (CCCS 2022)</b-dropdown-item>
            <b-dropdown-item to="/ccc/cccWinter2021">cvpaper.challenge conference winter 2021 (CCCW 2021)</b-dropdown-item>
            <b-dropdown-item to="/ccc/ccc2021">cvpaper.challenge conference 2021 (CCC 2021)</b-dropdown-item>
            <b-dropdown-item to="/xccv">MIRU MP x cvpaper.challenge</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="Survey">
            <b-dropdown-item target="_blank" href="http://xpaperchallenge.org/cv/survey/cvpr2022_summaries">CVPR 2022</b-dropdown-item>
            <b-dropdown-item target="_blank" href="http://xpaperchallenge.org/cv/survey/iccv2021_summaries">ICCV 2021</b-dropdown-item>
            <b-dropdown-item target="_blank" href="http://xpaperchallenge.org/cv/survey/cvpr2021_summaries">CVPR 2021</b-dropdown-item>
            <b-dropdown-item target="_blank" href="http://xpaperchallenge.org/cv/survey/eccv2020_summaries/">ECCV 2020</b-dropdown-item>
            <b-dropdown-item target="_blank" href="http://xpaperchallenge.org/cv/survey/cvpr2020_summaries/">CVPR 2020</b-dropdown-item>
            <b-dropdown-item target="_blank" href="http://xpaperchallenge.org/cv/survey/iccv2019_summaries/">ICCV 2019</b-dropdown-item>
            <b-dropdown-item target="_blank" href="http://xpaperchallenge.org/cv/survey/cvpr2019_summaries/">CVPR 2019</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-button
            href="http://xpaperchallenge.org/"
            variant="primary main-button"
            target="_blank"
          >
            <span>xpaper.challenge</span>
            <font-awesome-icon icon="external-link-alt" />
          </b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  methods: {
    isActive(path) {
      return this.$router.path == path;
    }
  }
};
</script>

<style>
.main-button {
  border-radius: 25px;
}
</style>