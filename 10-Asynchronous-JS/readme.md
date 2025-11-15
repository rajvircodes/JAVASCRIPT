# Asynchronous JavaScript

This section covers how JavaScript handles operations that take time (like APIs, timers, file loading).

---

## 1. Callbacks
A callback is a function passed as an argument to another function.
Used for tasks that run later (like setTimeout or API responses).

File: `callbacks.js`

---

## 2. Promises
A Promise represents a value that will be available now, later, or never.
It has three states:
- **pending**
- **fulfilled**
- **rejected**

`.then()` handles success, `.catch()` handles errors.

File: `promises.js`

---

## 3. Async/Await
A cleaner, modern way to use promises.
`await` pauses code until promise resolves.

File: `async-await.js`

---

## 4. Fetch API
Used to load data from servers (APIs).
Returns a promise.

File: `fetch-api.js`

---
