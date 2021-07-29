<template>
  <div>
    <div>{{ vendor ? vendor : 'Hello' }}</div>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Button
    </button>
    <Dialog>The quick brown fox</Dialog>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Context } from '@nuxt/types'
@Component({
  asyncData: async (context: Context) => {
    const host = context.ssrContext?.req.headers.host
    const axios = context.$axios
    if (host) {
      const vendor = await axios.$get(
        `https://cd30nboy73.execute-api.ap-southeast-1.amazonaws.com/prod/vendor/get-vendor-from-origin?hostname=https://${host}`
      )
      const settings = await axios.$get(
        `https://ilx0gvnp3c.execute-api.ap-southeast-1.amazonaws.com/prod/academic/vendor/${vendor.vendorId}`,
        {
          headers: {
            'ol-client-id': vendor.clientId,
            'ol-vendor-id': vendor.vendorId,
          },
        }
      )
      const siteName = settings.item.learn.themeConfig.themeData.siteName
      const logo = settings.item.learn.themeConfig.themeData.logo_url
      return { host, vendor, logo, siteName }
    }
  },
  head() {
    return {
      title: this.$data.siteName,
    }
  },
  data: () => ({
    messages: [
      {
        from: 'Vuetify',
        message: `Sure, I'll see you later.`,
        time: '10:42am',
        color: 'deep-purple lighten-1',
      },
      {
        from: 'John Doe',
        message: 'Yeah, sure. Does 1:00pm work?',
        time: '10:37am',
        color: 'green',
      },
      {
        from: 'You',
        message: 'Did you still want to grab lunch today?',
        time: '9:47am',
        color: 'deep-purple lighten-1',
      },
    ],
  }),
})
export default class IndexPage extends Vue {}
</script>
