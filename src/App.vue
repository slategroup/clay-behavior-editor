<style language="sass">
  textarea {
    width: 500px;
    height: 200px;
  }
  .err {
    color: red;
  }
  .kiln-container {
    border-style: solid;
    border-color: black;
    width: 636px;
    padding: 18px;
    margin: auto;
  }

</style>

<template>
  <div id="app">
    <h2> configure component </h2>
    <p class="err">{{err}}</p>
    <label>args yaml 
      <textarea v-model="argsYaml"></textarea>
    </label>

    <hr>
    <h2> play with component defined in src/components/behavior.vue </h2>

    <br><br>
    <section class="behavior-zone">
      <div class="kiln-container">
        <behavior
          name="property"
          :data="componentData"
          schema="dontknowwhattodohere"
          :args="args"
        ></behavior>
      </div>
    </section>
  </div>
</template>

<script>
import Behavior from './components/behavior';
import { load as yamlLoad } from 'js-yaml';

export default {
  name: 'app',
  computed: {
    args() {
      try {
        console.log('calc')
        const args =  yamlLoad(this.argsYaml);
        this.err = ''
        console.log('argsYaml', args)
        if (args) {
          return args
        }
        else {
          return {}
        }
      }
      catch(error) {
        this.err = error
        console.log('returning')
        return {}
      }
    }
  },
  watch: {
    argsYaml(value) {
      window.localStorage.setItem('argsYaml', value);
    }
  },
  data() {
    const argsYaml = window.localStorage.getItem('argsYaml') ||
 `placeholder:
      "enter an image uri here"`.trim()

    return {
      err: '',
      argsYaml,
      componentData: this.$store.state.ui.currentForm.property
    }
  },
  methods: {

  },
  components: {
    Behavior,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
