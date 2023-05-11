gsap.registerPlugin(ScrollTrigger);

const images = gsap.utils.toArray('img');
const loader = document.querySelector('.loader--text');
const updateProgress = (instance) =>
    loader.textContent = `${Math.round(instance.progressedCount * 100 / images.length)}%`;

const showDemo = () => {
    document.body.style.overflow = 'auto';
    document.scrollingElement.scrollTo(0, 0);
    gsap.to(document.querySelector('.loader'), { autoAlpha: 0 });

    gsap.utils.toArray('section').forEach((section, index) => {
        const w = section.querySelector('.wrapper');
        const [x, xEnd] = index % 2 ? ['0%', (w.scrollWidth - section.offsetWidth) * -0.2] : [w.scrollWidth * -0.2, 0];
        gsap.fromTo(w, { x }, {
            x: xEnd,
            scrollTrigger: {
                trigger: section,
                scrub: 0.1
            }
        });


    });
};

let gallery1 = document.getElementById("gallery-1");
let gallery2 = document.getElementById("gallery-2");
let gallery3 = document.getElementById("gallery-3");
let gallery4 = document.getElementById("gallery-4");

for (var i = 1; i < 15; i++) {
    let card = document.createElement("img");
    card.setAttribute('src', "./images/image (" + i + ").jpg");
    card.classList.add("gallery-img");
    let item = document.createElement("li");
    item.prepend(card)
    gallery1.prepend(item);
}
for (var i = 21; i < 35; i++) {
    let card = document.createElement("img");
    card.setAttribute('src', "./images/image (" + i + ").jpg");
    card.classList.add("gallery-img");
    let item = document.createElement("li");
    item.prepend(card)
    gallery2.prepend(item);
} for (var i = 41; i < 55; i++) {
    let id = Math.floor(Math.random() * 79) + 1;
    let card = document.createElement("img");
    card.setAttribute('src', "./images/image (" + i + ").jpg");
    card.classList.add("gallery-img");
    let item = document.createElement("li");
    item.prepend(card)
    gallery3.prepend(item);
} for (var i = 61; i < 75; i++) {
    let id = Math.floor(Math.random() * 79) + 1;
    let card = document.createElement("img");
    card.setAttribute('src', "./images/image (" + i + ").jpg");
    card.classList.add("gallery-img");
    let item = document.createElement("li");
    item.prepend(card)
    gallery4.prepend(item);
}


imagesLoaded(images).on('progress', updateProgress).on('always', showDemo);