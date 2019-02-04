function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById("nested").querySelector(".target");
}

function increaseRankBy(n) {
  var l = document.getElementById("app").querySelectorAll("ul.ranked-list li");
  for(let i=0; i<l.length; i++) {
    lis[i].innerHTML=parseInt(l[i].innerHTML) + n;
  }
}

function deepestChild() {
  var l = document.getElementById("grand-node").querySelectorAll("div");
  var test;
  for(let i=0; i<=l.length; i++) {
    test=l[i].querySelector("div");
  }
return test;
}