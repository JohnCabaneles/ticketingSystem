import { defineStore } from 'pinia'
import axios from 'axios'

export interface Status {
    id: number;
    name: string;
}

export const useStatusStore = defineStore('statusStore', {
    state: () => ({
        statuses: <Status[]>[],
        loading: false
    }),
    getters: {
        totalCount: (state) => {
            return state.statuses.length
        }
    },
    actions: {
        async getStatus() {
            this.loading = true
            try {
                const response = await axios.get('/api/admin/status')
                this.statuses = response.data
                this.loading = false
            } catch (error) {
                console.error('Error loading status', error)
            }
        },

        async addStatus(status: Status) {
            try {
                const response = await axios.post('/api/admin/status', {
                    name: status.name
                })
                this.statuses.push(response.data)
                console.log('Status added successfully', response.data)
            } catch (error) {
                console.error('Error adding status', error)
            }
        },

        async updateStatus(id: number, updateData: Status) {
            const existingStatus = this.statuses.find(statuses => statuses.id === id)
            if (!existingStatus) {
                console.error('Status not found with ID', id)
                return
            }

            try {
                const response = await axios.put(`/api/admin/status/${id}`, updateData)

                const updatedIndex = this.statuses.findIndex(statuses => statuses.id === id)
                this.getStatus()

                if (updatedIndex !== 1) {
                    this.statuses.splice(updatedIndex, 1, response.data)
                    console.log('Status updated successfully', response.data)
                } else {
                    console.error('Status not found with ID', id)
                }
            } catch (error) {
                console.error('Error updating status', error)
                throw error
            }
        },

        async deleteStatus(id: number) {
            try {
                const response = await axios.delete(`/api/admin/status/${id}`)
                console.log('Status deleted successfully', response)
                this.getStatus()
            } catch (error) {
                console.error('Error deleting status', error)
            }
        }
    }
})