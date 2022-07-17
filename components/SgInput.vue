<template>
  <input
    :class="{
      'w-72 h-12 rounded-lg px-4 outline-none': true,
      'bg-gray-800 hover:bg-gray-700 focus:bg-gray-700': dark,
      'bg-gray-100 hover:bg-gray-200 focus:bg-gray-200': !dark,
    }"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  dark: {
    type: Boolean,
    default: false,
  },
})
</script>
