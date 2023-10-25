// const follower = document.querySelector('.follower');

// document.addEventListener('mousemove', (e) => {
//     const targetX = e.clientX;
//     const targetY = e.clientY;

//     const currentX = follower.offsetLeft + (follower.offsetWidth);
//     const currentY = follower.offsetTop + (follower.offsetHeight);

//     const deltaX = targetX - currentX;
//     const deltaY = targetY - currentY;

//     const moveX = currentX + (deltaX);
//     const moveY = currentY + (deltaY);

//     follower.style.transform = `translate(${moveX}px, ${moveY}px)`;
// });

const follower1 = document.querySelector('.follower1');
const follower2 = document.querySelector('.follower2');

document.addEventListener('mousemove', (e) => {
    moveFollowerToCursor(follower1, e.clientX, e.clientY, 0.05);
    moveFollowerToCursor(follower2, e.clientX, e.clientY, 0.03);
});

function moveFollowerToCursor(follower, targetX, targetY, speed) {
    const currentX = follower.offsetLeft + (follower.offsetWidth);
    const currentY = follower.offsetTop + (follower.offsetHeight);

    const deltaX = targetX - currentX - 50;
    const deltaY = targetY - currentY - 20;

    const moveX = currentX + (deltaX);
    const moveY = currentY + (deltaY);

    follower.style.transform = `translate(${moveX}px, ${moveY}px)`;
}
