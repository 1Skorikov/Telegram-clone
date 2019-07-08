<template>
  <header class="page-header">
    <div class="page-header__left-icon">
      <slot name="left-icon">
        back
      </slot>
    </div>

    <div class="page-header__content">
      <slot name="content"></slot>
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  overflow: hidden;
  padding: 0 10px;
  background-color: rgba(82, 125, 163, 255);
  color: #fff;
}
</style>
