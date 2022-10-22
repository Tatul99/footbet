<template>
  <div class="q-mt-lg">
    <div class="row justify-cennter">
      <div class="col-12">
        <div class="row justify-between">
          <img class="card col-6" src="../../public/footer/card.svg" alt="" />
          <div class="container col-5">
            <div class="row justify-center">
              <div class="col-10 q-mt-lg">
                <q-input
                  class="input"
                  v-model="ph"
                  borderless
                  placeholder="имя, фамилия"
                  :dense="dense"
                ></q-input>
                <div class="col-12 q-mt-md">
                  <div class="row justify-center">
                    <div class="col-11">номер карты</div>
                    <div class="col-12">
                      <div class="row inputs-div justify-between q-mt-md">
                        <q-input
                          class="inputs col-2"
                          v-model="ph"
                          borderless
                          :dense="dense"
                          maxlength="6"
                        ></q-input>
                        <q-input
                          class="inputs col-2"
                          v-model="ph"
                          borderless
                          maxlength="6"
                          :dense="dense"
                        ></q-input>
                        <q-input
                          class="inputs col-2"
                          v-model="ph"
                          borderless
                          maxlength="6"
                          :dense="dense"
                        ></q-input>
                        <q-input
                          class="inputs col-2"
                          v-model="ph"
                          borderless
                          maxlength="6"
                          :dense="dense"
                        ></q-input>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="row justify-start q-mt-md">
                        <q-input
                          class="input col-6"
                          v-model="ph"
                          borderless
                          placeholder="код CVV "
                          :dense="dense"
                        ></q-input>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="row justify-start q-mt-md">
                        <q-input
                          class="input col-6"
                          v-model="ph"
                          borderless
                          placeholder="действует до "
                          :dense="dense"
                        ></q-input>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="row justify-center">
                        <q-btn class="btn q-mt-md">
                          <p class="btn-text">Подтвердиить</p></q-btn
                        >
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
export default {};
</script>

<style scoped>
p {
  margin: 0;
}
.card {
  width: 691px;
  height: 377px;
}
.container {
  border: 1px solid #eeecec;
}

.input {
  border: 1px solid #ffffff;
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.5);
}
.inputs {
  border: 1px solid #ffffff;
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.5);
  background: inherit;
  height: 35px;
}
.btn {
  background: #a70b47;
}
</style>
