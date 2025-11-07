const employees = [
    {
        "id": 1,
        "email": 'employee1@gmain.com',
        "password": '1234',
        "tasks": [
            {
                title: "Prepare Sales Report",
                description: "Collect and analyze sales data for Q1.",
                date: "2025-02-01",
                category: "Reporting",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Team Meeting",
                description: "Attend the weekly progress meeting.",
                date: "2025-02-03",
                category: "Meeting",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "Client Follow-up",
                description: "Call and update pending clients.",
                date: "2025-02-05",
                category: "Communication",
                active: false,
                newTask: false,
                completed: false,
                failed: true
            }
        ]
    },
    {
        "id": 2,
        "email": 'employee2@gmain.com',
        "password": '1234',
        "tasks": [
            {
                title: "Software Installation",
                description: "Install CRM tool in workstation.",
                date: "2025-02-02",
                category: "Technical",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Documentation Update",
                description: "Update user manual for new version release.",
                date: "2025-02-01",
                category: "Documentation",
                active: false,
                newTask: false,
                completed: false,
                failed: true
            },
            {
                title: "Bug Fixes",
                description: "Resolve UI bugs in dashboard.",
                date: "2025-02-04",
                category: "Development",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "UI Review",
                description: "Review new UI changes with team lead.",
                date: "2025-02-06",
                category: "Design",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            }
        ]
    },
    {
        "id": 3,
        "email": 'employee3@gmain.com',
        "password": '1234',
        "tasks": [
            {
                title: "Inventory Check",
                description: "Verify available office inventory.",
                date: "2025-02-01",
                category: "Management",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "Vendor Contact",
                description: "Call supplier for price negotiation.",
                date: "2025-02-03",
                category: "Communication",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Update Stock Sheet",
                description: "Update Excel sheet for new inventory.",
                date: "2025-02-04",
                category: "Data Entry",
                active: false,
                newTask: false,
                completed: false,
                failed: true
            }
        ]
    },
    {
        "id": 4,
        "email": 'employee1@gmain.com',
        "password": '1234',
        "tasks": [
            {
                title: "Prepare Sales Report",
                description: "Collect and analyze sales data for Q1.",
                date: "2025-02-01",
                category: "Reporting",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Team Meeting",
                description: "Attend the weekly progress meeting.",
                date: "2025-02-03",
                category: "Meeting",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "Client Follow-up",
                description: "Call and update pending clients.",
                date: "2025-02-05",
                category: "Communication",
                active: false,
                newTask: false,
                completed: false,
                failed: true
            }
        ]
    },
    {
        "id": 5,
        "email": 'employee@gmain.com',
        "password": '1234',
        "tasks": [
            {
                title: "Software Installation",
                description: "Install CRM tool in workstation.",
                date: "2025-02-02",
                category: "Technical",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Documentation Update",
                description: "Update user manual for new version release.",
                date: "2025-02-01",
                category: "Documentation",
                active: false,
                newTask: false,
                completed: false,
                failed: true
            },
            {
                title: "Bug Fixes",
                description: "Resolve UI bugs in dashboard.",
                date: "2025-02-04",
                category: "Development",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "UI Review",
                description: "Review new UI changes with team lead.",
                date: "2025-02-06",
                category: "Design",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            }
        ]
    }
];

// Admin remains same
const admin = [
    {
        "id": 1,
        "email": "admin1@gmail.com",
        "password": "123"
    }
]


export const setLocalStorage =()=>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage =()=>{
    const emploees = JSON.parse(localStorage.getItem('employees'))
    const adminn = JSON.parse(localStorage.getItem('admin'))
    console.log(emploees,adminn)
    console.log(adminn)
}