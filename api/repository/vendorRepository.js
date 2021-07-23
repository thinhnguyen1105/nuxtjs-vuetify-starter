// /* eslint-disable */
import axios from 'axios'
// // const VENDOR_BASE_URL = process.env.VUE_APP_API_VENDOR
// const UTILITY_BASE_URL = process.env.VUE_APP_API_UTILITY
// const OLD_BASE_URL = process.env.VUE_APP_API_OLD_IZTEACH

const APIHelper = () => ({
  getVendorIdFromOrigin: async () => {
    await axios.$get(
      `https://cd30nboy73.execute-api.ap-southeast-1.amazonaws.com/prod/vendor/get-vendor-from-origin?hostname=https://localhost:3000`
    )
  }
})

// function _loadVendorIdCache() {
//   let data = _jsonParse(localStorage.getItem('ol-amplify-vendorId-from-origin'))
//   if (
//     data &&
//     data.origin == window.location.origin &&
//     data.payload &&
//     typeof data.payload.vendorId === 'string' &&
//     Date.now() < data.expiredAt
//   ) {
//     return data.payload
//   }
//   localStorage.removeItem('ol-amplify-vendorId-from-origin')
//   return null
// }

// function _saveVendorIdCache(payload) {
//   let data = {
//     origin: window.location.origin,
//     payload,
//     expiredAt: Date.now() + 24 * 60 * 60 * 1000
//   }
//   localStorage.setItem('ol-amplify-vendorId-from-origin', JSON.stringify(data))
// }

// function _jsonParse(str) {
//   try {
//     return JSON.parse(str)
//   } catch (err) {
//     return null
//   }
// }

export const Vendor = APIHelper()
export default {
  Vendor
}
