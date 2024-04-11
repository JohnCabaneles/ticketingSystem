<script setup lang="ts">
import UserDashboards from '@/components/user/UserDashboard.vue'
import SideBar from '@/components/user/SideBar.vue'
</script>

<template>
  <div class="flex h-screen overflow-hidden">
    <SideBar />
    <div class="flex-1">
      <UserDashboards />
    </div>
  </div>
</template>
