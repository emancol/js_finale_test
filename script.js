





async function fetchMenuOptions() {

    const response = await fetch('https://cataas.com/api/tags')
    const data = await response.json();

    const fiveToTen = data.slice(5, 10);
    const fiftenToTwenty = data.slice(15, 20);

    const finaleDta = [...fiveToTen, ...fiftenToTwenty];

    const select = document.querySelector('#dpd-options');


    finaleDta.forEach((item) => {
        const option = document.createElement('option');
        option.textContent = item;
        select.append(option);




    })




    select.addEventListener('change', async (e) => {

        const response = await fetch(`https://cataas.com/cat/${select.value}?json=true`);
        const data = await response.json();

        const img = document.createElement('img');
        img.src = `https://cataas.com${data.url}`;

        select.after(img);
    })

}


fetchMenuOptions()