<template>
  <div>
    <div>{{ vendor ? vendor : 'Hello' }}</div>
  </div>
</template>

<script lang="ts">
import { useVendor } from '@/compositions'
import {
  defineComponent,
  useContext,
  useFetch,
  toRef,
} from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Demopage',
  setup() {
    const { state: vendorState, getVendorFromHostname } = useVendor()
    const context = useContext()
    const host = context.ssrContext?.req.headers.host || ''
    useFetch(async () => {
      await getVendorFromHostname(host)
    })
    return { vendor: toRef(vendorState, 'vendor') }
  },
  head: {},
})
</script>
