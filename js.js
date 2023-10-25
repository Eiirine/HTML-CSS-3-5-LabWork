let quiz = {
    // Q = вопрос, O = варианты ответа, A = верный ответ
    data: [
    {
    q: "Что такое операционная система?",
    o: [
    "Это просто программа на компьютере",
    "Это показатель того, какой процессор используется на компьютере",
    "Это набор взаимосвязанных программ, осуществляющих управление компьютером",
    'Нет такого понятия, есть понятие "файловая система"',
    ],
    a: 2
    },
    {
    q: "Является ли Android операционной системой?",
    o: [
    "Да, это такая же ОС, как и другие, просто для мобильных девайсов",
    "Нет, операционные системы бывают только для ПК",
    "Нет, Android это программа, которая ставится на операционную систему девайса",
    "Это домашняя страничка в настройках вашего браузера",
    ],
    a: 0
    },
    {
    q: "Что такое процессор компьютера?",
    o: [
    "Это блок, внутри которого находится дисковод и много разъемов",
    "Это общее название всех комплектующих компьютера",
    "Это элемент компьютера, с помощью которого обрабатывается информация",
    "Это суммарный показатель вычислительной мощности компьютера, например 2,7 ГГц",
    ],
    a: 2
    },
    {
    q: "Какие бывают разрядности у современных процессоров?",
    o: [
    "32 и 64 бита",
    "12 и 32 бита",
    "15 и 32 бита",
    "86 и 64 бита",
    ],
    a: 0
    },
    {
    q: "Какой тип процессора чаще всего используют мобильные девайсы?",
    o: [
    "iOS использует Intel, остальные используют AMD",
    "Чаще всего используют Intel",
    "Чаще всего используют AMD",
    "Чаще всего используют ARM",
    ],
    a: 3
    }
      ],
    hWrap: null, 
    hQn: null, 
    hAns: null, 
    
    now: 0, 
    score: 0, 
    
    init: () => {
    
    quiz.hWrap = document.getElementById("quizWrap");
    
    quiz.hQn = document.createElement("div");
    quiz.hQn.id = "quizQn";
    quiz.hWrap.appendChild(quiz.hQn);
    
    quiz.hAns = document.createElement("div");
    quiz.hAns.id = "quizAns";
    quiz.hWrap.appendChild(quiz.hAns);
    
    quiz.draw();
    },
    
    draw: () => {
    
    quiz.hQn.innerHTML = quiz.data[quiz.now].q;
    
    quiz.hAns.innerHTML = "";
    for (let i in quiz.data[quiz.now].o) {
    let radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "quiz";
    radio.id = "quizo" + i;
    quiz.hAns.appendChild(radio);
    let label = document.createElement("label");
    label.innerHTML = quiz.data[quiz.now].o[i];
    label.setAttribute("for", "quizo" + i);
    label.dataset.idx = i;
    label.addEventListener("click", () => {
    quiz.select(label);
    });
    quiz.hAns.appendChild(label);
    }
    },
    
    select: (option) => {
    
    let all = quiz.hAns.getElementsByTagName("label");
    for (let label of all) {
    label.removeEventListener("click", quiz.select);
    }
    
    let correct = option.dataset.idx == quiz.data[quiz.now].a;
    if (correct) {
    quiz.score++;
    option.classList.add("correct");
    } else {
    option.classList.add("wrong");
    }
    
    quiz.now++;
    setTimeout(() => {
    if (quiz.now < quiz.data.length) { quiz.draw(); }
    else {
    quiz.hQn.innerHTML = `Вы ответили на ${quiz.score} из ${quiz.data.length} правильно`;
    quiz.hAns.innerHTML = "";
    }
    }, 1000);
    },
    
    reset : () => {
    quiz.now = 0;
    quiz.score = 0;
    quiz.draw();
    }
    };
    window.addEventListener("load", quiz.init);

    