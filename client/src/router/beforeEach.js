export default async (to, from, next) => {
  if (to.path === '/') {
    next({ name: 'student' })
  } else {
    next()
  }
}
