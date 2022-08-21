<template>
<div class="">
    <div class="border rounded-md p-3 bg-slate-300">
        <div class="p-2 flex justify-center">
            <h3 class="font-medium">{{ data?.label }}</h3>
        </div>
        <p>{{ data?.created }}</p>
        <div class="border border-gray-600 rounded-md p-2">
            <div class="whitespace-pre-wrap">
                {{ data?.content }}
            </div>
        </div>
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