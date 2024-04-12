<script setup lang="ts">
import SideBar from '@/components/user/SideBar.vue'
import CreateTicket from '@/components/user/CreateTicket.vue'
</script>

<template>
  <div class="flex h-screen overflow-hidden">
    <SideBar />
    <div class="flex-1">
      <CreateTicket />
    </div>
  </div>
</template>
