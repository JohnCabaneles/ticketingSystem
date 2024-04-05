<script setup lang="ts">
import SideBar from '../components/SideBar.vue'
import AdminRoles from '../components/AdminRoles.vue';
</script>

<template>
    <div class="flex h-screen overflow-hidden">
        <SideBar />
        <div class="flex-1">
            <AdminRoles />
        </div>
    </div>
</template>