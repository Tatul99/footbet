<template>
  <div class="reviews-main">
    <q-carousel
      animated
      v-model="slide"
      arrows
      navigation
      infinite
      class="q-mt-md carousel2"
    >
      <q-carousel-slide v-for="(item, i) in reviews" :key="item" :name="i + 1">
        <div class="container q-ma-lg" v-for="info in item" :key="info">
          <div class="row justify-center">
            <div class="col-12 col-md-8">
              <div class="col justify-center items-around">
                <div class="admin col-10">
                  <div class="row">
                    <div class="image q-mr-md">
                      <img
                        :src="info.image"
                        alt=""
                        style="width: 75px; height: 75px"
                      />
                    </div>
                    <div class="name row items-center">{{ info.name }}</div>
                  </div>
                </div>
                <q-rating
                  v-model="info.ratingModel"
                  max="5"
                  size="1.5em"
                  color="yellow"
                  icon="star_border"
                  icon-selected="star"
                  icon-half="star_half"
                  no-dimming
                ></q-rating>
                <div class="col-10">
                  <div class="row justify-center q-mb-md container2">
                    <div class="info-text">
                      {{ info.text }}
                    </div>
                    <div class="date-coins col-12 row">
                      <div class="date col-6 text-red">
                        <div class="row justify-center">
                          <div class="col-8">
                            {{ info.date }}
                          </div>
                        </div>
                      </div>
                      <div class="coins col-6">
                        <div class="row justify-center">
                          <div class="col-8">
                            <div class="row justify-end">
                              <div class="like col-5 col-md-3 row items-center">
                                <img
                                  src="../../public/index/like.svg"
                                  alt=""
                                  @click="info.like++"
                                  class="cursor-pointer q-mr-md"
                                />
                                {{ info.like }}
                              </div>
                              <div class="ignore col-5 col-md-3">
                                <div class="row justify-center items-center">
                                  <img
                                    src="../../public/index/ignore.svg"
                                    alt=""
                                    @click="info.ignor++"
                                    class="cursor-pointer q-mr-md"
                                  />
                                  {{ info.ignor }}
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
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
    <div class="textArea-div q-mb-xl col-12">
      <div class="row justify-center">
        <div class="col-11 col-md-8">
          <div>
            <q-rating
              v-model="textAreaRating"
              max="5"
              size="1.5em"
              color="yellow"
              icon="star_border"
              icon-selected="star"
              icon-half="star_half"
              no-dimming
            ></q-rating>
          </div>
          <div class="col-12">
            <textarea
              class="textArea"
              name=""
              v-model="textAreaValue"
              id=""
              cols="30"
              placeholder="оставить отзыв..."
              rows="10"
              style="width: 100%; height: 100%"
            ></textarea>
          </div>
          <div class="col-10">
            <div class="row justify-center">
              <button
                class="textArea-btn cursor-pointer q-mt-md"
                @click="log()"
              >
                <p class="btn-text">Отправить</p>
              </button>
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
      slide: 1,
      textAreaRating: 0,
      textAreaValue: "",
      reviews: [
        [
          {
            image: "./index/admin.svg",
            name: "Lorem ipsum",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit   in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa q",
            like: 0,
            ignor: 0,
            date: "12.02.2021",
            ratingModel: 5,
          },
          {
            image: "./index/admin.svg",
            name: "Lorem ipsum",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit   in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia  deserunt mollit anim id est laborum.",
            like: 0,
            ignor: 0,
            date: "12.02.2021",
            ratingModel: 5,
          },
          {
            image: "./index/admin.svg",
            name: "Lorem ipsum",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit   in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt i",
            like: 0,
            ignor: 0,
            date: "12.02.2021",
            ratingModel: 5,
          },
        ],
        [
          {
            image: "./index/admin.svg",
            name: "Lorem ipsum",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit   in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia  deserunt mo",
            like: 0,
            ignor: 0,
            date: "12.02.2021",
            ratingModel: 5,
          },
          {
            image: "./index/admin.svg",
            name: "Lorem ipsum",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit   in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culp",
            like: 0,
            ignor: 0,
            date: "12.02.2021",
            ratingModel: 5,
          },
          {
            image: "./index/admin.svg",
            name: "Lorem ipsum",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit   in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint o",
            like: 0,
            ignor: 0,
            date: "12.02.2021",
            ratingModel: 5,
          },
        ],
        [
          {
            image: "./index/admin.svg",
            name: "Lorem ipsum",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit   in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia  deserunt mo",
            like: 0,
            ignor: 0,
            date: "12.02.2021",
            ratingModel: 5,
          },
          {
            image: "./index/admin.svg",
            name: "Lorem ipsum",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit   in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culp",
            like: 0,
            ignor: 0,
            date: "12.02.2021",
            ratingModel: 5,
          },
        ],
      ],
    };
  },
  methods: {
    log() {
      let obj = {
        image: "./index/admin.svg",
        name: "Lorem ipsum",
        text: "",
        like: 0,
        ignor: 0,
        date: "12.02.2021",
        ratingModel: 0,
      };

      obj.text = this.textAreaValue;
      obj.ratingModel = this.textAreaRating;
      const lastRewiewItem = this.reviews[this.reviews.length - 1];
      if (lastRewiewItem.length < 3) {
        lastRewiewItem.push(obj);
      } else {
        this.reviews.push([obj]);
      }

      //   this.reviews[length - 1].push(obj);
      this.textAreaValue = "";
      this.textAreaRating = 0;
    },
  },
};
</script>

<style scoped>
.reviews-main {
  background: #102135;
}
.container2 {
  min-height: 100px;
  background-color: #273342 !important;
  border-radius: 23px;
}
.carousel2 {
  background: inherit;
}
.info-text {
  padding: 20px;
  word-break: break-all;
}
.like {
  border-right: 1px solid red;
}
.textArea-div {
  margin-bottom: 60px;
}
.textArea {
  border-radius: 23px;
  background: #273342;
  border: unset;
  padding: 20px;
  color: #fff;
}
.textArea::-webkit-scrollbar {
  display: none;
}
.textArea-btn {
  border-radius: 8px;
  border: 1px solid #b1afaf;
  background: inherit;
}
.btn-text {
  color: rgb(168, 168, 163);
  margin: 0;
  padding: 10px 20px 10px 20px;
}
@media all and (max-width: 500px) {
  .container {
    margin: 0;
    margin-bottom: 20px;
  }
}
</style>
