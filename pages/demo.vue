<template>
  <div>
    <div>{{ vendor ? vendor : 'Hello' }}</div>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Button
    </button>
    <Dialog>The quick brown fox</Dialog>
    <div
      class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
    >
      <div class="md:flex">
        <div class="md:flex-shrink-0">
          <img
            class="h-48 w-full object-cover md:h-full md:w-48"
            src="https://images.unsplash.com/photo-1515711660811-48832a4c6f69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
            alt="Man looking at item at a store"
          />
        </div>
        <div class="p-8">
          <div
            class="uppercase tracking-wide text-sm text-indigo-500 font-semibold"
          >
            Case study
          </div>
          <a
            href="#"
            class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >Finding customers for your new business</a
          >
          <p class="mt-2 text-gray-500">
            Getting a new business off the ground is a lot of hard work. Here
            are five ideas you can use to find your first customers.
          </p>
        </div>
      </div>
    </div>
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
