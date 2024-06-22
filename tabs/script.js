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

//===== V1 =====
// this function just for encapsulation tab v2 code
function activateTabs2() {
  const tabsBtnWrapper = document.querySelector('.section2__tabs-btn');
  const tabBtns = document.querySelectorAll('.section2__tabs-btn-item');
  const tabContentItems = document.querySelectorAll(
    '.section2__tabs-content-item',
  );

  tabsBtnWrapper.addEventListener('click', function (e) {
    e.stopPropagation();
    const clickedTab = e.target.closest('.section2__tabs-btn-item');
    if (!clickedTab) return;

    // removing active classes
    tabBtns.forEach(btn =>
      btn.classList.remove('section2__tabs-btn-item--active'),
    );
    tabContentItems.forEach(item =>
      item.classList.remove('section2__tabs-content-item--active'),
    );

    // activating tab
    const id = clickedTab.dataset.button;

    clickedTab.classList.add('section2__tabs-btn-item--active');
    document
      .getElementById(id)
      .classList.add('section2__tabs-content-item--active');
  });
}
activateTabs2();
