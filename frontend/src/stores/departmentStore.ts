import { defineStore } from 'pinia'
import axios from 'axios'

export interface Department {
    id: number;
    name: string;
}

export const useDepartmentStore = defineStore('departmentStore', {
    state: () => ({
        departments: <Department[]>[],
        loading: false
    }),
    getters: {
        totalCount: (state) => {
            return state.departments.length
        }
    },
    actions: {
        async getDepartment() {
            this.loading = true

            try {
                const response = await axios.get('/api/admin/department')
                this.departments = response.data
                this.loading = false
            } catch (error) {
                console.error('Error loading department', error)
            }
        },

        async addDepartment(department: Department) {
            try {
                const response = await axios.post('/api/admin/department', {
                    name: department.name
                })
                this.departments.push(response.data)
                console.log('Departments added successfully', response.data)
            } catch (error) {
                console.error('Error adding department', error)
            }
        },

        async updateDepartment(id: number, updateData: Department) {
            const existingDepartment = this.departments.find(d => d.id === id)
            if (!existingDepartment) {
                console.error('Department not found with ID', id)
                return
            }

            try {
                const response = await axios.put(`/api/admin/department/${id}`, updateData)

                const updatedIndex = this.departments.findIndex(d => d.id === id)
                this.getDepartment()

                if (updatedIndex !== 1) {
                    this.departments.splice(updatedIndex, 1, response.data)
                    console.log('Department updated successfully', response.data)
                } else {
                    console.error('Department not found with ID', id)
                }
            } catch (error) {
                console.error('Error updating department', error)
                throw error
            }
        },

        async deleteDepartment(id: number) {
            try {
                const response = await axios.delete(`/api/admin/deparment/${id}`)
                console.log('Department deleted successfully', response.data)
                this.getDepartment()
            } catch (error) {
                console.error('Error deleting department', error)
            }
        }
    }
})