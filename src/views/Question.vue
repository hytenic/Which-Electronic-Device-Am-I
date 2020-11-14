<template>
  <div>
  This is Question
    <button @click="onClickBtn">
    버튼입니다
    </button>
  <div>{{progress}}</div>
  </div>
</template>

<script>
export default {
  name: 'Question',
  data () {
    return {
      progress: 0
    }
  },
  methods: {
    onClickBtn () {
      if (this.progress > 10) {
        this.$router.push('/result')
      }
      this.progress++
      console.log(this.progress)
    }
  }
}
</script>
