export const PACE_ZONES = {
  easy:     { label: "Easy",      color: "#4CAF7D", bg: "#0E1F16", border: "#4CAF7D33", paceRange: "7:30–8:30 /km", effort: "4/10", heartRate: "60–70% max HR" },
  tempo:    { label: "Tempo",     color: "#F59E0B", bg: "#1F180A", border: "#F59E0B33", paceRange: "6:00–6:30 /km", effort: "7/10", heartRate: "80–90% max HR" },
  interval: { label: "Interval",  color: "#EF4444", bg: "#1F0E0E", border: "#EF444433", paceRange: "5:30–6:00 /km", effort: "9/10", heartRate: "90–95% max HR" },
  long:     { label: "Long Run",  color: "#818CF8", bg: "#0E0E1F", border: "#818CF833", paceRange: "7:45–8:45 /km", effort: "5/10", heartRate: "65–75% max HR" },
  rest:     { label: "Rest Day",  color: "#6B7280", bg: "#121218", border: "#2A2A3A",   paceRange: "—",             effort: "—",    heartRate: "—" },
};

export const PHASE_COLORS = {
  "Base Building": "#4CAF7D",
  "Build":         "#F59E0B",
  "Peak":          "#EF4444",
  "Taper":         "#818CF8",
  "Race Week 🏁":  "#EC4899",
};

export const RUN_DETAILS = {
  easy_default: {
    overview: "An easy aerobic run at a comfortable, conversational pace. This is the foundation of your marathon training — building your aerobic engine without accumulating fatigue. Around 80% of your total training should be at this effort.",
    structure: [
      { phase: "Warm-Up", duration: "5 min walk/jog", desc: "Start with a brisk 2-minute walk, then ease into a very gentle jog. Let your heart rate rise naturally — no rushing." },
      { phase: "Main Run", duration: "Run distance", desc: "Run at an easy, conversational pace (7:30–8:30/km). You should be able to speak full sentences without gasping. If you can't, slow down." },
      { phase: "Cool-Down", duration: "5 min walk", desc: "Walk the final 5 minutes. Follow up with light calf stretches, quad stretches, and hip flexor holds for 30 seconds each." },
    ],
    coachNote: "If you feel the urge to go faster — resist it. Easy runs are supposed to feel almost too easy. The science is clear: running slower on easy days means you can run harder on hard days, and that's where the real improvement happens.",
    keyFocus: ["Stay fully conversational throughout", "Relax your shoulders — drop them away from your ears", "Short, light strides — don't overstride", "Breathe in through nose, out through mouth if possible"],
  },
  recovery_default: {
    overview: "A very short, very easy run designed purely to flush out lactic acid and promote blood flow to tired muscles from yesterday's quality session. This isn't about fitness — it's about accelerating recovery so you're ready for Sunday's long run.",
    structure: [
      { phase: "Walk", duration: "3 min", desc: "Start walking briskly to get the blood moving before any jogging begins." },
      { phase: "Recovery Run", duration: "Full distance", desc: "Jog at the slowest pace that still counts as running. Even 9:00–9:30/km is perfectly fine. Movement is the goal, not pace." },
      { phase: "Cool-Down + Mobility", duration: "8 min", desc: "Walk 3 minutes then do: leg swings (10 each leg), hip circles (10 each), calf raises (15), and standing quad stretch (30s each side)." },
    ],
    coachNote: "Recovery runs should feel almost embarrassingly slow. If anyone you know sees you, they might be confused — and that's correct. Your legs are tired from yesterday. This run helps them bounce back faster than total rest. Don't let pride push the pace up.",
    keyFocus: ["Slower than easy pace — genuinely", "No ego — today is about recovery, not performance", "Focus on smooth, relaxed form", "Keep it short — finishing is the only goal"],
  },
  interval_400: {
    overview: "Short, sharp 400m repetitions to develop your running economy and introduce your legs to faster paces. These build raw speed that translates directly into a stronger marathon pace and better efficiency at all speeds.",
    structure: [
      { phase: "Warm-Up", duration: "10 min easy jog", desc: "Easy jog at 8:00/km, then finish with 4×20-second acceleration strides — short pick-ups where you smoothly accelerate for 20 seconds. Walk 30s between each stride." },
      { phase: "6×400m Reps", duration: "~2:10 each", desc: "Run 400m (one loop of a track, or 400m on GPS watch) at 5:30/km — this should feel hard but not all-out. Recover with 90 seconds of walking or very easy jogging between each rep. Complete all 6 reps." },
      { phase: "Cool-Down", duration: "10 min easy jog", desc: "Drop pace back to 8:30/km and jog easily for 10 minutes. Walk the final 2 minutes. Stretch calves and quads after." },
    ],
    coachNote: "Each rep should feel the same — don't go out too hard on rep 1. If your 5th rep is significantly slower than your 1st, you started too fast. Aim for even splits across all 6 reps. Consistency here beats heroics every time.",
    keyFocus: ["Even effort across all 6 reps", "90 seconds full recovery — don't cheat this", "Drive your arms at the elbows — arms drive legs", "Stay tall — don't hunch forward when tired"],
  },
  interval_800: {
    overview: "800m repetitions are the classic marathon builder. They develop your lactate threshold and teach your body to sustain harder efforts for longer — which directly translates to a faster, more comfortable marathon pace on race day.",
    structure: [
      { phase: "Warm-Up", duration: "10 min easy + strides", desc: "Easy 8-minute jog, then 4×20-second strides with 30s walk between each. Your legs should feel ready to run but not tired." },
      { phase: "800m Reps", duration: "~4:35 each", desc: "Run 800m at 5:45/km. This should feel like a 7/10 effort — hard enough that you couldn't keep it up for 5km, but controlled enough to maintain good form. Take 2 full minutes recovery (walk or stand) between each rep." },
      { phase: "Cool-Down", duration: "10 min easy jog", desc: "Crucial — don't skip this. Easy jog at 8:30/km to flush lactic acid. This directly reduces soreness tomorrow and speeds your recovery." },
    ],
    coachNote: "800m reps at this pace are the bread and butter of marathon training. You're not sprinting — you're running at a pace that makes you work but doesn't destroy you. Think of each rep as a deposit in the bank. You'll withdraw them on race day.",
    keyFocus: ["Controlled hard effort — not a sprint", "Full 2-minute rest between every rep", "Maintain form even when you feel fatigued", "Count your breaths to stay in rhythm: try 2 steps in, 2 steps out"],
  },
  interval_1km: {
    overview: "1km repetitions at close to your 10K race pace. These longer reps build the aerobic power and mental toughness required for the final 10km of the marathon — the part that separates those who trained smart from those who didn't.",
    structure: [
      { phase: "Warm-Up", duration: "12 min easy + drills", desc: "10 minutes easy jog, then 2 minutes of dynamic drills: high knees (30s), butt kicks (30s), lateral shuffles (30s), and 3 acceleration strides." },
      { phase: "1km Reps", duration: "~5:43 each", desc: "Run 1km at 5:40–5:45/km — comfortably hard but controlled. You should be working but not gasping. Take 90 seconds easy jog recovery between each rep." },
      { phase: "Cool-Down", duration: "10 min easy + stretch", desc: "Easy jog back at 8:30/km. When you get home: foam roll your calves, IT band (side of thigh), and glutes. These sessions cause soreness if not rolled out." },
    ],
    coachNote: "1km reps are where marathon training gets serious. Each one builds your mental library of 'I've done hard things before.' That mental library will be opened repeatedly between km 30 and 42 on race day. Every rep you complete is a deposit.",
    keyFocus: ["5:40–5:45/km target — use GPS", "Relax your shoulders and jaw at halfway", "90s easy jog recovery — not walking", "Visualise race day on the last rep — you're training your mind too"],
  },
  interval_1k5: {
    overview: "Longer 1.5km reps that bridge the gap between speed work and tempo. These build your ability to hold strong, sustained effort — the exact quality needed between km 30 and 40 of the marathon when your body wants to stop but your training says keep going.",
    structure: [
      { phase: "Warm-Up", duration: "12 min easy + strides", desc: "10 min easy jog, then 4 acceleration strides over 100m each. Get your legs turning over before the reps start." },
      { phase: "4×1.5km Reps", duration: "~8:45 each", desc: "Run 1.5km at 5:50/km. This is a serious session — 6km of total quality running. Take 2 full minutes recovery between each rep. Don't rush the rest." },
      { phase: "Cool-Down", duration: "12 min easy + walk", desc: "Extended cool-down jog at 8:30/km, then 5 minutes walking. Hydrate and eat something with carbs and protein within 30 minutes." },
    ],
    coachNote: "This is one of the peak quality sessions of the plan. It's supposed to feel genuinely hard. If you nail these 4 reps, race day will feel manageable by comparison. This session is a confidence builder — refer back to it when your legs hurt at km 35.",
    keyFocus: ["Consistent 5:50/km across all 4 reps", "Full 2-minute recovery — critical for quality", "Stay mentally strong on rep 3 and 4", "This is your biggest single confidence builder in the plan"],
  },
  tempo_3k: {
    overview: "Your first tempo run — introducing the concept of 'comfortably hard' running. Tempo pace sits right at your lactate threshold: the fastest pace your body can sustain while still clearing the lactic acid it produces. Training here pushes that threshold higher over time.",
    structure: [
      { phase: "Warm-Up", duration: "2 km at easy pace", desc: "Easy jog at 8:00/km for 2 full kilometres. Don't rush — you need your body fully transitioned from rest to effort before the tempo block begins." },
      { phase: "Tempo Block", duration: "3 km at 6:15/km", desc: "Run 3km at 6:15/km. This should feel 'comfortably hard' — you can say 3–4 words at a time but cannot hold a full conversation. Hold the pace absolutely steady — don't let it creep faster." },
      { phase: "Cool-Down", duration: "2 km at easy pace", desc: "Drop immediately back to easy jog (8:00/km) for 2km. Don't stop suddenly — the cool-down removes lactic acid from your bloodstream efficiently." },
    ],
    coachNote: "This is your first time running at lactate threshold. It will feel strange — harder than easy but not as hard as you might expect. Over the next 20 weeks, the same 6:15/km pace will feel progressively easier. That measurable progress is your marathon fitness being built brick by brick.",
    keyFocus: ["6:15/km — steady and controlled", "Controlled breathing — not gasping", "Full warm-up and cool-down are not optional", "If it feels genuinely hard, it's working"],
  },
  tempo_4k: {
    overview: "A progressive tempo run with a longer sustained block. The goal is sustained discomfort — teaching your body to clear lactate efficiently at a sub-marathon pace. Each tempo run you complete nudges your threshold slightly higher.",
    structure: [
      { phase: "Warm-Up", duration: "2 km easy", desc: "Easy jog at 8:00/km." },
      { phase: "Tempo Block", duration: "4 km at 6:10/km", desc: "4km at 6:10/km — slightly faster than week 3. The extra kilometre and fractionally faster pace create a new stimulus. Aim for perfectly even splits: kilometre 4 should be the same pace as kilometre 1." },
      { phase: "Cool-Down", duration: "2 km easy", desc: "Easy jog at 8:30/km back to your starting point." },
    ],
    coachNote: "Notice that this week's tempo is at 6:10/km versus last time's 6:15/km. That 5-second difference is meaningful over 4km. Your body is adapting — lean into it. Aim for negative splits: make the second half fractionally faster than the first.",
    keyFocus: ["Negative splits: 2nd half slightly faster than 1st", "Cadence focus — aim for 170+ steps per minute", "Check your form at the halfway mark", "One phrase per breath = you're at the right effort"],
  },
  tempo_5k: {
    overview: "A landmark session — your first 5km of sustained tempo running. This is approximately 30 minutes at threshold. Completing this session is a genuine indicator of developing marathon fitness and one of the best predictors of race day performance.",
    structure: [
      { phase: "Warm-Up", duration: "2 km easy", desc: "10 minutes easy jog, building gradually. Take your time." },
      { phase: "Tempo Block", duration: "5 km at 6:05/km", desc: "Hold 6:05/km for 5km — roughly 30 minutes of sustained threshold work. The first 2km should feel controlled. The middle 1km will feel hard. The final 2km: dig in and hold your pace." },
      { phase: "Cool-Down", duration: "2 km easy", desc: "Mandatory 2km cool-down at easy pace. Walk if needed at the end, but don't skip the cool-down jog." },
    ],
    coachNote: "5km at tempo is the gold standard lactate threshold workout. If you sustain this today, you are building real marathon fitness. Most first-time marathoners never do sessions like this — you're doing something serious. Be proud when you finish.",
    keyFocus: ["First 2km: feel controlled and steady", "Middle km: expect it to feel hardest — it always does", "Final 2km: dig in — this is where fitness is built", "Heart rate should plateau, not keep climbing — if it keeps rising, slow slightly"],
  },
  tempo_6k: {
    overview: "Your longest tempo block so far — six kilometres at threshold will push you into territory that genuinely develops marathon-specific fitness. This session builds the mental and physical capacity to hold effort deep into the second half of the race.",
    structure: [
      { phase: "Warm-Up", duration: "2 km easy", desc: "Easy jog — relaxed and conversational." },
      { phase: "Tempo Block", duration: "6 km at 6:00/km", desc: "6km at 6:00/km. You've crossed the 35-minute mark of sustained hard effort. Break it mentally: first 2km (settle), middle 2km (hold), final 2km (fight for it)." },
      { phase: "Cool-Down", duration: "2 km easy", desc: "2km easy jog, slowing down gradually. Don't stop abruptly." },
    ],
    coachNote: "You may want to stop at km 4. Don't. The final 2km of a tempo run are where the real fitness gains happen — this is where your lactate threshold actually shifts. Embrace the discomfort. This is exactly what km 37–40 of the marathon will demand, and you're practising your response.",
    keyFocus: ["Commit mentally to all 6km before you start", "If you fade at km 5, aim for 6:10 rather than stopping", "Strong, upright posture in the final 2km", "This session is genuinely hard — reward yourself afterwards"],
  },
  tempo_7k: {
    overview: "The peak tempo session of the entire plan — 7km at threshold pace. Completing this run is one of the strongest indicators that you are ready to run a full marathon. This is elite-level stimulus for a first-marathon runner.",
    structure: [
      { phase: "Warm-Up", duration: "2 km easy", desc: "Take your time — don't rush the warm-up for this session. You need to arrive at the tempo block fully ready." },
      { phase: "Tempo Block", duration: "7 km at 5:55/km", desc: "7km at 5:55/km — over 40 minutes of sustained threshold running. Segment it: first 2km (find the pace), middle 3km (hold the pace), final 2km (fight for the pace). Don't stop." },
      { phase: "Cool-Down", duration: "2 km easy + 5 min walk", desc: "Mandatory 2km easy jog and then walk it out. Hydrate immediately and eat within 30 minutes." },
    ],
    coachNote: "This is the hardest quality session in the plan. Arrive rested, fuelled, and mentally prepared. When km 5 feels awful (it will), remind yourself: this is training your body to handle exactly what km 37 of the marathon will feel like. Every second of discomfort here is a second of preparation for race day.",
    keyFocus: ["Mentally break into thirds — it makes it manageable", "Take a gel at km 3 if needed — this run earns it", "2-step breathing rhythm: in for 2 steps, out for 2 steps", "Finishing this session means you are marathon-ready"],
  },
  tempo_short_taper: {
    overview: "A shorter taper tempo — designed to keep your legs sharp and neuromuscularly primed for race day, without adding fatigue. Volume is deliberately reduced but intensity is maintained. Think of it as reminding your legs what fast feels like.",
    structure: [
      { phase: "Warm-Up", duration: "2 km easy", desc: "Easy jog at 8:00/km." },
      { phase: "Tempo Block", duration: "4 km at 6:10/km", desc: "4km at tempo pace. Short, sharp, purposeful. Notice how much more comfortable this feels now versus your first tempo run — that's your fitness." },
      { phase: "Cool-Down", duration: "2 km easy", desc: "Easy jog back." },
    ],
    coachNote: "Taper tempo runs often feel surprisingly good — you're fresher than you've been in months. Don't let that tempt you to extend the tempo block or go faster. Stick to 4km exactly. Save everything for race day. The goal here is feel, not fitness.",
    keyFocus: ["Stick to 4km exactly — no more", "Notice how much easier it feels — that's 17 weeks of training", "Visualise race day while running", "Your next hard effort is the marathon — protect your energy"],
  },
  long_10: {
    overview: "Your base long run — the starting point of everything. Today is about establishing your long-run routine: your pacing, your fuelling habits, and your mental approach to distance. Everything in the next 20 weeks builds from this run.",
    structure: [
      { phase: "km 1–3", duration: "~26 min", desc: "Very easy — 8:30/km. The fresh-legs feeling will tempt you to go faster. Resist it. You're building a habit here, not setting a PB." },
      { phase: "km 4–7", duration: "~28 min", desc: "Settle into long-run pace (7:45–8:15/km). Conversational effort throughout. Take your first sip of water here." },
      { phase: "km 8–10", duration: "~22 min", desc: "Maintain the same effort. If you feel strong, don't speed up — focus on form instead: tall posture, relaxed arms, light feet." },
    ],
    coachNote: "Long runs are about time on your feet, not speed. Every Sunday, you're teaching your body to burn fat efficiently, build slow-twitch muscle fibre, and mentally adapt to sustained effort. Don't rush this process — it's the most important part of marathon training.",
    keyFocus: ["Start at 8:30/km — ease in deliberately", "Hydrate every 20 minutes", "Practice breathing through your nose on easy sections", "Notice how you feel at each km — this is data for future runs"],
  },
  long_15: {
    overview: "A significant step up — 15km puts you solidly into marathon training territory. Today is about pacing discipline and starting to practice mid-run fuelling. Running 15km with good form and consistent pace is a real achievement.",
    structure: [
      { phase: "km 1–4", duration: "~34 min", desc: "Ultra-conservative start at 8:30/km. You have a long way to go." },
      { phase: "km 5–11", duration: "~50 min", desc: "Long-run pace (8:00–8:15/km). Take your first fuel (gel, banana, or dates) at km 6. Hydrate every 20 minutes." },
      { phase: "km 12–15", duration: "~26 min", desc: "Hold pace. If you feel strong, focus on form rather than pushing pace. If you feel tired, deliberately shorten your stride — this helps more than slowing down." },
    ],
    coachNote: "By km 10 today you might feel the first signs of fatigue. That's normal and important — your body is learning to tap into fat stores. Stay patient, keep moving, and note how you feel for future reference. This run is building your aerobic base.",
    keyFocus: ["Fuel at km 6 — practice this routine", "Hydrate every 20 minutes — set a reminder", "Run by feel, not GPS pace", "Walk through any water stations — it's strategic, not weakness"],
  },
  long_16: {
    overview: "16km — your first genuine long-run milestone. You're entering the weekly distances that serious marathon runners train at. Today tests your pacing discipline and your fuelling strategy in real conditions.",
    structure: [
      { phase: "km 1–4", duration: "~34 min", desc: "Easy start at 8:30/km maximum. Many runners go too fast early and pay for it later. Don't." },
      { phase: "km 5–13", duration: "~72 min", desc: "Settle at 8:00–8:15/km. Take fuel at km 5 and km 10. Hydrate at every opportunity." },
      { phase: "km 14–16", duration: "~26 min", desc: "Hold your pace. If you feel strong, focus on form rather than pushing. If tired, shorten stride and increase cadence slightly." },
    ],
    coachNote: "At km 12–13, you'll likely hit your first real 'wall' moment — where it stops feeling easy and the legs get heavy. This is your body shifting fuel sources. Slow down slightly if needed, but keep running. This is where the real training happens.",
    keyFocus: ["Fuel at km 5 and km 10 — don't skip", "Run by feel, not watch pace", "Walk water stops — it's a race strategy, not failure", "This is a new personal distance — respect it"],
  },
  long_18: {
    overview: "18km — your aerobic system is now genuinely developing. Completing this run today means you are a different runner than you were 8 weeks ago. This run tests your pacing patience and fuelling consistency over nearly 2.5 hours.",
    structure: [
      { phase: "km 1–4", duration: "~34 min", desc: "Deliberately slow — 8:30/km. You have 14km still to go after this." },
      { phase: "km 5–14", duration: "~80 min", desc: "Main body at 8:00–8:15/km. Fuel at km 5 and km 12. Hydrate every 20 minutes." },
      { phase: "km 15–18", duration: "~32 min", desc: "Final stretch will feel hard — this is deliberate and necessary. Shorten stride and increase cadence rather than pushing harder." },
    ],
    coachNote: "18km takes most runners around 2.5 hours. That's 2.5 hours of continuous aerobic stimulus. Your body will be building new mitochondria, increasing capillary density, and developing slow-twitch muscle fibres for days after this run. It's working even when you can't feel it.",
    keyFocus: ["Fuel at km 5 and km 12 — practice race nutrition", "Run/walk intervals are completely legitimate", "Check posture every km — shoulders back, head up", "You've run 43% of a marathon — you're nearly halfway!"],
  },
  long_19: {
    overview: "19km — one kilometre beyond your previous longest. Every long run from here adds distance and fitness that builds directly toward the full marathon. Today is about consistency: same effort from start to finish.",
    structure: [
      { phase: "km 1–5", duration: "~43 min", desc: "Easy warm-up miles at 8:30/km." },
      { phase: "km 6–15", duration: "~82 min", desc: "Long-run pace (8:00–8:15/km). Fuel at km 5, 10. Hydrate every 20 min." },
      { phase: "km 16–19", duration: "~34 min", desc: "Final 4km — hold steady. If the pace drops, focus on cadence (steps per minute) rather than effort." },
    ],
    coachNote: "19km means you're spending over 2.5 hours on your feet with a beating heart. This aerobic time is incredibly powerful for marathon preparation. Notice whether your second half pace is consistent with your first — that pacing discipline is what race day requires.",
    keyFocus: ["Consistent pace from km 5–19", "Fuel every 45 minutes", "Don't look at total distance — focus on the next km", "Celebrate every kilometre beyond your previous longest"],
  },
  long_21: {
    overview: "🎉 HALF MARATHON — 21.1km. This is the single most important training milestone of the plan. Today you become a half-marathon runner. The feeling you get at the end of this run is a preview of race day. Bank it.",
    structure: [
      { phase: "km 1–5", duration: "~43 min", desc: "Ultra-conservative start. 8:30–8:45/km. Many runners ruin this milestone run by going out too fast at the start. Resist the adrenaline." },
      { phase: "km 6–16", duration: "~88 min", desc: "Long-run pace (8:00–8:15/km). Fuel at km 5, 10, and 15. Hydrate every 20 minutes without exception." },
      { phase: "km 17–21.1", duration: "~36 min", desc: "Hold your pace. This is where training meets mental toughness. Do not stop. If needed, walk 60 seconds, then run again. Keep moving forward." },
    ],
    coachNote: "Completing 21.1km will feel like a marathon achievement — and it should. You've never run this far in your life. The exhaustion and elation you feel at the finish line is exactly what you'll feel at km 42.2 in 9 weeks. Bank this feeling. Photograph this moment. You earned it.",
    keyFocus: ["Start SLOWER than feels right — 8:45/km for first 5km", "3 fuel stops: km 5, 10, 15 — non-negotiable", "Walk any hills without guilt — it's smart racing", "Celebrate massively when you finish — this is a real milestone 🎉"],
  },
  long_22: {
    overview: "22km — one kilometre beyond your half marathon. You're now running distances that most people on earth will never attempt. This run extends your endurance base and continues teaching your body to operate efficiently over long distances.",
    structure: [
      { phase: "km 1–5", duration: "~43 min", desc: "Easy start at 8:30/km. Your body remembers 21km from last week — give it time to warm into this." },
      { phase: "km 6–17", duration: "~96 min", desc: "Long-run pace (8:00–8:15/km). Fuel at km 5, 10, and 15. Hydrate consistently." },
      { phase: "km 18–22", duration: "~36 min", desc: "Final 4km — these will feel different from last week's 21km. You're a week fitter. Hold the pace steady." },
    ],
    coachNote: "22km feels significant after last week's milestone but your body is adapting. The extra kilometre is deliberately small — we want you to finish this run feeling strong, not destroyed. Strong finishes build confidence; blown-up finishes breed doubt.",
    keyFocus: ["Fuel at km 5, 10, 15 — same routine as last week", "Practice the exact gels/foods you'll use on race day", "Note any chafing or discomfort — fix it before the longer runs", "You're 52% of a marathon — past halfway!"],
  },
  long_23: {
    overview: "23km — your longest run to date and the culmination of the Build phase. This run proves your aerobic base is ready for peak training. It's a serious effort and deserves serious preparation.",
    structure: [
      { phase: "km 1–5", duration: "~43 min", desc: "Conservative start. 8:30/km. This is a long one." },
      { phase: "km 6–18", duration: "~104 min", desc: "Long-run pace (8:00–8:15/km). Fuel at km 5, 10, 15. Hydrate every 20 minutes." },
      { phase: "km 19–23", duration: "~36 min", desc: "Final 4km. Acknowledge the fatigue — it's real. Shorten your stride, increase cadence, and keep moving. This is where mental strength is built." },
    ],
    coachNote: "You've now completed the Build phase. Weeks 7–13 have taken you from 16km to 23km long runs, introduced you to serious interval and tempo sessions, and most importantly — you finished a half marathon. Next phase is Peak. You're ready.",
    keyFocus: ["4 fuel stops for a 23km run — every 45 minutes", "Run/walk is a strategy, not failure", "At km 19, say to yourself: 'I've trained for this'", "Next week is a cutback — you've earned it"],
  },
  long_25: {
    overview: "25km — you are now running in territory that 99% of people will never attempt. This run begins to simulate the later stages of marathon fatigue. Your body is learning to keep going when everything says stop. This is the most important adaptation in marathon training.",
    structure: [
      { phase: "km 1–5", duration: "~43 min", desc: "Easy start at 8:30/km. You're going to be out here for nearly 3.5 hours. Start sensibly." },
      { phase: "km 6–20", duration: "~120 min", desc: "Steady long-run pace (8:00–8:20/km). Fuel at km 5, 10, 15, and 20. Hydrate every 20 minutes. Don't let fuelling slip — at 25km it matters enormously." },
      { phase: "km 21–25", duration: "~40 min", desc: "The final 5km will feel hard. This is deliberate. Your body is learning to run fatigued. Shorten stride and increase cadence. Don't stop unless you feel sharp pain." },
    ],
    coachNote: "At km 20+, you'll experience what marathon runners call the 'dark patch' — heavy legs, a mind that starts negotiating rest, doubt. This is the single most important phase of any long run. Learning to keep moving through the darkness is what separates finishers from DNFs. Today you're doing exactly that.",
    keyFocus: ["4 fuel stops: km 5, 10, 15, 20 — this is not optional", "Walk breaks are a pacing strategy, not failure", "At km 20: say 'I've trained for this exact moment'", "Don't check total distance after km 22 — just run to the next km marker"],
  },
  long_26: {
    overview: "26km — one of your peak long runs. After last week's 28km, 26km should feel significant but slightly more manageable. This is your final major long run before taper begins. Make it count.",
    structure: [
      { phase: "km 1–6", duration: "~52 min", desc: "Start at 8:45/km. Even slower than usual. You're about to run a lot of kilometres." },
      { phase: "km 7–21", duration: "~118 min", desc: "Long-run pace (8:00–8:20/km). Fuel at km 5, 10, 15, 20. Hydrate constantly." },
      { phase: "km 22–26", duration: "~38 min", desc: "Final 4km. Your training is nearly complete. Every step is making you ready for race day. Hold the pace or walk — but keep moving." },
    ],
    coachNote: "After this run, the taper begins. These 26km are putting the final coat of paint on a building you've spent 17 weeks constructing. Don't rush the finish — enjoy this long run. It's one of your last big ones before race day.",
    keyFocus: ["Fuel every 45 minutes — same race-day routine", "Think about race day during the final 5km", "Run/walk from km 20 if needed — that's smart, not weak", "Taper starts next week — the hard work is nearly done"],
  },
  long_28: {
    overview: "🏔️ 28km — the longest run of the entire plan. Your peak. Nothing about today is meant to be easy. This is the closest you'll get to marathon conditions before race day, and completing it proves you are ready.",
    structure: [
      { phase: "km 1–6", duration: "~54 min", desc: "Start at 8:45/km. Non-negotiable. You're running 28km today and every extra second you spend going too fast in the first 6km will cost you double in the final 6km." },
      { phase: "km 7–22", duration: "~130 min", desc: "Settle at 8:00–8:30/km. Fuel at km 6, 11, 16, 21. Water at every opportunity. Talk to yourself if needed — long runs are mental too." },
      { phase: "km 23–28", duration: "~50 min", desc: "The final 6km. Everything hurts. Your form is breaking down. This is the point. Keep your cadence up, shorten your stride, pump your arms, and move forward. One kilometre at a time." },
    ],
    coachNote: "28km is the magic number in marathon training — far enough to simulate the pain of late-race miles, close enough that you'll recover in time for race day. After today, trust completely that your body knows how to cover 42km. The extra 14km will come from your taper, carb-loading, race-day adrenaline, and the crowd. You've done the work.",
    keyFocus: ["5 fuel stops — today this is non-negotiable", "Run/walk strategy from km 20 — experienced marathoners do this", "Celebrate every kilometre beyond 21 — you're in uncharted territory", "This is your peak. After today, everything is recovery toward race day 💪"],
  },
  taper_20: {
    overview: "First taper long run at 20km. Volume begins dropping but the aerobic stimulus remains meaningful. This run should feel noticeably easier than your recent 26–28km runs — that freshness is your fitness showing.",
    structure: [
      { phase: "km 1–4", duration: "~34 min", desc: "Easy start. Let yourself feel good — you've earned it." },
      { phase: "km 5–16", duration: "~96 min", desc: "Long-run pace (8:00–8:15/km). Fuel at km 5 and 10. Notice how much fresher you feel at the same pace." },
      { phase: "km 17–20", duration: "~30 min", desc: "Easy finish. Focus on smooth, relaxed form. This is your feel-good long run." },
    ],
    coachNote: "Taper long runs cause anxiety — they feel too short, too easy. That feeling is exactly right. You've done the hard work. Now your body consolidates 17 weeks of fitness into race-ready form. Resist the urge to add kilometres — it will only delay recovery.",
    keyFocus: ["Easy effort — enjoy the freshness", "Notice how much lighter your legs feel", "Visualise your race-day route while running", "Save everything. Race day is 2 weeks away."],
  },
  taper_14: {
    overview: "Final taper long run at 14km — deliberately short to maximise freshness for race day while maintaining the aerobic feel. This run is about confidence, not fitness. You already have the fitness.",
    structure: [
      { phase: "km 1–3", duration: "~26 min", desc: "Easy jog. Smile — you're nearly there." },
      { phase: "km 4–11", duration: "~64 min", desc: "Easy long-run pace. Fuel once at km 5 if it's a warm day. Mostly just enjoy the run." },
      { phase: "km 12–14", duration: "~22 min", desc: "Easy finish. Feel strong. You're going to be ready on race day." },
    ],
    coachNote: "If this run feels embarrassingly short and easy compared to what you've been doing — perfect. That means you're tapering correctly. Every run between now and race day should feel a bit too easy. Trust the process.",
    keyFocus: ["Easy effort — genuinely easy", "Feel how strong your legs are", "Visualise crossing the finish line", "Race week starts in 7 days. You are ready. 🏁"],
  },
  shakeout: {
    overview: "A pre-race shakeout — keeping your legs loose and your mind calm before the big day. The purpose of this run is 10% physical (keeping legs primed) and 90% psychological (burning off nervous energy and confirming you're ready).",
    structure: [
      { phase: "Easy Jog", duration: "4 km at 9:00/km", desc: "Very gentle jog. Slower than your easy pace. Just get the blood moving and legs turning over." },
      { phase: "4×100m Strides", duration: "~30 sec each", desc: "4 short accelerations over 100m — not sprinting, just a controlled pick-up. Walk 30 seconds between each. These open up the legs without tiring them." },
      { phase: "5 min walk", duration: "5 min", desc: "Calm walk with deep breathing. Visualise your race plan: start pace, fuel stops, the finish line." },
    ],
    coachNote: "The shakeout run is not about fitness — it's 100% psychological. Tomorrow is your marathon. Getting out today confirms your legs are ready, burns off the anxious energy, and gives your mind something useful to do instead of overthinking. Go easy, keep it short, and sleep well tonight.",
    keyFocus: ["Very easy — slower than easy", "4 short strides to open the legs", "Think through your race plan calmly", "Lay out all your gear tonight 🛌 — number, shoes, gels, everything"],
  },
  rest_day: {
    overview: "Today is a full rest day — and rest days are not optional. They are the sessions where your body actually becomes stronger. Training creates the stimulus; rest creates the adaptation. Without rest, you're just accumulating fatigue.",
    structure: [
      { phase: "Morning", duration: "10–15 min", desc: "Foam roll for 10–15 minutes. Focus on: calves (most important), glutes, IT band (side of thigh), and quads. Spend 60–90 seconds on each area." },
      { phase: "Afternoon", duration: "10–15 min walk", desc: "A short, easy walk is fine and beneficial. Keep the blood circulating without loading the joints. This is the maximum effort for today." },
      { phase: "Evening", duration: "8+ hours sleep", desc: "Prioritise sleep above everything. Human growth hormone peaks during deep sleep — this is literally when your muscle fibres rebuild stronger. 8+ hours is training." },
    ],
    coachNote: "Skipping rest days is one of the most common marathon training mistakes. Every quality session you do requires recovery to become fitness. Without rest, training just makes you more tired. Protect these days as fiercely as your long runs.",
    keyFocus: ["No running — full stop", "Foam roll and stretch", "Hydrate well — aim for 2.5–3L of water", "Sleep 8+ hours — this is where you get fitter"],
  },
  race_day: {
    overview: "🏆 RACE DAY — 42.2km. Everything you've done for 20 weeks has been building to this single morning. You've run 28km in training. You've done 7km tempo runs. You've run intervals and easy miles and long Sunday runs in all weathers. Today, you are a marathon runner.",
    structure: [
      { phase: "km 1–10", duration: "~83 min", desc: "START SLOW. 8:15–8:30/km. The crowd and adrenaline will push you to run faster than you should. Resist it. These first 10km should feel embarrassingly easy. You're storing energy for later." },
      { phase: "km 11–30", duration: "~163 min", desc: "Your race pace (8:00–8:15/km). Fuel every 5km starting at km 5. Stay disciplined. Run your own race — not the person next to you, not your watch, yours." },
      { phase: "km 31–42.2", duration: "~96 min", desc: "Uncharted territory. Your training goes to 28km — the final 14.2km is primarily mental. Shorten stride, lift knees, pump arms. Walk when needed. But keep moving forward. You will finish." },
    ],
    coachNote: "You've trained for this. Every 4am run, every interval session, every long Sunday when you were tired but went anyway — it all compounds into today. Start easy, fuel consistently, and when the dark patch hits between km 32–37, remember: you ran 28km in training. You know this pain. You trained through it. Now race through it. Enjoy every single kilometre. This is your day. 🏅",
    keyFocus: ["SLOW START — 8:15–8:30/km for first 10km without exception", "Fuel every 5km from km 5 — set a reminder on your watch", "Walk every water station — drink, then run", "From km 35: pump your arms — your legs will follow your arms", "SMILE at km 40 — you are about to become a marathon finisher"],
  },
};

export function getRunDetail(run, weekNum) {
  if (run.type === "rest") return RUN_DETAILS.rest_day;
  if (run.title.includes("MARATHON DAY")) return RUN_DETAILS.race_day;
  if (run.title.toLowerCase().includes("shakeout")) return RUN_DETAILS.shakeout;
  if (run.type === "long") {
    if (run.distance <= 13) return RUN_DETAILS.long_10;
    if (run.distance === 14) return weekNum >= 18 ? RUN_DETAILS.taper_14 : RUN_DETAILS.long_16;
    if (run.distance === 15) return RUN_DETAILS.long_15;
    if (run.distance === 16) return RUN_DETAILS.long_16;
    if (run.distance <= 17) return RUN_DETAILS.long_16;
    if (run.distance === 18) return RUN_DETAILS.long_18;
    if (run.distance === 19) return RUN_DETAILS.long_19;
    if (run.distance <= 21) return RUN_DETAILS.long_21;
    if (run.distance === 22) return RUN_DETAILS.long_22;
    if (run.distance === 23) return RUN_DETAILS.long_23;
    if (run.distance <= 25) return RUN_DETAILS.long_25;
    if (run.distance === 26) return RUN_DETAILS.long_26;
    if (run.distance >= 27) return RUN_DETAILS.long_28;
    if (run.distance === 20) return RUN_DETAILS.taper_20;
    return RUN_DETAILS.long_16;
  }
  if (run.type === "interval") {
    if (run.notes.includes("400m")) return RUN_DETAILS.interval_400;
    if (run.notes.includes("1.5km")) return RUN_DETAILS.interval_1k5;
    if (run.notes.includes("1km") || run.notes.includes("×1km")) return RUN_DETAILS.interval_1km;
    return RUN_DETAILS.interval_800;
  }
  if (run.type === "tempo") {
    if (weekNum >= 18) return RUN_DETAILS.tempo_short_taper;
    if (run.notes.includes("3km")) return RUN_DETAILS.tempo_3k;
    if (run.notes.includes("4km")) return RUN_DETAILS.tempo_4k;
    if (run.notes.includes("5km")) return RUN_DETAILS.tempo_5k;
    if (run.notes.includes("6km")) return RUN_DETAILS.tempo_6k;
    if (run.notes.includes("7km")) return RUN_DETAILS.tempo_7k;
    return RUN_DETAILS.tempo_4k;
  }
  if (run.title.toLowerCase().includes("recovery")) return RUN_DETAILS.recovery_default;
  return RUN_DETAILS.easy_default;
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
    { day: "Thu", type: "interval", title: "Intervals", distance: 6, notes: "6×400m at hard effort (5:30/km), 90s rest between each." },
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
    { day: "Thu", type: "interval", title: "Intervals", distance: 7, notes: "5×800m at 5:45/km, 2 min rest. Quality reps." },
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
    { day: "Thu", type: "interval", title: "Intervals", distance: 8, notes: "6×800m at 5:45/km, 90s rest. Push the quality." },
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
    { day: "Thu", type: "interval", title: "Intervals", distance: 9, notes: "4×1km at 5:45/km, 2 min rest. Race-pace awareness." },
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
    { day: "Thu", type: "interval", title: "Intervals", distance: 10, notes: "5×1km at 5:40/km, 90s rest. Strong quality session." },
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
    { day: "Thu", type: "interval", title: "Intervals", distance: 11, notes: "4×1.5km at 5:50/km, 2 min rest. Biggest interval session." },
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
    { day: "Thu", type: "interval", title: "Intervals", distance: 10, notes: "4×1.5km at 5:50/km, 2 min rest. Confidence builder." },
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
    { day: "Thu", type: "interval", title: "Short Intervals", distance: 7, notes: "4×400m at 5:30/km, 2 min rest. Just staying sharp." },
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
