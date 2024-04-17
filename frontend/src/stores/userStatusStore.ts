import axios from 'axios'
import { defineStore } from 'pinia'

export interface TotalResolved {
  id: number
  statuses_id: string
}

export interface TotalPending {
  id: number
  statuses_id: string
}

export interface TotalOngoing {
  id: number
  statuses_id: string
}

export const useUserStatusStore = defineStore('userStatusStore', {
  state: () => ({
    totalResolved: <TotalResolved[]>[],
    totalPending: <TotalPending[]>[],
    totalOngoing: <TotalOngoing[]>[],
    loading: false
  }),
  getters: {
    totalResolvedCount: (state) => {
      return state.totalResolved.length
    },
    totalPendingCount: (state) => {
      return state.totalPending.length
    },
    totalOngoingCount: (state) => {
      return state.totalOngoing.length
    }
  },
  actions: {
    async getTotalResolved() {
      this.loading = true

      try {
        const response = await axios.get('/api/user/total/resolved')
        this.totalResolved = response.data
        console.log('Total resolved:', this.totalResolved.length)
        this.loading = false
      } catch (error) {
        console.error('Error getting resolved count', error)
      }
    },

    async getTotalPending() {
      this.loading = true
      try {
        const response = await axios.get('api/user/total/pending')
        this.totalPending = response.data
        console.log('Total pending:', this.totalPending.length)
        this.loading = false
      } catch (error) {
        console.error('Error getting total pending count')
      }
    },

    async getTotalOngoing() {
      this.loading = true
      try {
        const response = await axios.get('/api/user/total/ongoing')
        this.totalOngoing = response.data
        console.log('Total Ongoing:', this.totalOngoing.length)
        this.loading = false
      } catch (error) {
        console.error('Error getting total ongoing count')
      }
    }
  }

  
})
