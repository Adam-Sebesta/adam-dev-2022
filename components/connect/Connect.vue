<template>
  <div id="Connect" class="page connect">
    <div class="connect-upper">
      <h2>Let's Talk</h2>
      <p class="connect-upper-subtitle sub2-regular uppercase">
        & START AN AWESOME PROJECT
      </p>
      <div class="contact-text">
        <p class="contact-text-header text1-semibold">Adam Sebesta</p>
        <div class="contact-text-wrapper">
          <div class="contact-text-left">
            <p class="text2-medium uppercase">creative full-stack developer</p>
          </div>
          <div class="contact-text-right">
            <div class="text2-medium uppercase contact-text-right-upper">
              contact
            </div>

            <div class="sub2-medium uppercase contact-text-right-lower">
              <p>info@adamsebesta.dev</p>
              <p>+49 1520 834 1820</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ConnectLeaveMeAMessage id="connectLeaveMeAMessage" />
    <ConnectLower />
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss">
.connect {
  min-height: calc(100vh - 54px);
  background: var(--black-04);
  position: relative;
  display: flex;
  flex-direction: column;
  &::before {
    content: "";
    height: 1px;
    width: 100vw;
    background: var(--white-01);
    top: var(--space-xxxxs);
    left: 0;
    position: absolute;
    z-index: 1;
    @media screen and (max-width: 560px) {
      top: var(--space-xs);
    }
  }
  .connect-upper {
    color: var(--white-01);
    padding: var(--space-xxxl) var(--space-xl) var(--space-lg) var(--space-xl);
    min-height: 30vh;
    background: var(--blue-gradient-48);
    @media screen and (max-width: 1279px) {
      padding: var(--space-xxxxl) var(--space-xxl) var(--space-lg)
        var(--space-xxl);
    }
    .connect-upper-subtitle {
      margin: var(--space-xxs) 0 var(--space-xxl) 0;
    }
    .contact-text {
      .contact-text-header {
        margin-bottom: var(--space-xxxs);
      }
      .contact-text-wrapper {
        display: flex;
        justify-content: space-between;
        @media screen and (max-width: 1279px) {
          flex-direction: column;
          height: 350px;
          padding-bottom: var(--space-xxxl);
        }
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
  #connectLeaveMeAMessage {
    flex: 1 0;
  }
}
</style>
