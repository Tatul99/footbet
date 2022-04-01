<template>
  <div class="reviews-main">
    <q-carousel
      animated
      v-model="slide"
      arrows
      navigation
      infinite
      class="q-mt-md carousel2"
      style="min-height: 950px"
    >
      <q-carousel-slide v-for="(item, i) in reviews" :key="item" :name="i">
        <div class="container q-ma-lg" v-for="info in item" :key="info">
          <div class="row justify-center">
            <div class="col-8">
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
                  <div class="row justify-center container2">
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
                              <div class="like col-3 row items-center">
                                <img
                                  src="../../public/index/like.svg"
                                  alt=""
                                  @click="info.like++"
                                  class="cursor-pointer q-mr-md"
                                />
                                {{ info.like }}
                              </div>
                              <div class="ignore col-3">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 1,
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
      ],
    };
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
}
.like {
  border-right: 1px solid red;
}
</style>
