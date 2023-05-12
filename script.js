var n; 
var ch=0;
function toggle1() {
    let x = document.getElementById("msg1");
    if (x.style.display === "none") {
      x.style.display = "inherit";
      setTimeout(() => {
        let get = document.getElementById('msg1');
        get.style.display = 'none';
        }, 3000);
    } 
  }

function toggle2() {
    let x = document.getElementById("comp");
    if (x.style.display === "none") {
        x.style.display = "inherit";
        setTimeout(() => {
        let get = document.getElementById("comp");
        get.style.display = 'none';
        }, 1000);
    } 
    }

function toggle3() {
    let x = document.getElementById("cong");
    if (x.style.display === "none") {
        x.style.display = "inherit";
        setTimeout(() => {
        let get = document.getElementById("cong");
        get.style.display = 'none';
        }, 3000);
        }
    }

function generateNumber() {
    n=Number.parseInt(Math.random() * (10 - 1) + 1);
    console.log(n)
    if(n){
        ch=0;
        toggle1();
    }
}

function store(){
    ch+=1;
    let g=document.getElementById("guess").value;
    checkNumber(g)
}

function checkNumber(g) {
    if(g<n){
        document.getElementById("comp").innerHTML="HIGHER";
        toggle2();
    }
    else if(g>n){
        document.getElementById("comp").innerHTML="LOWER";
        toggle2();
    }
    else if(g==n){
        if(ch>1)
        document.getElementById("cong").innerHTML=`Congratulations!! You guessed it in ${ch} chances.`;
        else
        document.getElementById("cong").innerHTML=`Congratulations!! You guessed it in ${ch} chance.`;
        toggle3();
    }
}
