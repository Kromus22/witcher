const tabs = option => {
  const {
    selectorTabsBtn,
    activeClassBtn,
    selectorTabsElem,
    activeClassTab,
    callback = () => { },
  } = option

  const tabsBtns = document.querySelectorAll(selectorTabsBtn)
  const tabsElems = document.querySelectorAll(selectorTabsElem)

  tabsBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      for (let i = 0; i < tabsBtns.length; i++) {
        if (tabsBtns[i] === btn) {
          tabsBtns[i].classList.add(activeClassBtn)
          tabsElems[i].classList.add(activeClassTab)
          callback(i)
        } else {
          tabsBtns[i].classList.remove(activeClassBtn)
          tabsElems[i].classList.remove(activeClassTab)
        }
      }
    })
  })
}

export default tabs;