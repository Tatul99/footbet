<template>
  <div class="col-12 main">
    <div class="row justify-center">
      <div class="col-10">
        <div class="col-12 title">
          <div class="row justify-center">Беспроигрышная стратегия</div>
          <div class="col-12 q-mt-lg content">
            <div class="col-12 prise-content">
              <div class="row justify-center prise">цена</div>
              <div class="scroll-container">
                <div
                  class="col-12 q-mb-md line"
                  v-for="(item, i) in prise"
                  :key="item"
                >
                  <div class="row justify-between">
                    <div class="col-7">
                      <div class="row justify-between">
                        <div class="col-4">{{ i + 1 }}.</div>
                        <div class="col-6">
                          <div class="row justify-start">
                            Беспроигрышная стратегия
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-5">
                      <div class="row justify-around">
                        <div class="col-3">{{ item }}</div>
                        <button
                          class="col-3 btn"
                          :class="activeIndex === i ? 'active-btn' : ''"
                          @click="activeIndex = i"
                        >
                          Купить
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
      prise: [
        "1500 руб.",
        "1600 руб.",
        "1100 руб.",
        "1700 руб.",
        "1800 руб.",
        "1200 руб.",
        "1500 руб.",
        "1600 руб.",
        "1500 руб.",
      ],
    };
  },
};
</script>

<style scoped>
.main {
  margin-bottom: 60px;
}
.title {
  font-size: 40px;
}
.prise-content {
  background: rgba(255, 255, 255, 0.23);
  background: #1b1a30;
}
.prise {
  font-size: 19px;
  line-height: 24px;
  letter-spacing: 0.1em;
  font-variant: small-caps;

  color: rgba(0, 0, 0, 0.63);
  background: rgba(255, 255, 255, 0.23);
}
.line {
  background: rgba(255, 255, 255, 0.09);
  font-size: 21px;
}
.btn {
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 8px;
  text-align: 20px;
  background: inherit;
  color: #ffffff;
  cursor: pointer;
  padding: 8px 0px 8px;
  margin: 10px;
}
.active-btn {
  background: #8e0b40;
  border: unset;
}
.scroll-container {
  height: 300px;
  overflow: auto;
}

</style>
