// localStorage.clear();
const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        title: "Task 1",
        description: "Description for Task 1",
        date: "27 Jan 2025",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Description for Task 2",
        date: "30 Jan 2025",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Task 3",
        description: "Description for Task 3",
        date: "30 Jan 2025",
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
    firstName: "Vihan",
    email: "employee2@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        title: "Task 1",
        description: "Description for Task 1",
        date: "30 Jan 2025",
        category: "Management",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Description for Task 2",
        date: "4 Feb 2025",
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
    firstName: "Ishaan",
    email: "employee3@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        title: "Task 1",
        description: "Description for Task 1",
        date: "5 Feb 2025",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: true,
      },
      {
        title: "Task 2",
        description: "Description for Task 2",
        date: "30 Jan 2025",
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
    firstName: "Kabir",
    email: "employee4@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        title: "Task 1",
        description: "Description for Task 1",
        date: "30 Jan 2025",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Description for Task 2",
        date: "7 Feb 2025",
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
    firstName: "Advait",
    email: "employee5@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        title: "Task 1",
        description: "Description for Task 1",
        date: "14 Feb 2025",
        category: "Research",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Description for Task 2",
        date: "15 Feb 2025",
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
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  //   console.log(employees, admin);
  return { employees, admin };
};
