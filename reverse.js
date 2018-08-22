function reverseString(str) {
    if (str === "")
      return "";
    else
      return reverseString(str.substr(1)) + str.charAt(0);
  }
  var st= reverseString(process.argv[2])
  console.log(st)