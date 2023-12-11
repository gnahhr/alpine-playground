function postsHandler() {
  return {
      isLoading: false,
      posts: [],
      getData(e) {
          this.isLoading = true;
          fetch('http://localhost:4748/posts')            
              .then((response) => response.json())
              .then((data) => { 
                  this.posts = data;
                  this.isLoading = false;
              });
      }  
  }
}