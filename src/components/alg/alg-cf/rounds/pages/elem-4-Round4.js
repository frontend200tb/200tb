import a    from '../../el-cf/el-cf4a.html';
import b    from '../../el-cf/el-cf4b.html';
import c    from '../../el-cf/el-cf4c.html';
import d    from '../../el-cf/el-cf4d.html';

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

}
