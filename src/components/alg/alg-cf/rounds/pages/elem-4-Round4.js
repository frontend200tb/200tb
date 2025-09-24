import cf4a    from '../../el-cf/el-cf4a.html';
import cf4b    from '../../el-cf/el-cf4b.html';
import cf4c    from '../../el-cf/el-cf4c.html';
import cf4d    from '../../el-cf/el-cf4d.html';

export default function inElem() {
  const t1 = document.querySelector('.t1');
  const t2 = document.querySelector('.t2');
  const t3 = document.querySelector('.t3');
  const t4 = document.querySelector('.t4');

  t1.innerHTML = cf4a;
  t2.innerHTML = cf4b;
  t3.innerHTML = cf4c;
  t4.innerHTML = cf4d;
}
