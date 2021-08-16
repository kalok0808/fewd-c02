const button = document.querySelector('#toggle-disappear')
button.addEventListener('click', disappear)

function addText() {
    // document.querySelector + innerHTML example
    const main2Area = document.querySelector('#main2')
    main2Area.innerHTML = "<hr>Hi hihihihihi<hr>"
}

function disappear() {
    // document.querySelector + innerHTML example
    const main2Area = document.querySelector('#main2');
    if (main2Area.classList.contains('isHidden')) {
        main2Area.classList.remove('isHidden')
    } else {
        main2Area.classList.add('isHidden');

    }
    main2Area.innerHTML = "<hr>Hi hihihihihi<hr>"
}