const notifications = document.querySelectorAll('.notification');
const viewAllBtn = document.querySelector('.view-all-btn');
const oldNotifications = document.querySelector('.notification-more-than-1d');

for (let notification of notifications) {
  notification.addEventListener('click', () => {
    notification.querySelector('.new').remove()
  })
};

viewAllBtn.addEventListener('click', () => {
  viewAllBtn.classList.add('hidden');
  oldNotifications.classList.remove('hidden');
})
