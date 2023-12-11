function handleRegister() {
  return {
    username: '',
    password: '',
    isLoading: false,
    error: '',
    registerUser() {
      this.isLoading = true;
      fetch('http://localhost:4748/user', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: this.username,
          password: this.password
        })
      })            
          .then((response) => response.json())
          .then((data) => { 
              this.users = data;
              this.isLoading = false;
          });
    }
  }
}