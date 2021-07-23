<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <logo />
        <!-- <div>{{ host }}</div>
        <div>{{ vendor }}</div>
        <p>Our Url is: {{ $config.baseURL }}</p> -->
      </div>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
export default {
  components: {
    Logo
  }
  // async asyncData({ req, res, $axios }) {
  //   console.log('req header', req.headers.host)
  //   const host = req.headers.host
  //   const vendor = await $axios.$get(
  //     `https://cd30nboy73.execute-api.ap-southeast-1.amazonaws.com/prod/vendor/get-vendor-from-origin?hostname=https://${host}`
  //   )
  //   return { host, vendor }
  // }
}
</script>
