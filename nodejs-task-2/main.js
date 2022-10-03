const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

let list = [];

const menu = `Enter 1 to add item to the list\nEnter 2 to remove item from the list\nEnter 3 to print the list\nEnter 4 to exit\n\nEnter your choice: `;

// function to add item to the list
function addToList(item) {
    list.push(item);
}

// function to remove item from list
function removeFromList(item) {
    let index = list.indexOf(item);
    if (index > -1) {
        list.splice(index, 1);
    }
    return index;
}

// function to print list
function printList() {
    console.log(list);
}

// This function will delay the prompt menu for 2secs after choosing any option so that user can see the output clearly in the console
function delay(secs) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, secs);
    });
}

function askChoice() {
    return new Promise((resolve, reject) => {
        readline.question(menu, (ch) => {
            resolve(parseInt(ch));
        });
    });
}

function askQuestion(question) {
    return new Promise((resolve, reject) => {
        readline.question(question, (answer) => {
            resolve(answer);
        });
    });
}

async function startProgram() {
    while (1) {
        let choice = await askChoice();

        switch (choice) {
            case 1:
                let addItem = await askQuestion(
                    "Enter item name to add to the list: "
                );
                addToList(addItem);
                console.log("Item added to list successfully");
                break;

            case 2:
                let removeItem = await askQuestion(
                    "Enter item name to remove from the list: "
                );
                let index = removeFromList(removeItem);
                if (index == -1)
                    console.log("This item is not present in the list");
                else console.log("Item was successfully removed from the list");
                break;

            case 3:
                printList();
                break;

            case 4:
                console.log("Exiting from the program");
                readline.close();
                return;

            default:
                console.log("Invalid choice!!!");
        }

        console.log("\n");
    }
}

startProgram();
