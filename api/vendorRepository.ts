import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { NuxtRuntimeConfig } from '@nuxt/types/config/runtime'
import { Vendor } from '@/types'

export const vendorRepository = (
  axios: NuxtAxiosInstance,
  config: NuxtRuntimeConfig
) => ({
  getVendorByHostName(host: String) {
    return axios.$get(
      `${config.vendorURL}/vendor/get-vendor-from-origin?hostname=https://${host}`
    )
  },
  getSettingVendor(vendor: Vendor) {
    return axios.$get(
      `${config.izteachV1URL}/academic/vendor/${vendor.vendorId}`,
      {
        headers: {
          'ol-client-id': vendor.clientId,
          'ol-vendor-id': vendor.vendorId,
        },
      }
    )
  },
})

export type VendorRepository = ReturnType<typeof vendorRepository>
