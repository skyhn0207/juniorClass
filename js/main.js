const id = document.getElementById('uid');
const pw = document.getElementById('pwd');
const logBtn = document.getElementById('login_btn')
const user1 = {
  id: "sky@0207",
  pw: "950207",
  name: "이하늘",
}

//login
const login = () => {
  logBtn.addEventListener('click',()=>{
    if(id.value===user1.id && pw.value===user1.pw) {
      alert(`${user1.name}님 어서오세요.`)
      
    }
    else {
      alert('아이디와 비밀번호가 일치하지않습니다.');
    }
    id.value = ""
    pw.value = ""
    logBtn.disabled = true;
    logBtn.style.backgroundColor = 'rgb(255,255,255)'
  })
}
login();

const isActiveLogin = () => {
  let idVal = id.value;
  let pwVal = pw.value;
  if(
    (idVal&&pwVal)&&
    (idVal.includes('@')&&idVal.length>=5)&&
    (pwVal.length>=5)) {
      logBtn.disabled = false;
      logBtn.style.backgroundColor = 'rgb(66,54,48)'
    }else {
      logBtn.disabled = true;
      logBtn.style.backgroundColor = 'rgb(255,255,255)'
    }
}

const init = () => {
  id.addEventListener('input',isActiveLogin);
  pw.addEventListener('input',isActiveLogin);
  id.addEventListener('keyup',isActiveLogin);
  pw.addEventListener('keyup',isActiveLogin);
}
init();


//QR
const popup = document.querySelector('.popup'),
      qr = document.querySelector('.qr'),
      qrBtn = document.querySelector('.qr_loginP_btn'),
      back = document.querySelector('.go_back'),
      popCloseBtn = document.querySelector('.pop_close_btn'),
      interval = document.querySelector('.interval');

const qrLogin = () => {
  qrBtn.addEventListener('click',()=>{
    popup.style.display = 'block';
    setInterval(()=>{
      
    },1000)
  })
}
qrLogin();

const qrState = () => {
  popup.style.display = 'none';
}

const qrClose = () => {
  back.addEventListener('click',qrState);
  popCloseBtn.addEventListener('click',qrState)
}
qrClose();