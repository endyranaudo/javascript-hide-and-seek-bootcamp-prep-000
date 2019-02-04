function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById("nested").querySelector(".target");
}

function increaseRankBy(n) {
  var l=document.getElementById("app").querySelectorAll("ul.ranked-list li");
  for(let i=0; i<l.length; i++) {
    lis[i].innerHTML=parseInt(l[i].innerHTML) + n;
  }
}

function deepestChild(){
  
}