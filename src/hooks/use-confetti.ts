import { nextTick, ref } from "vue";

const showConfetti = ref(false);

export function useConfetti() {

  async function triggerConfetti() {
    showConfetti.value = false;
    await nextTick();
    showConfetti.value = true;
  }

  return {
    showConfetti,
    triggerConfetti,
  };
}
