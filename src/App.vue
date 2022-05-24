<script setup>
import PianoSettings from "./components/PianoSettings.vue";
import PianoKeysWhite from "./components/PianoKeysWhite.vue";
import PianoKeysBlack from "./components/PianoKeysBlack.vue";
</script>

<template>
  <div class="relative w-max">
    <PianoSettings class="absolute left-[234px] top-[91px]" />
    <PianoKeysWhite class="absolute left-[102px] top-[142px]" />
    <PianoKeysBlack class="absolute left-[123px] top-[142px]" />
    <img src="./assets/piano-bg.png" class="-z-10 w-[1500px]" />
  </div>
  <div class="flex flex-col mt-16 pl-8">
    <h2 class="text-lg font-medium mb-8">Кнопки клавиатуры:</h2>
    <div class="flex gap-x-8">
      <div>
        <p>1 — Включить</p>
        <p>2-3 — Громкость</p>
        <p>4-6 — Выбор режима</p>
        <p>7-8 — Смена октавы</p>
      </div>
      <div>
        <p>A, S, D, F, G, H, J — Белые клавиши</p>
        <p>W, E, T, Y, U — Черные клавиши</p>
      </div>
    </div>
  </div>
</template>

<style>
@import "./assets/css/main.css";
</style>
