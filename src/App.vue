<template>
  <div id="app">
    <app-header></app-header>

    <!-- Begin page content -->
    <div class="container">
      <router-view></router-view>
    </div>

    <app-footer></app-footer>

  </div>
</template>

<script>
import Header from '@/components/Shared/Header'
import Footer from '@/components/Shared/Footer'
export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-footer': Footer
  }
}
</script>

<style>
/* Sticky footer styles
-------------------------------------------------- */

html,
body {
  height: 100%;
  /* The html and body elements cannot have any padding or margin. */
}

/* Wrapper for page content to push down footer */
#app {
  min-height: 100%;
  height: auto !important;
  height: 100%;
  /* Negative indent footer by its height */
  margin: 0 auto -60px;
  /* Pad bottom by footer height */
  padding: 0 0 60px;
}

/* Set the fixed height of the footer here */
#footer {
  height: 60px;
  background-color: #f5f5f5;
}


/* Custom page CSS
-------------------------------------------------- */
/* Not required for template or sticky footer method. */

#app > .container {
  padding: 60px 15px 0;
}
.container .credit {
  margin: 20px 0;
}

#footer > .container {
  padding-left: 15px;
  padding-right: 15px;
}

code {
  font-size: 80%;
}
</style>
