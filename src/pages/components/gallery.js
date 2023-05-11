import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";


function gallery() {

  useEffect(() => {
    AOS.init({ duration: 500 })

    let list1 = [];
    for (var i = 1; i < 15; i++) {
      let card = document.createElement("img");
      card.setAttribute('src', "./images/image (" + i + ").jpg");
      card.classList.add("gallery-img");
      let item = document.createElement("li");
      item.prepend(card);
      list1.push(item)
    }

    const list2 = [];
    for (var i = 21; i < 35; i++) {
      let card = document.createElement("img");
      card.setAttribute('src', "./images/image (" + i + ").jpg");
      card.classList.add("gallery-img");
      let item = document.createElement("li");
      item.prepend(card);
      list2.push(item)
    }
    const list3 = [];
    for (var i = 41; i < 55; i++) {
      let card = document.createElement("img");
      card.setAttribute('src', "./images/image (" + i + ").jpg");
      card.classList.add("gallery-img");
      let item = document.createElement("li");
      item.prepend(card);
      list3.push(item)
    }
    const list4 = [];
    for (var i = 51; i < 75; i++) {
      let card = document.createElement("img");
      card.setAttribute('src', "./images/image (" + i + ").jpg");
      card.classList.add("gallery-img");
      let item = document.createElement("li");
      item.prepend(card);
      list4.push(item)


    }
    console.log(list1)
  }, [])

  return (
    <div class="gallery-master-wrapper">
      <div class="gallery demo-wrapper">
        <section class="gallery demo-gallery">
          <ul class="gallery wrapper gallery-wrapper" id="gallery-1">
          </ul>
        </section>
        <section class="gallery demo-gallery">
          <ul class="gallery wrapper gallery-wrapper" id="gallery-2">
          </ul>
        </section>
        <section class="gallery demo-gallery">
          <ul class="gallery wrapper gallery-wrapper" id="gallery-3">
          </ul>
        </section>
        <section class="gallery demo-gallery">
          <ul class="gallery wrapper gallery-wrapper" id="gallery-4">
          </ul>
        </section>
      </div>
    </div>
  )
}

export default gallery