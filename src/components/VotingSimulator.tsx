import React, { useState } from 'react';
import { Play, RotateCcw, Terminal, CheckCircle2, AlertTriangle, XCircle, Info } from 'lucide-react';

interface ValidationResult {
  isEligible: boolean;
  canRegister: boolean;
  status: 'ELIGIBLE_AND_REGISTERED' | 'ELIGIBLE_UNREGISTERED' | 'UNDERAGE' | 'NOT_CITIZEN' | 'INVALID_INPUT';
  message: string;
  terminalLogs: string[];
}

export const VotingSimulator: React.FC = () => {
  const [ageInput, setAgeInput] = useState<string>('19');
  const [isCitizen, setIsCitizen] = useState<boolean>(true);
  const [isRegistered, setIsRegistered] = useState<boolean>(true);
  const [result, setResult] = useState<ValidationResult | null>(null);

  const runPythonValidator = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    const logs: string[] = [
      `[EXECUTION] Initializing Voting Eligibility & Verification Engine...`,
      `[INPUT] Age parameter: "${ageInput}"`,
      `[INPUT] Citizenship status: ${isCitizen ? 'Citizen' : 'Non-Citizen'}`,
      `[INPUT] Voter registration status: ${isRegistered ? 'Registered' : 'Not Registered'}`,
    ];

    const parsedAge = Number(ageInput.trim());

    if (isNaN(parsedAge) || ageInput.trim() === '') {
      logs.push(`[ERROR] Non-numeric age value rejected.`);
      logs.push(`[VALIDATION FAILED] Edge Case Triggered: Non-numeric input.`);
      setResult({
        isEligible: false,
        canRegister: false,
        status: 'INVALID_INPUT',
        message: 'Invalid age format! Please provide a positive numeric integer value.',
        terminalLogs: logs,
      });
      return;
    }

    if (parsedAge < 0) {
      logs.push(`[WARNING] Defensive Check: Age cannot be negative (${parsedAge}).`);
      logs.push(`[VALIDATION FAILED] Edge Case Triggered: Domain range violation.`);
      setResult({
        isEligible: false,
        canRegister: false,
        status: 'INVALID_INPUT',
        message: 'Age cannot be negative. Please enter a valid biological age.',
        terminalLogs: logs,
      });
      return;
    }

    if (parsedAge > 125) {
      logs.push(`[WARNING] Anomalous Input: Age ${parsedAge} exceeds realistic human threshold.`);
      logs.push(`[VALIDATION WARNING] Flagged for manual supervisory verification.`);
    }

    if (!isCitizen) {
      logs.push(`[CHECK] Age criteria: ${parsedAge} >= 18 -> PASS.`);
      logs.push(`[CHECK] Citizenship verification: FALSE -> FAIL.`);
      logs.push(`[RESULT] Ineligible: Statutory requirement mandates valid legal citizenship.`);
      setResult({
        isEligible: false,
        canRegister: false,
        status: 'NOT_CITIZEN',
        message: 'Ineligible to vote. Electoral laws mandate legal citizenship verification.',
        terminalLogs: logs,
      });
      return;
    }

    if (parsedAge < 18) {
      const yearsRemaining = 18 - parsedAge;
      logs.push(`[CHECK] Age check: ${parsedAge} >= 18 -> FAIL.`);
      logs.push(`[RESULT] Ineligible: Under statutory voting age threshold of 18.`);
      logs.push(`[ADVISORY] You will become eligible for voter registration in ${yearsRemaining} year${yearsRemaining === 1 ? '' : 's'}.`);
      setResult({
        isEligible: false,
        canRegister: false,
        status: 'UNDERAGE',
        message: `Currently underage (${parsedAge} years old). Eligible in ${yearsRemaining} year${yearsRemaining === 1 ? '' : 's'}.`,
        terminalLogs: logs,
      });
      return;
    }

    // Age >= 18 and is Citizen
    logs.push(`[CHECK] Age validation: ${parsedAge} >= 18 -> PASS (Statutory Adult).`);
    logs.push(`[CHECK] Citizenship status: VERIFIED.`);

    if (isRegistered) {
      logs.push(`[CHECK] Voter Roll Check: ACTIVE & REGISTERED.`);
      logs.push(`[SUCCESS] User is FULLY ELIGIBLE to cast ballot in the upcoming election!`);
      setResult({
        isEligible: true,
        canRegister: true,
        status: 'ELIGIBLE_AND_REGISTERED',
        message: 'Fully Eligible & Registered! All verification criteria passed cleanly.',
        terminalLogs: logs,
      });
    } else {
      logs.push(`[CHECK] Voter Roll Check: NOT CURRENTLY REGISTERED.`);
      logs.push(`[ACTION REQUIRED] Age and citizenship criteria met, but active voter registration record missing.`);
      logs.push(`[NOTICE] Prompting voter enrollment portal link to complete registration.`);
      setResult({
        isEligible: false,
        canRegister: true,
        status: 'ELIGIBLE_UNREGISTERED',
        message: 'Eligible by age and citizenship, but NOT yet registered on the electoral roll.',
        terminalLogs: logs,
      });
    }
  };

  const loadPreset = (age: string, citizen: boolean, registered: boolean) => {
    setAgeInput(age);
    setIsCitizen(citizen);
    setIsRegistered(registered);
  };

  return (
    <div id="voting-simulator" className="mt-5 rounded-xl border border-slate-800 bg-[#0d1322] overflow-hidden text-sm">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2.5 bg-slate-900/80 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="font-mono text-xs text-slate-300 font-medium ml-1">
            Logic Verification Engine <span className="text-emerald-400">● Interactive Simulator</span>
          </span>
        </div>
      </div>

      <div className="p-4 sm:p-5 grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Controls column */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Test Parameters</span>
            <span className="text-xs text-slate-500">Preset Edge Cases:</span>
          </div>

          {/* Quick preset buttons */}
          <div className="flex flex-wrap gap-1.5">
            <button
              type="button"
              onClick={() => loadPreset('18', true, true)}
              className="px-2 py-1 rounded text-xs bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700/60 transition-colors"
            >
              Age 18 (Exact Pass)
            </button>
            <button
              type="button"
              onClick={() => loadPreset('17', true, false)}
              className="px-2 py-1 rounded text-xs bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700/60 transition-colors"
            >
              Age 17 (Underage)
            </button>
            <button
              type="button"
              onClick={() => loadPreset('-5', true, false)}
              className="px-2 py-1 rounded text-xs bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700/60 transition-colors"
            >
              -5 (Negative Error)
            </button>
            <button
              type="button"
              onClick={() => loadPreset('24', false, false)}
              className="px-2 py-1 rounded text-xs bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700/60 transition-colors"
            >
              Non-Citizen
            </button>
          </div>

          <form onSubmit={runPythonValidator} className="space-y-3.5">
            {/* Age input */}
            <div>
              <label htmlFor="sim-age-input" className="block text-xs font-medium text-slate-300 mb-1">
                Age Value <span className="text-slate-500 font-mono">(integer expected)</span>
              </label>
              <input
                id="sim-age-input"
                type="text"
                value={ageInput}
                onChange={(e) => setAgeInput(e.target.value)}
                placeholder="e.g. 18 or 21"
                className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/40 text-slate-100 font-mono text-sm placeholder-slate-600 outline-none transition"
              />
            </div>

            {/* Toggles */}
            <div className="grid grid-cols-2 gap-2.5">
              <label className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-950/70 border border-slate-800 cursor-pointer hover:border-slate-700 transition">
                <input
                  type="checkbox"
                  checked={isCitizen}
                  onChange={(e) => setIsCitizen(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-700 text-emerald-500 focus:ring-emerald-500/30 bg-slate-900"
                />
                <span className="text-xs text-slate-200">Legal Citizen</span>
              </label>

              <label className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-950/70 border border-slate-800 cursor-pointer hover:border-slate-700 transition">
                <input
                  type="checkbox"
                  checked={isRegistered}
                  onChange={(e) => setIsRegistered(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-700 text-emerald-500 focus:ring-emerald-500/30 bg-slate-900"
                />
                <span className="text-xs text-slate-200">Voter Roll ID</span>
              </label>
            </div>

            {/* Execute Button */}
            <div className="flex gap-2 pt-1">
              <button
                id="btn-run-validator"
                type="submit"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-semibold text-xs tracking-wide transition shadow-sm"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                Run Validation Check
              </button>
              <button
                type="button"
                onClick={() => {
                  loadPreset('19', true, true);
                  setResult(null);
                }}
                title="Reset to defaults"
                className="px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 transition"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        </div>

        {/* Terminal output column */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Verification Output</span>
            <span className="text-[11px] text-slate-500 font-mono">status: ready</span>
          </div>

          <div className="flex-1 min-h-[190px] rounded-lg bg-slate-950 border border-slate-800 p-3.5 font-mono text-xs overflow-y-auto space-y-1.5">
            {result ? (
              <>
                {result.terminalLogs.map((log, i) => (
                  <div
                    key={i}
                    className={
                      log.startsWith('[EXECUTION]')
                        ? 'text-emerald-400 font-semibold'
                        : log.includes('[ERROR]')
                        ? 'text-rose-400 font-medium'
                        : log.includes('[WARNING]') || log.includes('[ACTION REQUIRED]')
                        ? 'text-amber-400'
                        : log.includes('[SUCCESS]') || log.includes('PASS')
                        ? 'text-emerald-300'
                        : log.includes('[RESULT]')
                        ? 'text-cyan-300 font-medium'
                        : 'text-slate-400'
                    }
                  >
                    {log}
                  </div>
                ))}

                {/* Summary Banner */}
                <div
                  className={`mt-3 p-2.5 rounded border text-xs flex items-start gap-2 ${
                    result.status === 'ELIGIBLE_AND_REGISTERED'
                      ? 'bg-emerald-950/40 border-emerald-600/40 text-emerald-200'
                      : result.status === 'ELIGIBLE_UNREGISTERED'
                      ? 'bg-amber-950/40 border-amber-600/40 text-amber-200'
                      : result.status === 'INVALID_INPUT'
                      ? 'bg-rose-950/40 border-rose-600/40 text-rose-200'
                      : 'bg-slate-900 border-slate-700 text-slate-300'
                  }`}
                >
                  {result.status === 'ELIGIBLE_AND_REGISTERED' && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />}
                  {result.status === 'ELIGIBLE_UNREGISTERED' && <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />}
                  {result.status === 'INVALID_INPUT' && <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />}
                  {(result.status === 'UNDERAGE' || result.status === 'NOT_CITIZEN') && <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />}
                  <div>
                    <p className="font-semibold">{result.message}</p>
                  </div>
                </div>
              </>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center py-6 text-slate-500">
                <Terminal className="w-6 h-6 mb-2 text-slate-600" />
                <p className="text-slate-400 text-xs">Ready for execution</p>
                <p className="text-[11px] text-slate-600">Click &quot;Run Validation Check&quot; to test eligibility logic</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
