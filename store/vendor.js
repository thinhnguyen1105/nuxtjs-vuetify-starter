import { Vendor } from '~/api/repository/vendorRepository.js'
// import get from 'lodash-es/get'
const state = {
  vendor: {},
  settings: {},
  dataHomePage: [],
  ipData: {}
}
const actions = {
  async fetchVendor({ commit }) {
    const res = await Vendor.getVendorIdFromOrigin()
    await commit('setVendor', res)
    return res
  }
  //   async getSettingsVendor({ commit, state }) {
  //     const res = await Vendor.getSettingsVendor(state.vendor)
  //     _updateTheme(get(res, 'learn.themeConfig.themeData'))
  //     commit('setSettings', res)
  //     return res
  //   },
  //   async fetchDataForHomePage({ commit, state }, { query }) {
  //     const res = await Vendor.fetchDataForHomePage(state.vendor.vendorId, query)
  //     commit('setDataHomePage', res)
  //     return res
  //   },
  //   async fetchDataIP({ commit }) {
  //     const res = await Vendor.fetchIPInfo()
  //     commit('setDataIP', res || {})
  //   }
}
const mutations = {
  //   setVendor(state, vendor) {
  //     state.vendor = vendor
  //   },
  //   setSettings(state, settings) {
  //     state.settings = settings
  //   },
  //   setDataHomePage(state, dataHomePage) {
  //     state.dataHomePage = dataHomePage || []
  //   },
  //   setDataIP(state, ipData) {
  //     state.ipData = ipData
  //   }
}
const getters = {
  //   getViewData(state) {
  //     return get(state.settings, 'learn.themeConfig.viewData')
  //   },
  //   getViewAboutUs(state) {
  //     return get(state.settings, 'learn.themeConfig.aboutMe')
  //   },
  //   getViewPrivacyPolicy(state) {
  //     return get(state.settings, 'learn.themeConfig.privacyPolicy')
  //   },
  //   getViewRecruitment(state) {
  //     return get(state.settings, 'learn.themeConfig.recruitment')
  //   },
  //   getContact(state) {
  //     return get(state.settings, 'contact')
  //   },
  //   getSocialNetwork: (state) => {
  //     return get(state.settings, 'learn.socialNetwork')
  //   },
  //   getHeaderSetting(state) {
  //     const isHeaderMarket = get(
  //       state.settings,
  //       'learn.isDisplayMarketHeader',
  //       false
  //     )
  //     return isHeaderMarket
  //   },
  //   getExceedWatchVideo: (state) => {
  //     return {
  //       countExceedWatchVideo: get(state.settings, 'learn.countExceedWatchVideo'),
  //       isCountExceedWatchVideo: get(
  //         state.settings,
  //         'learn.isCountExceedWatchVideo'
  //       )
  //     }
  //   },
  //   getHeaderNav(state) {
  //     return get(state.settings, 'learn.isDisplayMenuHeaderSetting', [])
  //   },
  //   getFooterItem(state) {
  //     return get(state.settings, 'learn.isDisplayMenuFooterSetting', [])
  //   },
  //   getThemedata(state) {
  //     return get(state.settings, 'learn.themeConfig.themeData')
  //   },
  //   getDataHomePage(state) {
  //     return state.dataHomePage
  //   },
  //   getVendor(state) {
  //     return state.vendor
  //   },
  //   getThemeData(state) {
  //     return get(state.settings, 'learn.themeConfig.themeData')
  //   },
  //   getBankInfo(state) {
  //     return get(state.settings, 'bankInfo', {})
  //   },
  //   getDisplayProfile(state) {
  //     return get(state.settings, 'learn.isDisplayProfile')
  //   },
  //   getBaitNotification(state) {
  //     return {
  //       isNotificationBaited: get(
  //         state.settings,
  //         'learn.isNotificationBaited',
  //         false
  //       ),
  //       baitNotifications: get(state.settings, 'learn.baitNotifications', [])
  //     }
  //   },
  //   getCurrentLanguage: (state) => {
  //     return get(state.settings, 'learn.currentLanguage', 'vi')
  //   },
  //   getDisplayZoom(state) {
  //     return get(state.settings, 'learn.isDisplayZoom')
  //   },
  //   getIsDiableRegistration(state) {
  //     return get(state.settings, 'learn.isDisableRegistration')
  //   },
  //   getPermissionAllZoom: (state) => {
  //     return get(state.settings, 'learn.isPermissionAccessAllZoom')
  //   },
  //   getExternalScript: (state) => {
  //     return get(state.settings, 'learn.externalScript', [])
  //   },
  //   getIpDataForCountry: (state) => {
  //     return get(state.ipData, 'country', 'vietnam')
  //   }
}

// const _updateTheme = (themeConfig) => {
//   const old = localStorage.getItem('iztech-theme')
//   const newTheme = JSON.stringify(themeConfig)
//   if (!old) {
//     localStorage.setItem('iztech-theme', newTheme)
//   }
//   if (newTheme !== old) {
//     localStorage.setItem('iztech-theme', newTheme)
//     return window.location.reload()
//   }
// }

export default {
  state,
  actions,
  getters,
  mutations,
  namespaced: true
}
