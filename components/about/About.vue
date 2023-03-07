<template>
  <div id="About" class="page about">
    <div class="text-container">
      <div class="upper-text">
        <AboutHeader />
      </div>
      <div class="lower-text">
        <div class="lower-text-item">
          <div class="sub1-medium lower-text-item-header">
            Successful Businesses Use Adam’s Services
          </div>
          <div class="lower-text-right text2-regular">
            <p class="about-lower-headline">
              I bring increased efficiency, flexibility, and security to
              enterprises of all shapes and sizes. I help my clients understand,
              integrate, and leverage the cloud using the most cost-effective
              solutions possible.
            </p>
            <span class="sub2-medium">Here’s how...</span>
            <ol class="heres-how-list">
              <li v-for="item in heresHowList">{{ item }}</li>
            </ol>
          </div>
        </div>
        <div class="lower-text-item">
          <div class="sub1-medium lower-text-item-header">
            Adam’s Simplified 3-Step Process
          </div>

          <ol class="text2-regular lower-text-right" type="1">
            <li>
              <span class="sub1-medium">Explore</span><br />
              I know that many of the solutions I provide can do wonders for
              building next-level operational efficiency, however, you should be
              convinced of this too. That’s why I take the time to understand
              your needs and ensure whatever I do for you is best suited to your
              company and its processes.
            </li>
            <li>
              <span class="sub2-medium">Develop</span><br />
              Once we agree on the right solution for your organization, I build
              it. But before we go full steam ahead, I test out your system or
              software with you, making tweaks wherever necessary to get it just
              right. When everything is working just how you envisioned, we can
              move on to the final stage.
            </li>
            <li>
              <span class="sub2-medium">Implement</span><br />
              Here, I help you implement your solution throughout your
              organization. I then train you and your staff on everything you
              need to know, so you can steer on your own with confidence! If you
              have any questions or need any support or alterations made, I can
              easily do that for you.
            </li>
          </ol>
        </div>
        <div class="lower-text-item">
          <div class="text2-regular">
            <div class="sub1-medium lower-text-item-header">
              Working With Adam
            </div>

            <div class="text2-regular lower-text-right">
              With a broad background in sales, I’ve mastered the art of
              communication, making it easier for me to work with my clients. As
              an experienced full-stack developer and the best freelance cloud
              engineer you’ll ever meet (according to my clients!) I understand
              all the technical considerations that need to be factored in,
              applying these to higher-level decision-making. While many of the
              structures I create are complex in nature, they can all
              effortlessly slot into your business processes to provide you with
              immediate value. My clients enjoy working with me because I go the
              extra mile to demonstrate how my cloud-integrated solutions can
              benefit them, with the results to back this up.
            </div>
          </div>
        </div>
      </div>
      <AboutLetsTalk />
    </div>
  </div>
</template>
<script setup lang="ts">
const heresHowList = [
  "Providing onboarding to get you started in the cloud following best practices.",
  "Designing + building complete enterprise-grade, security-first cloud applications.",
  "Integrating existing your software, when and how you need it.",
  "Automating repetitive tasks + processes saving you time.",
  "Leveraging AI in the cloud to unlock even greater efficiency.",
  "Maintaining + upgrading all current cloud infrastructure",
  "increasing security and savings.",
  "Creating distributed systems leveraging event-driven architecture + micro-services.",
  "Incorporating cloud technologies into your Shopify builds.",
];
</script>
<style lang="scss">
@import "../assets/style/variables";

.about {
  display: flex;
  position: relative;
  flex-direction: column;
  min-height: 100vh;
  padding: var(--space-lg) var(--space-xl) 0 var(--space-xl);
  background: var(--white-01);
  @include breakpoint("md") {
    min-height: unset;
    padding: var(--space-lg) var(--space-xxl) 0 var(--space-xxl);
  }
  &::before {
    content: "";
    height: 1px;
    width: 100vw;
    background-color: var(--blue-01);
    top: var(--space-xxxxs);
    left: 0;
    position: absolute;
    @media screen and (max-width: 560px) {
      top: var(--space-xs);
    }
  }
  .text-container {
    color: black;
    // margin: var(--space-lg) 0;
    .upper-text {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin: var(--space-xxl) 0;
      @include breakpoint("md") {
        align-items: flex-start;
        margin-top: var(--space-xxxl);
      }
      @include breakpoint("sm") {
        align-items: flex-start;
        margin-top: var(--space-xxxl);
        font-size: 8px;
      }
    }
    .lower-text {
      display: flex;
      flex-direction: column;
      // justify-content: space-between;
      margin-top: var(--space-md);

      div {
        min-width: 180px;
      }
      .lower-text-item {
        ol {
          list-style: decimal-leading-zero;
          li::marker {
            font-size: 20px;
          }
          li {
            padding: var(--space-sm) 0;
          }
        }
        .sub1-medium {
          max-width: 55%;
        }
      }
      .lower-text-left {
        max-width: 50%;
        color: var(--black-03);
      }
      .lower-text-right {
        width: 45%;
        color: var(--black-02);
        margin: 0 0 var(--space-xl) auto;
        .heres-how-list {
          margin: var(--space-sm) 0 0 var(--space-lg);
          li {
            list-style: circle;
          }
        }
        .about-lower-headline {
          margin: var(--space-md) 0;
        }
      }

      @include breakpoint("md") {
        flex-direction: column;
        .lower-text-left {
          min-width: 100%;
          margin: var(--space-lg) 0 0 0;
        }
        .lower-text-right {
          padding-bottom: var(--space-lg);
          min-width: 100%;
          margin: 0 0 var(--space-lg) auto;
          li {
            list-style: none;
          }
        }
        #About
          > div
          > div.lower-text
          > div:nth-child(1)
          > div.lower-text-right.text2-regular
          > ol
          > li:nth-child(1) {
          list-style: circle;
        }
      }
    }
  }
}
</style>
