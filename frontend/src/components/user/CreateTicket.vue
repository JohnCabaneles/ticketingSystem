<script setup lang="ts">
import { ref } from 'vue'
import { useCreateTicketStore, type CreateTicket } from '@/stores/createTicketStore'
import Swal from 'sweetalert2'

const createTicketStore = useCreateTicketStore()

const form = ref<CreateTicket>({
  id: 0,
  subject: '',
  message: '',
  priorities_id: '',
  statuses_id: ''
})

const resetForm = () => {
  ;(form.value.subject = ''), (form.value.message = '')
}

const configureSwal = () => {
  return Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
    didOpen: (toast: { onmouseenter: any; onmouseleave: any }) => {
      toast.onmouseenter = Swal.stopTimer
      toast.onmouseleave = Swal.resumeTimer
    }
  })
}

const submitForm = () => {
  if (form.value.subject.length > 0) {
    createTicketStore.addTickets(form.value).then(() => {
      const Toast = configureSwal()
      Toast.fire({
        icon: 'success',
        title: 'Ticket created successfully'
      })
    })
    resetForm()
  } else {
    const Toast = configureSwal()
    Toast.fire({
      icon: 'error',
      title: 'Ticket creation failed'
    })
  }
}
</script>
<template>
  <!-- Main -->
  <div class="w-full h-full">
    <div class="h-[50px] bg-gray-900 text-white">Header</div>
    <div class="h-[calc(100vh-50px)]">
      <div class="flex justify-center gap-5 my-24 mx-12 flex-col">
        <form @submit.prevent="submitForm" class="w-3/6 p-5 border shadow-lg rounded-xl">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3 inline-block">
              <div class="mb-5">
                <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="name">
                  Create Ticket
                </label>
              </div>
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="subject">
                Subject
              </label>
              <input
                v-model="form.subject"
                class="text-black border border-gray-400 rounded py-3 px-4"
                id="subject"
                type="text"
              />
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="message">
                Message
              </label>
              <textarea
                v-model="form.message"
                class="text-black border border-gray-400 rounded py-3 px-4 resize-none w-[600px]"
                id="message"
                type="text"
              ></textarea>
            </div>
          </div>
          <button
            class="bg-blue-500 p-2 text-white rounded-lg hover:bg-blue-600 hover:shadow-lg"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
  <!-- Main -->
</template>
