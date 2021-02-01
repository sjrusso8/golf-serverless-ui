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
import Header from "@/components/layouts/Header";
import Sidebar from "@/components/layouts/Sidebar";
import MainApp from "@/components/layouts/MainApp";
import Footer from "@/components/layouts/Footer";

export default {
  components: {
    Header,
    Sidebar,
    MainApp,
    Footer
  }
};
</script>
