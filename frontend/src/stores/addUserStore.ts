import { defineStore } from 'pinia'
import axios from 'axios'

export interface AddUser {
  id: number
  name: string
  roles_id: string
  departments_id: string
  contact_number: string
  email: string
  password: string
}

export const useAddUserStore = defineStore('addUserStore', {
  state: () => ({
    addUsers: <AddUser[]>[],
    name: '',
    loading: false
  }),
  getters: {
    totalCount: (state) => {
      return state.addUsers.length
    }
  },
  actions: {
    async getAddUser() {
      this.loading = true
      try {
        const response = await axios.get('/api/admin/total/user')
        this.addUsers = response.data
        this.name = response.data
        this.loading = false
      } catch (error) {
        console.error('Error Adding Users', error)
      }
    },
    async addUser(addUser: AddUser) {
      try {
        const response = await axios.post('/register', {
          name: addUser.name,
          roles_id: addUser.roles_id,
          departments_id: addUser.departments_id,
          contact_number: addUser.contact_number,
          email: addUser.email,
          password: addUser.password
        })
        this.addUsers.push(response.data)
        console.log('User added successfully', response.data)
      } catch (error) {
        console.error('Error adding User')
      }
    },

    async updateAddUser(id: number, updateData: AddUser) {
      const existingAddUser = this.addUsers.find((addUsers) => addUsers.id === id)
      if (!existingAddUser) {
        console.log('User not found with ID', id)
        return
      }

      try {
        const response = await axios.put(`/api/admin/total/user/${id}`, updateData)

        const updatedIndex = this.addUsers.findIndex((addUsers) => addUsers.id === id)
        this.getAddUser()

        if (updatedIndex !== 1) {
          this.addUsers.splice(updatedIndex, 1, response.data)
          console.log('User updated successfully', response.data)
        } else {
          console.error('User not found with ID', id)
        }
      } catch (error) {
        console.error('Error updating User', error)
        throw error
      }
    },

    async deleteAddUser(id: number) {
      try {
        const response = await axios.delete(`/api/admin/total/user/${id}`)
        console.log('User deleted successfully', response)
        this.getAddUser()
      } catch (error) {
        console.error('Error deleting User', error)
      }
    }
  }
})
