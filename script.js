const notifications = document.querySelectorAll('.notification');
// const bellBtn = document

for (let notification of notifications) {
  notification.addEventListener('click', () => {
    notification.querySelector('.new').remove()
  })
};

