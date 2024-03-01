import { ref } from "vue";

const isOpen = ref(false);

export function useSidePanel() {
  function openSidePanel() {
    isOpen.value = true;
  }

  function closeSidePanel() {
    isOpen.value = false;
  }

  return {
    isOpen,
    openSidePanel,
    closeSidePanel,
  };
}
