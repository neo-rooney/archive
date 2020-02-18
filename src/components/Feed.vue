<template>
  <div class="feed">
    <router-link :to="`/f/${value.id}`">
      <div class="feed__header">
        <div v-if="value.category_id === 1" class="header__category">
          apple
        </div>
        <div v-if="value.category_id === 2" class="header__category">
          banana
        </div>
        <div v-if="value.category_id === 3" class="header__category">
          coconut
        </div>
        <div class="header__id">{{ value.id }}</div>
      </div>

      <hr class="feed_underline" />

      <div class="feed_create">
        <div class="create__userId">{{ value.user_id }}</div>
        <div class="create__squ"></div>
        <div class="create__createdAt">{{ value.created_at }}</div>
      </div>

      <div class="feed__content">
        <div class="content__title">
          {{ value.title }}
        </div>
        <div class="content__content">
          {{ value.contents }}
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["value"]
};
</script>

<style scoped>
.feed {
  width: 865px;
  height: 179px;
  border-radius: 5px;
  border: solid 1px #e1e4e7;
}

.feed a {
  text-decoration: none;
  width: 100%;
  height: 100%;
}

.feed__header {
  margin-top: 20px;
  margin-bottom: 11px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #7e848a;
}

.header__category {
  margin-left: 30px;
}

.header__id {
  margin-right: 30px;
}

.feed_underline {
  width: 805px;
  height: 1px;
  background-color: #e1e4e7;
  border: 0;
  margin-bottom: 15px;
}

.feed_create {
  width: 100%;
  display: flex;
  align-items: center;
  margin-left: 30px;
  margin-bottom: 17px;
}

.create__userId {
  font-family: SpoqaHanSans;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.92;
  letter-spacing: normal;
  text-align: left;
  color: #00c854;
}
.create__squ {
  background-color: #e1e4e7;
  width: 1px;
  height: 15px;
  margin: 0px 10px;
}
.create__createdAt {
  font-family: SpoqaHanSans;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.92;
  letter-spacing: normal;
  text-align: left;
  color: #495057;
}

.content__title {
  width: 799px;
  height: 27px;
  font-family: SpoqaHanSans;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
  color: #282c30;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 30px;
  margin-bottom: 6px;
}

.content__content {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 800px;
  height: 24px;
  color: #495057;
  font-size: 16px;
  margin-left: 30px;
}

@media screen and (max-width: 600px) {
  .feed {
    width: 375px;
    height: 179px;
    border-radius: 0px;
    border-bottom: 10px#d8d8d8 solid;
  }
  .feed__header {
  }
  .header__category {
    margin-left: 15px;
  }
  .header__id {
    margin-right: 15px;
  }
  .feed_underline {
    width: 345px;
  }
  .create__createdAt,
  .create__squ {
    display: none;
  }
  .feed_create {
    margin-left: 15px;
  }

  .content__title {
    width: 338px;
    height: 27px;
    margin-left: 15px;
  }
  .content__content {
    width: 344px;
    height: 24px;
    margin-left: 15px;
  }
}
</style>
