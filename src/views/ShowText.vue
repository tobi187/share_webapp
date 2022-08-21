<template>
    <div v-if="isLoading" class="flex h-screen w-screen justify-center align-middle">
        <h3>
            Is Loading
        </h3>
        <div>
            {{ showError }}
        </div>
    </div>
    <div v-if="!isLoading">
        <div v-for="text in texts">
            <TextView :data="text" />
        </div>
    </div>
</template>


<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { TextData } from '@/types/Data';
import TextView from '@/components/TextView.vue';

const texts = ref<TextData[]>();
const isLoading = ref(true);
const showError = ref("");

onMounted(() => {
    fetch("http://0.0.0.0:4000/api/v1/text")
    .then(res => res.json())
    .then(res => console.log(res))
    .then(_ => isLoading.value = false)
    .catch(err => showError.value = err)
});

</script>