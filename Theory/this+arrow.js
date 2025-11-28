const user = {
  username:"vineet",
  price: 99,
  welcomeMessage: function(){
      console.log(`${this.username} welcome to website`);
      // keyword "this" is used to specify current context
  }
};
user.welcomeMessage();

user.username = "sam";
// context will change to sam =>
user.welcomeMessage();