/** **************
Скрипт написан для
article class="showhide"
По нажатию на заголовок class="showhide__h"
Показывает/скрывает содержимое class="showhide__text"
****************** */

export default function showHide() {
  const headersShowHideCollection = document.getElementsByClassName('showhide__h');
  const textsShowHideCollection = document.getElementsByClassName('showhide__text');

  const headersShowHide = Array.from(headersShowHideCollection);
  const textsShowHide = Array.from(textsShowHideCollection);

  for (let i = 0; i < headersShowHide.length; i++) {
    headersShowHide[i].addEventListener('click', () => textsShowHide[i].classList.toggle('none'));
  }
}
