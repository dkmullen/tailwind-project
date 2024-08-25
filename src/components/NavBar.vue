<template>
  <Disclosure as="nav" class="bg-white-800" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
            <img
              class="h-8 w-auto cursor-pointer"
              src="@/assets/bluematrix.png"
              alt="My Blue Matrix"
              @click="goTo('home')"
            />
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <div
                v-for="item in navigation"
                :key="item.name"
                @click="goTo(item.href)"
                :class="[
                  current === item.href ? 'text-blue-700' : 'text-gray-700 hover:text-blue-700',
                  'rounded-md px-3 py-2 text-md font-medium'
                ]"
                :aria-current="item.current ? 'page' : undefined"
                class="cursor-pointer"
              >
                {{ item.name }}
              </div>
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <button type="button" class="relative rounded-full p-1 text-gray-400 hover:text-blue-700">
            <span class="absolute -inset-1.5" />
            <span class="sr-only">Search</span>
            <MagnifyingGlassIcon class="h-6 w-6" aria-hidden="true" />
          </button>

          <button type="button" class="rounded-full px-4 py-2">sign in</button>
          <button type="button" class="rounded-full px-4 py-2 bg-blue-700 text-white">
            subscribe
          </button>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="[
            current === item.href
              ? 'bg-gray-900 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'block rounded-md px-3 py-2 text-base font-medium'
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</DisclosureButton
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'

const router = useRouter()
const current = ref()

const navigation = [
  { name: 'team', href: 'team' },
  { name: 'projects', href: 'projects' },
  { name: 'calendar', href: 'calendar' }
]

function goTo(href) {
  current.value = href
  router.push({ name: href })
}

onMounted(() => {
  setTimeout(() => {
    current.value = router.currentRoute.value.name
  }, 300)
})
</script>
