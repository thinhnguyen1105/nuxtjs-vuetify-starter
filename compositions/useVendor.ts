import { reactive, useContext } from '@nuxtjs/composition-api'

type State = {
  vendor: {}
  setting: {}
}

const state = reactive<State>({
  vendor: {},
  setting: {},
})

export default function useVendor() {
  const { $repository } = useContext()

  const getVendorFromHostname = async (host: string) => {
    const result = await $repository.vendor.getVendorByHostName(host)
    const setting = await $repository.vendor.getSettingVendor(result)
    state.vendor = result
    state.setting = setting.item
  }

  return {
    state,
    getVendorFromHostname,
  }
}
