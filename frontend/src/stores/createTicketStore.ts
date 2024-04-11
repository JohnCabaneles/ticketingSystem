import {defineStore} from 'pinia'
import axios from 'axios'

export interface CreateTicket {
    name: string
    subject: string
    message: string
}

export const useCreateTicketStore = defineStore('createTicketStore', {
    state: () => ({
        createTickets : <CreateTicket[]>[],
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
                const response = await axios.get('/api/user/')
            }
        }
    }
})