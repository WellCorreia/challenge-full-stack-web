export default {
  getStudents: {
    url: 'student',
    method: 'GET'
  },
  getStudent: {
    url: 'student{/id}',
    method: 'GET'
  },
  deleteStudent: {
    url: 'student{/id}',
    method: 'DELETE'
  },
  editStudent: {
    url: 'student{/id}',
    method: 'PUT'
  },
  createStudent: {
    url: 'student',
    method: 'POST'
  }
}
