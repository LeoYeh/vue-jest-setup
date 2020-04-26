<template>
  <div class="text-align-center">
    <input type="text" @input="actionInputIfTrue" />
    <button @click="actionClick()">Click</button>
    <p>{{$store.getters.text}}</p>
  </div>
</template>

<script>

import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'action',
  methods:{
    ...mapActions(['actionClick']),

      actionInputIfTrue: function actionInputIfTrue(event) {
        const inputValue = event.target.value
        if (inputValue === 'input') {
          this.$store.dispatch('actionInput', { inputValue })
        }
      }
  },
}
</script>