<template>
  <div id="about"></div>
  <section class="my-12">
    <h2 class="text-3xl font-bold mb-6">
     About Me & Skills
    </h2>
    <div class="flex flex-col md:flex-row items-center">
     <img alt="A professional headshot of the portfolio owner" class="rounded-full w-48 h-50 mb-7 md:mb-0 md:mr-7" height="300" src="https://ntandomabuto.github.io/images/siw.jpg" width="300"/>
     <p class="text-m">
      My name is Ntando Mabuto from Cape Town. I am a well motivated person and I push myself to get everything done. I graduated from high school in 2022. Knowledge is power and everytime I learn new things I get excited. I was introduced to the tech industry at grade ten, since then I set a new goal of being the best and a professional IT specialist. I am still new in the industry and I am working my way up, everyday is a new lesson so I am getting better with time. During my spare time I do self-studying and practising to improve my skills, things I enjoy doing are reading, drawing and playing games. Working individually is efficient but group work is done quickly, I work well within groups because different minds bring up bright ideas. I can speak two languages, Isixhosa and English
       </p>
       <section class="skills">        
            <div class="html">
                <i class="fa-brands fa-html5 fa-5x" style="color: rgb(116, 114, 114);"></i>
                <h6>HTML</h6>
            </div>
            <div class="css">
                <i class="fa-brands fa-css3 fa-5x" style="color:rgb(116, 114, 114);"></i>
                <h6>CSS</h6>
            </div>
            <div class="boot">
                <i class="fa-brands fa-bootstrap fa-5x" style="color: rgb(116, 114, 114);"></i>
                <h6>BOOTSTRAP</h6>
            </div>
            <div class="js">
                <i class="fa-brands fa-js fa-5x" style="color: rgb(116, 114, 114);"></i>
                <h6>JAVASCRIPT</h6>
            </div>
            <div class="figma">
                <i class="fa-brands fa-figma fa-5x" style="color: rgb(116, 114, 114);"></i>
                <h6>FIGMA</h6>
            </div>
            <div class="vue">
                <i class="fa-brands fa-vuejs fa-5x" style="color: rgb(116, 114, 114);"></i>
                <h6>VUE</h6>
            </div>
            <div class="node">
                <i class="fa-brands fa-node-js fa-5x" style="color: rgb(116, 114, 114);"></i>
                <h6>Node</h6>
            </div>
            <div class="mysql">
                <i class="fa-solid fa-database fa-5x" style="color:rgb(116, 114, 114);"></i>
                <h6>MySql</h6>
            </div>
            <div class="git">
              <i class="fa-brands fa-github fa-5x" style="color:rgb(116, 114, 114);" ></i>
                <h6>GIT</h6>
            </div>
        </section>
    </div>
   </section>
</template>
<style scoped>
.skills div{
    margin-bottom: 10%;
    margin-left: 35%;
    width: 150px;
    transition: transform linear 1s;
    
}
.skills{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    justify-content: center;
    margin: 50px;
}
.skills div:hover{
    /* transform: scale(1,2); */
    transform:scale(1.2);
    box-shadow: 0 0 15px 2px black;
    border-radius: 2rex;
}
</style>
