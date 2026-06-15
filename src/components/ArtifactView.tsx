import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Artifact } from '../types';
import { Code, Eye, Info, MessageSquare, Tag } from 'lucide-react';

interface Props {
  artifact: Artifact;
}

export default function ArtifactView({ artifact }: Props) {
  const isWebArtifact = artifact.language === 'html';

  return (
    <div className="flex-1 overflow-y-auto bg-dash-bg p-6" id="artifact-view">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Bar */}
        <header className="flex justify-between items-end mb-4">
          <div className="text-[18px] font-bold tracking-tight text-dash-ink">
            {artifact.taskId} · {artifact.domain} · {artifact.toolName}
          </div>
          <div className="font-mono text-[11px] bg-[#E5E7EB] px-1.5 py-0.5 rounded-[3px] text-dash-ink uppercase">
            Artifact {artifact.taskId}-{artifact.toolId.toUpperCase()}
          </div>
        </header>

        {/* Prompt Box */}
        <section className="bg-white border border-dash-line border-l-4 border-l-dash-accent p-4 shadow-sm">
          <div className="text-[10px] uppercase font-bold text-dash-accent mb-1 tracking-wider">Input Prompt</div>
          <div className="text-[13px] leading-relaxed text-[#4B5563] italic">
            "{artifact.prompt}"
          </div>
        </section>

        {/* Rationale Note */}
        <section className="text-[12px] text-[#6B7280] border-b border-dash-line pb-4">
          <span className="font-bold">Rationale:</span> {artifact.rationale}
        </section>

        {/* Code & Preview Container */}
        <div className={`grid gap-4 min-h-[500px] ${isWebArtifact ? 'grid-cols-2' : 'grid-cols-1'}`}>
          {/* Code Pane */}
          <div className="bg-[#1E1E1E] rounded-[6px] flex flex-col overflow-hidden shadow-md">
            <div className="bg-[#2D2D2D] px-3 py-2 flex justify-between items-center text-[11px] font-mono text-[#D4D4D4] border-b border-[#3D3D3D]">
              <span>{artifact.taskId.toLowerCase()}-{artifact.toolId}.{artifact.language === 'python' ? 'py' : artifact.language === 'sql' ? 'sql' : 'html'}</span>
              <span className="opacity-50 lowercase">{artifact.language}</span>
            </div>
            <div className="flex-1 overflow-auto">
              <SyntaxHighlighter
                language={artifact.language === 'python' ? 'python' : artifact.language === 'sql' ? 'sql' : 'html'}
                style={vscDarkPlus}
                customStyle={{
                  margin: 0,
                  padding: '1.25rem',
                  fontSize: '12px',
                  lineHeight: '1.5',
                  background: 'transparent',
                  fontFamily: '"JetBrains Mono", "Fira Code", monospace',
                }}
              >
                {artifact.code}
              </SyntaxHighlighter>
            </div>
          </div>

          {/* Preview Pane (Only for HTML) */}
          {isWebArtifact && (
            <div className="bg-white border border-dash-line rounded-[6px] flex flex-col overflow-hidden shadow-sm">
              <div className="bg-[#F3F4F6] px-3 py-2 text-[11px] font-bold text-[#4B5563] border-b border-dash-line">
                Live Preview (Rendered Artifact)
              </div>
              <div className="flex-1 bg-white relative">
                <iframe
                  srcDoc={artifact.code}
                  title="Artifact Preview"
                  className="w-full h-full border-none"
                  sandbox="allow-scripts"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
