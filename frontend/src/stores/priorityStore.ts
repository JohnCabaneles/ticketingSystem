import { defineStore } from 'pinia'
import axios from 'axios'

export interface Priority {
  id: number
  name: string
}

export const usePriorityStore = defineStore('priorityStore', {
  state: () => ({
    priorities: <Priority[]>[],
    loading: false
  }),
  getters: {
    totalCount: (state) => {
      return state.priorities.length
    }
  },
  actions: {
    async getPriority() {
      this.loading = true
      try {
        const response = await axios.get('/api/admin/priority')
        this.priorities = response.data
        this.loading = false
      } catch (error) {
        console.error('Error loading Priority', error)
      }
    },

    async addPriority(priority: Priority) {
      try {
        const response = await axios.post('/api/admin/priority', {
          name: priority.name
        })
        this.priorities.push(response.data)
        console.log('Priority added successfully', response.data)
      } catch (error) {
        console.error('Error adding priority', error)
      }
    },

    async updatePriority(id: number, updateData: Priority) {
      const existingPriority = this.priorities.find((priorities) => priorities.id === id)
      if (!existingPriority) {
        console.error('Priority not found with ID', id)
        return
      }

      try {
        const response = await axios.put(`/api/admin/priority/${id}`, updateData)

        const updatedIndex = this.priorities.findIndex((priorities) => priorities.id === id)
        this.getPriority()

        if (updatedIndex !== 1) {
          this.priorities.splice(updatedIndex, 1, response.data)
          console.log('Priority updated successfully', response.data)
        } else {
          console.error('Priority not found with ID', id)
        }
      } catch (error) {
        console.error('Error updating Priority', error)
        throw error
      }
    },

    async deletePriority(id: number) {
      try {
        const response = await axios.delete(`/api/admin/priority/${id}`)
        console.log('Priority deleted successfully', response)
        this.getPriority()
      } catch (error) {
        console.error('Error deleting Priority', error)
      }
    }
  }
<<<<<<< HEAD
})
=======
})
>>>>>>> upstream/master
