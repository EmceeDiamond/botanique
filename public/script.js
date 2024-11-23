const device = [
    {
        img: './img/pH.png',
        name: 'pH-метр Mettler-Toledo International, Inc. SevenCompact S220', 
        status: '',
        notify: ''
    }, 

    {
        img: './img/Спектр.png',
        name: 'Спектрофотометр Varian, Inc Cary 50 Bio', 
        status: '',
        notify: ''
    },

    {
        img: './img/Титратор.png',
        name: 'Титратор ', 
        status: '',
        notify: ''
    },

    {
        img: './img/Коагулометр.png',
        name: 'Коагулометр Tcoag, KC 4 Delta', 
        status: '',
        notify: ''
    },

    {
        img: './img/Коагулометр.png',
        name: 'Коагулометр Tcoag, KC 4 Delta', 
        status: '',
        notify: ''
    }
]

const first__table = device.map((item) => `
                                        <tr>   
                                            <td>
                                                <img src="${item.img}" alt>
                                            </td>
                                            <td>${item.name}</td>
                                            <td>
                                                <details>
                                                    <summary>Свободен</summary>
                                                    <p>В работе</p>
                                                </details>
                                            </td>
                                            <td>
                                                <button class="image__button"></button>
                                            </td>
                                        </tr>
                                    `    
                        ).join('');
document.querySelector('.favorite__products tbody').innerHTML = first__table;