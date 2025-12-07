document.getElementById("info-btn").addEventListener("click", () => {
    alert("JS effect working!");
});

const nameElement = document.getElementById('name');

document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    const xMove = ((clientX / innerWidth) - 0.5) * 20;
    const yMove = ((clientY / innerHeight) - 0.5) * 20;

    nameElement.style.transform = `perspective(500px) rotateX(${yMove * -1}deg) rotateY(${xMove}deg)`;
});

document.addEventListener('mouseleave', () => {
    nameElement.style.transform = 'perspective(500px) rotateX(0deg) rotateY(0deg)';
});
