const initialTaskList = [
    {
        id: Date.now ().toString ().slice (-4),
        task: 'Wash car',
        status: 'complited'

    },
    {
        id: +Date.now ().toString ().slice (-4) + 1,
        task: 'Repair printer',
        status: 'in progress'

    }
];

export {initialTaskList};