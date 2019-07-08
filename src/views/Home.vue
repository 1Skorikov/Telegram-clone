<template>
  <div class="home">
    <page-header>
      <template #left-icon>
        <i class="fas fa-bars"></i>
      </template>

      <template #content>
        Telegram
      </template>

      <template #right-icon>
        <i class="fas fa-search"></i>
      </template>
    </page-header>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";

export default {
  name: "home",
  components: {
    PageHeader
  }
};
</script>
