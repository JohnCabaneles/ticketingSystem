<script setup lang="ts">
import AdminDashboards from '../components/AdminDashboards.vue'
import SideBar from '@/components/SideBar.vue'
</script>

<template>
  <div class="flex h-screen overflow-hidden">
    <SideBar />
    <div class="flex-1">
        <AdminDashboards />
    </div>
  </div>
</template>
