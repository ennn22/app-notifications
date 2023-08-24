const notifications = document.querySelectorAll('.notification');


for (let notification of notifications) {
  notification.addEventListener('click', () => {
    notification.classList.add('hidden');
  })
};