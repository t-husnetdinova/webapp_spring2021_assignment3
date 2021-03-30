app.component('feed', {
    data() {
        return {
            posts: 10,
            componentKey: 0,
        }
    },
    methods: {
        updatePosts: function() {
            this.posts += 10;
            console.log(this.posts);
            this.$forceUpdate();
        }
    },
    template: 
      /*html*/ 
      `<div class="feed">
        <post v-for="n in posts" :key="componentKey">  </post>
      </div>`
  })

app.component('post', {
    template:
    /* html */
    `<div class="post">
        <div class="card mx-auto homepage text-left">
        <div class="card-body">
            <h5 class="card-title"> Post </h5>
            <p class="card-text"> Post Body </p>
        </div>
        <div class="card-footer text-muted text-left">
            2 days ago
        </div>
        </div>
      </div>`
})