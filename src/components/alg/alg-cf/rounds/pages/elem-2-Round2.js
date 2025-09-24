import cf2a    from '../../el-cf/el-cf2a.html';
import cf2b    from '../../el-cf/el-cf2b.html';
import cf2c    from '../../el-cf/el-cf2c.html';

export default function inElem() {
  const t1 = document.querySelector('.t1');
  const t2 = document.querySelector('.t2');
  const t3 = document.querySelector('.t3');

  t1.innerHTML = cf2a;
  t2.innerHTML = cf2b;
  t3.innerHTML = cf2c;
}
