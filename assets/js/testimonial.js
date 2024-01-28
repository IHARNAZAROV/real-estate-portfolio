const reviewWrap = document.getElementById("reviewWrap");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const imgDiv = document.getElementById("imgDiv");
const personName = document.getElementById("personName");
const description = document.getElementById("description");

let people = [
    {
        photo:
            'url("/assets/img/testimonials/9.webp")',
        name: "Самира Холматова",
        description:
            "Очень довольны остались работой риелтора Анжелика. Всё сделано быстро и профессионально. Спасибо вам за вашу работу и побольше вам благодарных клиентов. А вашей фирме процветания."
    },

    {
        photo:
            'url("/assets/img/testimonials/5.webp")',
        name: "Игорь",
        description:
            "Хочу выразить благодарность Адалевской Анжелике. Самый ответственный и компетентный риэлтор в г. Лида. Самый настоящий профессионал своего дела."
    },

    {
        photo:
        'url("/assets/img/testimonials/12.webp")',
        name: "Анна",
        description:
            "Хочу выразить огромнейшую благодарность Адалевской Анжелике за помощь в продаже квартиры и покупке дома. В подготовке всех необходимых документов. Спасибо за профессионализм, за доброе отношение и             понимание, за оперативность и грамотный подход. У меня остались самые лучшие впечатления от общения сАнжеликой, спасибо большое. Обязательно буду рекомендовать всем знакомым работу именно с этим агентом, Адалевской Анжеликой. Желаю дальнейшего процветания Вашей организации."
    },

    {
        photo:
        'url("/assets/img/testimonials/2.webp")',
        name: "Александр",
        description:
            "Большое человеческое спасибо агенту Анжелике Адалевской за помощь в подборе и покупке квартиры для нашей семьи. Аккуратно, спокойно и профессионально."
    },

    {
        photo:
        'url("/assets/img/testimonials/11.webp")',
        name: "Светлана",
        description:
            "Хочу выразить благодарность агенту Анжелике в сопровождении сделки покупки квартиры! Благодаря высокому профессионализму и индивидуальному подходу, умению коммуницировать в непростых ситуациях для нас сделка прошла незаметно,четко и быстро! Успехов и процветания компании, рады ,что обратились к вам!"
    },
    {
        photo:
        'url("/assets/img/testimonials/8.webp")',
        name: "Елена",
        description:
            "Благодарность Анжелике Адалевской. Спасибо огромное агенту Анжелике за помощь в продаже квартиры, за доброе и чуткое отношение. Анжелика- это просто эталон учтивости, компетентности и профессионализма. Она вела весь нелегкий процесс - поиск покупателей, показы, сбор и оформление документов. На протяжении всего времени я ощущала поддержку и заинтересованность в успехе дела."
    },


];

imgDiv.style.backgroundImage = people[0].photo;
personName.innerText = people[0].name;
description.innerText = people[0].description;
let currentPerson = 0;

//Select the side where you want to slide
function slide(whichSide, personNumber) {
    let reviewWrapWidth = reviewWrap.offsetWidth + "px";
    let descriptionHeight = description.offsetHeight + "px";
    //(+ or -)
    let side1symbol = whichSide === "left" ? "" : "-";
    let side2symbol = whichSide === "left" ? "-" : "";

    let tl = gsap.timeline();


    tl.to(reviewWrap, {
        duration: 0.4,
        opacity: 0,
        translateX: `${side1symbol + reviewWrapWidth}`
    });

    tl.to(reviewWrap, {
        duration: 0,
        translateX: `${side2symbol + reviewWrapWidth}`
    });

    setTimeout(() => {
        imgDiv.style.backgroundImage = people[personNumber].photo;
    }, 400);
    setTimeout(() => {
        description.style.height = descriptionHeight;
    }, 400);
    setTimeout(() => {
        personName.innerText = people[personNumber].name;
    }, 400);
    setTimeout(() => {
        description.innerText = people[personNumber].description;
    }, 400);

    tl.to(reviewWrap, {
        duration: 0.4,
        opacity: 1,
        translateX: 0
    });


}

function setNextCardLeft() {
    if (currentPerson === 5) {
        currentPerson = 0;
        slide("left", currentPerson);
    } else {
        currentPerson++;
    }

    slide("left", currentPerson);
}

function setNextCardRight() {
    if (currentPerson === 0) {
        currentPerson = 5;
        slide("right", currentPerson);
    } else {
        currentPerson--;
    }

    slide("right", currentPerson);
}

leftArrow.addEventListener("click", setNextCardLeft);
rightArrow.addEventListener("click", setNextCardRight);


window.addEventListener("resize", () => {
    description.style.height = "100%";
});