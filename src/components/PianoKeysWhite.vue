<script setup>
import { useStore } from "@/stores/main";
import { useKeypress } from "vue3-keypress";

const keys = ["C", "D", "E", "F", "G", "A", "B"];
const store = useStore();

const buttonPressed = ({ event }) => {
  console.log(event.keyCode);
  switch (event.keyCode) {
    case 65:
      if (store.keyPressed.indexOf(`C${store.settings.octave}`) === -1) {
        store.keyPressed.push(`C${store.settings.octave}`);
      }
      break;
    case 83:
      if (store.keyPressed.indexOf(`D${store.settings.octave}`) === -1) {
        store.keyPressed.push(`D${store.settings.octave}`);
      }
      break;
    case 68:
      if (store.keyPressed.indexOf(`E${store.settings.octave}`) === -1) {
        store.keyPressed.push(`E${store.settings.octave}`);
      }
      break;
    case 70:
      if (store.keyPressed.indexOf(`F${store.settings.octave}`) === -1) {
        store.keyPressed.push(`F${store.settings.octave}`);
      }
      break;
    case 71:
      if (store.keyPressed.indexOf(`G${store.settings.octave}`) === -1) {
        store.keyPressed.push(`G${store.settings.octave}`);
      }
      break;
    case 72:
      if (store.keyPressed.indexOf(`A${store.settings.octave}`) === -1) {
        store.keyPressed.push(`A${store.settings.octave}`);
      }
      break;
    case 74:
      if (store.keyPressed.indexOf(`B${store.settings.octave}`) === -1) {
        store.keyPressed.push(`B${store.settings.octave}`);
      }
      break;
    default:
      break;
  }
};

const buttonClear = ({ event }) => {
  switch (event.keyCode) {
    case 65:
      store.keyPressed.splice(store.keyPressed.indexOf(`C${store.settings.octave}`), 1);
      break;
    case 83:
      store.keyPressed.splice(store.keyPressed.indexOf(`D${store.settings.octave}`), 1);
      break;
    case 68:
      store.keyPressed.splice(store.keyPressed.indexOf(`E${store.settings.octave}`), 1);
      break;
    case 70:
      store.keyPressed.splice(store.keyPressed.indexOf(`F${store.settings.octave}`), 1);
      break;
    case 71:
      store.keyPressed.splice(store.keyPressed.indexOf(`G${store.settings.octave}`), 1);
      break;
    case 72:
      store.keyPressed.splice(store.keyPressed.indexOf(`A${store.settings.octave}`), 1);
      break;
    case 74:
      store.keyPressed.splice(store.keyPressed.indexOf(`B${store.settings.octave}`), 1);
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
  if (store.keyPressed.indexOf(val)) {
    store.keyPressed.push(val);
  }
  setTimeout(() => store.keyPressed.splice(store.keyPressed.indexOf(val), 1), 150);
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
