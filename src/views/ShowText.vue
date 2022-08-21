<template>
    <div v-if="!texts" class="flex h-screen w-screen justify-center align-middle">
        <h3>
            Is Loading
        </h3>
        <div>
            {{ showError }}
        </div>
    </div>
    <div v-if="texts" class="grid grid-cols-3 gap-3">
        <div v-for="text in texts" >
            <TextView :data="text" />
        </div>
    </div>
</template>


<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { TextData } from '@/types/Data';
import TextView from '@/components/TextView.vue';

const texts = ref<TextData[]>();
const showError = ref("");

onMounted(() => {
    fetch("http://127.0.0.1:4000/api/v1/text")
        .then(res => res.json())
        .then(res => texts.value = res.data)
        .catch(err => showError.value = err)

    console.log(texts.value)
});

</script>