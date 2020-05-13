        
        // Variables 
        const footerCont = document.querySelectorAll('.footer-cont');
        const footerContacts = document.querySelectorAll('.footer-contact-cont');
        const footerContactsHideBtn = document.querySelector('.footer-contact-hide-btn');
        const footerContactsRevealBtn = document.querySelector('.footer-contact-reveal-btn');
        const footerBtnCont = document.querySelectorAll('.footer-btn-cont')[1];
        const followUs = document.querySelector('.socials-span');
        
        // Burger Variables
        const burger = document.querySelector('.burger');
        const burgerLines = document.querySelectorAll('.burger-line');
        const mobileSideBar = document.querySelector('.mobile-sidebar');
        
        // Footer Variables 
        const navIcon = document.querySelector('.menu-icon-cont'); 
        const socialsCont = document.querySelector('.socials-cont');
        const footerContactsMobile = document.querySelector('.mobile-footer-contacts');
        const footerToggleMobileBtn = document.querySelector('.mobile-toggle-btn');
        
        
        
//      BUTTONS
        
        // Contacts Buttons
        function revealFooterContacts() {  // Reveals Contacts - Open
            footerContacts.forEach(c => c.classList.remove('footer-contacts-hide'));
            
            footerContactsHideBtn.classList.remove('footer-contacts-hide');
            footerContactsRevealBtn.classList.add('footer-contacts-hide');
            
            // Adds Some Margin L.
            if (screen.width > 992) {
                footerBtnCont.style.marginLeft = "110px";
            }
            
            // 'Follow us' disappears
            if (screen.width > 768) {
                followUs.style.display = 'none';
            }
            
            // Social-Container, Icon, Buttons disappear
            if (screen.width <= 768) {
                navIcon.classList.add('footer-btn-cont-md-toggle');
                footerBtnCont.classList.add('footer-btn-cont-md-toggle');
                socialsCont.classList.add('footer-btn-cont-md-toggle');
            }
        }
        
        
        function hideFooterContacts() {  // Hides Contacts - Close 
            // Making sure all Contacts are hidden
            footerContacts.forEach(c => c.classList.add('footer-contacts-hide'));
            
            footerContactsHideBtn.classList.add('footer-contacts-hide');
            footerContactsRevealBtn.classList.remove('footer-contacts-hide');
            
            // Return to Original Margin
            if (screen.width > 992) {
                footerBtnCont.style.marginLeft = "50px";
            }
            
            // Makes 'Follow us' visible if over 768px 
            if (screen.width > 768) {
                followUs.style.display = 'block';
            }
            
            // Social-Container, Icon, Buttons appear
            if (screen.width <= 768) {
                navIcon.classList.remove('footer-btn-cont-md-toggle');
                footerBtnCont.classList.remove('footer-btn-cont-md-toggle');
                socialsCont.classList.remove('footer-btn-cont-md-toggle');
                // !!!! ASK SENSEI
                footerContactsHideBtn.style.animationDelay = "0s";
            }
        }
        
        // Footer Contacts Eventlistener
        // Buttons for Controlling Footer Contacts
        footerContactsHideBtn.addEventListener('click', hideFooterContacts);
        footerContactsRevealBtn.addEventListener('click', revealFooterContacts);
        
        
//      BURGER
        
        
        // Burger Functions
        function burgerToggle() {  // Animates Burger; Toggles Sidebar Mobile
            burgerLines[0].classList.toggle('top');
            burgerLines[1].classList.toggle('middle');
            burgerLines[2].classList.toggle('bottom');
            
            mobileSideBar.classList.toggle('footer-btn-cont-md-toggle');
        }
        
        // Burger Eventlistener
        burger.addEventListener('click', burgerToggle);
        
        
        
//      FOOTER
        
        // Footer Functions
        function footerMobile() {  // Toggles Footer for Mobile
                footerContactsMobile.classList.toggle('footer-btn-cont-md-toggle');
        }
        
        // Footer Event Listener
        // Button - Toggles Mobile Footer
        footerToggleMobileBtn.addEventListener('click', footerMobile);
        
        

// ----------------------------------------------------------------------

        // For Login
        const loginBackBtn = document.querySelector('.loginBackBtn');
        
        
        function goBack() {  // Go Back one Page
            window.history.back();
        }


        loginBackBtn.addEventListener('click', goBack);






        
        
        //!!! Ask Sensei
        if (screen.width <= 576) {
            footerContacts.forEach(c => c.classList.remove('footer-contacts-hide'));
        }
        else {
            footerContacts.forEach(c => c.classList.add('footer-contacts-hide'));
        }
        
        
    