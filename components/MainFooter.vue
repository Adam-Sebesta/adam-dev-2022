<template>
  <footer class="footer-wrapper">
    <div class="footer-left">
      <p class="text2-medium uppercase">site ver // 06.2022</p>
    </div>
    <div class="footer-right">
      <p class="text2-medium">DESIGN // Gaclav</p>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>
<style lang="scss">
footer {
  padding: var(--space-md) var(--space-xl);
  border-top: 1px solid var(--white-01);
  display: flex;
  background: var(--black-04);
  justify-content: space-between;
  color: var(--grey-02);
  align-items: center;
  @media screen and (max-width: 1297px) {
    padding: var(--space-md) var(--space-xxl);
  }
  .footer-left {
  }
  .footer-right {
    width: 35%;
  }
}
</style>
