window.onload = function() {
    let home = document.querySelector('.home');
    let menu = document.querySelector('.hamburger');
    let blind = document.querySelector('.blind-menu');
    menu.onclick = function(e) {
        menu.classList.toggle('is-active');
        // if(window.innerWidth >= 1200) {
        //     menu.firstElementChild.classList.toggle('menu-f-line');
        //     menu.firstElementChild.nextElementSibling.classList.toggle('open-menu');
        //     menu.lastElementChild.classList.toggle('menu-l-line');
        // }
        // else {
           
        // }
        blind.classList.toggle('open-menu');
    };
    home.classList.add('home-anima');
    // if (window.innerWidth > 1200) {
         window.onscroll = function() {
            let start = document.documentElement.clientHeight/2;
            // animations items in services
            let design = document.querySelector('.design-img');
            let pp = document.querySelector('.pp-img');
            let prog = document.querySelector('.prog-img');

            // blocks where animations elements
            let services = document.querySelector('.services');
            let about = document.querySelector('.about');

            // Coordinations blocks
            let coordServices = services.getBoundingClientRect();
            let coordAbout = about.getBoundingClientRect();

            // animations items in about
            let aboutText = document.querySelector('.about-text');
            let aboutSkills = document.querySelector('.about-skills');
            let skillsAnima = aboutSkills.getBoundingClientRect().top;
            let fill = document.querySelectorAll('.progress-bar-fill');
            if(window.innerWidth < 1200) {
                let designAnima = design.getBoundingClientRect().top;
                let ppAnima = pp.getBoundingClientRect().top;
                let progAnima = prog.getBoundingClientRect().top;
                if(designAnima <= start) {
                    design.classList.remove('hidden');
                    design.classList.add('anima-play');
                }
                if(ppAnima <= start) {
                    pp.classList.remove('hidden');
                    pp.classList.add('anima-play');
                }
                if(progAnima <= start) {
                    prog.classList.remove('hidden');
                    prog.classList.add('anima-play');
                }
                if(skillsAnima <= start) {
                    fill.forEach(function(item, i) {
                        item.style.width = item.dataset.percent+'%';
                    });
                }
                if(coordAbout.top <= start) {
                    aboutText.classList.add('about-text-anima');
                }
            }
            // animation for services block
            if(window.innerWidth >= 1200) {
                if(coordServices.top <= start) {
                    design.classList.remove('hidden');
                    pp.classList.remove('hidden');
                    prog.classList.remove('hidden');
                    design.classList.add('anima-play');
                    pp.classList.add('anima-play');
                    prog.classList.add('anima-play');
                }
                // animation for about block
                if(coordAbout.top <= start) {
                    fill.forEach(function(item, i) {
                        item.style.width = item.dataset.percent+'%';
                    });
                    aboutText.classList.add('about-text-anima');
                }
            }
        };
    // }
};