<script setup>
defineProps({
  icon: {
    type: [String, Object],
    default: "",
    component: String,
    size: String,
    color: String,
  },
  ref: {
    type: [String, Object],
    required: true,
    text: String,
    class: String,
  },
  image: {
    type: Object,
    component: String,
    class: String,
    default: () => {},
  },
  title: {
    type: [String, Object],
    required: true,
    text: String,
    class: String,
  },
  description: {
    type: [String, Object],
    required: true,
    text: String,
    class: String,
  },
  col: {
    type: String,
    default: "",
  },
});

console.log(ref)
</script>
<script>
export default {
  inheritAttrs: false,
};
</script>
<template>
  <div :class="`${col ? col : 'col-md-6'}`">
    <div v-bind="$attrs" class="info">
      <img :src="ref.text" class="img-fluid border-radius-lg" />
      <h5
        :class="
          typeof title == 'string' ? 'font-weight-bolder mt-3' : title.class
        "
      >
        {{ typeof title == "string" ? title : title.text }}
      </h5>
      <p :class="typeof description == 'string' ? 'pe-5' : description.class">
        {{ typeof description == "string" ? description : description.text }}
      </p>
    </div>
  </div>
</template>
