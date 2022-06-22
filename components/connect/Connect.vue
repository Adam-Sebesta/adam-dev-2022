<template>
  <div id="Connect" class="page connect">
    <div class="connect-upper">
      <h2>Let's Talk</h2>
      <p class="connect-upper-subtitle subtitle-32-regular uppercase">
        & START AN AWESOME PROJECT
      </p>
      <div class="contact-text">
        <p class="contact-text-header text-24-semibold">Adam Sebesta</p>
        <div class="contact-text-wrapper">
          <div class="contact-text-left">
            <p class="text-16-medium uppercase">
              creative full-stack developer
            </p>
          </div>
          <div class="contact-text-right">
            <div class="text-16-medium uppercase contact-text-right-upper">
              contact
            </div>

            <div class="subtitle-32-medium uppercase contact-text-right-lower">
              <p>info@adamsebesta.dev</p>
              <p>+49 1520 834 1820</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ConnectLeaveMeAMessage />
    <ConnectLower />
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss">
.connect {
  min-height: 100vh;
  background: var(--black-04);
  padding-bottom: var(--space-md);
  .connect-upper {
    color: var(--white-01);

    padding: var(--space-xxxl) var(--space-xl) var(--space-lg) var(--space-xl);
    min-height: 30vh;
    background: var(--blue-gradient-48);
    .connect-upper-subtitle {
      margin-bottom: var(--space-xxl);
    }
    .contact-text {
      .contact-text-wrapper {
        display: flex;
        justify-content: space-between;
        .contact-text-left {
          p {
            color: var(--grey-02);
          }
        }
        .contact-text-right {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 35%;
          .contact-text-right-upper {
            color: var(--grey-02);
          }
          .contact-text-right-lower {
            margin-top: var(--space-md);
          }
        }
      }
    }
  }
}
</style>
