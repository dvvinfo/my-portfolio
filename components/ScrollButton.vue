<template>
  <div class="mouse">
    <div class="wheel"></div>
    <div class="scroll"></div>
    <div class="scroll-two"></div>
    <div class="scroll-three"></div>
  </div>
</template>

<script setup></script>

<style scoped>
.mouse{
   margin-top: 4em;
   margin-left:auto;
   margin-right:auto;
   width:3.5em;
   height:6em;
   background-color:rgba(255,255,255,0);
   border-radius: 100px;
   border:2px solid white;
}
.wheel{
  margin-top:1em;
  margin-left:auto;
  margin-right:auto;
  width:0.75em;
  height:0.75em;
  background-color:white;
  border-radius: 50%;
}
.scroll-two{
  opacity:0;
   margin-left:auto;
   margin-right:auto;
   width:0px;
   height:0px;
  border-left: 0.35em solid transparent;
	border-right: 0.35em solid transparent;
	border-top: 0.4em solid white;
   -webkit-animation: down2 1s infinite;
   animation: down2 1s infinite;
}
.scroll-three{
   opacity:0;
   margin-left:auto;
   margin-right:auto;
   width:0px;
   height:0px;
  border-left: 0.35em solid transparent;
	border-right: 0.35em solid transparent;
	border-top: 0.4em solid white;
   -webkit-animation: down 1s infinite;
   animation: down 1s infinite;
}
.scroll{
  opacity:0;
   margin-left:auto;
   margin-right:auto;
   width:0px;
   height:0px;
  border-left: 0.35em solid transparent;
	border-right: 0.35em solid transparent;
	border-top: 0.4em solid white;
   -webkit-animation: down3 1s infinite;
  animation: down3 1s infinite;
}
@-webkit-keyframes down{
  0%{
    opacity:0;
  }
  100%{
    opacity:1;
    transform: translateY(2.3em);
  }
}
@-webkit-keyframes down2{
  40%{
    opacity:0;
  }
  100%{
    opacity:0.5;
    transform: translateY(2.3em);
  }
}
@-webkit-keyframes down3{
  60%{
    opacity:0;
  }
  100%{
    opacity:0.2;
    transform: translateY(2.3em);
  }
}
@keyframes down{
  0%{
    opacity:0;
  }
  100%{
    opacity:1;
    transform: translateY(2.3em);
  }
}
@keyframes down2{
  40%{
    opacity:0;
  }
  100%{
    opacity:0.5;
    transform: translateY(2.3em);
  }
}
@keyframes down3{
  60%{
    opacity:0;
  }
  100%{
    opacity:0.2;
    transform: translateY(2.3em);
  }
  
}

@media (max-width: 580px) {
  .mouse{
    margin-top: 2rem;
    width:2em;
   height:4em;
   background-color:rgba(255,255,255,0);
   border-radius: 100px;
   border:2px solid white;
  }
  .wheel{
  margin-top:0.5em;
}

@-webkit-keyframes down{
  0%{
    opacity:0;
  }
  100%{
    opacity:1;
    transform: translateY(1em);
  }
}
@-webkit-keyframes down2{
  40%{
    opacity:0;
  }
  100%{
    opacity:0.5;
    transform: translateY(1em);
  }
}
@-webkit-keyframes down3{
  60%{
    opacity:0;
  }
  100%{
    opacity:0.2;
    transform: translateY(1em);
  }
}
@keyframes down{
  0%{
    opacity:0;
  }
  100%{
    opacity:1;
    transform: translateY(1em);
  }
}
@keyframes down2{
  40%{
    opacity:0;
  }
  100%{
    opacity:0.5;
    transform: translateY(1em);
  }
}
@keyframes down3{
  60%{
    opacity:0;
  }
  100%{
    opacity:0.2;
    transform: translateY(1em);
  }
  
}

}
</style>
