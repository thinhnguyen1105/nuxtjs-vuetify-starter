import { Context } from '@nuxt/types'
import {
  articleRepository,
  commentRepository,
  profileRepository,
  tagRepository,
  userRepository,
  vendorRepository,
  ArticleRepository,
  CommentRepository,
  ProfileRepository,
  TagRepository,
  UserRepository,
  VendorRepository,
} from '@/api'
import { ErrorType } from '@/constants'

export type Repository = {
  article: ArticleRepository
  comment: CommentRepository
  profile: ProfileRepository
  tag: TagRepository
  user: UserRepository
  vendor: VendorRepository
}

/**
 * @see https://axios.nuxtjs.org
 */
const createRepository = ({
  app,
  $axios,
  redirect,
  $config,
}: Context): Repository => {
  $axios.onError((error) => {
    if (!error.response) {
      return
    }

    const code = error.response.status

    if (code === ErrorType.Unprocessable) {
      return Promise.reject(error.response.data.errors)
    }

    if (code === ErrorType.Unauthorized) {
      redirect('/login')

      return
    }

    if (code === ErrorType.Forbidden) {
      app?.router?.back()

      return
    }

    if (code === ErrorType.NotFound) {
      redirect('/')
    }
  })

  return {
    article: articleRepository($axios),
    comment: commentRepository($axios),
    profile: profileRepository($axios),
    tag: tagRepository($axios),
    user: userRepository($axios),
    vendor: vendorRepository($axios, $config),
  }
}

export default createRepository
