({
    initPosts : function(component, event, helper) {
        var testArr = [
            {
                id: 1,
                title: "퀴즈로 풀어보는 소재 이야기_EM 편",
                img: "https://placeimg.com/300/380/animals",
                category: ["프로모션", "카탈로그", "전문자료"]
            },
            {
                id: 2,
                title: "친환경 자동차 소재로 지구를 지켜라",
                img: "https://placeimg.com/300/380/arch",
                category: ["프로모션", "카탈로그"]
            },
            {
                id: 3,
                title: "EM 공장 제조 공정",
                img: "https://placeimg.com/300/380/nature",
                category: ["프로모션"]
            },
            {
                id: 4,
                title: "[ABS, PC, LUMID] 바람을 조절해..",
                img: "https://placeimg.com/300/380/people",
                category: ["프로모션", "카탈로그", "전문자료"]
            },
            {
                id: 5,
                title: "[LUPOX] 전기와 전장품의 커플매..",
                img: "https://placeimg.com/300/380/tech",
                category: ["프로모션", "카탈로그"]
            },
            {
                id: 6,
                title: "[LUMID] 엔진의 열을 알맞게 유지..",
                img: "https://placeimg.com/300/380/grayscale",
                category: ["프로모션"]
            },
            {
                id: 7,
                title: "친환경 자동차 소재로 지구를 지키다",
                img: "https://placeimg.com/300/380/sepia",
                category: ["프로모션", "카탈로그", "전문자료"]
            },
            {
                id: 8,
                title: "EM 공장 제조 공정",
                img: "https://placeimg.com/300/380/any",
                category: ["프로모션", "카탈로그"]
            }
            ,{
                id: 9,
                title: "[LUPOX] 전기와 전장품의 커플매..",
                img: "https://placeimg.com/300/380/tech",
                category: ["프로모션", "카탈로그"]
            },
            {
                id: 10,
                title: "[LUMID] 엔진의 열을 알맞게 유지..",
                img: "https://placeimg.com/300/380/grayscale",
                category: ["프로모션"]
            },
            {
                id: 11,
                title: "친환경 자동차 소재로 지구를 지키다",
                img: "https://placeimg.com/300/380/sepia",
                category: ["프로모션", "카탈로그", "전문자료"]
            },
            {
                id: 12,
                title: "EM 공장 제조 공정",
                img: "https://placeimg.com/300/380/any",
                category: ["프로모션", "카탈로그"]
            },
            {
                id: 13,
                title: "[LUPOX] 전기와 전장품의 커플매..",
                img: "https://placeimg.com/300/380/tech",
                category: ["프로모션", "카탈로그"]
            },
            {
                id: 14,
                title: "[LUMID] 엔진의 열을 알맞게 유지..",
                img: "https://placeimg.com/300/380/grayscale",
                category: ["프로모션"]
            },
            {
                id: 15,
                title: "친환경 자동차 소재로 지구를 지키다",
                img: "https://placeimg.com/300/380/sepia",
                category: ["프로모션", "카탈로그", "전문자료"]
            },
            {
                id: 16,
                title: "EM 공장 제조 공정",
                img: "https://placeimg.com/300/380/any",
                category: ["프로모션", "카탈로그"]
            },
            {
                id: 17,
                title: "[LUPOX] 전기와 전장품의 커플매..",
                img: "https://placeimg.com/300/380/tech",
                category: ["프로모션", "카탈로그"]
            },
            {
                id: 18,
                title: "[LUMID] 엔진의 열을 알맞게 유지..",
                img: "https://placeimg.com/300/380/grayscale",
                category: ["프로모션"]
            },
            {
                id: 19,
                title: "친환경 자동차 소재로 지구를 지키다",
                img: "https://placeimg.com/300/380/sepia",
                category: ["프로모션", "카탈로그", "전문자료"]
            },
            {
                id: 20,
                title: "EM 공장 제조 공정",
                img: "https://placeimg.com/300/380/any",
                category: ["프로모션", "카탈로그"]
            },
            {
                id: 21,
                title: "[LUPOX] 전기와 전장품의 커플매..",
                img: "https://placeimg.com/300/380/tech",
                category: ["프로모션", "카탈로그"]
            },
            {
                id: 22,
                title: "[LUMID] 엔진의 열을 알맞게 유지..",
                img: "https://placeimg.com/300/380/grayscale",
                category: ["프로모션"]
            },
            {
                id: 23,
                title: "친환경 자동차 소재로 지구를 지키다",
                img: "https://placeimg.com/300/380/sepia",
                category: ["프로모션", "카탈로그", "전문자료"]
            },
            {
                id: 24,
                title: "EM 공장 제조 공정",
                img: "https://placeimg.com/300/380/any",
                category: ["프로모션", "카탈로그"]
            },
            {
                id: 25,
                title: "[LUPOX] 전기와 전장품의 커플매..",
                img: "https://placeimg.com/300/380/tech",
                category: ["프로모션", "카탈로그"]
            },
            {
                id: 26,
                title: "[LUMID] 엔진의 열을 알맞게 유지..",
                img: "https://placeimg.com/300/380/grayscale",
                category: ["프로모션"]
            },
            {
                id: 27,
                title: "친환경 자동차 소재로 지구를 지키다",
                img: "https://placeimg.com/300/380/sepia",
                category: ["프로모션", "카탈로그", "전문자료"]
            },
            {
                id: 28,
                title: "EM 공장 제조 공정",
                img: "https://placeimg.com/300/380/any",
                category: ["프로모션", "카탈로그"]
            }
        ];
        
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
                title: "친환경 자동차 소재로 지구를 지키다",
                img: $A.get('$Resource.image7'),
                category: ["프로모션", "카탈로그", "전문자료"]
            },
            {
                id: 8,
                title: "EM 공장 제조 공정",
                img: $A.get('$Resource.image8'),
                category: ["프로모션", "카탈로그"]
            }
        ];

        component.set("v.posts", posts);
        component.set("v.filteredPosts", posts);

        
        component.set("v.testArr", testArr);
    },
    isClickedCategory: function(component, event) {
        component.set("v.selectedCategory", event.target.name);

        if(event.target.name === '전체') {
            component.set("v.filteredPosts", component.get("v.posts"));
        } else {            
            var filteredPosts = component.get("v.posts").filter(function(post) {
                return post.category.includes(event.target.name);
            })

            component.set("v.filteredPosts", filteredPosts);
        }
    }
})
