import { useState } from "react";

const PACE_ZONES = {
  easy:     { label: "Easy",      color: "#4CAF7D", bg: "#1A2A1E", border: "#4CAF7D44", paceRange: "7:30–8:30 /km", effort: "4/10", heartRate: "60–70% max HR" },
  tempo:    { label: "Tempo",     color: "#F59E0B", bg: "#2A2010", border: "#F59E0B44", paceRange: "6:00–6:30 /km", effort: "7/10", heartRate: "80–90% max HR" },
  interval: { label: "Interval",  color: "#EF4444", bg: "#2A1414", border: "#EF444444", paceRange: "5:30–6:00 /km", effort: "9/10", heartRate: "90–95% max HR" },
  long:     { label: "Long Run",  color: "#6366F1", bg: "#1A1A2E", border: "#6366F144", paceRange: "7:45–8:45 /km", effort: "5/10", heartRate: "65–75% max HR" },
  rest:     { label: "Rest Day",  color: "#6B6B80", bg: "#1A1A24", border: "#2A2A3A",   paceRange: "—",             effort: "—",    heartRate: "—" },
};

const PHASE_COLORS = {
  "Base Building": "#4CAF7D",
  "Build":         "#F59E0B",
  "Peak":          "#EF4444",
  "Taper":         "#6366F1",
  "Race Week 🏁":  "#EC4899",
};

// Detailed run descriptions — Runna-style structured workouts
const RUN_DETAIL = {
  // EASY
  easy_default: {
    overview: "An easy aerobic run at a comfortable, conversational pace. This is the foundation of your marathon training — building your aerobic engine without accumulating fatigue.",
    structure: [
      { phase: "Warm-Up", duration: "5 min", desc: "Start with a brisk walk, then ease into a very gentle jog. Let your body wake up naturally." },
      { phase: "Main Run", duration: "at pace", desc: "Run at an easy, conversational pace (7:30–8:30/km). You should be able to speak full sentences without gasping." },
      { phase: "Cool-Down", duration: "5 min", desc: "Slow to a walk for the final 5 minutes. Finish with light calf and quad stretches." },
    ],
    coachNote: "If you feel the urge to go faster — don't. Easy runs are meant to feel almost too easy. Around 80% of your total training should be at this effort.",
    keyFocus: ["Stay fully conversational", "Relax your shoulders", "Short, light strides", "Breathe through your nose if possible"],
  },
  recovery_default: {
    overview: "A very short, very easy run designed purely to flush out lactic acid and promote blood flow to tired muscles. This isn't about fitness — it's about recovery.",
    structure: [
      { phase: "Warm-Up", duration: "3 min", desc: "Walk briskly, then ease into the gentlest jog you can manage." },
      { phase: "Recovery Run", duration: "full run", desc: "Run slower than your easy pace — even 9:00/km is fine. The goal is movement, not effort." },
      { phase: "Cool-Down", duration: "5 min", desc: "Walk and do dynamic leg swings, hip circles, and calf raises." },
    ],
    coachNote: "Recovery runs should feel almost embarrassingly slow. If your legs are sore from yesterday's session, this will help them bounce back faster than total rest.",
    keyFocus: ["Slower than easy pace", "No ego — go as slow as needed", "Focus on form, not speed", "Keep it short and sweet"],
  },
  // INTERVALS
  interval_400: {
    overview: "Short, sharp 400m repetitions to develop running economy and introduce your body to faster paces. These build speed that translates directly into a stronger marathon pace.",
    structure: [
      { phase: "Warm-Up", duration: "10 min", desc: "Easy jog at 8:00/km. End with 4×20-second strides — short accelerations — to prime your legs." },
      { phase: "6×400m Reps", duration: "~2:10–2:15 each", desc: "Run 400m (one lap of a track, or 400m on your GPS) at 5:30/km — hard but controlled. Recover with 90 seconds of walking or very easy jogging between each rep." },
      { phase: "Cool-Down", duration: "10 min", desc: "Easy jog back down to 8:30/km. Walk the final 2 minutes." },
    ],
    coachNote: "Each rep should feel the same. If your 5th rep is significantly slower than your 1st, you went out too hard. Aim for even splits — consistency beats heroics.",
    keyFocus: ["Even effort across all reps", "90s full recovery between reps", "Drive your arms", "Stay tall — don't hunch at speed"],
  },
  interval_800: {
    overview: "800m repetitions are the classic marathon training tool. They develop your lactate threshold and teach your body to sustain harder efforts — directly improving your marathon pace.",
    structure: [
      { phase: "Warm-Up", duration: "10 min", desc: "Easy jog, then 4×20s strides with 30s walk between. Get your legs turning over before the reps." },
      { phase: "800m Reps", duration: "~4:30–4:40 each", desc: "Run 800m at 5:45/km. This should feel hard but sustainable — like a 7/10 effort. Take 2 minutes full recovery (walk or stand) between each rep." },
      { phase: "Cool-Down", duration: "10 min", desc: "Easy jog to flush out the legs. Don't skip this — it reduces soreness tomorrow." },
    ],
    coachNote: "800m reps at this pace are the bread and butter of marathon training. You're not sprinting — you're running at a pace that makes you work but doesn't destroy you. Quality over quantity.",
    keyFocus: ["Controlled hard effort — not a sprint", "Full 2-minute rest between reps", "Maintain form even when tired", "Count your breaths to stay in rhythm"],
  },
  interval_1km: {
    overview: "1km repetitions at close to your 10K race pace. These longer reps build the aerobic power and mental toughness required for the marathon's final 10km.",
    structure: [
      { phase: "Warm-Up", duration: "12 min", desc: "10 minutes easy, then 2 minutes of dynamic drills — high knees, butt kicks, lateral shuffles." },
      { phase: "1km Reps", duration: "~5:45 each", desc: "Run 1km at 5:40–5:45/km — comfortably hard. You should be working but not gasping. Take 90 seconds easy jog recovery." },
      { phase: "Cool-Down", duration: "10 min", desc: "Easy jog + walk. Foam roll your calves and IT band when you get home." },
    ],
    coachNote: "1km reps are where you start to feel like a real marathon runner. Each one builds your mental library of 'I've done hard things before.' That library gets opened at km 35 of your race.",
    keyFocus: ["5:40–5:45/km target pace", "Relaxed shoulders and jaw", "90s jog recovery", "Visualise the finish line on the last rep"],
  },
  interval_1k5: {
    overview: "Longer 1.5km reps that bridge the gap between speed work and tempo. These build your ability to hold a strong, sustained pace — essential for the second half of the marathon.",
    structure: [
      { phase: "Warm-Up", duration: "12 min", desc: "Easy jog with 4 acceleration strides at the end. Prime your legs." },
      { phase: "4×1.5km Reps", duration: "~8:40 each", desc: "Run 1.5km at 5:50/km — strong and controlled. This is the hardest session of the plan. Take 2 minutes full recovery between reps." },
      { phase: "Cool-Down", duration: "12 min", desc: "Extended cool-down jog, then 5 minutes walking. Hydrate and stretch immediately after." },
    ],
    coachNote: "This is the peak quality session of the plan. It's supposed to feel hard. If you nail these reps, race day will feel manageable by comparison. Respect the recovery between reps.",
    keyFocus: ["Consistent 5:50/km across all reps", "Full 2-minute recovery", "Stay mentally strong on rep 3 and 4", "This is your biggest confidence builder"],
  },
  // TEMPO
  tempo_3k: {
    overview: "Your first tempo run — introducing the concept of 'comfortably hard' running. Tempo pace sits at the edge of your aerobic capacity and is one of the most powerful tools for marathon improvement.",
    structure: [
      { phase: "Warm-Up", duration: "2 km", desc: "Easy jog at 8:00/km. Don't rush this — let your body transition from rest to effort over a full 2km." },
      { phase: "Tempo Block", duration: "3 km at 6:15/km", desc: "Run 3km at 6:15/km. This should feel 'comfortably hard' — you can say 3–4 words at a time but can't hold a conversation. Hold the pace steady." },
      { phase: "Cool-Down", duration: "2 km", desc: "Drop back to easy jog (8:00/km) for 2km. Don't stop suddenly — the cool-down is crucial." },
    ],
    coachNote: "Tempo pace is your lactate threshold pace — the fastest pace you can hold for 20–40 minutes. Training at this effort pushes that threshold higher, making your easy and marathon paces feel more comfortable over time.",
    keyFocus: ["6:15/km — hold it steady", "Controlled breathing — not gasping", "Full warm-up and cool-down non-negotiable", "If it feels hard, it's working"],
  },
  tempo_4k: {
    overview: "A progressive tempo run with a longer sustained effort block. The goal is sustained discomfort — teaching your body to clear lactate efficiently at a sub-marathon pace.",
    structure: [
      { phase: "Warm-Up", duration: "2 km", desc: "Easy jog at 8:00/km." },
      { phase: "Tempo Block", duration: "4 km at 6:10/km", desc: "4km at 6:10/km. Push the pace slightly beyond week 3's tempo. Aim for even splits across all 4km." },
      { phase: "Cool-Down", duration: "2 km", desc: "Easy jog at 8:30/km." },
    ],
    coachNote: "Each tempo run you do, the same pace feels a little easier. That's adaptation. Today's 'hard' becomes next month's 'moderate.' Trust the process.",
    keyFocus: ["Aim for negative splits (2nd half slightly faster)", "Focus on cadence — aim for 170–175 steps/min", "Check your form at halfway", "One word per breath = correct effort"],
  },
  tempo_5k: {
    overview: "A landmark tempo session — your first 5km sustained at threshold pace. This is a significant training achievement and a strong indicator of developing marathon fitness.",
    structure: [
      { phase: "Warm-Up", duration: "2 km", desc: "10 minutes easy, building gradually into the warm-up." },
      { phase: "Tempo Block", duration: "5 km at 6:05/km", desc: "Hold 6:05/km for 5km. This is approximately 30 minutes of sustained hard effort. Stay steady — don't blow up in the first 2km." },
      { phase: "Cool-Down", duration: "2 km", desc: "Mandatory 2km cool-down. Walk if needed, but don't skip it." },
    ],
    coachNote: "5km at tempo is the classic lactate threshold workout. If you can sustain this today, you are genuinely building marathon-ready fitness. Be proud of this session.",
    keyFocus: ["First 2km feel controlled", "Middle km is the hardest — expect it", "Final km: dig in", "Heart rate should plateau, not keep climbing"],
  },
  tempo_6k: {
    overview: "Your longest tempo block yet. Six kilometres at threshold pace will feel significant — this session builds the mental and physical capacity to hold effort deep into the marathon.",
    structure: [
      { phase: "Warm-Up", duration: "2 km", desc: "Easy jog — relaxed, conversational." },
      { phase: "Tempo Block", duration: "6 km at 6:00/km", desc: "6km at 6:00/km. This crosses the 35-minute mark of sustained hard effort — a serious physiological stimulus." },
      { phase: "Cool-Down", duration: "2 km", desc: "2km easy jog. Slow down gradually." },
    ],
    coachNote: "You may want to bail at km 4. Don't. The final 2km of a tempo run are where the real fitness gains happen. Embrace the discomfort — this is exactly what kilometres 37–40 of the marathon will demand.",
    keyFocus: ["Commit to all 6km before you start", "If you fade, aim for 6:10 rather than stopping", "Strong upright posture in the last 2km", "Reward yourself afterwards — this is hard"],
  },
  tempo_7k: {
    overview: "Peak tempo session — 7km at threshold pace. This is one of the most demanding quality workouts in your entire plan. Complete this and you'll know you're ready for the marathon.",
    structure: [
      { phase: "Warm-Up", duration: "2 km", desc: "Easy jog. Take your time — this session demands full readiness." },
      { phase: "Tempo Block", duration: "7 km at 5:55/km", desc: "7km at 5:55/km. You're now running 40+ minutes at threshold. This is elite-level stimulus for a first marathon runner." },
      { phase: "Cool-Down", duration: "2 km", desc: "Mandatory 2km easy jog + 5 min walk." },
    ],
    coachNote: "This is the hardest tempo of the plan. Arrive rested, fuelled, and mentally prepared. Break it into: first 2km (settle in), middle 3km (hold the pace), final 2km (fight for it). Celebrate finishing this one.",
    keyFocus: ["Mental segmentation — break it into thirds", "Fuel with a gel at km 3 if needed", "Breathe rhythmically — 2 steps in, 2 out", "This session will define your marathon fitness"],
  },
  tempo_short_taper: {
    overview: "A shorter tempo session during the taper designed to keep your legs sharp without accumulating fatigue. Volume is down but intensity is maintained.",
    structure: [
      { phase: "Warm-Up", duration: "2 km", desc: "Easy jog at 8:00/km." },
      { phase: "Tempo Block", duration: "4 km at 6:10/km", desc: "4km at tempo — short, sharp, purposeful. Remind your legs what fast feels like." },
      { phase: "Cool-Down", duration: "2 km", desc: "Easy jog back." },
    ],
    coachNote: "Taper tempo runs often feel great. You're fresher than you've been in months. Don't let that tempt you to go harder — the goal is sharpness, not stress. Save the energy for race day.",
    keyFocus: ["Don't extend the tempo block — stick to 4km", "Notice how much easier it feels", "This is the fitness you've built — enjoy it", "Race week starts next — protect your legs"],
  },
  // LONG RUNS
  long_10: {
    overview: "Your base long run — the starting point of the plan. Today is about establishing your long-run routine: your pace, your fuelling habits, your mental approach. Everything else builds from here.",
    structure: [
      { phase: "First 3 km", duration: "~24 min", desc: "Very easy — 8:30/km. Don't let the fresh legs fool you into going faster." },
      { phase: "Main Body", duration: "4 km", desc: "Settle into your long run pace (7:45–8:15/km). Conversational effort." },
      { phase: "Final 3 km", duration: "~24 min", desc: "Maintain the same effort. If you feel strong, don't speed up — just notice how good the training feels." },
    ],
    coachNote: "Long runs are about time on your feet, not speed. You've already run 10K before — today is about doing it in a controlled, sustainable way and starting to build the habit. Enjoy the run.",
    keyFocus: ["Start at 8:30/km — ease in", "Hydrate every 20 minutes", "No music for the first long run — learn to run with your thoughts", "Notice how you feel km by km"],
  },
  long_16: {
    overview: "Your first major long run — 16km. You're entering marathon training territory now. Today is about pacing, fuelling mid-run, and proving to yourself that you can cover serious distance.",
    structure: [
      { phase: "km 1–3", duration: "", desc: "Easy warm-up. 8:30/km maximum. Many runners go too fast early — don't." },
      { phase: "km 4–13", duration: "", desc: "Settle at 8:00–8:15/km. Take your first energy gel or snack at km 7. Hydrate at every opportunity." },
      { phase: "km 14–16", duration: "", desc: "Hold the same pace. If you feel strong, focus on form rather than pushing the pace." },
    ],
    coachNote: "At 16km, you'll likely hit your first 'wall' moment where it stops feeling easy. That's normal and important — your body is learning to tap into fat stores as fuel. Slow down if needed, but keep moving.",
    keyFocus: ["Fuel at km 7 — don't wait until you're hungry", "Run by feel, not GPS pace", "Walk through water stops — it's smart, not weak", "This is a new personal distance record — respect it"],
  },
  long_18: {
    overview: "18km — the longest run of your Build phase so far. Your aerobic system is genuinely developing now. Today will test your pacing discipline and fuelling strategy.",
    structure: [
      { phase: "km 1–4", duration: "", desc: "Deliberately easy — 8:30/km. You have a long way to go." },
      { phase: "km 5–14", duration: "", desc: "Main body at 8:00–8:15/km. Fuel at km 6 and km 12." },
      { phase: "km 15–18", duration: "", desc: "Final stretch. If you've paced well, these should feel hard but doable. Don't speed up — hold steady." },
    ],
    coachNote: "18km takes most runners around 2.5 hours. That's 2.5 hours of continuous aerobic work — a massive cardiovascular stimulus. Your body will be building new mitochondria, capillaries, and slow-twitch muscle fibres for days after this run.",
    keyFocus: ["Fuel every 45 minutes — don't skip this", "Run/walk is completely fine", "Check your posture at every km marker", "This is 43% of a marathon — you're nearly halfway there!"],
  },
  long_21: {
    overview: "🎉 HALF MARATHON — 21.1km. This is a massive milestone. You are now officially a half-marathon runner. Today is one of the most important training days of the entire plan.",
    structure: [
      { phase: "km 1–5", duration: "", desc: "Ultra-conservative start. 8:30–8:45/km. You must resist the temptation to go faster." },
      { phase: "km 6–16", duration: "", desc: "Long-run pace (8:00–8:15/km). Fuel at km 5, 10, and 15. Hydrate consistently." },
      { phase: "km 17–21", duration: "", desc: "Hold your pace. This is where training meets mental toughness. Do not stop. Walk if needed, but keep moving forward." },
    ],
    coachNote: "Completing 21km will feel like a marathon achievement — and it should. You've never run this far before. The feeling at the finish is exactly what you'll experience in the full marathon. Bank this feeling. You'll need it.",
    keyFocus: ["Start slower than feels right", "3 gels/fuels — at km 5, 10, 15", "Walk any hills without guilt", "Celebrate massively when you finish 🎉"],
  },
  long_25: {
    overview: "25km — you are now in territory that 99% of people will never run. This run begins to simulate the later stages of marathon fatigue. Your body is learning to keep going when tired.",
    structure: [
      { phase: "km 1–5", duration: "", desc: "Easy start at 8:30/km. Settle your breathing and rhythm." },
      { phase: "km 6–20", duration: "", desc: "Steady long-run pace (8:00–8:20/km). Fuel at km 5, 10, 15, and 20. Hydrate every 20 minutes." },
      { phase: "km 21–25", duration: "", desc: "The final 5km will feel hard — this is deliberate. Your body is learning to run fatigued. Shorten your stride and increase cadence if the pace drops." },
    ],
    coachNote: "At km 20+, you'll experience what marathon runners call the 'dark patch.' Your legs feel heavy, your mind starts negotiating. This is the most important phase of any long run — learning to keep moving through the darkness. The marathon is won here.",
    keyFocus: ["4 fuel stops: km 5, 10, 15, 20", "Walk breaks are a strategy, not failure", "At km 20, say to yourself: 'I've trained for this'", "Don't check pace after km 22 — just keep moving"],
  },
  long_28: {
    overview: "🏔️ 28km — the longest run of the entire plan. This is your peak long run. Nothing about today is meant to be easy. This run is the closest you'll get to marathon conditions before race day.",
    structure: [
      { phase: "km 1–6", duration: "", desc: "Start at 8:45/km. Seriously — go this slow. You're running 28km today." },
      { phase: "km 7–22", duration: "", desc: "Settle at 8:00–8:30/km. Fuel at km 6, 11, 16, 21. Take on water at every opportunity." },
      { phase: "km 23–28", duration: "", desc: "The final 6km. Everything hurts. Your form is breaking down. This is the point. Keep your cadence up, shorten your stride, and move forward." },
    ],
    coachNote: "28km is the magic number in marathon training — far enough to simulate late-race fatigue, not so far it takes weeks to recover. After today, trust that your body knows how to cover 42km. The extra 14km on race day will come from your taper, your carb-loading, and the crowd.",
    keyFocus: ["5 fuel stops — non-negotiable", "Run/walk strategy from km 20 if needed", "Celebrate every single km beyond 21", "This is your peak. Everything after this is recovery toward race day. 💪"],
  },
  long_race: {
    overview: "🏆 RACE DAY — 42.2km. Everything you've done for 20 weeks has been building to this single morning. Today, you are a marathon runner.",
    structure: [
      { phase: "km 1–10", duration: "", desc: "START SLOW. 8:15–8:30/km. The crowd and adrenaline will push you. Resist it. Your first 10km should feel embarrassingly easy." },
      { phase: "km 11–30", duration: "", desc: "Your race pace (8:00–8:15/km). Fuel every 5km. Stay disciplined. Run your own race — not anyone else's." },
      { phase: "km 31–42.2", duration: "", desc: "This is uncharted territory. Your training goes to 28km — the final 14.2km is mental. Shorten stride, lift knees, pump arms. Walk when needed. But keep. moving. forward." },
    ],
    coachNote: "You've trained for this. Every early morning run, every interval session, every long Sunday when you didn't want to get out of bed — it all compounds into today. Start easy, fuel consistently, and when the dark patch hits between km 30–35, remember: 'I've trained for this exact moment.' Enjoy every kilometre. This is your day. 🏅",
    keyFocus: ["SLOW START — 8:15–8:30/km for first 10km", "Fuel every 5km from km 5 onwards", "Walk the water stations", "From km 35: pump your arms, your legs will follow", "SMILE at km 40 — you're going to finish a marathon"],
  },
  taper_long: {
    overview: "A taper long run — reduced distance to preserve your legs for race day while maintaining the aerobic feel. This should feel refreshingly achievable compared to your peak weeks.",
    structure: [
      { phase: "Warm-Up", duration: "5 min", desc: "Walk, then ease into a gentle jog." },
      { phase: "Main Run", duration: "at pace", desc: "Run at your comfortable long-run pace (8:00–8:30/km). Notice how much easier this feels with reduced volume. That's your fitness showing." },
      { phase: "Cool-Down", duration: "5 min", desc: "Walk and gentle stretching." },
    ],
    coachNote: "Taper long runs often cause anxiety — they feel too short, too easy. That's the point. You've done the hard work. Now let your body consolidate the fitness you've built. Resist the urge to add kilometres.",
    keyFocus: ["Easy effort — enjoy it", "Notice how fresh your legs feel", "Visualise race day while running", "Save everything for the marathon"],
  },
  shakeout: {
    overview: "A pre-race shakeout run — keeping your legs loose and your mind calm before the big day. This run is about feel, not fitness.",
    structure: [
      { phase: "Easy Jog", duration: "4 km", desc: "Very gentle jog at 8:30–9:00/km. Just get the blood moving." },
      { phase: "Strides", duration: "4×100m", desc: "4 short accelerations over 100m — not sprinting, just opening up the legs. Walk 30s between each." },
      { phase: "Walk", duration: "5 min", desc: "Finish with a calm walk. Deep breathing. Visualisation." },
    ],
    coachNote: "The shakeout run is not about fitness — it's 100% psychological. Getting out the day before confirms your legs are ready, burns off nervous energy, and gives you something to do instead of overthinking. Keep it very gentle.",
    keyFocus: ["Very easy — slower than easy", "4 short strides at the end", "Think about your race plan calmly", "Go to bed early tonight 🛌"],
  },
  rest_day: {
    overview: "Today is a rest day — and rest days are not optional. They are the days your body actually gets stronger. Training breaks down muscle fibres; rest is when they rebuild stronger.",
    structure: [
      { phase: "Morning", duration: "", desc: "Foam roll for 10–15 minutes. Focus on calves, glutes, IT band, and quads." },
      { phase: "Afternoon", duration: "", desc: "Light walking (10–15 min) is fine and encouraged. Keep the blood moving without stressing the body." },
      { phase: "Evening", duration: "", desc: "Prioritise sleep. 8 hours minimum. This is when HGH (human growth hormone) peaks and muscle repair accelerates." },
    ],
    coachNote: "Skipping rest days is one of the most common marathon training mistakes. Every quality session you do needs a rest day to become fitness. Without rest, you're just accumulating fatigue. Protect these days as fiercely as you protect your long run.",
    keyFocus: ["No running — full stop", "Foam roll and stretch", "Hydrate well", "Sleep 8+ hours"],
  },
};

function getRunDetail(run, weekNum) {
  if (run.type === "rest") return RUN_DETAIL.rest_day;
  if (run.title.includes("MARATHON DAY")) return RUN_DETAIL.long_race;
  if (run.title.includes("Shakeout")) return RUN_DETAIL.shakeout;
  if (run.type === "long") {
    if (run.distance <= 12) return RUN_DETAIL.long_10;
    if (run.distance <= 17) return RUN_DETAIL.long_16;
    if (run.distance <= 19) return RUN_DETAIL.long_18;
    if (run.distance <= 21) return RUN_DETAIL.long_21;
    if (run.distance <= 25) return RUN_DETAIL.long_25;
    if (run.distance >= 26) return RUN_DETAIL.long_28;
    if (weekNum >= 17) return RUN_DETAIL.taper_long;
    return RUN_DETAIL.long_16;
  }
  if (run.type === "interval") {
    if (run.notes.includes("400m")) return RUN_DETAIL.interval_400;
    if (run.notes.includes("1.5km")) return RUN_DETAIL.interval_1k5;
    if (run.notes.includes("1km") || run.notes.includes("×1km")) return RUN_DETAIL.interval_1km;
    return RUN_DETAIL.interval_800;
  }
  if (run.type === "tempo") {
    if (weekNum >= 16) return RUN_DETAIL.tempo_short_taper;
    if (run.notes.includes("3km")) return RUN_DETAIL.tempo_3k;
    if (run.notes.includes("4km")) return RUN_DETAIL.tempo_4k;
    if (run.notes.includes("5km")) return RUN_DETAIL.tempo_5k;
    if (run.notes.includes("6km")) return RUN_DETAIL.tempo_6k;
    if (run.notes.includes("7km")) return RUN_DETAIL.tempo_7k;
    return RUN_DETAIL.tempo_4k;
  }
  if (run.title.toLowerCase().includes("recovery")) return RUN_DETAIL.recovery_default;
  return RUN_DETAIL.easy_default;
}

const PLAN = [
  // PHASE 1: BASE (Weeks 1–6)
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
  // PHASE 2: BUILD (Weeks 7–13)
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
  // PHASE 3: PEAK (Weeks 14–17)
  { week: 14, phase: "Peak", runs: [
    { day: "Tue", type: "easy", title: "Easy Run", distance: 8, notes: "CUTBACK WEEK — crucial before peak phase." },
    { day: "Thu", type: "easy", title: "Easy Run", distance: 7, notes: "Light effort." },
    { day: "Fri", type: "easy", title: "Easy Run", distance: 5, notes: "Very easy." },
    { day: "Sun", type: "long", title: "Long Run", distance: 16, notes: "CUTBACK — feel the freshness return." },
  ]},
  { week: 15, phase: "Peak", runs: [
    { day: "Tue", type: "easy", title: "Easy Run", distance: 9, notes: "Peak phase begins. Build mileage." },
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
  // PHASE 4: TAPER (Weeks 18–19)
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
  // PHASE 5: RACE WEEK (Week 20)
  { week: 20, phase: "Race Week 🏁", runs: [
    { day: "Tue", type: "easy", title: "Easy Run", distance: 5, notes: "Light and easy. Lay out gear, check your kit." },
    { day: "Thu", type: "easy", title: "Easy Shakeout", distance: 4, notes: "4×100m strides at the end. Stay loose." },
    { day: "Fri", type: "rest", title: "Rest Day", distance: 0, notes: "Full rest. Sleep early. Carb-load dinner tonight." },
    { day: "Sun", type: "long", title: "🏆 MARATHON DAY", distance: 42.2, notes: "GO TIME. Start easy (8:15/km). Run your own race. You've earned every step of this." },
  ]},
];

// ── Modal Component ──────────────────────────────────────────────
function RunModal({ run, weekNum, onClose, onToggle, isDone }) {
  if (!run) return null;
  const zone = PACE_ZONES[run.type];
  const detail = getRunDetail(run, weekNum);
  const isRaceDay = run.title.includes("MARATHON DAY");

  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", zIndex: 1000,
      display: "flex", alignItems: "flex-end", justifyContent: "center",
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: "#1A1A24", borderRadius: "24px 24px 0 0",
        width: "100%", maxWidth: 600, maxHeight: "90vh", overflowY: "auto",
        border: `1px solid ${zone.border}`, borderBottom: "none",
        animation: "slideUp 0.3s ease",
      }}>
        <style>{`@keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }`}</style>

        {/* Handle */}
        <div style={{ display: "flex", justifyContent: "center", padding: "12px 0 4px" }}>
          <div style={{ width: 40, height: 4, background: "#3A3A4A", borderRadius: 2 }} />
        </div>

        {/* Hero */}
        <div style={{ padding: "16px 24px 20px", background: `${zone.bg}`, borderBottom: `1px solid ${zone.border}` }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                <span style={{ fontSize: 11, fontWeight: 700, background: "#2A2A3A", color: "#9CA3AF", padding: "3px 8px", borderRadius: 6 }}>{run.day}</span>
                <span style={{ fontSize: 11, fontWeight: 700, background: `${zone.color}33`, color: zone.color, padding: "3px 8px", borderRadius: 6 }}>{zone.label}</span>
                {isRaceDay && <span style={{ fontSize: 11, fontWeight: 700, background: "#EC489933", color: "#EC4899", padding: "3px 8px", borderRadius: 6 }}>RACE DAY</span>}
              </div>
              <h2 style={{ margin: "0 0 4px", fontSize: 22, fontWeight: 800, color: "#FFF" }}>{run.title}</h2>
              {run.distance > 0 && (
                <div style={{ display: "flex", gap: 16, marginTop: 8 }}>
                  <div><div style={{ fontSize: 20, fontWeight: 800, color: zone.color }}>{run.distance} <span style={{ fontSize: 12, color: "#9CA3AF" }}>km</span></div><div style={{ fontSize: 10, color: "#6B6B80" }}>distance</div></div>
                  <div><div style={{ fontSize: 14, fontWeight: 700, color: "#FFF" }}>{zone.paceRange}</div><div style={{ fontSize: 10, color: "#6B6B80" }}>target pace</div></div>
                  <div><div style={{ fontSize: 14, fontWeight: 700, color: "#FFF" }}>{zone.effort}</div><div style={{ fontSize: 10, color: "#6B6B80" }}>effort</div></div>
                </div>
              )}
            </div>
            <button onClick={onClose} style={{ background: "#2A2A3A", border: "none", borderRadius: 10, width: 34, height: 34, color: "#9CA3AF", fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>×</button>
          </div>
        </div>

        <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", gap: 20 }}>

          {/* Overview */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: zone.color, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>What is this run?</div>
            <p style={{ margin: 0, fontSize: 14, color: "#D1D1DB", lineHeight: 1.7 }}>{detail.overview}</p>
          </div>

          {/* Structure */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: zone.color, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Run Structure</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {detail.structure.map((s, i) => (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", background: `${zone.color}22`, border: `2px solid ${zone.color}`, color: zone.color, fontWeight: 800, fontSize: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>{i + 1}</div>
                    {i < detail.structure.length - 1 && <div style={{ width: 2, height: 20, background: `${zone.color}33`, marginTop: 4 }} />}
                  </div>
                  <div style={{ flex: 1, paddingBottom: 4 }}>
                    <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 4 }}>
                      <span style={{ fontSize: 13, fontWeight: 700, color: "#FFF" }}>{s.phase}</span>
                      {s.duration && <span style={{ fontSize: 11, color: zone.color, fontWeight: 600 }}>{s.duration}</span>}
                    </div>
                    <p style={{ margin: 0, fontSize: 13, color: "#9CA3AF", lineHeight: 1.6 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coach Note */}
          <div style={{ background: "#12121A", border: `1px solid ${zone.color}33`, borderRadius: 12, padding: "14px 16px" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: zone.color, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>💬 Coach's Note</div>
            <p style={{ margin: 0, fontSize: 13, color: "#C1C1CB", lineHeight: 1.7, fontStyle: "italic" }}>{detail.coachNote}</p>
          </div>

          {/* Key Focus */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: zone.color, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>Key Focus Points</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {detail.keyFocus.map((f, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: zone.color, marginTop: 6, flexShrink: 0 }} />
                  <span style={{ fontSize: 13, color: "#D1D1DB", lineHeight: 1.5 }}>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mark Complete */}
          {!isRaceDay && (
            <button onClick={onToggle} style={{
              width: "100%", padding: "14px", borderRadius: 14,
              background: isDone ? "#1A2A1E" : zone.color,
              border: isDone ? `2px solid #4CAF7D` : "none",
              color: isDone ? "#4CAF7D" : "#FFF",
              fontWeight: 700, fontSize: 15, cursor: "pointer",
              marginTop: 4,
            }}>
              {isDone ? "✓ Marked as Complete" : "Mark as Complete"}
            </button>
          )}

          <div style={{ height: 8 }} />
        </div>
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────
export default function MarathonPlan() {
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [activeTab, setActiveTab] = useState("plan");
  const [completedRuns, setCompletedRuns] = useState({});
  const [modalRun, setModalRun] = useState(null);
  const [modalIdx, setModalIdx] = useState(null);

  const week = PLAN[selectedWeek - 1];
  const totalKm = week.runs.reduce((s, r) => s + r.distance, 0);
  const phaseColor = PHASE_COLORS[week.phase] || "#6366F1";

  const toggleComplete = (weekNum, dayIndex) => {
    const key = `${weekNum}-${dayIndex}`;
    setCompletedRuns(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const completedThisWeek = week.runs.filter((_, i) => completedRuns[`${selectedWeek}-${i}`]).length;
  const totalCompletedKm = PLAN.reduce((total, w) =>
    total + w.runs.reduce((s, r, i) => s + (completedRuns[`${w.week}-${i}`] ? r.distance : 0), 0), 0);

  const openModal = (run, idx) => { setModalRun(run); setModalIdx(idx); };
  const closeModal = () => { setModalRun(null); setModalIdx(null); };

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: "#0F0F13", minHeight: "100vh", color: "#F1F1F3" }}>

      {/* Modal */}
      {modalRun && (
        <RunModal
          run={modalRun} weekNum={selectedWeek}
          onClose={closeModal}
          isDone={!!completedRuns[`${selectedWeek}-${modalIdx}`]}
          onToggle={() => { toggleComplete(selectedWeek, modalIdx); }}
        />
      )}

      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #1A1A24 0%, #12121A 100%)", borderBottom: "1px solid #2A2A3A", padding: "20px 24px" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
            <span style={{ fontSize: 28 }}>🏃</span>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", color: "#6366F1", textTransform: "uppercase" }}>Aakash's Marathon Plan</div>
              <h1 style={{ margin: 0, fontSize: 22, fontWeight: 800, color: "#FFFFFF" }}>20-Week to 42.2 KM</h1>
            </div>
          </div>
          <div style={{ display: "flex", gap: 20, marginTop: 12, flexWrap: "wrap" }}>
            {[
              { label: "Start Fitness", val: "10K Runner" },
              { label: "Race Date", val: "Week 20" },
              { label: "Days/Week", val: "4 days" },
              { label: "KM Logged", val: `${totalCompletedKm.toFixed(1)} km` },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontSize: 16, fontWeight: 800, color: "#FFF" }}>{s.val}</div>
                <div style={{ fontSize: 10, color: "#6B6B80", textTransform: "uppercase", letterSpacing: "0.1em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ background: "#1A1A24", borderBottom: "1px solid #2A2A3A", padding: "0 24px" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", display: "flex", gap: 4 }}>
          {[["plan","Training Plan"],["zones","Pace Zones"],["tips","Tips"]].map(([id, label]) => (
            <button key={id} onClick={() => setActiveTab(id)} style={{
              background: "none", border: "none", cursor: "pointer",
              padding: "14px 14px", fontSize: 13, fontWeight: 600,
              color: activeTab === id ? "#6366F1" : "#6B6B80",
              borderBottom: activeTab === id ? "2px solid #6366F1" : "2px solid transparent",
            }}>{label}</button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 600, margin: "0 auto", padding: "20px 16px" }}>

        {activeTab === "plan" && <>
          {/* Phase bar */}
          <div style={{ background: "#1A1A24", borderRadius: 14, padding: "16px 20px", marginBottom: 20, border: "1px solid #2A2A3A" }}>
            <div style={{ fontSize: 11, color: "#6B6B80", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 10 }}>20-Week Timeline</div>
            <div style={{ display: "flex", gap: 3 }}>
              {PLAN.map((w, i) => (
                <div key={i} onClick={() => setSelectedWeek(w.week)} title={`Week ${w.week}: ${w.phase}`}
                  style={{ flex: 1, height: 8, borderRadius: 3, cursor: "pointer",
                    background: selectedWeek === w.week ? PHASE_COLORS[w.phase] : `${PHASE_COLORS[w.phase]}44`,
                    transition: "background 0.2s", outline: selectedWeek === w.week ? `2px solid ${PHASE_COLORS[w.phase]}` : "none", outlineOffset: 1,
                  }} />
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8, gap: 6, flexWrap: "wrap" }}>
              {[["Base Building","#4CAF7D"],["Build","#F59E0B"],["Peak","#EF4444"],["Taper","#6366F1"],["Race","#EC4899"]].map(([l, c]) => (
                <div key={l} style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: c }} />
                  <span style={{ fontSize: 10, color: "#6B6B80" }}>{l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Week selector */}
          <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginBottom: 18 }}>
            {PLAN.map(w => {
              const allDone = w.runs.every((_, i) => completedRuns[`${w.week}-${i}`]);
              return (
                <button key={w.week} onClick={() => setSelectedWeek(w.week)} style={{
                  width: 36, height: 36, borderRadius: 9, border: selectedWeek === w.week ? `2px solid ${PHASE_COLORS[w.phase]}` : "2px solid #2A2A3A",
                  background: selectedWeek === w.week ? `${PHASE_COLORS[w.phase]}22` : allDone ? "#1F2A1F" : "#1A1A24",
                  color: selectedWeek === w.week ? PHASE_COLORS[w.phase] : allDone ? "#4CAF7D" : "#9CA3AF",
                  fontSize: 12, fontWeight: 700, cursor: "pointer",
                }}>
                  {allDone ? "✓" : w.week}
                </button>
              );
            })}
          </div>

          {/* Week header */}
          <div style={{ background: "#1A1A24", borderRadius: 14, padding: "16px 20px", marginBottom: 14, border: `1px solid ${phaseColor}33` }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", color: phaseColor, textTransform: "uppercase" }}>{week.phase}</div>
                <div style={{ fontSize: 20, fontWeight: 800, color: "#FFF" }}>Week {week.week} <span style={{ fontSize: 13, fontWeight: 500, color: "#6B6B80" }}>of 20</span></div>
              </div>
              <div style={{ display: "flex", gap: 16 }}>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 20, fontWeight: 800, color: phaseColor }}>{totalKm} <span style={{ fontSize: 12, fontWeight: 400, color: "#9CA3AF" }}>km</span></div>
                  <div style={{ fontSize: 10, color: "#6B6B80" }}>weekly volume</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 20, fontWeight: 800, color: completedThisWeek === 4 ? "#4CAF7D" : "#FFF" }}>{completedThisWeek}<span style={{ fontSize: 13, color: "#6B6B80" }}>/4</span></div>
                  <div style={{ fontSize: 10, color: "#6B6B80" }}>runs done</div>
                </div>
              </div>
            </div>
            <div style={{ marginTop: 10, background: "#2A2A3A", borderRadius: 6, height: 4 }}>
              <div style={{ width: `${(completedThisWeek / 4) * 100}%`, height: "100%", borderRadius: 6, background: phaseColor, transition: "width 0.4s" }} />
            </div>
          </div>

          {/* Tap hint */}
          <div style={{ fontSize: 12, color: "#6B6B80", textAlign: "center", marginBottom: 12 }}>Tap any run for the full workout breakdown</div>

          {/* Run cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {week.runs.map((run, i) => {
              const zone = PACE_ZONES[run.type];
              const done = completedRuns[`${selectedWeek}-${i}`];
              const isRaceDay = run.title.includes("MARATHON DAY");
              return (
                <div key={i} onClick={() => openModal(run, i)} style={{
                  background: done ? "#1A2A1E" : "#1A1A24",
                  border: `1px solid ${done ? "#4CAF7D55" : isRaceDay ? "#EC4899" : "#2A2A3A"}`,
                  borderRadius: 14, padding: "14px 16px",
                  cursor: "pointer",
                  transition: "all 0.15s",
                  opacity: done && !isRaceDay ? 0.8 : 1,
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                        <span style={{ fontSize: 10, fontWeight: 700, background: "#2A2A3A", color: "#9CA3AF", padding: "2px 7px", borderRadius: 5 }}>{run.day}</span>
                        <span style={{ fontSize: 10, fontWeight: 700, background: zone.bg, color: zone.color, padding: "2px 7px", borderRadius: 5, border: `1px solid ${zone.border}` }}>{zone.label}</span>
                        {isRaceDay && <span style={{ fontSize: 10, fontWeight: 700, background: "#EC489922", color: "#EC4899", padding: "2px 7px", borderRadius: 5 }}>RACE DAY</span>}
                        {done && <span style={{ fontSize: 10, color: "#4CAF7D", fontWeight: 700 }}>✓ Done</span>}
                      </div>
                      <div style={{ fontSize: 15, fontWeight: 700, color: "#FFF", marginBottom: 2 }}>{run.title}</div>
                      <div style={{ fontSize: 12, color: "#6B6B80" }}>{run.distance > 0 ? `${run.distance} km · ${zone.paceRange}` : "Full rest day"}</div>
                    </div>
                    <div style={{ color: "#3A3A4A", fontSize: 18, marginLeft: 12 }}>›</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Nav */}
          <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
            <button onClick={() => setSelectedWeek(w => Math.max(1, w - 1))} disabled={selectedWeek === 1}
              style={{ flex: 1, padding: "12px", borderRadius: 12, border: "1px solid #2A2A3A", background: "#1A1A24", color: "#9CA3AF", cursor: selectedWeek === 1 ? "not-allowed" : "pointer", fontWeight: 600, fontSize: 14, opacity: selectedWeek === 1 ? 0.4 : 1 }}>
              ← Prev
            </button>
            <button onClick={() => setSelectedWeek(w => Math.min(20, w + 1))} disabled={selectedWeek === 20}
              style={{ flex: 1, padding: "12px", borderRadius: 12, border: "none", background: phaseColor, color: "#FFF", cursor: selectedWeek === 20 ? "not-allowed" : "pointer", fontWeight: 700, fontSize: 14, opacity: selectedWeek === 20 ? 0.4 : 1 }}>
              Next →
            </button>
          </div>
        </>}

        {/* PACE ZONES */}
        {activeTab === "zones" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ fontSize: 13, color: "#6B6B80", marginBottom: 4 }}>Paces based on your 5K best of 30 min (~6:00/km pace). Adjust these as you improve.</div>
            {Object.entries(PACE_ZONES).filter(([k]) => k !== "rest").map(([key, zone]) => (
              <div key={key} style={{ background: zone.bg, border: `1px solid ${zone.border}`, borderRadius: 14, padding: "16px 18px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <span style={{ fontWeight: 800, fontSize: 16, color: zone.color }}>{zone.label}</span>
                  <span style={{ background: `${zone.color}22`, color: zone.color, fontWeight: 700, fontSize: 12, padding: "3px 10px", borderRadius: 8 }}>{zone.paceRange}</span>
                </div>
                <div style={{ display: "flex", gap: 12, marginBottom: 10 }}>
                  <div><span style={{ fontSize: 11, color: "#6B6B80" }}>Effort </span><span style={{ fontSize: 12, fontWeight: 700, color: "#FFF" }}>{zone.effort}</span></div>
                  <div><span style={{ fontSize: 11, color: "#6B6B80" }}>HR Zone </span><span style={{ fontSize: 12, fontWeight: 700, color: "#FFF" }}>{zone.heartRate}</span></div>
                </div>
                <div style={{ background: "#2A2A3A", borderRadius: 6, height: 5 }}>
                  <div style={{ width: key === "easy" ? "40%" : key === "tempo" ? "68%" : key === "interval" ? "88%" : "52%", height: "100%", background: zone.color, borderRadius: 6 }} />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TIPS */}
        {activeTab === "tips" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { icon: "🍌", title: "Fuel Your Long Runs", body: "For runs over 75 mins, take an energy gel or banana every 45 minutes. Start fuelling early — don't wait until you feel tired or your pace will drop before you notice." },
              { icon: "💧", title: "Hydration Strategy", body: "Drink 400–600ml of water 2 hours before running. During long runs, aim for 150–250ml every 20 minutes. Practice race-day nutrition on every Sunday long run — your gut needs training too." },
              { icon: "😴", title: "Sleep is Training", body: "You're waking at 4am — protect 7–8 hours total. Sleep is when HGH peaks and muscle fibres repair. Compromising sleep compromises every adaptation from training." },
              { icon: "🧊", title: "Recovery Toolkit", body: "After hard runs: 10 min walk cool-down, foam roll calves, IT band, glutes. Cold shower contrast if possible. Rest days are sacred — protect them." },
              { icon: "👟", title: "Shoe Strategy", body: "If possible, rotate two pairs — one cushioned for easy/long runs, one lighter for intervals. Running shoes last 500–700km. Your long run volume alone will clock these fast." },
              { icon: "📉", title: "Trust the Taper", body: "Weeks 18–19 will feel uncomfortable — sluggish, undertrained. This is 100% normal. Your body is consolidating 17 weeks of fitness. Adding runs is the worst thing you can do." },
              { icon: "🎯", title: "Race Day Pacing", body: "Start at 8:15–8:30/km regardless of how good you feel. The first 10km should feel embarrassingly easy. Most first marathon disasters happen before km 15 when people feel great and go too fast." },
              { icon: "🩺", title: "Know the Difference", body: "Muscle fatigue and soreness = normal. Sharp joint pain, knee pain, or pain that worsens during a run = warning. Rest always beats injury. A missed training day hurts less than a missed race day." },
            ].map((tip, i) => (
              <div key={i} style={{ background: "#1A1A24", border: "1px solid #2A2A3A", borderRadius: 14, padding: "16px 18px" }}>
                <div style={{ fontSize: 22, marginBottom: 8 }}>{tip.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 15, color: "#FFF", marginBottom: 6 }}>{tip.title}</div>
                <div style={{ fontSize: 13, color: "#9CA3AF", lineHeight: 1.6 }}>{tip.body}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
