<script lang="ts" setup>
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import { ref } from "vue";

import {
  RadioGroup,
  RadioGroupDescription,
  RadioGroupLabel,
  RadioGroupOption,
} from "@headlessui/vue";
import { useShuffle, useSidePanel } from "../hooks";
import { ShuffleType } from "../models";

const settings = [
  {
    id: ShuffleType.Random,
    name: "Random",
    description: "The array will be shuffled with the Fisher-Yates shuffle",
  },
  {
    id: ShuffleType.AlmostSorted,
    name: "Almost sorted",
    description: "Only the last 20% of the array will be shuffled",
  },
  {
    id: ShuffleType.Inversed,
    name: "Inversed",
    description: "The array will be sorted in descending order",
  },
];

const { isOpen, closeSidePanel } = useSidePanel();
const { selectedShuffleType } = useShuffle();
const selected = ref(settings[0]);
</script>

<template>
  <TransitionRoot as="template" :show="isOpen">
    <Dialog as="div" class="relative z-10" @close="closeSidePanel()">
      <TransitionChild
        as="template"
        enter="ease-in-out duration-500"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in-out duration-500"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"
          >
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <DialogPanel
                class="pointer-events-auto relative w-screen max-w-md"
              >
                <TransitionChild
                  as="template"
                  enter="ease-in-out duration-500"
                  enter-from="opacity-0"
                  enter-to="opacity-100"
                  leave="ease-in-out duration-500"
                  leave-from="opacity-100"
                  leave-to="opacity-0"
                >
                  <div
                    class="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4"
                  >
                    <button
                      type="button"
                      class="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                      @click="closeSidePanel"
                    >
                      <span class="absolute -inset-2.5" />
                      <span class="sr-only">Close panel</span>
                      <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </TransitionChild>
                <div
                  class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl"
                >
                  <div class="px-4 sm:px-6">
                    <DialogTitle
                      class="text-base font-semibold leading-6 text-gray-900"
                    >
                      Selected shuffle
                    </DialogTitle>
                  </div>
                  <div class="relative mt-6 flex-1 px-4 sm:px-6">
                    <!-- Your content -->
                    <RadioGroup v-model="selectedShuffleType">
                      <RadioGroupLabel class="sr-only"
                        >Privacy setting</RadioGroupLabel
                      >
                      <div class="-space-y-px rounded-md bg-white">
                        <RadioGroupOption
                          as="template"
                          v-for="(setting, settingIdx) in settings"
                          :key="setting.name"
                          :value="setting.id"
                          v-slot="{ checked, active }"
                        >
                          <div
                            :class="[
                              settingIdx === 0
                                ? 'rounded-tl-md rounded-tr-md'
                                : '',
                              settingIdx === settings.length - 1
                                ? 'rounded-bl-md rounded-br-md'
                                : '',
                              checked
                                ? 'z-10 border-indigo-200 bg-indigo-50'
                                : 'border-gray-200',
                              'relative flex cursor-pointer border p-4 focus:outline-none',
                            ]"
                          >
                            <span
                              :class="[
                                checked
                                  ? 'bg-indigo-600 border-transparent'
                                  : 'bg-white border-gray-300',
                                active
                                  ? 'ring-2 ring-offset-2 ring-indigo-600'
                                  : '',
                                'mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded-full border flex items-center justify-center',
                              ]"
                              aria-hidden="true"
                            >
                              <span class="rounded-full bg-white w-1.5 h-1.5" />
                            </span>
                            <span class="ml-3 flex flex-col">
                              <RadioGroupLabel
                                as="span"
                                :class="[
                                  checked ? 'text-indigo-900' : 'text-gray-900',
                                  'block text-sm font-medium',
                                ]"
                                >{{ setting.name }}</RadioGroupLabel
                              >
                              <RadioGroupDescription
                                as="span"
                                :class="[
                                  checked ? 'text-indigo-700' : 'text-gray-500',
                                  'block text-sm',
                                ]"
                                >{{
                                  setting.description
                                }}</RadioGroupDescription
                              >
                            </span>
                          </div>
                        </RadioGroupOption>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
