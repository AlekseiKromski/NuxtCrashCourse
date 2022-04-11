<template>
  <div class="">
    <h1 class="mb-2">Список постов </h1>
    <el-table
      :data="posts"
      style="width: 100%">
      <el-table-column
        prop="title"
        label="Название"
      ></el-table-column>
      <el-table-column
        label="Дата">
        <template slot-scope="{row: {date}}">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ new Date(date).toLocaleString() }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="Просмотры">
        <template slot-scope="{row: {views}}">
          <i class="el-icon-view"></i>
          <span style="margin-left: 10px">{{ views }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="Комментарии">
        <template slot-scope="{row: {comments}}">
          <i class="el-icon-message"></i>
          <span style="margin-left: 10px">{{ comments.length }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="Действия">
        <template slot-scope="{row}">
          <el-button
            type="primary"
            icon="el-icon-view"
            circle
            @click="open(row._id)"></el-button>
          <el-button
            type="danger"
            icon="el-icon-delete"
            circle
            @click="remove(row._id)"></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "list",
  layout: "admin",
  middleware: ['admin-auth'],
  async asyncData({store}){
    const posts = await store.dispatch('post/fetchAdminPosts')
    return {
      posts
    }
  },
  data() {
    return {
      tableData: [{
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }]
    }
  },
  methods: {
    open(id) {
      console.log(id);
    },
    remove(id) {
      console.log(id);
    },

  }

}
</script>

<style scoped>

</style>
