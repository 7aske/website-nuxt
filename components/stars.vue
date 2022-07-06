<template>
  <div class="stars">
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
  </div>
</template>

<style>

@-moz-keyframes blink {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(0.4);
    opacity: 0.5;
  }
}

@-webkit-keyframes blink {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(0.4);
    opacity: 0.5;
  }
}

@-o-keyframes blink {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(0.4);
    opacity: 0.5;
  }
}

@keyframes blink {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(0.4);
    opacity: 0.5;
  }
}
.star {
  position: absolute;
  z-index: -1;
}

.star:nth-child(1) {
  top: 92vh;
  left: 3vw;
}

.star:nth-child(1):before,
.star:nth-child(1):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -1s;
}

.star:nth-child(1):before {
  top: 1px;
  left: -1px;
  width: 6px;
  height: 2px;
}

.star:nth-child(1):after {
  top: -1px;
  left: 1px;
  width: 2px;
  height: 6px;
}

.star:nth-child(2) {
  top: 84vh;
  left: 20vw;
}

.star:nth-child(2):before,
.star:nth-child(2):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -2s;
}

.star:nth-child(2):before {
  top: 1.5px;
  left: -1.5px;
  width: 9px;
  height: 3px;
}

.star:nth-child(2):after {
  top: -1.5px;
  left: 1.5px;
  width: 3px;
  height: 9px;
}

.star:nth-child(3) {
  top: 14vh;
  left: 92vw;
}

.star:nth-child(3):before,
.star:nth-child(3):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -3s;
}

.star:nth-child(3):before {
  top: 1.5px;
  left: -1.5px;
  width: 9px;
  height: 3px;
}

.star:nth-child(3):after {
  top: -1.5px;
  left: 1.5px;
  width: 3px;
  height: 9px;
}

.star:nth-child(4) {
  top: 92vh;
  left: 74vw;
}

.star:nth-child(4):before,
.star:nth-child(4):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -4s;
}

.star:nth-child(4):before {
  top: 1px;
  left: -1px;
  width: 6px;
  height: 2px;
}

.star:nth-child(4):after {
  top: -1px;
  left: 1px;
  width: 2px;
  height: 6px;
}

.star:nth-child(5) {
  top: 21vh;
  left: 7vw;
}

.star:nth-child(5):before,
.star:nth-child(5):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -5s;
}

.star:nth-child(5):before {
  top: 0.5px;
  left: -0.5px;
  width: 3px;
  height: 1px;
}

.star:nth-child(5):after {
  top: -0.5px;
  left: 0.5px;
  width: 1px;
  height: 3px;
}

.star:nth-child(6) {
  top: 4vh;
  left: 52vw;
}

.star:nth-child(6):before,
.star:nth-child(6):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -6s;
}

.star:nth-child(6):before {
  top: 2px;
  left: -2px;
  width: 12px;
  height: 4px;
}

.star:nth-child(6):after {
  top: -2px;
  left: 2px;
  width: 4px;
  height: 12px;
}

.star:nth-child(7) {
  top: 61vh;
  left: 14vw;
}

.star:nth-child(7):before,
.star:nth-child(7):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -7s;
}

.star:nth-child(7):before {
  top: 2px;
  left: -2px;
  width: 12px;
  height: 4px;
}

.star:nth-child(7):after {
  top: -2px;
  left: 2px;
  width: 4px;
  height: 12px;
}

.star:nth-child(8) {
  top: 40vh;
  left: 14vw;
}

.star:nth-child(8):before,
.star:nth-child(8):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -8s;
}

.star:nth-child(8):before {
  top: 0.5px;
  left: -0.5px;
  width: 3px;
  height: 1px;
}

.star:nth-child(8):after {
  top: -0.5px;
  left: 0.5px;
  width: 1px;
  height: 3px;
}

.star:nth-child(9) {
  top: 82vh;
  left: 19vw;
}

.star:nth-child(9):before,
.star:nth-child(9):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -9s;
}

.star:nth-child(9):before {
  top: 1.5px;
  left: -1.5px;
  width: 9px;
  height: 3px;
}

.star:nth-child(9):after {
  top: -1.5px;
  left: 1.5px;
  width: 3px;
  height: 9px;
}

.star:nth-child(10) {
  top: 9vh;
  left: 3vw;
}

.star:nth-child(10):before,
.star:nth-child(10):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -10s;
}

.star:nth-child(10):before {
  top: 2px;
  left: -2px;
  width: 12px;
  height: 4px;
}

.star:nth-child(10):after {
  top: -2px;
  left: 2px;
  width: 4px;
  height: 12px;
}

.star:nth-child(11) {
  top: 34vh;
  left: 97vw;
}

.star:nth-child(11):before,
.star:nth-child(11):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -11s;
}

.star:nth-child(11):before {
  top: 1px;
  left: -1px;
  width: 6px;
  height: 2px;
}

.star:nth-child(11):after {
  top: -1px;
  left: 1px;
  width: 2px;
  height: 6px;
}

.star:nth-child(12) {
  top: 60vh;
  left: 17vw;
}

.star:nth-child(12):before,
.star:nth-child(12):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -12s;
}

.star:nth-child(12):before {
  top: 1px;
  left: -1px;
  width: 6px;
  height: 2px;
}

.star:nth-child(12):after {
  top: -1px;
  left: 1px;
  width: 2px;
  height: 6px;
}

.star:nth-child(13) {
  top: 88vh;
  left: 71vw;
}

.star:nth-child(13):before,
.star:nth-child(13):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -13s;
}

.star:nth-child(13):before {
  top: 1.5px;
  left: -1.5px;
  width: 9px;
  height: 3px;
}

.star:nth-child(13):after {
  top: -1.5px;
  left: 1.5px;
  width: 3px;
  height: 9px;
}

.star:nth-child(14) {
  top: 91vh;
  left: 86vw;
}

.star:nth-child(14):before,
.star:nth-child(14):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -14s;
}

.star:nth-child(14):before {
  top: 2px;
  left: -2px;
  width: 12px;
  height: 4px;
}

.star:nth-child(14):after {
  top: -2px;
  left: 2px;
  width: 4px;
  height: 12px;
}

.star:nth-child(15) {
  top: 78vh;
  left: 87vw;
}

.star:nth-child(15):before,
.star:nth-child(15):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -15s;
}

.star:nth-child(15):before {
  top: 0.5px;
  left: -0.5px;
  width: 3px;
  height: 1px;
}

.star:nth-child(15):after {
  top: -0.5px;
  left: 0.5px;
  width: 1px;
  height: 3px;
}

.star:nth-child(16) {
  top: 51vh;
  left: 41vw;
}

.star:nth-child(16):before,
.star:nth-child(16):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -16s;
}

.star:nth-child(16):before {
  top: 1px;
  left: -1px;
  width: 6px;
  height: 2px;
}

.star:nth-child(16):after {
  top: -1px;
  left: 1px;
  width: 2px;
  height: 6px;
}

.star:nth-child(17) {
  top: 56vh;
  left: 24vw;
}

.star:nth-child(17):before,
.star:nth-child(17):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -17s;
}

.star:nth-child(17):before {
  top: 2px;
  left: -2px;
  width: 12px;
  height: 4px;
}

.star:nth-child(17):after {
  top: -2px;
  left: 2px;
  width: 4px;
  height: 12px;
}

.star:nth-child(18) {
  top: 94vh;
  left: 73vw;
}

.star:nth-child(18):before,
.star:nth-child(18):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -18s;
}

.star:nth-child(18):before {
  top: 0.5px;
  left: -0.5px;
  width: 3px;
  height: 1px;
}

.star:nth-child(18):after {
  top: -0.5px;
  left: 0.5px;
  width: 1px;
  height: 3px;
}

.star:nth-child(19) {
  top: 52vh;
  left: 44vw;
}

.star:nth-child(19):before,
.star:nth-child(19):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -19s;
}

.star:nth-child(19):before {
  top: 0.5px;
  left: -0.5px;
  width: 3px;
  height: 1px;
}

.star:nth-child(19):after {
  top: -0.5px;
  left: 0.5px;
  width: 1px;
  height: 3px;
}

.star:nth-child(20) {
  top: 79vh;
  left: 48vw;
}

.star:nth-child(20):before,
.star:nth-child(20):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -20s;
}

.star:nth-child(20):before {
  top: 2px;
  left: -2px;
  width: 12px;
  height: 4px;
}

.star:nth-child(20):after {
  top: -2px;
  left: 2px;
  width: 4px;
  height: 12px;
}

.star:nth-child(21) {
  top: 61vh;
  left: 90vw;
}

.star:nth-child(21):before,
.star:nth-child(21):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -21s;
}

.star:nth-child(21):before {
  top: 2px;
  left: -2px;
  width: 12px;
  height: 4px;
}

.star:nth-child(21):after {
  top: -2px;
  left: 2px;
  width: 4px;
  height: 12px;
}

.star:nth-child(22) {
  top: 83vh;
  left: 25vw;
}

.star:nth-child(22):before,
.star:nth-child(22):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -22s;
}

.star:nth-child(22):before {
  top: 0.5px;
  left: -0.5px;
  width: 3px;
  height: 1px;
}

.star:nth-child(22):after {
  top: -0.5px;
  left: 0.5px;
  width: 1px;
  height: 3px;
}

.star:nth-child(23) {
  top: 48vh;
  left: 80vw;
}

.star:nth-child(23):before,
.star:nth-child(23):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -23s;
}

.star:nth-child(23):before {
  top: 0.5px;
  left: -0.5px;
  width: 3px;
  height: 1px;
}

.star:nth-child(23):after {
  top: -0.5px;
  left: 0.5px;
  width: 1px;
  height: 3px;
}

.star:nth-child(24) {
  top: 27vh;
  left: 17vw;
}

.star:nth-child(24):before,
.star:nth-child(24):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -24s;
}

.star:nth-child(24):before {
  top: 1.5px;
  left: -1.5px;
  width: 9px;
  height: 3px;
}

.star:nth-child(24):after {
  top: -1.5px;
  left: 1.5px;
  width: 3px;
  height: 9px;
}

.star:nth-child(25) {
  top: 85vh;
  left: 15vw;
}

.star:nth-child(25):before,
.star:nth-child(25):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -25s;
}

.star:nth-child(25):before {
  top: 1.5px;
  left: -1.5px;
  width: 9px;
  height: 3px;
}

.star:nth-child(25):after {
  top: -1.5px;
  left: 1.5px;
  width: 3px;
  height: 9px;
}

.star:nth-child(26) {
  top: 86vh;
  left: 19vw;
}

.star:nth-child(26):before,
.star:nth-child(26):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -26s;
}

.star:nth-child(26):before {
  top: 0.5px;
  left: -0.5px;
  width: 3px;
  height: 1px;
}

.star:nth-child(26):after {
  top: -0.5px;
  left: 0.5px;
  width: 1px;
  height: 3px;
}

.star:nth-child(27) {
  top: 91vh;
  left: 4vw;
}

.star:nth-child(27):before,
.star:nth-child(27):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -27s;
}

.star:nth-child(27):before {
  top: 1px;
  left: -1px;
  width: 6px;
  height: 2px;
}

.star:nth-child(27):after {
  top: -1px;
  left: 1px;
  width: 2px;
  height: 6px;
}

.star:nth-child(28) {
  top: 59vh;
  left: 22vw;
}

.star:nth-child(28):before,
.star:nth-child(28):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -28s;
}

.star:nth-child(28):before {
  top: 2px;
  left: -2px;
  width: 12px;
  height: 4px;
}

.star:nth-child(28):after {
  top: -2px;
  left: 2px;
  width: 4px;
  height: 12px;
}

.star:nth-child(29) {
  top: 1vh;
  left: 98vw;
}

.star:nth-child(29):before,
.star:nth-child(29):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -29s;
}

.star:nth-child(29):before {
  top: 0.5px;
  left: -0.5px;
  width: 3px;
  height: 1px;
}

.star:nth-child(29):after {
  top: -0.5px;
  left: 0.5px;
  width: 1px;
  height: 3px;
}

.star:nth-child(30) {
  top: 72vh;
  left: 0vw;
}

.star:nth-child(30):before,
.star:nth-child(30):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -30s;
}

.star:nth-child(30):before {
  top: 2px;
  left: -2px;
  width: 12px;
  height: 4px;
}

.star:nth-child(30):after {
  top: -2px;
  left: 2px;
  width: 4px;
  height: 12px;
}

.star:nth-child(31) {
  top: 22vh;
  left: 99vw;
}

.star:nth-child(31):before,
.star:nth-child(31):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -31s;
}

.star:nth-child(31):before {
  top: 1.5px;
  left: -1.5px;
  width: 9px;
  height: 3px;
}

.star:nth-child(31):after {
  top: -1.5px;
  left: 1.5px;
  width: 3px;
  height: 9px;
}

.star:nth-child(32) {
  top: 31vh;
  left: 42vw;
}

.star:nth-child(32):before,
.star:nth-child(32):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -32s;
}

.star:nth-child(32):before {
  top: 0.5px;
  left: -0.5px;
  width: 3px;
  height: 1px;
}

.star:nth-child(32):after {
  top: -0.5px;
  left: 0.5px;
  width: 1px;
  height: 3px;
}

.star:nth-child(33) {
  top: 97vh;
  left: 21vw;
}

.star:nth-child(33):before,
.star:nth-child(33):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -33s;
}

.star:nth-child(33):before {
  top: 0.5px;
  left: -0.5px;
  width: 3px;
  height: 1px;
}

.star:nth-child(33):after {
  top: -0.5px;
  left: 0.5px;
  width: 1px;
  height: 3px;
}

.star:nth-child(34) {
  top: 3vh;
  left: 48vw;
}

.star:nth-child(34):before,
.star:nth-child(34):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -34s;
}

.star:nth-child(34):before {
  top: 0.5px;
  left: -0.5px;
  width: 3px;
  height: 1px;
}

.star:nth-child(34):after {
  top: -0.5px;
  left: 0.5px;
  width: 1px;
  height: 3px;
}

.star:nth-child(35) {
  top: 23vh;
  left: 31vw;
}

.star:nth-child(35):before,
.star:nth-child(35):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -35s;
}

.star:nth-child(35):before {
  top: 1px;
  left: -1px;
  width: 6px;
  height: 2px;
}

.star:nth-child(35):after {
  top: -1px;
  left: 1px;
  width: 2px;
  height: 6px;
}

.star:nth-child(36) {
  top: 98vh;
  left: 80vw;
}

.star:nth-child(36):before,
.star:nth-child(36):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -36s;
}

.star:nth-child(36):before {
  top: 2px;
  left: -2px;
  width: 12px;
  height: 4px;
}

.star:nth-child(36):after {
  top: -2px;
  left: 2px;
  width: 4px;
  height: 12px;
}

.star:nth-child(37) {
  top: 69vh;
  left: 63vw;
}

.star:nth-child(37):before,
.star:nth-child(37):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -37s;
}

.star:nth-child(37):before {
  top: 1.5px;
  left: -1.5px;
  width: 9px;
  height: 3px;
}

.star:nth-child(37):after {
  top: -1.5px;
  left: 1.5px;
  width: 3px;
  height: 9px;
}

.star:nth-child(38) {
  top: 51vh;
  left: 20vw;
}

.star:nth-child(38):before,
.star:nth-child(38):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -38s;
}

.star:nth-child(38):before {
  top: 2px;
  left: -2px;
  width: 12px;
  height: 4px;
}

.star:nth-child(38):after {
  top: -2px;
  left: 2px;
  width: 4px;
  height: 12px;
}

.star:nth-child(39) {
  top: 95vh;
  left: 19vw;
}

.star:nth-child(39):before,
.star:nth-child(39):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -39s;
}

.star:nth-child(39):before {
  top: 2px;
  left: -2px;
  width: 12px;
  height: 4px;
}

.star:nth-child(39):after {
  top: -2px;
  left: 2px;
  width: 4px;
  height: 12px;
}

.star:nth-child(40) {
  top: 25vh;
  left: 52vw;
}

.star:nth-child(40):before,
.star:nth-child(40):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -40s;
}

.star:nth-child(40):before {
  top: 0.5px;
  left: -0.5px;
  width: 3px;
  height: 1px;
}

.star:nth-child(40):after {
  top: -0.5px;
  left: 0.5px;
  width: 1px;
  height: 3px;
}

.star:nth-child(41) {
  top: 47vh;
  left: 23vw;
}

.star:nth-child(41):before,
.star:nth-child(41):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -41s;
}

.star:nth-child(41):before {
  top: 2px;
  left: -2px;
  width: 12px;
  height: 4px;
}

.star:nth-child(41):after {
  top: -2px;
  left: 2px;
  width: 4px;
  height: 12px;
}

.star:nth-child(42) {
  top: 53vh;
  left: 79vw;
}

.star:nth-child(42):before,
.star:nth-child(42):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -42s;
}

.star:nth-child(42):before {
  top: 1px;
  left: -1px;
  width: 6px;
  height: 2px;
}

.star:nth-child(42):after {
  top: -1px;
  left: 1px;
  width: 2px;
  height: 6px;
}

.star:nth-child(43) {
  top: 36vh;
  left: 48vw;
}

.star:nth-child(43):before,
.star:nth-child(43):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -43s;
}

.star:nth-child(43):before {
  top: 2px;
  left: -2px;
  width: 12px;
  height: 4px;
}

.star:nth-child(43):after {
  top: -2px;
  left: 2px;
  width: 4px;
  height: 12px;
}

.star:nth-child(44) {
  top: 91vh;
  left: 55vw;
}

.star:nth-child(44):before,
.star:nth-child(44):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -44s;
}

.star:nth-child(44):before {
  top: 1px;
  left: -1px;
  width: 6px;
  height: 2px;
}

.star:nth-child(44):after {
  top: -1px;
  left: 1px;
  width: 2px;
  height: 6px;
}

.star:nth-child(45) {
  top: 50vh;
  left: 19vw;
}

.star:nth-child(45):before,
.star:nth-child(45):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -45s;
}

.star:nth-child(45):before {
  top: 1.5px;
  left: -1.5px;
  width: 9px;
  height: 3px;
}

.star:nth-child(45):after {
  top: -1.5px;
  left: 1.5px;
  width: 3px;
  height: 9px;
}

.star:nth-child(46) {
  top: 23vh;
  left: 68vw;
}

.star:nth-child(46):before,
.star:nth-child(46):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -46s;
}

.star:nth-child(46):before {
  top: 0.5px;
  left: -0.5px;
  width: 3px;
  height: 1px;
}

.star:nth-child(46):after {
  top: -0.5px;
  left: 0.5px;
  width: 1px;
  height: 3px;
}

.star:nth-child(47) {
  top: 41vh;
  left: 76vw;
}

.star:nth-child(47):before,
.star:nth-child(47):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -47s;
}

.star:nth-child(47):before {
  top: 0.5px;
  left: -0.5px;
  width: 3px;
  height: 1px;
}

.star:nth-child(47):after {
  top: -0.5px;
  left: 0.5px;
  width: 1px;
  height: 3px;
}

.star:nth-child(48) {
  top: 61vh;
  left: 58vw;
}

.star:nth-child(48):before,
.star:nth-child(48):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -48s;
}

.star:nth-child(48):before {
  top: 1px;
  left: -1px;
  width: 6px;
  height: 2px;
}

.star:nth-child(48):after {
  top: -1px;
  left: 1px;
  width: 2px;
  height: 6px;
}

.star:nth-child(49) {
  top: 53vh;
  left: 64vw;
}

.star:nth-child(49):before,
.star:nth-child(49):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -49s;
}

.star:nth-child(49):before {
  top: 1.5px;
  left: -1.5px;
  width: 9px;
  height: 3px;
}

.star:nth-child(49):after {
  top: -1.5px;
  left: 1.5px;
  width: 3px;
  height: 9px;
}

.star:nth-child(50) {
  top: 65vh;
  left: 14vw;
}

.star:nth-child(50):before,
.star:nth-child(50):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -50s;
}

.star:nth-child(50):before {
  top: 1.5px;
  left: -1.5px;
  width: 9px;
  height: 3px;
}

.star:nth-child(50):after {
  top: -1.5px;
  left: 1.5px;
  width: 3px;
  height: 9px;
}

.star:nth-child(51) {
  top: 11vh;
  left: 49vw;
}

.star:nth-child(51):before,
.star:nth-child(51):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -51s;
}

.star:nth-child(51):before {
  top: 0.5px;
  left: -0.5px;
  width: 3px;
  height: 1px;
}

.star:nth-child(51):after {
  top: -0.5px;
  left: 0.5px;
  width: 1px;
  height: 3px;
}

.star:nth-child(52) {
  top: 69vh;
  left: 8vw;
}

.star:nth-child(52):before,
.star:nth-child(52):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -52s;
}

.star:nth-child(52):before {
  top: 2px;
  left: -2px;
  width: 12px;
  height: 4px;
}

.star:nth-child(52):after {
  top: -2px;
  left: 2px;
  width: 4px;
  height: 12px;
}

.star:nth-child(53) {
  top: 63vh;
  left: 11vw;
}

.star:nth-child(53):before,
.star:nth-child(53):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -53s;
}

.star:nth-child(53):before {
  top: 1.5px;
  left: -1.5px;
  width: 9px;
  height: 3px;
}

.star:nth-child(53):after {
  top: -1.5px;
  left: 1.5px;
  width: 3px;
  height: 9px;
}

.star:nth-child(54) {
  top: 57vh;
  left: 93vw;
}

.star:nth-child(54):before,
.star:nth-child(54):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -54s;
}

.star:nth-child(54):before {
  top: 1.5px;
  left: -1.5px;
  width: 9px;
  height: 3px;
}

.star:nth-child(54):after {
  top: -1.5px;
  left: 1.5px;
  width: 3px;
  height: 9px;
}

.star:nth-child(55) {
  top: 88vh;
  left: 66vw;
}

.star:nth-child(55):before,
.star:nth-child(55):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -55s;
}

.star:nth-child(55):before {
  top: 2px;
  left: -2px;
  width: 12px;
  height: 4px;
}

.star:nth-child(55):after {
  top: -2px;
  left: 2px;
  width: 4px;
  height: 12px;
}

.star:nth-child(56) {
  top: 5vh;
  left: 28vw;
}

.star:nth-child(56):before,
.star:nth-child(56):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -56s;
}

.star:nth-child(56):before {
  top: 0.5px;
  left: -0.5px;
  width: 3px;
  height: 1px;
}

.star:nth-child(56):after {
  top: -0.5px;
  left: 0.5px;
  width: 1px;
  height: 3px;
}

.star:nth-child(57) {
  top: 35vh;
  left: 83vw;
}

.star:nth-child(57):before,
.star:nth-child(57):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -57s;
}

.star:nth-child(57):before {
  top: 1px;
  left: -1px;
  width: 6px;
  height: 2px;
}

.star:nth-child(57):after {
  top: -1px;
  left: 1px;
  width: 2px;
  height: 6px;
}

.star:nth-child(58) {
  top: 58vh;
  left: 16vw;
}

.star:nth-child(58):before,
.star:nth-child(58):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -58s;
}

.star:nth-child(58):before {
  top: 1.5px;
  left: -1.5px;
  width: 9px;
  height: 3px;
}

.star:nth-child(58):after {
  top: -1.5px;
  left: 1.5px;
  width: 3px;
  height: 9px;
}

.star:nth-child(59) {
  top: 5vh;
  left: 53vw;
}

.star:nth-child(59):before,
.star:nth-child(59):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -59s;
}

.star:nth-child(59):before {
  top: 1.5px;
  left: -1.5px;
  width: 9px;
  height: 3px;
}

.star:nth-child(59):after {
  top: -1.5px;
  left: 1.5px;
  width: 3px;
  height: 9px;
}

.star:nth-child(60) {
  top: 50vh;
  left: 97vw;
}

.star:nth-child(60):before,
.star:nth-child(60):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -60s;
}

.star:nth-child(60):before {
  top: 1.5px;
  left: -1.5px;
  width: 9px;
  height: 3px;
}

.star:nth-child(60):after {
  top: -1.5px;
  left: 1.5px;
  width: 3px;
  height: 9px;
}

.star:nth-child(61) {
  top: 40vh;
  left: 63vw;
}

.star:nth-child(61):before,
.star:nth-child(61):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -61s;
}

.star:nth-child(61):before {
  top: 1.5px;
  left: -1.5px;
  width: 9px;
  height: 3px;
}

.star:nth-child(61):after {
  top: -1.5px;
  left: 1.5px;
  width: 3px;
  height: 9px;
}

.star:nth-child(62) {
  top: 37vh;
  left: 43vw;
}

.star:nth-child(62):before,
.star:nth-child(62):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -62s;
}

.star:nth-child(62):before {
  top: 0.5px;
  left: -0.5px;
  width: 3px;
  height: 1px;
}

.star:nth-child(62):after {
  top: -0.5px;
  left: 0.5px;
  width: 1px;
  height: 3px;
}

.star:nth-child(63) {
  top: 1vh;
  left: 43vw;
}

.star:nth-child(63):before,
.star:nth-child(63):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -63s;
}

.star:nth-child(63):before {
  top: 1px;
  left: -1px;
  width: 6px;
  height: 2px;
}

.star:nth-child(63):after {
  top: -1px;
  left: 1px;
  width: 2px;
  height: 6px;
}

.star:nth-child(64) {
  top: 12vh;
  left: 12vw;
}

.star:nth-child(64):before,
.star:nth-child(64):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -64s;
}

.star:nth-child(64):before {
  top: 2px;
  left: -2px;
  width: 12px;
  height: 4px;
}

.star:nth-child(64):after {
  top: -2px;
  left: 2px;
  width: 4px;
  height: 12px;
}

.star:nth-child(65) {
  top: 6vh;
  left: 37vw;
}

.star:nth-child(65):before,
.star:nth-child(65):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -65s;
}

.star:nth-child(65):before {
  top: 0.5px;
  left: -0.5px;
  width: 3px;
  height: 1px;
}

.star:nth-child(65):after {
  top: -0.5px;
  left: 0.5px;
  width: 1px;
  height: 3px;
}

.star:nth-child(66) {
  top: 7vh;
  left: 64vw;
}

.star:nth-child(66):before,
.star:nth-child(66):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -66s;
}

.star:nth-child(66):before {
  top: 1px;
  left: -1px;
  width: 6px;
  height: 2px;
}

.star:nth-child(66):after {
  top: -1px;
  left: 1px;
  width: 2px;
  height: 6px;
}

.star:nth-child(67) {
  top: 46vh;
  left: 78vw;
}

.star:nth-child(67):before,
.star:nth-child(67):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -67s;
}

.star:nth-child(67):before {
  top: 1.5px;
  left: -1.5px;
  width: 9px;
  height: 3px;
}

.star:nth-child(67):after {
  top: -1.5px;
  left: 1.5px;
  width: 3px;
  height: 9px;
}

.star:nth-child(68) {
  top: 75vh;
  left: 86vw;
}

.star:nth-child(68):before,
.star:nth-child(68):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -68s;
}

.star:nth-child(68):before {
  top: 2px;
  left: -2px;
  width: 12px;
  height: 4px;
}

.star:nth-child(68):after {
  top: -2px;
  left: 2px;
  width: 4px;
  height: 12px;
}

.star:nth-child(69) {
  top: 46vh;
  left: 74vw;
}

.star:nth-child(69):before,
.star:nth-child(69):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -69s;
}

.star:nth-child(69):before {
  top: 2px;
  left: -2px;
  width: 12px;
  height: 4px;
}

.star:nth-child(69):after {
  top: -2px;
  left: 2px;
  width: 4px;
  height: 12px;
}

.star:nth-child(70) {
  top: 64vh;
  left: 47vw;
}

.star:nth-child(70):before,
.star:nth-child(70):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -70s;
}

.star:nth-child(70):before {
  top: 1px;
  left: -1px;
  width: 6px;
  height: 2px;
}

.star:nth-child(70):after {
  top: -1px;
  left: 1px;
  width: 2px;
  height: 6px;
}

.star:nth-child(71) {
  top: 19vh;
  left: 87vw;
}

.star:nth-child(71):before,
.star:nth-child(71):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -71s;
}

.star:nth-child(71):before {
  top: 1px;
  left: -1px;
  width: 6px;
  height: 2px;
}

.star:nth-child(71):after {
  top: -1px;
  left: 1px;
  width: 2px;
  height: 6px;
}

.star:nth-child(72) {
  top: 28vh;
  left: 52vw;
}

.star:nth-child(72):before,
.star:nth-child(72):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -72s;
}

.star:nth-child(72):before {
  top: 1.5px;
  left: -1.5px;
  width: 9px;
  height: 3px;
}

.star:nth-child(72):after {
  top: -1.5px;
  left: 1.5px;
  width: 3px;
  height: 9px;
}

.star:nth-child(73) {
  top: 54vh;
  left: 18vw;
}

.star:nth-child(73):before,
.star:nth-child(73):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -73s;
}

.star:nth-child(73):before {
  top: 1px;
  left: -1px;
  width: 6px;
  height: 2px;
}

.star:nth-child(73):after {
  top: -1px;
  left: 1px;
  width: 2px;
  height: 6px;
}

.star:nth-child(74) {
  top: 20vh;
  left: 95vw;
}

.star:nth-child(74):before,
.star:nth-child(74):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -74s;
}

.star:nth-child(74):before {
  top: 1.5px;
  left: -1.5px;
  width: 9px;
  height: 3px;
}

.star:nth-child(74):after {
  top: -1.5px;
  left: 1.5px;
  width: 3px;
  height: 9px;
}

.star:nth-child(75) {
  top: 59vh;
  left: 50vw;
}

.star:nth-child(75):before,
.star:nth-child(75):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -75s;
}

.star:nth-child(75):before {
  top: 1px;
  left: -1px;
  width: 6px;
  height: 2px;
}

.star:nth-child(75):after {
  top: -1px;
  left: 1px;
  width: 2px;
  height: 6px;
}

.star:nth-child(76) {
  top: 12vh;
  left: 33vw;
}

.star:nth-child(76):before,
.star:nth-child(76):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -76s;
}

.star:nth-child(76):before {
  top: 1.5px;
  left: -1.5px;
  width: 9px;
  height: 3px;
}

.star:nth-child(76):after {
  top: -1.5px;
  left: 1.5px;
  width: 3px;
  height: 9px;
}

.star:nth-child(77) {
  top: 70vh;
  left: 5vw;
}

.star:nth-child(77):before,
.star:nth-child(77):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -77s;
}

.star:nth-child(77):before {
  top: 2px;
  left: -2px;
  width: 12px;
  height: 4px;
}

.star:nth-child(77):after {
  top: -2px;
  left: 2px;
  width: 4px;
  height: 12px;
}

.star:nth-child(78) {
  top: 48vh;
  left: 93vw;
}

.star:nth-child(78):before,
.star:nth-child(78):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -78s;
}

.star:nth-child(78):before {
  top: 2px;
  left: -2px;
  width: 12px;
  height: 4px;
}

.star:nth-child(78):after {
  top: -2px;
  left: 2px;
  width: 4px;
  height: 12px;
}

.star:nth-child(79) {
  top: 77vh;
  left: 40vw;
}

.star:nth-child(79):before,
.star:nth-child(79):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -79s;
}

.star:nth-child(79):before {
  top: 1px;
  left: -1px;
  width: 6px;
  height: 2px;
}

.star:nth-child(79):after {
  top: -1px;
  left: 1px;
  width: 2px;
  height: 6px;
}

.star:nth-child(80) {
  top: 41vh;
  left: 39vw;
}

.star:nth-child(80):before,
.star:nth-child(80):after {
  position: absolute;
  content: '';
  background-color: rgb(var(--v-theme-text));
  border-radius: 10px;
  animation: blink 1.5s infinite;
  animation-delay: -80s;
}

.star:nth-child(80):before {
  top: 1.5px;
  left: -1.5px;
  width: 9px;
  height: 3px;
}

.star:nth-child(80):after {
  top: -1.5px;
  left: 1.5px;
  width: 3px;
  height: 9px;
}
</style>