import rust_hello from 'ic:canisters/rust_hello';

rust_hello.greet(window.prompt("Enter your name:")).then(greeting => {
  window.alert(greeting);
});
