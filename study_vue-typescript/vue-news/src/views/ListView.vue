<template>
  <div>
    <list-item :items="newsItems"></list-item>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { fetchNews, NewsItem } from "@/api";
import ListItem from "../components/ListItem.vue";

export default Vue.extend({
  components: {
    ListItem,
  },

  data() {
    return {
      newsItems: [] as NewsItem[],
    };
  },

  methods: {
    async fetchNewsItems() {
      const response = await fetchNews();

      this.newsItems = response.data;
    },
  },

  created() {
    this.fetchNewsItems();
  },
});
</script>

<style></style>
