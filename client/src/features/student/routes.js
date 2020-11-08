export default [
  {
    path: '/student',
    name: 'student',
    component: () => import(/* webpackChunkName: "student" */ './StudentList')
  }
]
