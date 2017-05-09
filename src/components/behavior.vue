<style lang="sass">

</style>

<template>
  <div>
    <label>image url
      <input
        class="input-text"
        @input="update"
        :placeholder="args.placeholder"
        :value="value"
        style="width:50%"></input>
    </label>
    OR <button>Search</button>
    <img data-hello="true2" width="100%" :src="value"></img>
  </div>
</template>

<script>
  export default {
    props: ['name', 'data', 'schema', 'args'],
    data() {
      return {
        value: this.$props.data
      }
    },
    methods: {
      update(event) {
        this.value = event.target.value;
        this.$store.commit('UPDATE_FORMDATA', { path: this.name, data: this.value});
      }
    },
    slot: 'main'
  }
</script>
