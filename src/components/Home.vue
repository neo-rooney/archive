<template>
  <div class="home">
    <div class="container">
      <LoginBtn />
    </div>
    <div class="container">
      <Status
        @onClickSort="onClickSort"
        @onClickFilter="onClickFilter"
        class="status"
      />
      <ul>
        <li class="contents" v-for="(data, index) in newFeedList" :key="index">
          <div v-if="(index + 1) % sponRepeatNum === 0">
            <Feed v-bind:value="data" />
            <Spon
              v-bind:value="sponData[(index + 1) / sponRepeatNum - 1]"
              v-show="(index + 1) % sponRepeatNum === 0"
              class="spon"
            />
          </div>
          <div v-else>
            <Feed v-bind:value="data" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import LoginBtn from "./LoginBtn.vue";
import Status from "./Status.vue";
import Feed from "./Feed.vue";
import Spon from "./Spon.vue";
import FilterModal from "./FilterModal.vue";
import Observer from "./Observer.vue";
import { fetchFeed, fetchSpon } from "../api";
import { mapState } from "vuex";

export default {
  components: {
    LoginBtn,
    Status,
    Feed,
    Spon,
    FilterModal,
    Observer
  },
  data() {
    return {
      sponRepeatNum: 3,
      sponData: [],
      sponPage: 1,
      sponLimit: 10
    };
  },
  created() {
    this.fetchSponData();
  },
  computed: {
    ...mapState(["newFeedList"])
  },
  watch: {
    newFeedList() {
      this.sponLimit += 10;
      console.log(this.sponLimit);
      this.fetchSponData();
    }
  },
  methods: {
    fetchSponData() {
      fetchSpon
        .fetch({
          page: this.sponPage,
          limit: this.sponLimit
        })
        .then(data => {
          this.sponData = data.list.data;
        });
    },
    onClickSort(sort) {
      this.feedOrd = sort;
      this.fetchFeedData();
    },
    onClickFilter() {
      this.$store.commit("CLICK_FILTER", true);
    }
  }
};
</script>

<style scoped>
.home {
  display: flex;
}

.container:nth-child(1) {
  margin-top: 50px;
  margin-left: 390px;
  margin-right: 40px;
}

.container:nth-child(2) {
  margin-top: 50px;
}

.status {
  margin-bottom: 14px;
}

.contents {
  margin-bottom: 30px;
}

.spon {
  margin-top: 30px;
}
@media screen and (max-width: 600px) {
  .container:nth-child(1) {
    display: none;
  }
  .container:nth-child(2) {
    margin-top: 13px;
  }
  .status {
    margin-bottom: 0px;
  }
  .contents {
    margin-bottom: 0px;
  }
  .spon {
    margin-top: 0px;
  }
}
</style>
