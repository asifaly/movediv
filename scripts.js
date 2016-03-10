var sprite = document.getElementById("mydiv");

function main(vert) {
  var style = sprite.currentStyle || window.getComputedStyle(sprite);
  return vert ? Number(style.marginTop.match(/[^px]/g).join("")) : Number(style.marginLeft.match(/[^px]/g).join(""));
}

function up() {
  var marg = main(true) - 10;
  sprite.style.marginTop = marg + "px";
}

function down() {
  var marg = main(true) + 10;
  sprite.style.marginTop = marg + "px";
}

function left() {
  var marg = main() - 10;
  sprite.style.marginLeft = marg + "px";
}

function right() {
  var marg = main() + 10;
  sprite.style.marginLeft = marg + "px";
}