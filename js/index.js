import burgerMenu from "./burger.js";
import tabs from "./tabs.js";
import renderTabs from "./renderTabs.js";

burgerMenu(
  '.burger',
  '.navigation__list',
  'burger_active',
  'navigation__list_active'
)

tabs({
  selectorTabsBtn: '.tabs__btn',
  activeClassBtn: 'tabs__btn_active',
  selectorTabsElem: '.tabs__item',
  activeClassTab: 'tabs__item_active',
  callback: renderTabs,
})

renderTabs()