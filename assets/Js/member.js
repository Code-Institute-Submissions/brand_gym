        
        // Variables
        const header = document.querySelector('header');
        const memberBtns = document.querySelectorAll('.member-card-btn');
        const memberCups = document.querySelectorAll('.member-card-logo');
        const revealBtn = document.querySelector('.member-reveal-btn');
        const memberSliders = document.querySelectorAll('.wide-slidein');
        const mobileWideConts = document.querySelectorAll('.mobile-wide-cont');
        
        // console.log('lsdjlfjslhlkdjfhg;lkwjdhfgklhkjhakfa.');
        
       // Functions        
       function hideMemberBtnsCups() {  // Hides Cups and Buttons Behind Card
           let index = Array.from(memberBtns).indexOf(this);
           
           if (screen.width <= 576) {
               mobileWideAppear(index);
               header.style.opacity = '0';
           } 
           else {
               memberContSlide(index);
           } 
           
           revealBtn.style.opacity = '1';
           revealBtn.style.zIndex = '9999999999';
           
            memberBtns.forEach(btn => {
                this !== btn ? btn.classList.add('member-card-btn-hide') : btn.classList.remove('member-card-btn-hide');
            });
            
            memberCups.forEach(btn => btn.classList.add('member-card-logo-hide'));
            revealBtn.classList.add('member-reveal-btn-reveal');
           
            switch (index) {  // Changes Button Txt to Price
                case 0:
                    this.innerHTML = "$85.50 &#8592";
                    break;
                case 1:
                    this.innerHTML = "$177.90 &#8592";
                    break;
                case 2:
                    this.innerHTML = "$315.00 &#8592";
            }
        }
        
        
        function memberContSlide(i) {  // Slides in Chosen Wide Container
            let chosenSlider = memberSliders[i];
            console.log(chosenSlider, i, 'lfshdlfhsldflsdf');
            chosenSlider.classList.remove('member-cards-wide-slidein');
        }
        
        
        function revealMemberBtnsCups() {  // Hides all Mobile Wides; Buttons/Cups back to default; 
            revealBtn.style.opacity = '0';
            header.style.opacity = '1';  
            mobileWideConts.forEach(w => w.classList.add('disp-none'));
            revealBtn.classList.remove('mobile-member-reveal-btn');
            memberBtns.forEach(btn => { btn.classList.remove('member-card-btn-hide'); btn.innerHTML = "See More &#8594" });
            memberCups.forEach(btn => btn.classList.remove('member-card-logo-hide'));
            revealBtn.classList.remove('member-reveal-btn-reveal');
            memberSliders.forEach(sl => sl.classList.add('member-cards-wide-slidein'));
        }
        
        
        // Mobile Function
        function mobileWideAppear(index) {  // Reveals clicked Mobile Wide Container
            mobileWideConts[index].classList.remove('disp-none');
            revealBtn.classList.add('mobile-member-reveal-btn');
        }
        
        
        // Event Listener//
        // Buttons
        memberBtns.forEach(btn => btn.addEventListener('click', hideMemberBtnsCups));
        revealBtn.addEventListener('click', revealMemberBtnsCups);
        