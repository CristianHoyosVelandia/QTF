<script setup>

  import { onMounted, ref } from 'vue';
  const emit = defineEmits(['updateValue']);
  
  const controller = ref("");

  function uploadEmit() {
    emit('updateValue', controller.value);
  }
  
  onMounted(() => { 
    if (props.controller) {
      controller.value = props.controller;
    }
  });

 const props= defineProps({
  id: {
    type: String,
    default: "message",
  },
  rows: {
    type: Number,
    default: 4,
  },
  placeholder: {
    type: String,
    default: "",
  },
  labelClass: {
    type: String,
    default: "",
  },
  controller: { type: String }
});
</script>
<template>
  <div class="input-group">
    <label :for="id" :class="labelClass"><slot /></label>
    <textarea
      name="message"
      class="form-control"
      :id="id"
      :placeholder="placeholder"
      :rows="rows"
      v-model="controller"
      @change="uploadEmit"
    />
  </div>
</template>
