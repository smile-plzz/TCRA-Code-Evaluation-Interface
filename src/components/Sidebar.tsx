import { useState } from 'react';
import { ChevronDown, ChevronRight, Binary, Code, Layout, Database } from 'lucide-react';
import { TaskID, ToolID } from '../types';

interface Props {
  selectedTask: TaskID;
  selectedTool: ToolID;
  onSelect: (taskId: TaskID, toolId: ToolID) => void;
}

const tasks = [
  { id: 'T1' as TaskID, name: 'T1: Web Application', icon: Layout },
  { id: 'T2' as TaskID, name: 'T2: Data Processing', icon: Binary },
  { id: 'T3' as TaskID, name: 'T3: UI Component', icon: Code },
  { id: 'T4' as TaskID, name: 'T4: Database Schema', icon: Database },
];

const tools = [
  { id: 'gemini' as ToolID, name: 'Gemini' },
  { id: 'chatgpt' as ToolID, name: 'ChatGPT' },
  { id: 'claude_sonnet' as ToolID, name: 'Claude Sonnet' },
  { id: 'claude_haiku' as ToolID, name: 'Claude Haiku' },
  { id: 'deepseek' as ToolID, name: 'DeepSeek' },
];

export default function Sidebar({ selectedTask, selectedTool, onSelect }: Props) {
  const [expandedTasks, setExpandedTasks] = useState<Record<TaskID, boolean>>({
    T1: true,
    T2: true,
    T3: true,
    T4: true,
  });

  const toggleTask = (id: TaskID) => {
    setExpandedTasks(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <aside className="w-[240px] bg-white border-r border-dash-line flex flex-col h-full overflow-y-auto font-sans" id="app-sidebar">
      <div className="py-4 border-b border-dash-line">
        <h2 className="text-[10px] font-bold text-dash-muted uppercase tracking-wider px-5 mb-2">Task Selection</h2>
        
        <nav className="space-y-0">
          {tasks.map((task) => (
            <div key={task.id} className="relative">
              <button
                onClick={() => toggleTask(task.id)}
                className={`w-full text-left px-5 py-2.5 text-[13px] transition-all cursor-pointer ${
                  selectedTask === task.id 
                    ? 'bg-[#F3F4F6] text-dash-accent font-semibold border-r-3 border-dash-accent' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                id={`task-btn-${task.id}`}
              >
                {task.name}
              </button>

              {expandedTasks[task.id] && (
                <div className="bg-white/50 py-1">
                  {tools.map((tool) => (
                    <button
                      key={tool.id}
                      onClick={() => onSelect(task.id, tool.id)}
                      className={`w-full text-left pl-8 pr-5 py-1.5 text-[12px] transition-colors cursor-pointer ${
                        selectedTask === task.id && selectedTool === tool.id
                          ? 'text-dash-ink font-bold'
                          : 'text-dash-muted hover:text-dash-ink'
                      }`}
                      id={`tool-btn-${task.id}-${tool.id}`}
                    >
                      • {tool.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      <div className="mt-4">
        <div className="px-5">
           <h2 className="text-[10px] font-bold text-dash-muted uppercase tracking-wider mb-2">Review Progress</h2>
           <div className="text-[11px] text-dash-muted opacity-60">Completed: 4/20 artifacts</div>
        </div>
      </div>

      <div className="mt-auto p-5 border-t border-dash-line">
        <div className="text-[10px] text-dash-muted font-mono leading-tight uppercase tracking-tighter">
          <p>© 2026 Academic Study</p>
          <p>Artifact Core v1.2</p>
        </div>
      </div>
    </aside>
  );
}
