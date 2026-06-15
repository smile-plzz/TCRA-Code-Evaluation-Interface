export type ToolID = 'gemini' | 'chatgpt' | 'claude_sonnet' | 'claude_haiku' | 'deepseek';

export type TaskID = 'T1' | 'T2' | 'T3' | 'T4';

export interface Artifact {
  taskId: TaskID;
  domain: string;
  toolId: ToolID;
  toolName: string;
  prompt: string;
  rationale: string;
  code: string;
  language: 'html' | 'python' | 'sql';
}

export interface RubricRow {
  property: string;
  scores: {
    0: string;
    1: string;
    2: string;
    3: string;
  };
}
