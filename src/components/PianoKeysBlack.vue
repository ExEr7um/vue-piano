<script setup>
import { useStore } from "@/stores/main";
import { useKeypress } from "vue3-keypress";

const keys = ["D#", "E#", "G#", "A#", "B#"];
const store = useStore();

const buttonPressed = ({ event }) => {
  switch (event.keyCode) {
    case 87:
      if (store.keyPressed.indexOf(`D#${store.settings.octave}`) === -1) {
        store.keyPressed.push(`D#${store.settings.octave}`);
      }
      break;
    case 69:
      if (store.keyPressed.indexOf(`E#${store.settings.octave}`) === -1) {
        store.keyPressed.push(`E#${store.settings.octave}`);
      }
      break;
    case 84:
      if (store.keyPressed.indexOf(`G#${store.settings.octave}`) === -1) {
        store.keyPressed.push(`G#${store.settings.octave}`);
      }
      break;
    case 89:
      if (store.keyPressed.indexOf(`A#${store.settings.octave}`) === -1) {
        store.keyPressed.push(`A#${store.settings.octave}`);
      }
      break;
    case 85:
      if (store.keyPressed.indexOf(`B#${store.settings.octave}`) === -1) {
        store.keyPressed.push(`B#${store.settings.octave}`);
      }
      break;
    default:
      break;
  }
};

const buttonClear = ({ event }) => {
  switch (event.keyCode) {
    case 87:
      store.keyPressed.splice(store.keyPressed.indexOf(`D#${store.settings.octave}`), 1);
      break;
    case 69:
      store.keyPressed.splice(store.keyPressed.indexOf(`E#${store.settings.octave}`), 1);
      break;
    case 84:
      store.keyPressed.splice(store.keyPressed.indexOf(`G#${store.settings.octave}`), 1);
      break;
    case 89:
      store.keyPressed.splice(store.keyPressed.indexOf(`A#${store.settings.octave}`), 1);
      break;
    case 85:
      store.keyPressed.splice(store.keyPressed.indexOf(`B#${store.settings.octave}`), 1);
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
    <div class="flex h-[105px] flex-col w-[15px] justify-end items-center relative" @click="mousePress('B#0')">
      <p class="absolute bottom-2 text-xs text-white">B#0</p>
      <img
        src="@/assets/black-button-pressed.png"
        v-show="store.keyPressed.indexOf('B#0') !== -1"
        alt=""
        class="w-[15px] h-[105px]"
      />
    </div>
    <div v-for="octave in 7" :key="octave" class="flex gap-x-[14px] ml-[29px] relative">
      <div
        v-for="(key, index) in keys"
        :key="key"
        class="h-[105px] w-[15px] flex flex-col justify-end items-center relative"
        :class="{ 'ml-[15px]': index === 2 }"
        @click="mousePress(key + octave)"
      >
        <p class="absolute bottom-2 text-xs text-white">{{ key + octave }}</p>
        <img
          src="@/assets/black-button-pressed.png"
          alt=""
          class="w-[15px]"
          v-show="store.settings.enabled && store.keyPressed.indexOf(key + octave) !== -1"
        />
      </div>
    </div>
  </div>
</template>
