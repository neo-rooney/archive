<template>
  <div class="ExhibitionEvent__Layout">
    <div class="ExhibitionEvent__Nav">
      <div class="ExhibitionEvent__NavLeftEle">
        <img
          src="@/assets/images/exhibition-event.png"
          srcset="@/assets/images/exhibition-event@2x.png, @/assets/images/exhibition-event@3x.png"
          alt="logo"
          class="ExhibitionEvent__Logo"
        />
        <div class="ExhibitionEvent__LogoDivider"></div>
        <div class="ExhibitionEvent__PageTitle">실시간 집계 현황</div>
      </div>
      <div class="ExhibitionEvent__Timer">
        {{ time }}
      </div>
    </div>
    <div class="ExhibitionEvent__Content">
      <client-only>
        <splide
          :options="recommendUsersOptions"
          class="ExhibitionEvent__Slider"
        >
          <splide-slide
            v-for="(item, i) in worksInfo"
            :key="i"
            class="ExhibitionEvent__SliderItem"
          >
            <div class="ExhibitionEvent__WorkIndex">{{ `${item.order}.` }}</div>
            <div class="ExhibitionEvent__WorkTitle">{{ item.title }}</div>
            <img :src="item.imageUrl" class="ExhibitionEvent__WorkImg" />
            <div class="ExhibitionEvent__WorkCreatorWrapper">
              <span>Created by</span>
              <span class="ExhibitionEvent__WorkCreatorName">{{
                item.creator
              }}</span>
            </div>
            <div class="ExhibitionEvent__Votes">
              {{ item.index }}
            </div>
          </splide-slide>
        </splide>
      </client-only>
    </div>
    <div class="ExhibitionEvent__Footer">
      <img
        src="@/assets/images/full-logo.png"
        srcset="@/assets/images/full-logo@2x.png, @/assets/images/full-logo@3x.png"
        alt="logo"
        class="ExhibitionEvent__Logo"
      />
    </div>
  </div>
</template>

<script>
import worksInfo from "@/assets/json/exhibitionEvent.json";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";

export default {
  name: "ExhibitionEvent",

  data() {
    return {
      interval: null,
      time: "",
      worksInfo: worksInfo,
      recommendUsersOptions: {
        type: "loop",
        autoplay: false,
        rewind: true,
        arrows: false,
        pagination: false,
        interval: 500,
        speed: 700,
        autoWidth: true,
        gap: "3.47vw",
        padding: {
          left: "3.47vw",
        },
        perMove: 1,
      },
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      this.getTime();
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    getTime() {
      let thisTime = this.$moment(new Date()).format(
        "YYYY.MM.DD a hh시 mm분 ss초"
      );

      if (thisTime.indexOf("pm") !== -1) {
        thisTime = thisTime.replace("pm", "오후");
      }

      if (thisTime.indexOf("am") !== -1) {
        thisTime = thisTime.replace("am", "오전");
      }

      this.time = thisTime;
    },
  },
};
</script>

<style scoped>
.ExhibitionEvent__Layout {
  width: 100vw;
  height: 100vh;
}

.ExhibitionEvent__Nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 7.8125vh;
  padding: 0 3.125vw;
  background: #fbfbfb;
}

.ExhibitionEvent__Logo {
  width: 15.8vw;
}

.ExhibitionEvent__NavLeftEle {
  display: flex;
  align-items: center;
}

.ExhibitionEvent__LogoDivider {
  width: 0.14vw;
  height: 3.90625vh;
  background: #e6e8ec;
  margin: 0 2.1vw;
}

.ExhibitionEvent__PageTitle {
  font-size: 1.67vw;
  font-weight: 700;
}

.ExhibitionEvent__Timer {
  font-size: 1.46vw;
  font-weight: 700;
}

.ExhibitionEvent__Content {
  height: calc(100% - 20.1171875vh);
}

.ExhibitionEvent__Slider {
  height: 100%;
  display: flex;
  align-items: center;
}

.ExhibitionEvent__SliderItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.ExhibitionEvent__WorkIndex {
  font-size: 1.67vw;
  font-weight: 700;
  align-self: start;
}

.ExhibitionEvent__WorkTitle {
  font-size: 1.67vw;
  font-weight: 700;
  margin-bottom: 1.171875vh;
  align-self: start;
}

.ExhibitionEvent__WorkImg {
  width: 20.83vw;
  height: 20.83vw;
  margin-bottom: 1.171875vh;
}

.ExhibitionEvent__WorkCreatorWrapper {
  font-size: 1.25vw;
  color: #7f7f7f;
  align-self: flex-end;
  margin-bottom: 2.44140625vh;
}

.ExhibitionEvent__WorkCreatorName {
  color: #000000;
  font-weight: 700;
}

.ExhibitionEvent__Votes {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 11.11vw;
  height: 4.58984375vh;
  background: #231916;
  color: #ffffff;
  font-weight: 600;
  border-radius: 1.63vw;
}

.ExhibitionEvent__Footer {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 12.3046875vh;
  background: #efefef;
}
</style>
