import onlineCourseRepository from '@/api/repository/onlineCourseRepository'
import offlineCourseRepository from '@/api/repository/offlineCourseRepository'
import offlineClassRepository from '@/api/repository/offlineClassRepository'
import utilityRepository from '@/api/repository/utilityRepository'
import resourceRepository from '@/api/repository/resourceRepository'
import userProfileRepository from '@/api/repository/userProfileRepository'
import departmentRepository from '@/api/repository/departmentRepository'
import sectionRepository from '@/api/repository/sectionRepository'
import unitRepository from '@/api/repository/unitRepository'
import ratingRepository from '@/api/repository/ratingRepository'
import userCourseRepository from '@/api/repository/userCourseRepository'
import userPermissionRepository from '@/api/repository/userPermissionRepository'
import commentRepository from '@/api/repository/commentRepository'
import homeworkRepository from '@/api/repository/homeworkRepository'
import examRepository from '@/api/repository/examRepository'
import questionRepository from '@/api/repository/questionRepository'
import submissionRepository from '@/api/repository/submissionRepository'
import couponCodeRepository from '@/api/repository/couponCodeRepository'
import teacherRepository from '@/api/repository/teacherRepository'
import topicRepository from '@/api/repository/topicRepository'
import eventRepository from '@/api/repository/eventRepository'
import cartRepository from '@/api/repository/cartRepository'
import ebookRepository from '@/api/repository/ebookRepositoryve'
import reactionRepository from '@/api/repository/reactionRepository'
import interestRepository from '@/api/repository/interestRepository'
import blogRepositoty from '@/api/repository/blogRepository'
import notificationRepository from '@/api/repository/notificationRepository'
import userCertificateRepository from '@/api/repository/userCertificateRepository'
import certificateRepository from '@/api/repository/certificateRepository'
import zoomRepository from '@/api/repository/zoomRepository'
import userGroupRepository from '@/api/repository/userGroupRepository'
import studentRepository from '@/api/repository/studentRepository'
import userBookRepository from '@/api/repository/userBookRepository'
import learningPathRepository from '@/api/repository/learningPathRepository'
import userPathRepository from '@/api/repository/userPathRepository'
import relationCourseRepository from '@/api/repository/relationCourseRepository'
import leaderboardRepository from '@/api/repository/leaderboardRepository'

const repositories = {
  onlineCourse: onlineCourseRepository,
  offlineCourse: offlineCourseRepository,
  utility: utilityRepository,
  resource: resourceRepository,
  userProfile: userProfileRepository,
  department: departmentRepository,
  offlineClass: offlineClassRepository,
  section: sectionRepository,
  unit: unitRepository,
  rating: ratingRepository,
  userCourse: userCourseRepository,
  userPermission: userPermissionRepository,
  comment: commentRepository,
  homework: homeworkRepository,
  exam: examRepository,
  question: questionRepository,
  submission: submissionRepository,
  couponCode: couponCodeRepository,
  teacher: teacherRepository,
  topic: topicRepository,
  event: eventRepository,
  cart: cartRepository,
  ebook: ebookRepository,
  reaction: reactionRepository,
  interest: interestRepository,
  blog: blogRepositoty,
  notification: notificationRepository,
  userCertificate: userCertificateRepository,
  certificate: certificateRepository,
  zoom: zoomRepository,
  userGroup: userGroupRepository,
  student: studentRepository,
  userBook: userBookRepository,
  learningPath: learningPathRepository,
  userPath: userPathRepository,
  relationCourse: relationCourseRepository,
  leaderboard: leaderboardRepository
}

export const RepositoryFactory = {
  get: (name) => repositories[name]
}
