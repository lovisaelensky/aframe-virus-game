const food = document.querySelector('.food');
const modalBg = document.querySelector('.modal-bg');
const closeModal = document.querySelector('.close-btn');
const nextLevelBtn = document.querySelector('.next-level-btn');

closeModal.addEventListener('click', function () {
  modalBg.classList.remove('bg-active');
});
food.addEventListener('click', function () {
  //   modalBg.classList.add('bg-active');
  location.href = nextLevel;
});
// nextLevelBtn.addEventListener('click', function () {
//   //   modalBg.classList.remove('bg-active');
//   location.href = nextLevel;
// });
