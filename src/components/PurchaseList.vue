<template>
  <table v-if="purchases.length">
    <thead>
      <th>지점</th>
      <th>고객ID</th>
      <th>상태</th>
    </thead>
    <tbody v-for="p in purchases">
      <tr>
        <td>{{ p.branchId }}</td>
        <td>{{ p.userId }}</td>
        <td>{{ p.status }}</td>
      </tr>
    </tbody>
  </table>
  <div v-else>
    <p>아직 판매된 내역이 없습니다.</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      purchases: []
    }
  },

  methods: {
    listAll () {
      const baseUri = process.env.BASE_URI_PURCHASE
      this.$http.get(baseUri + '/purchases')
        .then((result) => {
          this.purchases = result.data
        })
    }
  },

  beforeMount () {
    this.listAll()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
