import { defineStore } from 'pinia'
import axios from 'axios'

export interface CreateTicket {
  id: number
  message: string  
}

export const useCreateTicketStore = defineStore('createTicketStore', {
  state: () => ({
    tickets: [] as CreateTicket[],
    loading: false
  }),
  actions: {
    async addTicket(ticket: CreateTicket) {
      try {
        const response = await axios.post('/api/send/ticket', ticket)
        const newTicket = response.data as CreateTicket
        this.tickets.push(newTicket)
        return newTicket
      } catch (error) {
        console.error('Error adding ticket:', error)
        throw error
      }
    }
  }
})
