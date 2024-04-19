<script setup lang="ts">
import { ref } from 'vue'
import Swal from 'sweetalert2'
import { useCreateTicketStore } from '@/stores/createTicketStore'

const createTicketStore = useCreateTicketStore()

const form = ref({
  message: '',
})

const resetForm = () => {
  form.value.message = ''
}

const configureSwal = () => {
  return Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
}

const submitForm = async () => {
  if (form.value.message.length > 0) {
    try {
      const response = await createTicketStore.addTicket({
        message: form.value.message,
        id: 1
      })
      console.log('Submit form', response)
      const Toast = configureSwal()
      Toast.fire({
        icon: 'success',
        title: 'Ticket created successfully'
      })
      resetForm()
    } catch (error) {
      console.error('Error creating ticket:', error)
      const Toast = configureSwal()
      Toast.fire({
        icon: 'error',
        title: 'Ticket creation failed'
      })
    }
  } else {
    const Toast = configureSwal()
    Toast.fire({
      icon: 'error',
      title: 'Please enter a message'
    })
  }
}
</script>

<template>
  <div class="w-full h-full">
    <!-- Header -->
    <div class="h-12 bg-gray-900 text-white">Header</div>
    <!-- Main Content -->
    <div class="h-[calc(100vh-50px)] flex justify-center items-center">
      <form @submit.prevent="submitForm" class="w-3/6 p-5 border shadow-lg rounded-xl">
        <!-- Message Input -->
        <div class="mb-6">
          <label for="message" class="block uppercase text-gray-700 text-xs font-bold mb-2">Message</label>
          <textarea v-model="form.message" id="message" class="w-full h-32 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"></textarea>
        </div>
        <!-- Submit Button -->
        <button type="submit" class="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:bg-blue-600 focus:outline-none">Submit</button>
      </form>
    </div>
  </div>
</template>
