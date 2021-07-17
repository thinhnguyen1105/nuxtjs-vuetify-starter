<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <logo />
        <div>{{ host }}</div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
export default {
  components: {
    Logo
  },
  asyncData({ req, res, $axios }) {
    console.log('req header', req.headers.host)
    const host = req.headers.host
    // const vendor = await $axios.$get(
    //   `https://cd30nboy73.execute-api.ap-southeast-1.amazonaws.com/prod/vendor/get-vendor-from-origin`
    //   // 'https://api.nuxtjs.dev/mountains'
    // )
    // console.log('ip', vendor)
    return { host }
  }
  // data() {
  //   return {
  //     mountains: []
  //   }
  // },
  // async fetch() {
  //   this.mountains = await fetch(
  //     'https://cd30nboy73.execute-api.ap-southeast-1.amazonaws.com/prod/vendor/get-vendor-from-origin'
  //   )
  //   console.log('this.mountains', this.mountains)
  // }
}
</script>
