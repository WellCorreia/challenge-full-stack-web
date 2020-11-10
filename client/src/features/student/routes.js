export default [
  {
    path: '/student',
    name: 'student',
    component: () => import(/* webpackChunkName: "student" */ './StudentList')
  },
  {
    path: '/student/:id',
    name: 'student-form',
    component: () => import(/* webpackChunkName: "student" */ './StudentForm')
  }
]
