({
    initPosts : function(component, event) {
        var posts = [
            {
                id: 1,
                title: "퀴즈로 풀어보는 소재 이야기_EM 편",
                img: $A.get('$Resource.image1'),
                category: ["프로모션", "카탈로그", "전문자료"]
            },
            {
                id: 2,
                title: "친환경 자동차 소재로 지구를 지켜라",
                img: $A.get('$Resource.image2'),
                category: ["프로모션", "카탈로그"]
            },
            {
                id: 3,
                title: "EM 공장 제조 공정",
                img: $A.get('$Resource.image3'),
                category: ["프로모션"]
            },
            {
                id: 4,
                title: "[ABS, PC, LUMID] 바람을 조절해..",
                img: $A.get('$Resource.image4'),
                category: ["프로모션", "카탈로그", "전문자료"]
            },
            {
                id: 5,
                title: "[LUPOX] 전기와 전장품의 커플매..",
                img: $A.get('$Resource.image5'),
                category: ["프로모션", "카탈로그"]
            },
            {
                id: 6,
                title: "[LUMID] 엔진의 열을 알맞게 유지..",
                img: $A.get('$Resource.image6'),
                category: ["프로모션"]
            },
            {
                id: 7,
                title: "퀴즈로 풀어보는 소재 이야기_EM 편",
                img: $A.get('$Resource.image1'),
                category: ["프로모션", "카탈로그", "전문자료"]
            },
            {
                id: 8,
                title: "친환경 자동차 소재로 지구를 지켜라",
                img: $A.get('$Resource.image2'),
                category: ["프로모션", "카탈로그"]
            },
            {
                id: 9,
                title: "EM 공장 제조 공정",
                img: $A.get('$Resource.image3'),
                category: ["프로모션"]
            },
            {
                id: 10,
                title: "[ABS, PC, LUMID] 바람을 조절해..",
                img: $A.get('$Resource.image4'),
                category: ["프로모션", "카탈로그", "전문자료"]
            },
            {
                id: 11,
                title: "[LUPOX] 전기와 전장품의 커플매..",
                img: $A.get('$Resource.image5'),
                category: ["프로모션", "카탈로그"]
            },
            {
                id: 12,
                title: "[LUMID] 엔진의 열을 알맞게 유지..",
                img: $A.get('$Resource.image6'),
                category: ["프로모션"]
            },
            {
                id: 13,
                title: "퀴즈로 풀어보는 소재 이야기_EM 편",
                img: $A.get('$Resource.image1'),
                category: ["프로모션", "카탈로그", "전문자료"]
            },
            {
                id: 14,
                title: "친환경 자동차 소재로 지구를 지켜라",
                img: $A.get('$Resource.image2'),
                category: ["프로모션", "카탈로그"]
            },
            {
                id: 15,
                title: "EM 공장 제조 공정",
                img: $A.get('$Resource.image3'),
                category: ["프로모션"]
            },
            {
                id: 16,
                title: "[ABS, PC, LUMID] 바람을 조절해..",
                img: $A.get('$Resource.image4'),
                category: ["프로모션", "카탈로그", "전문자료"]
            },
            {
                id: 17,
                title: "[LUPOX] 전기와 전장품의 커플매..",
                img: $A.get('$Resource.image5'),
                category: ["프로모션", "카탈로그"]
            },
            {
                id: 18,
                title: "[LUMID] 엔진의 열을 알맞게 유지..",
                img: $A.get('$Resource.image6'),
                category: ["프로모션"]
            },
        ];

        component.set("v.posts", posts);

        setInterval(function() {
            var slideWidth = 1448 / 3 - 13;

            var movePx = component.get("v.movePx");
            var currentIndex = component.get("v.currentIndex");

            document.getElementById("slider").style.left = String(movePx - slideWidth) + 'px';
            document.getElementById("slider").style.transition = 'all 0.25s linear';

            component.set("v.movePx", movePx - slideWidth);
            component.set("v.currentIndex", ++currentIndex);

            if(currentIndex === 6) {
                setTimeout(function() {
                    document.getElementById("slider").style.left ='-2824px';
                    document.getElementById("slider").style.transition = "0ms";

                    component.set("v.movePx", -2824);
                    component.set("v.currentIndex", 0);
                }, 250)
            }
        }, 3000)
    },
    onClickPrev: function(component) {
        var slideWidth = 1448 / 3 - 13;

        var movePx = component.get("v.movePx");
        var currentIndex = component.get("v.currentIndex");

        document.getElementById("slider").style.left = String(movePx + slideWidth) + 'px';
        document.getElementById("slider").style.transition = 'all 0.25s linear';

        component.set("v.movePx", movePx + slideWidth);
        component.set("v.currentIndex", --currentIndex);

        if(currentIndex === -6) {
            setTimeout(function() {
                document.getElementById("slider").style.left ='-2824px';
                document.getElementById("slider").style.transition = "0ms";

                component.set("v.movePx", -2824);
                component.set("v.currentIndex", 0);
            }, 250)
        }
    },
    onClickNext: function(component) {
        var slideWidth = 1448 / 3 - 13;

        var movePx = component.get("v.movePx");
        var currentIndex = component.get("v.currentIndex");

        document.getElementById("slider").style.left = String(movePx - slideWidth) + 'px';
        document.getElementById("slider").style.transition = 'all 0.25s linear';

        component.set("v.movePx", movePx - slideWidth);
        component.set("v.currentIndex", ++currentIndex);

        if(currentIndex === 6) {
            setTimeout(function() {
                document.getElementById("slider").style.left ='-2824px';
                document.getElementById("slider").style.transition = "0ms";

                component.set("v.movePx", -2824);
                component.set("v.currentIndex", 0);
            }, 250)
        }
    }
})
