import { Artifact } from './types';

export const artifacts: Artifact[] = [
  // T1 - Web Application
  {
    taskId: 'T1',
    domain: 'Web Application',
    toolId: 'gemini',
    toolName: 'Gemini (3.1 Pro)',
    prompt: 'Build a simple to-do list web app where users can add, complete, and delete tasks. Show a count of remaining tasks.',
    rationale: 'Tests end-to-end application logic including state management, DOM interaction, and user event handling.',
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
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const taskCount = document.getElementById('taskCount');

    let remainingTasks = 0;

    function updateCounter() {
        taskCount.textContent = remainingTasks;
    }

    function addTask() {
        const text = taskInput.value.trim();
        if (text === '') return;

        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = text;
        span.className = 'task-text';

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.className = 'btn-complete';
        
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

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'btn-delete';
        
        deleteBtn.onclick = function() {
            if (!li.classList.contains('completed')) {
                remainingTasks--;
            }
            li.remove();
            updateCounter();
        };

        li.appendChild(span);
        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        taskInput.value = '';
        remainingTasks++;
        updateCounter();
        taskInput.focus();
    }

    addTaskBtn.addEventListener('click', addTask);
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
    rationale: 'Tests end-to-end application logic including state management, DOM interaction, and user event handling.',
    language: 'html',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List App</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 500px; margin: 40px auto; padding: 20px; }
        h1 { text-align: center; }
        .input-group { display: flex; gap: 10px; }
        input { flex: 1; padding: 10px; }
        button { padding: 10px 15px; cursor: pointer; }
        ul { list-style: none; padding: 0; margin-top: 20px; }
        li { display: flex; align-items: center; justify-content: space-between; padding: 10px; border: 1px solid #ddd; margin-bottom: 8px; border-radius: 5px; }
        .task { display: flex; align-items: center; gap: 10px; }
        .completed { text-decoration: line-through; color: gray; }
        #taskCount { margin-top: 15px; font-weight: bold; }
        .delete-btn { background: crimson; color: white; border: none; border-radius: 4px; }
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
            const completed = document.querySelectorAll('#taskList input[type="checkbox"]:checked');
            taskCount.textContent = \`Remaining Tasks: \${tasks.length - completed.length}\`;
        }

        taskInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") addTask();
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
    rationale: 'Tests end-to-end application logic including state management, DOM interaction, and user event handling.',
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
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: var(--bg-secondary); color: var(--text); min-height: 100vh; padding: 2rem 1rem 4rem; }
  .app { max-width: 520px; margin: 0 auto; }
  .header { margin-bottom: 2rem; }
  .title { font-size: 22px; font-weight: 500; }
  .count-badge { display: inline-block; background: var(--bg); border: 0.5px solid var(--border); border-radius: 20px; padding: 2px 10px; font-size: 13px; color: var(--text-secondary); margin-top: 8px; }
  .count-badge span { font-weight: 500; color: var(--text); }
  .input-row { display: flex; gap: 8px; margin-bottom: 1.5rem; }
  .input-row input { flex: 1; height: 38px; border-radius: var(--radius); border: 0.5px solid var(--border); background: var(--bg); color: var(--text); padding: 0 12px; font-size: 15px; outline: none; transition: all 0.15s; }
  .input-row input:focus { border-color: var(--border-hover); box-shadow: 0 0 0 3px rgba(128,128,128,0.1); }
  .add-btn { height: 38px; padding: 0 16px; border-radius: var(--radius); border: 0.5px solid var(--border-hover); background: transparent; color: var(--text); cursor: pointer; display: flex; align-items: center; gap: 6px; }
  .task-list { display: flex; flex-direction: column; gap: 6px; }
  .task-item { display: flex; align-items: center; gap: 10px; padding: 10px 12px; background: var(--bg); border: 0.5px solid var(--border); border-radius: var(--radius); }
  .task-item.done { opacity: 0.55; }
  .task-check { width: 18px; height: 18px; border-radius: 50%; border: 0.5px solid var(--border-hover); background: transparent; cursor: pointer; display: flex; align-items: center; justify-content: center; }
  .task-check.checked { background: var(--success-bg); border-color: var(--success-border); }
  .check-icon { display: none; color: var(--success-text); font-size: 12px; }
  .task-check.checked .check-icon { display: block; }
  .task-text { flex: 1; font-size: 15px; word-break: break-word; }
  .task-item.done .task-text { text-decoration: line-through; color: var(--text-tertiary); }
  .delete-btn { width: 28px; height: 28px; border-radius: var(--radius); border: none; background: transparent; color: var(--text-tertiary); cursor: pointer; display: flex; align-items: center; justify-content: center; opacity: 0; }
  .task-item:hover .delete-btn { opacity: 1; }
  .delete-btn:hover { background: var(--danger-bg); color: var(--danger-text); }
  .clear-done-btn { margin-top: 1.25rem; width: 100%; padding: 8px; border-radius: var(--radius); border: 0.5px solid var(--border); background: transparent; cursor: pointer; }
</style>
</head>
<body>
<div class="app">
  <div class="header">
    <div class="title">My tasks</div>
    <div class="count-badge"><span id="remaining">0</span> remaining</div>
  </div>
  <div class="input-row">
    <input type="text" id="task-input" placeholder="Add a new task…" maxlength="200" />
    <button class="add-btn" onclick="addTask()"><i class="ti ti-plus"></i> Add</button>
  </div>
  <div class="task-list" id="task-list"></div>
  <button class="clear-done-btn" id="clear-done-btn" onclick="clearDone()">Clear completed</button>
</div>
<script>
  let tasks = [{ id: 1, text: "Review project brief", done: false }, { id: 2, text: "Reply to team messages", done: false }, { id: 3, text: "Pick up groceries", done: true }];
  function render() {
    const list = document.getElementById('task-list');
    const remaining = tasks.filter(t => !t.done).length;
    document.getElementById('remaining').textContent = remaining;
    list.innerHTML = tasks.map(t => \`
      <div class="task-item\${t.done ? ' done' : ''}">
        <button class="task-check\${t.done ? ' checked' : ''}" onclick="toggle(\${t.id})">
          <i class="ti ti-check check-icon"></i>
        </button>
        <span class="task-text">\${t.text}</span>
        <button class="delete-btn" onclick="remove(\${t.id})"><i class="ti ti-trash"></i></button>
      </div>\`).join('');
  }
  function addTask() {
    const input = document.getElementById('task-input');
    if (!input.value.trim()) return;
    tasks.unshift({ id: Date.now(), text: input.value.trim(), done: false });
    input.value = '';
    render();
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
    render();
  }
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
    rationale: 'Tests end-to-end application logic including state management, DOM interaction, and user event handling.',
    language: 'html',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 20px; }
        .container { background: white; border-radius: 12px; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1); max-width: 500px; width: 100%; padding: 30px; }
        h1 { color: #333; margin-bottom: 10px; font-size: 28px; }
        .stats { background: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 25px; text-align: center; }
        .stats-number { color: #667eea; font-size: 36px; font-weight: bold; }
        .input-group { display: flex; gap: 8px; margin-bottom: 25px; }
        input[type="text"] { flex: 1; padding: 12px 15px; border: 1px solid #ddd; border-radius: 6px; }
        button { background: #667eea; color: white; border: none; padding: 12px 20px; border-radius: 6px; cursor: pointer; font-weight: 600; }
        .task-item { display: flex; align-items: center; gap: 12px; padding: 12px; border: 1px solid #eee; border-radius: 6px; margin-bottom: 8px; }
        .task-item.completed span { color: #bbb; text-decoration: line-through; }
        .delete-btn { background: transparent; color: #999; cursor: pointer; }
    </style>
</head>
<body>
    <div class="container">
        <h1>📝 My Tasks</h1>
        <div class="stats">
            <div class="stats-number" id="remainingCount">0</div>
            <div>Remaining tasks</div>
        </div>
        <div class="input-group">
            <input type="text" id="taskInput" placeholder="Add a new task...">
            <button id="addBtn">Add</button>
        </div>
        <div id="tasksList"></div>
    </div>
    <script>
        const taskInput = document.getElementById('taskInput');
        const tasksList = document.getElementById('tasksList');
        const remainingCount = document.getElementById('remainingCount');
        let tasks = [];
        function updateUI() {
            tasksList.innerHTML = tasks.map(t => \`
                <div class="task-item \${t.completed ? 'completed' : ''}">
                    <input type="checkbox" \${t.completed ? 'checked' : ''} onchange="toggleTask(\${t.id})">
                    <span>\${t.text}</span>
                    <button class="delete-btn" onclick="deleteTask(\${t.id})"><i class="fas fa-trash"></i></button>
                </div>\`).join('');
            remainingCount.textContent = tasks.filter(t => !t.completed).length;
        }
        function addTask() {
            if (taskInput.value.trim()) {
                tasks.push({ id: Date.now(), text: taskInput.value.trim(), completed: false });
                taskInput.value = '';
                updateUI();
            }
        }
        function toggleTask(id) {
            const t = tasks.find(t => t.id === id);
            if (t) t.completed = !t.completed;
            updateUI();
        }
        function deleteTask(id) {
            tasks = tasks.filter(t => t.id !== id);
            updateUI();
        }
        document.getElementById('addBtn').onclick = addTask;
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
    rationale: 'Tests end-to-end application logic including state management, DOM interaction, and user event handling.',
    language: 'html',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>taskflow</title>
  <style>
    body { font-family: sans-serif; background: #e9eef3; display: flex; justify-content: center; padding: 2rem; }
    .card { background: white; border-radius: 2rem; width: 100%; max-width: 600px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
    .header { background: #1f2b3c; color: white; padding: 2rem; }
    .form { padding: 1rem 2rem; display: flex; gap: 1rem; border-bottom: 1px solid #eee; }
    .input { flex: 1; padding: 0.8rem; border-radius: 2rem; border: 1px solid #ddd; }
    .btn { background: #1f2b3c; color: white; padding: 0.8rem 1.5rem; border-radius: 2rem; border: none; cursor: pointer; }
    .list { padding: 1rem 2rem; list-style: none; }
    .item { display: flex; align-items: center; justify-content: space-between; padding: 0.8rem; background: #f9fafc; border-radius: 1rem; margin-bottom: 0.5rem; }
    .item.done span { text-decoration: line-through; color: #8ba0bc; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>taskflow</h1>
      <div id="stats">0 tasks remaining</div>
    </div>
    <div class="form">
      <input type="text" id="input" class="input" placeholder="New task...">
      <button id="add" class="btn">Add</button>
    </div>
    <ul id="list" class="list"></ul>
  </div>
  <script>
    let tasks = [];
    const list = document.getElementById('list');
    const stats = document.getElementById('stats');
    function render() {
      list.innerHTML = tasks.map((t, i) => \`
        <li class="item \${t.done ? 'done' : ''}">
          <input type="checkbox" \${t.done ? 'checked' : ''} onclick="toggle(\${i})">
          <span>\${t.text}</span>
          <button onclick="del(\${i})">✕</button>
        </li>\`).join('');
      stats.innerText = \`\${tasks.filter(t => !t.done).length} tasks remaining\`;
    }
    document.getElementById('add').onclick = () => {
      const val = document.getElementById('input').value;
      if (val) { tasks.push({ text: val, done: false }); document.getElementById('input').value = ''; render(); }
    };
    window.toggle = (i) => { tasks[i].done = !tasks[i].done; render(); };
    window.del = (i) => { tasks.splice(i, 1); render(); };
    render();
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
    rationale: 'Isolates algorithmic reasoning and data transformation.',
    language: 'python',
    code: `def analyze_class_performance(student_list):
    if not student_list:
        return 0, []
    total_score = sum(score for name, score in student_list)
    average_score = total_score / len(student_list)
    sorted_students = sorted(student_list, key=lambda x: x[1], reverse=True)
    top_three = sorted_students[:3]
    return average_score, top_three`
  },
  {
    taskId: 'T2',
    domain: 'Data Processing',
    toolId: 'chatgpt',
    toolName: 'ChatGPT (OpenAI GPT-5.5)',
    prompt: 'Write a function that takes a list of student names and scores, calculates the average, and returns the top 3 performers.',
    rationale: 'Isolates algorithmic reasoning and data transformation.',
    language: 'python',
    code: `def get_top_performers(students):
    if not students:
        return 0, []
    total_score = sum(score for _, score in students)
    average_score = total_score / len(students)
    top_3 = sorted(students, key=lambda x: x[1], reverse=True)[:3]
    return average_score, top_3`
  },
  {
    taskId: 'T2',
    domain: 'Data Processing',
    toolId: 'claude_sonnet',
    toolName: 'Claude (Sonnet 4.6 Low)',
    prompt: 'Write a function that takes a list of student names and scores, calculates the average, and returns the top 3 performers.',
    rationale: 'Isolates algorithmic reasoning and data transformation.',
    language: 'python',
    code: `def top_performers(students: list[dict], top_n: int = 3) -> dict:
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
    rationale: 'Isolates algorithmic reasoning and data transformation.',
    language: 'python',
    code: `def get_top_performers(students):
    if not students:
        return {'average': 0, 'top_3': []}
    total = sum(score for name, score in students)
    average = total / len(students)
    sorted_students = sorted(students, key=lambda x: x[1], reverse=True)
    top_3 = sorted_students[:3]
    return {'average': average, 'top_3': top_3}`
  },
  {
    taskId: 'T2',
    domain: 'Data Processing',
    toolId: 'deepseek',
    toolName: 'DeepSeek (DeepSeek-V3)',
    prompt: 'Write a function that takes a list of student names and scores, calculates the average, and returns the top 3 performers.',
    rationale: 'Isolates algorithmic reasoning and data transformation.',
    language: 'python',
    code: `def top_3_performers(students_data):
    averages = []
    if isinstance(students_data[0], (list, tuple)):
        for student in students_data:
            name, scores = student[0], student[1:]
            avg_score = sum(scores) / len(scores)
            averages.append((name, avg_score))
    elif isinstance(students_data, dict):
        for name, scores in students_data.items():
            avg_score = sum(scores) / len(scores)
            averages.append((name, avg_score))
    averages.sort(key=lambda x: x[1], reverse=True)
    return averages[:3]`
  },
  // T3 - UI Component (HTML/CSS)
  {
    taskId: 'T3',
    domain: 'UI Component',
    toolId: 'gemini',
    toolName: 'Gemini (3.1 Pro)',
    prompt: 'Create a responsive navigation bar with a logo on the left, three menu links in the centre, and a login button on the right.',
    rationale: 'Tests structural and layout reasoning without application logic.',
    language: 'html',
    code: `<!DOCTYPE html>
<html>
<head>
<style>
  .navbar { display: flex; justify-content: space-between; align-items: center; background: #2c3e50; padding: 1rem 5%; color: white; }
  .navbar-links { display: flex; list-style: none; gap: 2rem; }
  .login-btn { background: #3498db; color: white; padding: 0.6rem 1.2rem; border-radius: 5px; }
  @media (max-width: 768px) { .navbar { flex-direction: column; } }
</style>
</head>
<body>
  <nav class="navbar">
    <div>BrandLogo</div>
    <ul class="navbar-links"><li>Home</li><li>Features</li><li>Pricing</li></ul>
    <button class="login-btn">Login</button>
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
    rationale: 'Tests structural and layout reasoning without application logic.',
    language: 'html',
    code: `<!DOCTYPE html>
<html>
<head>
<style>
  .navbar { display: flex; align-items: center; justify-content: space-between; padding: 1rem 2rem; background: #1f2937; color: white; }
  .nav-links { display: flex; gap: 2rem; list-style: none; }
  .login-btn { padding: 0.6rem 1.2rem; background: #3b82f6; color: white; border-radius: 6px; }
  @media (max-width: 768px) { .navbar { flex-direction: column; } }
</style>
</head>
<body>
  <nav class="navbar">
    <div class="logo">MyLogo</div>
    <ul class="nav-links"><li>Home</li><li>About</li><li>Services</li></ul>
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
    rationale: 'Tests structural and layout reasoning without application logic.',
    language: 'html',
    code: `<!DOCTYPE html>
<html>
<head>
<style>
  nav { display: flex; justify-content: space-between; align-items: center; padding: 0 24px; height: 68px; background: #0F1729; color: white; }
  .links { display: flex; gap: 16px; list-style: none; }
  .btn { padding: 9px 22px; background: #6366F1; border-radius: 10px; }
  @media (max-width: 700px) { .links { display: none; } }
</style>
</head>
<body>
  <nav><div>Lu<span>mio</span></div><ul class="links"><li>Product</li><li>Pricing</li><li>Docs</li></ul><button class="btn">Log in</button></nav>
</body>
</html>`
  },
  {
    taskId: 'T3',
    domain: 'UI Component',
    toolId: 'claude_haiku',
    toolName: 'Claude (Haiku 4.5) Extended',
    prompt: 'Create a responsive navigation bar with a logo on the left, three menu links in the centre, and a login button on the right.',
    rationale: 'Tests structural and layout reasoning without application logic.',
    language: 'html',
    code: `<!DOCTYPE html>
<html>
<head>
<style>
  nav { background: white; box-shadow: 0 2px 8px rgba(0,0,0,0.08); padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center; }
  .menu { display: flex; gap: 2rem; list-style: none; }
  .login-btn { background: #3b82f6; color: white; padding: 0.6rem 1.5rem; border-radius: 6px; }
  @media (max-width: 768px) { .menu { display: none; } }
</style>
</head>
<body>
  <nav><div>Brand</div><ul class="menu"><li>Features</li><li>Pricing</li><li>About</li></ul><button class="login-btn">Log In</button></nav>
</body>
</html>`
  },
  {
    taskId: 'T3',
    domain: 'UI Component',
    toolId: 'deepseek',
    toolName: 'DeepSeek (DeepSeek-V3)',
    prompt: 'Create a responsive navigation bar with a logo on the left, three menu links in the centre, and a login button on the right.',
    rationale: 'Tests structural and layout reasoning without application logic.',
    language: 'html',
    code: `<!DOCTYPE html>
<html>
<head>
<style>
  .navbar { background: white; box-shadow: 0 2px 4px rgba(0,0,0,0.05); padding: 0.8rem 2rem; display: flex; justify-content: space-between; align-items: center; }
  .links { display: flex; gap: 2rem; list-style: none; }
  .btn { border: 2px solid #1C5D7E; padding: 0.5rem 1.5rem; border-radius: 60px; color: #1C5D7E; }
  @media (max-width: 800px) { .links { display: none; } }
</style>
</head>
<body>
  <nav class="navbar"><div>FlowStack</div><ul class="links"><li>Home</li><li>Features</li><li>Pricing</li></ul><button class="btn">Log in</button></nav>
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
    rationale: 'Tests relational reasoning and schema design.',
    language: 'sql',
    code: `CREATE TABLE Books ( book_id INT PRIMARY KEY AUTO_INCREMENT, title VARCHAR(255) NOT NULL, author VARCHAR(255) NOT NULL );
CREATE TABLE Members ( member_id INT PRIMARY KEY AUTO_INCREMENT, first_name VARCHAR(100) NOT NULL, last_name VARCHAR(100) NOT NULL );
CREATE TABLE BorrowingHistory ( loan_id INT PRIMARY KEY AUTO_INCREMENT, book_id INT REFERENCES Books(book_id), member_id INT REFERENCES Members(member_id) );`
  },
  {
    taskId: 'T4',
    domain: 'Database Schema',
    toolId: 'chatgpt',
    toolName: 'ChatGPT (OpenAI GPT-5.5)',
    prompt: 'Design a database schema for a library system with books, members, and a borrowing history. Include the SQL to create the tables.',
    rationale: 'Tests relational reasoning and schema design.',
    language: 'sql',
    code: `CREATE TABLE Books ( book_id INT PRIMARY KEY, isbn VARCHAR(20), title VARCHAR(255) );
CREATE TABLE Members ( member_id INT PRIMARY KEY, name VARCHAR(100), email VARCHAR(255) );
CREATE TABLE Borrowing_History ( borrow_id INT PRIMARY KEY, member_id INT REFERENCES Members(member_id), book_id INT REFERENCES Books(book_id) );`
  },
  {
    taskId: 'T4',
    domain: 'Database Schema',
    toolId: 'claude_sonnet',
    toolName: 'Claude (Sonnet 4.6 Low)',
    prompt: 'Design a database schema for a library system with books, members, and a borrowing history. Include the SQL to create the tables.',
    rationale: 'Tests relational reasoning and schema design.',
    language: 'sql',
    code: `CREATE TABLE books ( book_id SERIAL PRIMARY KEY, title VARCHAR(255) NOT NULL );
CREATE TABLE members ( member_id SERIAL PRIMARY KEY, email VARCHAR(255) UNIQUE NOT NULL );
CREATE TABLE borrowings ( borrowing_id SERIAL PRIMARY KEY, book_id INT REFERENCES books(book_id), member_id INT REFERENCES members(member_id) );`
  },
  {
    taskId: 'T4',
    domain: 'Database Schema',
    toolId: 'claude_haiku',
    toolName: 'Claude (Haiku 4.5) Extended',
    prompt: 'Design a database schema for a library system with books, members, and a borrowing history. Include the SQL to create the tables.',
    rationale: 'Tests relational reasoning and schema design.',
    language: 'sql',
    code: `CREATE TABLE books ( book_id INT PRIMARY KEY AUTO_INCREMENT, title VARCHAR(255) NOT NULL );
CREATE TABLE members ( member_id INT PRIMARY KEY AUTO_INCREMENT, first_name VARCHAR(100) NOT NULL );
CREATE TABLE borrowing_history ( borrow_id INT PRIMARY KEY AUTO_INCREMENT, member_id INT, book_id INT );`
  },
  {
    taskId: 'T4',
    domain: 'Database Schema',
    toolId: 'deepseek',
    toolName: 'DeepSeek (DeepSeek-V3)',
    prompt: 'Design a database schema for a library system with books, members, and a borrowing history. Include the SQL to create the tables.',
    rationale: 'Tests relational reasoning and schema design.',
    language: 'sql',
    code: `CREATE TABLE books ( book_id INT PRIMARY KEY AUTO_INCREMENT, title VARCHAR(255) NOT NULL );
CREATE TABLE members ( member_id INT PRIMARY KEY AUTO_INCREMENT, email VARCHAR(255) UNIQUE NOT NULL );
CREATE TABLE borrowing_history ( borrow_id INT PRIMARY KEY AUTO_INCREMENT, book_id INT, member_id INT );`
  }
];
