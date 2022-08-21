<template>
<div class="">
    <div class="flex justify-center align-middle bg-slate-300">
        <div>
            <div class="p-3">
                <div class="border border-gray-500 rounded-md">
                    <input v-model="label" class="p-2" placeholder="Headline" />
                </div>
            </div>
            <div class="p-3">
                <p class="text-red-700" :class="{ hidden: showWarning }">TextFeld darf nicht leer sein</p>
                <div class="border border-gray-500 rounded-md">
                    <textarea v-model="content" placeholder="Your message" class="w-max"></textarea>
                </div>
            </div>
            <div class="flex justify-center">
                <button @click="validateTexts()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Speichern</button>
            </div>
        </div>
    </div>
    <div>
        {{errorMessage}}
    </div>
</div>
</template>

<script setup lang="ts">
import router from '@/router';
import { ref } from 'vue';

const label = ref("")
const content = ref("")
const showWarning = ref(true)
const errorMessage = ref("")

function validateTexts() {
    if (!content.value) {
        showMessage();
    }
    else {
        sendData();
    }
}

function sendData() {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: {label: label.value, content: content.value, creationDate: new Date().toJSON()} })
    };

    fetch("http://127.0.0.1:4000/api/v1/text", requestOptions)
    .then(res => res.json())
    .then(_ => router.push("/texts"))
    .catch(ex => (errorMessage.value = ex))
    console.log(errorMessage.value);
}

async function showMessage() {
    showWarning.value = false;
    setTimeout(function() {
        showWarning.value = true;
    }, 5000)
}

</script>