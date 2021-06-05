// readline import for reading lines
const readline = require('readline')


const line = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

line.question('What are the tasks you have done today ?\n', (answer) => {
    formatAnswer(answer)
    process.exit(1)
})


function formatAnswer(input) {
    if (typeof input === 'string' && input.endsWith('.')) {
        input = input.substr(0, input.length-1)
    }
    
    const inputValues = input.split('.')
    
    // format for virtual office
    let virtual = ''
    inputValues.forEach((point, index) => {
        const trimmedPoint = point.trim()
        virtual += index + 1 + ". " + trimmedPoint + "\n";
    });

    const date = DateCreator()
    const formatedMessage = MailFormater(date, virtual)
    Decorator(formatedMessage)
    
}

function DateCreator() {
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
    const day = new Date();
    const [month, date, year] = [months[day.getMonth()], day.getDate(), day.getFullYear()]
    return `${month} ${date}, ${year}`
}

function MailFormater(Day, tasks) {
    const thisDay = Day + '\n'
    const messages = 'Project Name: EIM India - Product Development\nNumber of hours worked: 8\nDescription of the deliverable:\n'
    return thisDay+messages+tasks
}

function Decorator(Message) {
    let gap = ' '.padStart((process.stdout.columns/2)-2)
    console.log(gap+'Message \n'+Message);
}