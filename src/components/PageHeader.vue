<template>
  <header class="page-header">
    <div class="page-header__left-content">
      <div class="page-header__left-icon">
        <slot name="left-icon"></slot>
      </div>

      <div class="page-header__content">
        <slot name="content">Telegram</slot>
      </div>
    </div>

    <div class="page-header__right-icon">
      <slot name="right-icon"></slot>
    </div>
  </header>
</template>

<script>
export default {
  name: "PageHeader"
};
</script>

<style lang="scss" scoped>
.page-header {
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #517da2;
  color: #fff;
}

.page-header__left-content {
  display: flex;
  align-items: center;
}

.page-header__left-icon {
  cursor: pointer;
}

.page-header__content {
  letter-spacing: 0.8px;
}

.page-header__right-icon {
  cursor: pointer;
}
</style>
