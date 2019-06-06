<template>
  <div>
    <br>
    <br>
    <br>
    <br>
    <br>
    v-model
    {{ }}
  </div>
</template>
<script>
export default {
  props: ["text"],
  data() {
    return {
    //   jie: "jie"
    };
  },

  methods: {
    change() {
      this.$emit("input", text);
    }
  }

};
</script>




