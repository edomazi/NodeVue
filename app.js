const vm = new Vue({
    el: '#app',
    data: {
      results: []
    },
    mounted() {
      axios.get("http://127.0.0.1:3001/news").then(response => {
        this.results = response.data
      })
    }
  });   