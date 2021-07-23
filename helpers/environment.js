const generateUrl = (model, isDev) => {
  return (
    process.env.PROTOCOL +
    process.env[`${isDev ? 'DEV_' : ''}${model}`] +
    process.env.AWS_PATH_API
  )
}

export const generateAPI = (isDev) => {
  return {
    RESOURCE: generateUrl('RESOURCE', isDev),
    VENDOR: generateUrl('VENDOR', isDev)
  }
}
