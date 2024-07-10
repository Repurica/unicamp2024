<template>
  <div style="display: flex; justify-content: center; ">
    <a class="thumb fa fa-thumbs-up"></a>
  </div>
</template>

<style scoped>
html {
  box-sizing: border-box;
}

*,
*::after,
*::before {
  box-sizing: inherit;
}

html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.center {
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  max-width: 120px;
  margin: 0 auto;
  top: 50%;
  text-align: center;
  position: relative;
}
.center::after {
  clear: both;
  content: "";
  display: block;
}

.thumb {
  -webkit-animation: scale 1.5s cubic-bezier(0.645, 0.045, 0.355, 1);
  -moz-animation: scale 1.5s cubic-bezier(0.645, 0.045, 0.355, 1);
  animation: scale 1.5s cubic-bezier(0.645, 0.045, 0.355, 1);
  -webkit-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-fill-mode: both;
  -moz-animation-fill-mode: both;
  animation-fill-mode: both;
  color: #28e090;
  font-size: 30px;
  text-decoration: none;
}

@-webkit-keyframes scale {
  0% {
    transform: scale(1);
  }
  1% {
    transform: scale(0);
  }
  20% {
    transform: scale(0);
  }
  35% {
    transform: scale(1.4);
  }
  40% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
  65% {
    transform: scale(1);
  }
  90% {
    transform: scale(1);
  }
  100% {
    transform: scale(1);
  }
}
@-moz-keyframes scale {
  0% {
    transform: scale(1);
  }
  1% {
    transform: scale(0);
  }
  20% {
    transform: scale(0);
  }
  35% {
    transform: scale(1.4);
  }
  40% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
  65% {
    transform: scale(1);
  }
  90% {
    transform: scale(1);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes scale {
  0% {
    transform: scale(1);
  }
  1% {
    transform: scale(0);
  }
  20% {
    transform: scale(0);
  }
  35% {
    transform: scale(1.4);
  }
  40% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
  65% {
    transform: scale(1);
  }
  90% {
    transform: scale(1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
