import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "main",
  state: () => ({
    settings: {
      enabbled: false,
      volume: 1,
      sound: "piano",
      octave: 1,
    },
    keyPressed: [],
  }),
});
