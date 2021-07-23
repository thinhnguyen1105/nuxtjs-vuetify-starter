import auth from '~/store/modules/auth'
import vendor from '~/store/modules/vendor'

const Repository = (BASE_URL) => ({
  count: (params, option) =>
    this.$axios.get(
      BASE_URL + '-count',
      {
        params: { ...params, vendorId: vendor.state.vendor.vendorId },
        headers: {
          Authorization: auth.state.auth.accessToken
        }
      },
      option
    ),
  countWithoutAccessToken: (params, option) =>
    this.$axios.get(
      BASE_URL + '-count',
      {
        params: { ...params, vendorId: vendor.state.vendor.vendorId }
      },
      option
    ),
  fetch: (params, option) =>
    this.$axios.get(
      BASE_URL,
      {
        params: { ...params, vendorId: vendor.state.vendor.vendorId },
        headers: {
          Authorization: auth.state.auth.accessToken
        }
      },
      option
    ),
  fetchWithoutAccessToken: (params, option) =>
    this.$axios.get(
      BASE_URL,
      {
        params: { ...params, vendorId: vendor.state.vendor.vendorId }
      },
      option
    ),
  fetchOne: (id, option) =>
    this.$axios.get(
      BASE_URL + '/' + id,
      {
        params: { vendorId: vendor.state.vendor.vendorId },
        headers: {
          Authorization: auth.state.auth.accessToken
        }
      },
      option
    ),
  fetchOneWithoutAccessToken: (id, option) =>
    this.$axios.get(
      BASE_URL + '/' + id,
      {
        params: { vendorId: vendor.state.vendor.vendorId }
      },
      option
    ),
  createWithoutAccessToken: (params, options) =>
    this.$axios.post(
      BASE_URL,
      { ...params, vendorId: vendor.state.vendor.vendorId },
      options
    ),
  create: (params, options) =>
    this.$axios.post(
      BASE_URL,
      { ...params, vendorId: vendor.state.vendor.vendorId },
      {
        headers: {
          Authorization: auth.state.auth.accessToken
        }
      },
      options
    ),
  update: (id, params, option) =>
    this.$axios.put(
      BASE_URL + `/${id}?vendorId=${vendor.state.vendor.vendorId}`,
      params,
      {
        headers: {
          Authorization: auth.state.auth.accessToken
        }
      },
      option
    ),
  delete: (id, option) =>
    this.$axios.delete(
      BASE_URL + `/${id}?vendorId=${vendor.state.vendor.vendorId}`,
      {
        headers: {
          Authorization: auth.state.auth.accessToken
        }
      },
      option
    ),
  average: (params, option) =>
    this.$axios.get(
      BASE_URL + `-average`,
      { params: { ...params, vendorId: vendor.state.vendor.vendorId } },
      option
    )
})

export default Repository
