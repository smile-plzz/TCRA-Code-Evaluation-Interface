import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { RubricRow } from '../types';

const rubricTable: RubricRow[] = [
  {
    property: 'Transparency',
    scores: {
      0: 'Opaque output, no trace or rationale',
      1: 'Minimal comments; ad-hoc rationale',
      2: 'Partial trace; rationale links to code paths',
      3: 'Inspectable trace; step mapping; reproducible rationale',
    },
  },
  {
    property: 'Controllability',
    scores: {
      0: 'Prompts rarely steer behavior',
      1: 'Coarse control; side effects common',
      2: 'Localized steering with minor trade-offs',
      3: 'Fine-grained control; constraints obeyed consistently',
    },
  },
  {
    property: 'Reliability',
    scores: {
      0: 'Flaky; silent failures',
      1: 'Passes base tests only',
      2: 'Robust to small prompt/data shifts',
      3: 'Robust across perturbations, seeds, and refactors',
    },
  },
  {
    property: 'Auditability',
    scores: {
      0: 'No provenance or tests',
      1: 'Sparse logs; brittle tests',
      2: 'Provenance + runnable tests',
      3: 'Full provenance; versioned tests; reproducible builds',
    },
  },
];

const classificationBands = [
  { range: '0–3', level: 'Automated Execution' },
  { range: '4–7', level: 'Assisted Automation' },
  { range: '8–10', level: 'Delegated Reasoning' },
  { range: '11–12', level: 'Collaborative Intelligence' },
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function RubricDrawer({ isOpen, onClose }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            id="rubric-backdrop"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-[480px] bg-white shadow-2xl z-50 overflow-y-auto p-6 border-l border-dash-line flex flex-col"
            id="rubric-drawer"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[16px] font-bold text-dash-ink">TCRA Scoring Rubric</h2>
              <button
                onClick={onClose}
                className="text-[12px] text-dash-accent cursor-pointer hover:underline"
                id="close-rubric-btn"
              >
                Close ×
              </button>
            </div>

            <div className="space-y-6">
              <section>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse border border-dash-line text-[11px]">
                    <thead>
                      <tr className="bg-dash-bg">
                        <th className="border border-dash-line p-2 font-bold w-24">Dimension</th>
                        <th className="border border-dash-line p-2 font-bold">0 - Poor</th>
                        <th className="border border-dash-line p-2 font-bold">1 - Basic</th>
                        <th className="border border-dash-line p-2 font-bold">2 - Good</th>
                        <th className="border border-dash-line p-2 font-bold">3 - Exc</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rubricTable.map((row) => (
                        <tr key={row.property} className="hover:bg-gray-50 transition-colors">
                          <td className="border border-dash-line p-2 font-bold bg-dash-bg/50">{row.property}</td>
                          {Object.entries(row.scores).map(([key, value]) => (
                            <td key={key} className="border border-dash-line p-2 text-dash-muted italic">
                              {value.split(';')[0]}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h3 className="text-[10px] font-bold text-dash-muted uppercase tracking-wider mb-2">Classification Bands</h3>
                <div className="grid grid-cols-2 gap-2">
                  {classificationBands.map((band) => (
                    <div key={band.level} className="p-2 border border-dash-line rounded-md bg-white">
                      <div className="text-xs font-bold text-dash-accent">{band.range}</div>
                      <div className="text-[10px] text-dash-ink leading-tight">{band.level}</div>
                    </div>
                  ))}
                </div>
              </section>

              <div className="mt-auto pt-4 text-[10px] text-[#9CA3AF] leading-relaxed italic">
                Please use the printed Scoring Form <strong>Sheet A1</strong> to record results for this artifact. Do not attempt to enter data here.
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
