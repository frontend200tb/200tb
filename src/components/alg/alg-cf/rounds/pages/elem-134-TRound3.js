import a    from '../../el-cf/el-cf134a.html';
import b    from '../../el-cf/el-cf134b.html';
import c    from '../../el-cf/el-cf134c.html';

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

}
