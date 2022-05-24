<script setup>
import { useStore } from "@/stores/main";
import { useKeypress } from "vue3-keypress";
import { Piano } from "@tonejs/piano";

const keys = ["Db", "Eb", "Gb", "Ab", "Bb"];
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
  switch (event.keyCode) {
    case 87:
      pressKey(`Db${store.settings.octave}`);
      break;
    case 69:
      pressKey(`Eb${store.settings.octave}`);
      break;
    case 84:
      pressKey(`Gb${store.settings.octave}`);
      break;
    case 89:
      pressKey(`Ab${store.settings.octave}`);
      break;
    case 85:
      pressKey(`Bb${store.settings.octave}`);
      break;
    default:
      break;
  }
};

const buttonClear = ({ event }) => {
  switch (event.keyCode) {
    case 87:
      releaseKey(`Db${store.settings.octave}`);
      break;
    case 69:
      releaseKey(`Eb${store.settings.octave}`);
      break;
    case 84:
      releaseKey(`Gb${store.settings.octave}`);
      break;
    case 89:
      releaseKey(`Ab${store.settings.octave}`);
      break;
    case 85:
      releaseKey(`Bb${store.settings.octave}`);
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
    <div class="flex h-[105px] flex-col w-[15px] justify-end items-center relative" @click="mousePress('Bb0')">
      <p class="absolute bottom-2 text-xs text-white">Bb0</p>
      <img
        src="@/assets/black-button-pressed.png"
        v-show="store.keyPressed.indexOf('Bb0') !== -1"
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
