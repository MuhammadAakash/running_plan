export const PACE_ZONES = {
  easy:     { label: "Easy",      color: "#4CAF7D", bg: "#0E1F16", border: "#4CAF7D33", paceRange: "7:30–8:30 /km", treadmillSpeed: "7.1–8.0 km/h", effort: "4/10", heartRate: "60–70% max HR" },
  tempo:    { label: "Tempo",     color: "#F59E0B", bg: "#1F180A", border: "#F59E0B33", paceRange: "6:00–6:30 /km", treadmillSpeed: "9.2–10.0 km/h", effort: "7/10", heartRate: "80–90% max HR" },
  interval: { label: "Interval",  color: "#EF4444", bg: "#1F0E0E", border: "#EF444433", paceRange: "5:30–6:00 /km", treadmillSpeed: "10.0–10.9 km/h", effort: "9/10", heartRate: "90–95% max HR" },
  long:     { label: "Long Run",  color: "#818CF8", bg: "#0E0E1F", border: "#818CF833", paceRange: "7:45–8:45 /km", treadmillSpeed: "6.9–7.7 km/h", effort: "5/10", heartRate: "65–75% max HR" },
  rest:     { label: "Rest Day",  color: "#6B7280", bg: "#121218", border: "#2A2A3A",   paceRange: "—",             treadmillSpeed: "—",              effort: "—",    heartRate: "—" },
};

export const PHASE_COLORS = {
  "Base Building": "#4CAF7D",
  "Build":         "#F59E0B",
  "Peak":          "#EF4444",
  "Taper":         "#818CF8",
  "Race Week 🏁":  "#EC4899",
};

// Each detail has both outdoor and treadmill variants
// Intervals are generated dynamically based on run.notes (rep counts pulled from PLAN)
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
        { phase: "Warm-Up", duration: "3 min walk", desc: "Set treadmill to 5 km/h and walk for 3 minutes. Then increase to your easy run speed." },
        { phase: "Main Run", duration: "Full distance at 7.1–8.0 km/h", desc: "Set incline to 1% — non-negotiable on a treadmill for outdoor simulation. Run at 7.1–8.0 km/h. This should feel very comfortable. You should be able to hold a full conversation." },
        { phase: "Cool-Down", duration: "3 min walk + stretch", desc: "Drop to 5 km/h for 3 minutes, then step off and stretch calves, quads, and hip flexors for 30 seconds each." },
      ],
      coachNote: "Always set 1% incline on a treadmill — flat treadmill running is easier than outdoor running and underestimates the true effort. 1% corrects for this. Everything else is the same: easy, conversational, relaxed.",
      keyFocus: ["1% incline — always", "7.1–8.0 km/h speed range", "Don't hold the handrails — it changes your gait", "Treadmill boredom tip: cover the display and run by feel"],
    },
  },

  recovery_default: {
    outdoor: {
      overview: "A very short, very easy run to flush out lactic acid and promote blood flow to tired muscles from yesterday's quality session. This isn't about fitness — it's about accelerating recovery so you're ready for Sunday's long run.",
      structure: [
        { phase: "Walk", duration: "3 min", desc: "Start walking briskly to get the blood moving before any jogging begins." },
        { phase: "Recovery Jog", duration: "Full distance at 8:30–9:30/km", desc: "Jog at the slowest pace that still counts as running. Even 9:30/km is perfectly fine. Movement is the goal, not pace. Your legs will feel heavy — that's normal." },
        { phase: "Cool-Down + Mobility", duration: "8 min", desc: "Walk 3 minutes, then: leg swings (10 each leg), hip circles (10 each direction), calf raises (15 reps), standing quad stretch (30s each side)." },
      ],
      coachNote: "Recovery runs should feel embarrassingly slow. If anyone sees you, they might be confused — and that's correct. Your legs are still tired from Thursday. This run helps them bounce back faster than complete rest. Don't let pride push the pace up.",
      keyFocus: ["Slower than easy pace — genuinely", "No ego — recovery is the goal, not performance", "Focus on smooth, relaxed form", "Keep it short — finishing is the only aim today"],
    },
    treadmill: {
      overview: "A gentle recovery jog on the treadmill. The treadmill is actually ideal for recovery runs — it forces you to hold a steady, slow pace and removes any temptation to push uphill or race other runners.",
      structure: [
        { phase: "Walk", duration: "3 min at 5 km/h", desc: "Step on and walk at 5 km/h for 3 minutes to warm up gently." },
        { phase: "Recovery Jog", duration: "Full distance at 6.3–7.1 km/h", desc: "Set the treadmill to 6.3–7.1 km/h with 1% incline. This is genuinely slow — and that's exactly right. Breathe easily, stay relaxed, finish the distance." },
        { phase: "Walk + Stretch", duration: "5 min", desc: "Drop to 4.5 km/h for 3 minutes, then step off and do light leg swings and calf stretches." },
      ],
      coachNote: "The treadmill is perfect for recovery runs — it removes any external pressure to run faster. Set a slow speed, put on a podcast or music, and just move for the required time. That's all this session needs.",
      keyFocus: ["1% incline", "6.3–7.1 km/h — no faster", "Put on a podcast — this is meant to be easy", "This is preparation for Sunday's long run"],
    },
  },

  interval_400: {
    outdoor: (run) => ({
      overview: `Short, sharp 400m repetitions to develop your running economy and introduce your legs to faster paces. Today's session is ${run.notes.split('×')[0].trim()}×400m — building raw speed that translates directly into a stronger marathon pace.`,
      structure: [
        { phase: "Warm-Up", duration: "10 min easy jog", desc: "Easy jog at 8:00/km for 10 minutes. Finish with 4×20-second acceleration strides — smoothly build speed for 20 seconds, walk 30s between each. Your legs should feel primed, not tired." },
        { phase: `${run.notes.split('×')[0].trim()}×400m Reps`, duration: "~2:10 each rep", desc: `Run 400m at 5:30/km — hard but controlled, not all-out sprinting. That's ${run.notes.split('×')[0].trim()} reps in total. Recover with exactly 90 seconds of walking between each rep. Count your reps out loud if it helps.` },
        { phase: "Cool-Down", duration: "10 min easy jog", desc: "Drop pace to 8:30/km and jog easily for 10 minutes. Walk the final 2 minutes. Stretch calves and quads after." },
      ],
      coachNote: `Each of your ${run.notes.split('×')[0].trim()} reps should feel the same intensity. Don't go out too hard on rep 1. If your last rep is significantly slower than your first, you started too fast. Aim for even splits — consistency beats heroics every time.`,
      keyFocus: [`${run.notes.split('×')[0].trim()} reps of 400m — count them`, "Even effort across all reps — not a sprint", "90 seconds full recovery — don't cheat this", "Drive your arms at the elbows — arms drive legs"],
    }),
    treadmill: (run) => ({
      overview: `${run.notes.split('×')[0].trim()}×400m intervals on the treadmill. Treadmill intervals are effective and consistent — you can set the exact speed and the belt keeps you honest on pace.`,
      structure: [
        { phase: "Warm-Up", duration: "10 min at 7.5 km/h", desc: "Set treadmill to 1% incline, 7.5 km/h for 10 minutes. Finish with 4 short stride-outs: increase to 10 km/h for 20 seconds, then back down. Repeat 4 times." },
        { phase: `${run.notes.split('×')[0].trim()}×400m Reps`, duration: "~2:10 each at 10.5–11.0 km/h", desc: `Increase treadmill to 10.5–11.0 km/h for 400m (approximately 2:10 at this speed). Complete ${run.notes.split('×')[0].trim()} reps. After each rep, straddle the belt (feet on side rails) or slow to 5 km/h for 90 seconds recovery, then go again.` },
        { phase: "Cool-Down", duration: "8 min at 7.0 km/h", desc: "Drop to 7.0 km/h for 8 minutes, then 3 min walk at 5 km/h. Step off and stretch." },
      ],
      coachNote: "Treadmill intervals are great because the machine controls the pace for you — you can't cheat by slowing down mid-rep. Straddling the belt during recovery (standing on the side rails) is the safest way to recover without stopping the machine completely.",
      keyFocus: ["10.5–11.0 km/h for reps", "1% incline throughout", "Straddle the belt for recovery — don't stop the machine", `${run.notes.split('×')[0].trim()} reps total — count them`],
    }),
  },

  interval_800: {
    outdoor: (run) => {
      const repCount = run.notes.match(/(\d+)×800m/)?.[1] || run.notes.split('×')[0].trim();
      return {
        overview: `${repCount}×800m repetitions — the classic marathon builder. These develop your lactate threshold and teach your body to sustain harder efforts for longer, which directly translates to a faster, more comfortable marathon pace on race day.`,
        structure: [
          { phase: "Warm-Up", duration: "10 min easy + strides", desc: "Easy jog at 8:00/km for 10 minutes, then 4×20-second strides with 30s walk between each. Your legs should feel ready to work." },
          { phase: `${repCount}×800m Reps`, duration: "~4:35 each rep", desc: `Run 800m at 5:45/km — that's ${repCount} reps in total. This should feel like a 7/10 effort: hard enough that you couldn't sustain it for 5km, but controlled enough to hold good form throughout. Take exactly 2 full minutes recovery (walk or stand) between every rep. Don't skip recovery time.` },
          { phase: "Cool-Down", duration: "10 min easy jog", desc: "Easy jog at 8:30/km for 10 minutes — don't skip this. It flushes lactic acid from your bloodstream and directly reduces soreness tomorrow." },
        ],
        coachNote: `You have ${repCount} reps today. Think of each one as a deposit in the bank — you'll withdraw them at km 35 on race day. Don't go out too hard on rep 1. Reps ${Math.ceil(repCount/2)} and ${Math.ceil(repCount/2)+1} will be the hardest — expect it and push through.`,
        keyFocus: [`${repCount} reps of 800m — run every single one`, "5:45/km target pace — use your GPS", "Full 2-minute recovery between every rep", "Maintain good form even on the last rep — don't shuffle"],
      };
    },
    treadmill: (run) => {
      const repCount = run.notes.match(/(\d+)×800m/)?.[1] || run.notes.split('×')[0].trim();
      return {
        overview: `${repCount}×800m on the treadmill. 800m reps on a treadmill are excellent — the consistent pace forces you to hold your effort honestly across all ${repCount} reps.`,
        structure: [
          { phase: "Warm-Up", duration: "10 min at 7.5 km/h", desc: "Treadmill at 1% incline, 7.5 km/h for 10 minutes. Then 4 stride-outs: increase to 9.5 km/h for 20 seconds, back down, repeat 4 times." },
          { phase: `${repCount}×800m Reps`, duration: "~4:35 each at 10.0–10.5 km/h", desc: `Increase treadmill to 10.0–10.5 km/h for 800m (approximately 4:35 per rep). Complete ${repCount} reps in total. After each rep, straddle the rails or slow to 5 km/h for a full 2-minute recovery. Then increase speed and go again.` },
          { phase: "Cool-Down", duration: "10 min at 7.0 km/h", desc: "Drop to 7.0 km/h for 10 minutes. Then 3 min walk. Step off and foam roll calves and glutes." },
        ],
        coachNote: `${repCount} reps at this pace will take serious effort. The treadmill helps you stay honest on pace — it won't let you slow down mid-rep. Use the recovery time fully: 2 full minutes between each rep is not optional.`,
        keyFocus: ["10.0–10.5 km/h for reps", `${repCount} reps total — count every one`, "2-minute full recovery between reps", "1% incline throughout the whole session"],
      };
    },
  },

  interval_1km: {
    outdoor: (run) => {
      const repCount = run.notes.match(/(\d+)×1km/)?.[1] || run.notes.match(/(\d+)×/)?.[1] || '4';
      return {
        overview: `${repCount}×1km repetitions at close to your 10K race pace. These longer reps build the aerobic power and mental toughness required for the final 10km of the marathon — the part that separates those who trained smart from those who didn't.`,
        structure: [
          { phase: "Warm-Up", duration: "12 min easy + drills", desc: "10 minutes easy jog, then 2 minutes of dynamic drills: high knees (30s), butt kicks (30s), lateral shuffles (30s), and 3 acceleration strides." },
          { phase: `${repCount}×1km Reps`, duration: "~5:43 each rep", desc: `Run 1km at 5:40–5:45/km. That's ${repCount} reps in total — ${repCount}km of quality running. This should feel comfortably hard: you're working but not gasping. Take 90 seconds easy jog recovery between each rep. Do not skip reps — all ${repCount} matter.` },
          { phase: "Cool-Down", duration: "10 min easy + stretch", desc: "Easy jog at 8:30/km for 10 minutes. When home: foam roll calves, IT band, and glutes for 60 seconds each." },
        ],
        coachNote: `${repCount} × 1km reps is a serious session. Each rep builds your mental library of 'I've done hard things before.' That library will be opened repeatedly between km 30 and 42 on race day. Every rep you complete is a deposit you'll spend on the marathon start line.`,
        keyFocus: [`${repCount} reps of 1km — run all of them`, "5:40–5:45/km target — check your GPS", "90s easy jog recovery — not walking", "Visualise race day on the last rep"],
      };
    },
    treadmill: (run) => {
      const repCount = run.notes.match(/(\d+)×1km/)?.[1] || run.notes.match(/(\d+)×/)?.[1] || '4';
      return {
        overview: `${repCount}×1km on the treadmill. 1km reps are well-suited to a treadmill — the distance is easy to track and the consistent speed forces you to run the same effort across every rep.`,
        structure: [
          { phase: "Warm-Up", duration: "10 min at 7.5 km/h", desc: "Treadmill at 1% incline, 7.5 km/h for 10 minutes. Then 3 stride-outs at 10 km/h for 20 seconds each." },
          { phase: `${repCount}×1km Reps`, duration: "~5:43 each at 10.5 km/h", desc: `Set treadmill to 10.5 km/h for each 1km rep. Run ${repCount} reps in total. After each km, straddle the rails or slow to 5 km/h for 90 seconds recovery, then build back up to 10.5 km/h for the next rep.` },
          { phase: "Cool-Down", duration: "10 min at 7.0 km/h", desc: "Drop to 7.0 km/h for 10 minutes. Walk 3 minutes. Foam roll immediately after." },
        ],
        coachNote: `Use the treadmill distance display to track each 1km rep precisely. Reset your distance counter at the start of each rep if your treadmill allows. ${repCount} reps at 10.5 km/h is a strong session — be proud of every rep you complete.`,
        keyFocus: ["10.5 km/h for reps", `${repCount} reps total`, "90s recovery between reps", "1% incline the whole session"],
      };
    },
  },

  interval_1k5: {
    outdoor: (run) => {
      const repCount = run.notes.match(/(\d+)×1\.5km/)?.[1] || '4';
      return {
        overview: `${repCount}×1.5km repetitions — the peak interval session of the plan. These longer reps bridge the gap between speed work and tempo, building your ability to hold strong sustained effort: the exact quality needed between km 30 and 40 of the marathon.`,
        structure: [
          { phase: "Warm-Up", duration: "12 min easy + strides", desc: "10 min easy jog at 8:00/km, then 4 acceleration strides over 100m each. Get your legs turning over smoothly before the reps start." },
          { phase: `${repCount}×1.5km Reps`, duration: "~8:45 each rep", desc: `Run 1.5km at 5:50/km. That's ${repCount} reps — ${(parseFloat(repCount)*1.5).toFixed(1)}km of total quality running. Each rep takes around 8–9 minutes. Take exactly 2 full minutes recovery between every rep. This is the hardest interval session of the plan — respect it.` },
          { phase: "Cool-Down", duration: "12 min easy + walk", desc: "Extended cool-down jog at 8:30/km for 12 minutes, then 5 minutes walking. Eat something with carbs and protein within 30 minutes of finishing." },
        ],
        coachNote: `${repCount} × 1.5km is the biggest interval session in the plan. It's supposed to feel genuinely hard. If you nail these reps, race day will feel manageable by comparison. When rep ${repCount === '4' ? '3' : Math.ceil(parseInt(repCount)*0.75)} gets difficult — and it will — remind yourself this is exactly what km 35 of the marathon will feel like. You're training your response.`,
        keyFocus: [`${repCount} reps of 1.5km — this is the peak session`, "5:50/km consistent across all reps", "Full 2-minute recovery — do not rush this", `Rep ${repCount === '4' ? '3 and 4' : 'the last two'} are where the real fitness is built`],
      };
    },
    treadmill: (run) => {
      const repCount = run.notes.match(/(\d+)×1\.5km/)?.[1] || '4';
      return {
        overview: `${repCount}×1.5km on the treadmill. These are long, demanding reps — the treadmill ensures you hold your pace honestly across all ${repCount} reps without any natural drift in speed.`,
        structure: [
          { phase: "Warm-Up", duration: "12 min at 7.5 km/h", desc: "Treadmill at 1% incline, 7.5 km/h for 12 minutes. Then 3 stride-outs at 10 km/h for 20 seconds. Take your time — this session demands full readiness." },
          { phase: `${repCount}×1.5km Reps`, duration: "~8:45 each at 10.3 km/h", desc: `Set treadmill to 10.3 km/h for each 1.5km rep. Run ${repCount} reps in total. After each rep, drop to 5 km/h or straddle the rails for a full 2-minute recovery. Build back up to 10.3 km/h before starting the next rep.` },
          { phase: "Cool-Down", duration: "10 min at 7.0 km/h + walk", desc: "Drop to 7.0 km/h for 10 minutes, then walk 5 minutes at 4.5 km/h. Step off and foam roll calves, IT band, and glutes immediately." },
        ],
        coachNote: `${repCount} reps of 1.5km at 10.3 km/h is elite-level stimulus for a first marathon runner. The treadmill will not let you cheat on pace. Use the distance counter to track each 1.5km precisely. This is your biggest training session — be proud of every rep.`,
        keyFocus: ["10.3 km/h for reps", `${repCount} reps × 1.5km each`, "Full 2-minute recovery between every rep", "1% incline throughout"],
      };
    },
  },

  interval_400_taper: {
    outdoor: (run) => ({
      overview: "Short, sharp 4×400m taper intervals — keeping your legs neuromuscularly primed for race day without adding fatigue. This is a sharpening session, not a fitness builder. Volume is low, quality is maintained.",
      structure: [
        { phase: "Warm-Up", duration: "10 min easy jog", desc: "Easy jog at 8:00/km for 10 minutes, then 4×20-second strides. Get the legs feeling snappy." },
        { phase: "4×400m Reps", duration: "~2:10 each rep", desc: "Run 4 reps of 400m at 5:30/km. Just 4 reps — short and sharp. Take 2 full minutes recovery between each. Notice how your legs feel: fresh, fast, ready. That's 19 weeks of training showing up." },
        { phase: "Cool-Down", duration: "8 min easy jog", desc: "Easy jog at 8:30/km for 8 minutes. No need for an extended cool-down — this was a light session." },
      ],
      coachNote: "4 reps only — don't add more, even if you feel great. The taper is working. These reps remind your neuromuscular system of fast running without creating fatigue. Your next hard effort is the marathon itself.",
      keyFocus: ["4 reps only — resist adding more", "5:30/km — feel the speed, don't force it", "2 min recovery between reps", "Notice how fresh you feel — that's the taper working"],
    }),
    treadmill: (run) => ({
      overview: "4×400m taper sharpeners on the treadmill. Quick, light, purposeful. The treadmill is ideal here — set the speed and let the belt do the work while you focus on feeling fast and ready.",
      structure: [
        { phase: "Warm-Up", duration: "8 min at 7.5 km/h", desc: "Treadmill at 1% incline, 7.5 km/h for 8 minutes. Then 3 quick stride-outs at 10.5 km/h for 15 seconds each." },
        { phase: "4×400m Reps", duration: "~2:10 each at 10.9 km/h", desc: "Set treadmill to 10.9 km/h. Run 4 reps of 400m (approximately 2:10 each). After each rep, straddle the rails or slow to 5 km/h for 2 minutes. Then go again." },
        { phase: "Cool-Down", duration: "6 min at 7.0 km/h", desc: "Drop to 7.0 km/h for 6 minutes, then step off. Light stretching only — this was a light session." },
      ],
      coachNote: "4 reps on the treadmill feels almost too easy after the training you've done. That's correct. Save everything for race day. These are sharpeners, not sessions. In and out — job done.",
      keyFocus: ["10.9 km/h for 400m reps", "4 reps only — do not add", "2 min recovery between reps", "Race day is 7 days away — protect your energy"],
    }),
  },

  tempo_3k: {
    outdoor: {
      overview: "Your first tempo run — introducing 'comfortably hard' running. Tempo pace sits right at your lactate threshold: the fastest pace your body can sustain while still clearing the lactic acid it produces. Training here pushes that threshold higher over time.",
      structure: [
        { phase: "Warm-Up", duration: "2 km at 8:00/km", desc: "Easy jog at 8:00/km for 2 full kilometres. Don't rush — you need your body fully transitioned from rest to effort before the tempo block begins." },
        { phase: "Tempo Block", duration: "3 km at 6:15/km", desc: "Run 3km at 6:15/km. This should feel 'comfortably hard' — you can say 3–4 words at a time but cannot hold a full conversation. Hold the pace absolutely steady across all 3km. Don't let it creep faster on km 1." },
        { phase: "Cool-Down", duration: "2 km at 8:00/km", desc: "Drop immediately back to easy jog (8:00/km) for 2km. Don't stop suddenly after the tempo — the cool-down removes lactic acid from your bloodstream efficiently." },
      ],
      coachNote: "This is your first time running at lactate threshold. It will feel strange — harder than easy but more controlled than you might expect. Over the next 20 weeks, this same 6:15/km pace will feel progressively easier. That measurable progress is your marathon fitness being built brick by brick.",
      keyFocus: ["6:15/km — steady and controlled", "Can say 3–4 words only — correct effort", "Full warm-up and cool-down are not optional", "If it feels hard, it's working — that's the point"],
    },
    treadmill: {
      overview: "Your first tempo run on the treadmill — the treadmill is excellent for tempo work because it locks you into the correct pace. Set it and hold it. No drifting faster or slower.",
      structure: [
        { phase: "Warm-Up", duration: "2 km at 7.5 km/h", desc: "Treadmill at 1% incline, 7.5 km/h for 2km (approximately 16 minutes). Let your body settle before the tempo block." },
        { phase: "Tempo Block", duration: "3 km at 9.6 km/h", desc: "Increase treadmill to 9.6 km/h (= 6:15/km pace). Run 3km at this speed. This will feel comfortably hard — you're at your lactate threshold. Hold it for the full 3km." },
        { phase: "Cool-Down", duration: "2 km at 7.5 km/h", desc: "Drop back to 7.5 km/h for 2km. Walk the final 2 minutes at 4.5 km/h." },
      ],
      coachNote: "The treadmill is perfect for your first tempo run — it removes all guesswork from pace. Set 9.6 km/h and trust it. Focus on your breathing, your posture, and holding the effort steady. The machine does the rest.",
      keyFocus: ["9.6 km/h = 6:15/km — set it and hold it", "1% incline throughout", "Don't hold the handrails — it changes your running economy", "This is your lactate threshold — feel where it is"],
    },
  },

  tempo_4k: {
    outdoor: {
      overview: "A progressive tempo run — the tempo block grows to 4km and the pace nudges slightly faster. Your body is adapting; lean into it. Each tempo run you do pushes your lactate threshold slightly higher.",
      structure: [
        { phase: "Warm-Up", duration: "2 km at 8:00/km", desc: "Easy jog at 8:00/km for 2km." },
        { phase: "Tempo Block", duration: "4 km at 6:10/km", desc: "4km at 6:10/km — fractionally faster than last time. Aim for even splits across all 4km: km 4 should match km 1. If you feel strong at km 3, don't speed up — save the urge and bank it." },
        { phase: "Cool-Down", duration: "2 km at 8:00/km", desc: "Easy jog at 8:30/km back. Don't stop abruptly — the cool-down is part of the session." },
      ],
      coachNote: "Notice the tempo block is 6:10/km vs last time's 6:15/km. That 5-second difference is meaningful over 4km. Your body is adapting — lean into it. Aim for negative splits: make the second 2km fractionally faster than the first.",
      keyFocus: ["6:10/km — hold it steady", "Negative splits: 2nd half slightly faster than 1st", "Cadence focus — aim for 170+ steps per minute", "One short phrase per breath = correct effort level"],
    },
    treadmill: {
      overview: "4km tempo block on the treadmill at a slightly faster pace than your first tempo. The treadmill makes progressive tempo work easy to execute — just increase the speed by one click and lock in.",
      structure: [
        { phase: "Warm-Up", duration: "2 km at 7.5 km/h", desc: "Treadmill at 1% incline, 7.5 km/h for 2km." },
        { phase: "Tempo Block", duration: "4 km at 9.7 km/h", desc: "Increase to 9.7 km/h (= 6:10/km). Run 4km at this speed. Slightly faster than last week — notice how the adaptation feels. Hold form and stay composed." },
        { phase: "Cool-Down", duration: "2 km at 7.5 km/h", desc: "Drop to 7.5 km/h for 2km, then 2 min walk at 4.5 km/h." },
      ],
      coachNote: "9.7 km/h is only marginally faster than last week's 9.6 km/h — but over 4km, it accumulates. That's the beauty of progressive overload. Each week, a tiny increase creates meaningful adaptation without overwhelming the body.",
      keyFocus: ["9.7 km/h = 6:10/km", "1% incline", "Hold form throughout — don't lean forward", "Tempo block: 4km only, then cool-down"],
    },
  },

  tempo_5k: {
    outdoor: {
      overview: "A landmark session — your first 5km of sustained tempo running. This is approximately 30 minutes at threshold. Completing this session is a genuine indicator of developing marathon fitness and one of the strongest predictors of race day performance.",
      structure: [
        { phase: "Warm-Up", duration: "2 km at 8:00/km", desc: "Easy jog building gradually. Take your time — this is your longest tempo block yet." },
        { phase: "Tempo Block", duration: "5 km at 6:05/km", desc: "Hold 6:05/km for 5km — roughly 30 minutes of sustained threshold work. Segment it: km 1–2 (find the pace, settle in), km 3 (the hardest km — expect it), km 4–5 (dig in and hold)." },
        { phase: "Cool-Down", duration: "2 km at 8:00/km", desc: "Mandatory 2km cool-down. Walk the final 2 minutes. Eat something within 30 minutes of finishing." },
      ],
      coachNote: "5km at tempo pace is the gold standard lactate threshold workout. If you sustain this today, you are building real marathon fitness. Most first-time marathoners never do sessions like this — you're doing something genuinely serious. Be proud when you finish.",
      keyFocus: ["6:05/km for 5km — 30 minutes of threshold work", "Km 3 will feel hardest — push through it", "Heart rate should plateau, not keep climbing", "Final 2km: dig in — this is where fitness is forged"],
    },
    treadmill: {
      overview: "5km tempo on the treadmill. This is your first 30-minute sustained effort at threshold — a serious physiological stimulus. The treadmill keeps you honest: no slowing down, no excuses.",
      structure: [
        { phase: "Warm-Up", duration: "2 km at 7.5 km/h", desc: "Treadmill at 1% incline, 7.5 km/h for 2km." },
        { phase: "Tempo Block", duration: "5 km at 9.9 km/h", desc: "Increase to 9.9 km/h (≈6:05/km). Run 5km at this speed — approximately 30 minutes. Don't touch the speed dial. If it gets hard at 3km (it will), breathe, focus on form, and hold the pace." },
        { phase: "Cool-Down", duration: "2 km at 7.5 km/h", desc: "Drop to 7.5 km/h for 2km. Walk 3 minutes. Hydrate and eat within 30 minutes." },
      ],
      coachNote: "The treadmill at 9.9 km/h for 5km is non-negotiable — you cannot slow down without actively changing the speed. Use that to your advantage. When km 3 gets hard, keep your hands off the controls. Breathe. Hold it. That's where fitness is made.",
      keyFocus: ["9.9 km/h = ~6:05/km", "5km sustained — do not touch the speed dial", "1% incline throughout", "This is ~30 min at threshold — a real achievement"],
    },
  },

  tempo_6k: {
    outdoor: {
      overview: "Your longest tempo block so far — six kilometres at threshold will push you into territory that genuinely develops marathon-specific fitness. This session builds the mental and physical capacity to hold effort deep into the second half of the race.",
      structure: [
        { phase: "Warm-Up", duration: "2 km at 8:00/km", desc: "Easy jog — relaxed and conversational. Don't rush this." },
        { phase: "Tempo Block", duration: "6 km at 6:00/km", desc: "6km at 6:00/km — you've crossed the 35-minute threshold. Segment it: first 2km (settle in), middle 2km (hold the pace — this is the hardest section), final 2km (fight for it). Don't stop." },
        { phase: "Cool-Down", duration: "2 km at 8:00/km", desc: "2km easy jog. Slow down gradually — don't stop abruptly after 6km at tempo." },
      ],
      coachNote: "You may want to stop at km 4. Don't. The final 2km of a tempo run are where the real fitness gains happen — this is where your lactate threshold actually shifts upward. Embrace the discomfort. This is exactly what km 37–40 of the marathon will demand.",
      keyFocus: ["6:00/km for 6km — 36 minutes of threshold work", "Commit to all 6km before you start", "Middle 2km hardest — expect it and push through", "Upright posture in the final 2km even when tired"],
    },
    treadmill: {
      overview: "6km tempo on the treadmill — over 35 minutes at lactate threshold. This is serious work. The treadmill removes all excuses: you set the speed, you hold the speed, you finish the 6km.",
      structure: [
        { phase: "Warm-Up", duration: "2 km at 7.5 km/h", desc: "Treadmill at 1% incline, 7.5 km/h for 2km." },
        { phase: "Tempo Block", duration: "6 km at 10.0 km/h", desc: "Set treadmill to 10.0 km/h (= 6:00/km). Run 6km — approximately 36 minutes. At km 4 it will feel hard. Keep your hands off the speed controls. Focus on your breathing rhythm: 2 steps in, 2 steps out." },
        { phase: "Cool-Down", duration: "2 km at 7.5 km/h", desc: "Drop to 7.5 km/h for 2km. Walk 3 minutes. This cool-down is essential after 36 minutes at threshold." },
      ],
      coachNote: "10.0 km/h on a treadmill at 1% incline for 6km is elite training for a first-marathon runner. The machine won't let you quit. Use that. When it gets hard at km 4, look straight ahead, breathe rhythmically, and hold on.",
      keyFocus: ["10.0 km/h = 6:00/km", "6km sustained — do not reduce speed", "1% incline throughout", "Breathing: in for 2 steps, out for 2 steps"],
    },
  },

  tempo_7k: {
    outdoor: {
      overview: "The peak tempo session of the entire plan — 7km at threshold pace. Completing this run is one of the strongest indicators that you are ready to run a full marathon. This is over 40 minutes at lactate threshold.",
      structure: [
        { phase: "Warm-Up", duration: "2 km at 8:00/km", desc: "Take your full 2km warm-up — don't rush it. You need to arrive at the tempo block ready to hold 7km." },
        { phase: "Tempo Block", duration: "7 km at 5:55/km", desc: "7km at 5:55/km — over 41 minutes of sustained threshold running. Mentally segment it: first 2km (find the pace), middle 3km (hold the pace — this is the hardest third), final 2km (fight for every step). Do not stop." },
        { phase: "Cool-Down", duration: "2 km at 8:00/km + 5 min walk", desc: "Mandatory 2km easy jog and then walk it out. Hydrate immediately and eat within 30 minutes." },
      ],
      coachNote: "This is the hardest quality session in the plan. Arrive rested, fuelled, and mentally prepared. When km 5 feels awful (it will), remind yourself: this is training your body to handle exactly what km 37 of the marathon will feel like. Every second of discomfort is preparation.",
      keyFocus: ["5:55/km for 7km — 41 minutes of threshold work", "Mentally break into thirds before you start", "Take a gel at km 3 of the tempo if needed", "Finishing this session means you are marathon-ready"],
    },
    treadmill: {
      overview: "7km tempo on the treadmill — the peak quality session of the plan. Over 41 minutes at 10.1 km/h. The treadmill is your ally here: it will not let you slow down. Use that as a mental anchor.",
      structure: [
        { phase: "Warm-Up", duration: "2 km at 7.5 km/h", desc: "Treadmill at 1% incline, 7.5 km/h for 2km. Take the full warm-up." },
        { phase: "Tempo Block", duration: "7 km at 10.1 km/h", desc: "Set treadmill to 10.1 km/h (= 5:55/km). Run 7km. This will take approximately 41–42 minutes. Segment it: km 1–2 (settle), km 3–5 (hold — hardest section), km 6–7 (fight). If you have a gel, take it at km 3." },
        { phase: "Cool-Down", duration: "2 km at 7.5 km/h + walk", desc: "Drop to 7.5 km/h for 2km, then 5 min walk at 4.5 km/h. Don't step off immediately — let your heart rate come down gradually." },
      ],
      coachNote: "10.1 km/h for 7km on a treadmill is a landmark session. The machine gives you no escape — and that's exactly what you need for this level of threshold work. When the middle 3km feel brutal, remind yourself: the marathon will demand this and more. You're practising your response right now.",
      keyFocus: ["10.1 km/h = 5:55/km — set it and commit", "7km total — this is your peak tempo session", "Take a gel at km 3 of the tempo block", "1% incline throughout"],
    },
  },

  tempo_short_taper: {
    outdoor: {
      overview: "A shorter taper tempo — keeping your legs sharp and neuromuscularly primed for race day without adding fatigue. Volume is deliberately reduced but intensity is maintained. Think of it as reminding your legs what fast feels like.",
      structure: [
        { phase: "Warm-Up", duration: "2 km at 8:00/km", desc: "Easy jog at 8:00/km." },
        { phase: "Tempo Block", duration: "4 km at 6:10/km", desc: "4km at tempo pace — short, sharp, purposeful. Notice how much more comfortable this feels now versus your first tempo run in Week 3. That difference is 15 weeks of fitness. Stick to exactly 4km." },
        { phase: "Cool-Down", duration: "2 km at 8:00/km", desc: "Easy jog back. No need for extended stretching today." },
      ],
      coachNote: "Taper tempo runs often feel surprisingly good — you're fresher than you've been in months. Don't let that tempt you to extend the block or go faster. Stick to 4km exactly. The goal here is sharpness, not fitness. Save everything for race day.",
      keyFocus: ["4km exactly — do not extend", "Notice how much easier it feels — that's 17 weeks of training", "Visualise your race-day start line while running", "Next hard effort is the marathon itself"],
    },
    treadmill: {
      overview: "Short taper tempo on the treadmill. Quick, sharp, controlled. Set the speed, run the 4km, done. The treadmill is ideal here — no temptation to go longer or faster.",
      structure: [
        { phase: "Warm-Up", duration: "2 km at 7.5 km/h", desc: "Treadmill at 1% incline, 7.5 km/h for 2km." },
        { phase: "Tempo Block", duration: "4 km at 9.7 km/h", desc: "Set treadmill to 9.7 km/h for exactly 4km. Notice how controlled and comfortable this feels compared to earlier in the plan. That's your fitness. After 4km, immediately drop the speed." },
        { phase: "Cool-Down", duration: "2 km at 7.5 km/h", desc: "Drop to 7.5 km/h for 2km, then 2 min walk." },
      ],
      coachNote: "Set the treadmill, run 4km, cool down, done. Simple. Your job in the taper is to stay sharp without accumulating fatigue. This session ticks both boxes. Race week is coming.",
      keyFocus: ["9.7 km/h for exactly 4km", "Don't extend the session", "1% incline", "Race day is close — this is the last tempo"],
    },
  },

  long_10: {
    outdoor: {
      overview: "Your base long run — the starting point of everything. Today is about establishing your long-run routine: your pacing, your fuelling habits, and your mental approach to distance. Everything in the next 20 weeks builds from this run.",
      structure: [
        { phase: "km 1–3", duration: "~26 min at 8:30/km", desc: "Very easy — 8:30/km. The fresh-legs feeling will tempt you to go faster. Resist it. You're building a habit, not setting a PB." },
        { phase: "km 4–7", duration: "~28 min at 8:00/km", desc: "Settle into long-run pace (7:45–8:15/km). Conversational effort throughout. Take your first sip of water or hydration here." },
        { phase: "km 8–10", duration: "~22 min at 8:00/km", desc: "Maintain the same effort. If you feel strong, don't speed up — focus on form instead: tall posture, relaxed arms, light feet." },
      ],
      coachNote: "Long runs are about time on your feet, not speed. Every Sunday, you're teaching your body to burn fat efficiently, build slow-twitch muscle fibre, and mentally adapt to sustained effort. Don't rush this — it's the most important session of the whole plan.",
      keyFocus: ["Start at 8:30/km — ease in deliberately", "Hydrate every 20 minutes", "Practice breathing through your nose on easy sections", "Notice how you feel at each km — this is valuable data"],
    },
    treadmill: {
      overview: "Your base long run on the treadmill. 10km on a treadmill can feel mentally long — break it into segments mentally and use the consistent pace to build your aerobic base without the distraction of terrain.",
      structure: [
        { phase: "km 1–3", duration: "at 7.1 km/h", desc: "Treadmill at 1% incline, 7.1 km/h for the first 3km. Ease in gently." },
        { phase: "km 4–7", duration: "at 7.3–7.7 km/h", desc: "Increase slightly to 7.3–7.7 km/h. Comfortable and conversational. Put on a podcast or playlist — treadmill long runs need entertainment." },
        { phase: "km 8–10", duration: "at 7.5 km/h", desc: "Hold 7.5 km/h to finish. Consistent and steady. Hydrate from your bottle every 2km." },
      ],
      coachNote: "Treadmill long runs can feel mentally harder than outdoor running — there's no scenery changing. The trick: never look at the total distance. Cover the display and only check every 10 minutes. A podcast or audiobook makes this much more manageable.",
      keyFocus: ["1% incline throughout", "7.1–7.7 km/h — keep it easy", "Cover the distance display to avoid clock-watching", "Have a water bottle on the treadmill — drink every 2km"],
    },
  },

  long_15: {
    outdoor: {
      overview: "15km — a significant step up solidly into marathon training territory. Today is about pacing discipline and starting to practice mid-run fuelling. Running 15km with good form and consistent pace is a real achievement.",
      structure: [
        { phase: "km 1–4", duration: "~34 min at 8:30/km", desc: "Ultra-conservative start. You have 11km to go after this section." },
        { phase: "km 5–11", duration: "~50 min at 8:00/km", desc: "Long-run pace (8:00–8:15/km). Take your first fuel (gel, banana, or dates) at km 6. Hydrate every 20 minutes." },
        { phase: "km 12–15", duration: "~26 min", desc: "Hold pace. If you feel strong, focus on form rather than speed. If tired, shorten your stride — this helps more than slowing down." },
      ],
      coachNote: "By km 10 you might feel the first signs of fatigue. That's normal and important — your body is learning to tap into fat stores as fuel. Stay patient, keep moving, and note how you feel. This run is building your aerobic base.",
      keyFocus: ["Fuel at km 6 — start this habit now", "Hydrate every 20 minutes", "Run by feel, not GPS pace", "Walk through water stops — it's strategic, not weakness"],
    },
    treadmill: {
      overview: "15km long run on the treadmill. This is a significant mental effort — nearly 2 hours on a belt. Break it into 5km blocks mentally and keep entertainment ready.",
      structure: [
        { phase: "km 1–4", duration: "at 7.1 km/h", desc: "Treadmill at 1% incline, 7.1 km/h. Easy start." },
        { phase: "km 5–11", duration: "at 7.3–7.5 km/h", desc: "Increase to 7.3–7.5 km/h. Take a gel or snack at km 6 — step off briefly if needed, or have it ready on the treadmill." },
        { phase: "km 12–15", duration: "at 7.3 km/h", desc: "Hold pace to finish. Stay relaxed and consistent." },
      ],
      coachNote: "15km on a treadmill tests your mental resilience more than your physical fitness. Set three 5km mental checkpoints. Only look at the distance display at those checkpoints. The rest of the time: podcast, music, TV show — whatever keeps you moving.",
      keyFocus: ["1% incline throughout", "Fuel at km 6 — bring a gel or banana", "Mental checkpoints every 5km", "Hydrate every 2km from a bottle on the machine"],
    },
  },

  long_16: {
    outdoor: {
      overview: "16km — your first genuinely long training run. You're entering the distances that serious marathon runners train at. Today tests your pacing discipline and fuelling strategy in real conditions.",
      structure: [
        { phase: "km 1–4", duration: "~34 min at 8:30/km", desc: "Easy start — maximum 8:30/km. Many runners go too fast early and pay for it later." },
        { phase: "km 5–13", duration: "~72 min at 8:00/km", desc: "Settle at 8:00–8:15/km. Take fuel at km 5 and km 10. Hydrate every 20 minutes." },
        { phase: "km 14–16", duration: "~26 min", desc: "Hold your pace. If you feel strong, focus on form rather than speed. If tired, shorten stride and increase cadence slightly." },
      ],
      coachNote: "At km 12–13, you'll likely hit your first real 'wall' moment — legs get heavy, it stops feeling easy. This is your body shifting fuel sources. Slow down slightly if needed, but keep running. This is where the real training happens.",
      keyFocus: ["Fuel at km 5 and km 10 — don't skip", "Run by feel, not watch pace", "Walk water stops — strategic, not failure", "New personal distance — respect it"],
    },
    treadmill: {
      overview: "16km on the treadmill — a proper long session. Plan your entertainment in advance. At 7.5 km/h this will take around 2 hours 8 minutes. Break it into four 4km blocks mentally.",
      structure: [
        { phase: "km 1–4", duration: "at 7.1 km/h", desc: "Easy start at 1% incline, 7.1 km/h." },
        { phase: "km 5–13", duration: "at 7.3–7.5 km/h", desc: "Increase to 7.3–7.5 km/h. Fuel at km 5 and km 10 (have gels/snacks ready). Hydrate every 2km from a bottle." },
        { phase: "km 14–16", duration: "at 7.3 km/h", desc: "Hold steady to finish. Don't speed up at the end — consistent effort is the goal." },
      ],
      coachNote: "16km on a treadmill is a serious mental achievement. Plan a 2-hour podcast, an album, or a show. Change up your entertainment at km 8 for a mental reset. Fuel and hydrate exactly as you would outdoors — this is race nutrition practice.",
      keyFocus: ["1% incline throughout", "Fuel at km 5 and 10 — practice race nutrition", "Cover the display between km checkpoints", "7.3–7.5 km/h — keep it genuinely easy"],
    },
  },

  long_18: {
    outdoor: {
      overview: "18km — your aerobic system is genuinely developing. Completing this run means you are a different runner than you were 8 weeks ago. This tests pacing patience and fuelling consistency over nearly 2.5 hours.",
      structure: [
        { phase: "km 1–4", duration: "~34 min at 8:30/km", desc: "Deliberately slow — 8:30/km. You have 14km still to go." },
        { phase: "km 5–14", duration: "~80 min at 8:00/km", desc: "Main body at 8:00–8:15/km. Fuel at km 5 and km 12. Hydrate every 20 minutes." },
        { phase: "km 15–18", duration: "~32 min", desc: "Final stretch will feel hard — this is deliberate. Shorten stride and increase cadence rather than pushing harder." },
      ],
      coachNote: "18km takes most runners around 2.5 hours. That's 2.5 hours of continuous aerobic stimulus — building mitochondria, increasing capillary density, developing slow-twitch muscle fibres. It's working even when you can't feel it.",
      keyFocus: ["Fuel at km 5 and km 12", "Run/walk is completely legitimate", "Check posture every km — shoulders back, head up", "43% of a marathon — nearly halfway!"],
    },
    treadmill: {
      overview: "18km on the treadmill — approximately 2 hours 25 minutes at easy pace. This is a significant mental and physical effort. Plan your entertainment carefully and fuel exactly as you would on race day.",
      structure: [
        { phase: "km 1–4", duration: "at 7.1 km/h", desc: "1% incline, 7.1 km/h. Very easy start." },
        { phase: "km 5–14", duration: "at 7.3–7.5 km/h", desc: "Increase to 7.3–7.5 km/h. Fuel at km 5 and 12. Drink every 2km. Step off briefly to take gels if needed — the machine will keep running." },
        { phase: "km 15–18", duration: "at 7.3 km/h", desc: "Hold steady. Don't change speed at the end — consistent effort." },
      ],
      coachNote: "2.5 hours on a treadmill requires serious mental strategy. Recommendations: plan 2–3 different entertainment items (not one long thing), set a phone reminder to drink every 15 minutes, and treat the treadmill exactly like the road — including fuelling practice.",
      keyFocus: ["1% incline throughout", "Fuel at km 5 and 12 — non-negotiable", "Entertainment plan ready before you start", "Hydrate every 2km — set a timer"],
    },
  },

  long_19: {
    outdoor: {
      overview: "19km — one kilometre beyond your previous longest. Every long run from here adds distance and fitness that builds directly toward the marathon. Today is about consistency: same effort from start to finish.",
      structure: [
        { phase: "km 1–5", duration: "~43 min at 8:30/km", desc: "Easy warm-up section at 8:30/km." },
        { phase: "km 6–15", duration: "~82 min at 8:00/km", desc: "Long-run pace (8:00–8:15/km). Fuel at km 5 and km 12. Hydrate every 20 min." },
        { phase: "km 16–19", duration: "~34 min", desc: "Final 4km — hold steady. If pace drops, focus on cadence (steps per minute) rather than effort." },
      ],
      coachNote: "19km means you're spending over 2.5 hours on your feet with a beating heart. Notice whether your second-half pace is consistent with your first — that pacing discipline is exactly what race day requires.",
      keyFocus: ["Consistent pace from km 5–19", "Fuel every 45 minutes", "Focus on the next km marker only", "Celebrate every km beyond your previous longest"],
    },
    treadmill: {
      overview: "19km on the treadmill — just over 2.5 hours of steady running. Add 1% incline and keep the pace genuinely easy. Fuel at km 5 and km 12 exactly as you would outdoors.",
      structure: [
        { phase: "km 1–5", duration: "at 7.1 km/h", desc: "1% incline, 7.1 km/h. Easy start." },
        { phase: "km 6–15", duration: "at 7.3–7.5 km/h", desc: "Increase to 7.3–7.5 km/h. Fuel at km 5 and km 12. Drink every 2km." },
        { phase: "km 16–19", duration: "at 7.3 km/h", desc: "Hold steady to finish." },
      ],
      coachNote: "Treadmill tip for 19km: change your entertainment at km 10 to give yourself a mental reset halfway. The second half feels shorter with a fresh playlist or new episode.",
      keyFocus: ["1% incline", "Fuel at km 5 and 12", "New entertainment at km 10 for mental reset", "7.3–7.5 km/h — easy effort throughout"],
    },
  },

  long_21: {
    outdoor: {
      overview: "🎉 HALF MARATHON — 21.1km. The single most important training milestone of the plan. Today you become a half-marathon runner. The feeling you get at the end is a preview of race day. Bank it.",
      structure: [
        { phase: "km 1–5", duration: "~43 min at 8:45/km", desc: "Ultra-conservative start. 8:30–8:45/km. The adrenaline of a milestone run will push you to go faster. Resist it — you have 16km to go after this section." },
        { phase: "km 6–16", duration: "~88 min at 8:00/km", desc: "Long-run pace (8:00–8:15/km). Fuel at km 5, 10, and 15. Hydrate every 20 minutes without exception." },
        { phase: "km 17–21.1", duration: "~36 min", desc: "Hold your pace. This is where training meets mental toughness. Do not stop. Walk 60 seconds if needed, then run again. Keep moving forward." },
      ],
      coachNote: "Completing 21.1km will feel like a marathon achievement — and it should. You've never run this far. The exhaustion and elation you feel at the finish is exactly what you'll feel at km 42.2 in 9 weeks. Bank this feeling. Photograph this moment. You earned it.",
      keyFocus: ["Start at 8:45/km — slower than feels right", "3 fuel stops: km 5, 10, 15 — non-negotiable", "Walk hills without guilt", "Celebrate massively when you finish 🎉"],
    },
    treadmill: {
      overview: "Half marathon on the treadmill — 21.1km, approximately 2 hours 50 minutes. A major milestone no matter where it happens. Plan your session carefully: entertainment, fuelling, and hydration all need to be ready before you step on.",
      structure: [
        { phase: "km 1–5", duration: "at 7.0 km/h", desc: "1% incline, 7.0 km/h. Very easy start — you have a long way to go." },
        { phase: "km 6–16", duration: "at 7.3–7.5 km/h", desc: "Increase to 7.3–7.5 km/h. Fuel at km 5, 10, and 15. Drink every 2km. If you need to step off briefly to take a gel, do it — the belt keeps running." },
        { phase: "km 17–21.1", duration: "at 7.3 km/h", desc: "Hold steady. Don't increase pace at the end — consistent effort is the victory here." },
      ],
      coachNote: "A half marathon on a treadmill is a genuine mental achievement. Plan three entertainment items (change at km 7 and km 14). Set phone alarms for fuelling at km 5, 10, and 15. Treat this exactly like an outdoor half — same nutrition, same pacing, same pride at the finish.",
      keyFocus: ["1% incline throughout", "3 fuel stops: km 5, 10, 15", "Change entertainment at km 7 and km 14", "This is a half marathon — celebrate it 🎉"],
    },
  },

  long_22: {
    outdoor: {
      overview: "22km — one kilometre beyond your half marathon. You're now running distances most people will never attempt. This extends your endurance base and continues teaching your body to operate efficiently over long distances.",
      structure: [
        { phase: "km 1–5", duration: "~43 min at 8:30/km", desc: "Easy start. Give your body time to warm into this after last week's milestone." },
        { phase: "km 6–17", duration: "~96 min at 8:00/km", desc: "Long-run pace (8:00–8:15/km). Fuel at km 5, 10, and 15. Hydrate consistently." },
        { phase: "km 18–22", duration: "~36 min", desc: "Final 4km. You're a week fitter than last week's 21km. Hold the pace steady." },
      ],
      coachNote: "22km feels significant but your body is adapting. The extra km is deliberately small — strong finishes build confidence; blown-up finishes breed doubt. Practice the exact nutrition you'll use on race day.",
      keyFocus: ["Fuel at km 5, 10, 15", "Practice race-day nutrition exactly", "Note any chafing or discomfort to fix now", "52% of a marathon — past halfway!"],
    },
    treadmill: {
      overview: "22km on the treadmill — approximately 3 hours. Serious mental work. Plan entertainment in three blocks, fuel exactly as outdoor, and treat this like full race-day nutrition practice.",
      structure: [
        { phase: "km 1–5", duration: "at 7.1 km/h", desc: "1% incline, 7.1 km/h. Easy start." },
        { phase: "km 6–17", duration: "at 7.3–7.5 km/h", desc: "Increase to 7.3–7.5 km/h. Fuel at km 5, 10, 15. Drink every 2km." },
        { phase: "km 18–22", duration: "at 7.3 km/h", desc: "Hold steady to finish. Consistent and controlled." },
      ],
      coachNote: "3 hours on a treadmill is genuinely tough mentally. Treat it as a mental training session as much as a physical one. Change entertainment at km 7 and km 15. Having a visual countdown (km remaining) from km 15 helps the final stretch.",
      keyFocus: ["1% incline", "3 fuel stops: km 5, 10, 15", "Entertainment planned in three blocks", "7.3 km/h — keep it easy throughout"],
    },
  },

  long_23: {
    outdoor: {
      overview: "23km — the longest run of the Build phase and your longest ever. This proves your aerobic base is ready for peak training. A serious effort deserving serious preparation.",
      structure: [
        { phase: "km 1–5", duration: "~43 min at 8:30/km", desc: "Conservative start at 8:30/km. This is a long run." },
        { phase: "km 6–18", duration: "~104 min at 8:00/km", desc: "Long-run pace (8:00–8:15/km). Fuel at km 5, 10, 15. Hydrate every 20 minutes." },
        { phase: "km 19–23", duration: "~36 min", desc: "Final 4km. Acknowledge the fatigue — it's real. Shorten stride, increase cadence, keep moving. This is where mental strength is built." },
      ],
      coachNote: "You've now completed the Build phase. Weeks 7–13 have taken you from 16km to 23km long runs and through your first half marathon. Next phase is Peak. You are ready.",
      keyFocus: ["Fuel at km 5, 10, 15", "Run/walk from km 19 if needed", "At km 19: 'I've trained for this'", "Next week is a cutback — you've earned it"],
    },
    treadmill: {
      overview: "23km on the treadmill — your longest treadmill session. Over 3 hours of running. Mental preparation is as important as physical. Plan everything in advance.",
      structure: [
        { phase: "km 1–5", duration: "at 7.1 km/h", desc: "1% incline, 7.1 km/h. Easy start." },
        { phase: "km 6–18", duration: "at 7.3–7.5 km/h", desc: "Fuel at km 5, 10, 15. Drink every 2km. Change entertainment at km 8 and km 16." },
        { phase: "km 19–23", duration: "at 7.3 km/h", desc: "Hold steady. Run/walk if needed — step off the belt briefly, then back on." },
      ],
      coachNote: "23km on a treadmill is a mental milestone as much as a physical one. Use it to practise mental strategies you'll need on race day: breaking the remaining distance into small chunks, positive self-talk, breathing focus.",
      keyFocus: ["1% incline", "3 fuel stops: km 5, 10, 15", "Change entertainment at km 8 and km 16", "Run/walk is fine — keep moving"],
    },
  },

  long_25: {
    outdoor: {
      overview: "25km — territory that 99% of people will never run. This begins simulating late-marathon fatigue. Your body is learning to keep going when everything says stop — the most important adaptation in marathon training.",
      structure: [
        { phase: "km 1–5", duration: "~43 min at 8:30/km", desc: "Easy start. You're out here for 3.5+ hours. Start sensibly." },
        { phase: "km 6–20", duration: "~120 min at 8:00/km", desc: "Steady at 8:00–8:20/km. Fuel at km 5, 10, 15, and 20. Hydrate every 20 minutes. Don't let fuelling slip." },
        { phase: "km 21–25", duration: "~40 min", desc: "Final 5km will feel hard. This is deliberate. Shorten stride, increase cadence. One km at a time." },
      ],
      coachNote: "At km 20+, you'll hit the 'dark patch' — heavy legs, negotiating mind, doubt. Learning to keep moving through this is what separates finishers from DNFs. Today you're doing exactly that training.",
      keyFocus: ["4 fuel stops: km 5, 10, 15, 20", "Walk breaks are a strategy", "At km 20: 'I've trained for this exact moment'", "Don't look at total distance after km 22"],
    },
    treadmill: {
      overview: "25km on the treadmill — over 3.5 hours. This is as much a mental session as a physical one. Fuelling, entertainment, and mental strategies all need to be planned before you step on.",
      structure: [
        { phase: "km 1–5", duration: "at 7.1 km/h", desc: "1% incline, 7.1 km/h. Very easy start." },
        { phase: "km 6–20", duration: "at 7.3–7.5 km/h", desc: "Steady pace. Fuel at km 5, 10, 15, 20. Drink every 2km. Change entertainment every 6–7km." },
        { phase: "km 21–25", duration: "at 7.0–7.3 km/h", desc: "Slow slightly if needed — getting to km 25 matters more than pace here. Run/walk is completely fine." },
      ],
      coachNote: "Treadmill strategy for 25km: never look at the total remaining distance in the final 8km. Only look at the current km. Each km is its own goal. This mental strategy is exactly what you'll use at km 35 of the marathon.",
      keyFocus: ["1% incline", "4 fuel stops: km 5, 10, 15, 20", "Never look at total remaining after km 17", "Entertainment: plan 4–5 different items"],
    },
  },

  long_26: {
    outdoor: {
      overview: "26km — one of your peak long runs. After last week's 28km, this feels like a step back in distance but is still a serious effort. Your final major long run before the taper winds down. Make it count.",
      structure: [
        { phase: "km 1–6", duration: "~52 min at 8:30/km", desc: "Start at 8:45/km. Slower than usual. You're running 26km." },
        { phase: "km 7–21", duration: "~118 min at 8:00/km", desc: "Long-run pace (8:00–8:20/km). Fuel at km 5, 10, 15, 20. Hydrate constantly." },
        { phase: "km 22–26", duration: "~38 min", desc: "Final 4km. Your training is nearly complete. Hold pace or walk-run — but keep moving." },
      ],
      coachNote: "After this run, taper begins. These 26km are putting the final coat of paint on a building you've spent 17 weeks constructing. Don't rush the finish — enjoy this long run. It's one of your last big ones.",
      keyFocus: ["Fuel every 45 minutes", "Think about race day in the final 5km", "Run/walk from km 20 — smart strategy", "Taper starts next week — the hard work is almost done"],
    },
    treadmill: {
      overview: "26km on the treadmill — your second-longest treadmill session. Same approach as outdoor: fuel every 45 minutes, keep effort easy, break it into mental segments.",
      structure: [
        { phase: "km 1–6", duration: "at 7.0 km/h", desc: "1% incline, 7.0 km/h. Slow and easy start." },
        { phase: "km 7–21", duration: "at 7.3–7.5 km/h", desc: "Fuel at km 5, 10, 15, 20. Drink every 2km. Change entertainment at km 9 and km 18." },
        { phase: "km 22–26", duration: "at 7.0–7.3 km/h", desc: "Hold steady or slow slightly. Getting to 26km is the goal." },
      ],
      coachNote: "26km is your last major long run. After this, the taper begins and the distances drop significantly. Treat this one with respect — fuel well, start slow, and finish knowing you've done everything required to run a marathon.",
      keyFocus: ["1% incline throughout", "4 fuel stops: km 5, 10, 15, 20", "This is your last major long run before taper", "Entertainment: plan 4 different items"],
    },
  },

  long_28: {
    outdoor: {
      overview: "🏔️ 28km — the longest run of the entire plan. Your absolute peak. Nothing about today is easy. This is the closest you'll get to marathon conditions before race day. Completing it proves you are ready.",
      structure: [
        { phase: "km 1–6", duration: "~54 min at 8:45/km", desc: "Start at 8:45/km. Non-negotiable. You're running 28km and every second going too fast in the first 6km costs you double in the final 6km." },
        { phase: "km 7–22", duration: "~130 min at 8:00/km", desc: "Settle at 8:00–8:30/km. Fuel at km 6, 11, 16, 21. Water at every opportunity. Talk to yourself if needed." },
        { phase: "km 23–28", duration: "~50 min", desc: "The final 6km. Everything hurts. Your form is breaking down. This is the point. Keep cadence up, shorten stride, pump arms, move forward. One km at a time." },
      ],
      coachNote: "28km is the magic number in marathon training. After today, trust completely that your body knows how to cover 42km. The extra 14km on race day comes from your taper, carb-loading, adrenaline, and the crowd. You've done the work.",
      keyFocus: ["5 fuel stops: km 6, 11, 16, 21 — non-negotiable", "Run/walk from km 20 — experienced marathoners do this", "Celebrate every km beyond 21", "This is your peak — everything after this is recovery toward race day 💪"],
    },
    treadmill: {
      overview: "🏔️ 28km on the treadmill — your longest ever training run. Nearly 4 hours on a belt. This is as much about mental toughness as physical endurance. Prepare everything in advance.",
      structure: [
        { phase: "km 1–6", duration: "at 7.0 km/h", desc: "1% incline, 7.0 km/h. Slowest start of any run. You have 22km still to go after this section." },
        { phase: "km 7–22", duration: "at 7.3–7.5 km/h", desc: "Fuel at km 6, 11, 16, 21. Drink every 2km. Change entertainment at km 7, 14, and 21. Step off briefly to take gels if needed." },
        { phase: "km 23–28", duration: "at 7.0–7.3 km/h", desc: "Final 6km. Slow down if needed — getting to 28km is what matters. Run/walk every 2km if needed." },
      ],
      coachNote: "28km on a treadmill is an extraordinary mental achievement. Treadmill strategy: cover the display completely after km 20. Set a timer for every 5 minutes. When the timer goes off, check your distance, reset the timer, and focus only on the next 5 minutes. This is the only way to survive km 20–28 mentally.",
      keyFocus: ["1% incline", "5 fuel stops: km 6, 11, 16, 21", "Cover display after km 20 — use a timer instead", "Entertainment: 5+ items, change every 6km"],
    },
  },

  taper_20: {
    outdoor: {
      overview: "First taper long run at 20km. Volume drops but aerobic stimulus remains. This run should feel noticeably easier than your recent 26–28km runs — that freshness is your 17 weeks of fitness showing.",
      structure: [
        { phase: "km 1–4", duration: "~34 min at 8:30/km", desc: "Easy start. Let yourself feel good — you've earned it." },
        { phase: "km 5–16", duration: "~96 min at 8:00/km", desc: "Long-run pace (8:00–8:15/km). Fuel at km 5 and 10. Notice how much fresher you feel at the same pace." },
        { phase: "km 17–20", duration: "~30 min", desc: "Easy finish. Focus on smooth, relaxed form. This is your feel-good long run." },
      ],
      coachNote: "Taper long runs cause anxiety — they feel too short, too easy. That feeling is exactly right. You've done the hard work. Resist the urge to add kilometres — it only delays recovery.",
      keyFocus: ["Easy effort — enjoy the freshness", "Fuel at km 5 and 10", "Visualise your race-day route", "Save everything — race day is 2 weeks away"],
    },
    treadmill: {
      overview: "20km taper long run on the treadmill. Easier than your recent weeks — enjoy the relative lightness. Fuel and hydrate as normal but notice how much better you feel.",
      structure: [
        { phase: "km 1–4", duration: "at 7.1 km/h", desc: "1% incline, 7.1 km/h. Easy start." },
        { phase: "km 5–16", duration: "at 7.3–7.5 km/h", desc: "Fuel at km 5 and 10. Enjoy the fresher legs." },
        { phase: "km 17–20", duration: "at 7.3 km/h", desc: "Easy finish. Relaxed and controlled." },
      ],
      coachNote: "20km will feel surprisingly manageable after your 26–28km weeks. That's your taper working. Enjoy the session — it's one of the last long ones before race day.",
      keyFocus: ["1% incline", "Fuel at km 5 and 10", "Notice how good your legs feel — that's your fitness", "Race day is 2 weeks away"],
    },
  },

  taper_14: {
    outdoor: {
      overview: "Final taper long run at 14km — deliberately short to maximise freshness for race day. This run is about confidence, not fitness. You already have the fitness.",
      structure: [
        { phase: "km 1–3", duration: "~26 min at 8:30/km", desc: "Easy jog. Smile — you're nearly there." },
        { phase: "km 4–11", duration: "~64 min at 8:00/km", desc: "Easy long-run pace. Fuel once at km 5. Mostly just enjoy the run and feel how strong you are." },
        { phase: "km 12–14", duration: "~22 min", desc: "Easy finish. Feel strong. You're going to be ready on race day." },
      ],
      coachNote: "If this run feels embarrassingly short compared to what you've been doing — perfect. That means you're tapering correctly. Trust the process.",
      keyFocus: ["Easy effort — genuinely", "Feel how strong your legs are", "Visualise crossing the finish line", "Race week is 7 days away. You are ready. 🏁"],
    },
    treadmill: {
      overview: "14km taper long run on the treadmill. Short, easy, confidence-building. Get on, run 14km at easy pace, get off. Simple.",
      structure: [
        { phase: "km 1–3", duration: "at 7.1 km/h", desc: "1% incline, 7.1 km/h. Easy start." },
        { phase: "km 4–11", duration: "at 7.3–7.5 km/h", desc: "Easy pace. Fuel at km 5 if warm. Enjoy how easy this feels." },
        { phase: "km 12–14", duration: "at 7.3 km/h", desc: "Easy finish." },
      ],
      coachNote: "14km on a treadmill should take about 1 hour 55 minutes. One podcast episode and you're nearly done. This is your last long run. Race week starts in 7 days.",
      keyFocus: ["1% incline", "Easy pace — 7.3–7.5 km/h", "Last long run before the marathon", "You are ready 🏁"],
    },
  },

  shakeout: {
    outdoor: {
      overview: "A pre-race shakeout — keeping your legs loose and your mind calm before the marathon. 10% physical, 90% psychological. The goal is to burn off nervous energy and confirm your legs are ready.",
      structure: [
        { phase: "Easy Jog", duration: "4 km at 9:00/km", desc: "Very gentle jog — slower than easy pace. Just get the blood moving. Nothing more." },
        { phase: "4×100m Strides", duration: "~30 sec each", desc: "4 short, controlled accelerations over 100m. Not sprinting — just opening up the legs. Walk 30 seconds between each." },
        { phase: "Walk", duration: "5 min", desc: "Calm walk with deep breathing. Visualise your race plan: start pace, fuel stops, the finish line." },
      ],
      coachNote: "The shakeout is 100% psychological. Tomorrow is your marathon. Getting out today confirms your legs are ready, burns the anxious energy, and gives your mind something useful to do. Go easy, keep it short, sleep early tonight.",
      keyFocus: ["Very easy — slower than easy", "4 short strides to open the legs", "Visualise your race plan calmly", "Lay out all your gear tonight 🛌"],
    },
    treadmill: {
      overview: "Pre-race shakeout on the treadmill. Perfectly fine to do this indoors — the goal is just to move the legs gently and calm the nerves. Keep it very short and easy.",
      structure: [
        { phase: "Easy Jog", duration: "4 km at 6.7 km/h", desc: "Treadmill at 1% incline, 6.7 km/h. Very gentle. Just movement." },
        { phase: "4×20s Pick-ups", duration: "at 9 km/h", desc: "Increase to 9 km/h for 20 seconds, then back to 6.7 km/h. Repeat 4 times. Just waking up the fast-twitch fibres gently." },
        { phase: "5 min walk", duration: "at 4.5 km/h", desc: "Step off and walk. Deep breaths. Everything is ready." },
      ],
      coachNote: "Treadmill shakeout is totally fine the day before a marathon. The venue doesn't matter — what matters is moving gently, calming your mind, and getting home to rest. Race day is tomorrow.",
      keyFocus: ["6.7 km/h — very easy", "4 short pick-ups at 9 km/h", "1% incline", "Get home, lay out your kit, sleep 🛌"],
    },
  },

  rest_day: {
    outdoor: {
      overview: "Full rest day — and rest days are not optional. They are when your body actually becomes stronger. Training creates the stimulus; rest creates the adaptation. Without rest, you're just accumulating fatigue.",
      structure: [
        { phase: "Morning", duration: "10–15 min foam roll", desc: "Foam roll for 10–15 minutes: calves (most important, 90s each), glutes (90s each side), IT band (side of thigh, 60s each), quads (60s each)." },
        { phase: "Afternoon", duration: "10–15 min walk", desc: "A short, easy walk is fine and beneficial. Keep blood circulating without loading joints. This is the maximum effort for today." },
        { phase: "Evening", duration: "8+ hours sleep", desc: "Prioritise sleep above everything. Human growth hormone peaks during deep sleep — this is literally when your muscle fibres rebuild stronger. 8+ hours." },
      ],
      coachNote: "Skipping rest days is one of the most common marathon training mistakes. Every quality session requires recovery to become fitness. Without rest, training just makes you more tired. Protect these days.",
      keyFocus: ["No running — full stop", "Foam roll 10–15 minutes", "Hydrate well — aim for 2.5–3L of water", "Sleep 8+ hours — this is where you get fitter"],
    },
    treadmill: {
      overview: "Rest day — the treadmill stays off today. This is not a treadmill session. Your body needs rest to convert training into fitness.",
      structure: [
        { phase: "Morning", duration: "10–15 min foam roll", desc: "Foam roll: calves, glutes, IT band, quads. 60–90 seconds each area." },
        { phase: "Day", duration: "Light walking only", desc: "A 10–15 minute walk is fine. No running. No treadmill." },
        { phase: "Evening", duration: "8+ hours sleep", desc: "Sleep is training. 8+ hours minimum." },
      ],
      coachNote: "Rest day means rest — not treadmill, not 'just a short easy run.' Your body is rebuilding right now. Trust the process.",
      keyFocus: ["No running — no exceptions", "Foam roll and stretch", "Stay hydrated", "Sleep 8+ hours"],
    },
  },

  race_day: {
    outdoor: {
      overview: "🏆 RACE DAY — 42.2km. Everything for 20 weeks has been building to this single morning. You've run 28km in training. You've done 7km tempo runs. You've completed intervals in the dark. Today, you are a marathon runner.",
      structure: [
        { phase: "km 1–10", duration: "~83 min at 8:15–8:30/km", desc: "START SLOW. 8:15–8:30/km. The crowd and adrenaline will push you faster. Resist it with everything. The first 10km should feel embarrassingly easy. You are storing energy for later." },
        { phase: "km 11–30", duration: "~163 min at 8:00–8:15/km", desc: "Your race pace (8:00–8:15/km). Fuel every 5km starting at km 5. Run your own race — not anyone else's. Stay disciplined, stay patient." },
        { phase: "km 31–42.2", duration: "~95 min", desc: "Uncharted territory. Training goes to 28km — the final 14.2km is primarily mental. Shorten stride, lift knees, pump arms. Walk if needed. But keep moving forward. You WILL finish." },
      ],
      coachNote: "You've trained for this. Every 4am start, every interval, every Sunday long run when you didn't feel like it — it all compounds into today. Start easy, fuel consistently, and when the dark patch hits between km 32–37, remember: you ran 28km in training. You know this feeling. You trained through it. Now race through it. 🏅",
      keyFocus: ["SLOW START — 8:15–8:30/km for first 10km, no exceptions", "Fuel every 5km from km 5 onwards — set a watch reminder", "Walk every water station — drink then run", "Km 35: pump your arms — your legs will follow", "SMILE at km 40 — you are about to become a marathon finisher"],
    },
    treadmill: {
      overview: "Race day is outdoors — this is not a treadmill session. Go run your marathon. 20 weeks of training has prepared you for this exact moment.",
      structure: [
        { phase: "km 1–10", duration: "Start easy", desc: "8:15–8:30/km. Slow start. The crowd will push you — resist." },
        { phase: "km 11–30", duration: "Race pace", desc: "8:00–8:15/km. Fuel every 5km. Stay disciplined." },
        { phase: "km 31–42.2", duration: "Finish strong", desc: "Pump arms, shorten stride, keep moving. You trained for this." },
      ],
      coachNote: "Race day is outside — on real roads, with real crowds, and real atmosphere. All 20 weeks of training was for this. Go run your marathon. 🏅",
      keyFocus: ["Slow start — 8:15/km for first 10km", "Fuel every 5km", "Walk water stations", "Pump arms in the final 10km"],
    },
  },
};

// Smart lookup — passes the full run object so descriptions can include exact rep counts
export function getRunDetail(run, weekNum, mode = 'outdoor') {
  let detail;

  if (run.type === "rest") {
    detail = RUN_DETAILS.rest_day;
  } else if (run.title.includes("MARATHON DAY")) {
    detail = RUN_DETAILS.race_day;
  } else if (run.title.toLowerCase().includes("shakeout")) {
    detail = RUN_DETAILS.shakeout;
  } else if (run.type === "long") {
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
  } else if (run.title.toLowerCase().includes("recovery")) {
    detail = RUN_DETAILS.recovery_default;
  } else {
    detail = RUN_DETAILS.easy_default;
  }

  // Get the mode variant — some details have dynamic functions
  const variant = detail[mode] || detail['outdoor'];

  // If it's a function (dynamic interval details), call it with the run
  if (typeof variant === 'function') return variant(run);
  return variant;
}

export const PLAN = [
  { week: 1, phase: "Base Building", runs: [
    { day: "Tue", type: "easy", title: "Easy Run", distance: 5, notes: "Stay fully conversational. Run/walk if needed." },
    { day: "Thu", type: "easy", title: "Easy Run", distance: 6, notes: "Focus on breathing rhythm, not speed." },
    { day: "Fri", type: "easy", title: "Recovery Run", distance: 4, notes: "Very easy pace. This is active recovery." },
    { day: "Sun", type: "long", title: "Long Run", distance: 10, notes: "Your base long run. Easy effort throughout." },
  ]},
  { week: 2, phase: "Base Building", runs: [
    { day: "Tue", type: "easy", title: "Easy Run", distance: 6, notes: "Comfortable aerobic effort." },
    { day: "Thu", type: "interval", title: "Intervals", distance: 6, notes: "6×400m at 5:30/km, 90s rest between each rep." },
    { day: "Fri", type: "easy", title: "Recovery Run", distance: 5, notes: "Very easy after intervals." },
    { day: "Sun", type: "long", title: "Long Run", distance: 11, notes: "Add 1km — maintain easy effort." },
  ]},
  { week: 3, phase: "Base Building", runs: [
    { day: "Tue", type: "easy", title: "Easy Run", distance: 6, notes: "Relaxed effort." },
    { day: "Thu", type: "tempo", title: "Tempo Run", distance: 7, notes: "2km warm-up, 3km at tempo pace (6:15/km), 2km cool-down." },
    { day: "Fri", type: "easy", title: "Easy Run", distance: 5, notes: "Light legs. No hard effort." },
    { day: "Sun", type: "long", title: "Long Run", distance: 12, notes: "Focus on time on feet, not speed." },
  ]},
  { week: 4, phase: "Base Building", runs: [
    { day: "Tue", type: "easy", title: "Easy Run", distance: 7, notes: "Steady aerobic run." },
    { day: "Thu", type: "interval", title: "Intervals", distance: 7, notes: "5×800m at 5:45/km, 2 min rest between each rep." },
    { day: "Fri", type: "easy", title: "Recovery Run", distance: 5, notes: "Easy shakeout run." },
    { day: "Sun", type: "long", title: "Long Run", distance: 14, notes: "First bigger jump — trust the training." },
  ]},
  { week: 5, phase: "Base Building", runs: [
    { day: "Tue", type: "easy", title: "Easy Run", distance: 7, notes: "Building aerobic capacity steadily." },
    { day: "Thu", type: "tempo", title: "Tempo Run", distance: 8, notes: "2km warm-up, 4km tempo (6:10/km), 2km cool-down." },
    { day: "Fri", type: "easy", title: "Recovery Run", distance: 5, notes: "Easy and relaxed." },
    { day: "Sun", type: "long", title: "Long Run", distance: 15, notes: "Stay patient. Fuel and hydrate well." },
  ]},
  { week: 6, phase: "Base Building", runs: [
    { day: "Tue", type: "easy", title: "Easy Run", distance: 6, notes: "CUTBACK WEEK — back off volume to recover." },
    { day: "Thu", type: "easy", title: "Easy Run", distance: 6, notes: "Keep it light and easy." },
    { day: "Fri", type: "easy", title: "Easy Run", distance: 4, notes: "Short and easy." },
    { day: "Sun", type: "long", title: "Long Run", distance: 12, notes: "CUTBACK — reduced to absorb the last 5 weeks." },
  ]},
  { week: 7, phase: "Build", runs: [
    { day: "Tue", type: "easy", title: "Easy Run", distance: 7, notes: "Settle into the build phase." },
    { day: "Thu", type: "interval", title: "Intervals", distance: 8, notes: "6×800m at 5:45/km, 90s rest between each rep." },
    { day: "Fri", type: "easy", title: "Recovery Run", distance: 6, notes: "Flush out the legs from intervals." },
    { day: "Sun", type: "long", title: "Long Run", distance: 16, notes: "First 16km — settle into long-run mode." },
  ]},
  { week: 8, phase: "Build", runs: [
    { day: "Tue", type: "easy", title: "Easy Run", distance: 8, notes: "Comfortable aerobic effort." },
    { day: "Thu", type: "tempo", title: "Tempo Run", distance: 9, notes: "2km warm-up, 5km at tempo (6:05/km), 2km cool-down." },
    { day: "Fri", type: "easy", title: "Recovery Run", distance: 6, notes: "Easy recovery run." },
    { day: "Sun", type: "long", title: "Long Run", distance: 18, notes: "New longest run! Easy and consistent pace." },
  ]},
  { week: 9, phase: "Build", runs: [
    { day: "Tue", type: "easy", title: "Easy Run", distance: 8, notes: "Strong aerobic base run." },
    { day: "Thu", type: "interval", title: "Intervals", distance: 9, notes: "4×1km at 5:45/km, 2 min rest between each rep." },
    { day: "Fri", type: "easy", title: "Recovery Run", distance: 6, notes: "Easy recovery." },
    { day: "Sun", type: "long", title: "Long Run", distance: 19, notes: "Stay steady. Fuel every 45 mins." },
  ]},
  { week: 10, phase: "Build", runs: [
    { day: "Tue", type: "easy", title: "Easy Run", distance: 6, notes: "CUTBACK WEEK — let the body absorb training." },
    { day: "Thu", type: "easy", title: "Easy Run", distance: 6, notes: "Light effort." },
    { day: "Fri", type: "easy", title: "Easy Run", distance: 5, notes: "Shakeout run." },
    { day: "Sun", type: "long", title: "Long Run", distance: 14, notes: "CUTBACK — reduced long run for recovery." },
  ]},
  { week: 11, phase: "Build", runs: [
    { day: "Tue", type: "easy", title: "Easy Run", distance: 8, notes: "Back into it feeling fresh." },
    { day: "Thu", type: "tempo", title: "Tempo Run", distance: 10, notes: "2km warm-up, 6km tempo (6:00/km), 2km cool-down." },
    { day: "Fri", type: "easy", title: "Recovery Run", distance: 6, notes: "Easy recovery." },
    { day: "Sun", type: "long", title: "Long Run", distance: 21, notes: "Half marathon distance! A huge milestone 🎉" },
  ]},
  { week: 12, phase: "Build", runs: [
    { day: "Tue", type: "easy", title: "Easy Run", distance: 9, notes: "Comfortable after the 21km milestone." },
    { day: "Thu", type: "interval", title: "Intervals", distance: 10, notes: "5×1km at 5:40/km, 90s rest between each rep." },
    { day: "Fri", type: "easy", title: "Recovery Run", distance: 6, notes: "Easy and controlled." },
    { day: "Sun", type: "long", title: "Long Run", distance: 22, notes: "One km beyond half marathon. Fuel and hydrate." },
  ]},
  { week: 13, phase: "Build", runs: [
    { day: "Tue", type: "easy", title: "Easy Run", distance: 8, notes: "Final build week before peak phase." },
    { day: "Thu", type: "tempo", title: "Tempo Run", distance: 11, notes: "2km warm-up, 7km at tempo (5:55/km), 2km cool-down." },
    { day: "Fri", type: "easy", title: "Recovery Run", distance: 7, notes: "Easy aerobic run." },
    { day: "Sun", type: "long", title: "Long Run", distance: 23, notes: "Longest build run yet. Respect the distance." },
  ]},
  { week: 14, phase: "Peak", runs: [
    { day: "Tue", type: "easy", title: "Easy Run", distance: 8, notes: "CUTBACK WEEK — crucial before peak phase." },
    { day: "Thu", type: "easy", title: "Easy Run", distance: 7, notes: "Light effort." },
    { day: "Fri", type: "easy", title: "Easy Run", distance: 5, notes: "Very easy." },
    { day: "Sun", type: "long", title: "Long Run", distance: 16, notes: "CUTBACK — feel the freshness return." },
  ]},
  { week: 15, phase: "Peak", runs: [
    { day: "Tue", type: "easy", title: "Easy Run", distance: 9, notes: "Peak phase begins." },
    { day: "Thu", type: "interval", title: "Intervals", distance: 11, notes: "4×1.5km at 5:50/km, 2 min rest between each rep." },
    { day: "Fri", type: "easy", title: "Recovery Run", distance: 7, notes: "Easy and controlled." },
    { day: "Sun", type: "long", title: "Long Run", distance: 25, notes: "Trust the process. Easy effort, walk breaks OK." },
  ]},
  { week: 16, phase: "Peak", runs: [
    { day: "Tue", type: "easy", title: "Easy Run", distance: 9, notes: "Building to peak long run." },
    { day: "Thu", type: "tempo", title: "Tempo Run", distance: 11, notes: "2km warm-up, 7km at tempo (5:55/km), 2km cool-down." },
    { day: "Fri", type: "easy", title: "Recovery Run", distance: 7, notes: "Easy aerobic run." },
    { day: "Sun", type: "long", title: "Long Run", distance: 28, notes: "🏔️ Longest run of the plan! Celebrate this milestone." },
  ]},
  { week: 17, phase: "Peak", runs: [
    { day: "Tue", type: "easy", title: "Easy Run", distance: 9, notes: "Peak week — keep quality up." },
    { day: "Thu", type: "interval", title: "Intervals", distance: 10, notes: "4×1.5km at 5:50/km, 2 min rest between each rep." },
    { day: "Fri", type: "easy", title: "Recovery Run", distance: 7, notes: "Easy and relaxed." },
    { day: "Sun", type: "long", title: "Long Run", distance: 26, notes: "Last big long run. Run easy — save legs for taper." },
  ]},
  { week: 18, phase: "Taper", runs: [
    { day: "Tue", type: "easy", title: "Easy Run", distance: 7, notes: "TAPER BEGINS — reduce volume, keep sharpness." },
    { day: "Thu", type: "tempo", title: "Short Tempo", distance: 8, notes: "2km warm-up, 4km tempo, 2km cool-down. Stay sharp." },
    { day: "Fri", type: "easy", title: "Easy Run", distance: 5, notes: "Light legs." },
    { day: "Sun", type: "long", title: "Long Run", distance: 20, notes: "Taper long run — enjoy the lighter load." },
  ]},
  { week: 19, phase: "Taper", runs: [
    { day: "Tue", type: "easy", title: "Easy Run", distance: 6, notes: "Feel the freshness building — completely normal." },
    { day: "Thu", type: "interval", title: "Short Intervals", distance: 7, notes: "4×400m at 5:30/km, 2 min rest between each rep." },
    { day: "Fri", type: "easy", title: "Easy Run", distance: 4, notes: "Very easy shakeout." },
    { day: "Sun", type: "long", title: "Long Run", distance: 14, notes: "Easy, confidence-building run. Enjoy feeling good!" },
  ]},
  { week: 20, phase: "Race Week 🏁", runs: [
    { day: "Tue", type: "easy", title: "Easy Run", distance: 5, notes: "Light and easy. Lay out gear, check your kit." },
    { day: "Thu", type: "easy", title: "Easy Shakeout", distance: 4, notes: "4×100m strides at the end. Stay loose." },
    { day: "Fri", type: "rest", title: "Rest Day", distance: 0, notes: "Full rest. Sleep early. Carb-load dinner tonight." },
    { day: "Sun", type: "long", title: "🏆 MARATHON DAY", distance: 42.2, notes: "GO TIME. Start easy (8:15/km). Run your own race. You've earned every step." },
  ]},
];