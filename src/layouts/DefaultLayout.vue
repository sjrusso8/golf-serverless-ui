<template>
  <div class="flex h-screen bg-gray-200 font-roboto">
    <Sidebar /> 

    <div class="flex-1 flex flex-col overflow-hidden">
      <Header /> 
        <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div class="w-full">
            <MainApp />
          </div>
        </main>
      <Footer /> 
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
import MainApp from "./components/MainApp.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Header,
    Sidebar,
    MainApp,
    Footer
  }
};
</script>
