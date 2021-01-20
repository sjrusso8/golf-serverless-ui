<template>
  <!-- <keep-alive :include="cachedViews"> -->
  <router-view :key="$route.fullPath" />
  <!-- </keep-alive> -->
</template>
