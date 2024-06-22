'use strict';
//===== V1 =====
// this function just for encapsulation tab v1 code
function activateTabs1() {
  const tabsContainer = document.querySelector('.section1__tabs-container');
  const tabs = document.querySelectorAll('.section1__tab');
  const tabsContent = document.querySelectorAll('.section1__tabs-content');

  tabsContainer.addEventListener('click', function (e) {
    e.stopPropagation();

    const clickedTab = e.target.closest('.section1__tab');

    if (!clickedTab) return;

    // removing active classes
    tabs.forEach(tab => tab.classList.remove('section1__tab--active'));
    tabsContent.forEach(content =>
      content.classList.remove('section1__tabs-content--active'),
    );

    // activating tab
    clickedTab.classList.add('section1__tab--active');
    // activating content area
    document
      .querySelector(`.section1__tabs-content--${clickedTab.dataset.tab}`)
      .classList.add('section1__tabs-content--active');
  });
}
activateTabs1();
