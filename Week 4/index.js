var tabButtons = document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels = document.querySelectorAll(".tabContainer  .tabPanel");
var tabButtons2 = document.querySelectorAll(".tabContainer2 .buttonContainer2 button");
var tabPanels2 = document.querySelectorAll(".tabContainer2  .tabPanel2");

function showPanel(panelIndex, colorCode) {
  tabButtons.forEach(function(node) {
    node.style.backgroundColor = "";
    node.style.color = "";
    node.style.borderBottom = "1px solid #e4e7ed"
  });
  tabButtons[panelIndex].style.backgroundColor = colorCode;
  tabButtons[panelIndex].style.color = "#409eff";
  tabButtons[panelIndex].style.borderBottom = "none";
  tabPanels.forEach(function(node) {
    node.style.display = "none";
  });
  tabPanels[panelIndex].style.visibility = "visible";
  tabPanels[panelIndex].style.display = "block";
  tabPanels[panelIndex].style.backgroundColor = colorCode;
}

function hidePanel(panelIndex){
  tabButtons.forEach(function(node) {
    node.style.backgroundColor = "";
    node.style.color = "";
    node.style.borderBottom = "1px solid #e4e7ed"
  });
  tabPanels.forEach(function(node) {
    node.style.visibility = "hidden";
  });
  tabButtons[panelIndex].style.borderBottom = "none";
  tabButtons[panelIndex].style.color = "#409eff";
  // tabPanels2[panelIndex].style.display = "none";
}

function showPanel2(panelIndex, colorCode) {
  tabButtons2.forEach(function(node) {
    node.style.backgroundColor = "";
    node.style.color = "";
    node.style.borderBottom = "1px solid #e4e7ed"
  });
  tabButtons2[panelIndex].style.backgroundColor = colorCode;
  tabButtons2[panelIndex].style.color = "#409eff";
  tabButtons2[panelIndex].style.borderBottom = "none";
  tabPanels2.forEach(function(node) {
    node.style.display = "none";
  });
  tabPanels2[panelIndex].style.display = "block";
  tabPanels2[panelIndex].style.backgroundColor = colorCode;
}

function hidePanel2(panelIndex){
  tabButtons2.forEach(function(node) {
    node.style.backgroundColor = "";
    node.style.color = "";
    node.style.borderBottom = "1px solid #e4e7ed"
  });
  tabPanels2.forEach(function(node) {
    node.style.display = "none";
  });
  tabButtons2[panelIndex].style.borderBottom = "none";
  tabButtons2[panelIndex].style.color = "#409eff";
  // tabPanels2[panelIndex].style.display = "none";
}

showPanel(0, 'white');
showPanel2(0, 'white');

