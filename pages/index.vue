<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <div>{{ siteName }}</div>
        <img :src="logo" />
        <logo />
        <div>{{ host }}</div>
        <div>{{ vendor }}</div>
        <p>Our Url is: {{ $config.baseURL }}</p>
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
  async asyncData({ req, res, $axios, $config }) {
    console.log($config.baseURL)
    if (req && req.headers && req.headers.host) {
      const host = req.headers.host
      const vendor = await $axios.$get(
        `https://cd30nboy73.execute-api.ap-southeast-1.amazonaws.com/prod/vendor/get-vendor-from-origin?hostname=https://${host}`
      )
      const settings = await $axios.$get(
        `https://ilx0gvnp3c.execute-api.ap-southeast-1.amazonaws.com/prod/academic/vendor/${vendor.vendorId}`,
        {
          headers: {
            'ol-client-id': vendor.clientId,
            'ol-vendor-id': vendor.vendorId
          }
        }
      )
      const siteName = settings.item.learn.themeConfig.themeData.siteName
      const logo = settings.item.learn.themeConfig.themeData.logo_url

      return { host, vendor, logo, siteName }
    }
  }
}
</script>
