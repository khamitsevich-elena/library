console.log(`Score: 155`)

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu > ul > li'),
    menuItem2 = document.querySelectorAll('.menu > div > .close'),
    burger = document.querySelector('.burger'),
    user = document.querySelectorAll('.user'),
    register = document.querySelectorAll('.register'),
    maincontainer = document.querySelector('.maincontainer'),
    userAuth = document.querySelectorAll('.userAuth'),
    modalRegisterBtn = document.querySelector('.modalRegister > .modalRegister_card > .modalRegister_card_input_btn'),
    modalRegister = document.querySelector('.modalRegister'),
    login = document.querySelectorAll('.login'),
    myprofile = document.querySelector('.myprofile'),
    modalProfile = document.querySelector('.modalProfile'),
    nameProfile = document.querySelector('.modalProfile > .avatar > .name'),
    fullnameProfile = document.querySelector('.modalProfile > .avatar > .fullname'),
    cardnumberNumber = document.querySelector('.cardnumber_number'),
    logout = document.querySelector('.logout'),
    modalLoginBtnclose = document.querySelector('.modalLogin_btnclose'),
    modalProfileBtnclose = document.querySelector('.modalProfile_btnclose'),
    modalLoginBtn = document.querySelector('.modalLogin > .modalLogin_card > .modalLogin_card_input_btn'),
    modalLogin = document.querySelector('.modalLogin'),
    modalRegisterBtnclose = document.querySelector('.modalRegister_btnclose'),
    dropMenuProfilenoAuth = document.querySelector('.dropMenuProfilenoAuth'),
    dropMenuProfileAuth = document.querySelector('.dropMenuProfileAuth'),
    captiondropMenuProfileAuth = document.querySelector('.dropMenuProfileAuth > h4'),
    about1440one = document.querySelectorAll('.about_images.for1440 > .one > img'),
    about1440two = document.querySelectorAll('.about_images.for1440 > .two > img'),
    about1440three = document.querySelectorAll('.about_images.for1440 > .three > img'),
    about1440pagination = document.querySelectorAll('.about_pagination_for1440 > div > button'),
    menuItemforwidthlower768 = document.querySelectorAll('.for640'),
    about768lefttoggle = document.querySelector('.about_images.for768 > .left'),
    about768path = document.querySelectorAll('.about_images.for768 > svg > path'),
    about768righttoggle = document.querySelector('.about_images.for768 > .right'),
    about768pagination = document.querySelectorAll('.images_for768 > .about_pagination > .about_pagination_button > button'),
    about768img = document.querySelectorAll('.images_for768 > .about_image > img'),
    favouritesSeason = document.querySelectorAll('.favorites > form > .inputs > .input > input'),
    favouritescontent = document.querySelectorAll('.favorites_items_container > .favorites_items'),
    favorites_item_buttons = document.querySelectorAll('.favorites_item_button');

    localStorage.setItem('userOn', 'false')

const init = {
    initSeason: 'winter',
    initimgabout1440prev: 0,
    initimgabout1440next: undefined,
    initabout768imgprev:0,
    initabout768imgnext:undefined,
    activemodalRegister: false,
    currentUser: {}
}

function checkWidth(){
    if(JSON.parse(localStorage.getItem(('currentuser'))) && JSON.parse(localStorage.getItem(('currentuser'))) !=''){
    if(window.innerWidth < 1440){
    userAuth.forEach(item => {
        if(!item.classList.contains('for1440')){
        item.style.display = "block"
        }
        if(item.classList.contains('for1440')) {
            item.style.display = "none"
        }})
    user.forEach(item => {
                    item.style.display = "none"
                })
    }
    if(window.innerWidth >= 1440){
        userAuth.forEach(item => {
            if(item.classList.contains('for1440')){
            item.style.display = "block"
            }
            if(!item.classList.contains('for1440')){ item.style.display = "none"}
        })
        user.forEach(item => {
                    item.style.display = "none"
                    }
                )
    }
}
}

function changeUser(){
if(JSON.parse(localStorage.getItem('currentuser'))){
    nameProfile.innerText = (JSON.parse(localStorage.getItem(('currentuser')))).name.slice(0,1).toUpperCase()+(JSON.parse(localStorage.getItem(('currentuser')))).surname.slice(0,1).toUpperCase()
    fullnameProfile.innerText = JSON.parse(localStorage.getItem(('currentuser'))).name+' '+JSON.parse(localStorage.getItem(('currentuser'))).surname
    cardnumberNumber.innerText =  (JSON.parse(localStorage.getItem(('currentuser'))).cardnumber).toUpperCase()   
    userAuth.forEach(item => {
        item.innerText = (JSON.parse(localStorage.getItem(('currentuser'))).name.slice(0,1)).toUpperCase()+(JSON.parse(localStorage.getItem(('currentuser'))).surname.slice(0,1)).toUpperCase()
        })
        checkWidth() 
}
}

let ConvertNumber = function (num) {
    return {
        from : function (baseFrom) {
            return {
                to : function (baseTo) {
                    return parseInt(num, baseFrom).toString(baseTo);
                }
            };
        }
    };
};

ConvertNumber.dec2hex = function (num) {
    return ConvertNumber(num).from(10).to(16);
};

logout.addEventListener('click', (e) => {
    dropMenuProfileAuth.classList.remove('dropMenuProfileAuth_active')
    localStorage.setItem('currentuser','')
    localStorage.setItem('userOn', 'false')
    userAuth.forEach(item => {
        item.style.display = "none"})
        
    if(window.innerWidth < 1440){
        user.forEach(item => {
            if(item.classList.contains('for1440')){
                        item.style.display = "none"}
                        else{
                            item.style.display = "block"
                        }
                    })
        }
        if(window.innerWidth >= 1440){
            user.forEach(item => {
                if(item.classList.contains('for1440')){
                            item.style.display = "block"
                        }
                        if(item.classList.contains('for768') || item.classList.contains('for640')){
                                item.style.display = "none" 
                            }
                        })
            }
            changeUser()
})

userAuth.forEach(item => {
    item.addEventListener('mousemove',(e) => {
        e.target.title = init.currentUser.name + ' ' + init.currentUser.surname
})})
    favouritesSeason.forEach(item => {
            item.addEventListener('click', (e) => {
            init.initSeason = e.target.id
            favouritescontent.forEach(item=>{
                item.classList.remove('animationfadeout')
                item.classList.remove('animationfadein')
                if(!item.classList.contains(init.initSeason)){
                    item.classList.add('animationfadeout')
                    setTimeout(() => item.style.display = "none", 1000);
            }
        else{
            setTimeout(() => item.style.display = "grid", 1000);
            setTimeout(() => item.classList.add('animationfadein'), 1000);
        }})
        })})

        modalRegisterBtn.addEventListener('click', (e) => {
            if(document.getElementById('name').value !="" && document.getElementById('surname').value!="" &&  document.getElementById('email').value.indexOf('@') && document.getElementById('password').value.length >=8){
                e.preventDefault()
                init.currentUser.name = document.getElementById('name').value
	            init.currentUser.surname = document.getElementById('surname').value
	            init.currentUser.email = document.getElementById('email').value
                init.currentUser.password = document.getElementById('password').value
                init.currentUser.cardnumber = ConvertNumber.dec2hex(Math.floor(Math.random() * 100000000000)).toUpperCase()
                localStorage.setItem(init.currentUser.email, JSON.stringify(init.currentUser))
                localStorage.setItem('currentuser', JSON.stringify(init.currentUser))
                captiondropMenuProfileAuth.innerText = JSON.parse(localStorage.getItem(('currentuser'))).cardnumber
                localStorage.setItem(init.currentUser.cardnumber, JSON.stringify(init.currentUser))
                maincontainer.classList.remove('shadow')
                modalRegister.classList.remove('modalRegister_on')
                document.getElementById('name').value = ""
                document.getElementById('surname').value = ""
                document.getElementById('email').value = ""
                document.getElementById('password').value = ""       
                changeUser()
        }
        })

        modalLoginBtn.addEventListener('click', (e) => {
            e.preventDefault()
            if(localStorage.getItem(document.getElementById('e-mail_or_readers_card').value)){
                if(document.getElementById('password_login').value == (JSON.parse(localStorage.getItem((document.getElementById('e-mail_or_readers_card').value))).password)){
                localStorage.setItem('currentuser', JSON.stringify(JSON.parse(localStorage.getItem(document.getElementById('e-mail_or_readers_card').value))))
                localStorage.setItem('userOn', 'true')
                captiondropMenuProfileAuth.innerText = JSON.parse(localStorage.getItem(('currentuser'))).cardnumber
                maincontainer.classList.remove('shadow');
                modalLogin.classList.remove('modalLogin_on');
                init.currentUser.name = JSON.parse(localStorage.getItem((document.getElementById('e-mail_or_readers_card').value))).name
	            init.currentUser.surname = JSON.parse(localStorage.getItem((document.getElementById('e-mail_or_readers_card').value))).surname
	            init.currentUser.email = JSON.parse(localStorage.getItem((document.getElementById('e-mail_or_readers_card').value))).email
                init.currentUser.password = JSON.parse(localStorage.getItem((document.getElementById('e-mail_or_readers_card').value))).password
                init.currentUser.cardnumber = JSON.parse(localStorage.getItem((document.getElementById('e-mail_or_readers_card').value))).cardnumber
                localStorage.setItem('currentuser', JSON.stringify(init.currentUser))
                changeUser()
                document.getElementById('e-mail_or_readers_card').value = ''
                document.getElementById('password_login').value = ''
            }}
        })

        about768lefttoggle.addEventListener('click', (e) => {
            if(about768pagination[0].classList.contains('active')){
                e.stopPropagation()
                }
                else{
            about768pagination[init.initabout768imgprev].classList.remove('active');
            init.initabout768imgnext--
            about768pagination[init.initabout768imgnext].classList.add('active');
       
                if(e.target.classList.contains('first')){
                    if(init.initabout768imgprev!=0){
                        init.initabout768imgnext=0
                    }
                }
                if(e.target.classList.contains('second')){
                    if(init.initabout768imgprev!=1){
                        init.initabout768imgnext=1
                    }
                }
                if(e.target.classList.contains('third')){
                    if(init.initabout768imgprev!=2){
                        init.initabout768imgnext=2
                    }
                }
                if(e.target.classList.contains('fourth')){
                    if(init.initabout768imgprev!=3){
                        init.initabout768imgnext=3
                    }
                }
                if(e.target.classList.contains('fifth')){
                    if(init.initabout768imgprev!=4){
                        init.initabout768imgnext=4
                    }
                }
        
                for(let i=0;i<5;i++){
                    if(i==init.initabout768imgnext){
                        about768img[i].style.zIndex = "2";
                        about768img[i].classList.add('animationfadein') 
                }
                if(i==init.initabout768imgprev){
                    about768img[i].style.zIndex = "1";
                    about768img[i].classList.remove('animationfadein') 
        
            }
                if(i!=init.initabout768imgnext & i!=init.initabout768imgprev){
                    about768img[i].style.zIndex = "0";
                    about768img[i].classList.remove('animationfadein') 
                }
        }
            init.initabout768imgprev = init.initabout768imgnext
            check768()
            check768_2()
    }
})

about768righttoggle.addEventListener('click', (e) => {
    if(about768pagination[4].classList.contains('active')){
    e.stopPropagation()
    }
    else{
    about768pagination[init.initabout768imgprev].classList.remove('active');
    if(init.initabout768imgnext){
    init.initabout768imgnext++}
    else{
        init.initabout768imgnext=1
    }
    about768pagination[init.initabout768imgnext].classList.add('active');

        if(e.target.classList.contains('first')){
            if(init.initabout768imgprev!=0){
                init.initabout768imgnext=0
            }
        }
        if(e.target.classList.contains('second')){
            if(init.initabout768imgprev!=1){
                init.initabout768imgnext=1
            }
        }
        if(e.target.classList.contains('third')){
            if(init.initabout768imgprev!=2){
                init.initabout768imgnext=2
            }
        }
        if(e.target.classList.contains('fourth')){
            if(init.initabout768imgprev!=3){
                init.initabout768imgnext=3
            }
        }
        if(e.target.classList.contains('fifth')){
            if(init.initabout768imgprev!=4){
                init.initabout768imgnext=4
            }
        }

        for(let i=0;i<5;i++){
            if(i==init.initabout768imgnext){
                about768img[i].style.zIndex = "2";
                about768img[i].classList.add('animationfadein') 
        }
        if(i==init.initabout768imgprev){
            about768img[i].style.zIndex = "1";
            about768img[i].classList.remove('animationfadein') 

    }
        if(i!=init.initabout768imgnext & i!=init.initabout768imgprev){
            about768img[i].style.zIndex = "0";
            about768img[i].classList.remove('animationfadein') 
        }
}
    init.initabout768imgprev = init.initabout768imgnext
    check768()
    check768_2()
}
})

        let check768 = () =>{
        if(init.initabout768imgprev==0 || init.initabout768imgnext==0){
            about768path[0].classList.remove('arrownotdisabled')
            about768path[0].classList.add('arrowdisabled')
        }
        if(init.initabout768imgprev==4 || init.initabout768imgnext==4){
            about768path[1].classList.remove('arrownotdisabled')
            about768path[1].classList.add('arrowdisabled')
        }
    }
    check768()
    let check768_2 = () =>{
        if(init.initabout768imgprev!==0 || init.initabout768imgnext!==0){
            about768path[0].classList.remove('arrowdisabled')
            about768path[0].classList.add('arrownotdisabled')
        }
        if(init.initabout768imgprev!==4 || init.initabout768imgnext!==4){
            about768path[1].classList.remove('arrowdisabled')
            about768path[1].classList.add('arrownotdisabled')
        }
    }
    about768pagination.forEach(item => {
        item.addEventListener('click', (e) => {
        if(!item.classList.contains('active')){
        about768pagination.forEach(item=>{
            item.classList.remove('active');
        })
        e.target.classList.add('active');

        if(e.target.classList.contains('first')){
            if(init.initabout768imgprev!=0){
                init.initabout768imgnext=0
            }
        }
        if(e.target.classList.contains('second')){
            if(init.initabout768imgprev!=1){
                init.initabout768imgnext=1
            }
        }
        if(e.target.classList.contains('third')){
            if(init.initabout768imgprev!=2){
                init.initabout768imgnext=2
            }
        }
        if(e.target.classList.contains('fourth')){
            if(init.initabout768imgprev!=3){
                init.initabout768imgnext=3
            }
        }
        if(e.target.classList.contains('fifth')){
            if(init.initabout768imgprev!=4){
                init.initabout768imgnext=4
            }
        }

        for(let i=0;i<5;i++){
            if(i==init.initabout768imgnext){
                about768img[i].style.zIndex = "2";
                about768img[i].classList.add('animationfadein') 
        }
        if(i==init.initabout768imgprev){
            about768img[i].style.zIndex = "1";
            about768img[i].classList.remove('animationfadein') 

    }
        if(i!=init.initabout768imgnext & i!=init.initabout768imgprev){
            about768img[i].style.zIndex = "0";
            about768img[i].classList.remove('animationfadein') 
        }
}

    }
    init.initabout768imgprev = init.initabout768imgnext
    check768()
    check768_2()
    })})
         
    about1440pagination.forEach(item => {
        item.addEventListener('click', (e) => {
        if(!item.classList.contains('active')){
        about1440pagination.forEach(item=>{
            item.classList.remove('active');
        })
        e.target.classList.add('active');

        if(e.target.classList.contains('first')){
            if(init.initimgabout1440prev!=0){
                init.initimgabout1440next=0
            }
        }
        if(e.target.classList.contains('second')){
            if(init.initimgabout1440prev!=1){
                init.initimgabout1440next=1
            }
        }
        if(e.target.classList.contains('third')){
            if(init.initimgabout1440prev!=2){
                init.initimgabout1440next=2
            }
        }

        for(let i=0;i<3;i++){
            if(i==init.initimgabout1440next){             
                about1440one[i].style.zIndex = "2";
                about1440one[i].classList.add('animationfadein')
                about1440two[i].style.zIndex = "2";
                about1440two[i].classList.add('animationfadein')
                about1440three[i].style.zIndex = "2";
                about1440three[i].classList.add('animationfadein')
        }
        if(i==init.initimgabout1440prev){
            about1440one[i].style.zIndex = "1";
            about1440one[i].classList.remove('animationfadein')
            about1440two[i].style.zIndex = "1";
            about1440two[i].classList.remove('animationfadein')
            about1440three[i].style.zIndex = "1";
            about1440three[i].classList.remove('animationfadein')

    }
        if(i!=init.initimgabout1440prev & i!=init.initimgabout1440next){
            about1440one[i].style.zIndex = "0";
            about1440one[i].classList.remove('animationfadein')
            about1440two[i].style.zIndex = "0";
            about1440two[i].classList.remove('animationfadein')
            about1440three[i].style.zIndex = "0";
            about1440three[i].classList.remove('animationfadein')
        }
}

    }
    init.initimgabout1440prev = init.initimgabout1440next
    })})

window.addEventListener('resize', () => {
    if(document.documentElement.clientWidth<=767){
        menuItemforwidthlower768.forEach(item => {
            item.classList.add('for640_active')
            })
    }
    else{
        menuItemforwidthlower768.forEach(item => {
        item.classList.remove('for640_active')
        })

    }
});

    burger.addEventListener('click', () => {
        menu.classList.toggle('menu_active');
        dropMenuProfilenoAuth.classList.remove('dropMenuProfilenoAuth_active')
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.toggle('menu_active');
        })
    })

    menuItem2.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.toggle('menu_active');
        })
    })

    user.forEach(item => {
        item.addEventListener('click', () => {
            dropMenuProfilenoAuth.classList.toggle('dropMenuProfilenoAuth_active')
            menu.classList.remove('menu_active');
        })
        })
    userAuth.forEach(item => {
        item.addEventListener('click', () => {
            dropMenuProfileAuth.classList.toggle('dropMenuProfileAuth_active');
            menu.classList.remove('menu_active');

        })
    })

    register.forEach(item => {
        item.addEventListener('click', () => {
            maincontainer.classList.add('shadow');
            modalRegister.classList.add('modalRegister_on');
            dropMenuProfilenoAuth.classList.remove('dropMenuProfilenoAuth_active');
            modalLogin.classList.remove('modalLogin_on');
        })
    })
    
       favorites_item_buttons.forEach(item => {
        item.addEventListener('click', () => {
            if(localStorage.getItem('userOn')=='false'){
            maincontainer.classList.add('shadow');
            modalLogin.classList.add('modalLogin_on');
            dropMenuProfilenoAuth.classList.remove('dropMenuProfilenoAuth_active')
            modalRegister.classList.remove('modalRegister_on');
            }
        })
    })

    login.forEach(item => {
        item.addEventListener('click', () => {
            maincontainer.classList.add('shadow');
            modalLogin.classList.add('modalLogin_on');
            dropMenuProfilenoAuth.classList.remove('dropMenuProfilenoAuth_active')
            modalRegister.classList.remove('modalRegister_on');
        })
    })

    myprofile.addEventListener('click', () => {
        maincontainer.classList.add('shadow');
        modalProfile.classList.add('modalProfile_active');
        dropMenuProfileAuth.classList.remove('dropMenuProfileAuth_active')
    })

    modalProfileBtnclose.addEventListener('click', () => {
        maincontainer.classList.remove('shadow');
        modalProfile.classList.remove('modalProfile_active');
    })

    modalRegisterBtnclose.addEventListener('click', () => {
            maincontainer.classList.remove('shadow');
            modalRegister.classList.remove('modalRegister_on');
        })
    
    modalLoginBtnclose.addEventListener('click', () => {
            maincontainer.classList.remove('shadow');
            modalLogin.classList.remove('modalLogin_on');
        })
    document.addEventListener( 'click', (e) => {
        const modalProfilearea = e.composedPath().includes(modalProfile);
        const myprofilearea = e.composedPath().includes(myprofile);
        const menuarea = e.composedPath().includes(menu);
        const burgerarea = e.composedPath().includes(burger);
        const userarea1 = e.composedPath().includes(user[0]);
        const userarea2 = e.composedPath().includes(user[1]);
        const userarea3 = e.composedPath().includes(user[2]);
        const modalLoginarea = e.composedPath().includes(modalLogin);
        const loginarea1 = e.composedPath().includes(login[0]);
        const loginarea2 = e.composedPath().includes(login[1]);
        const loginarea3 = e.composedPath().includes(login[2]);
        const modalRegisterarea = e.composedPath().includes(modalRegister);
        const registerarea1 = e.composedPath().includes(register[0]);
        const registerarea2 = e.composedPath().includes(register[1]);
        const registerarea3 = e.composedPath().includes(register[2]);
        const dropMenuProfilenoAutharea = e.composedPath().includes(dropMenuProfilenoAuth);
        const dropMenuProfileAutharea = e.composedPath().includes(dropMenuProfileAuth);
        const profileautharea1 = e.composedPath().includes(userAuth[0]);
        const profileautharea2 = e.composedPath().includes(userAuth[1]);
        const profileautharea3 = e.composedPath().includes(userAuth[2]);
        if(! dropMenuProfileAutharea && ! profileautharea1 && ! profileautharea2 && ! profileautharea3){
            dropMenuProfileAuth.classList.remove('dropMenuProfileAuth_active')
        }
        if ( ! menuarea && ! burgerarea) {
            menu.classList.remove('menu_active');
        }
        if ( ! userarea1 && ! userarea2 && ! userarea3 && ! dropMenuProfilenoAutharea && ! burgerarea) {
            dropMenuProfilenoAuth.classList.remove('dropMenuProfilenoAuth_active')
        }
        if ( ! modalRegisterarea && ! registerarea1 && ! registerarea2 && ! registerarea3 && ! loginarea1 && ! loginarea2 && ! loginarea3 && ! modalLoginarea && !e.target.classList.contains('favorites_item_button') && !myprofilearea && !modalProfilearea) {
            maincontainer.classList.remove('shadow');
            modalRegister.classList.remove('modalRegister_on');
            modalLogin.classList.remove('modalLogin_on');
            modalProfile.classList.remove('modalProfile_active');
        }
    })
})
