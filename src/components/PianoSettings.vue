<script setup>
import { useStore } from "@/stores/main";

import PianoSettingsToggle from "./PianoSettingsToggle.vue";
import PianoSettingsButton from "./PianoSettingsButton.vue";
import PianoSettingsSwitch from "./PianoSettingsSwitch.vue";

const store = useStore();
</script>

<template>
  <div class="flex">
    <PianoSettingsToggle setting="enabled" :keycode="49" />
    <PianoSettingsButton class="ml-[11px]" setting="volume" :keycode="50" min="0" v-show="store.settings.enabled" />
    <PianoSettingsButton
      class="ml-[6px]"
      setting="volume"
      :keycode="51"
      :up="true"
      max="5"
      v-show="store.settings.enabled"
    />
    <div class="absolute top-[-8px] left-[14px] w-max grid grid-cols-5 gap-x-0.5" v-show="store.settings.enabled">
      <div v-for="vol in 5" :key="vol">
        <img v-if="vol <= store.settings.volume" src="../assets/piano-settings/volume-fill.png" class="w-1" />
        <img v-else src="../assets/piano-settings/volume.png" class="w-1" />
      </div>
    </div>
    <PianoSettingsSwitch
      setting="sound"
      :keycode="52"
      value="piano"
      class="ml-[13px]"
      v-show="store.settings.enabled"
    />
    <PianoSettingsSwitch
      setting="sound"
      :keycode="53"
      value="e-piano"
      class="ml-[6px]"
      v-show="store.settings.enabled"
    />
    <PianoSettingsSwitch setting="sound" :keycode="54" value="other" class="ml-[6px]" v-show="store.settings.enabled" />
    <PianoSettingsButton class="ml-[11px]" setting="octave" :keycode="55" min="1" v-show="store.settings.enabled" />
    <PianoSettingsButton
      class="ml-[6px]"
      setting="octave"
      :keycode="56"
      :up="true"
      max="7"
      v-show="store.settings.enabled"
    />
  </div>
</template>
