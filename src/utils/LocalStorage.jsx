const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Description for Task 1",
        date: "2025-01-27T00:00:00.000Z",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Description for Task 2",
        date: "2025-01-28T00:00:00.000Z",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Task 3",
        description: "Description for Task 3",
        date: "2025-01-29T00:00:00.000Z",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Description for Task 1",
        date: "2025-01-30T00:00:00.000Z",
        category: "Management",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Description for Task 2",
        date: "2025-01-31T00:00:00.000Z",
        category: "Research",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Description for Task 1",
        date: "2025-02-01T00:00:00.000Z",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: true,
      },
      {
        title: "Task 2",
        description: "Description for Task 2",
        date: "2025-02-02T00:00:00.000Z",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Description for Task 1",
        date: "2025-02-03T00:00:00.000Z",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Description for Task 2",
        date: "2025-02-04T00:00:00.000Z",
        category: "Management",
        active: false,
        newTask: false,
        completed: true,
        failed: true,
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Description for Task 1",
        date: "2025-02-05T00:00:00.000Z",
        category: "Research",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Description for Task 2",
        date: "2025-02-06T00:00:00.000Z",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: true,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const data = localStorage.getItem("employees");
  console.log(data);
};
