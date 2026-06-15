import { Artifact } from './types';

export const artifacts: Artifact[] = [
  // T1 - Web Application
  {
    taskId: 'T1',
    domain: 'Web Application',
    toolId: 'gemini',
    toolName: 'Gemini (3.1 Pro)',
    prompt: 'Build a simple to-do list web app where users can add, complete, and delete tasks. Show a count of remaining tasks.',
    rationale: 'Tests end-to-end application logic including state management, DOM interaction, and user event handling — a canonical vibecoding scenario.',
    language: 'html',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple To-Do List</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            display: flex;
            justify-content: center;
            padding-top: 50px;
            margin: 0;
        }
        .container {
            background: white;
            padding: 20px 30px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            width: 100%;
            max-width: 400px;
        }
        h1 {
            margin-top: 0;
            color: #333;
            text-align: center;
        }
        .input-area {
            display: flex;
            gap: 10px;
            margin-bottom: 15px;
        }
        input[type="text"] {
            flex: 1;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 16px;
        }
        button {
            padding: 10px 15px;
            border: none;
            border-radius: 4px;
            background-color: #28a745;
            color: white;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.2s;
        }
        button:hover {
            background-color: #218838;
        }
        .stats {
            font-size: 14px;
            color: #666;
            margin-bottom: 15px;
            text-align: right;
            font-weight: bold;
        }
        ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
        }
        li {
            display: flex;
            align-items: center;
            padding: 10px;
            background: #f9f9f9;
            border: 1px solid #eee;
            margin-bottom: 8px;
            border-radius: 4px;
        }
        .task-text {
            flex: 1;
            word-break: break-word;
        }
        .completed .task-text {
            text-decoration: line-through;
            color: #888;
        }
        .btn-complete {
            background-color: #007bff;
            margin-right: 5px;
            font-size: 14px;
            padding: 5px 10px;
        }
        .btn-complete:hover {
            background-color: #0069d9;
        }
        .completed .btn-complete {
            background-color: #6c757d;
        }
        .completed .btn-complete:hover {
            background-color: #5a6268;
        }
        .btn-delete {
            background-color: #dc3545;
            font-size: 14px;
            padding: 5px 10px;
        }
        .btn-delete:hover {
            background-color: #c82333;
        }
    </style>
</head>
<body>

<div class="container">
    <h1>To-Do List</h1>
    
    <div class="input-area">
        <input type="text" id="taskInput" placeholder="What needs to be done?">
        <button id="addTaskBtn">Add</button>
    </div>

    <div class="stats">
        Remaining tasks: <span id="taskCount">0</span>
    </div>

    <ul id="taskList"></ul>
</div>

<script>
    // Grab elements from the DOM
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const taskCount = document.getElementById('taskCount');

    // Track active tasks
    let remainingTasks = 0;

    // Function to update the on-screen counter
    function updateCounter() {
        taskCount.textContent = remainingTasks;
    }

    // Function to add a new task
    function addTask() {
        const text = taskInput.value.trim();
        
        // Prevent adding empty tasks
        if (text === '') return;

        // Create the list item
        const li = document.createElement('li');

        // Create the text span
        const span = document.createElement('span');
        span.textContent = text;
        span.className = 'task-text';

        // Create the Complete button
        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.className = 'btn-complete';
        
        // Toggle completion status
        completeBtn.onclick = function() {
            li.classList.toggle('completed');
            
            if (li.classList.contains('completed')) {
                completeBtn.textContent = 'Undo';
                remainingTasks--;
            } else {
                completeBtn.textContent = 'Complete';
                remainingTasks++;
            }
            updateCounter();
        };

        // Create the Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'btn-delete';
        
        // Remove task from list
        deleteBtn.onclick = function() {
            // Only decrease counter if the deleted task wasn't already completed
            if (!li.classList.contains('completed')) {
                remainingTasks--;
            }
            li.remove();
            updateCounter();
        };

        // Assemble the list item
        li.appendChild(span);
        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);

        // Add to the list on screen
        taskList.appendChild(li);

        // Clear input, increase counter, and update stats
        taskInput.value = '';
        remainingTasks++;
        updateCounter();
        
        // Focus back on the input for quick typing
        taskInput.focus();
    }

    // Add task when clicking the "Add" button
    addTaskBtn.addEventListener('click', addTask);

    // Add task when pressing the "Enter" key inside the input field
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
</script>

</body>
</html>`
  },
  {
    taskId: 'T1',
    domain: 'Web Application',
    toolId: 'chatgpt',
    toolName: 'ChatGPT (OpenAI GPT-5.5)',
    prompt: 'Build a simple to-do list web app where users can add, complete, and delete tasks. Show a count of remaining tasks.',
    rationale: 'Tests end-to-end application logic including state management, DOM interaction, and user event handling — a canonical vibecoding scenario.',
    language: 'html',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List App</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 500px;
            margin: 40px auto;
            padding: 20px;
        }

        h1 {
            text-align: center;
        }

        .input-group {
            display: flex;
            gap: 10px;
        }

        input {
            flex: 1;
            padding: 10px;
        }

        button {
            padding: 10px 15px;
            cursor: pointer;
        }

        ul {
            list-style: none;
            padding: 0;
            margin-top: 20px;
        }

        li {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px;
            border: 1px solid #ddd;
            margin-bottom: 8px;
            border-radius: 5px;
        }

        .task {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .completed {
            text-decoration: line-through;
            color: gray;
        }

        #taskCount {
            margin-top: 15px;
            font-weight: bold;
        }

        .delete-btn {
            background: crimson;
            color: white;
            border: none;
            border-radius: 4px;
        }
    </style>
</head>
<body>

    <h1>To-Do List</h1>

    <div class="input-group">
        <input type="text" id="taskInput" placeholder="Enter a task">
        <button onclick="addTask()">Add</button>
    </div>

    <ul id="taskList"></ul>

    <div id="taskCount">Remaining Tasks: 0</div>

    <script>
        const taskInput = document.getElementById("taskInput");
        const taskList = document.getElementById("taskList");
        const taskCount = document.getElementById("taskCount");

        function addTask() {
            const text = taskInput.value.trim();

            if (!text) return;

            const li = document.createElement("li");

            li.innerHTML = \`
                <div class="task">
                    <input type="checkbox" onchange="toggleTask(this)">
                    <span>\${text}</span>
                </div>
                <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
            \`;

            taskList.appendChild(li);
            taskInput.value = "";
            updateCount();
        }

        function toggleTask(checkbox) {
            const text = checkbox.nextElementSibling;
            text.classList.toggle("completed");
            updateCount();
        }

        function deleteTask(button) {
            button.parentElement.remove();
            updateCount();
        }

        function updateCount() {
            const tasks = document.querySelectorAll("#taskList li");
            const completed = document.querySelectorAll(
                '#taskList input[type="checkbox"]:checked'
            );

            taskCount.textContent =
                \`Remaining Tasks: \${tasks.length - completed.length}\`;
        }

        taskInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                addTask();
            }
        });
    </script>

</body>
</html>`
  },
  {
    taskId: 'T1',
    domain: 'Web Application',
    toolId: 'claude_sonnet',
    toolName: 'Claude (Sonnet 4.6 Low)',
    prompt: 'Build a simple to-do list web app where users can add, complete, and delete tasks. Show a count of remaining tasks.',
    rationale: 'Tests end-to-end application logic including state management, DOM interaction, and user event handling — a canonical vibecoding scenario.',
    language: 'html',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>My Tasks</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css" />
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #ffffff;
    --bg-secondary: #f5f5f4;
    --text: #1a1a18;
    --text-secondary: #6b6b67;
    --text-tertiary: #a8a8a3;
    --border: rgba(0,0,0,0.12);
    --border-hover: rgba(0,0,0,0.25);
    --success-bg: #eaf3de;
    --success-border: #639922;
    --success-text: #3b6d11;
    --danger-bg: #fcebeb;
    --danger-text: #a32d2d;
    --radius: 8px;
    --radius-lg: 12px;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --bg: #1e1e1c;
      --bg-secondary: #2a2a28;
      --text: #f0ede8;
      --text-secondary: #a8a8a3;
      --text-tertiary: #6b6b67;
      --border: rgba(255,255,255,0.12);
      --border-hover: rgba(255,255,255,0.25);
      --success-bg: #173404;
      --success-border: #639922;
      --success-text: #97c459;
      --danger-bg: #501313;
      --danger-text: #f09595;
    }
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: var(--bg-secondary);
    color: var(--text);
    min-height: 100vh;
    padding: 2rem 1rem 4rem;
  }

  .app {
    max-width: 520px;
    margin: 0 auto;
  }

  .header { margin-bottom: 2rem; }
  .title { font-size: 22px; font-weight: 500; }
  .count-badge {
    display: inline-block;
    background: var(--bg);
    border: 0.5px solid var(--border);
    border-radius: 20px;
    padding: 2px 10px;
    font-size: 13px;
    color: var(--text-secondary);
    margin-top: 8px;
  }
  .count-badge span { font-weight: 500; color: var(--text); }

  .input-row { display: flex; gap: 8px; margin-bottom: 1.5rem; }
  .input-row input {
    flex: 1;
    height: 38px;
    border-radius: var(--radius);
    border: 0.5px solid var(--border);
    background: var(--bg);
    color: var(--text);
    padding: 0 12px;
    font-size: 15px;
    font-family: inherit;
    outline: none;
    transition: border-color 0.15s, box-shadow 0.15s;
  }
  .input-row input:focus {
    border-color: var(--border-hover);
    box-shadow: 0 0 0 3px rgba(128,128,128,0.1);
  }
  .input-row input::placeholder { color: var(--text-tertiary); }

  .add-btn {
    height: 38px;
    padding: 0 16px;
    border-radius: var(--radius);
    border: 0.5px solid var(--border-hover);
    background: transparent;
    color: var(--text);
    font-size: 14px;
    font-family: inherit;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;
    white-space: nowrap;
    transition: background 0.12s, transform 0.1s;
  }
  .add-btn:hover { background: var(--bg-secondary); }
  .add-btn:active { transform: scale(0.98); }

  .filter-row { display: flex; gap: 6px; margin-bottom: 1rem; }
  .filter-btn {
    padding: 4px 12px;
    border-radius: 20px;
    border: 0.5px solid var(--border);
    background: transparent;
    font-size: 13px;
    color: var(--text-secondary);
    cursor: pointer;
    font-family: inherit;
    transition: all 0.12s;
  }
  .filter-btn.active {
    background: var(--bg);
    border-color: var(--border-hover);
    color: var(--text);
    font-weight: 500;
  }

  .task-list { display: flex; flex-direction: column; gap: 6px; }

  .task-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 12px;
    background: var(--bg);
    border: 0.5px solid var(--border);
    border-radius: var(--radius);
    transition: opacity 0.15s, border-color 0.15s;
  }
  .task-item:hover { border-color: var(--border-hover); }
  .task-item.done { opacity: 0.55; }

  .task-check {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 0.5px solid var(--border-hover);
    background: transparent;
    cursor: pointer;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.12s;
  }
  .task-check:hover { background: var(--bg-secondary); }
  .task-check.checked {
    background: var(--success-bg);
    border-color: var(--success-border);
  }
  .task-check .check-icon { display: none; color: var(--success-text); font-size: 12px; }
  .task-check.checked .check-icon { display: block; }

  .task-text {
    flex: 1;
    font-size: 15px;
    color: var(--text);
    line-height: 1.4;
    word-break: break-word;
  }
  .task-item.done .task-text {
    text-decoration: line-through;
    color: var(--text-tertiary);
  }

  .delete-btn {
    width: 28px;
    height: 28px;
    border-radius: var(--radius);
    border: none;
    background: transparent;
    color: var(--text-tertiary);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.12s;
    opacity: 0;
    font-size: 16px;
    flex-shrink: 0;
  }
  .task-item:hover .delete-btn { opacity: 1; }
  .delete-btn:hover { background: var(--danger-bg); color: var(--danger-text); }

  .empty-state {
    text-align: center;
    padding: 2.5rem 1rem;
    color: var(--text-tertiary);
    font-size: 14px;
  }

  .clear-done-btn {
    margin-top: 1.25rem;
    width: 100%;
    padding: 8px;
    border-radius: var(--radius);
    border: 0.5px solid var(--border);
    background: transparent;
    font-size: 13px;
    color: var(--text-secondary);
    cursor: pointer;
    font-family: inherit;
    transition: all 0.12s;
  }
  .clear-done-btn:hover { background: var(--bg); color: var(--text); }
  .clear-done-btn:disabled { opacity: 0.35; cursor: default; }
</style>
</head>
<body>

<div class="app">
  <div class="header">
    <div class="title">My tasks</div>
    <div class="count-badge"><span id="remaining">0</span> remaining</div>
  </div>

  <div class="input-row">
    <input type="text" id="task-input" placeholder="Add a new task…" maxlength="200" aria-label="New task" />
    <button class="add-btn" onclick="addTask()">
      <i class="ti ti-plus"></i> Add
    </button>
  </div>

  <div class="filter-row">
    <button class="filter-btn active" data-filter="all" onclick="setFilter('all')">All</button>
    <button class="filter-btn" data-filter="active" onclick="setFilter('active')">Active</button>
    <button class="filter-btn" data-filter="done" onclick="setFilter('done')">Done</button>
  </div>

  <div class="task-list" id="task-list"></div>

  <button class="clear-done-btn" id="clear-done-btn" onclick="clearDone()">Clear completed</button>
</div>

<script>
  let tasks = [
    { id: 1, text: "Review project brief", done: false },
    { id: 2, text: "Reply to team messages", done: false },
    { id: 3, text: "Pick up groceries", done: true }
  ];
  let filter = 'all';
  let nextId = 4;

  function getFiltered() {
    if (filter === 'active') return tasks.filter(t => !t.done);
    if (filter === 'done') return tasks.filter(t => t.done);
    return tasks;
  }

  function escHtml(s) {
    return s
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function render() {
    const list = document.getElementById('task-list');
    const filtered = getFiltered();
    const remaining = tasks.filter(t => !t.done).length;

    document.getElementById('remaining').textContent = remaining;
    document.getElementById('clear-done-btn').disabled = !tasks.some(t => t.done);

    if (filtered.length === 0) {
      const msgs = {
        all: 'Nothing here yet. Add a task above.',
        active: 'All tasks complete!',
        done: 'No completed tasks yet.'
      };
      list.innerHTML = `<div class="empty-state">\${msgs[filter]}</div>`;
      return;
    }

    list.innerHTML = filtered.map(t => \`
      <div class="task-item\${t.done ? ' done' : ''}">
        <button class="task-check\${t.done ? ' checked' : ''}" onclick="toggle(\${t.id})" aria-label="\${t.done ? 'Mark incomplete' : 'Mark complete'}">
          <i class="ti ti-check check-icon"></i>
        </button>
        <span class="task-text">\${escHtml(t.text)}</span>
        <button class="delete-btn" onclick="remove(\${t.id})" aria-label="Delete task">
          <i class="ti ti-trash"></i>
        </button>
      </div>
    \`).join('');
  }

  function addTask() {
    const input = document.getElementById('task-input');
    const text = input.value.trim();
    if (!text) return;
    tasks.unshift({ id: nextId++, text, done: false });
    input.value = '';
    if (filter === 'done') setFilter('all');
    else render();
    input.focus();
  }

  function toggle(id) {
    const t = tasks.find(t => t.id === id);
    if (t) t.done = !t.done;
    render();
  }

  function remove(id) {
    tasks = tasks.filter(t => t.id !== id);
    render();
  }

  function clearDone() {
    tasks = tasks.filter(t => !t.done);
    if (filter === 'done') setFilter('all');
    else render();
  }

  function setFilter(f) {
    filter = f;
    document.querySelectorAll('.filter-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.filter === f);
    });
    render();
  }

  document.getElementById('task-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') addTask();
  });

  render();
</script>
</body>
</html>`
  },
  {
    taskId: 'T1',
    domain: 'Web Application',
    toolId: 'claude_haiku',
    toolName: 'Claude (Haiku 4.5) Extended',
    prompt: 'Build a simple to-do list web app where users can add, complete, and delete tasks. Show a count of remaining tasks.',
    rationale: 'Tests end-to-end application logic including state management, DOM interaction, and user event handling — a canonical vibecoding scenario.',
    language: 'html',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }

        .container {
            background: white;
            border-radius: 12px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
            max-width: 500px;
            width: 100%;
            padding: 30px;
        }

        h1 {
            color: #333;
            margin-bottom: 10px;
            font-size: 28px;
        }

        .stats {
            background: #f5f5f5;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 25px;
            text-align: center;
        }

        .stats-label {
            color: #999;
            font-size: 13px;
            margin-bottom: 5px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .stats-number {
            color: #667eea;
            font-size: 36px;
            font-weight: bold;
        }

        .input-group {
            display: flex;
            gap: 8px;
            margin-bottom: 25px;
        }

        input[type="text"] {
            flex: 1;
            padding: 12px 15px;
            border: 1px solid #ddd;
            border-radius: 6px;
            font-size: 15px;
            transition: border-color 0.3s;
        }

        input[type="text"]:focus {
            outline: none;
            border-color: #667eea;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        input[type="text"]::placeholder {
            color: #bbb;
        }

        button {
            background: #667eea;
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 600;
            transition: background 0.3s, transform 0.1s;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        button:hover {
            background: #5568d3;
        }

        button:active {
            transform: scale(0.98);
        }

        .tasks-list {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .task-item {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px;
            background: white;
            border: 1px solid #eee;
            border-radius: 6px;
            transition: all 0.2s;
        }

        .task-item:hover {
            border-color: #ddd;
            background: #fafafa;
        }

        .task-item input[type="checkbox"] {
            width: 20px;
            height: 20px;
            cursor: pointer;
            flex-shrink: 0;
            accent-color: #667eea;
        }

        .task-text {
            flex: 1;
            color: #333;
            font-size: 15px;
            word-break: break-word;
            transition: all 0.2s;
        }

        .task-item.completed .task-text {
            color: #bbb;
            text-decoration: line-through;
        }

        .delete-btn {
            background: transparent;
            color: #999;
            padding: 6px;
            border-radius: 4px;
            transition: all 0.2s;
            font-size: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .delete-btn:hover {
            background: #ffe6e6;
            color: #e74c3c;
        }

        .delete-btn i {
            font-size: 16px;
        }

        .empty-state {
            text-align: center;
            color: #999;
            padding: 40px 20px;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>📝 My Tasks</h1>
        
        <div class="stats">
            <div class="stats-label">Remaining</div>
            <div class="stats-number" id="remainingCount">0</div>
            <div class="stats-label" style="margin-top: 5px; font-size: 12px;">tasks</div>
        </div>

        <div class="input-group">
            <input 
                type="text" 
                id="taskInput" 
                placeholder="Add a new task..."
                autocomplete="off"
            >
            <button id="addBtn">
                <i class="fas fa-plus"></i>
                Add
            </button>
        </div>

        <div class="tasks-list" id="tasksList">
            <div class="empty-state">No tasks yet. Add one to get started!</div>
        </div>
    </div>

    <script>
        const taskInput = document.getElementById('taskInput');
        const addBtn = document.getElementById('addBtn');
        const tasksList = document.getElementById('tasksList');
        const remainingCount = document.getElementById('remainingCount');

        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        function updateUI() {
            tasksList.innerHTML = '';

            if (tasks.length === 0) {
                tasksList.innerHTML = '<div class="empty-state">No tasks yet. Add one to get started!</div>';
            } else {
                tasks.forEach(task => {
                    const taskItem = document.createElement('div');
                    taskItem.className = \`task-item \${task.completed ? 'completed' : ''}\`;
                    taskItem.innerHTML = \`
                        <input type="checkbox" \${task.completed ? 'checked' : ''} onchange="toggleTask(\${task.id})">
                        <span class="task-text">\${escapeHtml(task.text)}</span>
                        <button class="delete-btn" onclick="deleteTask(\${task.id})" aria-label="Delete task">
                            <i class="fas fa-trash"></i>
                        </button>
                    \`;
                    tasksList.appendChild(taskItem);
                });
            }

            updateRemainingCount();
            saveTasks();
        }

        function updateRemainingCount() {
            const remaining = tasks.filter(task => !task.completed).length;
            remainingCount.textContent = remaining;
        }

        function addTask() {
            const text = taskInput.value.trim();
            if (text) {
                tasks.push({
                    id: Date.now(),
                    text: text,
                    completed: false
                });
                taskInput.value = '';
                updateUI();
                taskInput.focus();
            }
        }

        function toggleTask(id) {
            const task = tasks.find(t => t.id === id);
            if (task) {
                task.completed = !task.completed;
                updateUI();
            }
        }

        function deleteTask(id) {
            tasks = tasks.filter(t => t.id !== id);
            updateUI();
        }

        function saveTasks() {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }

        function escapeHtml(text) {
            const map = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#039;'
            };
            return text.replace(/[&<>"']/g, m => map[m]);
        }

        addBtn.addEventListener('click', addTask);
        taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                addTask();
            }
        });

        updateUI();
    </script>
</body>
</html>`
  },
  {
    taskId: 'T1',
    domain: 'Web Application',
    toolId: 'deepseek',
    toolName: 'DeepSeek (DeepSeek-V3)',
    prompt: 'Build a simple to-do list web app where users can add, complete, and delete tasks. Show a count of remaining tasks.',
    rationale: 'Tests end-to-end application logic including state management, DOM interaction, and user event handling — a canonical vibecoding scenario.',
    language: 'html',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
  <title>✓ ClearTasks | Simple To-Do List</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: system-ui, 'Segoe UI', 'Inter', 'Helvetica Neue', sans-serif;
    }

    body {
      background: linear-gradient(145deg, #e9eef3 0%, #dce3ec 100%);
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.5rem;
    }

    /* Main card */
    .todo-card {
      max-width: 620px;
      width: 100%;
      background: rgba(255, 255, 255, 0.96);
      backdrop-filter: blur(0px);
      border-radius: 2rem;
      box-shadow: 0 25px 45px -12px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(0, 0, 0, 0.05);
      overflow: hidden;
      transition: all 0.2s ease;
    }

    /* header area */
    .header {
      background: #1f2b3c;
      padding: 1.7rem 2rem;
      color: white;
    }

    .header h1 {
      font-size: 1.8rem;
      font-weight: 600;
      letter-spacing: -0.3px;
      display: flex;
      align-items: center;
      gap: 0.6rem;
    }

    .header h1::before {
      content: "✓";
      background: #2ecc71;
      font-size: 1.5rem;
      font-weight: bold;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: #38bdf8;
      color: #0f172a;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    }

    .task-stats {
      margin-top: 0.75rem;
      font-size: 0.9rem;
      background: rgba(255, 255, 255, 0.15);
      display: inline-block;
      padding: 0.3rem 1rem;
      border-radius: 40px;
      font-weight: 500;
      backdrop-filter: blur(2px);
    }

    /* form area */
    .add-task-form {
      padding: 1.5rem 2rem;
      background: #ffffff;
      border-bottom: 1px solid #eef2f6;
      display: flex;
      gap: 0.75rem;
      flex-wrap: wrap;
    }

    .task-input {
      flex: 1;
      padding: 0.85rem 1rem;
      border: 1.5px solid #e2e8f0;
      border-radius: 60px;
      font-size: 1rem;
      background: #fefefe;
      transition: all 0.2s;
      outline: none;
      font-weight: 500;
    }

    .task-input:focus {
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
    }

    .add-btn {
      background: #1e293b;
      border: none;
      color: white;
      font-weight: 600;
      padding: 0 1.6rem;
      border-radius: 60px;
      font-size: 0.95rem;
      cursor: pointer;
      transition: 0.2s;
      display: flex;
      align-items: center;
      gap: 6px;
      letter-spacing: 0.3px;
    }

    .add-btn:hover {
      background: #0f172a;
      transform: scale(0.97);
    }

    /* tasks list container */
    .tasks-container {
      padding: 0.5rem 1rem 1.8rem 1rem;
      background: #ffffff;
    }

    .task-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.65rem;
    }

    /* individual task item */
    .task-item {
      background: #f9fafc;
      border-radius: 1.2rem;
      border: 1px solid #edf2f7;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.7rem 1rem 0.7rem 1.2rem;
      transition: all 0.2s;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);
    }

    .task-item:hover {
      background: #ffffff;
      border-color: #cbd5e1;
      box-shadow: 0 6px 12px -8px rgba(0, 0, 0, 0.1);
    }

    /* task left side (checkbox + text) */
    .task-info {
      display: flex;
      align-items: center;
      gap: 0.9rem;
      flex: 1;
      cursor: pointer;
    }

    .task-check {
      width: 1.4rem;
      height: 1.4rem;
      accent-color: #2c7da0;
      cursor: pointer;
      transition: 0.1s;
    }

    .task-text {
      font-size: 1rem;
      font-weight: 500;
      color: #1f2a3e;
      word-break: break-word;
      padding-right: 0.5rem;
      transition: color 0.2s, text-decoration 0.2s;
    }

    /* completed task style */
    .completed .task-text {
      text-decoration: line-through;
      color: #8ba0bc;
    }

    /* delete button */
    .delete-btn {
      background: transparent;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: #94a3b8;
      padding: 0.2rem 0.5rem;
      border-radius: 40px;
      transition: all 0.2s;
      line-height: 1;
      font-weight: 400;
    }

    .delete-btn:hover {
      color: #e11d48;
      background: #ffe4e6;
      transform: scale(1.05);
    }

    /* empty state */
    .empty-message {
      text-align: center;
      padding: 2.5rem 1rem;
      color: #94a3b8;
      font-weight: 500;
      background: #fafcff;
      border-radius: 1.5rem;
      margin-top: 0.5rem;
      font-size: 0.95rem;
    }

    /* footer subtle */
    .footer-note {
      background: #f8fafc;
      padding: 0.8rem;
      text-align: center;
      font-size: 0.75rem;
      color: #6c7a91;
      border-top: 1px solid #eef2f8;
    }

    button {
      user-select: none;
    }

    @media (max-width: 480px) {
      .todo-card {
        border-radius: 1.5rem;
      }
      .header {
        padding: 1.3rem 1.2rem;
      }
      .add-task-form {
        padding: 1rem 1.2rem;
      }
      .task-item {
        padding: 0.6rem 0.8rem;
      }
      .task-text {
        font-size: 0.9rem;
      }
    }
  </style>
</head>
<body>

<div class="todo-card">
  <div class="header">
    <h1>taskflow</h1>
    <div class="task-stats" id="remainingCounter">
      📋 0 tasks remaining
    </div>
  </div>

  <div class="add-task-form">
    <input type="text" id="taskInput" class="task-input" placeholder="Write a new task ..." autocomplete="off">
    <button id="addTaskBtn" class="add-btn">+ Add task</button>
  </div>

  <div class="tasks-container">
    <ul class="task-list" id="taskList">
      <!-- dynamically rendered tasks will appear here -->
      <li class="empty-message">✨ Your to-do list looks peaceful. Add a task!</li>
    </ul>
  </div>
  <div class="footer-note">
    ✅ click check to complete • 🗑️ delete to remove
  </div>
</div>

<script>
  (function() {
    // ---------- STATE MANAGEMENT ----------
    // Each task: { id: string, text: string, completed: boolean }
    let tasks = [];

    // DOM elements
    const taskListEl = document.getElementById('taskList');
    const taskInput = document.getElementById('taskInput');
    const addBtn = document.getElementById('addTaskBtn');
    const remainingCounterSpan = document.getElementById('remainingCounter');

    // Helper: save tasks to localStorage (optional, persists across reloads)
    function saveToLocalStorage() {
      localStorage.setItem('simple_todo_app_tasks', JSON.stringify(tasks));
    }

    // Helper: load tasks from localStorage
    function loadFromLocalStorage() {
      const stored = localStorage.getItem('simple_todo_app_tasks');
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed)) {
            tasks = parsed;
          } else {
            tasks = [];
          }
        } catch(e) {
          tasks = [];
        }
      } else {
        // default demo tasks to showcase functionality (but not overwhelming)
        tasks = [
          { id: crypto.randomUUID ? crypto.randomUUID() : 'id-' + Date.now() + '-1', text: 'Review project proposal', completed: false },
          { id: crypto.randomUUID ? crypto.randomUUID() : 'id-' + Date.now() + '-2', text: 'Reply to emails', completed: true },
          { id: crypto.randomUUID ? crypto.randomUUID() : 'id-' + Date.now() + '-3', text: 'Implement task counter', completed: false }
        ];
      }
    }

    // Helper: count remaining (not completed) tasks
    function getRemainingCount() {
      return tasks.filter(task => !task.completed).length;
    }

    // Update the UI: render full task list & update remaining counter
    function render() {
      // clear current list (preserve container)
      while (taskListEl.firstChild) {
        taskListEl.removeChild(taskListEl.firstChild);
      }

      if (tasks.length === 0) {
        // show empty state message
        const emptyLi = document.createElement('li');
        emptyLi.className = 'empty-message';
        emptyLi.textContent = '🌱 No tasks yet. Add something meaningful!';
        taskListEl.appendChild(emptyLi);
      } else {
        // loop through tasks and create DOM elements
        tasks.forEach(task => {
          const li = document.createElement('li');
          li.className = 'task-item';
          if (task.completed) {
            li.classList.add('completed');
          }
          li.setAttribute('data-task-id', task.id);

          // left side: checkbox + text container
          const taskInfoDiv = document.createElement('div');
          taskInfoDiv.className = 'task-info';

          const checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          checkbox.className = 'task-check';
          checkbox.checked = task.completed;
          // store id reference for event handling
          checkbox.addEventListener('change', (e) => {
            e.stopPropagation();
            toggleComplete(task.id);
          });

          const taskSpan = document.createElement('span');
          taskSpan.className = 'task-text';
          taskSpan.textContent = task.text;

          taskInfoDiv.appendChild(checkbox);
          taskInfoDiv.appendChild(taskSpan);

          // delete button
          const deleteBtn = document.createElement('button');
          deleteBtn.innerHTML = '✕';
          deleteBtn.className = 'delete-btn';
          deleteBtn.setAttribute('aria-label', 'Delete task');
          deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            deleteTaskById(task.id);
          });

          li.appendChild(taskInfoDiv);
          li.appendChild(deleteBtn);

          // optional: clicking on whole task-info area toggles checkbox (better UX)
          taskInfoDiv.style.cursor = 'pointer';
          taskInfoDiv.addEventListener('click', (e) => {
            // prevent double toggling if the click originated from checkbox itself
            if (e.target !== checkbox) {
              checkbox.checked = !checkbox.checked;
              // manually trigger change event
              const changeEvent = new Event('change', { bubbles: true });
              checkbox.dispatchEvent(changeEvent);
            }
          });

          taskListEl.appendChild(li);
        });
      }

      // update remaining tasks count
      const remaining = getRemainingCount();
      const taskWord = remaining === 1 ? 'task' : 'tasks';
      remainingCounterSpan.innerHTML = `📋 \${remaining} \${taskWord} remaining`;
    }

    // core actions
    function addNewTask() {
      const rawText = taskInput.value.trim();
      if (rawText === '') {
        // subtle feedback: highlight input briefly
        taskInput.style.borderColor = '#f97316';
        setTimeout(() => {
          taskInput.style.borderColor = '#e2e8f0';
        }, 600);
        return;
      }

      // create unique id (fallback for older browsers)
      const newId = crypto.randomUUID ? crypto.randomUUID() : Date.now() + '-' + Math.random().toString(36).substring(2, 8);
      const newTask = {
        id: newId,
        text: rawText,
        completed: false,
      };
      tasks.push(newTask);
      taskInput.value = '';      // clear input
      taskInput.focus();
      saveToLocalStorage();
      render();
    }

    function toggleComplete(taskId) {
      const task = tasks.find(t => t.id === taskId);
      if (task) {
        task.completed = !task.completed;
        saveToLocalStorage();
        render();
      }
    }

    function deleteTaskById(taskId) {
      tasks = tasks.filter(task => task.id !== taskId);
      saveToLocalStorage();
      render();
    }

    // optional: handle 'Enter' key in input field
    function handleKeyPress(e) {
      if (e.key === 'Enter' || e.keyCode === 13) {
        e.preventDefault();
        addNewTask();
      }
    }

    // additional: clear any leftover demo tasks? we respect loaded storage.
    // but ensure we have default tasks only if localStorage empty (already in loadFromLocalStorage)
    // also make sure we have at least a proper render after loading data
    function init() {
      loadFromLocalStorage();
      // migration guard: if any task lacks completed flag (just in case)
      tasks = tasks.map(t => ({
        id: t.id || (crypto.randomUUID ? crypto.randomUUID() : Date.now() + '-' + Math.random()),
        text: t.text || 'Untitled task',
        completed: typeof t.completed === 'boolean' ? t.completed : false
      }));
      saveToLocalStorage();   // normalize stored data
      render();

      // attach event listeners
      addBtn.addEventListener('click', addNewTask);
      taskInput.addEventListener('keypress', handleKeyPress);
    }

    // start the application
    init();
  })();
</script>
</body>
</html>`
  },
  // T2 - Data Processing
  {
    taskId: 'T2',
    domain: 'Data Processing',
    toolId: 'gemini',
    toolName: 'Gemini (3.1 Pro)',
    prompt: 'Write a function that takes a list of student names and scores, calculates the average, and returns the top 3 performers.',
    rationale: 'Isolates algorithmic reasoning and data transformation — exposes reliability and transparency differences in how tools handle edge cases such as ties or empty inputs.',
    language: 'python',
    code: `def analyze_class_performance(student_list):
    """
    Takes a list of tuples (name, score), calculates the average score,
    and returns the average along with the top 3 performers.
    """
    if not student_list:
        return 0, []

    # 1. Calculate the average score
    total_score = sum(score for name, score in student_list)
    average_score = total_score / len(student_list)
    
    # 2. Sort students by score in descending order
    # x[1] refers to the score in the (name, score) tuple
    sorted_students = sorted(student_list, key=lambda x: x[1], reverse=True)
    
    # 3. Get the top 3 performers
    top_three = sorted_students[:3]
    
    return average_score, top_three`
  },
  {
    taskId: 'T2',
    domain: 'Data Processing',
    toolId: 'chatgpt',
    toolName: 'ChatGPT (OpenAI GPT-5.5)',
    prompt: 'Write a function that takes a list of student names and scores, calculates the average, and returns the top 3 performers.',
    rationale: 'Isolates algorithmic reasoning and data transformation — exposes reliability and transparency differences in how tools handle edge cases such as ties or empty inputs.',
    language: 'python',
    code: `def get_top_performers(students):
    """
    students: list of tuples in the form (name, score)

    Returns:
        average_score: float
        top_3: list of tuples (name, score)
    """
    if not students:
        return 0, []

    # Calculate average score
    total_score = sum(score for _, score in students)
    average_score = total_score / len(students)

    # Sort students by score in descending order
    top_3 = sorted(students, key=lambda x: x[1], reverse=True)[:3]

    return average_score, top_3


# Example usage
students = [
    ("Alice", 88),
    ("Bob", 95),
    ("Charlie", 78),
    ("David", 92),
    ("Eva", 85)
]

average, top_students = get_top_performers(students)

print("Average Score:", average)
print("Top 3 Performers:", top_students)`
  },
  {
    taskId: 'T2',
    domain: 'Data Processing',
    toolId: 'claude_sonnet',
    toolName: 'Claude (Sonnet 4.6 Low)',
    prompt: 'Write a function that takes a list of student names and scores, calculates the average, and returns the top 3 performers.',
    rationale: 'Isolates algorithmic reasoning and data transformation — exposes reliability and transparency differences in how tools handle edge cases such as ties or empty inputs.',
    language: 'python',
    code: `def top_performers(students: list[dict], top_n: int = 3) -> dict:
    """
    Calculates the class average and returns the top N performers.

    Args:
        students: List of dicts with 'name' (str) and 'score' (float/int).
        top_n:    Number of top performers to return (default: 3).

    Returns:
        A dict with 'average' and 'top_performers' (list of dicts).
    """
    if not students:
        return {"average": 0, "top_performers": []}

    average = sum(s["score"] for s in students) / len(students)

    sorted_students = sorted(students, key=lambda s: s["score"], reverse=True)

    return {
        "average": round(average, 2),
        "top_performers": sorted_students[:top_n]
    }`
  },
  {
    taskId: 'T2',
    domain: 'Data Processing',
    toolId: 'claude_haiku',
    toolName: 'Claude (Haiku 4.5) Extended',
    prompt: 'Write a function that takes a list of student names and scores, calculates the average, and returns the top 3 performers.',
    rationale: 'Isolates algorithmic reasoning and data transformation — exposes reliability and transparency differences in how tools handle edge cases such as ties or empty inputs.',
    language: 'python',
    code: `def get_top_performers(students):
    """
    Calculate average score and return top 3 performers.
    
    Args:
        students: List of tuples (name, score)
        
    Returns:
        Dictionary with 'average' and 'top_3' keys
    """
    if not students:
        return {'average': 0, 'top_3': []}
    
    # Calculate average
    total = sum(score for name, score in students)
    average = total / len(students)
    
    # Sort by score descending and get top 3
    sorted_students = sorted(students, key=lambda x: x[1], reverse=True)
    top_3 = sorted_students[:3]
    
    return {
        'average': average,
        'top_3': top_3
    }


# Example usage
students = [
    ("Alice", 95),
    ("Bob", 87),
    ("Charlie", 92),
    ("Diana", 88),
    ("Eve", 91),
]

result = get_top_performers(students)
print(f"Average: {result['average']:.2f}")
print(f"Top 3 performers:")
for name, score in result['top_3']:
    print(f"  {name}: {score}")`
  },
  {
    taskId: 'T2',
    domain: 'Data Processing',
    toolId: 'deepseek',
    toolName: 'DeepSeek (DeepSeek-V3)',
    prompt: 'Write a function that takes a list of student names and scores, calculates the average, and returns the top 3 performers.',
    rationale: 'Isolates algorithmic reasoning and data transformation — exposes reliability and transparency differences in how tools handle edge cases such as ties or empty inputs.',
    language: 'python',
    code: `def top_3_performers(students_data):
    """
    Takes a list of student names and scores, calculates the average,
    and returns the top 3 performers.
    
    Args:
        students_data: List of tuples/lists in format [(name, score1, score2, ...), ...]
                      or dictionary with names as keys and scores as values
    
    Returns:
        List of tuples [(name, average_score), ...] for top 3 performers
    """
    
    # Handle different input formats
    averages = []
    
    # Case 1: List of tuples with name and multiple scores
    if isinstance(students_data[0], (list, tuple)):
        for student in students_data:
            name = student[0]
            scores = student[1:]
            avg_score = sum(scores) / len(scores)
            averages.append((name, avg_score))
    
    # Case 2: Dictionary with name as key and scores as value
    elif isinstance(students_data, dict):
        for name, scores in students_data.items():
            avg_score = sum(scores) / len(scores)
            averages.append((name, avg_score))
    
    # Sort by average score in descending order and get top 3
    averages.sort(key=lambda x: x[1], reverse=True)
    
    return averages[:3]


# Alternative version with more robust error handling
def top_3_performers_robust(students_data):
    """
    More robust version with error handling and flexible input formats.
    
    Args:
        students_data: Can be:
            - List of [name, score1, score2, ...]
            - List of (name, score1, score2, ...)
            - Dictionary {name: [score1, score2, ...]}
            - List of dictionaries [{'name': name, 'scores': [scores]}]
    
    Returns:
        List of top 3 performers with their average scores
    """
    if not students_data:
        return []
    
    averages = []
    
    # Determine input format and calculate averages
    if isinstance(students_data, dict):
        # Dictionary format: {name: [scores]}
        for name, scores in students_data.items():
            if scores:  # Check if scores list is not empty
                avg_score = sum(scores) / len(scores)
                averages.append((name, avg_score))
    
    elif isinstance(students_data, list):
        if len(students_data) > 0:
            first_item = students_data[0]
            
            # List of tuples/lists: [(name, score1, score2), ...]
            if isinstance(first_item, (list, tuple)):
                for student in students_data:
                    if len(student) >= 2:  # At least name and one score
                        name = student[0]
                        scores = student[1:]
                        avg_score = sum(scores) / len(scores)
                        averages.append((name, avg_score))
            
            # List of dictionaries: [{'name': name, 'scores': [scores]}, ...]
            elif isinstance(first_item, dict):
                for student in students_data:
                    if 'name' in student and 'scores' in student:
                        name = student['name']
                        scores = student['scores']
                        if scores:
                            avg_score = sum(scores) / len(scores)
                            averages.append((name, avg_score))
    
    # Sort by average score (descending) and get top 3
    averages.sort(key=lambda x: x[1], reverse=True)
    
    return averages[:3]


# Example usage and test cases
if __name__ == "__main__":
    # Example 1: List of tuples
    students1 = [
        ("Alice", 85, 90, 88, 92),
        ("Bob", 78, 82, 79, 85),
        ("Charlie", 95, 94, 96, 93),
        ("Diana", 88, 87, 90, 89),
        ("Eve", 92, 91, 94, 93)
    ]
    
    print("Example 1 (List of tuples):")
    result1 = top_3_performers(students1)
    for name, avg in result1:
        print(f"{name}: {avg:.2f}")
    print()
    
    # Example 2: Dictionary format
    students2 = {
        "Alice": [85, 90, 88, 92],
        "Bob": [78, 82, 79, 85],
        "Charlie": [95, 94, 96, 93],
        "Diana": [88, 87, 90, 89],
        "Eve": [92, 91, 94, 93]
    }
    
    print("Example 2 (Dictionary):")
    result2 = top_3_performers(students2)
    for name, avg in result2:
        print(f"{name}: {avg:.2f}")
    print()
    
    # Example 3: List of dictionaries format
    students3 = [
        {"name": "Alice", "scores": [85, 90, 88, 92]},
        {"name": "Bob", "scores": [78, 82, 79, 85]},
        {"name": "Charlie", "scores": [95, 94, 96, 93]},
        {"name": "Diana", "scores": [88, 87, 90, 89]},
        {"name": "Eve", "scores": [92, 91, 94, 93]}
    ]
    
    print("Example 3 (List of dictionaries):")
    result3 = top_3_performers_robust(students3)
    for name, avg in result3:
        print(f"{name}: {avg:.2f}")`
  },
  // T3 - UI Component
  {
    taskId: 'T3',
    domain: 'UI Component',
    toolId: 'gemini',
    toolName: 'Gemini (3.1 Pro)',
    prompt: 'Create a responsive navigation bar with a logo on the left, three menu links in the centre, and a login button on the right.',
    rationale: 'Tests structural and layout reasoning without application logic — useful for isolating controllability, as layout behaviour is highly sensitive to prompt interpretation.',
    language: 'html',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Navbar</title>

  <style> 
    /* Basic Reset */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Navbar Container */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2c3e50;
  padding: 1rem 5%;
}

/* Logo Styling */
.navbar-logo a {
  color: #ffffff;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 1px;
}

/* Center Links */
.navbar-links {
  display: flex;
  list-style: none;
  gap: 2rem; /* Spacing between links */
}

.navbar-links a {
  color: #ecf0f1;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.navbar-links a:hover {
  color: #3498db;
}

/* Right Action Button */
.login-btn {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-btn:hover {
  background-color: #2980b9;
}

/* Responsive Design for Mobile Devices */
@media screen and (max-width: 768px) {
  .navbar {
    flex-direction: column;
    padding: 1rem;
  }

  .navbar-logo {
    margin-bottom: 1rem;
  }

  .navbar-links {
    flex-direction: column;
    width: 100%;
    text-align: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .navbar-actions {
    width: 100%;
  }

  .login-btn {
    width: 100%;
  }
}
    </style>
</head>
<body>

  <nav class="navbar">
    <div class="navbar-logo">
      <a href="#">BrandLogo</a>
    </div>

    <ul class="navbar-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">Features</a></li>
      <li><a href="#">Pricing</a></li>
    </ul>

    <div class="navbar-actions">
      <button class="login-btn">Login</button>
    </div>
  </nav>

</body>
</html>`
  },
  {
    taskId: 'T3',
    domain: 'UI Component',
    toolId: 'chatgpt',
    toolName: 'ChatGPT (OpenAI GPT-5.5)',
    prompt: 'Create a responsive navigation bar with a logo on the left, three menu links in the centre, and a login button on the right.',
    rationale: 'Tests structural and layout reasoning without application logic — useful for isolating controllability, as layout behaviour is highly sensitive to prompt interpretation.',
    language: 'html',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Responsive Navbar</title>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: Arial, sans-serif;
    }

    .navbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 2rem;
        background-color: #1f2937;
        color: white;
    }

    .logo {
        font-size: 1.5rem;
        font-weight: bold;
    }

    .nav-links {
        display: flex;
        gap: 2rem;
        list-style: none;
    }

    .nav-links a {
        color: white;
        text-decoration: none;
        transition: color 0.3s ease;
    }

    .nav-links a:hover {
        color: #60a5fa;
    }

    .login-btn {
        padding: 0.6rem 1.2rem;
        border: none;
        border-radius: 6px;
        background-color: #3b82f6;
        color: white;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .login-btn:hover {
        background-color: #2563eb;
    }

    /* Responsive */
    @media (max-width: 768px) {
        .navbar {
            flex-direction: column;
            gap: 1rem;
        }

        .nav-links {
            flex-wrap: wrap;
            justify-content: center;
        }
    }
</style>
</head>
<body>

<nav class="navbar">
    <div class="logo">MyLogo</div>

    <ul class="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
    </ul>

    <button class="login-btn">Login</button>
</nav>

</body>
</html>`
  },
  {
    taskId: 'T3',
    domain: 'UI Component',
    toolId: 'claude_sonnet',
    toolName: 'Claude (Sonnet 4.6 Low)',
    prompt: 'Create a responsive navigation bar with a logo on the left, three menu links in the centre, and a login button on the right.',
    rationale: 'Tests structural and layout reasoning without application logic — useful for isolating controllability, as layout behaviour is highly sensitive to prompt interpretation.',
    language: 'html',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Responsive Navbar</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg:        #0F1729;
      --bg-card:   #161F35;
      --border:    rgba(255,255,255,0.08);
      --text:      #E2E8F0;
      --muted:     #8A97B0;
      --accent:    #6366F1;
      --accent-glow: rgba(99,102,241,0.45);
      --white:     #FFFFFF;
      --radius:    10px;
      --nav-h:     68px;
    }

    html { font-family: 'Inter', sans-serif; }

    body {
      background: var(--bg);
      color: var(--text);
      min-height: 100vh;
    }

    /* ── NAV SHELL ──────────────────────────────────────── */
    nav {
      position: sticky;
      top: 0;
      z-index: 100;
      height: var(--nav-h);
      background: rgba(15,23,41,0.85);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      border-bottom: 1px solid var(--border);
    }

    .nav-inner {
      max-width: 1200px;
      margin: 0 auto;
      height: 100%;
      padding: 0 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
    }

    /* ── LOGO ───────────────────────────────────────────── */
    .logo {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      flex-shrink: 0;
    }

    .logo-mark {
      width: 34px;
      height: 34px;
      background: var(--accent);
      border-radius: 8px;
      display: grid;
      place-items: center;
      box-shadow: 0 0 16px var(--accent-glow);
    }

    .logo-mark svg { display: block; }

    .logo-wordmark {
      font-size: 17px;
      font-weight: 700;
      letter-spacing: -0.03em;
      color: var(--white);
    }

    .logo-wordmark span {
      color: var(--accent);
    }

    /* ── CENTRE LINKS ───────────────────────────────────── */
    .nav-links {
      display: flex;
      align-items: center;
      gap: 4px;
      list-style: none;
      position: relative;
    }

    .nav-links li a {
      display: block;
      padding: 7px 16px;
      font-size: 14.5px;
      font-weight: 500;
      color: var(--muted);
      text-decoration: none;
      border-radius: 7px;
      transition: color 0.2s, background 0.2s;
      position: relative;
    }

    .nav-links li a::after {
      content: '';
      position: absolute;
      bottom: 2px;
      left: 50%;
      transform: translateX(-50%) scaleX(0);
      width: calc(100% - 32px);
      height: 2px;
      background: var(--accent);
      border-radius: 2px;
      transition: transform 0.22s cubic-bezier(0.34,1.56,0.64,1);
    }

    .nav-links li a:hover {
      color: var(--white);
      background: rgba(255,255,255,0.05);
    }

    .nav-links li a:hover::after,
    .nav-links li a.active::after {
      transform: translateX(-50%) scaleX(1);
    }

    .nav-links li a.active {
      color: var(--white);
    }

    /* ── RIGHT: LOGIN ───────────────────────────────────── */
    .nav-right {
      display: flex;
      align-items: center;
      gap: 12px;
      flex-shrink: 0;
    }

    .btn-login {
      padding: 9px 22px;
      font-size: 14px;
      font-weight: 600;
      font-family: inherit;
      color: var(--white);
      background: var(--accent);
      border: none;
      border-radius: var(--radius);
      cursor: pointer;
      letter-spacing: -0.01em;
      position: relative;
      overflow: hidden;
      transition: transform 0.15s, box-shadow 0.2s;
      box-shadow: 0 0 0 0 var(--accent-glow);
    }

    .btn-login::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%);
      opacity: 0;
      transition: opacity 0.2s;
    }

    .btn-login:hover {
      transform: translateY(-1px);
      box-shadow: 0 0 24px var(--accent-glow), 0 4px 16px rgba(0,0,0,0.3);
    }

    .btn-login:hover::before { opacity: 1; }
    .btn-login:active { transform: translateY(0); }

    /* ── HAMBURGER ──────────────────────────────────────── */
    .hamburger {
      display: none;
      flex-direction: column;
      justify-content: center;
      gap: 5px;
      width: 36px;
      height: 36px;
      padding: 6px;
      background: none;
      border: none;
      cursor: pointer;
      border-radius: 7px;
      transition: background 0.2s;
    }

    .hamburger:hover { background: rgba(255,255,255,0.07); }

    .hamburger span {
      display: block;
      height: 2px;
      background: var(--text);
      border-radius: 2px;
      transition: transform 0.25s, opacity 0.25s, width 0.25s;
      transform-origin: center;
    }

    .hamburger span:nth-child(2) { width: 70%; }

    .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
    .hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
    .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

    /* ── MOBILE DRAWER ──────────────────────────────────── */
    .mobile-drawer {
      display: none;
      position: fixed;
      top: var(--nav-h);
      left: 0;
      right: 0;
      background: var(--bg-card);
      border-bottom: 1px solid var(--border);
      padding: 12px 20px 20px;
      flex-direction: column;
      gap: 4px;
      transform: translateY(-8px);
      opacity: 0;
      pointer-events: none;
      transition: transform 0.25s ease, opacity 0.25s ease;
    }

    .mobile-drawer.open {
      transform: translateY(0);
      opacity: 1;
      pointer-events: all;
    }

    .mobile-drawer a {
      display: block;
      padding: 11px 14px;
      font-size: 15px;
      font-weight: 500;
      color: var(--muted);
      text-decoration: none;
      border-radius: 8px;
      transition: background 0.15s, color 0.15s;
    }

    .mobile-drawer a:hover,
    .mobile-drawer a.active {
      background: rgba(255,255,255,0.06);
      color: var(--white);
    }

    .mobile-drawer .btn-login {
      margin-top: 8px;
      width: 100%;
      padding: 12px;
      font-size: 15px;
      text-align: center;
    }

    /* ── RESPONSIVE ─────────────────────────────────────── */
    @media (max-width: 700px) {
      .nav-links,
      .nav-right .btn-login { display: none; }
      .hamburger { display: flex; }
      .mobile-drawer { display: flex; }
    }

    /* ── DEMO PAGE BODY ─────────────────────────────────── */
    .demo-body {
      max-width: 800px;
      margin: 80px auto;
      padding: 0 24px;
      text-align: center;
    }

    .demo-body h1 {
      font-size: clamp(28px, 5vw, 48px);
      font-weight: 700;
      letter-spacing: -0.03em;
      line-height: 1.18;
      color: var(--white);
      margin-bottom: 16px;
    }

    .demo-body h1 em {
      font-style: normal;
      color: var(--accent);
    }

    .demo-body p {
      font-size: 17px;
      color: var(--muted);
      line-height: 1.7;
      max-width: 520px;
      margin: 0 auto;
    }

    .demo-tag {
      display: inline-block;
      margin-bottom: 20px;
      padding: 4px 12px;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--accent);
      background: rgba(99,102,241,0.12);
      border: 1px solid rgba(99,102,241,0.3);
      border-radius: 100px;
    }
  </style>
</head>
<body>

<!-- ══════════════════════════════════════════════════════ -->
<!--  NAV                                                   -->
<!-- ══════════════════════════════════════════════════════ -->
<nav>
  <div class="nav-inner">

    <!-- Logo -->
    <a href="#" class="logo" aria-label="Lumio home">
      <div class="logo-mark">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 2L15.5 6V12L9 16L2.5 12V6L9 2Z" fill="white" fill-opacity="0.9"/>
          <path d="M9 6L12.5 8V12L9 14L5.5 12V8L9 6Z" fill="#6366F1"/>
        </svg>
      </div>
      <span class="logo-wordmark">Lu<span>mio</span></span>
    </a>

    <!-- Centre links (desktop) -->
    <ul class="nav-links" role="list">
      <li><a href="#" class="active">Product</a></li>
      <li><a href="#">Pricing</a></li>
      <li><a href="#">Docs</a></li>
    </ul>

    <!-- Right: login + hamburger -->
    <div class="nav-right">
      <button class="btn-login" type="button">Log in</button>
      <button class="hamburger" id="menuBtn" aria-expanded="false" aria-controls="mobileDrawer" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>

  </div>
</nav>

<!-- Mobile drawer -->
<div class="mobile-drawer" id="mobileDrawer" role="dialog" aria-label="Navigation menu">
  <a href="#" class="active">Product</a>
  <a href="#">Pricing</a>
  <a href="#">Docs</a>
  <button class="btn-login" type="button">Log in</button>
</div>

<!-- ══════════════════════════════════════════════════════ -->
<!--  DEMO CONTENT                                          -->
<!-- ══════════════════════════════════════════════════════ -->
<div class="demo-body">
  <span class="demo-tag">Navbar demo</span>
  <h1>Design that doesn't<br>get out of the <em>way.</em></h1>
  <p>Resize the window to see the mobile hamburger menu. The navbar is sticky, blurred, and fully accessible.</p>
</div>

<script>
  const btn = document.getElementById('menuBtn');
  const drawer = document.getElementById('mobileDrawer');

  btn.addEventListener('click', () => {
    const isOpen = drawer.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', isOpen);
  });

  // Close drawer when a link is clicked
  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', false);
    });
  });
</script>
</body>
</html>`
  },
  {
    taskId: 'T3',
    domain: 'UI Component',
    toolId: 'claude_haiku',
    toolName: 'Claude (Haiku 4.5) Extended',
    prompt: 'Create a responsive navigation bar with a logo on the left, three menu links in the centre, and a login button on the right.',
    rationale: 'Tests structural and layout reasoning without application logic — useful for isolating controllability, as layout behaviour is highly sensitive to prompt interpretation.',
    language: 'html',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Navigation Bar</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            min-height: 100vh;
        }

        /* Navigation Bar */
        nav {
            background: white;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        .navbar-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 2rem;
        }

        /* Logo */
        .logo {
            font-size: 1.5rem;
            font-weight: 700;
            color: #1a365d;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            letter-spacing: -0.5px;
        }

        .logo svg {
            width: 32px;
            height: 32px;
        }

        .logo:hover {
            color: #2d5a8c;
            transition: color 0.3s ease;
        }

        /* Desktop Menu */
        .menu {
            display: flex;
            gap: 2rem;
            list-style: none;
            flex: 1;
            justify-content: center;
        }

        .menu-link {
            color: #4a5568;
            text-decoration: none;
            font-weight: 500;
            font-size: 0.95rem;
            position: relative;
            transition: color 0.3s ease;
        }

        .menu-link:hover {
            color: #1a365d;
        }

        .menu-link::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 0;
            height: 2px;
            background: linear-gradient(90deg, #3b82f6, #8b5cf6);
            transition: width 0.3s ease;
        }

        .menu-link:hover::after {
            width: 100%;
        }

        /* Login Button */
        .login-btn {
            background: linear-gradient(135deg, #3b82f6, #2563eb);
            color: white;
            border: none;
            padding: 0.625rem 1.5rem;
            border-radius: 6px;
            font-weight: 600;
            font-size: 0.95rem;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 2px 4px rgba(59, 130, 246, 0.3);
        }

        .login-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(59, 130, 246, 0.4);
        }

        .login-btn:active {
            transform: translateY(0);
        }

        /* Hamburger Menu */
        .hamburger {
            display: none;
            flex-direction: column;
            gap: 5px;
            background: none;
            border: none;
            cursor: pointer;
            padding: 0.5rem;
        }

        .hamburger span {
            width: 24px;
            height: 2px;
            background: #1a365d;
            border-radius: 2px;
            transition: all 0.3s ease;
        }

        .hamburger.active span:nth-child(1) {
            transform: rotate(45deg) translate(8px, 8px);
        }

        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -7px);
        }

        /* Mobile Menu */
        .mobile-menu {
            display: none;
            position: absolute;
            top: 70px;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            gap: 1rem;
            padding: 2rem;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            animation: slideDown 0.3s ease;
        }

        .mobile-menu.active {
            display: flex;
        }

        .mobile-menu .menu-link {
            font-size: 1rem;
            padding: 0.5rem 0;
        }

        .mobile-menu .login-btn {
            width: 100%;
            text-align: center;
        }

        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .navbar-container {
                padding: 1rem 1.5rem;
            }

            .menu {
                display: none;
            }

            .hamburger {
                display: flex;
            }

            .login-btn {
                display: none;
            }

            .logo {
                font-size: 1.25rem;
            }
        }

        /* Demo content */
        .demo-content {
            max-width: 1200px;
            margin: 3rem auto;
            padding: 2rem;
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .demo-content h2 {
            color: #1a365d;
            margin-bottom: 1rem;
        }

        .demo-content p {
            color: #4a5568;
            line-height: 1.6;
            margin-bottom: 1rem;
        }
    </style>
</head>
<body>
    <!-- Navigation Bar -->
    <nav>
        <div class="navbar-container">
            <!-- Logo -->
            <a href="#" class="logo">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M13 2H3v10h10V2z"></path>
                    <path d="M19 2h-4v4h4V2z"></path>
                    <path d="M13 12H3v10h10v-10z"></path>
                    <path d="M19 12h-4v10h4v-10z"></path>
                </svg>
                Brand
            </a>

            <!-- Desktop Menu -->
            <ul class="menu">
                <li><a href="#" class="menu-link">Features</a></li>
                <li><a href="#" class="menu-link">Pricing</a></li>
                <li><a href="#" class="menu-link">About</a></li>
            </ul>

            <!-- Login Button (Desktop) -->
            <button class="login-btn">Log In</button>

            <!-- Hamburger Menu -->
            <button class="hamburger" id="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>

        <!-- Mobile Menu -->
        <div class="mobile-menu" id="mobileMenu">
            <a href="#" class="menu-link">Features</a>
            <a href="#" class="menu-link">Pricing</a>
            <a href="#" class="menu-link">About</a>
            <button class="login-btn">Log In</button>
        </div>
    </nav>

    <!-- Demo Content -->
    <div class="demo-content">
        <h2>Welcome to Your Responsive Navbar</h2>
        <p>
            This navigation bar is fully responsive and adapts seamlessly to different screen sizes. 
            On desktop, you'll see the menu items centered and the login button on the right. 
            On mobile devices, the menu collapses into a hamburger menu that smoothly animates when clicked.
        </p>
        <p>
            Try resizing your browser window or viewing on different devices to see the responsive behavior in action.
        </p>
    </div>

    <script>
        // Mobile menu toggle
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobileMenu');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });

        // Close mobile menu when a link is clicked
        const menuLinks = mobileMenu.querySelectorAll('.menu-link');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });

        // Close mobile menu when login button is clicked
        const loginBtn = mobileMenu.querySelector('.login-btn');
        loginBtn.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    </script>
</body>
</html>`
  },
  {
    taskId: 'T3',
    domain: 'UI Component',
    toolId: 'deepseek',
    toolName: 'DeepSeek (DeepSeek-V3)',
    prompt: 'Create a responsive navigation bar with a logo on the left, three menu links in the centre, and a login button on the right.',
    rationale: 'Tests structural and layout reasoning without application logic — useful for isolating controllability, as layout behaviour is highly sensitive to prompt interpretation.',
    language: 'html',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <title>Responsive Navbar | Logo · Center Links · Login</title>
  <style>
    /* ----- RESET & BASE ----- */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: system-ui, 'Segoe UI', 'Inter', 'Helvetica Neue', sans-serif;
      background: linear-gradient(145deg, #f6f9fc 0%, #eef2f5 100%);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    /* main content just for demo – shows spacing & background */
    .hero {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 2rem;
    }

    .hero-card {
      max-width: 700px;
      background: rgba(255, 255, 255, 0.75);
      backdrop-filter: blur(2px);
      border-radius: 2.5rem;
      padding: 2.5rem 2rem;
      box-shadow: 0 20px 35px -12px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(255,255,255,0.6);
    }

    .hero-card h1 {
      font-size: 2.2rem;
      font-weight: 700;
      background: linear-gradient(135deg, #1A2A3F, #1E4A6B);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      margin-bottom: 1rem;
    }

    .hero-card p {
      color: #2c3e4e;
      font-size: 1.1rem;
      line-height: 1.5;
    }

    /* ----- NAVBAR STYLES (Fully responsive) ----- */
    .navbar {
      background: #ffffff;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.02);
      position: sticky;
      top: 0;
      z-index: 100;
      width: 100%;
      backdrop-filter: blur(0px);
      transition: all 0.2s ease;
    }

    .nav-container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0.85rem 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1rem;
    }

    /* ----- LEFT: LOGO (flex item) ----- */
    .logo-area {
      flex: 0 0 auto;
      display: flex;
      align-items: center;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      font-weight: 700;
      font-size: 1.65rem;
      letter-spacing: -0.3px;
      background: linear-gradient(125deg, #0F2B3D, #1C5D7E);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      transition: transform 0.2s;
    }

    .logo:hover {
      transform: scale(1.02);
    }

    .logo-icon {
      background: #1C5D7E;
      width: 34px;
      height: 34px;
      border-radius: 12px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 800;
      font-size: 1.4rem;
      box-shadow: 0 4px 8px rgba(0,0,0,0.05);
    }

    /* ----- CENTER: NAV LINKS (flex-grow + perfect centering) ----- */
    .nav-links {
      flex: 1 1 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .nav-links li a {
      text-decoration: none;
      font-weight: 550;
      font-size: 1.05rem;
      color: #1f3b4a;
      padding: 0.5rem 0;
      transition: all 0.25s ease;
      position: relative;
      letter-spacing: -0.2px;
    }

    .nav-links li a::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0%;
      height: 2.5px;
      background: #1C5D7E;
      border-radius: 4px;
      transition: width 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1);
    }

    .nav-links li a:hover {
      color: #0b3b4f;
    }

    .nav-links li a:hover::after {
      width: 100%;
    }

    /* active state simulation (home) optional but nice */
    .nav-links li:first-child a::after {
      width: 100%;
      background: #1C5D7E;
    }

    /* ----- RIGHT: LOGIN BUTTON (flex item) ----- */
    .login-area {
      flex: 0 0 auto;
    }

    .btn-login {
      background: transparent;
      border: 1.8px solid #1C5D7E;
      padding: 0.55rem 1.5rem;
      border-radius: 60px;
      font-weight: 600;
      font-size: 0.95rem;
      color: #1C5D7E;
      cursor: pointer;
      transition: all 0.25s ease;
      font-family: inherit;
      background-color: rgba(28, 93, 126, 0.02);
      backdrop-filter: blur(2px);
    }

    .btn-login:hover {
      background: #1C5D7E;
      color: white;
      box-shadow: 0 6px 14px rgba(28, 93, 126, 0.25);
      transform: translateY(-2px);
      border-color: #1C5D7E;
    }

    .btn-login:active {
      transform: translateY(1px);
    }

    /* ----- MOBILE / RESPONSIVE BEHAVIOR (collapsible & beautiful) ----- */
    /* For screens <= 880px: we transform layout: logo + hamburger, center links become column */
    /* but we keep the 'logo left, links center, login right' *concept* using flex wrap */
    /* At smaller breakpoints, we hide the nav-links by default and show hamburger menu,
       ensuring a smooth mobile-first responsive pattern */
    
    /* Hamburger icon (hidden on desktop) */
    .menu-toggle {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      width: 42px;
      height: 42px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 6px;
      border-radius: 30px;
      transition: background 0.2s;
    }

    .menu-toggle span {
      display: block;
      width: 26px;
      height: 2.5px;
      background-color: #1f3b4a;
      border-radius: 4px;
      transition: all 0.25s ease;
    }

    .menu-toggle:hover {
      background: #eef2f5;
    }

    /* Mobile breakpoint: any screen under 800px */
    @media (max-width: 800px) {
      .nav-container {
        padding: 0.8rem 1.5rem;
        position: relative;
      }

      .menu-toggle {
        display: flex;
        order: 2; /* makes toggle appear between logo and login? we need visual: logo left, toggle right OR login? */
        /* better: we want logo on left, menu button on right next to login? but design spec: logo left, links center, login right.
           On mobile we collapse the center links into a drawer / dropdown to preserve functional layout */
      }

      /* reorder flex children for mobile: logo (order1), then a spacer? we'll use absolute approach?
         However we must keep login button visible on right + hamburger left or right? 
         We will restructure: logo stays left, .login-area stays right, and hamburger placed before login? 
         But to be clean: we add a .mobile-controls group? easier: keep .nav-container with 3 children, but set menu-toggle inside .nav-container as separate?
         Actually simpler: add menu-toggle inside .nav-container but we need to manipulate order with flex.
      */
      
      /* adjust nav-container: display flex; wrap; justify space-between */
      .nav-container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
      }

      /* hide the standard nav-links initially on mobile */
      .nav-links {
        display: none;
        flex-basis: 100%;
        order: 10;
        flex-direction: column;
        gap: 1.2rem;
        margin-top: 1rem;
        margin-bottom: 0.5rem;
        background: #ffffff;
        border-radius: 28px;
        padding: 1.5rem 1rem;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
        transition: all 0.2s;
      }

      .nav-links.active {
        display: flex;
      }

      .nav-links li a {
        font-size: 1.2rem;
        padding: 0.4rem 0;
        display: inline-block;
      }

      .nav-links li a::after {
        bottom: -2px;
      }

      /* reposition the hamburger button to be right after logo */
      .menu-toggle {
        order: 2;
        margin-left: auto;
        margin-right: 0.75rem;
      }

      .login-area {
        order: 3;
      }

      .logo-area {
        order: 1;
      }

      /* adjust button size for mobile */
      .btn-login {
        padding: 0.5rem 1.2rem;
        font-size: 0.9rem;
      }
    }

    /* For very small devices (<480px) improve spacing */
    @media (max-width: 480px) {
      .nav-container {
        padding: 0.7rem 1rem;
      }
      .btn-login {
        padding: 0.45rem 1rem;
      }
      .logo {
        font-size: 1.4rem;
      }
      .logo-icon {
        width: 28px;
        height: 28px;
        font-size: 1.2rem;
      }
    }

    /* Tablet and desktop: ensure that central links are always visible and perfectly centered */
    @media (min-width: 801px) {
      .nav-links {
        display: flex !important; /* always visible on desktop */
      }
      .menu-toggle {
        display: none !important;
      }
    }

    /* Accessibility & focus ring */
    a:focus-visible, button:focus-visible {
      outline: 2px solid #1C5D7E;
      outline-offset: 3px;
      border-radius: 6px;
    }
  </style>
</head>
<body>

<nav class="navbar">
  <div class="nav-container">
    <!-- LEFT: Logo -->
    <div class="logo-area">
      <a href="#" class="logo" aria-label="Brand Home">
        <span class="logo-icon">◆</span>
        <span>FlowStack</span>
      </a>
    </div>

    <!-- CENTER: Navigation Links (three menu links) -->
    <ul class="nav-links" id="navLinks">
      <li><a href="#">Home</a></li>
      <li><a href="#">Features</a></li>
      <li><a href="#">Pricing</a></li>
    </ul>

    <!-- RIGHT: Login Button -->
    <div class="login-area">
      <button class="btn-login" id="loginBtn">Log in →</button>
    </div>

    <!-- Hamburger toggle (only visible on mobile) -->
    <button class="menu-toggle" id="menuToggle" aria-label="Menu" aria-expanded="false">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
</nav>

<main class="hero">
  <div class="hero-card">
    <h1>Responsive navigation bar</h1>
    <p>✨ Logo on the left · Three menu links perfectly centered · Login button on the right ✨<br>
    <strong>Resize your browser</strong> to see the mobile experience – the menu collapses into a slick hamburger drawer, while login stays accessible. Fully fluid & touch-friendly.</p>
    <p style="margin-top: 1.2rem; font-size: 0.9rem; opacity: 0.7;">⬇️ Try clicking login (demo) or menu links — all interactive</p>
  </div>
</main>

<script>
  (function() {
    // Responsive mobile menu toggle logic + accessibility
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const loginButton = document.getElementById('loginBtn');
    
    // Toggle mobile menu when hamburger clicked
    if (menuToggle && navLinks) {
      const toggleMenu = () => {
        const expanded = navLinks.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', expanded);
        // optional: animate spans into "X" when open (enhanced UX)
        if (expanded) {
          menuToggle.querySelectorAll('span').forEach((span, idx) => {
            if (idx === 0) span.style.transform = 'rotate(45deg) translate(5px, 6px)';
            else if (idx === 1) span.style.opacity = '0';
            else if (idx === 2) span.style.transform = 'rotate(-45deg) translate(6px, -7px)';
          });
        } else {
          menuToggle.querySelectorAll('span').forEach((span, idx) => {
            span.style.transform = 'none';
            span.style.opacity = '1';
          });
        }
      };
      
      menuToggle.addEventListener('click', toggleMenu);
      
      // Close menu when clicking on any nav link (good practice)
      const allNavLinks = navLinks.querySelectorAll('a');
      allNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          // optional: just demo smooth scroll or alert; but close menu on mobile
          if (window.innerWidth <= 800) {
            if (navLinks.classList.contains('active')) {
              navLinks.classList.remove('active');
              menuToggle.setAttribute('aria-expanded', 'false');
              // reset hamburger icon
              menuToggle.querySelectorAll('span').forEach((span, idx) => {
                span.style.transform = 'none';
                span.style.opacity = '1';
              });
            }
          }
          // show simple demo feedback (not required but nice)
          e.preventDefault();
          const linkText = link.innerText;
          alert(`✨ Navigation demo: "${linkText}" clicked. (Responsive navbar works!)`);
        });
      });
    }
    
    // Add demo interaction for login button with sweet alert + ripple effect
    if (loginButton) {
      loginButton.addEventListener('click', (e) => {
        e.preventDefault();
        alert('🔐 Login button demo — this would redirect to your auth page. Fully responsive design maintained.');
        // optional subtle micro interaction
        loginButton.style.transform = 'scale(0.97)';
        setTimeout(() => { loginButton.style.transform = ''; }, 120);
      });
    }
    
    // Optional: handle window resize to reset mobile menu if screen grows above breakpoint 
    window.addEventListener('resize', function() {
      if (window.innerWidth > 800 && navLinks && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        if (menuToggle) {
          menuToggle.setAttribute('aria-expanded', 'false');
          const spans = menuToggle.querySelectorAll('span');
          if (spans.length) {
            spans.forEach(span => {
              span.style.transform = '';
              span.style.opacity = '';
            });
          }
        }
      }
    });
    
    // Also handle initial desktop state: ensure navLinks display is flex and not active class leftover
    if (window.innerWidth > 800 && navLinks) {
      navLinks.classList.remove('active');
    }
    
    // slight enhancement: when clicking outside menu on mobile (optional but user-friendly)
    document.addEventListener('click', function(event) {
      const isMobile = window.innerWidth <= 800;
      if (!isMobile) return;
      if (!navLinks || !menuToggle) return;
      const target = event.target;
      const isInsideNav = navLinks.contains(target) || menuToggle.contains(target) || target.closest('.logo-area') || target.closest('.login-area');
      if (!isInsideNav && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        const spans = menuToggle.querySelectorAll('span');
        spans.forEach(span => {
          span.style.transform = '';
          span.style.opacity = '';
        });
      }
    });
  })();
</script>
</body>
</html>`
  },
  // T4 - Database Schema
  {
    taskId: 'T4',
    domain: 'Database Schema',
    toolId: 'gemini',
    toolName: 'Gemini (3.1 Pro)',
    prompt: 'Design a database schema for a library system with books, members, and a borrowing history. Include the SQL to create the tables.',
    rationale: 'Tests relational reasoning and schema design — auditability is particularly stressed here, as database artifacts require provenance and constraint documentation to be safely deployable.',
    language: 'sql',
    code: `-- 1. Create the Books table
CREATE TABLE Books (
    book_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    isbn VARCHAR(13) UNIQUE,
    published_year INT,
    total_copies INT NOT NULL DEFAULT 1,
    available_copies INT NOT NULL DEFAULT 1,
    added_date DATE DEFAULT CURRENT_DATE
);

-- 2. Create the Members table
CREATE TABLE Members (
    member_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE,
    phone_number VARCHAR(20),
    join_date DATE DEFAULT CURRENT_DATE,
    is_active BOOLEAN DEFAULT TRUE
);

-- 3. Create the BorrowingHistory (Loans) table
CREATE TABLE BorrowingHistory (
    loan_id INT PRIMARY KEY AUTO_INCREMENT,
    book_id INT NOT NULL,
    member_id INT NOT NULL,
    borrow_date DATE NOT NULL DEFAULT CURRENT_DATE,
    due_date DATE NOT NULL,
    return_date DATE,
    status VARCHAR(20) DEFAULT 'Borrowed', -- e.g., 'Borrowed', 'Returned', 'Overdue'
    
    -- Foreign Key Constraints
    FOREIGN KEY (book_id) REFERENCES Books(book_id) ON DELETE CASCADE,
    FOREIGN KEY (member_id) REFERENCES Members(member_id) ON DELETE CASCADE
);`
  },
  {
    taskId: 'T4',
    domain: 'Database Schema',
    toolId: 'chatgpt',
    toolName: 'ChatGPT (OpenAI GPT-5.5)',
    prompt: 'Design a database schema for a library system with books, members, and a borrowing history. Include the SQL to create the tables.',
    rationale: 'Tests relational reasoning and schema design — auditability is particularly stressed here, as database artifacts require provenance and constraint documentation to be safely deployable.',
    language: 'sql',
    code: `-- Books table
CREATE TABLE Books (
    book_id INT PRIMARY KEY AUTO_INCREMENT,
    isbn VARCHAR(20) NOT NULL UNIQUE,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    publisher VARCHAR(255),
    publication_year INT,
    available_copies INT NOT NULL DEFAULT 0
);

-- Members table
CREATE TABLE Members (
    member_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(20),
    join_date DATE NOT NULL
);

-- Borrowing history table
CREATE TABLE Borrowing_History (
    borrow_id INT PRIMARY KEY AUTO_INCREMENT,
    member_id INT NOT NULL,
    book_id INT NOT NULL,
    borrow_date DATE NOT NULL,
    due_date DATE NOT NULL,
    return_date DATE,

    CONSTRAINT fk_borrow_member
        FOREIGN KEY (member_id)
        REFERENCES Members(member_id),

    CONSTRAINT fk_borrow_book
        FOREIGN KEY (book_id)
        REFERENCES Books(book_id)
);`
  },
  {
    taskId: 'T4',
    domain: 'Database Schema',
    toolId: 'claude_sonnet',
    toolName: 'Claude (Sonnet 4.6 Low)',
    prompt: 'Design a database schema for a library system with books, members, and a borrowing history. Include the SQL to create the tables.',
    rationale: 'Tests relational reasoning and schema design — auditability is particularly stressed here, as database artifacts require provenance and constraint documentation to be safely deployable.',
    language: 'sql',
    code: `-- Library Management System Database Schema

-- Authors table
CREATE TABLE authors (
    author_id     SERIAL PRIMARY KEY,
    first_name    VARCHAR(100) NOT NULL,
    last_name     VARCHAR(100) NOT NULL,
    bio           TEXT,
    created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Categories table
CREATE TABLE categories (
    category_id   SERIAL PRIMARY KEY,
    name          VARCHAR(100) NOT NULL UNIQUE,
    description   TEXT
);

-- Books table
CREATE TABLE books (
    book_id       SERIAL PRIMARY KEY,
    isbn          VARCHAR(20) UNIQUE NOT NULL,
    title         VARCHAR(255) NOT NULL,
    category_id   INT REFERENCES categories(category_id) ON DELETE SET NULL,
    publisher     VARCHAR(150),
    published_year SMALLINT CHECK (published_year BETWEEN 1000 AND 2100),
    total_copies  SMALLINT NOT NULL DEFAULT 1 CHECK (total_copies >= 0),
    available_copies SMALLINT NOT NULL DEFAULT 1 CHECK (available_copies >= 0),
    created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT copies_check CHECK (available_copies <= total_copies)
);

-- Book–Author junction (many-to-many)
CREATE TABLE book_authors (
    book_id       INT NOT NULL REFERENCES books(book_id) ON DELETE CASCADE,
    author_id     INT NOT NULL REFERENCES authors(author_id) ON DELETE CASCADE,
    PRIMARY KEY (book_id, author_id)
);

-- Members table
CREATE TABLE members (
    member_id     SERIAL PRIMARY KEY,
    first_name    VARCHAR(100) NOT NULL,
    last_name     VARCHAR(100) NOT NULL,
    email         VARCHAR(255) UNIQUE NOT NULL,
    phone         VARCHAR(20),
    address       TEXT,
    membership_start DATE NOT NULL DEFAULT CURRENT_DATE,
    membership_end   DATE,
    status        VARCHAR(20) NOT NULL DEFAULT 'active'
                  CHECK (status IN ('active', 'suspended', 'expired')),
    created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Borrowing history table
CREATE TABLE borrowings (
    borrowing_id  SERIAL PRIMARY KEY,
    book_id       INT NOT NULL REFERENCES books(book_id) ON DELETE RESTRICT,
    member_id     INT NOT NULL REFERENCES members(member_id) ON DELETE RESTRICT,
    borrowed_at   TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    due_date      DATE NOT NULL DEFAULT (CURRENT_DATE + INTERVAL '14 days'),
    returned_at   TIMESTAMP,
    status        VARCHAR(20) NOT NULL DEFAULT 'borrowed'
                  CHECK (status IN ('borrowed', 'returned', 'overdue')),
    fine_amount   NUMERIC(8,2) DEFAULT 0.00 CHECK (fine_amount >= 0),
    notes         TEXT
);

-- Fines table (detailed fine tracking)
CREATE TABLE fines (
    fine_id       SERIAL PRIMARY KEY,
    borrowing_id  INT NOT NULL REFERENCES borrowings(borrowing_id) ON DELETE CASCADE,
    member_id     INT NOT NULL REFERENCES members(member_id) ON DELETE CASCADE,
    amount        NUMERIC(8,2) NOT NULL CHECK (amount > 0),
    issued_at     TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    paid_at       TIMESTAMP,
    status        VARCHAR(20) NOT NULL DEFAULT 'unpaid'
                  CHECK (status IN ('unpaid', 'paid', 'waived'))
);

-- ─── Indexes ────────────────────────────────────────────────────────────────

CREATE INDEX idx_books_isbn           ON books(isbn);
CREATE INDEX idx_books_title          ON books(title);
CREATE INDEX idx_members_email        ON members(email);
CREATE INDEX idx_borrowings_member    ON borrowings(member_id);
CREATE INDEX idx_borrowings_book      ON borrowings(book_id);
CREATE INDEX idx_borrowings_status    ON borrowings(status);
CREATE INDEX idx_fines_member         ON fines(member_id);

-- ─── Trigger: keep available_copies in sync ──────────────────────────────────

CREATE OR REPLACE FUNCTION update_available_copies()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'INSERT' AND NEW.status = 'borrowed' THEN
        UPDATE books SET available_copies = available_copies - 1
        WHERE book_id = NEW.book_id;

    ELSIF TG_OP = 'UPDATE'
          AND OLD.status = 'borrowed'
          AND NEW.status = 'returned' THEN
        UPDATE books SET available_copies = available_copies + 1
        WHERE book_id = NEW.book_id;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_borrowing_copies
AFTER INSERT OR UPDATE ON borrowings
FOR EACH ROW EXECUTE FUNCTION update_available_copies();

-- ─── View: active overdue loans ──────────────────────────────────────────────

CREATE VIEW overdue_borrowings AS
SELECT
    b.borrowing_id,
    m.member_id,
    m.first_name || ' ' || m.last_name  AS member_name,
    m.email,
    bk.title,
    b.borrowed_at,
    b.due_date,
    CURRENT_DATE - b.due_date           AS days_overdue
FROM borrowings b
JOIN members m  ON m.member_id = b.member_id
JOIN books   bk ON bk.book_id  = b.book_id
WHERE b.status != 'returned'
  AND b.due_date < CURRENT_DATE
ORDER BY days_overdue DESC;`
  },
  {
    taskId: 'T4',
    domain: 'Database Schema',
    toolId: 'claude_haiku',
    toolName: 'Claude (Haiku 4.5) Extended',
    prompt: 'Design a database schema for a library system with books, members, and a borrowing history. Include the SQL to create the tables.',
    rationale: 'Tests relational reasoning and schema design — auditability is particularly stressed here, as database artifacts require provenance and constraint documentation to be safely deployable.',
    language: 'sql',
    code: `-- Library Management System Database Schema

-- Books Table
CREATE TABLE books (
    book_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    isbn VARCHAR(13) UNIQUE NOT NULL,
    publisher VARCHAR(255),
    publication_year INT,
    total_copies INT NOT NULL DEFAULT 1,
    available_copies INT NOT NULL DEFAULT 1,
    category VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CHECK (available_copies >= 0 AND available_copies <= total_copies)
);

-- Members Table
CREATE TABLE members (
    member_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE,
    phone VARCHAR(20),
    address TEXT,
    city VARCHAR(100),
    postal_code VARCHAR(10),
    membership_date DATE NOT NULL,
    membership_status ENUM('active', 'inactive', 'suspended') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Borrowing History Table
CREATE TABLE borrowing_history (
    borrow_id INT PRIMARY KEY AUTO_INCREMENT,
    member_id INT NOT NULL,
    book_id INT NOT NULL,
    borrow_date DATE NOT NULL,
    due_date DATE NOT NULL,
    return_date DATE,
    fine_amount DECIMAL(10, 2) DEFAULT 0.00,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (member_id) REFERENCES members(member_id) ON DELETE CASCADE,
    FOREIGN KEY (book_id) REFERENCES books(book_id) ON DELETE CASCADE,
    CHECK (return_date IS NULL OR return_date >= borrow_date)
);

-- Indexes for common queries
CREATE INDEX idx_books_author ON books(author);
CREATE INDEX idx_books_isbn ON books(isbn);
CREATE INDEX idx_books_category ON books(category);
CREATE INDEX idx_members_email ON members(email);
CREATE INDEX idx_members_status ON members(membership_status);
CREATE INDEX idx_borrowing_member ON borrowing_history(member_id);
CREATE INDEX idx_borrowing_book ON borrowing_history(book_id);
CREATE INDEX idx_borrowing_return_date ON borrowing_history(return_date);
CREATE INDEX idx_borrowing_due_date ON borrowing_history(due_date);

-- Sample Queries
-- Get all currently borrowed books
SELECT b.book_id, b.title, m.first_name, m.last_name, bh.borrow_date, bh.due_date
FROM borrowing_history bh
JOIN books b ON bh.book_id = b.book_id
JOIN members m ON bh.member_id = m.member_id
WHERE bh.return_date IS NULL;

-- Check overdue books
SELECT b.title, m.first_name, m.last_name, bh.due_date, DATEDIFF(CURDATE(), bh.due_date) as days_overdue
FROM borrowing_history bh
JOIN books b ON bh.book_id = b.book_id
JOIN members m ON bh.member_id = m.member_id
WHERE bh.return_date IS NULL AND bh.due_date < CURDATE();

-- Get member borrowing history
SELECT b.title, bh.borrow_date, bh.due_date, bh.return_date
FROM borrowing_history bh
JOIN books b ON bh.book_id = b.book_id
WHERE bh.member_id = ?
ORDER BY bh.borrow_date DESC;

-- Get book availability
SELECT book_id, title, total_copies, available_copies, (total_copies - available_copies) as borrowed_count
FROM books
ORDER BY available_copies DESC;`
  },
  {
    taskId: 'T4',
    domain: 'Database Schema',
    toolId: 'deepseek',
    toolName: 'DeepSeek (DeepSeek-V3)',
    prompt: 'Design a database schema for a library system with books, members, and a borrowing history. Include the SQL to create the tables.',
    rationale: 'Tests relational reasoning and schema design — auditability is particularly stressed here, as database artifacts require provenance and constraint documentation to be safely deployable.',
    language: 'sql',
    code: `-- 1. Books table
CREATE TABLE books (
    book_id INT PRIMARY KEY AUTO_INCREMENT,  -- Use SERIAL in PostgreSQL
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    isbn VARCHAR(20) UNIQUE,
    genre VARCHAR(100),
    publication_year INT,
    total_copies INT NOT NULL CHECK (total_copies >= 0),
    available_copies INT NOT NULL CHECK (available_copies >= 0),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Members table
CREATE TABLE members (
    member_id INT PRIMARY KEY AUTO_INCREMENT,  -- Use SERIAL in PostgreSQL
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20),
    membership_date DATE NOT NULL,
    membership_status ENUM('active', 'suspended', 'expired') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Borrowing history table
CREATE TABLE borrowing_history (
    borrow_id INT PRIMARY KEY AUTO_INCREMENT,  -- Use SERIAL in PostgreSQL
    book_id INT NOT NULL,
    member_id INT NOT NULL,
    borrow_date DATE NOT NULL,
    due_date DATE NOT NULL,
    return_date DATE,  -- NULL means not returned yet
    status ENUM('borrowed', 'returned', 'overdue') DEFAULT 'borrowed',
    fine_amount DECIMAL(5,2) DEFAULT 0.00,
    FOREIGN KEY (book_id) REFERENCES books(book_id) ON DELETE RESTRICT,
    FOREIGN KEY (member_id) REFERENCES members(member_id) ON DELETE RESTRICT
);

-- Optional: Indexes for performance
CREATE INDEX idx_borrowing_member ON borrowing_history(member_id);
CREATE INDEX idx_borrowing_book ON borrowing_history(book_id);
CREATE INDEX idx_borrowing_status ON borrowing_history(status);
CREATE INDEX idx_borrowing_due_date ON borrowing_history(due_date) WHERE return_date IS NULL;`
  }
];
