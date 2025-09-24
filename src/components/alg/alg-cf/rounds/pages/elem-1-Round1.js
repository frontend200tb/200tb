import cf1a    from '../../el-cf/el-cf1a.html';
import cf1b    from '../../el-cf/el-cf1b.html';
import cf1c    from '../../el-cf/el-cf1c.html';

export default function inElem() {
  const t1 = document.querySelector('.t1');
  const t2 = document.querySelector('.t2');
  const t3 = document.querySelector('.t3');

  t1.innerHTML = cf1a;
  t2.innerHTML = cf1b;
  t3.innerHTML = cf1c;
}
