const tabs = document.querySelectorAll('.tab-labels li a');
tabs.forEach((tab) => {
  tab.addEventListener('click', (event) => {
    event.preventDefault();
    const tabContentId = event.target.getAttribute('href');
    const tabContent = document.querySelector(tabContentId);
    const activeTab = document.querySelector('.tab-labels li.active');
    const activeTabContent = document.querySelector('.tab-content.active');
    activeTab.classList.remove('active');
    activeTabContent.classList.remove('active');
    tab.parentElement.classList.add('active');
    tabContent.classList.add('active');
  });
});
