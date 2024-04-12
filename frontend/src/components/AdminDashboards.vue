<script setup lang="ts">
import WelcomeBanner from '../components/WelcomeBanner.vue'
import OpenTicket from '../components/dashboard/OpenTicket.vue'
import ResolvedTicket from '../components/dashboard/ResolvedTicket.vue'
import UserCount from '../components/dashboard/UserCount.vue'
import SupportCount from '../components/dashboard/SupportCount.vue'
import AdminCount from '../components/dashboard/AdminCount.vue'
</script>
<template>
  <!-- Main -->
  <div class="w-full h-full">
    <div class="h-[50px] bg-gray-900 text-white">Header</div>
    <div class="w-[90%] ml-[70px] mt-10">
      <WelcomeBanner />
    </div>
    <main>
      <div class="px-4 sm:px-6 lg:px-8 py-2 w-full mx-auto">
  
        <!-- Cards -->
        <div class="grid grid-cols-12 gap-6">
        
          <!-- Total Open Ticket -->
          <OpenTicket />
          <ResolvedTicket />
          <UserCount />
          <SupportCount />
          <AdminCount />
        </div>
      </div>
    </main>
  </div>
  <!-- Main -->
</template>
