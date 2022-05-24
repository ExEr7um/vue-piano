<script setup>
import { useStore } from "@/stores/main";
import { useKeypress } from "vue3-keypress";
import { Piano } from "@tonejs/piano";

const keys = ["C", "D", "E", "F", "G", "A", "B"];
const store = useStore();

const piano = new Piano();
piano.load();
piano.toDestination();

function pressKey(key) {
  if (store.keyPressed.indexOf(key) === -1) {
    store.keyPressed.push(key);
    piano.keyDown({ note: key });
  }
}

function releaseKey(key) {
  store.keyPressed.splice(store.keyPressed.indexOf(key), 1);
  piano.keyUp({ note: key });
}

const buttonPressed = ({ event }) => {
  if (store.settings.enabled) {
    switch (event.keyCode) {
      case 65:
        pressKey(`C${store.settings.octave}`);
        break;
      case 83:
        pressKey(`D${store.settings.octave}`);
        break;
      case 68:
        pressKey(`E${store.settings.octave}`);
        break;
      case 70:
        pressKey(`F${store.settings.octave}`);
        break;
      case 71:
        pressKey(`G${store.settings.octave}`);
        break;
      case 72:
        pressKey(`A${store.settings.octave}`);
        break;
      case 74:
        pressKey(`B${store.settings.octave}`);
        break;
      default:
        break;
    }
  }
};

const buttonClear = ({ event }) => {
  switch (event.keyCode) {
    case 65:
      releaseKey(`C${store.settings.octave}`);
      break;
    case 83:
      releaseKey(`D${store.settings.octave}`);
      break;
    case 68:
      releaseKey(`E${store.settings.octave}`);
      break;
    case 70:
      releaseKey(`F${store.settings.octave}`);
      break;
    case 71:
      releaseKey(`G${store.settings.octave}`);
      break;
    case 72:
      releaseKey(`A${store.settings.octave}`);
      break;
    case 74:
      releaseKey(`B${store.settings.octave}`);
      break;
    default:
      break;
  }
};

useKeypress({
  keyEvent: "keydown",
  keyBinds: [],
  onAnyKey: buttonPressed,
});

useKeypress({
  keyEvent: "keyup",
  keyBinds: [],
  onAnyKey: buttonClear,
});

function mousePress(val) {
  pressKey(val);
  setTimeout(() => releaseKey(val), 150);
}
</script>

<template>
  <div class="flex">
    <div
      v-for="key in ['A', 'B']"
      :key="key"
      class="h-[159px] flex w-[25px] flex-col justify-end items-center relative"
      @click="mousePress(key + 0)"
    >
      <p class="absolute bottom-2 text-xs text-gray-600">{{ key + 0 }}</p>
      <img
        v-show="store.settings.enabled && store.keyPressed.indexOf(key + 0) !== -1"
        src="@/assets/white-button-pressed.png"
        alt=""
        class="w-[25px]"
      />
    </div>
    <div v-for="octave in 7" :key="octave" class="flex relative">
      <div
        v-for="key in keys"
        :key="key"
        class="h-[159px] w-[25px] flex flex-col justify-end items-center relative"
        @click="mousePress(key + octave)"
      >
        <p class="absolute bottom-2 text-xs text-gray-600">{{ key + octave }}</p>
        <img
          v-show="store.settings.enabled && store.keyPressed.indexOf(key + octave) !== -1"
          src="@/assets/white-button-pressed.png"
          alt=""
          class="w-[25px]"
        />
      </div>
      <div
        v-if="store.settings.octave === octave"
        v-show="store.settings.enabled && store.settings.enabled"
        class="absolute left-0 -bottom-10 w-full h-2 bg-lime-400"
      ></div>
    </div>
    <div class="h-[159px] flex flex-col w-[25px] justify-end items-center relative" @click="mousePress('8C')">
      <p class="absolute bottom-2 text-xs text-gray-600">8C</p>
      <img
        v-show="store.keyPressed.indexOf('8C') !== -1"
        src="@/assets/white-button-pressed.png"
        alt=""
        class="w-[25px]"
      />
    </div>
  </div>
</template>
