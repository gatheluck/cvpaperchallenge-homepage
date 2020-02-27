<template>
  <footer class="footer mt-5">
    <div class="container">
      <div class="text-center mt-5 mb-5">
          <a class="unstyled" href="https://twitter.com/CVpaperChalleng" target="_blank">
            <font-awesome-icon class="mr-5" :icon="['fab', 'twitter']" size="2x" />
          </a>
          <a class="unstyled" href="https://github.com/cvpaperchallenge" target="_blank">
            <font-awesome-icon class="mr-5" :icon="['fab', 'github']" size="2x" />
          </a>
          <a class="unstyled" href="https://www.slideshare.net/cvpaperchallenge/" target="_blank">
            <font-awesome-icon :icon="['fab', 'slideshare']" size="2x" />
          </a>
      </div>
    </div>

    <div class="bg-info bg-dark text-light">
        <h5 class="text-center pt-2 pb-2 mb-0">&copy;2020 cvpaper.challenge</h5>
    </div>
  </footer>
</template>

<style>
a.unstyled {
  color: inherit;
}
a.unstyled:hover {
  text-decoration: none;
}
</style>