(function () {

    // Step 1
    const bookIds = [
        'gone_wind',
        'game_thrones',
        'love_time_cholera',
        'sherlock_holmes',
        'da_vinci_code',
        'azazeel',
        'old_man_sea',
        'origin',
        'hobbit',
        'thirteen_reasons_why'
    ];

    // Step 4
  const bookDetails = {
        gone_wind: {
            title: 'Gone with the wind',
            language: 'english',
            author: 'Margaret Mitchell'
        },
        game_thrones: {
            title: 'Game of thrones',
            language: 'english',
            author: 'George R. R. Martin'
        },
        love_time_cholera: {
            title: 'Love in the time of Cholera',
            language: 'english',
            author: 'Gabriel García Márquez'
        },
        sherlock_holmes: {
            title: 'Sherlock Holmes',
            language: 'english',
            author: 'Arthur Conan Doyle'
        },
        da_vinci_code: {
            title: 'Da vinci code',
            language: 'english',
            author: 'Dan Brown'
        },
        azazeel: {
            title: 'Azazeel',
            language: 'arabic',
            author: 'Youssef Ziedan'
        },
        old_man_sea: {
            title: 'Old man and the sea',
            language: 'english',
            author: 'Ernest Hemingway'
        },
        origin: {
            title: 'Origin',
            language: 'english',
            author: 'Jessica Khoury'
        },
        hobbit: {
            title: 'The Hobbit',
            language: 'english',
            author: 'J. R. R. Tolkien'
        },
        thirteen_reasons_why: {
            title: 'Thirteen reasons Why',
            language: 'english',
            author: 'Jay Asher'
        }
    };

    // Step 5
    function createUl() {
        const ul = document.createElement('ul');
        ul.setAttribute('id', 'myBooks');
        for (let i = 0; i < bookIds.length; i++) {
            const id = bookIds[i];
            const title = bookDetails[id].title;
            const language = bookDetails[id].language;
            const author = bookDetails[id].author;
            const li = document.createElement('li');
            const h1 = document.createElement('h1');
            const h2 = document.createElement('h2');
            const h3 = document.createElement('h3');
            h1.innerHTML = title;
            h2.innerHTML = 'Language of the book: ' + language;
            h3.innerHTML = 'Written by: ' + author;
            li.setAttribute('id', id);
            li.setAttribute('class', 'item');
            li.appendChild(h1);
            ul.appendChild(li);
            li.appendChild(h1)
            li.appendChild(h2);
            li.appendChild(h3);
        }
        console.log(ul);
        document.body.appendChild(ul);
    }

    // Step 7
    const bookImages = {
        gone_wind: 'images/gone_wind.jpg',
        game_thrones: 'images/game_thrones.jpg',
        love_time_cholera: 'images/love_time_cholera.jpg',
        sherlock_holmes: 'images/sherlock_holmes.jpg',
        da_vinci_code: 'images/da_vinci_code.jpg',
        azazeel: 'images/azazeel.jpg',
        old_man_sea: 'images/old_man_sea.jpg',
        origin: 'images/origin.jpg',
        hobbit: 'images/hobbit.jpg',
        thirteen_reasons_why: 'images/thirteen_reasons_why.jpg'
    };

    function addImages() {
        for (const id of Object.keys(bookImages)) {
            const li = document.getElementById(id);
            if (li !== null) {
                const img = document.createElement('img');
                img.setAttribute('src', bookImages[id]);
                li.appendChild(img);
            }
        }
    }

    createUl();
    addImages();

})();