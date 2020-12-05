<template>
  <div class="container">
    <transition name="sunrise">
      <img class="sun-img" v-if="show" @transitionend="show = false" src="../assets/sun.png" alt="sun" :style="'--img-left: ' + (progress - 1) * 60 + 'px'">
    </transition>
    <div class="title">{{question}}</div>
    <div v-for="(answer, index) in answers" :key="answer._id" >
      <button class="btn-answer" @click="() => onClickBtn(index, answer)">
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
      show: false,
      progress: 1,
      totalQuestionCount: 8,
      questions: questions,
      result: {}
    }
  },
  methods: {
    onClickBtn (index, answer) {
      let curQuestionScores = this.questions[this.progress - 1]['score']
      for (let device in curQuestionScores[index]) {
        if (this.result[device]) {
          this.result[device] += curQuestionScores[index][device]
        } else {
          this.result[device] = curQuestionScores[index][device]
        }
      }

      // console.log(this.result)

      if (this.progress++ >= this.totalQuestionCount) {
        this.$router.push('/result')
        // this.$router.push({path: '/result', query: {result: this.result}})
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
  },
  watch: {
    progress: function (val) {
      console.log(this.show, val)
      this.show = true
    }
  },
  mounted: function () {
    console.log('mounted')
    this.show = true
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
  left: var(--img-left);
}

.sunrise-enter {
  transform: translateX(-60px);
}
/* rotate(-0.1turn) */

.sunrise-enter-active {
  transition: all 1.5s ease;
}

</style>
