import Masonry from "masonry-layout"

const element = document.querySelector("ul.most-viewed__masonry")

const masonry = new Masonry(element, {
  fitWidth: true,
  horizontalOrder: true,
  percentPosition: true,
  gutter: ".most-viewed__masonry-gutter",
  columnWidth: ".most-viewed__masonry-element",
  itemSelector: ".most-viewed__masonry-element",
})

window.masonry = masonry
