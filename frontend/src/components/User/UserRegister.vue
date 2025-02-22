<template>
    <div v-if="!success">
    <img class="logo" src="../../assets/logo.png">
    <h1>Register to Vote</h1>
    <div class="reg">
        <input type="text" v-model="name" placeholder="Enter Your Full Name" />
        <input type="text" v-model="aadhar" placeholder="Enter your Aadhar Number" />
        <input type="number" v-model="mob" placeholder="Enter your Mobile Number connected with Aaadhar" />
        <input type="password" v-model="password" placeholder="Enter Password" @keyup="pcheck" />
    </div>
    <div class="regb">
        <button v-on:click="register">Register</button>
    </div>
    <p v-if="error" class="err">Please Check your Inputs</p>
</div>
<OtpVerf v-if="success" :aadhar="aadhar"></OtpVerf>
</template>
<script>
import axios from 'axios';
import OtpVerf from './OtpVerf.vue';
export default {
    name: 'UserReg',
    data() {
        return {
            aadhar: '',
            password: '',
            cpassword: '',
            mob: '',
            success:false,
            error: false
        }
    },
    components: {
        OtpVerf
    },
    methods: {
        async register() {
            const body1 = {
                "name": this.name,
                "aadharNumber": this.aadhar,
                "password": this.password,
                "phoneNumber": this.mob

            };
            let uri = this.$url+"voters";
            // let uri="api/voters/";
            try{
            const result = await axios.post(
                uri,
                body1)
            if (result.status == 201) {
                this.error=false;
                alert("Registered Successfully\nPending OTP Verification!!");
                this.success=true;
            }
            else {
                this.error = true;
                console.log("body:",result.data.message);
            }}catch(e)
            {
                this.error=true;
            }
        },
        pcheck() {
            const specialCharacters = /[`!@#$%^&*()_+\-=\\|,.<>?~]1234567890/;
            this.pcheck = specialCharacters.test(
                this.password);
        }
    }
}
</script>
<style>
.logo {
    width: 150px;
}

.reg input {
    width: 300px;
    height: 40px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid #8B0304;
    text-align: center;
}

.reg a {
    display: block;
    margin-top: 15px;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
}

.regb button {
    margin-top: 1%;
    width: 320px;
    height: 40px;
    background: #8B0304;
    color: white;
    border-color: #8B0304;
}
</style>