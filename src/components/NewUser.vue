<template>
  <div class="onboarding-wrapper">
    <p class="message">{{ question }}</p>
    <div class="inputs">
      <input type="text" name="user-name" v-model="userName" v-if="currentQuestion === 1" @keyup="keymonitor($event)">
      <input type="text" name="vacation-name" v-model="vacationName" v-if="currentQuestion === 2" @keyup="keymonitor($event)">
    </div>
    <div class="nav">
      <button class="next-question" @click="nextQuestion()">Next</button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        currentQuestion: 1,
        userName: null,
        vacationName: null,
        question: 'Hello! What is your name?'
      }
    },
    mounted () {
      document.getElementsByName('user-name')[0].focus()
    },
    methods: {
      nextQuestion () {
        if (this.userName) {
          this.question = `Nice to meet you ${this.userName}. Where are you going?`
          this.currentQuestion = 2
          this.$nextTick(() => {
            document.getElementsByName('vacation-name')[0].focus()
          })
        }
      },
      keymonitor (e) {
        if (e.key === 'Enter') {
          this.nextQuestion()
        }
      }
    }
  }
</script>

<style scoped>
  input{
    border-bottom: solid #000000 3px;
    border-top: none;
    border-right: none;
    border-left: none;
    font-size: 3.5em;
  }
  input:focus{
    outline: none;
  }
  .nav{
    margin-top: 2em;
    text-align: center;
  }
</style>

