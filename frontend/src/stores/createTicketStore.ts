import { defineStore } from 'pinia'
import axios from 'axios'

export interface CreateTicket {
  name: string
  subject: string
  message: string
}

export const useCreateTicketStore = defineStore('createTicketStore', {
  state: () => ({
    createTickets: <CreateTicket[]>[],
    loading: false
  }),
  getters: {
    totalCount: (state) => {
      return state.createTickets.length
    }
  },
  actions: {
    async getTicket() {
      this.loading = true
      try {
        const response = await axios.get('/api/user/total/ticket')
        this.createTickets = response.data
        this.loading = false
      } catch (error) {
        console.error('Error loading tickets', error)
      }
    },

    async addTickets(createTicket: CreateTicket) {
      try {
        const response = await axios.post('/api/user/create/ticket', {
          name: createTicket.name,
          subject: createTicket.subject,
          message: createTicket.message
        })
        this.createTickets.push(response.data)
        console.log('Ticket created successfully', response.data)
      } catch (error) {
        console.error('Error adding ticket', error)
      }
    }
  }
})
