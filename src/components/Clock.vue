<template>
  <div>
    <div id="clock">
      <div id="time">06:00</div>
      <div id="date">{{ months }} 월 {{dates}} 일 {{days}}요일</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      months: '',
      dates: '',
      days: ''
    }
  },
  created: function () {
    console.log('created')
    this.updateDateTime()
  },
  methods: {
    updateDateTime: function updateDateTime () {
      var week = ['일', '월', '화', '수', '목', '금', '토']
      var now = new Date()
      this.months = now.getMonth() + 1
      this.dates = now.getDate()
      this.days = week[now.getDay()]
      console.log(now.getMonth())
    }
  }
}
</script>

<style>
#clock {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
#time {
  font-size: 85px;
  font-weight: 200;
}
#date {
  font-size: 22px;
  font-weight: 400;
}
</style>
