<template>
  <div>
    <div>{{ vendor ? vendor : 'Hello' }}</div>
    <v-app>
      <v-container>
        <v-row justify="space-around">
          <v-card width="400">
            <v-img
              height="200px"
              src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
            >
              <v-app-bar flat color="rgba(0, 0, 0, 0)">
                <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>

                <v-toolbar-title class="text-h6 white--text pl-0">
                  Messages
                </v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn color="white" icon>
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </v-app-bar>

              <v-card-title class="white--text mt-8">
                <v-avatar size="56">
                  <img
                    alt="user"
                    src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                  />
                </v-avatar>
                <p class="ml-3">John Doe</p>
              </v-card-title>
            </v-img>

            <v-card-text>
              <div class="font-weight-bold ml-8 mb-2">Today</div>

              <v-timeline align-top dense>
                <v-timeline-item
                  v-for="message in messages"
                  :key="message.time"
                  :color="message.color"
                  small
                >
                  <div>
                    <div class="font-weight-normal">
                      <strong>{{ message.from }}</strong> @{{ message.time }}
                    </div>
                    <div>{{ message.message }}</div>
                  </div>
                </v-timeline-item>
              </v-timeline>
            </v-card-text>
          </v-card>
        </v-row>
      </v-container>
    </v-app>
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
