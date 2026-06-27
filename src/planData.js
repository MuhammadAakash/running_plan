export const PACE_ZONES = {
  easy:     { label: "Easy Run",    color: "#4CAF7D", bg: "#0E1F16", border: "#4CAF7D33", paceRange: "7:30–8:30 /km",  treadmillSpeed: "7.1–8.0 km/h",  effort: "4/10", heartRate: "60–70% max HR" },
  tempo:    { label: "Tempo Run",   color: "#F59E0B", bg: "#1F180A", border: "#F59E0B33", paceRange: "6:00–6:30 /km",  treadmillSpeed: "9.2–10.0 km/h", effort: "7/10", heartRate: "80–90% max HR" },
  interval: { label: "Intervals",   color: "#EF4444", bg: "#1F0E0E", border: "#EF444433", paceRange: "5:30–6:00 /km",  treadmillSpeed: "10.0–10.9 km/h",effort: "9/10", heartRate: "90–95% max HR" },
  long:     { label: "Long Run",    color: "#818CF8", bg: "#0E0E1F", border: "#818CF833", paceRange: "7:45–8:45 /km",  treadmillSpeed: "6.9–7.7 km/h",  effort: "5/10", heartRate: "65–75% max HR" },
  rest:     { label: "Rest Day",    color: "#6B7280", bg: "#121218", border: "#2A2A3A",   paceRange: "—",              treadmillSpeed: "—",              effort: "—",    heartRate: "—" },
  cycle:    { label: "Cycle",       color: "#06B6D4", bg: "#051A1E", border: "#06B6D433", paceRange: "14–20 km/h",     treadmillSpeed: "—",              effort: "4–6/10", heartRate: "60–75% max HR" },
  cycle_hard: { label: "Hard Ride", color: "#0EA5E9", bg: "#051218", border: "#0EA5E933", paceRange: "18–24 km/h",    treadmillSpeed: "—",              effort: "7/10", heartRate: "75–85% max HR" },
  commute:  { label: "Commute Ride",color: "#22D3EE", bg: "#041618", border: "#22D3EE33", paceRange: "16–20 km/h",    treadmillSpeed: "—",              effort: "5/10", heartRate: "65–75% max HR" },
};

export const PHASE_COLORS = {
  "Base Building": "#4CAF7D",
  "Build":         "#F59E0B",
  "Peak":          "#EF4444",
  "Taper":         "#818CF8",
  "Race Week 🏁":  "#EC4899",
};

export const CYCLE_DETAILS = {
  easy_ride: {
    outdoor: {
      overview: "An easy recovery ride — low intensity, high enjoyment. Cycling at easy effort is the perfect cross-training complement to marathon running. It builds cardiovascular fitness and leg strength without the impact stress of running.",
      structure: [
        { phase: "Warm-Up", duration: "5 min easy spin", desc: "Start in a low gear. Just get the legs turning over. Let your heart rate rise gradually without any effort. Aim for a high cadence (80–90 rpm) at very low resistance." },
        { phase: "Main Ride", duration: "Full distance at 14–18 km/h", desc: "Ride at a comfortable, conversational pace. You should be able to speak easily. Stay in flat or gentle terrain if possible. Focus on smooth pedal strokes — think of it as a circle, not just pushing down." },
        { phase: "Cool-Down", duration: "5 min easy spin", desc: "Drop to your lowest gear and spin easily. Then stretch: hip flexors (30s each), quads (30s each), and calf stretch against a wall (30s each)." },
      ],
      coachNote: "Easy cycling the day before a run actually helps your legs recover faster than complete rest. The low-impact movement increases blood flow to tired muscles without creating new fatigue. Think of it as active recovery with wheels.",
      keyFocus: ["High cadence, low resistance — spin don't grind", "Stay in an easy gear — no huffing or puffing", "Conversational effort throughout", "This is complementing your running, not competing with it"],
    },
  },
  commute_ride: {
    outdoor: {
      overview: "Your work commute by bike — 21km each way (13 miles). This is a brilliant way to combine training with daily life. On commute days, the ride IS the training. No separate workout needed.",
      structure: [
        { phase: "Morning Ride In", duration: "21 km — ~65–75 min", desc: "Leave 10–15 mins earlier than you think you need. Ride at a moderate, sustainable pace (16–18 km/h). You're going to work — arrive composed, not drenched. Aim for steady effort, not race pace." },
        { phase: "At Work", duration: "Change + recover", desc: "Bring a change of clothes and a towel. Eat a proper breakfast when you arrive — after 21km you've burned 400–500 calories. Hydrate consistently throughout the day." },
        { phase: "Evening Ride Home", duration: "21 km — ~65–75 min", desc: "The return commute can be slightly more relaxed if your legs are tired. Or use it as your harder ride if you feel fresh. Total day: ~42km of cycling. That's serious volume." },
      ],
      coachNote: "Commuting by bike is one of the most efficient training tools available — you're getting fit while doing something you have to do anyway. On commute days, do NOT add a run. 42km of cycling on top of running will lead to injury. Trust that the commute IS your training.",
      keyFocus: ["Morning: moderate pace — arrive at work composed", "Bring kit: change of clothes, lock, lights, snacks", "On commute days: no running — 42km cycling is enough", "Helmet, lights, high-vis — non-negotiable in London traffic"],
    },
  },
  tempo_ride: {
    outdoor: {
      overview: "A structured cycling effort — pushing into a higher zone to build cycling-specific fitness and cardiovascular capacity. This is your 'hard' cycling session: not a race, but deliberately uncomfortable.",
      structure: [
        { phase: "Warm-Up", duration: "10 min easy spin", desc: "Easy gear, high cadence (90 rpm), flat road. Get the legs moving before you push into harder effort." },
        { phase: "Main Effort", duration: "15–20 min sustained push", desc: "Increase pace to 20–24 km/h on a flat or rolling route. This should feel comfortably hard — similar to your tempo running effort. You can speak single words, not sentences. Hold this for 15–20 minutes continuously." },
        { phase: "Easy Spin", duration: "5 min", desc: "Drop back to easy gear and spin for 5 minutes." },
        { phase: "Cool-Down", duration: "10 min easy + stretch", desc: "Easy spin home. Stretch hip flexors and calves when done." },
      ],
      coachNote: "Cycling tempo work builds your aerobic engine without the impact of running. The cardiovascular gains transfer directly to your marathon fitness — your heart and lungs don't know if it's a bike or a road. This is why triathletes and marathon runners both cross-train on bikes.",
      keyFocus: ["20–24 km/h sustained effort", "Aim for 80–90 rpm cadence even at higher speed", "Stay in aero position (slight forward lean) for efficiency", "This builds the same fitness as a tempo run with zero impact"],
    },
  },
  long_ride: {
    outdoor: {
      overview: "A longer, easy-paced ride to build your cycling base and aerobic endurance. As your commute approaches 21km each way, these longer rides prepare your body for sustained time in the saddle.",
      structure: [
        { phase: "Warm-Up", duration: "10 min easy", desc: "Easy spin in a low gear. Let your joints and muscles warm up before pushing further." },
        { phase: "Main Ride", duration: "Full distance at 15–18 km/h", desc: "Steady, conversational pace. This is endurance work — not speed work. Eat something at the 45-minute mark if riding over 90 minutes. Stay hydrated every 15–20 minutes." },
        { phase: "Cool-Down", duration: "10 min easy spin + stretch", desc: "Gradually reduce effort over the last 10 minutes. Stretch hip flexors, calves, lower back, and neck after — cycling tightens all of these." },
      ],
      coachNote: "Long rides build cycling-specific endurance and teach your body to sustain aerobic effort over time. On weeks where you're also doing long runs, keep the ride easy — the combined load adds up. Fuel well and sleep well after long ride days.",
      keyFocus: ["Easy pace — this isn't a race", "Fuel at 45 min if riding 90+ min", "Hydrate every 15–20 min — cycling dehydrates you faster than you think", "Comfortable saddle position — adjust before you're sore, not after"],
    },
  },
  commute_prep: {
    outdoor: {
      overview: "A progressive ride building toward your 21km commute. You started at 11km — these sessions step up the distance each week so when commute day arrives, 21km feels manageable rather than daunting.",
      structure: [
        { phase: "Warm-Up", duration: "5 min easy", desc: "Easy spin. Settle into position and get the legs moving." },
        { phase: "Main Ride", duration: "Full distance at 15–18 km/h", desc: "Ride at comfortable pace. This distance is slightly longer than last week — resist the urge to push pace. Add distance, not speed." },
        { phase: "Cool-Down", duration: "5 min easy + stretch", desc: "Easy spin and stretch afterwards. Your legs are also carrying running volume this week." },
      ],
      coachNote: "Building toward the 21km commute requires progressive distance — just like marathon training. Each week you add a few km to your ride. By the time commute day arrives, your body will be ready. Don't rush the progression.",
      keyFocus: ["Increase distance, not speed", "Run days take priority — if legs are tired, shorten the ride", "Practice your commute route on a weekend first", "Get comfortable with your bike setup: saddle height, gears, brakes"],
    },
  },
};

export const RUN_DETAILS = {
  easy_default: {
    outdoor: {
      overview: "An easy aerobic run at a comfortable, conversational pace. This is the foundation of your marathon training — building your aerobic engine without accumulating fatigue. Around 80% of your total training should be at this effort.",
      structure: [
        { phase: "Warm-Up", duration: "5 min walk → jog", desc: "Start with a 2-minute brisk walk, then ease into a very gentle jog. Let your heart rate climb naturally — no rushing." },
        { phase: "Main Run", duration: "Full distance at 7:30–8:30/km", desc: "Run at a fully conversational pace. You should be able to speak full sentences without gasping. If you can't, slow down — there is no such thing as too slow on an easy day." },
        { phase: "Cool-Down", duration: "5 min walk + stretch", desc: "Walk the final 5 minutes. Follow with: calf stretch (30s each), quad stretch (30s each), hip flexor lunge stretch (30s each side)." },
      ],
      coachNote: "If you feel the urge to go faster — resist it. Easy runs are supposed to feel almost too easy. The science is clear: running slower on easy days means you can run harder on hard days, and that's where the real improvement happens.",
      keyFocus: ["Stay fully conversational — if in doubt, slow down", "Drop your shoulders away from your ears", "Short, light strides — don't overstride", "Breathe in through nose, out through mouth if possible"],
    },
    treadmill: {
      overview: "An easy aerobic run on the treadmill. Set the incline to 1% — this compensates for the lack of wind resistance and replicates outdoor effort more accurately. Keep pace easy and conversational throughout.",
      structure: [
        { phase: "Warm-Up", duration: "3 min walk at 5 km/h", desc: "Step on and walk at 5 km/h for 3 minutes. Then increase to your easy run speed." },
        { phase: "Main Run", duration: "Full distance at 7.1–8.0 km/h", desc: "Set incline to 1% — non-negotiable on a treadmill for outdoor simulation. Run at 7.1–8.0 km/h. Should feel very comfortable — full conversation possible." },
        { phase: "Cool-Down", duration: "3 min walk + stretch", desc: "Drop to 5 km/h for 3 minutes, then step off and stretch calves, quads, and hip flexors." },
      ],
      coachNote: "Always set 1% incline on a treadmill. Flat treadmill running underestimates true effort. 1% corrects for this. Everything else: easy, conversational, relaxed.",
      keyFocus: ["1% incline — always", "7.1–8.0 km/h speed range", "Don't hold the handrails", "Cover the display and run by feel"],
    },
  },
  recovery_default: {
    outdoor: {
      overview: "A very short, very easy run to flush lactic acid and promote blood flow to tired muscles. This isn't about fitness — it's about accelerating recovery so you're ready for Sunday's long run.",
      structure: [
        { phase: "Walk", duration: "3 min", desc: "Start walking briskly before any jogging begins." },
        { phase: "Recovery Jog", duration: "Full distance at 8:30–9:30/km", desc: "Jog at the slowest pace that still counts as running. Even 9:30/km is fine. Movement is the goal." },
        { phase: "Cool-Down + Mobility", duration: "8 min", desc: "Walk 3 minutes then: leg swings (10 each leg), hip circles (10 each), calf raises (15), quad stretch (30s each)." },
      ],
      coachNote: "Recovery runs should feel embarrassingly slow. Your legs are carrying both running and cycling volume now — be especially conservative on these. Don't let pride push the pace up.",
      keyFocus: ["Slower than easy pace", "No ego — recovery is the only goal", "Smooth, relaxed form", "Keep it short — finishing is the aim"],
    },
    treadmill: {
      overview: "A gentle recovery jog on the treadmill. The treadmill is ideal for recovery runs — it forces you to hold a slow, steady pace.",
      structure: [
        { phase: "Walk", duration: "3 min at 5 km/h", desc: "Walk at 5 km/h for 3 minutes to warm up gently." },
        { phase: "Recovery Jog", duration: "Full distance at 6.3–7.1 km/h", desc: "Set treadmill to 6.3–7.1 km/h with 1% incline. Genuinely slow — and that's exactly right." },
        { phase: "Walk + Stretch", duration: "5 min", desc: "Drop to 4.5 km/h for 3 minutes, then step off and do light leg swings and calf stretches." },
      ],
      coachNote: "The treadmill removes any external pressure to run faster. Set a slow speed, put on a podcast, just move for the required time.",
      keyFocus: ["1% incline", "6.3–7.1 km/h — no faster", "Podcast or music — this is meant to be easy", "Preparation for Sunday's long run"],
    },
  },
  interval_400: {
    outdoor: (run) => ({
      overview: `Short, sharp 400m repetitions to develop running economy and introduce your legs to faster paces. Today: ${run.notes.split('×')[0].trim()}×400m — building raw speed that translates directly into a stronger marathon pace.`,
      structure: [
        { phase: "Warm-Up", duration: "10 min easy jog", desc: "Easy jog at 8:00/km for 10 minutes. Finish with 4×20-second acceleration strides — smoothly build speed for 20 seconds, walk 30s between each." },
        { phase: `${run.notes.split('×')[0].trim()}×400m Reps`, duration: "~2:10 each rep", desc: `Run 400m at 5:30/km — hard but controlled, not all-out. That's ${run.notes.split('×')[0].trim()} reps total. Recover with exactly 90 seconds of walking between each rep.` },
        { phase: "Cool-Down", duration: "10 min easy jog", desc: "Drop pace to 8:30/km and jog easily for 10 minutes. Walk the final 2 minutes. Stretch calves and quads." },
      ],
      coachNote: `Each of your ${run.notes.split('×')[0].trim()} reps should feel the same intensity. Don't go out too hard on rep 1. Note: you're also cycling this week — your legs may carry extra fatigue. That's fine — just be consistent, not heroic.`,
      keyFocus: [`${run.notes.split('×')[0].trim()} reps of 400m`, "Even effort across all reps", "90s full recovery — don't cheat this", "Drive your arms — arms drive legs"],
    }),
    treadmill: (run) => ({
      overview: `${run.notes.split('×')[0].trim()}×400m intervals on the treadmill. Consistent pace across all reps is the goal.`,
      structure: [
        { phase: "Warm-Up", duration: "10 min at 7.5 km/h", desc: "Treadmill at 1% incline, 7.5 km/h for 10 minutes. Then 4 stride-outs at 10 km/h for 20 seconds each." },
        { phase: `${run.notes.split('×')[0].trim()}×400m Reps`, duration: "~2:10 each at 10.5–11.0 km/h", desc: `Increase to 10.5–11.0 km/h for 400m. Complete ${run.notes.split('×')[0].trim()} reps. Straddle the belt or slow to 5 km/h for 90 seconds recovery between each.` },
        { phase: "Cool-Down", duration: "8 min at 7.0 km/h", desc: "Drop to 7.0 km/h for 8 minutes, then 3 min walk. Stretch." },
      ],
      coachNote: "Treadmill reps: the machine controls the pace for you. Straddle the belt during recovery. Don't stop the machine.",
      keyFocus: ["10.5–11.0 km/h for reps", "1% incline throughout", "Straddle rails for recovery", `${run.notes.split('×')[0].trim()} reps total`],
    }),
  },
  interval_800: {
    outdoor: (run) => {
      const repCount = run.notes.match(/(\d+)×800m/)?.[1] || run.notes.split('×')[0].trim();
      return {
        overview: `${repCount}×800m — the classic marathon builder. These develop your lactate threshold and teach your body to sustain harder efforts for longer. Today: ${repCount} reps of 800m at 5:45/km.`,
        structure: [
          { phase: "Warm-Up", duration: "10 min easy + strides", desc: "Easy jog at 8:00/km for 10 minutes, then 4×20-second strides with 30s walk between each." },
          { phase: `${repCount}×800m Reps`, duration: "~4:35 each rep", desc: `Run 800m at 5:45/km — ${repCount} reps in total. This should feel 7/10 effort: hard enough that you couldn't sustain it for 5km, but controlled enough to hold good form. Take exactly 2 full minutes recovery (walk or stand) between every rep. Do not skip or shorten the recovery.` },
          { phase: "Cool-Down", duration: "10 min easy jog", desc: "Easy jog at 8:30/km for 10 minutes. Don't skip this — it flushes lactic acid and reduces soreness tomorrow." },
        ],
        coachNote: `${repCount} reps today. Think of each one as a deposit you'll withdraw at km 35 on race day. Your legs are also carrying cycling volume this week — if you feel heavy in the warm-up, that's normal. Start conservative on rep 1 and build.`,
        keyFocus: [`${repCount} reps of 800m`, "5:45/km target pace", "Full 2-minute recovery between every rep", "Maintain form even when fatigued on rep ${repCount}"],
      };
    },
    treadmill: (run) => {
      const repCount = run.notes.match(/(\d+)×800m/)?.[1] || run.notes.split('×')[0].trim();
      return {
        overview: `${repCount}×800m on the treadmill. Consistent pace across all ${repCount} reps is the goal — the belt keeps you honest.`,
        structure: [
          { phase: "Warm-Up", duration: "10 min at 7.5 km/h", desc: "Treadmill at 1% incline, 7.5 km/h. Then 4 stride-outs at 9.5 km/h for 20 seconds each." },
          { phase: `${repCount}×800m Reps`, duration: "~4:35 each at 10.0–10.5 km/h", desc: `Increase to 10.0–10.5 km/h for 800m. Complete ${repCount} reps in total. After each rep, straddle the rails or slow to 5 km/h for a full 2-minute recovery. Then go again.` },
          { phase: "Cool-Down", duration: "10 min at 7.0 km/h", desc: "Drop to 7.0 km/h for 10 minutes. Walk 3 minutes. Foam roll calves and glutes." },
        ],
        coachNote: `${repCount} reps at 10.0–10.5 km/h. Use the full 2 minutes recovery. The treadmill won't let you cheat the pace — use that to your advantage.`,
        keyFocus: ["10.0–10.5 km/h for reps", `${repCount} reps total`, "2-minute full recovery", "1% incline throughout"],
      };
    },
  },
  interval_1km: {
    outdoor: (run) => {
      const repCount = run.notes.match(/(\d+)×1km/)?.[1] || run.notes.match(/(\d+)×/)?.[1] || '4';
      return {
        overview: `${repCount}×1km at close to your 10K race pace. These longer reps build aerobic power and mental toughness for the marathon's final 10km. Today: ${repCount} reps of 1km at 5:40–5:45/km.`,
        structure: [
          { phase: "Warm-Up", duration: "12 min easy + drills", desc: "10 minutes easy jog, then: high knees (30s), butt kicks (30s), lateral shuffles (30s), and 3 acceleration strides." },
          { phase: `${repCount}×1km Reps`, duration: "~5:43 each rep", desc: `Run 1km at 5:40–5:45/km — ${repCount} reps in total. Comfortably hard: working but not gasping. Take 90 seconds easy jog recovery between each rep. Run all ${repCount} reps.` },
          { phase: "Cool-Down", duration: "10 min easy + stretch", desc: "Easy jog at 8:30/km for 10 minutes. Foam roll calves, IT band, and glutes when home." },
        ],
        coachNote: `${repCount} × 1km is a serious session. With cycling volume added to your week, these reps might feel harder than expected — that's normal. Don't compare to how you felt before cycling. The combined load is building a broader athletic base.`,
        keyFocus: [`${repCount} reps of 1km — run all of them`, "5:40–5:45/km target", "90s jog recovery between reps", "Last rep: visualise the marathon finish line"],
      };
    },
    treadmill: (run) => {
      const repCount = run.notes.match(/(\d+)×1km/)?.[1] || run.notes.match(/(\d+)×/)?.[1] || '4';
      return {
        overview: `${repCount}×1km on the treadmill. 1km reps are well-suited to a treadmill — distance is easy to track and consistent speed keeps every rep honest.`,
        structure: [
          { phase: "Warm-Up", duration: "10 min at 7.5 km/h", desc: "Treadmill at 1% incline, 7.5 km/h for 10 minutes. Then 3 stride-outs at 10 km/h for 20 seconds each." },
          { phase: `${repCount}×1km Reps`, duration: "~5:43 each at 10.5 km/h", desc: `Set to 10.5 km/h for each 1km rep. ${repCount} reps total. After each km, straddle the rails or slow to 5 km/h for 90 seconds, then build back up to 10.5 km/h.` },
          { phase: "Cool-Down", duration: "10 min at 7.0 km/h", desc: "Drop to 7.0 km/h for 10 minutes. Walk 3 minutes. Foam roll immediately after." },
        ],
        coachNote: `10.5 km/h for ${repCount} reps. Use the distance display to track each 1km precisely. Rest fully between reps.`,
        keyFocus: ["10.5 km/h for reps", `${repCount} reps total`, "90s recovery between reps", "1% incline the whole session"],
      };
    },
  },
  interval_1k5: {
    outdoor: (run) => {
      const repCount = run.notes.match(/(\d+)×1\.5km/)?.[1] || '4';
      return {
        overview: `${repCount}×1.5km — the peak interval session of the plan. These bridge the gap between speed work and tempo, building sustained effort capacity for the final 12km of the marathon. Today: ${repCount} reps of 1.5km at 5:50/km.`,
        structure: [
          { phase: "Warm-Up", duration: "12 min easy + strides", desc: "10 min easy jog at 8:00/km, then 4 acceleration strides over 100m each." },
          { phase: `${repCount}×1.5km Reps`, duration: "~8:45 each rep", desc: `Run 1.5km at 5:50/km — ${repCount} reps, ${(parseFloat(repCount)*1.5).toFixed(1)}km of total quality running. Take exactly 2 full minutes recovery between every rep. This is the hardest interval session of the plan.` },
          { phase: "Cool-Down", duration: "12 min easy + walk", desc: "Extended cool-down jog at 8:30/km for 12 minutes, then 5 minutes walking. Eat carbs + protein within 30 minutes." },
        ],
        coachNote: `${repCount} × 1.5km is the biggest interval session in the plan. With your cycling added to the week, your legs will carry more fatigue than in a pure running plan. That's okay — it's building a broader aerobic base. When the last rep gets hard, remember: this is exactly what km 35 of the marathon will feel like.`,
        keyFocus: [`${repCount} reps of 1.5km — the peak session`, "5:50/km consistent across all reps", "Full 2-minute recovery — non-negotiable", "Last 2 reps are where the fitness is built"],
      };
    },
    treadmill: (run) => {
      const repCount = run.notes.match(/(\d+)×1\.5km/)?.[1] || '4';
      return {
        overview: `${repCount}×1.5km on the treadmill. Long, demanding reps — the treadmill ensures honest pace across all ${repCount}.`,
        structure: [
          { phase: "Warm-Up", duration: "12 min at 7.5 km/h", desc: "Treadmill at 1% incline, 7.5 km/h for 12 minutes. Then 3 stride-outs at 10 km/h for 20 seconds each." },
          { phase: `${repCount}×1.5km Reps`, duration: "~8:45 each at 10.3 km/h", desc: `Set to 10.3 km/h for each 1.5km rep. ${repCount} reps in total. After each rep, drop to 5 km/h or straddle rails for a full 2-minute recovery.` },
          { phase: "Cool-Down", duration: "10 min at 7.0 km/h + walk", desc: "Drop to 7.0 km/h for 10 minutes, then walk 5 minutes. Foam roll immediately." },
        ],
        coachNote: `${repCount} reps at 10.3 km/h. This is elite stimulus for a first marathon runner. The treadmill will not let you cheat pace.`,
        keyFocus: ["10.3 km/h for reps", `${repCount} reps × 1.5km each`, "Full 2-minute recovery", "1% incline throughout"],
      };
    },
  },
  interval_400_taper: {
    outdoor: (run) => ({
      overview: "4×400m taper sharpeners — keeping your legs neuromuscularly primed for race day without adding fatigue. Short, sharp, done.",
      structure: [
        { phase: "Warm-Up", duration: "10 min easy jog", desc: "Easy jog at 8:00/km for 10 minutes, then 4×20-second strides." },
        { phase: "4×400m Reps", duration: "~2:10 each rep", desc: "Run 4 reps of 400m at 5:30/km. Just 4 reps. Take 2 full minutes recovery between each. Notice how your legs feel: fresh, fast, ready." },
        { phase: "Cool-Down", duration: "8 min easy jog", desc: "Easy jog at 8:30/km for 8 minutes. Light session — no need for extended cool-down." },
      ],
      coachNote: "4 reps only — don't add more. The taper is working. Your next hard effort is the marathon itself.",
      keyFocus: ["4 reps only", "5:30/km — feel the speed", "2 min recovery between reps", "Notice how fresh you feel — that's 19 weeks of training"],
    }),
    treadmill: (run) => ({
      overview: "4×400m taper sharpeners on the treadmill. Quick, light, purposeful.",
      structure: [
        { phase: "Warm-Up", duration: "8 min at 7.5 km/h", desc: "Treadmill at 1% incline, 7.5 km/h for 8 minutes." },
        { phase: "4×400m Reps", duration: "~2:10 each at 10.9 km/h", desc: "Set to 10.9 km/h. 4 reps of 400m. After each rep, straddle rails or slow to 5 km/h for 2 minutes." },
        { phase: "Cool-Down", duration: "6 min at 7.0 km/h", desc: "Drop to 7.0 km/h for 6 minutes. Light stretching." },
      ],
      coachNote: "In and out — 4 reps, done. Save everything for race day.",
      keyFocus: ["10.9 km/h for 400m reps", "4 reps only", "2 min recovery", "Race day is close — protect your energy"],
    }),
  },
  tempo_3k: {
    outdoor: {
      overview: "Your first tempo run — introducing 'comfortably hard' running. Tempo pace sits at your lactate threshold: the fastest pace you can sustain while clearing lactic acid. 2km warm-up + 3km at 6:15/km + 2km cool-down.",
      structure: [
        { phase: "Warm-Up", duration: "2 km at 8:00/km", desc: "Easy jog at 8:00/km for 2 full kilometres. Don't rush." },
        { phase: "Tempo Block", duration: "3 km at 6:15/km", desc: "Run 3km at 6:15/km. Comfortably hard — you can say 3–4 words but can't hold a conversation. Hold pace absolutely steady across all 3km." },
        { phase: "Cool-Down", duration: "2 km at 8:00/km", desc: "Drop immediately to easy jog for 2km. Don't stop suddenly after tempo." },
      ],
      coachNote: "Your first time at lactate threshold. Over the next 17 weeks, this same 6:15/km pace will feel progressively easier. That measurable progress is your marathon fitness being built.",
      keyFocus: ["6:15/km — steady and controlled", "3–4 words per breath = correct effort", "Full warm-up and cool-down non-negotiable", "If it feels hard, it's working"],
    },
    treadmill: {
      overview: "First tempo run on the treadmill — set 9.6 km/h (= 6:15/km) and hold it for 3km. The treadmill removes all pacing guesswork.",
      structure: [
        { phase: "Warm-Up", duration: "2 km at 7.5 km/h", desc: "Treadmill at 1% incline, 7.5 km/h for 2km." },
        { phase: "Tempo Block", duration: "3 km at 9.6 km/h", desc: "Increase to 9.6 km/h. Run 3km at this speed. Comfortably hard. Hold it." },
        { phase: "Cool-Down", duration: "2 km at 7.5 km/h", desc: "Drop to 7.5 km/h for 2km. Walk 2 minutes." },
      ],
      coachNote: "9.6 km/h for 3km. Set it and trust it. Focus on breathing and posture.",
      keyFocus: ["9.6 km/h = 6:15/km", "1% incline throughout", "Don't hold handrails", "This is your lactate threshold"],
    },
  },
  tempo_4k: {
    outdoor: {
      overview: "Progressive tempo — the block grows to 4km and pace nudges to 6:10/km. 2km warm-up + 4km tempo + 2km cool-down. Your body is adapting; lean into it.",
      structure: [
        { phase: "Warm-Up", duration: "2 km at 8:00/km", desc: "Easy jog at 8:00/km." },
        { phase: "Tempo Block", duration: "4 km at 6:10/km", desc: "4km at 6:10/km. Aim for even splits: km 4 should match km 1. Don't speed up if you feel strong — save it." },
        { phase: "Cool-Down", duration: "2 km at 8:00/km", desc: "Easy jog back. Don't stop abruptly." },
      ],
      coachNote: "6:10/km vs last time's 6:15/km — 5 seconds faster over 4km is meaningful adaptation. Aim for negative splits: second 2km fractionally faster than first.",
      keyFocus: ["6:10/km — hold it steady", "Negative splits: 2nd half slightly faster", "Aim for 170+ steps/min cadence", "One short phrase per breath = correct effort"],
    },
    treadmill: {
      overview: "4km tempo on the treadmill at 9.7 km/h. One click faster than last time — notice the adaptation.",
      structure: [
        { phase: "Warm-Up", duration: "2 km at 7.5 km/h", desc: "Treadmill at 1% incline, 7.5 km/h for 2km." },
        { phase: "Tempo Block", duration: "4 km at 9.7 km/h", desc: "Increase to 9.7 km/h (= 6:10/km). Run 4km. Hold steady." },
        { phase: "Cool-Down", duration: "2 km at 7.5 km/h", desc: "Drop to 7.5 km/h for 2km, then 2 min walk." },
      ],
      coachNote: "9.7 km/h — one click faster than before. That's progressive overload. Each week a small increase creates meaningful fitness gain.",
      keyFocus: ["9.7 km/h = 6:10/km", "1% incline", "Hold form — don't lean forward", "4km tempo block only"],
    },
  },
  tempo_5k: {
    outdoor: {
      overview: "Landmark session — first 5km of sustained tempo. ~30 minutes at threshold. 2km warm-up + 5km at 6:05/km + 2km cool-down. A genuine indicator of developing marathon fitness.",
      structure: [
        { phase: "Warm-Up", duration: "2 km at 8:00/km", desc: "Easy jog. Take your time — this is your longest tempo yet." },
        { phase: "Tempo Block", duration: "5 km at 6:05/km", desc: "Hold 6:05/km for 5km — ~30 minutes. Segment it: km 1–2 (settle), km 3 (hardest — expect it), km 4–5 (dig in)." },
        { phase: "Cool-Down", duration: "2 km at 8:00/km", desc: "Mandatory 2km cool-down. Walk the final 2 minutes. Eat within 30 minutes." },
      ],
      coachNote: "5km at tempo is the gold standard lactate threshold workout. You're building real marathon fitness. Most first-time marathoners never do sessions like this. Be proud when you finish.",
      keyFocus: ["6:05/km for 5km — 30 minutes of threshold", "Km 3 hardest — push through it", "Heart rate should plateau, not keep climbing", "Final 2km: this is where fitness is forged"],
    },
    treadmill: {
      overview: "5km tempo on the treadmill at 9.9 km/h. First 30-minute sustained effort at threshold. The machine keeps you honest.",
      structure: [
        { phase: "Warm-Up", duration: "2 km at 7.5 km/h", desc: "Treadmill at 1% incline, 7.5 km/h for 2km." },
        { phase: "Tempo Block", duration: "5 km at 9.9 km/h", desc: "Increase to 9.9 km/h (≈6:05/km). Run 5km — ~30 minutes. Don't touch the speed dial." },
        { phase: "Cool-Down", duration: "2 km at 7.5 km/h", desc: "Drop to 7.5 km/h for 2km. Walk 3 minutes. Hydrate and eat." },
      ],
      coachNote: "9.9 km/h for 5km is ~30 minutes at threshold. When km 3 gets hard, keep hands off the controls. That's where fitness is made.",
      keyFocus: ["9.9 km/h = ~6:05/km", "5km sustained — do not touch the speed dial", "1% incline throughout", "~30 min at threshold — a real achievement"],
    },
  },
  tempo_6k: {
    outdoor: {
      overview: "Longest tempo block so far — 6km at threshold. 2km warm-up + 6km at 6:00/km + 2km cool-down. Over 35 minutes of sustained hard effort.",
      structure: [
        { phase: "Warm-Up", duration: "2 km at 8:00/km", desc: "Easy jog — relaxed and conversational." },
        { phase: "Tempo Block", duration: "6 km at 6:00/km", desc: "6km at 6:00/km — 36 minutes at threshold. Segment: first 2km (settle), middle 2km (hold — hardest), final 2km (fight). Don't stop." },
        { phase: "Cool-Down", duration: "2 km at 8:00/km", desc: "2km easy jog. Slow gradually." },
      ],
      coachNote: "You may want to stop at km 4. Don't. The final 2km are where the lactate threshold actually shifts. Embrace the discomfort — this is exactly what km 37–40 of the marathon demands.",
      keyFocus: ["6:00/km for 6km", "Commit to all 6km before you start", "Middle 2km hardest — expect and push through", "Upright posture in final 2km"],
    },
    treadmill: {
      overview: "6km tempo on the treadmill at 10.0 km/h. Over 35 minutes at lactate threshold. Set it, hold it, finish it.",
      structure: [
        { phase: "Warm-Up", duration: "2 km at 7.5 km/h", desc: "Treadmill at 1% incline, 7.5 km/h for 2km." },
        { phase: "Tempo Block", duration: "6 km at 10.0 km/h", desc: "Set to 10.0 km/h (= 6:00/km). Run 6km — ~36 minutes. At km 4 it will feel hard. Keep hands off the controls." },
        { phase: "Cool-Down", duration: "2 km at 7.5 km/h", desc: "Drop to 7.5 km/h for 2km. Walk 3 minutes. Essential after 36 minutes at threshold." },
      ],
      coachNote: "10.0 km/h for 6km. The machine won't let you quit. Breathing: in for 2 steps, out for 2 steps.",
      keyFocus: ["10.0 km/h = 6:00/km", "6km sustained", "1% incline", "In for 2 steps, out for 2 steps"],
    },
  },
  tempo_7k: {
    outdoor: {
      overview: "Peak tempo session — 7km at threshold. 2km warm-up + 7km at 5:55/km + 2km cool-down. Over 41 minutes. One of the strongest indicators you are ready to run a marathon.",
      structure: [
        { phase: "Warm-Up", duration: "2 km at 8:00/km", desc: "Take your full warm-up. You need to arrive at the tempo block fully ready." },
        { phase: "Tempo Block", duration: "7 km at 5:55/km", desc: "7km at 5:55/km — over 41 minutes at threshold. Segment: first 2km (find pace), middle 3km (hold — hardest), final 2km (fight). Don't stop." },
        { phase: "Cool-Down", duration: "2 km at 8:00/km + 5 min walk", desc: "Mandatory 2km easy jog then walk. Hydrate immediately, eat within 30 minutes." },
      ],
      coachNote: "The hardest quality session in the plan. Arrive rested, fuelled, mentally prepared. When km 5 feels awful (it will): this is training your body for exactly what km 37 of the marathon feels like.",
      keyFocus: ["5:55/km for 7km — 41 minutes at threshold", "Break into thirds mentally", "Gel at km 3 of the tempo if needed", "Finishing this = marathon-ready"],
    },
    treadmill: {
      overview: "7km tempo on the treadmill at 10.1 km/h. The peak quality session. Over 41 minutes at threshold. The machine is your ally — it will not let you slow down.",
      structure: [
        { phase: "Warm-Up", duration: "2 km at 7.5 km/h", desc: "Treadmill at 1% incline, 7.5 km/h for 2km." },
        { phase: "Tempo Block", duration: "7 km at 10.1 km/h", desc: "Set to 10.1 km/h (= 5:55/km). Run 7km — ~41 minutes. Segment: km 1–2 (settle), km 3–5 (hold), km 6–7 (fight). Gel at km 3 if needed." },
        { phase: "Cool-Down", duration: "2 km at 7.5 km/h + walk", desc: "Drop to 7.5 km/h for 2km, then 5 min walk. Don't step off immediately." },
      ],
      coachNote: "10.1 km/h for 7km is a landmark session. The middle 3km will feel brutal — remind yourself: this is exactly what km 37 of the marathon will feel like. You're practising your response.",
      keyFocus: ["10.1 km/h = 5:55/km — set and commit", "7km total", "Gel at km 3 of tempo block", "1% incline throughout"],
    },
  },
  tempo_short_taper: {
    outdoor: {
      overview: "Shorter taper tempo — keeping legs sharp without adding fatigue. 2km warm-up + 4km at 6:10/km + 2km cool-down. Volume down, intensity maintained.",
      structure: [
        { phase: "Warm-Up", duration: "2 km at 8:00/km", desc: "Easy jog at 8:00/km." },
        { phase: "Tempo Block", duration: "4 km at 6:10/km", desc: "4km at tempo pace — short, sharp, purposeful. Notice how much more comfortable this feels vs Week 3. Stick to exactly 4km." },
        { phase: "Cool-Down", duration: "2 km at 8:00/km", desc: "Easy jog back." },
      ],
      coachNote: "Taper tempos feel surprisingly good — you're fresher than you've been in months. Don't extend or go faster. Goal is sharpness, not fitness. Save everything for race day.",
      keyFocus: ["4km exactly — do not extend", "Notice how easy it feels — that's 17 weeks of training", "Visualise race day start line", "Next hard effort is the marathon"],
    },
    treadmill: {
      overview: "Short taper tempo on the treadmill. Set 9.7 km/h, run 4km, done.",
      structure: [
        { phase: "Warm-Up", duration: "2 km at 7.5 km/h", desc: "Treadmill at 1% incline, 7.5 km/h." },
        { phase: "Tempo Block", duration: "4 km at 9.7 km/h", desc: "Set to 9.7 km/h for exactly 4km. Notice how controlled it feels." },
        { phase: "Cool-Down", duration: "2 km at 7.5 km/h", desc: "Drop to 7.5 km/h for 2km, then 2 min walk." },
      ],
      coachNote: "9.7 km/h for 4km. Simple. Sharp. Done. Race week is coming.",
      keyFocus: ["9.7 km/h for exactly 4km", "Don't extend", "1% incline", "Last tempo before race day"],
    },
  },
  long_10: {
    outdoor: {
      overview: "Your base long run — starting point of everything. Today is about establishing routine: pacing, fuelling habits, mental approach. Everything builds from here.",
      structure: [
        { phase: "km 1–3", duration: "~26 min at 8:30/km", desc: "Very easy — 8:30/km. Fresh legs will tempt you faster. Resist." },
        { phase: "km 4–7", duration: "~28 min at 8:00/km", desc: "Settle at 7:45–8:15/km. Conversational. First sip of water here." },
        { phase: "km 8–10", duration: "~22 min at 8:00/km", desc: "Maintain effort. If feeling strong, focus on form not speed." },
      ],
      coachNote: "Long runs are about time on feet, not speed. You're also cycling this week — if legs feel tired, that's normal and fine. Go slower. Finishing matters more than pace.",
      keyFocus: ["Start at 8:30/km", "Hydrate every 20 minutes", "Note how cycling affects your run legs", "Enjoy it — this is just the beginning"],
    },
    treadmill: {
      overview: "Base long run on the treadmill. 10km at easy pace — break it into segments mentally and keep entertainment ready.",
      structure: [
        { phase: "km 1–3", duration: "at 7.1 km/h", desc: "1% incline, 7.1 km/h. Ease in gently." },
        { phase: "km 4–7", duration: "at 7.3–7.7 km/h", desc: "Increase slightly. Comfortable and conversational. Put on a podcast." },
        { phase: "km 8–10", duration: "at 7.5 km/h", desc: "Hold 7.5 km/h to finish. Hydrate from your bottle every 2km." },
      ],
      coachNote: "Cover the display and only check every 10 minutes. A podcast or audiobook makes treadmill long runs much more manageable.",
      keyFocus: ["1% incline throughout", "7.1–7.7 km/h", "Cover distance display", "Water bottle on the treadmill"],
    },
  },
  long_15: { outdoor: { overview: "15km — significant step into marathon training territory. Pacing discipline and mid-run fuelling practice today.", structure: [{ phase: "km 1–4", duration: "~34 min at 8:30/km", desc: "Ultra-conservative start. You have 11km to go." }, { phase: "km 5–11", duration: "~50 min at 8:00/km", desc: "Long-run pace. Fuel at km 6. Hydrate every 20 min." }, { phase: "km 12–15", duration: "~26 min", desc: "Hold pace. If strong, focus on form not speed." }], coachNote: "By km 10 you may feel first signs of fatigue — normal. Your body is learning to tap fat stores. With cycling added, your legs carry more load — respect that.", keyFocus: ["Fuel at km 6", "Hydrate every 20 min", "Run by feel not GPS", "Walk water stops — strategic not weakness"] }, treadmill: { overview: "15km on the treadmill. ~2 hours. Break into 5km blocks mentally and keep entertainment ready.", structure: [{ phase: "km 1–4", duration: "at 7.1 km/h", desc: "1% incline, 7.1 km/h. Easy start." }, { phase: "km 5–11", duration: "at 7.3–7.5 km/h", desc: "Increase slightly. Fuel at km 6." }, { phase: "km 12–15", duration: "at 7.3 km/h", desc: "Hold pace to finish." }], coachNote: "Mental checkpoints every 5km. Only look at distance display at those points. Podcast helps enormously.", keyFocus: ["1% incline", "Fuel at km 6", "Mental checkpoints every 5km", "Hydrate every 2km"] } },
  long_16: { outdoor: { overview: "16km — your first genuinely long training run. Pacing discipline and fuelling strategy tested in real conditions.", structure: [{ phase: "km 1–4", duration: "~34 min at 8:30/km", desc: "Easy start — max 8:30/km." }, { phase: "km 5–13", duration: "~72 min at 8:00/km", desc: "Settle at 8:00–8:15/km. Fuel at km 5 and 10. Hydrate every 20 min." }, { phase: "km 14–16", duration: "~26 min", desc: "Hold pace. If tired, shorten stride and increase cadence." }], coachNote: "At km 12–13, expect legs to get heavy — your body is shifting fuel sources. Keep moving. With cycling in your week, you may feel this earlier than expected — that's the combined load building your base.", keyFocus: ["Fuel at km 5 and 10", "Run by feel", "Walk water stops", "New personal distance — respect it"] }, treadmill: { overview: "16km on the treadmill — ~2h 8min. Plan your entertainment in advance. Four 4km mental blocks.", structure: [{ phase: "km 1–4", duration: "at 7.1 km/h", desc: "Easy start at 1% incline." }, { phase: "km 5–13", duration: "at 7.3–7.5 km/h", desc: "Increase. Fuel at km 5 and 10." }, { phase: "km 14–16", duration: "at 7.3 km/h", desc: "Hold steady to finish." }], coachNote: "16km on a treadmill. Plan a 2-hour podcast. Fuel exactly as outdoors — race nutrition practice.", keyFocus: ["1% incline", "Fuel at km 5 and 10", "Cover display between km checks", "7.3–7.5 km/h — genuinely easy"] } },
  long_18: { outdoor: { overview: "18km — your aerobic system is genuinely developing. This tests pacing patience and fuelling consistency over ~2.5 hours.", structure: [{ phase: "km 1–4", duration: "~34 min at 8:30/km", desc: "Deliberately slow. 14km still to go." }, { phase: "km 5–14", duration: "~80 min at 8:00/km", desc: "Main body at 8:00–8:15/km. Fuel at km 5 and 12. Hydrate every 20 min." }, { phase: "km 15–18", duration: "~32 min", desc: "Final stretch will feel hard. Shorten stride, increase cadence." }], coachNote: "18km ~2.5 hours of aerobic stimulus. Your body is building mitochondria, capillary density, slow-twitch fibres. The combined run+cycle week makes this harder — but the adaptation is proportionally greater.", keyFocus: ["Fuel at km 5 and 12", "Run/walk completely legitimate", "Check posture every km", "43% of a marathon!"] }, treadmill: { overview: "18km on treadmill — ~2h 25min. Plan entertainment carefully. Fuel exactly as race day.", structure: [{ phase: "km 1–4", duration: "at 7.1 km/h", desc: "1% incline. Easy start." }, { phase: "km 5–14", duration: "at 7.3–7.5 km/h", desc: "Fuel at km 5 and 12. Drink every 2km." }, { phase: "km 15–18", duration: "at 7.3 km/h", desc: "Hold steady." }], coachNote: "2.5 hours on a treadmill: plan 2–3 entertainment items, set phone reminder to drink every 15 min.", keyFocus: ["1% incline", "Fuel at km 5 and 12", "Entertainment plan ready", "Hydrate every 2km"] } },
  long_19: { outdoor: { overview: "19km — one km beyond previous longest. Consistency: same effort from start to finish.", structure: [{ phase: "km 1–5", duration: "~43 min at 8:30/km", desc: "Easy start." }, { phase: "km 6–15", duration: "~82 min at 8:00/km", desc: "Long-run pace. Fuel at km 5 and 12. Hydrate every 20 min." }, { phase: "km 16–19", duration: "~34 min", desc: "Hold steady. Focus on cadence if pace drops." }], coachNote: "19km = 2.5+ hours of aerobic work. Notice whether second half pace is consistent with first — that pacing discipline is what race day requires.", keyFocus: ["Consistent pace km 5–19", "Fuel every 45 min", "Focus on next km marker only", "Celebrate every km beyond previous longest"] }, treadmill: { overview: "19km on treadmill. Just over 2.5 hours. Fuel at km 5 and 12. Change entertainment at km 10.", structure: [{ phase: "km 1–5", duration: "at 7.1 km/h", desc: "1% incline. Easy start." }, { phase: "km 6–15", duration: "at 7.3–7.5 km/h", desc: "Fuel at km 5 and 12. Drink every 2km." }, { phase: "km 16–19", duration: "at 7.3 km/h", desc: "Hold steady." }], coachNote: "Change entertainment at km 10 — fresh playlist or new episode makes second half feel shorter.", keyFocus: ["1% incline", "Fuel at km 5 and 12", "New entertainment at km 10", "7.3–7.5 km/h easy throughout"] } },
  long_21: { outdoor: { overview: "🎉 HALF MARATHON — 21.1km. The single most important training milestone of the plan. Today you become a half-marathon runner.", structure: [{ phase: "km 1–5", duration: "~43 min at 8:45/km", desc: "Ultra-conservative start. 8:30–8:45/km. Resist the adrenaline — you have 16km to go." }, { phase: "km 6–16", duration: "~88 min at 8:00/km", desc: "Long-run pace. Fuel at km 5, 10, and 15. Hydrate every 20 min." }, { phase: "km 17–21.1", duration: "~36 min", desc: "Hold pace. Walk 60 seconds if needed, then run again. Keep moving." }], coachNote: "Completing 21.1km will feel like a marathon achievement — and it should. The exhaustion and elation is exactly what you'll feel at km 42.2. Bank this feeling. You earned it.", keyFocus: ["Start at 8:45/km — slower than feels right", "3 fuel stops: km 5, 10, 15", "Walk hills without guilt", "Celebrate massively when you finish 🎉"] }, treadmill: { overview: "Half marathon on the treadmill — 21.1km, ~2h 50min. Plan everything in advance.", structure: [{ phase: "km 1–5", duration: "at 7.0 km/h", desc: "1% incline, 7.0 km/h. Very easy start." }, { phase: "km 6–16", duration: "at 7.3–7.5 km/h", desc: "Fuel at km 5, 10, 15. Drink every 2km." }, { phase: "km 17–21.1", duration: "at 7.3 km/h", desc: "Hold steady. Don't increase at end." }], coachNote: "A half marathon on a treadmill is a genuine mental achievement. Entertainment in three blocks, change at km 7 and km 14.", keyFocus: ["1% incline", "3 fuel stops: km 5, 10, 15", "Entertainment in three blocks", "This is a half marathon — celebrate 🎉"] } },
  long_22: { outdoor: { overview: "22km — one km beyond your half marathon. Most people will never attempt this distance. Building endurance base.", structure: [{ phase: "km 1–5", duration: "~43 min at 8:30/km", desc: "Easy start. Body remembers 21km — give it time to warm in." }, { phase: "km 6–17", duration: "~96 min at 8:00/km", desc: "Fuel at km 5, 10, 15. Hydrate consistently." }, { phase: "km 18–22", duration: "~36 min", desc: "Final 4km. A week fitter. Hold steady." }], coachNote: "Strong finishes build confidence; blown-up finishes breed doubt. Practice the exact race-day nutrition here.", keyFocus: ["Fuel at km 5, 10, 15", "Practice race-day nutrition exactly", "Note any chafing to fix now", "52% of a marathon!"] }, treadmill: { overview: "22km on treadmill — ~3 hours. Three entertainment blocks, fuel exactly as outdoor.", structure: [{ phase: "km 1–5", duration: "at 7.1 km/h", desc: "1% incline. Easy start." }, { phase: "km 6–17", duration: "at 7.3–7.5 km/h", desc: "Fuel at km 5, 10, 15. Drink every 2km." }, { phase: "km 18–22", duration: "at 7.3 km/h", desc: "Hold steady." }], coachNote: "3 hours on a treadmill is mentally tough. Change entertainment at km 7 and km 15.", keyFocus: ["1% incline", "3 fuel stops: km 5, 10, 15", "Entertainment in three blocks", "7.3 km/h easy throughout"] } },
  long_23: { outdoor: { overview: "23km — longest Build phase run. Proves your aerobic base is ready for peak training.", structure: [{ phase: "km 1–5", duration: "~43 min at 8:30/km", desc: "Conservative start." }, { phase: "km 6–18", duration: "~104 min at 8:00/km", desc: "Fuel at km 5, 10, 15. Hydrate every 20 min." }, { phase: "km 19–23", duration: "~36 min", desc: "Acknowledge fatigue. Shorten stride, increase cadence, keep moving." }], coachNote: "Build phase complete. 16km to 23km long runs + half marathon + consistent cycling. Peak phase next. You are ready.", keyFocus: ["Fuel at km 5, 10, 15", "Run/walk from km 19 if needed", "At km 19: 'I've trained for this'", "Cutback next week — earned"] }, treadmill: { overview: "23km on treadmill — longest treadmill session. 3+ hours. Mental prep as important as physical.", structure: [{ phase: "km 1–5", duration: "at 7.1 km/h", desc: "1% incline. Easy start." }, { phase: "km 6–18", duration: "at 7.3–7.5 km/h", desc: "Fuel at km 5, 10, 15. Change entertainment at km 8 and 16." }, { phase: "km 19–23", duration: "at 7.3 km/h", desc: "Hold steady. Run/walk if needed." }], coachNote: "Use mental marathon strategies: small chunks, positive self-talk, breathing focus. Practise what you'll use at km 35 on race day.", keyFocus: ["1% incline", "3 fuel stops", "Entertainment at km 8 and km 16", "Run/walk is fine"] } },
  long_25: { outdoor: { overview: "25km — territory 99% of people never run. Simulating late-marathon fatigue. Learning to keep going when everything says stop.", structure: [{ phase: "km 1–5", duration: "~43 min at 8:30/km", desc: "Easy start. Out here for 3.5+ hours." }, { phase: "km 6–20", duration: "~120 min at 8:00/km", desc: "Fuel at km 5, 10, 15, 20. Hydrate every 20 min." }, { phase: "km 21–25", duration: "~40 min", desc: "Final 5km will feel hard. Shorten stride, increase cadence. One km at a time." }], coachNote: "At km 20+: the dark patch. Heavy legs, negotiating mind, doubt. This is the most important adaptation in marathon training — learning to keep moving through darkness.", keyFocus: ["4 fuel stops: km 5, 10, 15, 20", "Walk breaks = strategy", "At km 20: 'I've trained for this'", "Don't look at total distance after km 22"] }, treadmill: { overview: "25km on treadmill — 3.5+ hours. Fuelling, entertainment, mental strategies all planned in advance.", structure: [{ phase: "km 1–5", duration: "at 7.1 km/h", desc: "1% incline. Very easy start." }, { phase: "km 6–20", duration: "at 7.3–7.5 km/h", desc: "Fuel at km 5, 10, 15, 20. Change entertainment every 6–7km." }, { phase: "km 21–25", duration: "at 7.0–7.3 km/h", desc: "Slow slightly if needed — reaching 25km matters more than pace." }], coachNote: "After km 17: never look at total remaining distance. Only look at current km. Each km is its own goal.", keyFocus: ["1% incline", "4 fuel stops: km 5, 10, 15, 20", "Never look at total remaining after km 17", "5 entertainment items"] } },
  long_26: { outdoor: { overview: "26km — final major long run before taper. After last week's 28km, this feels like a step back but is still serious work.", structure: [{ phase: "km 1–6", duration: "~52 min at 8:30/km", desc: "Start at 8:45/km. Slower than usual — 26km ahead." }, { phase: "km 7–21", duration: "~118 min at 8:00/km", desc: "Fuel at km 5, 10, 15, 20. Hydrate constantly." }, { phase: "km 22–26", duration: "~38 min", desc: "Hold pace or walk-run — keep moving." }], coachNote: "Taper begins after this. These 26km are the final coat of paint on a building built over 17 weeks. Enjoy this run — one of your last big ones.", keyFocus: ["Fuel every 45 minutes", "Visualise race day in final 5km", "Run/walk from km 20 — smart strategy", "Taper starts next week"] }, treadmill: { overview: "26km on treadmill — second-longest session. Same approach: fuel every 45 min, entertainment ready, easy effort.", structure: [{ phase: "km 1–6", duration: "at 7.0 km/h", desc: "1% incline. Slow start." }, { phase: "km 7–21", duration: "at 7.3–7.5 km/h", desc: "Fuel at km 5, 10, 15, 20. Change entertainment at km 9 and 18." }, { phase: "km 22–26", duration: "at 7.0–7.3 km/h", desc: "Hold steady or slow slightly." }], coachNote: "Last major long run. After this: taper. Treat it with respect.", keyFocus: ["1% incline", "4 fuel stops", "Entertainment: 4 items", "Last major long run before taper"] } },
  long_28: { outdoor: { overview: "🏔️ 28km — longest run of the plan. Your absolute peak. Closest you'll get to marathon conditions before race day.", structure: [{ phase: "km 1–6", duration: "~54 min at 8:45/km", desc: "Start at 8:45/km. Non-negotiable. Every extra second too fast in first 6km costs double in final 6km." }, { phase: "km 7–22", duration: "~130 min at 8:00/km", desc: "Settle at 8:00–8:30/km. Fuel at km 6, 11, 16, 21. Water every opportunity." }, { phase: "km 23–28", duration: "~50 min", desc: "Final 6km. Everything hurts. Keep cadence up, shorten stride, pump arms, move forward. One km at a time." }], coachNote: "After today, trust completely that your body can cover 42km. The extra 14km comes from taper, carb-loading, adrenaline, and the crowd. You've done the work.", keyFocus: ["5 fuel stops: km 6, 11, 16, 21", "Run/walk from km 20", "Celebrate every km beyond 21", "This is your peak 💪"] }, treadmill: { overview: "🏔️ 28km on treadmill — longest ever training run. Nearly 4 hours. Mental toughness as much as physical.", structure: [{ phase: "km 1–6", duration: "at 7.0 km/h", desc: "1% incline. Slowest start. 22km still to go after this." }, { phase: "km 7–22", duration: "at 7.3–7.5 km/h", desc: "Fuel at km 6, 11, 16, 21. Change entertainment at km 7, 14, 21." }, { phase: "km 23–28", duration: "at 7.0–7.3 km/h", desc: "Slow if needed — reaching 28km is what matters." }], coachNote: "After km 20: cover the display completely. Set a 5-minute timer. When it goes off, check distance, reset, focus only on next 5 minutes.", keyFocus: ["1% incline", "5 fuel stops: km 6, 11, 16, 21", "Cover display after km 20", "5+ entertainment items"] } },
  taper_20: { outdoor: { overview: "First taper long run at 20km. Volume drops. This should feel noticeably easier than recent 26–28km runs — that freshness is 17 weeks of fitness.", structure: [{ phase: "km 1–4", duration: "~34 min at 8:30/km", desc: "Easy start. Let yourself feel good — you've earned it." }, { phase: "km 5–16", duration: "~96 min at 8:00/km", desc: "Fuel at km 5 and 10. Notice how much fresher you feel." }, { phase: "km 17–20", duration: "~30 min", desc: "Easy finish. Smooth, relaxed form." }], coachNote: "Taper long runs feel too short and too easy. That feeling is exactly right. Resist adding km.", keyFocus: ["Easy effort — enjoy the freshness", "Fuel at km 5 and 10", "Visualise race-day route", "Race day is 2 weeks away"] }, treadmill: { overview: "20km taper long run. Easier than recent weeks — enjoy the relative lightness.", structure: [{ phase: "km 1–4", duration: "at 7.1 km/h", desc: "1% incline. Easy start." }, { phase: "km 5–16", duration: "at 7.3–7.5 km/h", desc: "Fuel at km 5 and 10. Enjoy the fresher legs." }, { phase: "km 17–20", duration: "at 7.3 km/h", desc: "Easy finish." }], coachNote: "20km will feel manageable after your 26–28km weeks. That's the taper working.", keyFocus: ["1% incline", "Fuel at km 5 and 10", "Notice how good your legs feel", "Race day is 2 weeks away"] } },
  taper_14: { outdoor: { overview: "Final taper long run at 14km. Deliberately short to maximise freshness. About confidence, not fitness — you already have the fitness.", structure: [{ phase: "km 1–3", duration: "~26 min at 8:30/km", desc: "Easy jog. Smile — you're nearly there." }, { phase: "km 4–11", duration: "~64 min at 8:00/km", desc: "Easy pace. Fuel at km 5. Enjoy the run and feel how strong you are." }, { phase: "km 12–14", duration: "~22 min", desc: "Easy finish. Feel strong. You'll be ready." }], coachNote: "If this feels embarrassingly short compared to peak weeks — perfect. You're tapering correctly.", keyFocus: ["Easy effort", "Feel how strong your legs are", "Visualise crossing the finish line", "Race week in 7 days. You are ready. 🏁"] }, treadmill: { overview: "14km taper long run. Short, easy, confidence-building. One podcast episode and you're done.", structure: [{ phase: "km 1–3", duration: "at 7.1 km/h", desc: "1% incline. Easy." }, { phase: "km 4–11", duration: "at 7.3–7.5 km/h", desc: "Easy pace. Fuel at km 5." }, { phase: "km 12–14", duration: "at 7.3 km/h", desc: "Easy finish." }], coachNote: "Last long run before the marathon. Race week starts in 7 days.", keyFocus: ["1% incline", "Easy pace", "Last long run", "You are ready 🏁"] } },
  shakeout: { outdoor: { overview: "Pre-race shakeout — 10% physical, 90% psychological. Burn off nervous energy and confirm your legs are ready.", structure: [{ phase: "Easy Jog", duration: "4 km at 9:00/km", desc: "Very gentle. Just get blood moving." }, { phase: "4×100m Strides", duration: "~30s each", desc: "4 controlled accelerations. Not sprinting — just opening up the legs. Walk 30s between each." }, { phase: "Walk", duration: "5 min", desc: "Calm walk. Deep breaths. Visualise your race plan." }], coachNote: "100% psychological. Tomorrow is your marathon. Get out, burn the nervous energy, go home, sleep.", keyFocus: ["Very easy — slower than easy", "4 short strides", "Visualise race plan calmly", "Lay out all gear tonight 🛌"] }, treadmill: { overview: "Pre-race shakeout on treadmill. Keep it very short and easy.", structure: [{ phase: "Easy Jog", duration: "4 km at 6.7 km/h", desc: "1% incline, 6.7 km/h. Very gentle." }, { phase: "4×20s Pick-ups", duration: "at 9 km/h", desc: "Increase to 9 km/h for 20s, back down. Repeat 4 times." }, { phase: "5 min walk", duration: "at 4.5 km/h", desc: "Step off. Walk. Everything is ready." }], coachNote: "Race day is tomorrow. Get on, move gently, get off. Done.", keyFocus: ["6.7 km/h — very easy", "4 short pick-ups at 9 km/h", "1% incline", "Home, kit ready, sleep 🛌"] } },
  rest_day: { outdoor: { overview: "Full rest day — when your body actually becomes stronger. Training creates the stimulus; rest creates the adaptation.", structure: [{ phase: "Morning", duration: "10–15 min foam roll", desc: "Foam roll: calves (90s each), glutes (90s each side), IT band (60s each), quads (60s each)." }, { phase: "Afternoon", duration: "10–15 min walk", desc: "Short easy walk. Maximum effort for today." }, { phase: "Evening", duration: "8+ hours sleep", desc: "HGH peaks during deep sleep — muscle fibres rebuild stronger. 8+ hours is training." }], coachNote: "With both running and cycling in your week, rest days are even more important. The combined load requires more recovery. Don't guilt yourself — rest IS training.", keyFocus: ["No running, no cycling", "Foam roll 10–15 min", "Hydrate well — 2.5–3L of water", "Sleep 8+ hours"] }, treadmill: { overview: "Rest day — no treadmill, no bike. Your body is rebuilding.", structure: [{ phase: "Morning", duration: "10–15 min foam roll", desc: "Foam roll calves, glutes, IT band, quads. 60–90 seconds each." }, { phase: "Day", duration: "Light walking only", desc: "10–15 min walk max. No running, no cycling." }, { phase: "Evening", duration: "8+ hours sleep", desc: "Sleep is training. 8+ hours." }], coachNote: "Rest day with both running and cycling in your schedule is sacred. Protect it.", keyFocus: ["No running — no exceptions", "No cycling either", "Foam roll and stretch", "Sleep 8+ hours"] } },
  race_day: { outdoor: { overview: "🏆 RACE DAY — 42.2km. 20 weeks of running + cycling all compressed into this single morning. You are a marathon runner.", structure: [{ phase: "km 1–10", duration: "~83 min at 8:15–8:30/km", desc: "START SLOW. 8:15–8:30/km. The crowd and adrenaline will push you faster. Resist with everything. First 10km should feel embarrassingly easy." }, { phase: "km 11–30", duration: "~163 min at 8:00–8:15/km", desc: "Race pace. Fuel every 5km from km 5. Run your own race." }, { phase: "km 31–42.2", duration: "~95 min", desc: "Uncharted territory. Shorten stride, lift knees, pump arms. Walk if needed. Keep moving. You WILL finish." }], coachNote: "Every 4am start, every interval, every long Sunday run, every bike ride — it all compounds into today. Start easy, fuel consistently. When the dark patch hits at km 32–37: you ran 28km in training. You know this feeling. Race through it. 🏅", keyFocus: ["SLOW START — 8:15–8:30/km for first 10km", "Fuel every 5km from km 5", "Walk every water station", "Km 35: pump your arms", "SMILE at km 40 — you're about to become a marathon finisher"] }, treadmill: { overview: "Race day is outdoors. Go run your marathon — 20 weeks of combined running and cycling training prepared you for this.", structure: [{ phase: "km 1–10", duration: "8:15–8:30/km", desc: "Slow start. Resist the crowd." }, { phase: "km 11–30", duration: "Race pace", desc: "8:00–8:15/km. Fuel every 5km." }, { phase: "km 31–42.2", duration: "Finish strong", desc: "Pump arms, shorten stride, keep moving." }], coachNote: "Race day is outside. All 20 weeks of training — running and cycling — was for this. Go. 🏅", keyFocus: ["Slow start", "Fuel every 5km", "Walk water stations", "Pump arms in final 10km"] } },
};

export function getRunDetail(run, weekNum, mode = 'outdoor') {
  let detail;
  if (run.type === "rest") detail = RUN_DETAILS.rest_day;
  else if (run.title.includes("MARATHON DAY")) detail = RUN_DETAILS.race_day;
  else if (run.title.toLowerCase().includes("shakeout")) detail = RUN_DETAILS.shakeout;
  else if (run.type === "long") {
    if (run.distance <= 13) detail = RUN_DETAILS.long_10;
    else if (run.distance === 14) detail = weekNum >= 18 ? RUN_DETAILS.taper_14 : RUN_DETAILS.long_16;
    else if (run.distance === 15) detail = RUN_DETAILS.long_15;
    else if (run.distance <= 17) detail = RUN_DETAILS.long_16;
    else if (run.distance === 18) detail = RUN_DETAILS.long_18;
    else if (run.distance === 19) detail = RUN_DETAILS.long_19;
    else if (run.distance <= 21) detail = RUN_DETAILS.long_21;
    else if (run.distance === 22) detail = RUN_DETAILS.long_22;
    else if (run.distance === 23) detail = RUN_DETAILS.long_23;
    else if (run.distance <= 25) detail = RUN_DETAILS.long_25;
    else if (run.distance === 26) detail = RUN_DETAILS.long_26;
    else if (run.distance === 20) detail = RUN_DETAILS.taper_20;
    else detail = RUN_DETAILS.long_28;
  } else if (run.type === "interval") {
    if (run.notes.includes("400m") && weekNum >= 19) detail = RUN_DETAILS.interval_400_taper;
    else if (run.notes.includes("400m")) detail = RUN_DETAILS.interval_400;
    else if (run.notes.includes("1.5km")) detail = RUN_DETAILS.interval_1k5;
    else if (run.notes.includes("1km")) detail = RUN_DETAILS.interval_1km;
    else detail = RUN_DETAILS.interval_800;
  } else if (run.type === "tempo") {
    if (weekNum >= 18) detail = RUN_DETAILS.tempo_short_taper;
    else if (run.notes.includes("3km")) detail = RUN_DETAILS.tempo_3k;
    else if (run.notes.includes("4km")) detail = RUN_DETAILS.tempo_4k;
    else if (run.notes.includes("5km")) detail = RUN_DETAILS.tempo_5k;
    else if (run.notes.includes("6km")) detail = RUN_DETAILS.tempo_6k;
    else if (run.notes.includes("7km")) detail = RUN_DETAILS.tempo_7k;
    else detail = RUN_DETAILS.tempo_4k;
  } else if (run.title.toLowerCase().includes("recovery")) detail = RUN_DETAILS.recovery_default;
  else detail = RUN_DETAILS.easy_default;

  const variant = detail[mode] || detail['outdoor'];
  if (typeof variant === 'function') return variant(run);
  return variant;
}

export function getCycleDetail(ride) {
  if (ride.type === 'commute') return CYCLE_DETAILS.commute_ride.outdoor;
  if (ride.type === 'cycle_hard') return CYCLE_DETAILS.tempo_ride.outdoor;
  if (ride.type === 'cycle' && ride.distance >= 25) return CYCLE_DETAILS.long_ride.outdoor;
  if (ride.notes && ride.notes.toLowerCase().includes('build')) return CYCLE_DETAILS.commute_prep.outdoor;
  return CYCLE_DETAILS.easy_ride.outdoor;
}

// ─── UPDATED PLAN ───────────────────────────────────────────────
// Weeks 1–3: original (already completed, kept for record)
// Week 4 onwards: Running moves to Wed/Fri/Sun; Cycling added Mon/Tue/Thu
// Commute cycling starts Week 5 (give 1 week to build up)

export const PLAN = [
  // ── COMPLETED WEEKS (kept for reference) ──
  { week: 1, phase: "Base Building", completed: true, runs: [
    { day: "Tue", type: "easy",  title: "Easy Run",   distance: 5,  notes: "Stay fully conversational. Run/walk if needed." },
    { day: "Thu", type: "easy",  title: "Easy Run",   distance: 6,  notes: "Focus on breathing rhythm, not speed." },
    { day: "Fri", type: "easy",  title: "Recovery Run", distance: 4, notes: "Very easy pace. This is active recovery." },
    { day: "Sun", type: "long",  title: "Long Run",   distance: 10, notes: "Your base long run. Easy effort throughout." },
  ]},
  { week: 2, phase: "Base Building", completed: true, runs: [
    { day: "Tue", type: "easy",     title: "Easy Run",  distance: 6,  notes: "Comfortable aerobic effort." },
    { day: "Thu", type: "interval", title: "Intervals", distance: 6,  notes: "6×400m at 5:30/km, 90s rest between each rep." },
    { day: "Fri", type: "easy",     title: "Recovery Run", distance: 5, notes: "Very easy after intervals." },
    { day: "Sun", type: "long",     title: "Long Run",  distance: 11, notes: "Add 1km — maintain easy effort." },
  ]},
  { week: 3, phase: "Base Building", completed: true, runs: [
    { day: "Tue", type: "easy",  title: "Easy Run",   distance: 6,  notes: "Relaxed effort." },
    { day: "Thu", type: "tempo", title: "Tempo Run",  distance: 7,  notes: "2km warm-up, 3km at tempo pace (6:15/km), 2km cool-down." },
    { day: "Fri", type: "easy",  title: "Easy Run",   distance: 5,  notes: "Light legs. No hard effort." },
    { day: "Sun", type: "long",  title: "Long Run",   distance: 12, notes: "Focus on time on feet, not speed." },
  ]},

  // ── WEEK 4: New schedule begins — Cycling Mon/Tue/Thu + Run Wed/Fri/Sun ──
  { week: 4, phase: "Base Building", runs: [
    { day: "Mon", type: "cycle",    title: "🚲 Easy Ride",        distance: 14, notes: "First structured ride. Easy effort, 14–16 km/h. Get comfortable on the bike — gears, braking, positioning." },
    { day: "Tue", type: "cycle",    title: "🚲 Easy Ride",        distance: 14, notes: "Second ride this week. Keep effort easy — legs are still adapting to daily cycling. 14–16 km/h." },
    { day: "Wed", type: "interval", title: "Intervals",           distance: 7,  notes: "5×800m at 5:45/km, 2 min rest between each rep." },
    { day: "Thu", type: "cycle",    title: "🚲 Commute Prep Ride", distance: 18, notes: "Longest ride yet — building toward your 21km commute. Easy pace. Practice the commute route if possible." },
    { day: "Fri", type: "easy",     title: "Easy Run",            distance: 5,  notes: "Easy run. Legs may feel heavy from cycling — that's normal and will pass within 2 weeks." },
    { day: "Sun", type: "long",     title: "Long Run",            distance: 14, notes: "First bigger long run. Trust the training. Fuel well." },
  ]},

  // ── WEEK 5: Full commute begins — Mon/Tue/Thu = 42km each ──
  { week: 5, phase: "Base Building", runs: [
    { day: "Mon", type: "commute",  title: "🚲 Commute Day",  distance: 42, notes: "First full commute day — 21km to work + 21km home = 42km total. Morning: moderate pace 16–18 km/h, arrive composed. Evening: easy spin home. Pack kit bag: change of clothes, towel, food." },
    { day: "Tue", type: "commute",  title: "🚲 Commute Day",  distance: 42, notes: "Second commute day. 21km in + 21km home = 42km. Your legs will feel this — that's expected week 1 of commuting. Keep both rides easy, 15–17 km/h." },
    { day: "Wed", type: "tempo",    title: "Tempo Run",       distance: 8,  notes: "2km warm-up, 4km tempo (6:10/km), 2km cool-down." },
    { day: "Thu", type: "commute",  title: "🚲 Commute Day",  distance: 42, notes: "Third commute day. 21km in + 21km home = 42km. This is 126km of cycling this week alone — elite aerobic volume. Eat well tonight." },
    { day: "Fri", type: "easy",     title: "Easy Run",        distance: 5,  notes: "Easy run after 3 commute days. Keep it very relaxed — your legs are carrying huge volume. Slow is fine." },
    { day: "Sun", type: "long",     title: "Long Run",        distance: 15, notes: "Fuel well before this. Your legs carry more load now than ever. Go slow — finishing matters more than pace." },
  ]},

  // ── WEEK 6: CUTBACK ──
  { week: 6, phase: "Base Building", runs: [
    { day: "Mon", type: "commute",  title: "🚲 Commute Day",  distance: 42, notes: "CUTBACK WEEK — commute as normal but keep both rides easy. No pushing the pace." },
    { day: "Tue", type: "cycle",    title: "🚲 Easy Ride",    distance: 20, notes: "CUTBACK — easy 20km ride instead of full commute. Active recovery." },
    { day: "Wed", type: "easy",     title: "Easy Run",        distance: 6,  notes: "CUTBACK — easy effort only. No quality work this week." },
    { day: "Thu", type: "commute",  title: "🚲 Commute Day",  distance: 42, notes: "CUTBACK commute. Easy both ways. Let the body absorb 5 weeks of training." },
    { day: "Fri", type: "easy",     title: "Easy Run",        distance: 4,  notes: "Short and easy. Just move the legs." },
    { day: "Sun", type: "long",     title: "Long Run",        distance: 12, notes: "CUTBACK — reduced long run. Easy effort throughout." },
  ]},

  // ── PHASE 2: BUILD (Weeks 7–13) ──
  { week: 7, phase: "Build", runs: [
    { day: "Mon", type: "commute",  title: "🚲 Commute Day",  distance: 42, notes: "Build phase begins. Commute at moderate pace — 17–19 km/h. You're fitter than last week." },
    { day: "Tue", type: "commute",  title: "🚲 Commute Day",  distance: 42, notes: "Second commute. Keep morning ride moderate, evening ride easy to save legs for tomorrow's intervals." },
    { day: "Wed", type: "interval", title: "Intervals",       distance: 8,  notes: "6×800m at 5:45/km, 90s rest between each rep." },
    { day: "Thu", type: "commute",  title: "🚲 Commute Day",  distance: 42, notes: "Third commute. Easy both ways — legs recovering from intervals." },
    { day: "Fri", type: "easy",     title: "Easy Run",        distance: 6,  notes: "Easy run. 126km cycling + intervals this week — stay relaxed, don't push." },
    { day: "Sun", type: "long",     title: "Long Run",        distance: 16, notes: "First 16km! Settle into long-run mode. Fuel every 45 min." },
  ]},
  { week: 8, phase: "Build", runs: [
    { day: "Mon", type: "commute",  title: "🚲 Commute Day",  distance: 42, notes: "Steady commute. You're building serious multi-sport endurance now. Morning moderate, evening easy." },
    { day: "Tue", type: "commute",  title: "🚲 Commute Day",  distance: 42, notes: "Second commute. Keep the Tuesday evening ride easy — tempo run tomorrow." },
    { day: "Wed", type: "tempo",    title: "Tempo Run",       distance: 9,  notes: "2km warm-up, 5km at tempo (6:05/km), 2km cool-down." },
    { day: "Thu", type: "commute",  title: "🚲 Commute Day",  distance: 42, notes: "Third commute. Easy both ways after tempo day." },
    { day: "Fri", type: "easy",     title: "Easy Run",        distance: 6,  notes: "Easy recovery run. Notice how normal the volume feels now — that's adaptation." },
    { day: "Sun", type: "long",     title: "Long Run",        distance: 18, notes: "New longest run! Easy and consistent. Fuel every 45 min." },
  ]},
  { week: 9, phase: "Build", runs: [
    { day: "Mon", type: "commute",  title: "🚲 Commute Day",  distance: 42, notes: "Strong commute — morning push at 18–20 km/h if legs feel good. Evening easy." },
    { day: "Tue", type: "commute",  title: "🚲 Commute Day",  distance: 42, notes: "Second commute. Evening ride easy — intervals tomorrow." },
    { day: "Wed", type: "interval", title: "Intervals",       distance: 9,  notes: "4×1km at 5:45/km, 2 min rest between each rep." },
    { day: "Thu", type: "commute",  title: "🚲 Commute Day",  distance: 42, notes: "Third commute. Easy both ways." },
    { day: "Fri", type: "easy",     title: "Easy Run",        distance: 6,  notes: "Easy recovery run. Enormous week of training — respect that with this easy effort." },
    { day: "Sun", type: "long",     title: "Long Run",        distance: 19, notes: "Stay steady. Fuel every 45 mins. Respect the combined load this week." },
  ]},

  // ── WEEK 10: CUTBACK ──
  { week: 10, phase: "Build", runs: [
    { day: "Mon", type: "commute",  title: "🚲 Commute Day",  distance: 42, notes: "CUTBACK WEEK — commute as normal, both rides easy. No extra cycling." },
    { day: "Tue", type: "cycle",    title: "🚲 Easy Ride",    distance: 20, notes: "CUTBACK — easy 20km ride. Active recovery, not commute." },
    { day: "Wed", type: "easy",     title: "Easy Run",        distance: 6,  notes: "CUTBACK — light easy effort. Let the body absorb 3 weeks of big training." },
    { day: "Thu", type: "commute",  title: "🚲 Commute Day",  distance: 42, notes: "CUTBACK commute. Easy both ways." },
    { day: "Fri", type: "easy",     title: "Easy Run",        distance: 5,  notes: "Shakeout run. Very easy." },
    { day: "Sun", type: "long",     title: "Long Run",        distance: 14, notes: "CUTBACK — reduced long run. Enjoy the lighter week." },
  ]},

  { week: 11, phase: "Build", runs: [
    { day: "Mon", type: "commute",  title: "🚲 Commute Day",  distance: 42, notes: "Back into it feeling fresh after cutback. Strong morning commute — 18–20 km/h." },
    { day: "Tue", type: "commute",  title: "🚲 Commute Day",  distance: 42, notes: "Second commute. Evening easy — big tempo run tomorrow." },
    { day: "Wed", type: "tempo",    title: "Tempo Run",       distance: 10, notes: "2km warm-up, 6km tempo (6:00/km), 2km cool-down." },
    { day: "Thu", type: "commute",  title: "🚲 Commute Day",  distance: 42, notes: "Third commute. Easy both ways after tempo." },
    { day: "Fri", type: "easy",     title: "Easy Run",        distance: 6,  notes: "Easy recovery run." },
    { day: "Sun", type: "long",     title: "Long Run",        distance: 21, notes: "🎉 HALF MARATHON! Your biggest running milestone yet. Fuel at km 5, 10, 15." },
  ]},
  { week: 12, phase: "Build", runs: [
    { day: "Mon", type: "commute",  title: "🚲 Commute Day",  distance: 42, notes: "Strong commute after the 21km milestone. You're fitter than you've ever been." },
    { day: "Tue", type: "commute",  title: "🚲 Commute Day",  distance: 42, notes: "Second commute. Evening easy — intervals tomorrow." },
    { day: "Wed", type: "interval", title: "Intervals",       distance: 10, notes: "5×1km at 5:40/km, 90s rest between each rep." },
    { day: "Thu", type: "commute",  title: "🚲 Commute Day",  distance: 42, notes: "Third commute. Easy both ways after intervals." },
    { day: "Fri", type: "easy",     title: "Easy Run",        distance: 6,  notes: "Easy and controlled." },
    { day: "Sun", type: "long",     title: "Long Run",        distance: 22, notes: "One km beyond half marathon. Fuel at km 5, 10, 15." },
  ]},
  { week: 13, phase: "Build", runs: [
    { day: "Mon", type: "commute",  title: "🚲 Commute Day",  distance: 42, notes: "Final Build phase commute. You've been doing this for 9 weeks — it should feel normal now." },
    { day: "Tue", type: "commute",  title: "🚲 Commute Day",  distance: 42, notes: "Second commute. Evening easy — biggest tempo run of the plan tomorrow." },
    { day: "Wed", type: "tempo",    title: "Tempo Run",       distance: 11, notes: "2km warm-up, 7km at tempo (5:55/km), 2km cool-down." },
    { day: "Thu", type: "commute",  title: "🚲 Commute Day",  distance: 42, notes: "Third commute. Easy both ways — big tempo session yesterday." },
    { day: "Fri", type: "easy",     title: "Easy Run",        distance: 7,  notes: "Easy aerobic run." },
    { day: "Sun", type: "long",     title: "Long Run",        distance: 23, notes: "Longest Build run. Respect the distance. Fuel at km 5, 10, 15." },
  ]},

  // ── PHASE 3: PEAK (Weeks 14–17) ──
  { week: 14, phase: "Peak", runs: [
    { day: "Mon", type: "commute",  title: "🚲 Commute Day",  distance: 42, notes: "CUTBACK WEEK — commute both ways easy. No pushing. Rest before Peak phase." },
    { day: "Tue", type: "cycle",    title: "🚲 Easy Ride",    distance: 20, notes: "CUTBACK — easy 20km ride. No commute. Let the legs breathe before peak phase begins." },
    { day: "Wed", type: "easy",     title: "Easy Run",        distance: 7,  notes: "CUTBACK — light effort." },
    { day: "Thu", type: "commute",  title: "🚲 Commute Day",  distance: 42, notes: "CUTBACK commute. Easy both ways." },
    { day: "Fri", type: "easy",     title: "Easy Run",        distance: 5,  notes: "Very easy. Feel the freshness returning." },
    { day: "Sun", type: "long",     title: "Long Run",        distance: 16, notes: "CUTBACK — reduced long run. Legs feel fresher." },
  ]},
  { week: 15, phase: "Peak", runs: [
    { day: "Mon", type: "commute",  title: "🚲 Commute Day",  distance: 42, notes: "Peak phase begins. You are at your fittest ever. Morning commute strong — 19–21 km/h." },
    { day: "Tue", type: "commute",  title: "🚲 Commute Day",  distance: 42, notes: "Second commute. Evening easy — biggest interval session of the plan tomorrow." },
    { day: "Wed", type: "interval", title: "Intervals",       distance: 11, notes: "4×1.5km at 5:50/km, 2 min rest between each rep." },
    { day: "Thu", type: "commute",  title: "🚲 Commute Day",  distance: 42, notes: "Third commute. Easy both ways after the big interval session." },
    { day: "Fri", type: "easy",     title: "Easy Run",        distance: 7,  notes: "Easy recovery run." },
    { day: "Sun", type: "long",     title: "Long Run",        distance: 25, notes: "Trust the process. Walk breaks OK. Fuel at km 5, 10, 15, 20." },
  ]},
  { week: 16, phase: "Peak", runs: [
    { day: "Mon", type: "commute",  title: "🚲 Commute Day",  distance: 42, notes: "Building to the longest run of the plan this Sunday. Steady commute." },
    { day: "Tue", type: "commute",  title: "🚲 Commute Day",  distance: 42, notes: "Second commute. Evening easy — save legs for Sunday's 28km." },
    { day: "Wed", type: "tempo",    title: "Tempo Run",       distance: 11, notes: "2km warm-up, 7km at tempo (5:55/km), 2km cool-down." },
    { day: "Thu", type: "commute",  title: "🚲 Commute Day",  distance: 42, notes: "Third commute. Easy both ways after tempo." },
    { day: "Fri", type: "easy",     title: "Easy Run",        distance: 7,  notes: "Easy aerobic run." },
    { day: "Sun", type: "long",     title: "Long Run",        distance: 28, notes: "🏔️ LONGEST RUN OF THE PLAN. Fuel at km 6, 11, 16, 21. You've done the work." },
  ]},
  { week: 17, phase: "Peak", runs: [
    { day: "Mon", type: "cycle",    title: "🚲 Easy Recovery Ride", distance: 21, notes: "Easy recovery ride — NOT a commute push. Legs are tired after 28km. 14–16 km/h max. Just spin." },
    { day: "Tue", type: "cycle",    title: "🚲 Easy Ride",          distance: 21, notes: "Easy ride. Gradually feeling better after Sunday's peak run. Keep it light." },
    { day: "Wed", type: "interval", title: "Intervals",             distance: 10, notes: "4×1.5km at 5:50/km, 2 min rest between each rep." },
    { day: "Thu", type: "cycle",    title: "🚲 Easy Ride",          distance: 21, notes: "Easy ride. Legs saving for Sunday's 26km long run." },
    { day: "Fri", type: "easy",     title: "Easy Run",              distance: 7,  notes: "Easy and relaxed." },
    { day: "Sun", type: "long",     title: "Long Run",              distance: 26, notes: "Last big long run. Easy effort — taper starts next week." },
  ]},

  // ── PHASE 4: TAPER (Weeks 18–19) ──
  { week: 18, phase: "Taper", runs: [
    { day: "Mon", type: "cycle",    title: "🚲 Easy Spin",    distance: 15, notes: "TAPER BEGINS — volume drops significantly. Easy spin, no commute pressure. 14–16 km/h." },
    { day: "Tue", type: "cycle",    title: "🚲 Easy Spin",    distance: 15, notes: "Second easy spin. Your body is consolidating weeks of fitness. Keep it very easy." },
    { day: "Wed", type: "tempo",    title: "Short Tempo",     distance: 8,  notes: "2km warm-up, 4km tempo, 2km cool-down. Stay sharp." },
    { day: "Thu", type: "cycle",    title: "🚲 Easy Spin",    distance: 15, notes: "Third easy spin. Taper week — no hard efforts on the bike." },
    { day: "Fri", type: "easy",     title: "Easy Run",        distance: 5,  notes: "Light legs." },
    { day: "Sun", type: "long",     title: "Long Run",        distance: 20, notes: "Taper long run — enjoy the lighter load." },
  ]},
  { week: 19, phase: "Taper", runs: [
    { day: "Mon", type: "cycle",    title: "🚲 Easy Spin",    distance: 12, notes: "Very easy spin — just keeping legs loose. Race week is next. 12km max." },
    { day: "Tue", type: "cycle",    title: "🚲 Easy Spin",    distance: 12, notes: "Second easy spin. Short and easy. Save everything for the marathon." },
    { day: "Wed", type: "interval", title: "Short Intervals", distance: 7,  notes: "4×400m at 5:30/km, 2 min rest between each rep." },
    { day: "Thu", type: "cycle",    title: "🚲 Easy Spin",    distance: 12, notes: "Final Thursday ride before race week. Very easy. 12km only." },
    { day: "Fri", type: "easy",     title: "Easy Run",        distance: 4,  notes: "Very easy shakeout." },
    { day: "Sun", type: "long",     title: "Long Run",        distance: 14, notes: "Easy, confidence-building run. Enjoy how good your legs feel!" },
  ]},

  // ── PHASE 5: RACE WEEK (Week 20) ──
  { week: 20, phase: "Race Week 🏁", runs: [
    { day: "Tue", type: "easy",  title: "Easy Run",        distance: 5,   notes: "Light and easy. Lay out race gear, check your kit." },
    { day: "Thu", type: "easy",  title: "Easy Shakeout",   distance: 4,   notes: "4×100m strides at the end. Stay loose." },
    { day: "Fri", type: "rest",  title: "Rest Day",        distance: 0,   notes: "Full rest. NO cycling. Sleep early. Carb-load dinner tonight." },
    { day: "Sun", type: "long",  title: "🏆 MARATHON DAY", distance: 42.2, notes: "GO TIME. Start at 8:15/km. Run your own race. Every training session — running and cycling — led to this." },
  ]},
];