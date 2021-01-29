<template>
  <div>
    <div
      :class="
        `modal ${!open &&
          'opacity-0 pointer-events-none'} z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`
      "
    >
      <div
        class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
      >
      </div>

      <div
        class="modal-container w-3/4 bg-white max-w-2xl mx-auto rounded shadow-lg z-50 overflow-y-auto"
      >
        <div
          class="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50"
        >
          <svg
            class="fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path
              d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
            />
          </svg>
          <span class="text-sm">(Esc)</span>
        </div>

        <!-- Add margin if you want to see some of the overlay behind the modal-->
        <div class="py-4 text-left px-6">
          <!--Title-->
          <div class="flex justify-between items-center pb-3">
            <p class="text-2xl font-bold">{{ title }}</p>
            <div class="modal-close cursor-pointer z-50" @click="$emit('close-modal')">
              <svg
                class="fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path
                  d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                />
              </svg>
            </div>
          </div>

          <!--Body-->
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-center">
                <p
                  class="block tracking-wide text-gray-700 text-sm font-semibold mb-2"
                >
                  Sorry! For the demo I limited API POST calls
                </p>
              </div>
            </div>

          <!--Footer-->
          <div class="flex justify-end">
            <button
              @click="$emit('close-modal')"
              class="px-6 py-3 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["open", "title"],
  emits: ["close-modal"]
};
</script>

<style>
.modal {
  transition: opacity 0.25s ease;
}
</style>