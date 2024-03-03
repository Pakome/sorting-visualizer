<script lang="ts" setup>
import { onMounted, ref } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { InformationCircleIcon } from "@heroicons/vue/24/outline";

import { SortingAlgorithm } from "../models";

defineProps<{
  algorithm: SortingAlgorithm;
}>();
defineEmits(["close"]);
const open = ref(false);

onMounted(() => {
  open.value = true;
});
</script>

<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="open = false">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6"
            >
              <div>
                <div
                  class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600"
                >
                  <InformationCircleIcon
                    class="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <div class="mt-3 text-center sm:mt-5">
                  <DialogTitle
                    as="h3"
                    class="text-base font-semibold leading-6 text-gray-900"
                  >
                    <span class="text-indigo-600 font-semibold">{{
                      algorithm.label
                    }}</span>
                    performance specs
                  </DialogTitle>
                  <div class="mt-4 text-left">

                    <p class="text-sm text-gray-500">
                      <span class="font-bold">Worst: </span>
                      <span class="italic">{{
                        algorithm.complexity.worst
                      }}</span>
                    </p>

                    <p class="text-sm text-gray-500">
                      <span class="font-bold">Best: </span>
                      <span class="italic">{{
                        algorithm.complexity.best
                      }}</span>
                    </p>
                    <p class="text-sm text-gray-500">
                      <span class="font-bold">Average: </span>
                      <span class="italic">{{
                        algorithm.complexity.average
                      }}</span>
                    </p>

                    <p class="text-sm text-gray-500 mt-3">
                      {{ algorithm.description }}
                    </p>

                    <div class="mt-4 flex">
                      <a
                        :href="algorithm.wikipediaLink"
                        target="_blank"
                        class="text-sm font-semibold leading-6 text-indigo-600"
                      >
                        See article on Wikipedia
                        <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-5 sm:mt-6">
                <button
                  type="button"
                  class="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  @click="$emit('close')"
                >
                  Go back to dashboard
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
