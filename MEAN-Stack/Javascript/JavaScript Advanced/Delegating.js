function leadBootcamp(language, leader){
    var outcome = leader(language);
    console.log(leader);
    console.log(outcome);
    console.log("-=-=-=-=-=--=-=-")

}
function Mike(language){
  var languages={
    'javascript':'successful leader',
    'PHP':'successful leader',
    'Python':'successful leader',
    'Ruby':'successful leader',
  }
  if(languages[language]){
    return languages[language];
  }
  else {
    return "maybe not yet";
  }
}
function Charlie(language){
  var languages={
    'javascript':'successful leader',
    'PHP':'successful leader',
    'Python':'successful leader',
    'Ruby':'successful leader',
    'java_android':'successful leader',
  }
  if(languages[language]){
    return languages[language];
  }
  else {
    return "maybe not yet";
  }
}
function Jimmy(language){
  var languages={
    'javascript':'successful leader',
    'PHP':'successful leader',
    'Python':'successful leader',
    'Ruby':'successful leader',
    'iOS':'successful leader',
    'java_android':'maybe not yet',
  }
  if(languages[language]){
    return languages[language];
  }
  else {
    return "maybe not yet";
  }
}
console.log("Java_Android class teacher:")
leadBootcamp('java_android', Mike);
leadBootcamp('java_android', Charlie);
leadBootcamp('java_android', Jimmy);
console.log("Ruby class teacher:")
leadBootcamp('Ruby', Mike);
leadBootcamp('Ruby', Charlie);
leadBootcamp('Ruby', Jimmy);