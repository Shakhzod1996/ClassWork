let arr = [
  {
    id: 1,
    avatar: "../../imgs/nature1.jpg",
    name: "Ramazon",
    view: "50w",
    media: [
      "../../imgs/slide2.jpg",
      " ../../video/first.mp4",
      "../../imgs/nature5.jpg",
    ],
  },

  {
    id: 2,
    avatar: "../../imgs/nature2.jpg",
    name: "Ramazon",
    view: "50w",
    media: [
      "../../imgs/slide4.jpg",
      " ../../video/first.mp4",
      "../../imgs/nature7.jpg",
    ],
  },

  {
    id: 3,
    avatar: "../../imgs/nature3.jpg",
    name: "Ramazon",
    view: "50w",
    media: [
      "../../imgs/slide1.jpg",
      " ../../video/second.mp4",
      "../../imgs/nature2.jpg",
    ],
  },

  {
    id: 4,
    avatar: "../../imgs/nature2.jpg",
    name: "Ramazon",
    view: "50w",
    media: [
      "../../imgs/slide4.jpg",
      " ../../video/first.mp4",
      "../../imgs/nature1.jpg",
    ],
  },

  {
    id: 5,
    avatar: "../../imgs/nature4.webp",
    name: "Ramazon",
    view: "50w",
    media: [
      "../../imgs/slide3.jpg",
      " ../../video/second.mp4",
      "../../imgs/nature6.webp",
    ],
  },

  {
    id: 6,
    avatar: "../../imgs/nature7.jpg",
    name: "Ramazon",
    view: "50w",
    media: [
      "../../imgs/slide8.jpg",
      " ../../video/first.mp4",
      "../../imgs/seven1.jpg",
    ],
  },

  {
    id: 7,
    avatar: "../../imgs/nature7.jpg",
    name: "Ramazon",
    view: "50w",
    media: [
      "../../imgs/slide8.jpg",
      " ../../video/first.mp4",
      "../../imgs/seven1.jpg",
    ],
  },
];

let ul = document.querySelector('.ul')

arr.forEach(item => {
  ul.innerHTML += `
    <li class='li-main'>
      <img src=${item.media[0]}>
    </li>
  `
})

let li = document.querySelectorAll('.li-main')
li[3].classList.add('active')