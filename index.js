
const inquirer = require('inquirer');

const fs = require('fs');

//profiles
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');

const team = [];

let isteamComplete = false;

const validateIn = (userInput) => {
    if (userInput === "") {
        return "Please enter response before proceeding";
    } else {
        return true;
    }
};
//prompts
const initiate = async () => {
    await createmanager();
    while (isteamComplete === false) {
        const teamMemberType = [
            {
                type:"list",
                message: "Which type of Employee would you like to add?",
                name: "employeetype",
                choices: [
                    {name: 'engineer', value: 'engineer', short: 'engineer'},
                    {name: 'intern', value: 'intern', short: 'intern'},
                    {name: 'Create Team', value: 'none', short: 'Create Team'},

                ],
            },
        ];
        const { employeetype } = await inquirer.prompt(teamMemberType);
        if(employeetype === 'none') {
            isteamComplete = true;
            console.log(team)
            generateCards(team)
            fs.writeFile('./dist/index.html', generateHTML(teamCards), (error) =>
            error ? console.error(error) : console.log('HTML file created successfully!'))

        } else {
            if (employeetype === 'engineer') {
                await createengineer();
            }
            if (employeetype === 'intern') {
                await createintern();
            }
        }
    }
}

//prompts

const createmanager = async () => {
    const manQuestions = [
        {
            type: 'input',
            message: "Please enter manager's name: ",
            name: 'name',
            validate: validateIn,
        },
        {
            type: 'input',
            message: "Please enter manager's employee ID: ",
            name: 'id',
            validate: validateIn,
        },
        {
            type: 'input',
            message: "Please enter manager's email address: ",
            name: 'email',
            validate: validateIn,
        },
        {
            type: 'input',
            message: "Please enter manager's office number: ",
            name: 'officeNum',
            validate: validateIn,
        },
    ];
    await inquirer
    .prompt(manQuestions)
    .then((data) => {
        employees.push(new manager(data.name, data.id, data.email, data.officeNum))
    });
};

const NewEngineer = async () => {
    const engQuestions = [
        {
            type: 'input',
            message: "Please enter Engineer's name: ",
            name: 'name',
            validate: validateIn,

        },
        {
            type: 'input',
            message: "Please enter Engineer's employee id: ",
            name: 'id',
            validate: validateIn,

        },
        {
            type: 'input',
            message: "Please enter Engineer's email address: ",
            name: 'email',
            validate: validateIn,

        },
        {
        type: 'input',
        message: "Please enter Engineer's github username: ",
        name: 'github',
        validate: validateIn,
        },
    
        

        
    ];
    await inquirer
    .prompt(engQuestions)
    .then((data) => {
        employees.push(new engineer(data.name, data.id, data.email, data.github))
    });
};

const NewIntern = async () => {
    const intQuestions = [
        {
            type: 'input',
            message: "Please enter Intern's name: ",
            name: 'name',
            validate: validateIn,

        },
        {
            type: 'input',
            message: "Please enter Intern's employee id: ",
            name: 'id',
            validate: validateIn,

        },
        {
            type: 'input',
            message: "Please enter Intern's email address: ",
            name: 'email',
            validate: validateIn,

        },
        {
            type: 'input',
            message: "Please enter Intern's school name: ",
            name: 'school',
            validate: validateIn,

        },
        
    ];
    await inquirer
    .prompt(intQuestions)
    .then((data) => {
        employees.push(new intern(data.name, data.id, data.email, data.school))
    });
};

const empCards = []
 function generateCards(arr) {
    arr.forEach(element => {
       switch (element.getrole()) {
        case "manager":
        empCards.push(`<div class="col">
        <div class="card bg-danger text-dark text-center h-100">
        <div class="card-body">
        <h5 class="card-title">${element.name}</h5>
        <p class="card-text fw-bold">${element.getrole()}</p>
        </div>
        <ul class="list-group list-group-flush card-text text-primary">
        <li class="list-group-item">ID: ${element.id}</li>
        <li class="list-group-item">Email: <a href = "mailto: ${element.email}">${element.email}</a></li>
        <li class="list-group-item">Phone: ${element.officeNum}</li>
        </ul>
        </div>
        </div>`)
         
        break;

        case "engineer":
            empCards.push(`<div class="col">
            <div class="card bg-info text-dark text-center h-100">
        <div class="card-body">
        <h5 class="card-title">${element.name}</h5>
        <p class="card-text card-subtitle">${element.getrole()}</p>
        </div>
        <ul class="list-group list-group-flush card-text text-primary">
        <li class="list-group-item">ID: ${element.id}</li>
        <li class="list-group-item">Email: <a href = "mailto: ${element.email}">${element.email}</a></li>
        <li class="list-group-item">Github: <a href="https://github.com/${element.github}"> ${element.github}</a></li>
        </ul>
        </div>
        </div>`)

        break;

        case "intern":
            empCards.push(`<div class="col">
            <div class="card bg-warning text-dark text-center h-100">
        <div class="card-body">
        <h5 class="card-title">${element.name}</h5>
        <p class="card-text card-subtitle">${element.getrole()}</p>
        </div>
        <ul class="list-group list-group-flush card-text text-primary">
        <li class="list-group-item">ID: ${element.id}</li>
        <li class="list-group-item">Email: <a href = "mailto: ${element.email}">${element.email}</a></li>
        <li class="list-group-item">School: ${element.school}</li>
        </ul>
        </div>
        </div>`)
        break;
       }
    });
}

function generateHTML(arr) {
    return `<!DOCTYPE html>
    <html lang="en"
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/f6d3bd14b4.js" crossorigin="anonymous"></script>
    
    <title> Project Team</title>
    </head>
    <body>
    <header class="container-fluid jumbotron text-center bg-secondary text-info mb-5 p-3">
    <h1>Project Team <i class="fa-sharp fa-solid fa-people-group"></i></h1>
    </header>
    <section class="container">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
    ${arr.join('\r\m')}
</div>
</section>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>
    `
}

initiate();