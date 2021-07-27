<template>
  <div>
    <div>{{ name ? name : 'Hello' }}</div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  useContext,
  ref,
  useMeta,
  useFetch,
} from '@nuxtjs/composition-api'
import axios from 'axios'

export default defineComponent({
  name: 'Demopage',
  setup() {
    const context = useContext()
    const host = context.ssrContext?.req.headers.host
    const name = ref()
    const vendorSetting = ref()
    const { title, meta } = useMeta()
    useFetch(async () => {
      const result = await axios.get(
        `https://cd30nboy73.execute-api.ap-southeast-1.amazonaws.com/prod/vendor/get-vendor-from-origin?hostname=https://${host}`
      )
      const vendor = result.data
      const settings = await axios.get(
        `https://ilx0gvnp3c.execute-api.ap-southeast-1.amazonaws.com/prod/academic/vendor/${vendor.vendorId}`,
        {
          headers: {
            'ol-client-id': vendor.clientId,
            'ol-vendor-id': vendor.vendorId,
          },
        }
      )
      vendorSetting.value = settings.data.item.contact.name
      name.value = vendor

      title.value = vendorSetting.value
      meta.value.push({
        hid: 'ogTitle',
        name: 'og:title',
        content: vendorSetting.value,
      })
    })
    return { name, vendorSetting }
  },
  head: {},
})
</script>
