function clickButton(a) {
    var io = document.getElementById("io").innerText; //io = '7'
    io = io + a; // = '7' + 7 = 
    document.getElementById("io").innerText = io;
  }
  
  function del() {
    document.getElementById("io").innerText = "";
  }
  
  function calc() {
    var io = document.getElementById("io").innerText;
    var result = document.getElementById("result");
    if (
      io.includes("+") ||
      io.includes("-") ||
      io.includes("/") ||
      io.includes("*")
    ) {
      result.innerText = eval(io);
      del();
    } else {
      del();
      alert("Phép tính không hợp lệ");
    }
  }