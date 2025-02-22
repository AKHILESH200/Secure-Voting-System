<template>
    <img class="logo" src="../../assets/logo.png">
    <h1>OTP Verification</h1>
    <p>An OTP has been sent to your Aadhar linked Phone Number {{ phone }} </p>
    <input type="text" v-model="OTP">
    <button @click="verifyOtp">Verify</button>
</template>
<script>
import axios from 'axios';
export default {
    props: ["aadhar"],
    name: "OtpVerf",
    data() {
        return {
            phone: "",
            OTP: ""
        }
    },
    methods: {
        async sendOtp() {
            console.log(this.aadhar)
            let uri1 = this.$url+"voters/"+this.aadhar;
            // let uri="api/voters/";
            console.log(uri1);

            const result = await axios.get(uri1);
            console.log("Database Status:", result.status);
            console.log(result.data);
            this.phone = result.data.phoneNumber;
            console.log(this.phone);
            let uri2 = this.$url+"twilio-sms/send-otp";
            const body2 = {
                "countryCode": "91",
                "phoneNumber": this.phone
            };
            const result2 = await axios.post(uri2, body2);
            console.log("OTP SEND STATUS:", result2.status);
            localStorage.clear();
        },
        async verifyOtp() {
            let uri = this.$url+"twilio-sms/verify-otp";
            const body1 = {
                "countryCode": "91",
                "phoneNumber": this.phone,
                "otp": this.OTP
            }
            const result=await axios.post(uri,body1);
            if (result.status==200){
                let u=this.$url+"voters/"+this.aadhar;
                try{
                const result=axios.patch(u);
                alert("Verification Succesfull :)");
                console.log(result.data);
                this.$router.push({name:"GeneralLogin"});
                
                    
                } catch(e)
                {
                    console.error(e);
                    console.log(result.data);
                    alert("Verification Failed, Try Again later :(");
                    this.$router.push({name:"GeneralLogin"});
                }         
                console.log("Reached the End of Verification!");
                
                
            }
        }

    },
    mounted() {

        this.sendOtp();
    }
}
</script>