<template>
  <div class="home">
    <div class="curtainContainer">
      <div class="curtain curtain--left"></div>
      <div class="curtain curtain--top"></div>
      <div class="curtain curtain--right"></div>
      <div class="curtain curtain--bottom"></div>
    </div>
    <div class="projetsBg">
      <div class="projetsBg__project projetsBg__project--first"><div class="projetsBg__projectColor"></div></div>
      <div class="projetsBg__project projetsBg__project--second"></div>
    </div>
    <div class="projetText">
      <h1>lorem</h1>
    </div>
    <div class="cursor"><div class="point"></div></div>
    <!--//filter-->
    <svg id="svgeffects">
      <defs>
        <filter class="safari_only" id="liquify">
          <feTurbulence baseFrequency="0.0105" numOctaves="5" result="warp" type="fractalNoise"></feTurbulence>
          <feDisplacementMap id="liquid" in="SourceGraphic" in2="warp" scale="15" xChannelSelector="R" yChannelSelector="B"></feDisplacementMap>
        </filter>

        <!--<animate id="liquid1" xlink:href="#liquid" attributeName="scale" dur="5s" values="-100;100;-100" begin="0s;" repeatCount="indefinite" />-->
      </defs>
    </svg>

  </div>
</template>

<script>
// js
let state = false;


export default {
  name: 'home',
  mounted() {
    window.addEventListener('wheel', (e) => {
      if (state) {
        return false;
      }
      if (e.deltaY < 0) {
        console.log('up');
        // animation goes here
      } else if (e.deltaY > 0) {
        console.log('down');
        // animation goes here
        const scrolltest = new TimelineLite();
        scrolltest.add(TweenLite.to(['.projetsBg__projectColor'], 1, { transform: 'translate3d(0px, 0px, 0px) scale(1,0)', ease: Power2.easeInOut }));
        scrolltest.add(TweenLite.to(['.projetsBg__projectColor'], 1, { transform: 'translate3d(0px, 0px, 0px) scale(1,1)', ease: Power2.easeInOut }));
        // scrolltest.add(TweenLite.to(['.projetsBg__project'], 1, { transform: 'scale(1.25)', opacity: 1, ease: Power2.easeInOut },0));
        /* scrolltest.add(TweenLite.to(bckImage2,1, {left:'-100%'})); */
        // scrolltest.add(TweenLite.to(['.projetsBg__project'], 1, { transform: 'scale(1)', opacity: 1, ease: Power2.easeInOut },1));
        // curtain
        const animCurtain = new TimelineLite();
        animCurtain.to(['.curtain--top', '.curtain--bottom'], 1, { transform: 'translate3d(0px, 0px, 0px) scale(1, 0)', ease: Power2.easeInOut })
          .to(['.curtain--top', '.curtain--bottom'], 1, { transform: 'translate3d(0px, 0px, 0px)', ease: Power2.easeOut })
          .to(['.curtain--left', '.curtain--right'], 1, { transform: 'translate3d(0px, 0px, 0px) scale(0, 1)', ease: Power2.easeInOut }, 0)
          .to(['.curtain--left', '.curtain--right'], 1, { transform: 'translate3d(0px, 0px, 0px)', ease: Power2.easeOut }, 1);
      }
      state = true;

      setTimeout(() => { state = false; }, 2000);
    });
  },
};
</script>

<style scoped lang="scss">
.curtainContainer{
  height: 100vh;
  position: relative;
  z-index: 2;
}
.curtain{
  position: absolute;
  background: #000;
}
.curtain--left,.curtain--right{
  width: 20%;
  height: 100%;
}
.curtain--top,.curtain--bottom{
  width: 100%;
  height: 20%;
}
.curtain--left{
  left: 0;
  top: 0;
  transform-origin: left;
}
.curtain--right{
  right: 0;
  top: 0;
  transform-origin: right;
}
.curtain--top{
  top: 0;
  left: 0;
  transform-origin: top;
}
.curtain--bottom{
  bottom: 0;
  left: 0;
  transform-origin: bottom;
}
.projetsBg{
  width: 100%;
  height: 100%;
  transform: scale(1);
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  //background: black;
}
.projetsBg__project{
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100%;
  position: absolute;
}
.projetsBg__project--first{
  background-image: url("../assets/photoprojet.jpg");
}

.projetsBg__projectColor{
  position: absolute;
  top: 0;
  left: 0;
  width: 45%;
  height: 100%;
  background: #f1f1f1;
  transform-origin: top;
}

.projetText{
  width: 50%;
  height: 50%;
  padding: 0 0 0 0px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 3;
  h1{
    font-size: 200px;
    color: #fff;
    font-family: 'Abril Fatface', cursive;
    letter-spacing: 10px;
    text-transform: capitalize;
    position: relative;
    width: 100%;
    overflow: hidden;
    height: 200px;
    left:-360px ;
    background: url("../assets/cliptext.jpg") center center;
    background-size: cover;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}


//mouse
.cursor {
  position: absolute;
  width: 48px;
  height: 48px;
  top: 50%;
  left: 50%;
  margin: -24px 0 0 -24px;
  border: 3px solid #fff;
  border-radius: 100px;
  backface-visibility: hidden;
  transition: transform 0.3s ease-out;
  z-index: 2;
}
.point{
  position: absolute;
  top: 50%;
  left: 50%;
  height: 4px;
  width: 4px;
  border-radius: 50%;
  -webkit-transform: translate(-50% , -50%);
  -moz-transform: translate(-50% , -50%);
  -ms-transform: translate(-50% , -50%);
  -o-transform: translate(-50% , -50%);
  transform: translate(-50% , -50%);
  background: #fff;

}
.cursor.is-moving {
  transform: scale(0.7);
}
</style>
