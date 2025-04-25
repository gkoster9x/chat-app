<template>
    <div class="app-container">
        <Header />
        <main class="main-content">
            <RouterView v-slot="{ Component }">
                <Transition name="fade" mode="out-in">
                    <component :is="Component" />
                </Transition>
            </RouterView>
        </main>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<style>
.app-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: var(--bs-light);
}

.main-content {
    flex: 1 0 auto;
    padding: 2rem 0;
}

/* Transition animations */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>