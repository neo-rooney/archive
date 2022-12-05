<template>
  <div class="ExhibitionEventAdmin__Layout">
    <div class="ExhibitionEventAdmin__Nav">
      <div class="ExhibitionEventAdmin__NavLeftEle">
        <img
          src="@/assets/images/exhibition-event.png"
          srcset="@/assets/images/exhibition-event@2x.png, @/assets/images/exhibition-event@3x.png"
          alt="logo"
          class="ExhibitionEventAdmin__Logo"
        />
        <div class="ExhibitionEventAdmin__LogoDivider"></div>
        <div class="ExhibitionEventAdmin__PageTitle">실시간 집계 현황</div>
      </div>
      <div class="ExhibitionEventAdmin__Timer">
        {{ time }}
      </div>
    </div>
    <div class="ExhibitionEventAdmin__Content">
      <div
        v-for="(item, i) in worksInfo"
        :key="i"
        class="ExhibitionEventAdmin__SliderItem"
      >
        <div class="ExhibitionEventAdmin__WorkIndex">
          {{ `${item.order}.` }}
        </div>
        <div class="ExhibitionEventAdmin__WorkTitle">{{ item.title }}</div>
        <img :src="item.imageUrl" class="ExhibitionEventAdmin__WorkImg" />
        <!-- <div class="ExhibitionEventAdmin__WorkCreatorWrapper">
          <span>Created by</span>
          <span class="ExhibitionEventAdmin__WorkCreatorName">{{
            item.creator
          }}</span>
        </div> -->
        <div class="ExhibitionEventAdmin__VoteController">
          <div
            class="ExhibitionEventAdmin__VoteMinus"
            @click="onClickMinus(item)"
          >
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"
              />
            </svg>
          </div>
          <div class="ExhibitionEventAdmin__Votes">2</div>
          <div
            class="ExhibitionEventAdmin__VotePlus"
            @click="onClickPlus(item)"
          >
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M17,13H13V17H11V13H7V11H11V7H13V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div class="ExhibitionEventAdmin__Footer">
      <img
        src="@/assets/images/full-logo.png"
        srcset="@/assets/images/full-logo@2x.png, @/assets/images/full-logo@3x.png"
        alt="logo"
        class="ExhibitionEventAdmin__Logo"
      />
    </div>
  </div>
</template>

<script>
import worksInfo from "@/assets/json/exhibitionEvent.json";

export default {
  name: "ExhibitionEventAdmin",
  data() {
    return {
      worksInfo: worksInfo,
      time: "",
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
    onClickMinus(item) {
      this.$store.dispatch("updateVoteNumber", {
        type: "minus",
        work_index: item.index,
      });
    },
    onClickPlus(item) {
      this.$store.dispatch("updateVoteNumber", {
        type: "plus",
        work_index: item.index,
      });
    },
  },
};
</script>

<style scoped>
.ExhibitionEventAdmin__Layout {
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  background: #ffffff;
}
.ExhibitionEventAdmin__Nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 7.8125vh;
  padding: 0 3.125vw;
  background: #fbfbfb;
}

.ExhibitionEventAdmin__Logo {
  width: 15.8vw;
}

.ExhibitionEventAdmin__NavLeftEle {
  display: flex;
  align-items: center;
}

.ExhibitionEventAdmin__LogoDivider {
  width: 0.14vw;
  height: 3.90625vh;
  background: #e6e8ec;
  margin: 0 2.1vw;
}

.ExhibitionEventAdmin__PageTitle {
  font-size: 1.67vw;
  font-weight: 700;
}

.ExhibitionEventAdmin__Timer {
  font-size: 1.46vw;
  font-weight: 700;
}

.ExhibitionEventAdmin__Content {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  height: calc(100% - 20.1171875vh);
  overflow-y: auto;
}

.ExhibitionEventAdmin__Slider {
  height: 100%;
  display: flex;
  align-items: center;
}

.ExhibitionEventAdmin__SliderItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
  padding: 30px;
}

.ExhibitionEventAdmin__WorkIndex {
  font-size: 1.67vw;
  font-weight: 700;
  align-self: start;
}

.ExhibitionEventAdmin__WorkTitle {
  font-size: 1.67vw;
  font-weight: 700;
  margin-bottom: 10px;
  align-self: start;
}

.ExhibitionEventAdmin__WorkImg {
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
}

.ExhibitionEventAdmin__WorkCreatorWrapper {
  font-size: 1.25vw;
  color: #7f7f7f;
  align-self: flex-end;
}

.ExhibitionEventAdmin__WorkCreatorName {
  color: #000000;
  font-weight: 700;
}

.ExhibitionEventAdmin__VoteController {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.ExhibitionEventAdmin__VoteMinus {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: #3d5a80;
  color: #ffffff;
  font-size: 20px;
  border-radius: 25px;
  cursor: pointer;
}

.ExhibitionEventAdmin__VotePlus {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: #f94144;
  color: #ffffff;
  font-size: 20px;
  border-radius: 25px;
  cursor: pointer;
}

.ExhibitionEventAdmin__Votes {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 125px;
  height: 50px;
  background: #231916;
  color: #ffffff;
  font-weight: 600;
  border-radius: 25px;
}

.ExhibitionEventAdmin__Footer {
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
