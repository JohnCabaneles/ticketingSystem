<script setup lang="ts">
import WelcomeBanner from '../WelcomeBanner.vue'
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
        <!-- <div class="grid grid-cols-12 gap-6"> -->
        <h1 >TEST</h1>
        <!-- Total Open Ticket -->
        <!-- <OpenTicket />
          <ResolvedTicket />
          <UserCount />
          <SupportCount />
          <AdminCount /> -->
        <!-- </div> -->
      </div>
    </main>
  </div>
  <!-- Main -->
</template>
