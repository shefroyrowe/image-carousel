const moveLeftButton = document.querySelector('.move-left');
const moveRightButton = document.querySelector('.move-right');


moveLeftButton.addEventListener('click', () => {
    window.scroll({
        top: 0,
        left: -1414,
        behavior: "smooth",
      });
})

moveRightButton.addEventListener('click', () => {
    window.scroll({
        top: 0,
        left: 1414,
        behavior: "smooth",
      });
})
