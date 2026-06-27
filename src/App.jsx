import { useState, useEffect, useRef } from 'react';
import { PLAN, PACE_ZONES, PHASE_COLORS, getRunDetail, getCycleDetail } from './planData.js';
import { useLocalStorage } from './useLocalStorage.js';

// ─── Feedback Analysis ───────────────────────────────────────────
function analyzeFeedback(run, mins, secs, avgPaceMin, avgPaceSec) {
  const totalSecs = (mins * 60) + secs;
  const avgPaceTotalSecs = (avgPaceMin * 60) + avgPaceSec;
  const isCycle = ['cycle', 'cycle_hard', 'commute'].includes(run.type);
  let lines = [];

  if (run.distance > 0 && totalSecs > 0) {
    if (isCycle) {
      const speedKmh = (run.distance / (totalSecs / 3600)).toFixed(1);
      lines.push(`Your average speed was ~${speedKmh} km/h over ${run.distance}km.`);
    } else {
      const actualKmPace = totalSecs / run.distance;
      lines.push(`Your overall pace was ~${Math.floor(actualKmPace/60)}:${String(Math.round(actualKmPace%60)).padStart(2,'0')}/km for this run.`);
    }
  }

  if (isCycle) {
    if (run.type === 'commute') {
      lines.push("✅ Commute rides are brilliant training — getting fit while doing something you have to do anyway. 42km total in a commute day is serious aerobic volume.");
      lines.push("🚴 Fuel properly at work after the morning ride — you've burned 400–500 calories before 9am.");
    } else {
      lines.push("✅ Every cycling session builds the same aerobic engine as running — with zero joint impact. The cardiovascular gains transfer directly to your marathon.");
    }
    lines.push("🏃 On commute days: don't add a run. 42km of cycling IS your training for that day.");
    return lines;
  }

  if (avgPaceTotalSecs > 0) {
    if (run.type === 'easy' || run.type === 'long') {
      if (avgPaceTotalSecs < 390) lines.push("⚡ A bit fast for an easy/long run. With cycling in your week, keeping easy runs easy is especially important.");
      else if (avgPaceTotalSecs <= 510) lines.push("✅ Great pacing! Right in the easy/long run zone. Exactly the right effort to build your aerobic base alongside your cycling.");
      else lines.push("🐢 Slower than target — that's fine, especially carrying cycling fatigue. Keep listening to your body.");
    } else if (run.type === 'tempo') {
      if (avgPaceTotalSecs < 345) lines.push("⚡ Faster than tempo target. Aim for 6:00–6:30/km for best threshold adaptation — especially with cycling load.");
      else if (avgPaceTotalSecs <= 390) lines.push("✅ Excellent tempo run! Right effort zone. Your lactate threshold is being pushed higher with every session like this.");
      else lines.push("📈 Slightly slower than tempo target — cycling fatigue is a factor. Push a little more next time.");
    } else if (run.type === 'interval') {
      if (avgPaceTotalSecs < 315) lines.push("⚡ Very fast reps — consistent splits beat fast-then-slow every time.");
      else if (avgPaceTotalSecs <= 390) lines.push("✅ Solid interval session! Right intensity. These reps on top of cycling volume build exceptional aerobic capacity.");
      else lines.push("📈 Reps slightly slower — your legs may carry cycling fatigue. Stay consistent.");
    }
  }

  if (totalSecs < run.distance * 240) lines.push("⚠️ Those times look very fast — double-check your entries.");
  if (run.type === 'long' && run.distance >= 20) lines.push("🏔️ Running this distance while also commute cycling is extraordinary. Your aerobic base is building faster than a run-only plan.");
  else if (run.type === 'interval') lines.push("💪 Hard sessions on top of commute cycling build exceptional fatigue resistance. Prioritise sleep and nutrition tonight.");
  else if (run.type === 'tempo') lines.push("🔥 Tempo runs are the most powerful marathon training stimulus. Every one raises your ceiling.");
  else lines.push("👟 Every run logged — on top of your cycling — is building a remarkably strong aerobic engine.");
  return lines;
}

// ─── Run Modal ───────────────────────────────────────────────────
function RunModal({ run, weekNum, onClose, isDone, onToggle, feedback, onSaveFeedback }) {
  const isCycle = ['cycle', 'cycle_hard', 'commute'].includes(run.type);
  const zone = PACE_ZONES[run.type] || PACE_ZONES['easy'];
  const isRaceDay = run.title.includes("MARATHON DAY");
  const isRest = run.type === "rest";

  const [mode, setMode] = useState('outdoor');
  const detail = isCycle ? getCycleDetail(run) : getRunDetail(run, weekNum, mode);

  const [showFeedback, setShowFeedback] = useState(false);
  const [mins, setMins] = useState(feedback?.mins || '');
  const [secs, setSecs] = useState(feedback?.secs || '');
  const [paceMin, setPaceMin] = useState(feedback?.paceMin || '');
  const [paceSec, setPaceSec] = useState(feedback?.paceSec || '');
  const [notes, setNotes] = useState(feedback?.notes || '');
  const [analysis, setAnalysis] = useState(feedback?.analysis || null);
  const [saved, setSaved] = useState(!!feedback);

  const handleAnalyse = () => {
    if (!mins && !secs && !paceMin && !paceSec) return;
    const result = analyzeFeedback(
      run,
      parseInt(mins) || 0,
      parseInt(secs) || 0,
      parseInt(paceMin) || 0,
      parseInt(paceSec) || 0
    );
    setAnalysis(result);
    const fb = { mins, secs, paceMin, paceSec, notes, analysis: result };
    onSaveFeedback(fb);
    setSaved(true);
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.75)',
      zIndex: 1000, display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: '#16161E', borderRadius: '22px 22px 0 0',
        width: '100%', maxWidth: 620, maxHeight: '92vh', overflowY: 'auto',
        border: `1px solid ${zone.border}`, borderBottom: 'none',
        animation: 'slideUp .28s cubic-bezier(.22,.68,0,1.2)',
      }}>
        <style>{`
          @keyframes slideUp { from { transform:translateY(110%) } to { transform:translateY(0) } }
          input[type=number]::-webkit-inner-spin-button { -webkit-appearance:none; }
          input[type=number] { -moz-appearance:textfield; }
          textarea { resize: vertical; }
        `}</style>

        {/* Drag handle */}
        <div style={{ display:'flex', justifyContent:'center', padding:'10px 0 2px' }}>
          <div style={{ width:36, height:4, background:'#2E2E3E', borderRadius:2 }} />
        </div>

        {/* Hero */}
        <div style={{ padding:'16px 22px 18px', background: zone.bg, borderBottom:`1px solid ${zone.border}` }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
            <div style={{ flex:1 }}>
              <div style={{ display:'flex', gap:6, marginBottom:10, flexWrap:'wrap' }}>
                <Tag bg="#1E1E28" color="#9CA3AF">{run.day}</Tag>
                <Tag bg={`${zone.color}22`} color={zone.color} border={zone.border}>{zone.label}</Tag>
                {isRaceDay && <Tag bg="#EC489922" color="#EC4899">RACE DAY</Tag>}
                {isDone && <Tag bg="#4CAF7D22" color="#4CAF7D">✓ Completed</Tag>}
              </div>
              <h2 style={{ margin:'0 0 6px', fontSize:21, fontWeight:800, color:'#FFF', lineHeight:1.2 }}>{run.title}</h2>
              {run.distance > 0 && (
                <div style={{ display:'flex', gap:18, marginTop:10, flexWrap:'wrap' }}>
                  <Stat val={`${run.distance} km`} label="distance" color={zone.color} />
                  <Stat val={isCycle ? zone.paceRange : (mode === 'treadmill' ? zone.treadmillSpeed : zone.paceRange)} label={isCycle ? 'target speed' : (mode === 'treadmill' ? 'treadmill speed' : 'target pace')} />
                  <Stat val={zone.effort} label="effort" />
                  <Stat val={zone.heartRate} label="HR zone" />
                </div>
              )}
              {/* Outdoor / Treadmill toggle — running only */}
              {!isRest && !isCycle && (
                <div style={{ display:'flex', gap:6, marginTop:14 }}>
                  {[['outdoor','🏃 Outdoor'],['treadmill','🎢 Treadmill']].map(([m, label]) => (
                    <button key={m} onClick={() => setMode(m)} style={{
                      padding:'6px 14px', borderRadius:8,
                      border:`1px solid ${mode===m ? zone.color : '#2A2A3C'}`,
                      background: mode===m ? `${zone.color}22` : '#1A1A26',
                      color: mode===m ? zone.color : '#6B7280',
                      fontSize:12, fontWeight:700, cursor:'pointer', transition:'all .15s',
                    }}>{label}</button>
                  ))}
                </div>
              )}
            </div>
            <button onClick={onClose} style={{ background:'#2A2A3A', border:'none', borderRadius:10, width:32, height:32, color:'#9CA3AF', fontSize:18, cursor:'pointer', flexShrink:0, marginLeft:12 }}>×</button>
          </div>
        </div>

        <div style={{ padding:'20px 22px', display:'flex', flexDirection:'column', gap:22 }}>

          {/* Overview */}
          <Section label="What is this run?" color={zone.color}>
            <p style={{ margin:0, fontSize:13.5, color:'#C8C8D8', lineHeight:1.75 }}>{detail.overview}</p>
          </Section>

          {/* Structure */}
          <Section label="Run Structure" color={zone.color}>
            {detail.structure.map((s, i) => (
              <div key={i} style={{ display:'flex', gap:12, alignItems:'flex-start', marginBottom: i < detail.structure.length-1 ? 14 : 0 }}>
                <div style={{ display:'flex', flexDirection:'column', alignItems:'center', flexShrink:0 }}>
                  <div style={{ width:28, height:28, borderRadius:'50%', background:`${zone.color}1A`, border:`2px solid ${zone.color}`, color:zone.color, fontWeight:800, fontSize:12, display:'flex', alignItems:'center', justifyContent:'center' }}>{i+1}</div>
                  {i < detail.structure.length-1 && <div style={{ width:2, height:18, background:`${zone.color}25`, marginTop:4 }} />}
                </div>
                <div>
                  <div style={{ display:'flex', gap:8, alignItems:'center', marginBottom:3, flexWrap:'wrap' }}>
                    <span style={{ fontSize:13, fontWeight:700, color:'#FFF' }}>{s.phase}</span>
                    {s.duration && <span style={{ fontSize:11, color:zone.color, fontWeight:600, background:`${zone.color}15`, padding:'1px 7px', borderRadius:5 }}>{s.duration}</span>}
                  </div>
                  <p style={{ margin:0, fontSize:13, color:'#9CA3AF', lineHeight:1.65 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </Section>

          {/* Coach Note */}
          <div style={{ background:'#0E0E16', border:`1px solid ${zone.color}28`, borderRadius:12, padding:'14px 16px' }}>
            <div style={{ fontSize:11, fontWeight:700, color:zone.color, textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:7 }}>💬 Coach's Note</div>
            <p style={{ margin:0, fontSize:13, color:'#B8B8C8', lineHeight:1.72, fontStyle:'italic' }}>{detail.coachNote}</p>
          </div>

          {/* Key Focus */}
          <Section label="Key Focus Points" color={zone.color}>
            {detail.keyFocus.map((f, i) => (
              <div key={i} style={{ display:'flex', gap:10, alignItems:'flex-start', marginBottom: i < detail.keyFocus.length-1 ? 8 : 0 }}>
                <div style={{ width:7, height:7, borderRadius:'50%', background:zone.color, marginTop:5, flexShrink:0 }} />
                <span style={{ fontSize:13, color:'#D1D1E0', lineHeight:1.55 }}>{f}</span>
              </div>
            ))}
          </Section>

          {/* Feedback section — only for non-rest runs */}
          {!isRest && (
            <div style={{ border:`1px solid #2A2A3C`, borderRadius:14, overflow:'hidden' }}>
              <button onClick={() => setShowFeedback(v => !v)} style={{
                width:'100%', padding:'14px 18px', background:'#1C1C28',
                border:'none', cursor:'pointer', display:'flex', justifyContent:'space-between', alignItems:'center',
              }}>
                <span style={{ fontSize:13, fontWeight:700, color: saved ? '#4CAF7D' : '#FFF' }}>
                  {saved ? `✓ Feedback logged` : `📝 Log Your ${isCycle ? 'Ride' : 'Run'}`}
                </span>
                <span style={{ color:'#6B6B80', fontSize:14, transform: showFeedback ? 'rotate(180deg)' : 'none', transition:'transform .2s' }}>▾</span>
              </button>

              {showFeedback && (
                <div style={{ padding:'16px 18px 18px', background:'#13131C', borderTop:'1px solid #2A2A3C', display:'flex', flexDirection:'column', gap:14 }}>
                  <p style={{ margin:0, fontSize:12, color:'#6B7280' }}>Enter your actual {isCycle ? 'ride' : 'run'} data and get personalised coaching feedback.</p>

                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10 }}>
                    <InputGroup label="Total Time">
                      <div style={{ display:'flex', gap:6 }}>
                        <NumberInput value={mins} onChange={setMins} placeholder="min" max={999} />
                        <NumberInput value={secs} onChange={setSecs} placeholder="sec" max={59} />
                      </div>
                    </InputGroup>
                    <InputGroup label={isCycle ? "Avg Speed (km/h)" : "Avg Pace / km"}>
                      <div style={{ display:'flex', gap:6 }}>
                        <NumberInput value={paceMin} onChange={setPaceMin} placeholder={isCycle ? "km/h" : "min"} max={isCycle ? 60 : 30} />
                        {!isCycle && <NumberInput value={paceSec} onChange={setPaceSec} placeholder="sec" max={59} />}
                      </div>
                    </InputGroup>
                  </div>

                  <InputGroup label={`How did it feel? (optional)`}>
                    <textarea
                      value={notes}
                      onChange={e => setNotes(e.target.value)}
                      placeholder={isCycle ? "e.g. Legs felt strong, traffic was light..." : "e.g. Legs felt heavy but pushed through the intervals..."}
                      rows={2}
                      style={{ width:'100%', background:'#1E1E2E', border:'1px solid #2A2A3C', borderRadius:8, padding:'8px 10px', color:'#FFF', fontSize:13, fontFamily:'inherit', outline:'none' }}
                    />
                  </InputGroup>

                  <button onClick={handleAnalyse} style={{
                    padding:'11px', borderRadius:10, border:'none',
                    background: zone.color, color:'#FFF', fontWeight:700, fontSize:13, cursor:'pointer',
                  }}>
                    Get Coaching Feedback →
                  </button>

                  {analysis && (
                    <div style={{ background:'#0E0E18', border:`1px solid ${zone.color}33`, borderRadius:10, padding:'14px 16px', display:'flex', flexDirection:'column', gap:8 }}>
                      <div style={{ fontSize:11, fontWeight:700, color:zone.color, textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:4 }}>🤖 Your Coaching Feedback</div>
                      {analysis.map((line, i) => (
                        <p key={i} style={{ margin:0, fontSize:13, color:'#C8C8D8', lineHeight:1.65 }}>{line}</p>
                      ))}
                      {notes && (
                        <div style={{ marginTop:6, paddingTop:10, borderTop:'1px solid #2A2A3C' }}>
                          <div style={{ fontSize:11, color:'#6B7280', marginBottom:4 }}>Your note:</div>
                          <p style={{ margin:0, fontSize:13, color:'#9CA3AF', fontStyle:'italic' }}>"{notes}"</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Complete button */}
          {!isRaceDay && (
            <button onClick={() => { onToggle(); if (!isDone) onClose(); }} style={{
              width:'100%', padding:'14px', borderRadius:14, border: isDone ? '2px solid #4CAF7D' : 'none',
              background: isDone ? 'transparent' : zone.color,
              color: isDone ? '#4CAF7D' : '#FFF', fontWeight:700, fontSize:15, cursor:'pointer',
            }}>
              {isDone ? '✓ Marked as Complete — tap to undo' : 'Mark as Complete ✓'}
            </button>
          )}

          <div style={{ height:4 }} />
        </div>
      </div>
    </div>
  );
}

// ─── Small helpers ───────────────────────────────────────────────
function Tag({ children, bg, color, border }) {
  return (
    <span style={{ fontSize:10, fontWeight:700, background:bg, color, padding:'3px 8px', borderRadius:6, border: border ? `1px solid ${border}` : 'none' }}>
      {children}
    </span>
  );
}

function Stat({ val, label, color }) {
  return (
    <div>
      <div style={{ fontSize:13, fontWeight:700, color: color || '#FFF' }}>{val}</div>
      <div style={{ fontSize:10, color:'#6B7280' }}>{label}</div>
    </div>
  );
}

function Section({ label, color, children }) {
  return (
    <div>
      <div style={{ fontSize:11, fontWeight:700, color, textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:10 }}>{label}</div>
      {children}
    </div>
  );
}

function InputGroup({ label, children }) {
  return (
    <div>
      <div style={{ fontSize:11, color:'#6B7280', fontWeight:600, marginBottom:5 }}>{label}</div>
      {children}
    </div>
  );
}

function NumberInput({ value, onChange, placeholder, max }) {
  return (
    <input
      type="number" value={value} min={0} max={max}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      style={{
        flex:1, background:'#1E1E2E', border:'1px solid #2A2A3C', borderRadius:8,
        padding:'8px 10px', color:'#FFF', fontSize:14, fontFamily:'inherit',
        outline:'none', textAlign:'center', width:'100%',
      }}
    />
  );
}

// ─── Progress Summary ─────────────────────────────────────────────
function ProgressSummary({ completedRuns }) {
  const cycleTypes = ['cycle', 'cycle_hard', 'commute'];
  const completedWeeks = PLAN.filter(w => w.runs.every((_, i) => completedRuns[`${w.week}-${i}`])).length;

  const doneRunKm = PLAN.reduce((total, w) =>
    total + w.runs.reduce((s, r, i) =>
      s + (completedRuns[`${w.week}-${i}`] && !cycleTypes.includes(r.type) ? r.distance : 0), 0), 0);

  const doneCycleKm = PLAN.reduce((total, w) =>
    total + w.runs.reduce((s, r, i) =>
      s + (completedRuns[`${w.week}-${i}`] && cycleTypes.includes(r.type) ? r.distance : 0), 0), 0);

  const totalActivities = PLAN.reduce((s, w) => s + w.runs.filter(r => r.type !== 'rest').length, 0);
  const doneActivities = Object.values(completedRuns).filter(Boolean).length;

  return (
    <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
      {[
        { val: `${completedWeeks}/20`, label:'Weeks Done', color:'#818CF8' },
        { val: `${Math.round(doneRunKm)} km`, label:'🏃 Run KM', color:'#4CAF7D' },
        { val: `${Math.round(doneCycleKm)} km`, label:'🚲 Cycle KM', color:'#06B6D4' },
      ].map(s => (
        <div key={s.label} style={{ background:'#1A1A26', border:'1px solid #2A2A3C', borderRadius:10, padding:'10px 14px', flex:1, minWidth:80 }}>
          <div style={{ fontSize:15, fontWeight:800, color:s.color }}>{s.val}</div>
          <div style={{ fontSize:10, color:'#6B7280', marginTop:1 }}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}

// ─── Main App ────────────────────────────────────────────────────
export default function App() {
  const [completedRuns, setCompletedRuns] = useLocalStorage('marathon_completed', {});
  const [feedbacks, setFeedbacks] = useLocalStorage('marathon_feedbacks', {});
  const [activeTab, setActiveTab] = useLocalStorage('marathon_tab', 'plan');
  const [modalRun, setModalRun] = useState(null);
  const [modalIdx, setModalIdx] = useState(null);

  // Compute active week: first incomplete week, or last week
  const computeActiveWeek = () => {
    for (const w of PLAN) {
      const allDone = w.runs.every((_, i) => completedRuns[`${w.week}-${i}`]);
      if (!allDone) return w.week;
    }
    return 20;
  };

  const [selectedWeek, setSelectedWeek] = useLocalStorage('marathon_selected_week', computeActiveWeek());

  const week = PLAN[selectedWeek - 1];
  const phaseColor = PHASE_COLORS[week.phase] || '#818CF8';
  const totalKm = week.runs.reduce((s, r) => s + r.distance, 0);
  const runCount = week.runs.length;
  const completedThisWeek = week.runs.filter((_, i) => completedRuns[`${selectedWeek}-${i}`]).length;
  const isWeekComplete = completedThisWeek === runCount;

  // Auto-advance when all activities in week are complete
  const prevCompleted = useRef(completedThisWeek);
  useEffect(() => {
    if (prevCompleted.current !== runCount && completedThisWeek === runCount && selectedWeek < 20) {
      const timer = setTimeout(() => {
        setSelectedWeek(selectedWeek + 1);
      }, 1200);
      return () => clearTimeout(timer);
    }
    prevCompleted.current = completedThisWeek;
  }, [completedThisWeek, runCount]);

  const toggleComplete = (weekNum, dayIndex) => {
    const key = `${weekNum}-${dayIndex}`;
    setCompletedRuns(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const saveFeedback = (weekNum, dayIndex, fb) => {
    const key = `${weekNum}-${dayIndex}`;
    setFeedbacks(prev => ({ ...prev, [key]: fb }));
  };

  const openModal = (run, idx) => { setModalRun(run); setModalIdx(idx); };
  const closeModal = () => { setModalRun(null); setModalIdx(null); };

  return (
    <div style={{ fontFamily:"'Inter', system-ui, sans-serif", background:'#0C0C10', minHeight:'100vh', color:'#F1F1F3', paddingBottom:40 }}>

      {/* Modal */}
      {modalRun && (
        <RunModal
          run={modalRun} weekNum={selectedWeek}
          onClose={closeModal}
          isDone={!!completedRuns[`${selectedWeek}-${modalIdx}`]}
          onToggle={() => toggleComplete(selectedWeek, modalIdx)}
          feedback={feedbacks[`${selectedWeek}-${modalIdx}`] || null}
          onSaveFeedback={(fb) => saveFeedback(selectedWeek, modalIdx, fb)}
        />
      )}

      {/* Header */}
      <div style={{ background:'linear-gradient(160deg, #13131E 0%, #0C0C14 100%)', borderBottom:'1px solid #1E1E2C', padding:'20px 20px 16px' }}>
        <div style={{ maxWidth:620, margin:'0 auto' }}>
          <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:12 }}>
            <span style={{ fontSize:26 }}>🏃🚲</span>
            <div>
              <div style={{ fontSize:10, fontWeight:700, letterSpacing:'0.16em', color:'#818CF8', textTransform:'uppercase' }}>Aakash's Run & Ride Plan</div>
              <h1 style={{ margin:0, fontSize:20, fontWeight:900, color:'#FFF', letterSpacing:'-0.02em' }}>20 Weeks to 42.2 KM</h1>
            </div>
          </div>
          <ProgressSummary completedRuns={completedRuns} />
        </div>
      </div>

      {/* Tabs */}
      <div style={{ background:'#13131E', borderBottom:'1px solid #1E1E2C', position:'sticky', top:0, zIndex:100 }}>
        <div style={{ maxWidth:620, margin:'0 auto', display:'flex' }}>
          {[['plan','Training Plan'],['zones','Pace Zones'],['tips','Tips']].map(([id, label]) => (
            <button key={id} onClick={() => setActiveTab(id)} style={{
              flex:1, background:'none', border:'none', cursor:'pointer',
              padding:'13px 8px', fontSize:12, fontWeight:700,
              color: activeTab === id ? '#818CF8' : '#6B7280',
              borderBottom: activeTab === id ? '2px solid #818CF8' : '2px solid transparent',
              letterSpacing:'0.02em',
            }}>{label}</button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth:620, margin:'0 auto', padding:'18px 16px' }}>

        {/* ── PLAN TAB ── */}
        {activeTab === 'plan' && <>

          {/* Phase timeline */}
          <div style={{ background:'#13131E', borderRadius:14, padding:'14px 16px', marginBottom:18, border:'1px solid #1E1E2C' }}>
            <div style={{ fontSize:10, color:'#6B7280', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.12em', marginBottom:8 }}>20-Week Timeline</div>
            <div style={{ display:'flex', gap:3 }}>
              {PLAN.map((w) => {
                const allDone = w.runs.every((_,i) => completedRuns[`${w.week}-${i}`]);
                const pc = PHASE_COLORS[w.phase];
                return (
                  <div key={w.week} onClick={() => setSelectedWeek(w.week)} title={`Week ${w.week}: ${w.phase}`}
                    style={{ flex:1, height:7, borderRadius:3, cursor:'pointer', transition:'all .15s',
                      background: allDone ? pc : selectedWeek === w.week ? pc : `${pc}30`,
                      outline: selectedWeek === w.week ? `2px solid ${pc}` : 'none', outlineOffset:2,
                    }} />
                );
              })}
            </div>
            <div style={{ display:'flex', gap:12, marginTop:8, flexWrap:'wrap' }}>
              {[['Base','#4CAF7D'],['Build','#F59E0B'],['Peak','#EF4444'],['Taper','#818CF8'],['Race','#EC4899']].map(([l,c]) => (
                <div key={l} style={{ display:'flex', alignItems:'center', gap:4 }}>
                  <div style={{ width:7, height:7, borderRadius:'50%', background:c }} />
                  <span style={{ fontSize:10, color:'#6B7280' }}>{l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Week pills */}
          <div style={{ display:'flex', gap:5, flexWrap:'wrap', marginBottom:16 }}>
            {PLAN.map(w => {
              const allDone = w.runs.every((_,i) => completedRuns[`${w.week}-${i}`]);
              const pc = PHASE_COLORS[w.phase];
              const isCurrent = w.week === selectedWeek;
              return (
                <button key={w.week} onClick={() => setSelectedWeek(w.week)} style={{
                  width:34, height:34, borderRadius:9,
                  border: isCurrent ? `2px solid ${pc}` : allDone ? `2px solid ${pc}66` : '2px solid #1E1E2C',
                  background: isCurrent ? `${pc}18` : allDone ? `${pc}10` : '#13131E',
                  color: isCurrent ? pc : allDone ? pc : '#6B7280',
                  fontSize:11, fontWeight:700, cursor:'pointer', transition:'all .15s',
                }}>
                  {allDone ? '✓' : w.week}
                </button>
              );
            })}
          </div>

          {/* Week header */}
          <div style={{ background:'#13131E', borderRadius:14, padding:'14px 18px', marginBottom:12, border:`1px solid ${phaseColor}28` }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:8 }}>
              <div>
                <div style={{ fontSize:10, fontWeight:700, letterSpacing:'0.15em', color:phaseColor, textTransform:'uppercase', marginBottom:2 }}>{week.phase}</div>
                <div style={{ fontSize:19, fontWeight:900, color:'#FFF', letterSpacing:'-0.02em' }}>Week {week.week} <span style={{ fontSize:12, fontWeight:500, color:'#6B7280' }}>of 20</span></div>
              </div>
              <div style={{ display:'flex', gap:14 }}>
                <div style={{ textAlign:'right' }}>
                  <div style={{ fontSize:19, fontWeight:800, color:phaseColor }}>{totalKm} <span style={{ fontSize:11, color:'#6B7280' }}>km</span></div>
                  <div style={{ fontSize:10, color:'#6B7280' }}>total volume</div>
                </div>
                <div style={{ textAlign:'right' }}>
                  <div style={{ fontSize:19, fontWeight:800, color: isWeekComplete ? '#4CAF7D' : '#FFF' }}>{completedThisWeek}<span style={{ fontSize:12, color:'#6B7280' }}>/{runCount}</span></div>
                  <div style={{ fontSize:10, color:'#6B7280' }}>done</div>
                </div>
              </div>
            </div>
            <div style={{ marginTop:10, background:'#1E1E2C', borderRadius:6, height:4, overflow:'hidden' }}>
              <div style={{ width:`${(completedThisWeek/runCount)*100}%`, height:'100%', borderRadius:6, background: isWeekComplete ? '#4CAF7D' : phaseColor, transition:'width .5s ease' }} />
            </div>
            {isWeekComplete && selectedWeek < 20 && (
              <div style={{ marginTop:10, background:'#0E1F16', border:'1px solid #4CAF7D44', borderRadius:8, padding:'8px 12px', fontSize:12, color:'#4CAF7D', fontWeight:600 }}>
                🎉 Week {selectedWeek} complete! Moving to Week {selectedWeek + 1}…
              </div>
            )}
            {isWeekComplete && selectedWeek === 20 && (
              <div style={{ marginTop:10, background:'#1A0A1A', border:'1px solid #EC4899', borderRadius:8, padding:'8px 12px', fontSize:12, color:'#EC4899', fontWeight:600 }}>
                🏅 All 20 weeks complete! Go run that marathon!
              </div>
            )}
          </div>

          <div style={{ fontSize:11, color:'#6B7280', textAlign:'center', marginBottom:12 }}>Tap any session for full details & feedback</div>

          {/* Activity cards */}
          <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
            {week.runs.map((run, i) => {
              const isCycleCard = ['cycle', 'cycle_hard', 'commute'].includes(run.type);
              const zone = PACE_ZONES[run.type] || PACE_ZONES['easy'];
              const done = completedRuns[`${selectedWeek}-${i}`];
              const hasFb = !!feedbacks[`${selectedWeek}-${i}`];
              const isRaceDay = run.title.includes('MARATHON DAY');
              return (
                <div key={i} onClick={() => openModal(run, i)} style={{
                  background: done ? (isCycleCard ? '#041618' : '#0E1A12') : '#13131E',
                  border: `1px solid ${done ? `${zone.color}44` : isRaceDay ? '#EC489966' : '#1E1E2C'}`,
                  borderRadius:13, padding:'13px 15px', cursor:'pointer',
                  transition:'all .15s', opacity: done && !isRaceDay ? 0.82 : 1,
                }}>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                    <div style={{ flex:1, minWidth:0 }}>
                      <div style={{ display:'flex', alignItems:'center', gap:6, marginBottom:5, flexWrap:'wrap' }}>
                        <Tag bg="#1A1A26" color="#6B7280">{run.day}</Tag>
                        <Tag bg={zone.bg} color={zone.color} border={zone.border}>
                          {isCycleCard ? '🚲 ' : ''}{zone.label}
                        </Tag>
                        {isRaceDay && <Tag bg="#EC489920" color="#EC4899">RACE DAY</Tag>}
                        {done && <Tag bg="#4CAF7D18" color="#4CAF7D">✓ Done</Tag>}
                        {hasFb && !done && <Tag bg="#818CF818" color="#818CF8">📝 Logged</Tag>}
                        {hasFb && done && <Tag bg="#818CF818" color="#818CF8">📝 Logged</Tag>}
                      </div>
                      <div style={{ fontSize:15, fontWeight:700, color:'#FFF', marginBottom:2 }}>{run.title}</div>
                      <div style={{ fontSize:12, color:'#6B7280' }}>
                        {run.distance > 0
                          ? `${run.distance} km · ${isCycleCard ? zone.paceRange + ' avg' : zone.paceRange}`
                          : 'Full rest day'}
                      </div>
                    </div>
                    <span style={{ color:'#2E2E3E', fontSize:20, marginLeft:10 }}>›</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Nav */}
          <div style={{ display:'flex', gap:10, marginTop:16 }}>
            <button onClick={() => setSelectedWeek(w => Math.max(1, w-1))} disabled={selectedWeek===1}
              style={{ flex:1, padding:'12px', borderRadius:12, border:'1px solid #1E1E2C', background:'#13131E', color:'#9CA3AF', cursor:selectedWeek===1?'not-allowed':'pointer', fontWeight:600, fontSize:13, opacity:selectedWeek===1?.4:1 }}>
              ← Prev Week
            </button>
            <button onClick={() => setSelectedWeek(w => Math.min(20, w+1))} disabled={selectedWeek===20}
              style={{ flex:1, padding:'12px', borderRadius:12, border:'none', background:phaseColor, color:'#FFF', cursor:selectedWeek===20?'not-allowed':'pointer', fontWeight:700, fontSize:13, opacity:selectedWeek===20?.4:1 }}>
              Next Week →
            </button>
          </div>
        </>}

        {/* ── ZONES TAB ── */}
        {activeTab === 'zones' && (
          <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
            <p style={{ margin:'0 0 6px', fontSize:13, color:'#6B7280' }}>All paces based on your 5K best of 30 minutes (~6:00/km). These will naturally improve as your fitness develops.</p>
            {Object.entries(PACE_ZONES).filter(([k]) => k !== 'rest').map(([key, zone]) => (
              <div key={key} style={{ background:zone.bg, border:`1px solid ${zone.border}`, borderRadius:14, padding:'16px 18px' }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:8 }}>
                  <span style={{ fontWeight:800, fontSize:16, color:zone.color }}>{zone.label}</span>
                  <span style={{ background:`${zone.color}1A`, color:zone.color, fontWeight:700, fontSize:12, padding:'4px 11px', borderRadius:8 }}>{zone.paceRange}</span>
                </div>
                <div style={{ display:'flex', gap:14, marginBottom:10 }}>
                  <div><span style={{ fontSize:11, color:'#6B7280' }}>Effort: </span><span style={{ fontSize:12, fontWeight:700, color:'#FFF' }}>{zone.effort}</span></div>
                  <div><span style={{ fontSize:11, color:'#6B7280' }}>HR: </span><span style={{ fontSize:12, fontWeight:700, color:'#FFF' }}>{zone.heartRate}</span></div>
                </div>
                <div style={{ background:'#0E0E18', borderRadius:6, height:5, overflow:'hidden' }}>
                  <div style={{ width: key==='easy'?'40%':key==='tempo'?'68%':key==='interval'?'88%':'52%', height:'100%', background:zone.color, borderRadius:6 }} />
                </div>
                <div style={{ display:'flex', justifyContent:'space-between', marginTop:4 }}>
                  <span style={{ fontSize:10, color:'#6B7280' }}>Effort level</span>
                  <span style={{ fontSize:10, color:zone.color, fontWeight:700 }}>
                    {key==='easy'?'Low (aerobic base)':key==='tempo'?'Moderate-Hard (threshold)':key==='interval'?'High (VO2 max)':'Moderate (endurance)'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── TIPS TAB ── */}
        {activeTab === 'tips' && (
          <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
            {[
              { icon:'🍌', title:'Fuel Your Long Runs', body:'For runs over 75 mins, take an energy gel, banana, or dates every 45 minutes. Start fuelling early — at km 5 or 6, before you feel hungry. Your gut needs training just like your legs.' },
              { icon:'💧', title:'Hydration Strategy', body:'Drink 400–600ml of water 2 hours before running. During long runs, aim for 150–250ml every 20 minutes. Practice race-day nutrition on every Sunday long run — never try new foods on race day.' },
              { icon:'😴', title:'Sleep is Training', body:'You\'re starting at 4am — protect 7–8 hours. Human growth hormone peaks during deep sleep. This is when your muscle fibres literally rebuild stronger. Sleep is not optional — it\'s training.' },
              { icon:'🧊', title:'Recovery After Hard Sessions', body:'After intervals or tempo runs: 10-min walk cool-down, foam roll calves + IT band + glutes (60s each), cold shower if possible. Take 10–15g protein within 30 minutes. Recovery is where adaptation happens.' },
              { icon:'👟', title:'Shoe Strategy', body:'Running shoes last 500–700km. With your training volume, you\'ll clock these fast. If possible, rotate two pairs — a cushioned daily trainer for easy/long runs, and a slightly lighter shoe for intervals. Your joints will thank you.' },
              { icon:'📉', title:'Trust the Taper', body:'Weeks 18–19 will feel wrong — you\'ll feel sluggish, undertrained, and anxious. This is 100% normal. Your body is consolidating 17 weeks of fitness. Adding extra runs is the worst thing you can do. Trust the process.' },
              { icon:'🎯', title:'Race Day Pacing', body:'Start at 8:15–8:30/km regardless of how good you feel. The crowd and adrenaline will push you faster. Resist it. Most first marathon disasters happen before km 15 when runners feel great and go too fast — paying for it between km 30–35.' },
              { icon:'🧠', title:'The Mental Game', body:'Between km 30–35, your brain will negotiate. It will say "walk", "stop", "you\'ve done enough." Train your response: shorten stride, pump arms, focus on the next km marker only. The marathon is 80% mental in the final 12km.' },
              { icon:'🩺', title:'Know the Difference', body:'Muscle fatigue and general soreness = normal and expected. Sharp joint pain, knee pain that worsens mid-run, or anything that makes you change your gait = a warning sign. A missed week now costs less than a missed race day.' },
            ].map((tip, i) => (
              <div key={i} style={{ background:'#13131E', border:'1px solid #1E1E2C', borderRadius:14, padding:'14px 16px' }}>
                <div style={{ fontSize:20, marginBottom:7 }}>{tip.icon}</div>
                <div style={{ fontWeight:700, fontSize:14, color:'#FFF', marginBottom:5 }}>{tip.title}</div>
                <div style={{ fontSize:13, color:'#9CA3AF', lineHeight:1.65 }}>{tip.body}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}