const analyticsDevice = [
    {
        beginning: "09.10.2021, 15:46",
        typeWork: {
            degree: "В работе",
            description: "Измерение"
        },
        operation: {
            type: "Образец/серия:",
            value: "000100057935_170000010325_0000251849"
        },
        result: '',
        user: "morozovava"
    },

    {
        beginning: "12.10.2021, 12:17",
        typeWork: {
            degree: "В работе",
            description: "Калибровка"
        },
        operation: {
            type: "Номер колонки:",
            value: "Колонка 2"
        },
        result: 'Промывка с указанием вещества: Вещество',
        user: "morozovava" 
    }
]

const second__table = analyticsDevice.map((item) => `
                                            <tr>
                                                <td class="beginning">
                                                    <p>${item.beginning}</p>
                                                </td>
                                                <td class="type__work">
                                                    <p class="progress__work">${item.typeWork.degree}</p>
                                                    <p>${item.typeWork.description}</p>
                                                </td>
                                                <td class="work">
                                                    <p>${item.operation.type}</p><p>&nbsp;${item.operation.value}/p>
                                                </td>
                                                <td class="result">
                                                    <p>${item.result}</p>
                                                    <img src="./img/check.png" alt>
                                                </td>
                                                <td class="users">
                                                    <p>${item.user}</p>
                                                </td>
                                            </tr>`    
                        ).join('');
document.querySelector('tbody').innerHTML = second__table;

function setActive(element) {
    const buttons = document
        .querySelectorAll('button');
    buttons
        .forEach(button => button
            .classList.remove('active'));
    element
        .classList.add('active');
}

function setDatTime(n) {
    var date = new Date(new Date().setDate(new Date().getDate()-n)).toISOString().slice(0,16);
    
    var newDate = document.getElementById("datetime-local1");
    var oldDate = document.getElementById("datetime-local2");

    oldDate.value = new Date().toISOString().slice(0,16);
    newDate.value = date;
}

function setDatTime2(n) {
    var date = new Date(new Date().setMonth(new Date().getMonth()-n)).toISOString().slice(0,16);
    
    var newDate = document.getElementById("datetime-local1");
    var oldDate = document.getElementById("datetime-local2");

    oldDate.value = new Date().toISOString().slice(0,16);
    newDate.value = date;
}