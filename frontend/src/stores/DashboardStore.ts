import { defineStore } from 'pinia'
import axios from 'axios'

export interface TotalAdmin {
    id: number;
    roles_id: string;
}

export interface TotalSupport {
    id: number;
    roles_id: string;
}

export const useDashboardStore = defineStore('dashboardStore', {
    state: () => ({
        totalAdmins: <TotalAdmin[]>[],
        totalSupports: <TotalSupport[]>[],
        loading: false,      
    }),
    getters: {
        totalAdminCount: (state) => {
            return state.totalAdmins.length
        },
        totalSupportCount: (state) => {
            return state.totalSupports.length
        }
    },
    actions: {
        async getTotalAdmin() {
            this.loading = true

            try {
                const response = await axios.get('/api/admin/total/admin')
                this.totalAdmins = response.data
                console.log('Total admins: ', this.totalAdmins.length)
            } catch (error) {
                console.error('Error getting data', error)
            }
        },

        async getTotalSupport() {
            this.loading = true

            try {
                const response = await axios.get('/api/admin/total/support')
                this.totalSupports = response.data
                console.log('Total supports: ', this.totalSupports.length)
            } catch (error) {
                console.error('Error getting data', error)
            }
        }
    }
})