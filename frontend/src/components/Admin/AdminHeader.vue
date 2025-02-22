<template>
    <div class="nav">
       <img src="../../assets/logo_1.png">
       <router-link to="/admin">Home</router-link> 
       <router-link to="/votes">Vote</router-link>
       <router-link to="#">Profile</router-link>
       <a v-on:click="logout">Logout</a>
    </div>
</template>
<script>

export default{
    name: 'HeaderAll',
    methods:{
        logout()
        {
            localStorage.clear();
            this.$router.push({name: "GeneralLogin"})

        }
    },
    mounted(){
    let logged=JSON.parse(localStorage.getItem("user-info"));
    if (!logged)
    {
      this.$router.push({name:"GeneralLogin"});
    }
  this.user=logged.name;
  }
   
}

</script>
<style>
    body{
        padding: 0;
        margin: 0;
    }
    .nav{
        background-color: #ffffff;
        overflow: hidden;
    }
    .nav img{
        float: left;
        margin-right: 8px;
        width: 250px;
    }
    .nav a{
        float: left;
        color: rgb(7, 6, 6);
        padding: 14px 16px;
        font-size: 16px;
        text-decoration: none;
        margin-right: 8px;
       flex-wrap: inherit;
       align-items: center;
    }
    .nav a:hover{
        background: green;
        color: #000000;
    }
</style>