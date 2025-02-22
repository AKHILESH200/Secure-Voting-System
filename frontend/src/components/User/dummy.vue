<template>
<OtpVerf :aadhar="aadhar"></OtpVerf>
</template>
<script>
import OtpVerf from './OtpVerf.vue';
export default{
    name:"DummyPage",
    data(){
        return{
            aadhar:""
        }
    },
    components:{
        OtpVerf
    },
    mounted(){
        if (localStorage.getItem("user-info")==null)
        {
            this.$router.push({name:"GeneralLogin"});
        }
        this.aadhar=JSON.parse(localStorage.getItem("user-info")).aadharNumber;
        console.log(this.aadhar); 
    }
}
</script>