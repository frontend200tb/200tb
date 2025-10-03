import a    from '../../el-cf/el-cf5a.html';
import b    from '../../el-cf/el-cf5b.html';
import c    from '../../el-cf/el-cf5c.html';
import d    from '../../el-cf/el-cf5d.html';
import e    from '../../el-cf/el-cf5e.html';

export default function inElem() {

  if (document.querySelector('.t1')) {
    document.querySelector('.t1').innerHTML = a;
  }
  if (document.querySelector('.t2')) {
    document.querySelector('.t2').innerHTML = b;
  }
  if (document.querySelector('.t3')) {
    document.querySelector('.t3').innerHTML = c;
  }
  if (document.querySelector('.t4')) {
    document.querySelector('.t4').innerHTML = d;
  }
  if (document.querySelector('.t5')) {
    document.querySelector('.t5').innerHTML = e;
  }

}
