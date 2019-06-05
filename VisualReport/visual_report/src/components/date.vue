<template>
    <div id="clock" class="clock">
        <p class="datep">{{date}}</p> 
        <p class="time">{{time}}</p> 
    </div>
</template>
<script>
export default {
  name: "date",
  data() {
    return {
        time: '',
        date: '',
        week: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    };
  },
  methods:{
		updateTime() {
			var cd = new Date();
			this.time = this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2) + ':' + this.zeroPadding(cd.getSeconds(), 2);
			this.date = this.zeroPadding(cd.getFullYear(), 4) + '-' + this.zeroPadding(cd.getMonth()+1, 2) + '-' + this.zeroPadding(cd.getDate(), 2) + ' ' + this.week[cd.getDay()];
		},
		zeroPadding(num, digit) {
			var zero = '';
			for(var i = 0; i < digit; i++) {
				zero += '0';
			}
			return (zero + num).slice(-digit);
		}
	},
	mounted() {
      var timerID = setInterval(this.updateTime, 1000);
	  this.updateTime();
  }
}
</script>
<style>
    .clock {
        text-align: center;
        position: absolute;
        top: 0px;
        left: 50%;
        margin-left: -53px;
        font-family: 'Share Tech Mono', monospace;
        text-shadow: 0 0 20px #0aafe6;
        color: #daf6ff;
    }
    .datep {
        margin-top: 5%;
    }
    .time {
        position: absolute;
        font-size: 30px;
        top: 0px;
        left: 50%;
        margin-left: -65.5px;
    }
</style>