<template>
  <div class="hello">
    <!-- <img alt="" src="https://ntandomabuto.github.io/images/siw.jpg" width="30%"> -->
    <div class="hey">
      <h1 class="text-3xl font-bold mb-6">Hello</h1>
      <h3 class="text-3xl font-bold mb-6">I am Ntando Mabuto</h3>
      <h3 class="text-3xl font-bold mb-6">{{ msg }}</h3>
      <button type="button" style="width: 30%;height: 6%;"><a href="#about"><h5> About Me</h5></a>
        
      </button>
      </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
body {
  font-family: 'Roboto', sans-serif;
}
.hello{
  display: flex;
  /* text-align: center; */
  justify-content: center;
}

.hey{
  justify-content: center;
  align-content: center;
}
button a{
  color: white;
  text-decoration: none;
}
button{
  background-color: grey;
  border-radius: 2rem;
  width: 100px;
  transition: transform linear 1s;
  margin: 50px;
}
/* button:hover{
  background: #76b942;
} */

button:hover {
   background: #76b942;
   transform: scale(1,2);
    transform:scale(1.2);
background: linear-gradient(0deg, #58922b 0%, rgb(116, 229, 127) 100%);
}
img{
  border-radius: 7rem;
  margin-top: 30px;
}
h1{
  padding-left: 25px;
  color: black;
  align-content: center;
}

</style>
