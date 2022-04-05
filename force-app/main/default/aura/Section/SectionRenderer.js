({
    afterRender: function(component) {
        this.superAfterRender();
        
        document.addEventListener('scroll', function() {
            var currentPosition = document.documentElement.scrollTop;
            
            if(currentPosition > window.pageYOffset + document.querySelector('.item-list-header').getBoundingClientRect().top - 45) {         
                component.set("v.isHidedNavShow", true);

                var elTop = window.pageYOffset + document.querySelector('.item-list-header').getBoundingClientRect().top - 45;

                if(window.pageYOffset - elTop <= 64) {
                    document.querySelector('.sticky-tab .over-sticky-tab').style.height = 64 - (window.pageYOffset - elTop) + 'px';
                } else if(window.pageYOffset - elTop > 64) {
                    document.querySelector('.sticky-tab .over-sticky-tab').style.height = '0px'; 
                }
            } else {
                component.set("v.isHidedNavShow", false);
            }
        })
    }
})
