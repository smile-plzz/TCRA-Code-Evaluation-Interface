import { useState } from 'react';
import { BookOpen, Search } from 'lucide-react';
import Sidebar from './components/Sidebar';
import ArtifactView from './components/ArtifactView';
import RubricDrawer from './components/RubricDrawer';
import { artifacts } from './data';
import { TaskID, ToolID } from './types';

export default function App() {
  const [selectedTask, setSelectedTask] = useState<TaskID>('T1');
  const [selectedTool, setSelectedTool] = useState<ToolID>('gemini');
  const [isRubricOpen, setIsRubricOpen] = useState(false);

  const currentArtifact = artifacts.find(
    (a) => a.taskId === selectedTask && a.toolId === selectedTool
  ) || artifacts[0];

  const handleSelect = (taskId: TaskID, toolId: ToolID) => {
    setSelectedTask(taskId);
    setSelectedTool(toolId);
  };

  return (
    <div className="flex flex-col h-screen bg-dash-bg text-dash-ink">
      {/* Navbar */}
      <header className="h-[56px] bg-white border-b border-dash-line flex items-center justify-between px-6 sticky top-0 z-30 shrink-0">
        <div className="flex items-center gap-3">
          <div className="bg-dash-ink text-white p-1.5 rounded-md">
            <BookOpen className="w-4 h-4" />
          </div>
          <h1 className="text-base font-semibold tracking-tight">TCRA Evaluation Framework · Code Generation Study v1.2</h1>
        </div>

        <button
          onClick={() => setIsRubricOpen(true)}
          className="bg-[#F3F4F6] border border-dash-line px-3 py-1.5 rounded-[4px] text-[12px] font-medium cursor-pointer hover:bg-gray-200 transition-colors"
          id="open-rubric-btn"
        >
          View TCRA Rubric Table
        </button>
      </header>

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          selectedTask={selectedTask}
          selectedTool={selectedTool}
          onSelect={handleSelect}
        />
        <main className="flex-1 flex flex-col overflow-hidden">
          <ArtifactView artifact={currentArtifact} />
        </main>
      </div>

      {/* Rubric Drawer */}
      <RubricDrawer
        isOpen={isRubricOpen}
        onClose={() => setIsRubricOpen(false)}
      />
    </div>
  );
}
