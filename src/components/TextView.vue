<template>
    <div class="border border-black rounded-md p-5">
        <div class="p-2 flex justify-center">
            <h5>{{ data?.label }}</h5>
        </div>
        <p>{{ data?.created }}</p>
        <div class="border border-gray-600 rounded-md p-2">
            <textarea readonly>
                {{ data?.content }}
            </textarea>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { TextData } from '@/types/Data';
import { defineProps } from "vue";

defineProps<{
    data?: TextData
}>()

</script>