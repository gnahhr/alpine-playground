function postsHandler() {
  return {
      isLoading: false,
      posts: [],
      getData(e) {
        this.isLoading = true;
        axios.get('http://localhost:4748/posts')
        .then((response) => {
          this.posts = response.data;
          this.isLoading = false;
        })        
      },
      deletePost(id) {
        // this.isLoading = true;
        axios.delete('http://localhost:4748/post', {id})
        .then((response) => {
          console.log(response);
        })  
      }
  }
}