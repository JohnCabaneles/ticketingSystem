import { defineStore } from 'pinia'
import axios from 'axios'
import { type AddUser} from '@/stores/addUserStore'

export interface Ticket {
    id: 0
    subject: string
    priorities_id: string
    statuses_id: string
    assign_to: string
    user: AddUser
}

export const useAdminTicketStore = defineStore('adminTicketStore', {
state: () => ({
    tickets: <Ticket[]>[],
    loading: false
}),
actions: {
    async getTickets() {
        try {
            const response = await axios.get('/api/admin/ticket')
            this.tickets = response.data
            console.log('getTickets', response.data);
        } catch (error) {
            console.error('Error getting tickets:', error);
            
        }
    },

    async updateTicket(id: number, ticket: Ticket) {
       try {
           const response = await axios.put(`/api/admin/ticket/${id}`, ticket)
    
           this.tickets.splice(response.data)
       } catch (error) {
           console.error('Error updating tickets:', error);
           
       }
    }
}
})