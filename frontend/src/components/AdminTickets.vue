<script setup lang="ts">
import { useAdminTicketStore } from '@/stores/adminTicketStore'
import { useCreateTicketStore } from '@/stores/createTicketStore'
import { storeToRefs } from 'pinia'
import WelcomeBanner from '@/components/WelcomeBanner.vue'

const adminTicketStore = useAdminTicketStore()
const createTicketStore = useCreateTicketStore()
const { tickets } = storeToRefs(adminTicketStore)
const { totalCount, loading } = storeToRefs(createTicketStore)


adminTicketStore.getTickets()
createTicketStore.getTicket()
</script>
<template>
  <!-- Main -->

  <div class="w-full h-full">
    <div class="h-[50px] bg-gray-900 text-white">Header</div>
    <div class="h-[calc(100vh-50px)]">
      <div class="w-[90%] ml-[70px] mt-10">
        <WelcomeBanner />
      </div>
      <div class="flex justify-center gap-5 my-24 mx-12 flex-col">
        <div class="mr-80">
          <!-- Statuses -->
          <div class="flex mb-2">
            <h1 class="pr-20">Total Tickets: {{ totalCount }}</h1>
          </div>

          <div class="pt-2 p-5 border rounded-xl shadow-lg">
            <div class="table w-full p-2">
              <h1 class="pb-3 text-2xl">All Tickets</h1>
              <h2 class="font-semibold text-slate-800">
                Total Tickets <span class="text-slate-500 text-xl">{{ totalCount }}</span>
              </h2>
              <table class="w-full border">
                <thead>
                  <tr class="bg-gray-50 border-b">
                    <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div class="flex items-center justify-center">Name</div>
                      </th>
                      <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div class="flex items-center justify-center">Email</div>
                      </th>
                    <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                      <div class="flex items-center justify-center">Subject</div>
                    </th>
                    <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                      <div class="flex items-center justify-center">Priority</div>
                    </th>
                    <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                      <div class="flex items-center justify-center">Status</div>
                    </th>
                  </tr>
                </thead>
                <div v-if="loading">
                  <div class="flex items-center justify-center">
                    <div
                      class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                      role="priority"
                    >
                      <span
                        class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                        >Loading...</span
                      >
                    </div>
                  </div>
                </div>
                <tbody v-else>
                  <tr
                    v-for="ticket in tickets"
                    :key="ticket.id"
                    class="bg-gray-100 text-center border-b text-sm text-gray-600"
                  >
                    <td class="p-2 border-r">{{ ticket.user.name }}</td>
                    <td class="p-2 border-r">{{ ticket.user.email }}</td>
                    <td class="p-2 border-r">{{ ticket.subject }}</td>
                    <td class="p-2 border-r">{{ ticket.priorities_id }}</td>
                    <td class="p-2 border-r">{{ ticket.statuses_id }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Main -->
</template>
