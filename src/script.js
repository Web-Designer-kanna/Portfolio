
const menuToggle = document.querySelector("header nav .fa-bars");
const ul = document.querySelector("header nav ul");
const closeBtn = document.querySelector("header nav ul .fa-close");
const Body = document.querySelector("body");

menuToggle.addEventListener("click", () => {
  ul.classList.toggle("active");
});
closeBtn.addEventListener("click", () => {
  ul.classList.toggle("active");
});
const projectData = [
  {
    id: 1,
    img: "assets/images/Hotel_img.png",
    des: "Welcome to Hotel,where luxury meets sophistication in the heart of Bengalore.Immerse yourself in unparralleled comfort and impeccable service. Book now for an unforgettable stay",
    date: "23 febraury 2024",
    link: "www.google.com",
  },
  {
    id: 2,
    img: "assets/images/Hotel_img.png",
    des: "Welcome to Hotel,where luxury meets sophistication in the heart of Bengalore.Immerse yourself in unparralleled comfort and impeccable service. Book now for an unforgettable stay",
    date: "23 febraury 2024",
    link: "www.google.com",
  },
  {
    id: 3,
    img: "assets/images/Hotel_img.png",
    des: "Welcome to Hotel,where luxury meets sophistication in the heart of Bengalore.Immerse yourself in unparralleled comfort and impeccable service. Book now for an unforgettable stay",
    date: "23 febraury 2024",
    link: "www.google.com",
  },
  {
    id: 4,
    img: "assets/images/Hotel_img.png",
    des: "Welcome to Hotel,where luxury meets sophistication in the heart of Bengalore.Immerse yourself in unparralleled comfort and impeccable service. Book now for an unforgettable stay",
    date: "23 febraury 2024",
    link: "www.google.com",
  },
  {
    id: 5,
    img: "assets/images/Hotel_img.png",
    des: "Welcome to Hotel,where luxury meets sophistication in the heart of Bengalore.Immerse yourself in unparralleled comfort and impeccable service. Book now for an unforgettable stay",
    date: "23 febraury 2024",
    link: "www.google.com",
  },
  {
    id: 6,
    img: "assets/images/Hotel_img.png",
    des: "Welcome to Hotel,where luxury meets sophistication in the heart of Bengalore.Immerse yourself in unparralleled comfort and impeccable service. Book now for an unforgettable stay",
    date: "23 febraury 2024",
    link: "www.google.com",
  },
];
const btns = document.querySelectorAll(
  ".project-container .container .col .btn"
);
const modal = document.querySelector(".modal");
btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    modal.classList.toggle("active");
    setModalData(index);
  });
});

function setModalData(index) {
  let data = projectData[index];
  let modalContainer = modal.querySelector(".modal-dialog");
  let item = `
    <div class="modal-content w-full h-full flex flex-col gap-y-2 p-4">
    <i class="fa fa-close w-8 h-8 leading-8 absolute right-5 top-5 text-center rounded-full text-orange-500 cursor-pointer" style="background-color: rgba(255, 255, 255, 0.5);"></i>
            <div class="image">
              <img src="${data.img}" alt="Hotel Website" class="w-full h-72 object-cover rounded-md">
            </div>
            <div class="modal-body">
              <h1 class="font-semibold md:text-xl my-2">Hotel Landing Page</h1>
              <p class="text-sm capitalize">${data.des}</p>
              <div class="flex flex-col gap-y-2 mt-3">
                <div class="flex items-center gap-x-2">
                  <strong>Created : <span class="font-light text-sm ml-2">${data.date}</span></strong>
                </div>
                <div class="flex items-center gap-x-2">
                  <strong>Role : <span class="font-light text-sm ml-2">Front End Developer</span></strong>
                </div>
                <div class="flex items-center gap-x-2">
                  <strong>Preview : <a href="${data.link}" class="font-light text-sm ml-2 text-orange-500 underline">${data.link}</a></strong>
                </div>
              </div>
            </div>
          </div>`;
  modalContainer.innerHTML = "";
  modalContainer.innerHTML = item;
  const modalclosebtn = modal.querySelector(".modal-content .fa-close");
console.log(modalclosebtn)
modalclosebtn.addEventListener("click", () => {
  modal.classList.toggle("active");
});
}

