<template>
    <div id="matching" class="container">
        <return-btn></return-btn>
        <match v-if="flag" @end="endFlag" :unload="unload" ref="match"></match>
        <challenge v-else></challenge>
    </div>
</template>
<script>
import returnBtn from '@/components/return'
import match from '@/components/match'
import challenge from '@/components/challenge'

export default {
  created:()=>{

  },
  data(){
     return {
        flag:false,
        unload:false,
        show:true
     }
  },
  components:{
    returnBtn,match,challenge
  },
  methods:{
     endFlag(){
        this.flag=false;
     }
  },
  onShow(){
    this.$nextTick(() => {
        this.$refs.match.matchSpeedAfterAppear()
    })
     // this.$refs.match.matchSpeedAfterAppear()
     this.flag=true;
     // console.log("show")

      // this.$refs.match.$emit('childMethod')
  },
  onReady(){

  },
  mounted(){
      // this.matchIng="00:00";
      // this.active={
      //   matchSpeedActive:false,
      //   grayActive:false,
      //   infoActive:false
      // }
  },
  onUnload(){
     this.unload=true;
  }
}

</script>
<style scoped lang="scss">
 
</style>
