# JavaScript to Backend — Interview Master Notes

> Clean, structured, interview-ready notes covering **JavaScript, Async, Node.js, Backend & APIs**.

---

## 1. JavaScript

**Definition**
JavaScript is a **high-level, interpreted, single-threaded programming language** used to build interactive web applications.

**Key Characteristics**

* Single-threaded execution
* Asynchronous & event-driven
* Runs in browsers and on servers (Node.js)

**Use Cases**

* Frontend UI interactions
* Backend services (Node.js)
* Automation & scripting

---

## 2. ECMAScript (ES)

**Definition**
ECMAScript is the **official specification** that defines the JavaScript language.

**Important Versions**

* ES6 (2015): `let`, `const`, arrow functions, classes
* ES2020: Optional chaining, nullish coalescing

**Interview Note**
JavaScript implementations follow ECMAScript standards.

---

## 3. TypeScript

**Definition**
TypeScript is a **superset of JavaScript** that adds **static typing** and compiles to JavaScript.

**Why TypeScript**

* Early error detection
* Better IDE support
* Scales well for large projects

**Use Cases**

* Angular applications
* Large React / Node codebases

---

## 4. Scripting

**Definition**
Scripting refers to writing small programs that **automate tasks** or control other software.

**Examples**

* JavaScript DOM manipulation
* Bash scripts for automation
* Python scripts for data processing

---

## 5. Single Threading vs Multi Threading

**Thread**: Smallest unit of execution

* **Single-threaded**: One task at a time (JavaScript)
* **Multi-threaded**: Multiple threads simultaneously (Java, C++)

**Important**
JavaScript achieves concurrency using the **Event Loop**, not multiple threads.

---

## 6. Asynchronous Programming

**Definition**
Asynchronous execution allows tasks to start and continue **without blocking** the main thread.

**Common Async Tasks**

* API calls
* File system operations
* Database queries

---

## 7. Callbacks & Callback Hell

**Callback**
A function passed into another function to execute later.

**Callback Hell**
Deeply nested callbacks causing unreadable and hard-to-maintain code.

**Problem**

* Poor readability
* Difficult error handling

---

## 8. Promises

**Definition**
A Promise represents a value that will be available in the future.

**States**

* Pending
* Fulfilled
* Rejected

**Use Cases**

* Fetching data
* Database operations

---

## 9. async / await

**async**
Marks a function as asynchronous and returns a Promise.

**await**
Pauses execution inside an async function until a Promise resolves.

**Advantages**

* Cleaner syntax
* Easier error handling with `try/catch`

---

## 10. Timers

### setTimeout

* Executes once after a delay
* Goes to macrotask queue

### setInterval

* Executes repeatedly at fixed intervals

### setImmediate (Node.js only)

* Executes after I/O events in the event loop

---

## 11. Event Loop

**Definition**
The Event Loop manages execution of synchronous and asynchronous code in JavaScript.

**Components**

* Call Stack
* Web APIs / Node APIs
* Microtask Queue (Promises)
* Macrotask Queue (Timers)

**Key Rule**
Microtasks run before macrotasks.

---

## 12. How JavaScript Runs in the Browser

**Flow**

```
JS Code → JS Engine → Web APIs → Event Loop → Call Stack
```

**Common Engines**

* V8 (Chrome)
* SpiderMonkey (Firefox)

---

## 13. Node.js

**Definition**
Node.js is a **JavaScript runtime** built on the **V8 engine** that allows JS to run outside the browser.

**Why Node.js**

* Non-blocking I/O
* High performance
* Scalable backend

**Use Cases**

* REST APIs
* Real-time applications
* CLI tools

---

## 14. JavaScript Ecosystem Connection

* JavaScript → core language
* Node.js → backend runtime
* React.js → frontend UI library
* NPM → package manager

Everything is JavaScript, different environments.

---

## 15. Backend Development

**Definition**
Backend development handles server logic, databases, authentication, and APIs.

**Responsibilities**

* Handle requests
* Business logic
* Data storage
* Security

---

## 16. HTTP & HTTPS

**HTTP**
Protocol for client-server communication.

**HTTPS**
Encrypted version of HTTP using SSL/TLS.

---

## 17. Requests, Responses & Status Codes

**HTTP Methods**

* GET – Read
* POST – Create
* PUT – Update
* DELETE – Remove

**Status Codes**

* 200 – OK
* 400 – Bad Request
* 401 – Unauthorized
* 404 – Not Found
* 500 – Server Error

---

## 18. REST API

**Definition**
REST is an architectural style for designing networked applications using HTTP.

**Key Principles**

* Stateless
* Resource-based
* Uses standard HTTP methods

---

## 19. Express.js

**Definition**
Express is a minimal Node.js framework for building web servers and APIs.

### Routing

Maps URLs to handlers.

### Middleware

Functions that run between request and response.

**Uses**

* Logging
* Authentication
* Validation

---

## 20. Databases

**Database**
Stores application data persistently.

### SQL vs NoSQL

* SQL: Structured tables (MySQL, PostgreSQL)
* NoSQL: Document-based (MongoDB)

### CRUD Operations

* Create
* Read
* Update
* Delete

---

## 21. Authentication & Authorization

* **Authentication**: Who you are
* **Authorization**: What you can access

### JWT

* Token-based authentication
* Stateless
* Common in REST APIs

### Cookies vs Sessions

* Cookies: Client-side storage
* Sessions: Server-side storage

---

## Final Interview Mental Model

```
Browser → JavaScript → HTTP Request → Node + Express → Middleware → Database → Response
```

---

## Key Interview One-Liners

* JavaScript is single-threaded but asynchronous via the event loop
* Promises have higher priority than timers
* Node.js uses non-blocking I/O
* REST APIs are stateless
* Middleware controls request flow

---

> Master this document and you are **interview-ready for JS & backend fundamentals**.
