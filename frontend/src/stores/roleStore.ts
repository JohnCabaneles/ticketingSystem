import { defineStore } from 'pinia'
import axios from 'axios'

export interface Role {
    id: number;
    name: string;
}
export const useRoleStore = defineStore('roleStore', {
    state: () => ({
        roles: <Role[]>[],
        loading: false,
    }),
    getters: {
        totalCount: (state) => {
            return state.roles.length
        }
    },
    actions: {
        async getRoles() {
            this.loading = true

            try {
                const response = await axios.get('/api/admin/role')
                this.roles = response.data
                this.loading = false
            } catch (error) {
                console.error('Error loading role', error)
            }
        },

        async addRole(role: Role) {
            try {
                const response = await axios.post('/api/admin/role', {
                    name: role.name
                })
                this.roles.push(response.data)
                console.log('Role added successfully', response.data)
            } catch (error) {
                console.error('Error adding role', error)
            }
        },

        async updateRole(id: number, updateData: Role) {
            const existingRole = this.roles.find(r => r.id === id)

            if(!existingRole) {
                console.error('Role not found with ID', id)
                return
            }

            try {
                const response = await axios.put(`/api/admin/role/${id}`, updateData)

                const updatedIndex = this.roles.findIndex(r => r.id === id)
                this.getRoles()

                if (updatedIndex !== 1) {
                    this.roles.splice(updatedIndex, 1, response.data)
                    console.log('Role updated successfully', response.data)
                } else {
                    console.log('Role not found with ID', id)
                }
            } catch (error) {
                console.error('Error updating role', error)
                throw error
            }
        },

        async deleteRole(id: number) {
            try {
                const response = await axios.delete(`/api/admin/role/${id}`)
                console.log('Role deleted successfully', response)
                this.getRoles()
            } catch (error) {
                console.error('Error deleting role', error)
            }
        }
    }
})