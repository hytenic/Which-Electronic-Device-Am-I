<template>
  <div class="container">
    <img class="sun-img" src="../assets/sun.png" alt="sun">
    <div class="title">{{question}}</div>
    <div v-for="answer in answers" :key="answer._id" >
      <button class="btn-answer" @click="onClickBtn">
        {{answer}}
      </button>
    </div>
  </div>
</template>

<script>
import questions from '../data/Questions.json'
export default {
  name: 'Question',
  data () {
    return {
      progress: 1,
      totalQuestionCount: 8,
      questions: questions
    }
  },
  methods: {
    onClickBtn () {
      if (this.progress++ >= this.totalQuestionCount) {
        this.$router.push('/result')
      }
    }
  },
  computed: {
    question: function () {
      return this.questions[this.progress - 1].question
    },
    answers: function () {
      return this.questions[this.progress - 1].answers
    }
  }
}
</script>

<style>
.container {
  background-color: white;
  max-height: 100vh;
  position: relative;
  padding: 30% 0 0;
}

.title {
  font-size: 25px;
  font-weight: bold;
  padding: 0 10%;
  padding-bottom: 10%;
}

.btn-answer {
  width: 80%;
  height: 70px;
  border-radius: 20px;
  border: 0px;
  color: white;
  font-size: 20px;
  font-weight: normal;
  padding: 10px;
  background-color: #2e4f67;
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
  margin: 5px;
}

.sun-img {
  width: 70px;
  position: absolute;
  left: -35px;
  top: 120px;
}
</style>
