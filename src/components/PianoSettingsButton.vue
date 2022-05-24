<script setup>
import { useStore } from "@/stores/main";
import { ref } from "vue";
import { useKeypress } from "vue3-keypress";

let active = ref(false);

const props = defineProps(["setting", "keycode", "up", "min", "max"]);
const store = useStore();

function buttonPress() {
  active.value = true;
  props.up
    ? store.settings[props.setting] < props.max && (store.settings[props.setting] += 1)
    : store.settings[props.setting] > props.min && (store.settings[props.setting] -= 1);
  setTimeout(() => (active.value = false), 150);
}

const buttonDown = ({ keyCode }) => {
  active.value = true;
};

const buttonUp = ({ keyCode }) => {
  buttonPress();
};

useKeypress({
  keyEvent: "keydown",
  keyBinds: [
    {
      keyCode: props.keycode,
      success: buttonDown,
    },
  ],
});

useKeypress({
  keyEvent: "keyup",
  keyBinds: [
    {
      keyCode: props.keycode,
      success: buttonUp,
    },
  ],
});
</script>

<template>
  <div @click="buttonPress()">
    <img
      class="transition duration-100 scale-50"
      :class="{ 'opacity-0': !active }"
      src="@/assets/piano-settings/button-active.png"
    />
  </div>
</template>
