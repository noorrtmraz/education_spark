// header starts
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const navbar = document.querySelector(".navbar");

    menuBtn.addEventListener("click", function () {
        navbar.classList.toggle("active"); // إظهار/إخفاء القائمة
    });
});

/// header ends


$(document).ready(function() {
    $('#calendar').fullCalendar({
      locale: 'ar',  // تغيير اللغة إلى العربية
      defaultView: 'month'
    });
  });



let body = document.body;
let profile = document.querySelector('.header .flex .profile');
document.querySelector('#user-btn').onclick = () => {
    profile.classList.toggle('active');
    searchForm.classList.remove('active');

}

let searchForm = document.querySelector('.header .flex .search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    profile.classList.remove('active');

}

let sideBar = document.querySelector('.side-bar');
document.querySelector('#menu-btn').onclick = () =>{
    sideBar.classList.toggle('active');
    body.classList.toggle('active');

}

document.querySelector('.side-bar .close-btn').onclick = () =>{
    sideBar.classList.toggle('active');
    body.classList.toggle('active');

}


let toggleBtn = document.querySelector('#toggle-btn');
let darkMode = localStorage.getItem('dark-mode');
let logoImg = document.querySelector(".logo img"); // تعريف الشعار


const enabelDarkMode = () =>{
    toggleBtn.classList.replace('fa-sun' , 'fa-moon');
    body.classList.add('dark');
    logoImg.src = "images/logo-dark.png"; // استبدال الشعار في الوضع الداكن
    localStorage.setItem('dark-mode', 'enabled');
   

}


const disableDarkMode = () =>{
    toggleBtn.classList.replace('fa-moon' , 'fa-sun');
    body.classList.remove('dark');
    logoImg.src = "images/spark.png"; // استبدال الشعار في الوضع الداكن
    localStorage.setItem('dark-mode', 'disabled');
   

}

if(darkMode === 'enabled'){
    enabelDarkMode();
}

toggleBtn.onclick = (e) =>{
    let darkMode = localStorage.getItem('dark-mode');
    if(darkMode === 'disabled'){
        enabelDarkMode();
    }else{
        disableDarkMode();
    }
}








// script for login teacher and admin page 


function showForm(userType, element) {
    // إخفاء جميع النماذج مع تأثير سلس
    document.querySelectorAll('.form').forEach(form => {
        form.style.opacity = '0';
        form.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            form.style.display = 'none';
        }, 300);
    });

    // إظهار النموذج المطلوب مع تأثير
    setTimeout(() => {
        let activeForm = userType === 'teacher' ? document.getElementById('teacherForm') : document.getElementById('adminForm');
        activeForm.style.display = 'block';
        setTimeout(() => {
            activeForm.style.opacity = '1';
            activeForm.style.transform = 'translateY(0)';
        }, 50);
    }, 300);

    // تحديث الأيقونات (إزالة التفعيل عن الجميع)
    document.querySelectorAll('.icon').forEach(icon => {
        icon.classList.remove('active-icon');
    });

    // تفعيل الأيقونة المختارة
    element.classList.add('active-icon');

    // تغيير صور الأيقونات بناءً على الاختيار
    document.getElementById('icon1').querySelector('img').src = userType === 'teacher' ? "images/teacher.png" : "images/teacher-off.png";
    document.getElementById('icon2').querySelector('img').src = userType === 'admin' ? "images/manager.png" : "images/manager-off.png";
}

