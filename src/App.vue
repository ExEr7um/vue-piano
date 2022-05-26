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
    <h2 class="text-xl font-medium mb-8">Кнопки клавиатуры:</h2>
    <div class="flex gap-x-8">
      <div class="flex flex-col gap-y-4">
        <div class="flex items-center gap-x-2">
          <div class="flex items-center justify-center bg-zinc-100 rounded-md border border-zinc-300 w-7 h-7">1</div>
          <p>Включить</p>
        </div>
        <div class="flex items-center gap-x-2">
          <div class="flex items-center justify-center bg-zinc-100 rounded-md border border-zinc-300 w-7 h-7">2</div>
          <div class="flex items-center justify-center bg-zinc-100 rounded-md border border-zinc-300 w-7 h-7">3</div>
          <p>Громкость</p>
        </div>
        <div class="flex items-center gap-x-2">
          <div class="flex items-center justify-center bg-zinc-100 rounded-md border border-zinc-300 w-7 h-7">4</div>
          <div class="flex items-center justify-center bg-zinc-100 rounded-md border border-zinc-300 w-7 h-7">5</div>
          <div class="flex items-center justify-center bg-zinc-100 rounded-md border border-zinc-300 w-7 h-7">6</div>
          <p>Выбор режима</p>
        </div>
        <div class="flex items-center gap-x-2">
          <div class="flex items-center justify-center bg-zinc-100 rounded-md border border-zinc-300 w-7 h-7">7</div>
          <div class="flex items-center justify-center bg-zinc-100 rounded-md border border-zinc-300 w-7 h-7">8</div>
          <p>Смена октавы</p>
        </div>
      </div>
      <div>
        <div class="flex flex-col gap-y-4">
          <div class="flex items-center gap-x-2">
            <div class="flex items-center justify-center bg-zinc-100 rounded-md border border-zinc-300 w-7 h-7">A</div>
            <div class="flex items-center justify-center bg-zinc-100 rounded-md border border-zinc-300 w-7 h-7">S</div>
            <div class="flex items-center justify-center bg-zinc-100 rounded-md border border-zinc-300 w-7 h-7">D</div>
            <div class="flex items-center justify-center bg-zinc-100 rounded-md border border-zinc-300 w-7 h-7">F</div>
            <div class="flex items-center justify-center bg-zinc-100 rounded-md border border-zinc-300 w-7 h-7">G</div>
            <div class="flex items-center justify-center bg-zinc-100 rounded-md border border-zinc-300 w-7 h-7">H</div>
            <div class="flex items-center justify-center bg-zinc-100 rounded-md border border-zinc-300 w-7 h-7">J</div>
            <p>Белые клавиши</p>
          </div>
          <div class="flex items-center gap-x-2">
            <div class="flex items-center justify-center bg-zinc-100 rounded-md border border-zinc-300 w-7 h-7">W</div>
            <div class="flex items-center justify-center bg-zinc-100 rounded-md border border-zinc-300 w-7 h-7">E</div>
            <div class="flex items-center justify-center bg-zinc-100 rounded-md border border-zinc-300 w-7 h-7">T</div>
            <div class="flex items-center justify-center bg-zinc-100 rounded-md border border-zinc-300 w-7 h-7">Y</div>
            <div class="flex items-center justify-center bg-zinc-100 rounded-md border border-zinc-300 w-7 h-7">U</div>
            <p>Черные клавиши</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import "./assets/css/main.css";
</style>
