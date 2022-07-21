<template>
    <div :class = "`flex flex-row items-center space-x-2`">
        <div class = "px-2 bg-white text-zinc-900 border border-gray-800 dark:border-gray-100 border-zinc-900 dark:bg-gray-700 dark:text-white dark:border-zinc-100 flex flex-row space-x-4">
            <span class = "">{{prefix}}</span>
            <input type = "number" :placeholder="somePlaceholder" :id = "`text_field_${friendlyName.replace(/\s/g, '_')}`" v-model="myContent" class = "w-72 h-8 p-2 bg-white focus:outline-0" @input="x => {$emit('update', myContent)}" />
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    content: {
        type: Number,
        default: () => null,

    },
    prefix: {
        type: String,
        default: () => "",

    },
    friendlyName: {
        type: String,
        default: () => "test"
        
    },
    somePlaceholder: {
    type: String,
    default: () => null
}
})
const myContent = ref(props.content)
</script>