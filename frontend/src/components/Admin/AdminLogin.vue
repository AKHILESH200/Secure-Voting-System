<template>
    <div class="alogin">
        <input type="text" v-model="eId" placeholder="Enter your Employee Id" />
        <input type="password" v-model="password" placeholder="Enter Password" />
        <button v-on:click="login">Log in</button>
        <p v-if="error" class="err">Please Check your Credentials and Try Again!!</p>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'AdminLogIn',
    data() {
        return {
            eId: '',
            password: '',
            error: false
        }
    },
    methods: {
        async login() {

            try {
                let uri = this.$url+"admins/"+this.eId;
                // let uri="api/voters/";
                console.log(uri);
                const result = await axios.get(
                    uri);

                // Check if eId and password match with the data on the server
                const match = (result.data.employeeId === this.eId) && (result.data.password === this.password);
                console.log(match)
                if (match) {
                    this.error = false;
                    localStorage.setItem("user-info", JSON.stringify({ "employeeId": this.eId, "name": result.data.name }))
                    this.$router.push({ name: 'AdminHome' })
                } else {
                    this.error = true;
                    // Display error message
                    console.log('Invalid email or password.')
                }
            } catch (error) {
                // Display error message
                this.error = true;
            }
        }

    },

}
</script>
<style>
.logo {
    width: 150px;
}

.alogin input {
    width: 300px;
    height: 40px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid green;
    text-align: center;
}

.alogin a {
    display: block;
    margin-top: 15px;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
}

.alogin button {
    width: 320px;
    height: 40px;
    background: green;
    color: white;
    border-color: green;
}

.err {
    color: red;
}</style>