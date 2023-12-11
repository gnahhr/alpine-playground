function handleRegister() {
  return {
    username: '',
    password: '',
    isLoading: false,
    error: '',
    registerUser() {
      this.isLoading = true;
      axios.post('http://localhost:4748/user', {
        username,
        password
      }).then((response) => console.log(response))
    }
  }
}