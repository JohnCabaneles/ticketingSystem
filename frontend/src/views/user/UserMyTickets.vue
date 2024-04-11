<script setup lang="ts">
import SideBar from '@/components/user/SideBar.vue'
import MyTicket from '@/components/user/MyTickets.vue'
</script>

<template>
  <div class="flex h-screen overflow-hidden">
    <SideBar />
    <div class="flex-1">
      <MyTicket />
    </div>
  </div>
</template>
