import cf3a    from '../../el-cf/el-cf3a.html';
import cf3b    from '../../el-cf/el-cf3b.html';
import cf3c    from '../../el-cf/el-cf3c.html';
import cf3d    from '../../el-cf/el-cf3d.html';

export default function inElem() {
  const t1 = document.querySelector('.t1');
  const t2 = document.querySelector('.t2');
  const t3 = document.querySelector('.t3');
  const t4 = document.querySelector('.t4');

  t1.innerHTML = cf3a;
  t2.innerHTML = cf3b;
  t3.innerHTML = cf3c;
  t4.innerHTML = cf3d;
}
