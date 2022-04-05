({
    afterRender: function(component) {
        this.superAfterRender();
        
        document.addEventListener('scroll', function() {
            var currentPosition = document.documentElement.scrollTop;

            if(currentPosition > 80) {
                component.set("v.isScroll", true);
            } else {
                // 평상시
                component.set("v.isScroll", false);
            }
        })
    }
})
