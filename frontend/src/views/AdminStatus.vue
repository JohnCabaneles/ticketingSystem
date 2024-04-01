<script setup lang="ts">
import SideBar from '../components/SideBar.vue'
import AdminStatus from '../components/AdminStatus.vue'
</script>

<template>
    <div class="flex h-screen overflow-hidden">
        <SideBar />
        <div class="flex-1">
            <AdminStatus />
        </div>
    </div>
</template>