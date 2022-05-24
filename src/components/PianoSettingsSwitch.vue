<script setup>
import { useStore } from "@/stores/main";
import { useKeypress } from "vue3-keypress";

const props = defineProps(["setting", "keycode", "value"]);
const store = useStore();

const buttonPressed = ({ keyCode }) => {
  store.settings[props.setting] = props.value;
};

useKeypress({
  keyEvent: "keypress",
  keyBinds: [
    {
      keyCode: props.keycode,
      success: buttonPressed,
    },
  ],
});
</script>

<template>
  <div @click="store.settings[props.setting] = props.value">
    <img
      class="transition duration-100 scale-50"
      :class="{ 'opacity-0': store.settings[props.setting] !== props.value }"
      src="@/assets/piano-settings/button-active.png"
    />
  </div>
</template>
