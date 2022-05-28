const oda1 = document.getElementById("oda1");
const oda2 = document.getElementById("oda2");
const oda3 = document.getElementById("oda3");
const oda4 = document.getElementById("oda4");

const odaMeta1 = document.getElementById("odaMeta1");
const odaMeta2 = document.getElementById("odaMeta2");
const odaMeta3 = document.getElementById("odaMeta3");
const odaMeta4 = document.getElementById("odaMeta4");

function odaClickHandler1() {
  odaMeta1.classList.toggle("displayNone");
  oda1.classList.toggle("oda1Bg");
}

function odaClickHandler2() {
  odaMeta2.classList.toggle("displayNone");
  oda2.classList.toggle("oda2Bg");
}

function odaClickHandler3() {
  odaMeta3.classList.toggle("displayNone");
  oda3.classList.toggle("oda3Bg");
}

function odaClickHandler4() {
  odaMeta4.classList.toggle("displayNone");
  oda4.classList.toggle("oda4Bg");
}
