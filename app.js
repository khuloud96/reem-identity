/* ================================================================
   ريم وعقد الهوية — كتاب تفاعلي (v3: أيقونات مرسومة + صوت خليجي)
   ================================================================ */

/* ---------- clock ---------- */
function tick(){const d=new Date();let h=d.getHours(),m=d.getMinutes();
  document.getElementById('clock').textContent=h+':'+(m<10?'0'+m:m);}
tick(); setInterval(tick,10000);

/* ================================================================
   ICONS — مكتبة رموز إماراتية مرسومة (بديل كامل للإيموجي)
   ================================================================ */
const ICONS={
mosque:`<svg viewBox="0 0 48 48"><rect x="8" y="26" width="32" height="14" rx="2" fill="#e9d3a0"/><path d="M8 26 q16 -16 32 0Z" fill="#0b7a4b"/><rect x="22.5" y="10" width="3" height="9" fill="#0b7a4b"/><circle cx="24" cy="8" r="2.5" fill="#c9a227"/><rect x="4" y="21" width="5" height="19" fill="#d6b97e"/><rect x="39" y="21" width="5" height="19" fill="#d6b97e"/><path d="M4 21 q2.5 -7 5 0Z" fill="#0b7a4b"/><path d="M39 21 q2.5 -7 5 0Z" fill="#0b7a4b"/><rect x="20" y="31" width="8" height="9" rx="4" fill="#7a5a2e"/></svg>`,
flag:`<svg viewBox="0 0 48 48"><rect x="8" y="5" width="3" height="38" rx="1.5" fill="#8a7c63"/><rect x="11" y="8" width="8" height="18" fill="#c8102e"/><rect x="19" y="8" width="21" height="6" fill="#009a44"/><rect x="19" y="14" width="21" height="6" fill="#fff"/><rect x="19" y="20" width="21" height="6" fill="#1c1c1e"/></svg>`,
camel:`<svg viewBox="0 0 48 48"><path d="M5 36 l2 -7 q1 -4 5 -4 h3 q2 0 3 -2 q1 -6 6 -7 q3 -0.6 4 2 l1 3 q4 1 5 5 l2 10 h-4 l-1.5 -7 h-2.5 l-1 7 h-4 l-1 -7 h-6 l-1 7 h-4 l-0.7 -7 h-1.8 l-1 7Z" fill="#b98a4e"/><path d="M22 17 q2 -7 6.5 -7.5 l-1 6.5Z" fill="#a8804a"/><path d="M27 9 q4 -2 5 1.5 q-1 2.5 -5 2.5Z" fill="#b98a4e"/><circle cx="30.5" cy="11" r="1" fill="#241c10"/></svg>`,
dallah:`<svg viewBox="0 0 48 48"><path d="M17 41 h14 l2 -4 h-18Z" fill="#8a6a1a"/><path d="M17 37 q-3.5 -10 1.5 -16 h11 q5 6 1.5 16Z" fill="#c9a227"/><path d="M19 21 l-1.5 -4 h13 l-1.5 4Z" fill="#b98d1c"/><path d="M23 17 l1 -5.5 l1 5.5Z" fill="#8a6a1a"/><circle cx="24" cy="9.5" r="2.2" fill="#c9a227"/><path d="M14 23 q-6 2 -4.5 9 q3.5 1 5.5 -1.5" fill="none" stroke="#b98d1c" stroke-width="2.6" stroke-linecap="round"/><path d="M32 23 q6 -4 6.5 -11" fill="none" stroke="#b98d1c" stroke-width="2.6" stroke-linecap="round"/></svg>`,
palm:`<svg viewBox="0 0 48 48"><path d="M22 42 q1.2 -13 0.4 -21 q3 8 4.2 21Z" fill="#8a5a2e"/><g stroke="#0b7a4b" stroke-width="3.4" fill="none" stroke-linecap="round"><path d="M23 20 q-8 -6 -14 -2"/><path d="M23 20 q8 -6 14 -2"/><path d="M23 19 q-6 -8 -12 -9"/><path d="M23 19 q6 -8 12 -9"/><path d="M23 18 q0.5 -8 1.5 -10"/></g><circle cx="20" cy="22.5" r="2" fill="#c9a227"/><circle cx="26" cy="22.5" r="2" fill="#c9a227"/></svg>`,
falcon:`<svg viewBox="0 0 48 48"><path d="M13 29 q-2 -14 11 -18 q12 -3.5 14 5.5 q1 4 -2 5 l-6 1.5 q-2 6 -8 8 q-5.5 1.4 -9 -2Z" fill="#8a6a45"/><path d="M35 15 q4.5 0.5 3.6 4 l-5.6 1Z" fill="#c9a227"/><circle cx="30" cy="15" r="2" fill="#241c10"/><path d="M13 29 q6 4 12 2.4 l-2 6.6 q-6.5 2 -10.5 -2Z" fill="#6b4a2a"/><path d="M18 18 q6 -4 12 -3" stroke="#6b4a2a" stroke-width="1.6" fill="none"/></svg>`,
dhow:`<svg viewBox="0 0 48 48"><path d="M8 31 h32 l-6 8 h-20Z" fill="#8a5a2e"/><path d="M24 7 v24" stroke="#6b3f1d" stroke-width="2.5"/><path d="M25.5 9 q14 9 1 20Z" fill="#f3e7c8"/><path d="M22.5 12 q-10 8 -0.5 17Z" fill="#e8d8b8"/><path d="M5 42 q6 3 12 0 q6 3 12 0 q6 3 14 0" stroke="#4fa3cf" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg>`,
fort:`<svg viewBox="0 0 48 48"><rect x="13" y="14" width="22" height="26" fill="#d6b97e"/><path d="M13 14 v-5 h4 v5 M22 14 v-5 h4 v5 M31 14 v-5 h4 v5" fill="#c7ad78"/><rect x="13" y="14" width="22" height="3" fill="#c7ad78"/><rect x="21" y="27" width="6" height="13" rx="3" fill="#7a5a2e"/><rect x="17" y="19" width="4" height="5" rx="2" fill="#8a6a45"/><rect x="27" y="19" width="4" height="5" rx="2" fill="#8a6a45"/></svg>`,
drum:`<svg viewBox="0 0 48 48"><path d="M11 15 v17 q13 8 26 0 v-17" fill="#a8431f"/><path d="M11 20 l8 6 -8 6 M37 20 l-8 6 8 6" stroke="#e8d8b8" stroke-width="2" fill="none"/><ellipse cx="24" cy="15" rx="13" ry="5" fill="#e8d8b8"/><ellipse cx="24" cy="15" rx="9" ry="3.2" fill="#f3ead2"/></svg>`,
pottery:`<svg viewBox="0 0 48 48"><path d="M19 9 h10 l-1 4 q8 4 6.5 14 q-1.6 11 -9.5 11 q-7.9 0 -9.5 -11 q-1.5 -10 6.5 -14Z" fill="#a8431f"/><path d="M16.5 22 h15" stroke="#7c2d12" stroke-width="2"/><path d="M18 27 h12" stroke="#7c2d12" stroke-width="1.4" opacity=".7"/></svg>`,
shell:`<svg viewBox="0 0 48 48"><path d="M8 26 q16 -19 32 0 q-8 13 -16 13 q-8 0 -16 -13Z" fill="#e8c8a0"/><path d="M12 25 q12 -13 24 0 M16 24 q8 -8 16 0" stroke="#c79a6b" stroke-width="1.8" fill="none"/><circle cx="24" cy="29" r="5.5" fill="#f3efe4"/><circle cx="22" cy="27" r="1.8" fill="#fff"/></svg>`,
star:`<svg viewBox="0 0 48 48"><path d="M24 5 l5.2 11.4 12.4 1.5 -9.2 8.4 2.5 12.3 -10.9 -6.2 -10.9 6.2 2.5 -12.3 -9.2 -8.4 12.4 -1.5Z" fill="#f4c430" stroke="#d9a616" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
home:`<svg viewBox="0 0 48 48"><path d="M7 24 L24 9 L41 24" fill="none" stroke="#0b7a4b" stroke-width="4.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 22 v18 h24 v-18" fill="#0b7a4b"/><rect x="20" y="28" width="8" height="12" rx="1.5" fill="#fffdf7"/></svg>`,
heart:`<svg viewBox="0 0 48 48"><path d="M24 41 C10 31 5.5 22.5 9.5 15.5 q5 -8.5 14.5 0.5 q9.5 -9 14.5 -0.5 c4 7 -0.5 15.5 -14.5 25.5Z" fill="#c8102e"/></svg>`,
heartEmpty:`<svg viewBox="0 0 48 48"><path d="M24 41 C10 31 5.5 22.5 9.5 15.5 q5 -8.5 14.5 0.5 q9.5 -9 14.5 -0.5 c4 7 -0.5 15.5 -14.5 25.5Z" fill="#d8d2c2"/></svg>`,
basket:`<svg viewBox="0 0 48 48"><path d="M10 19 q14 -13 28 0" fill="none" stroke="#8a5a2e" stroke-width="3.2"/><path d="M6 19 h36 l-5 21 h-26Z" fill="#c9a227"/><path d="M6 19 h36 l-1.6 6.5 h-32.8Z" fill="#b98d1c"/><path d="M14 26 v11 M24 26 v13 M34 26 v11" stroke="#8a6a1a" stroke-width="2.5"/></svg>`,
gazelleMini:`<svg viewBox="0 0 48 48"><path d="M9 35 q0 -9 10 -9 h9 q8 0 8 7 l-1.6 8 h-3.4 l-1 -6 h-12 l-1 6 h-3.4Z" fill="#c99e60"/><path d="M32 27 q3.5 -6 2 -13 l3 -1.6" fill="none" stroke="#c99e60" stroke-width="4.4" stroke-linecap="round"/><circle cx="38" cy="11.5" r="4.4" fill="#c99e60"/><path d="M36 8 q-2.4 -4.6 0.6 -8 M40.5 8 q-0.4 -4.6 3 -7" stroke="#5d4526" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="39.6" cy="10.4" r="0.9" fill="#241c10"/></svg>`,
crescent:`<svg viewBox="0 0 48 48"><path d="M33 4 C17 6 8 18 10 30 C12 42 24 48 35 45 C25 42 19 34 19 23 C19 13 25 7 33 4Z" fill="#c9a227"/><path d="M36 12 l1.6 3.4 3.6 0.5 -2.6 2.5 0.6 3.6 -3.2 -1.7 -3.2 1.7 0.6 -3.6 -2.6 -2.5 3.6 -0.5Z" fill="#c9a227"/></svg>`,
clock:`<svg viewBox="0 0 48 48"><circle cx="24" cy="25" r="16.5" fill="#fffdf7" stroke="#c8102e" stroke-width="3.4"/><path d="M24 15.5 v9.5 l7 5" stroke="#2b2418" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M12 7 l-5 5 M36 7 l5 5" stroke="#c8102e" stroke-width="3.4" stroke-linecap="round"/></svg>`,
controller:`<svg viewBox="0 0 48 48"><rect x="5" y="15" width="38" height="19" rx="9.5" fill="#0b7a4b"/><path d="M14 20.5 v8 M10 24.5 h8" stroke="#fff" stroke-width="3" stroke-linecap="round"/><circle cx="32" cy="21.5" r="2.5" fill="#fff"/><circle cx="37" cy="26.5" r="2.5" fill="#fff"/></svg>`,
refresh:`<svg viewBox="0 0 48 48"><path d="M39 21 a15.5 15.5 0 1 0 1.5 9" fill="none" stroke="#0b7a4b" stroke-width="4.4" stroke-linecap="round"/><path d="M40 8 v13 h-13" fill="none" stroke="#0b7a4b" stroke-width="4.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
soundOn:`<svg viewBox="0 0 48 48"><path d="M9 19 h7 l9 -8 v26 l-9 -8 h-7Z" fill="#0b7a4b"/><path d="M30 18 q4.5 6 0 12 M34.5 13.5 q7.5 10.5 0 21" stroke="#0b7a4b" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`,
soundOff:`<svg viewBox="0 0 48 48"><path d="M9 19 h7 l9 -8 v26 l-9 -8 h-7Z" fill="#8a7c63"/><path d="M31 19 l10 10 M41 19 l-10 10" stroke="#c8102e" stroke-width="3.4" stroke-linecap="round"/></svg>`,
trophy:`<svg viewBox="0 0 48 48"><path d="M14 7 h20 v10 q0 10 -10 12.5 q-10 -2.5 -10 -12.5Z" fill="#f4c430"/><path d="M14 10 h-6.5 q0.5 10 8.5 12 M34 10 h6.5 q-0.5 10 -8.5 12" fill="none" stroke="#d9a616" stroke-width="3"/><rect x="20.5" y="29.5" width="7" height="6" fill="#d9a616"/><rect x="14" y="35.5" width="20" height="5.5" rx="2" fill="#8a6a1a"/></svg>`,
burst:`<svg viewBox="0 0 48 48"><g stroke-width="3.4" stroke-linecap="round" fill="none"><path d="M24 4 v9" stroke="#c8102e"/><path d="M24 35 v9" stroke="#0b7a4b"/><path d="M4 24 h9" stroke="#c9a227"/><path d="M35 24 h9" stroke="#0a84ff"/><path d="M10 10 l6.5 6.5" stroke="#0b7a4b"/><path d="M31.5 31.5 l6.5 6.5" stroke="#c9a227"/><path d="M38 10 l-6.5 6.5" stroke="#c8102e"/><path d="M16.5 31.5 l-6.5 6.5" stroke="#0a84ff"/></g><circle cx="24" cy="24" r="5.5" fill="#f4c430"/></svg>`,
oops:`<svg viewBox="0 0 48 48"><circle cx="23" cy="26" r="16" fill="#f4c430"/><circle cx="17.5" cy="23" r="2.3" fill="#241c10"/><circle cx="28.5" cy="23" r="2.3" fill="#241c10"/><path d="M17.5 33.5 q5.5 -4 11 0" stroke="#241c10" stroke-width="2.6" fill="none" stroke-linecap="round"/><path d="M39 9 q4.5 5.5 0 9 q-4.5 -3.5 0 -9Z" fill="#0a84ff"/></svg>`,
bookOpen:`<svg viewBox="0 0 48 48"><path d="M24 12 q-8 -5 -16 -3 v26 q8 -2 16 3 q8 -5 16 -3 v-26 q-8 -2 -16 3Z" fill="#fffdf7" stroke="#0b7a4b" stroke-width="3"/><path d="M24 12 v26" stroke="#0b7a4b" stroke-width="2"/><path d="M12 17 q4 -0.5 8 1 M12 23 q4 -0.5 8 1 M28 18 q4 -1.5 8 -1 M28 24 q4 -1.5 8 -1" stroke="#c9a227" stroke-width="1.7" fill="none" stroke-linecap="round"/></svg>`,
hands:`<svg viewBox="0 0 48 48"><path d="M14 41 q-6.5 -10 -4.5 -20 q1 -4 4 -3 l2 6 q1 -9 4.5 -9 q3 0 3 6 v10 l-1 10Z" fill="#e7c891"/><path d="M34 41 q6.5 -10 4.5 -20 q-1 -4 -4 -3 l-2 6 q-1 -9 -4.5 -9 q-3 0 -3 6 v10 l1 10Z" fill="#dcb47a"/></svg>`,
gift:`<svg viewBox="0 0 48 48"><rect x="8" y="18" width="32" height="7.5" rx="1.5" fill="#c8102e"/><rect x="10.5" y="25.5" width="27" height="14.5" rx="1.5" fill="#e04658"/><rect x="21" y="18" width="6" height="22" fill="#f4c430"/><path d="M24 18 q-8.5 -2 -8.5 -7 q6.5 -2.5 8.5 7 q2 -9.5 8.5 -7 q0 5 -8.5 7Z" fill="#f4c430"/></svg>`,
handshake:`<svg viewBox="0 0 48 48"><rect x="2" y="19" width="11" height="12" rx="2.5" fill="#0a84ff"/><rect x="35" y="16" width="11" height="12" rx="2.5" fill="#0b7a4b"/><path d="M12 22 q6 -4 10 -1 l7 6 q2.5 2.5 0 5 t-5 0 l-3 -3" fill="none" stroke="#e7c891" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M36 19 q-6 -3 -10 0 l-8 7" fill="none" stroke="#dcb47a" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
rain:`<svg viewBox="0 0 48 48"><path d="M14 26 a8 8 0 1 1 2.5 -15.4 a10 10 0 0 1 19 3 a7 7 0 0 1 -2.5 12.4Z" fill="#cfd8e3"/><path d="M15.5 31 l-3 7.5 M24.5 31 l-3 7.5 M33.5 31 l-3 7.5" stroke="#0a84ff" stroke-width="3" stroke-linecap="round"/></svg>`,
trafficLight:`<svg viewBox="0 0 48 48"><rect x="15.5" y="5" width="17" height="35" rx="6.5" fill="#2b2b2e"/><circle cx="24" cy="13.5" r="4.2" fill="#c8102e"/><circle cx="24" cy="22.5" r="4.2" fill="#f4c430"/><circle cx="24" cy="31.5" r="4.2" fill="#0b7a4b"/></svg>`,
tree:`<svg viewBox="0 0 48 48"><path d="M22 42 q1.2 -9 0.4 -15 h4 q-1 6 0.2 15Z" fill="#8a5a2e"/><path d="M8 21 q-2.5 -12 12 -14 q14.5 -4 20.5 6 q4 8.5 -6 12.5 q-14.5 4 -26.5 -4.5Z" fill="#0b7a4b"/><path d="M14 15 q8 -4 18 -2" stroke="#0e9a5f" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`,
volunteer:`<svg viewBox="0 0 48 48"><path d="M10 41 q-4.5 -8 -2.5 -16.5 l6 2 v-12 q0 -3 3 -3 t3 3 v8 l10.5 2 q4 1 3.5 5 l-2 11.5Z" fill="#e7c891"/><path d="M30 7 c3 -3.4 8.5 0 6.4 4.4 c-1.2 2.2 -3.4 4.2 -6.4 6.2 c-3 -2 -5.2 -4 -6.4 -6.2 c-2.1 -4.4 3.4 -7.8 6.4 -4.4Z" fill="#c8102e"/></svg>`,
globe:`<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="16.5" fill="#bfe3ff" stroke="#0a84ff" stroke-width="3"/><path d="M7.5 24 h33 M24 7.5 a25 25 0 0 1 0 33 M24 7.5 a25 25 0 0 0 0 33" stroke="#0a84ff" stroke-width="2.2" fill="none"/></svg>`,
speech:`<svg viewBox="0 0 48 48"><path d="M8 9 h32 q3 0 3 3 v17 q0 3 -3 3 h-17 l-9 9 v-9 h-6 q-3 0 -3 -3 v-17 q0 -3 3 -3Z" fill="#0b7a4b"/><text x="24" y="26" font-size="15" fill="#fff" text-anchor="middle" font-weight="bold" font-family="inherit">ع</text></svg>`,
scroll:`<svg viewBox="0 0 48 48"><path d="M13 8 h25 v29 q0 4 -4 4 h-21 q-4 0 -4 -4 v-25 q0 -4 4 -4Z" fill="#f3e7c8"/><path d="M13 8 q-4 0 -4 4 t4 4 h4 v-8Z" fill="#d6b97e"/><path d="M19 18 h13 M19 24 h13 M19 30 h8" stroke="#8a6a45" stroke-width="2.4" stroke-linecap="round"/></svg>`,
kandura:`<svg viewBox="0 0 48 48"><path d="M18 6 h12 l6.5 6 -4 4.5 -2.5 -2.5 v28 h-12 v-28 l-2.5 2.5 -4 -4.5Z" fill="#fffdf7" stroke="#cfc7b0" stroke-width="2"/><path d="M21.5 6 q2.5 3.5 5 0" stroke="#cfc7b0" stroke-width="2" fill="none"/><path d="M24 15 v9" stroke="#cfc7b0" stroke-width="2"/></svg>`,
henna:`<svg viewBox="0 0 48 48"><path d="M16 42 q-4.5 -8 -3.5 -18 q0 -3 3 -3 l2 5 v-13 q0 -3 3 -3 q2.5 0 2.5 3 v-1.5 q0 -3 3 -3 t3 3 v3.5 q0 -2 2 -2 q3 0 3 3 v6 q3 -2 4 1 q2 5.5 -2 12.5 l-4 7.5Z" fill="#e7c891"/><g fill="#a8431f"><circle cx="24" cy="28" r="2"/><circle cx="20" cy="33" r="1.4"/><circle cx="28" cy="33" r="1.4"/></g><path d="M21.5 22 q2.5 -2.5 5 0" stroke="#a8431f" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>`,
shield:`<svg viewBox="0 0 48 48"><path d="M24 5 q8 4 16.5 4.2 v14 q0 12.5 -16.5 19 q-16.5 -6.5 -16.5 -19 v-14 q8.5 -0.2 16.5 -4.2Z" fill="#0b7a4b"/><path d="M24 11.5 q5 2.5 10 3 v8.7 q0 8.3 -10 12.6Z" fill="#0e9a5f"/></svg>`,
fish:`<svg viewBox="0 0 48 48"><path d="M7 24 q10.5 -12.5 22.5 -6 l9 -6.5 v25 l-9 -6.5 q-12 6.5 -22.5 -6Z" fill="#4fa3cf"/><circle cx="15" cy="22" r="1.9" fill="#fff"/><path d="M22 18 q4 5.5 0 12" stroke="#3b86ad" stroke-width="1.8" fill="none"/></svg>`,
beads:`<svg viewBox="0 0 48 48"><g fill="#0b7a4b"><circle cx="12" cy="16" r="4"/><circle cx="19" cy="9.5" r="4"/><circle cx="29" cy="9.5" r="4"/><circle cx="36" cy="16" r="4"/><circle cx="39" cy="25.5" r="4"/><circle cx="9" cy="25.5" r="4"/><circle cx="13.5" cy="34.5" r="4"/><circle cx="34.5" cy="34.5" r="4"/></g><path d="M24 37.5 v5.5 M21.5 44 h5" stroke="#0b7a4b" stroke-width="3" stroke-linecap="round"/></svg>`,
burger:`<svg viewBox="0 0 48 48"><path d="M8 20 q0 -10.5 16 -10.5 t16 10.5Z" fill="#e0a04e"/><rect x="8" y="21" width="32" height="5" rx="2.5" fill="#0b7a4b"/><rect x="7" y="27" width="34" height="6" rx="3" fill="#8a4a1f"/><path d="M8 35 q0 6 8 6 h16 q8 0 8 -6Z" fill="#e0a04e"/><circle cx="17" cy="15" r="1.2" fill="#fff8e8"/><circle cx="25" cy="13" r="1.2" fill="#fff8e8"/><circle cx="32" cy="15.5" r="1.2" fill="#fff8e8"/></svg>`,
soda:`<svg viewBox="0 0 48 48"><path d="M14 14 h20 l-3.2 28 h-13.6Z" fill="#c8102e"/><path d="M14.8 21 h18.4" stroke="#fff" stroke-width="3.4"/><path d="M24 14 l6.5 -8.5" stroke="#8a7c63" stroke-width="3" stroke-linecap="round"/></svg>`,
robot:`<svg viewBox="0 0 48 48"><rect x="12" y="14" width="24" height="18" rx="4.5" fill="#9aa4b2"/><circle cx="19.5" cy="22" r="3" fill="#0a84ff"/><circle cx="28.5" cy="22" r="3" fill="#0a84ff"/><rect x="18" y="27" width="12" height="3" rx="1.5" fill="#2b2b2e"/><path d="M24 14 v-5" stroke="#9aa4b2" stroke-width="3"/><circle cx="24" cy="7" r="2.6" fill="#c8102e"/><rect x="16" y="34" width="16" height="7" rx="3" fill="#7a8494"/></svg>`,
cap:`<svg viewBox="0 0 48 48"><path d="M10 26 q0 -14.5 14 -14.5 t14 14.5Z" fill="#0a84ff"/><path d="M10 26 h28 q8.5 0 8.5 4 h-36.5Z" fill="#0868c8"/><circle cx="24" cy="11" r="2" fill="#0868c8"/></svg>`
};
function ic(name,px,mono){
  return '<span class="ic'+(mono?' wico':'')+'" style="width:'+px+'px;height:'+px+'px">'+(ICONS[name]||'')+'</span>';
}
function iconInner(name){return (ICONS[name]||'').replace(/^<svg[^>]*>/,'').replace(/<\/svg>$/,'');}

/* ---------- صور ملوّنة من مجلد img (صور المستخدم) ---------- */
const IMGS={
 gazelle:'gazelle.png', family:'family.jpeg', mosque:'mosque.jpeg', dallah:'dallah.jpeg',
 palm:'palm.png', fort1:'fort1.jpeg', fort2:'fort2.jpeg', beads:'beads.jpg',
 crescent:'crescent.jpg', dua:'dua.png', charity:'charity.png', honesty:'honesty.jpeg',
 traffic:'traffic.jpeg', park:'park.jpg', diyafa:'diyafa.jpg', urs:'urs.jpg',
 falcon:'falcon.png', camel:'camel.png', handshake:'uaehands.jpg'
};
function pic(name,px){
  if(IMGS[name])return '<span class="ic" style="width:'+px+'px;height:'+px+'px">'
    +'<img src="img/'+IMGS[name]+'" alt="" style="width:100%;height:100%;object-fit:contain;border-radius:6px"></span>';
  return ic(name,px);
}

/* ================================================================
   SOUND — إيقاع خليجي هادئ (عود + دُم تَك) وصوت ورق حقيقي
   ================================================================ */
const Snd={
 ctx:null, master:null, ambGain:null, timer:null, step:0, mIdx:2,
 muted:JSON.parse(localStorage.getItem('reem_muted')||'false'),
 SCALE:[293.66,311.13,369.99,392,440,466.16,554.37,587.33], /* مقام حجاز على ري */
 ensure(){
   if(!this.ctx){
     const AC=window.AudioContext||window.webkitAudioContext; if(!AC)return null;
     this.ctx=new AC();
     this.master=this.ctx.createGain(); this.master.connect(this.ctx.destination);
     this.ambGain=this.ctx.createGain(); this.ambGain.gain.value=.1; this.ambGain.connect(this.master);
     this.startAmb();
   }
   if(this.ctx.state==='suspended')this.ctx.resume();
   this.master.gain.value=this.muted?0:1;
   return this.ctx;
 },
 /* لحن أصلي مرح بروح أغاني الكرتون الإماراتي: ري ماجور، إيقاع راقص خفيف */
 NOTES:[293.66,329.63,369.99,440,493.88,587.33,659.25,739.99],
 LEAD:[0,1,2,3, 4,3,2,1, 0,2,3,5, 4,-1,3,-1,
       3,3,4,5, 4,3,2,0, 1,2,1,0, 0,-1,-1,-1],
 BASS:[73.42,110,98,110],
 startAmb(){
   this.timer=setInterval(()=>{
     if(this.muted||!this.ctx)return;
     const s=this.step%32;
     /* إيقاع مرح: دُم على النبض، تَك على الرد */
     if(s%4===0)this.dum();
     if(s%4===2)this.tak();
     if(s%8===7)this.tak();
     const n=this.LEAD[s];
     if(n>=0)this.lead(this.NOTES[n]);
     if(s%8===0)this.bass(this.BASS[(s/8)|0]);
     this.step++;
   },240);
 },
 lead(f){const c=this.ctx,t=c.currentTime;
   const g=c.createGain(); g.connect(this.ambGain);
   g.gain.setValueAtTime(.0001,t); g.gain.exponentialRampToValueAtTime(.3,t+.015);
   g.gain.exponentialRampToValueAtTime(.0001,t+.24);
   const fl=c.createBiquadFilter(); fl.type='lowpass'; fl.frequency.value=2300; fl.connect(g);
   [0,6].forEach(d=>{const o=c.createOscillator(); o.type='square';
     o.frequency.value=f*(1+d/1200); o.connect(fl); o.start(t); o.stop(t+.26);});
 },
 bass(f){const c=this.ctx,t=c.currentTime;
   const o=c.createOscillator(),g=c.createGain();
   o.type='triangle'; o.frequency.value=f;
   g.gain.setValueAtTime(.0001,t); g.gain.exponentialRampToValueAtTime(.4,t+.02);
   g.gain.exponentialRampToValueAtTime(.0001,t+.4);
   o.connect(g); g.connect(this.ambGain); o.start(t); o.stop(t+.45);
 },
 dum(){const c=this.ctx,t=c.currentTime;
   const o=c.createOscillator(),g=c.createGain();
   o.type='sine'; o.frequency.setValueAtTime(135,t); o.frequency.exponentialRampToValueAtTime(48,t+.12);
   g.gain.setValueAtTime(.55,t); g.gain.exponentialRampToValueAtTime(.001,t+.17);
   o.connect(g); g.connect(this.ambGain); o.start(t); o.stop(t+.19);
 },
 tak(){const c=this.ctx,t=c.currentTime;
   const buf=c.createBuffer(1,c.sampleRate*.045,c.sampleRate),d=buf.getChannelData(0);
   for(let i=0;i<d.length;i++)d[i]=(Math.random()*2-1)*(1-i/d.length);
   const s=c.createBufferSource(); s.buffer=buf;
   const fl=c.createBiquadFilter(); fl.type='bandpass'; fl.frequency.value=3200; fl.Q.value=1.4;
   const g=c.createGain(); g.gain.value=.22;
   s.connect(fl); fl.connect(g); g.connect(this.ambGain); s.start(t);
 },
 noiseBurst(dur,f0,f1,vol,when,type,Q){
   const c=this.ctx,t=c.currentTime;
   const buf=c.createBuffer(1,Math.max(1,c.sampleRate*dur),c.sampleRate),d=buf.getChannelData(0);
   for(let i=0;i<d.length;i++){const e=1-i/d.length; d[i]=(Math.random()*2-1)*e*e;}
   const s=c.createBufferSource(); s.buffer=buf;
   const fl=c.createBiquadFilter(); fl.type=type||'bandpass'; fl.Q.value=Q||1;
   fl.frequency.setValueAtTime(f0,t+when);
   try{fl.frequency.exponentialRampToValueAtTime(Math.max(40,f1),t+when+dur);}catch(e){}
   const g=c.createGain(); g.gain.value=vol;
   s.connect(fl); fl.connect(g); g.connect(this.master); s.start(t+when);
 },
 flip(){ /* صوت تقليب ورقة حقيقي: قرقعة + انزلاق + استقرار */
   const c=this.ensure(); if(!c||this.muted)return;
   this.noiseBurst(.05,5200,3600,.5,0,'highpass',.7);
   this.noiseBurst(.16,2400,650,.7,.02,'bandpass',.8);
   this.noiseBurst(.07,1100,450,.35,.16,'bandpass',1);
 },
 tone(f,dur,type,vol,when){
   const c=this.ensure(); if(!c)return;
   dur=dur||.25; type=type||'triangle'; vol=vol||.18; when=when||0;
   const t=c.currentTime+when,o=c.createOscillator(),g=c.createGain();
   o.type=type; o.frequency.value=f; o.connect(g); g.connect(this.master);
   g.gain.setValueAtTime(.0001,t); g.gain.exponentialRampToValueAtTime(vol,t+.02);
   g.gain.exponentialRampToValueAtTime(.0001,t+dur); o.start(t); o.stop(t+dur+.05);
 },
 ding(){this.tone(660,.18,'sine',.2); this.tone(880,.26,'sine',.18,.09);},
 star(){this.tone(1046,.14,'sine',.2); this.tone(1568,.2,'sine',.15,.08);},
 buzz(){this.tone(140,.32,'sawtooth',.16);},
 fanfare(){[523,659,784,1046].forEach((f,i)=>this.tone(f,.4,'triangle',.22,i*.13));},
 pad(i){this.tone([330,392,494,587][i],.3,'square',.13);},
 toggle(){this.muted=!this.muted; localStorage.setItem('reem_muted',JSON.stringify(this.muted));
   this.ensure(); updateSndBtn();}
};
function updateSndBtn(){document.getElementById('sndBtn').innerHTML=ic(Snd.muted?'soundOff':'soundOn',22);}
document.getElementById('sndBtn').onclick=()=>Snd.toggle();
document.addEventListener('pointerdown',()=>Snd.ensure(),{once:true});
updateSndBtn();

/* ================================================================
   GAZELLE — ريم (غزال الريم العربي)
   ================================================================ */
const GAZELLE = `
<svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg">
 <defs>
  <linearGradient id="bodyG" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#dcb47a"/><stop offset=".65" stop-color="#c99e60"/><stop offset="1" stop-color="#b98c4f"/>
  </linearGradient>
  <linearGradient id="neckG" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#d8ae72"/><stop offset="1" stop-color="#c49658"/>
  </linearGradient>
 </defs>
 <ellipse cx="130" cy="189" rx="82" ry="8" fill="#e3d2ac"/>
 <ellipse cx="130" cy="191" rx="70" ry="6" fill="rgba(120,90,30,.18)"/>

 <path d="M124 120 C123 136 124 150 122 162 C121 172 122 180 121 186" stroke="#a8804a" stroke-width="4.5" fill="none" stroke-linecap="round"/>
 <path d="M121 186 L121 191" stroke="#3a2c18" stroke-width="4.5" stroke-linecap="round"/>
 <path d="M170 118 C176 130 175 140 168 148 C166 158 168 172 169 186" stroke="#a8804a" stroke-width="5" fill="none" stroke-linecap="round"/>
 <path d="M169 186 L169 191" stroke="#3a2c18" stroke-width="5" stroke-linecap="round"/>

 <path d="M180 96 C188 100 190 108 186 116" stroke="#b98c4f" stroke-width="4" fill="none" stroke-linecap="round"/>
 <path d="M186 116 L184 124" stroke="#241c10" stroke-width="4" stroke-linecap="round"/>

 <ellipse cx="160" cy="110" rx="17" ry="20" fill="url(#bodyG)"/>
 <path d="M98 102 C100 88 114 82 132 80 C152 78 168 84 174 94 C178 102 176 113 168 120 C152 131 116 132 104 123 C97 117 96 110 98 102 Z" fill="url(#bodyG)"/>
 <path d="M104 117 C126 130 154 129 168 118 L167 125 C152 136 118 136 105 125 Z" fill="#9c7743" opacity=".85"/>
 <path d="M106 126 C122 136 152 135 166 124 L163 132 C148 141 120 141 108 133 Z" fill="#f7f0e1"/>

 <path d="M112 122 C110 136 112 150 109 162 C108 172 110 181 108 187" stroke="#c99e60" stroke-width="5" fill="none" stroke-linecap="round"/>
 <path d="M108 187 L108 192" stroke="#3a2c18" stroke-width="5" stroke-linecap="round"/>
 <path d="M158 120 C165 130 164 141 157 149 C155 159 158 172 158 187" stroke="#c99e60" stroke-width="5.5" fill="none" stroke-linecap="round"/>
 <path d="M158 187 L158 192" stroke="#3a2c18" stroke-width="5.5" stroke-linecap="round"/>

 <path d="M112 90 C102 80 90 62 84 44 L98 38 C104 56 112 72 124 84 Z" fill="url(#neckG)"/>
 <path d="M108 88 C99 79 89 63 84 48 L89 45 C95 60 103 74 114 84 Z" fill="#efe4cd" opacity=".75"/>

 <path d="M84 32 C76 18 80 6 94 0" stroke="#5d4526" stroke-width="4" fill="none" stroke-linecap="round"/>
 <path d="M91 30 C85 18 89 8 102 2" stroke="#6e5330" stroke-width="3.8" fill="none" stroke-linecap="round"/>
 <path d="M81 28 l7 -2 M79 21 l7 -1 M80 14 l7 0 M84 8 l6 1" stroke="#3f2f18" stroke-width="1.5" opacity=".65"/>

 <path d="M96 34 C106 26 114 25 118 28 C114 36 106 41 98 42 Z" fill="#c49658"/>
 <path d="M99 34 C105 30 110 29 113 30 C110 35 104 38 99 39 Z" fill="#eeddc2"/>

 <path d="M96 36 C90 28 80 25 71 28 C61 31 54 39 52 47 C51 53 55 57 61 58 C71 59 81 54 87 48 C91 44 95 40 96 36 Z" fill="url(#neckG)"/>
 <path d="M56 50 C51 52 47 55 46 59 C49 62 54 62 58 60 Z" fill="#b98c4f"/>
 <circle cx="47" cy="58" r="2.8" fill="#241c10"/>
 <path d="M49 62 C52 63.5 55 63.5 57 62" stroke="#241c10" stroke-width="1.5" fill="none" stroke-linecap="round"/>
 <circle cx="70" cy="42" r="5.2" fill="#241c10"/>
 <circle cx="71.8" cy="40.2" r="1.7" fill="#fff"/>
 <path d="M74 38 q3 -1.5 5 -0.5" stroke="#241c10" stroke-width="1.6" fill="none" stroke-linecap="round"/>
 <path d="M67 47 C63 52 58 55 53 56" stroke="#4a3a24" stroke-width="2.2" fill="none" stroke-linecap="round" opacity=".8"/>
 <path d="M76 35 C72 32 66 32 62 35" stroke="#f2e7d0" stroke-width="2.6" fill="none" stroke-linecap="round" opacity=".9"/>
</svg>`;
document.getElementById('mascotHost').innerHTML =
  '<img src="img/'+IMGS.gazelle+'" alt="ريم" style="width:100%;height:100%;object-fit:contain">';

/* ================================================================
   CHAPTER DATA
   ================================================================ */
const AR_N=['٠','١','٢','٣','٤','٥'];
const CH = [
 {
  key:'deen', name:'الدِّين', tag:'المحطة الأولى: القرية القديمة', icon:'mosque',
  gemColor:'#0b7a4b', gemName:'جوهرة الإيمان', game:'connect',
  pages:[
   { scene:'dawn', lead:'قبل الفجر',
     text:'انطلق سيف وريم مع الجدّ سالم قبل الفجر، فالخريطة تشير إلى القرية القديمة التي وُلد فيها الجد. وصلوا والنجوم ما تزال في السماء… وفجأة علا صوتٌ هادئ فوق البيوت كلها: «اللهُ أكبر». خرج الناس من بيوت الطين نحو المسجد الصغير، وحمل سيف قِربة الماء يساعد المتوضّئين، تمامًا كما كان يفعل الجد وهو في عمره.',
     whisper:'لاحظت ريم أن الجميع توقفوا عن كل شيء في اللحظة نفسها… كأن قلوبهم اتجهت معًا إلى شيءٍ أكبر منهم جميعًا.' },
   { scene:'dates', lead:'ضيفُ الله',
     text:'بعد الصلاة جلس عند الباب مسافرٌ غريب يبدو عليه التعب. أسرع إليه رجلٌ عجوز يحمل التمر والقهوة وقال: «حيّاك الله يا ضيف الله». همس سيف لجدّه: «لكنه لا يعرفه!» فابتسم الجد: «هكذا علّمنا ديننا يا وليدي: رحمةٌ وكرمٌ وصدق… قبل أن يكون كلامًا». وعند محراب المسجد، لمعت على الخريطة أول إشارة!',
     whisper:'قال الجد: «الجوهرة الأولى تنتظر من يصل النور بالنور… حتى تضيء القرية كلها».' }
  ],
  discover:{
   chips:[
    {i:'mosque',t:'الأذان يرفع خمس مرات كل يوم يجمع الناس على الصلاة'},
    {i:'dua',t:'الدعاء والشكر لله على المطر والرزق والخير'},
    {i:'charity',t:'الصدقة ومساعدة المحتاج بلا انتظار شكر'},
    {i:'honesty',t:'الصدق في البيع والأمانة في العمل'},
    {i:'dallah',t:'إكرام الضيف والمسافر ولو كان غريبًا'}
   ],
   traits:[
    {t:'يزرع الرحمة',d:'يجعل القلب رحيمًا بالناس والحيوان، متسامحًا مع الجميع.'},
    {t:'يوحّد القيم',d:'الصدق والكرم واحترام الكبير قيمٌ يتفق عليها الجميع.'},
    {t:'يطمئن القلب',d:'يربط الإنسان بشيء أكبر من نفسه فيهدأ ويطمئن.'},
    {t:'يجمع الناس',d:'المسجد والصلاة والعيد تجمع الحيّ كله كأسرة واحدة.'}
   ],
   past:'كان المسجد قلب القرية: فيه يصلّون ويتعلمون القراءة ويحلّون خلافاتهم ويجتمعون في الأفراح والأحزان.',
   now:'ما تزال الإمارات تبني المساجد الجميلة، وتجعل التسامح والرحمة أساس العيش بين أكثر من ٢٠٠ جنسية تعيش على أرضها.'
  },
  gameTitle:'وصّل الأنوار', gameDesc:'اسحب بإصبعك داخل الشبكة لتمدّ أنبوب النور من كل رمز إلى توأمه. الأنابيب تمشي في المربعات ولا يجوز أن تتقاطع!',
  winMsg:'وصلت الأنوار كلها فأضاءت القرية! هكذا يجمع الخيرُ القلوب.'
 },
 {
  key:'wala', name:'الولاء', tag:'المحطة الثانية: ساحة العلم', icon:'flag',
  gemColor:'#c8102e', gemName:'جوهرة الوفاء', game:'simon',
  pages:[
   { scene:'flag', lead:'صباحُ العلم',
     text:'في صباح اليوم التالي كان «يوم العلم» في مدرسة سيف. وقف الطلاب صفوفًا مرتّبة، وارتفع العلم بألوانه الأربعة مع النشيد الوطني. وضع سيف يده على قلبه، أما ريم فراقبت من وراء السور — غزالةٌ عند باب المدرسة؟ ضحك الأطفال كلهم! لكنّ أحدًا لم ينسَ أن يقف باحترام.',
     whisper:'رأت ريم الفخر يلمع في كل العيون في اللحظة نفسها… كأن العلم خيطٌ يشدّ القلوب إلى الأعلى معًا.' },
   { scene:'union', lead:'حكاية بيتٍ واحد',
     text:'دعت المعلمةُ الجدَّ سالم ليحكي للطلاب. قال: «كنا سبع إمارات متفرقة، لكل واحدةٍ رايتها. وفي الثاني من ديسمبر عام ١٩٧١ اجتمع الآباء المؤسسون بقيادة الشيخ زايد، طيّب الله ثراه، فصرنا بيتًا واحدًا اسمه الإمارات». ثم أخرج الخريطة: «الولاء أن تحبّ هذا البيت وتحميه وتفرح له… وها هي الإشارة الثانية تلمع!»',
     whisper:'«جوهرة الوفاء لمن يحفظ نبض الاتحاد ولا يخطئ فيه» — هكذا كُتب على الخريطة.' }
  ],
  discover:{
   chips:[
    {i:'flag',t:'الوقوف باحترام للعلم والنشيد الوطني'},
    {i:'burst',t:'الاحتفال بيوم الاتحاد ٢ ديسمبر ويوم العلم'},
    {i:'bookOpen',t:'الاجتهاد في الدراسة والعمل لرفعة الوطن'},
    {i:'shield',t:'الوقوف صفًا واحدًا خلف القيادة وقت الشدة'},
    {i:'tree',t:'المحافظة على ممتلكات الوطن ونظافته'}
   ],
   traits:[
    {t:'حبٌّ صادق',d:'محبة الوطن وقيادته الرشيدة تنبع من القلب لا بالأوامر.'},
    {t:'انتماء',d:'الشعور بأن أهل الإمارات كلهم عائلة واحدة في بيت واحد.'},
    {t:'تضحية',d:'تقديم مصلحة الوطن، كما يفعل جنودنا البواسل.'},
    {t:'وحدة',d:'سبع إمارات بقلب واحد رغم اختلاف المدن والقبائل.'}
   ],
   past:'قبل الاتحاد كانت الإمارات متفرقة والحياة صعبة، فاجتمع الحكماء عام ١٩٧١ وصنعوا دولة الاتحاد بقيادة الشيخ زايد.',
   now:'يظهر الولاء اليوم في احترام القيادة والعمل بإخلاص ورفع العلم في المناسبات، وفي فرحة الجميع بيوم الاتحاد.'
  },
  gameTitle:'نبضُ الاتحاد', gameDesc:'راقب تسلسل الأضواء ثم كرّره بدقة. سبع جولات يزداد فيها الطول والسرعة!',
  winMsg:'حفظت نبض الاتحاد كاملًا دون خطأ!'
 },
 {
  key:'muwatana', name:'المواطَنة', tag:'المحطة الثالثة: حيّنا الجميل', icon:'handshake',
  gemColor:'#0a84ff', gemName:'جوهرة المسؤولية', game:'maze',
  pages:[
   { scene:'rules', lead:'في طريق العودة',
     text:'بعد المدرسة عادوا مشيًا عبر الحيّ. عند الإشارة الحمراء وقفت السيارات كلها فعبر الأطفال بأمان. قال الجد: «انظرا… حين يحترم كلٌّ منا القانون، يصير الطريق أمانًا للجميع». وعلى الرصيف رأت ريم فتاةً تنحني وتلتقط علبةً وقعت من أحدهم وتضعها في السلة، دون أن يطلب منها أحد.',
     whisper:'فهمت ريم أن البلد ليس أرضًا فقط… بل ناسٌ يحفظون مكانهم كأنه بيتهم.' },
   { scene:'clean', lead:'الحيّ بيتُنا الكبير',
     text:'وجدوا جيران الحي متجمعين يتطوعون لتنظيف الحديقة وزراعة شتلات الغاف. انضم سيف إليهم فورًا، وحملت ريم على ظهرها سلال الشتلات فصفّق لها الصغار! قال الجد: «المواطن الصالح يأخذ حقّه بأدب ويؤدي واجبه بحب». وإذا بالإشارة الثالثة تلمع فوق الحديقة!',
     whisper:'«جوهرة المسؤولية لمن يجمع النجوم كلها ويعود إلى البيت قبل غروب الشمس» — قالت الخريطة.' }
  ],
  discover:{
   chips:[
    {i:'trafficLight',t:'احترام قوانين المرور وعبور الشارع من المكان الصحيح'},
    {i:'tree',t:'المحافظة على الحدائق والمرافق العامة'},
    {i:'volunteer',t:'التطوع لمساعدة الجيران وخدمة الحي'},
    {i:'globe',t:'احترام حقوق الآخرين مهما اختلفوا عنا'},
    {i:'home',t:'حماية الوطن والحفاظ عليه كأنه بيتنا'}
   ],
   traits:[
    {t:'حقوق وواجبات',d:'لكل مواطن حق يأخذه (التعليم والصحة والأمان) وواجب يؤديه.'},
    {t:'مسؤولية',d:'أشعر أن نظافة بلدي وأمانها مسؤوليتي أنا أيضًا.'},
    {t:'احترام النظام',d:'القانون يحمينا جميعًا، والالتزام به يجعل الحياة أسهل.'},
    {t:'تعاون',d:'يد واحدة لا تصفق؛ نعمل معًا من أجل الجميع.'}
   ],
   past:'قديمًا تعاون أهل الفريج في بناء البيوت وحفر الآبار وحراسة بعضهم؛ كان الجميع مسؤولًا عن الجميع.',
   now:'المواطنة اليوم في احترام القانون والتطوع والاجتهاد، وفي الحفاظ على ما بناه الآباء ليبقى الوطن الأول عالميًا.'
  },
  gameTitle:'طريقُ العودة', gameDesc:'اجمع النجوم السبع وعُد إلى البيت قبل انتهاء الوقت! الشمس تغرب بسرعة…',
  winMsg:'جمعت النجوم وعدت قبل الغروب؛ أدّيت الواجب كاملًا!'
 },
 {
  key:'thaqafa', name:'الثقافة', tag:'المحطة الرابعة: مجلس الجد', icon:'dallah',
  gemColor:'#c9a227', gemName:'جوهرة الكرم', game:'catch',
  pages:[
   { scene:'majlis', lead:'ليلةُ المجلس',
     text:'في المساء امتلأ مجلس الجد سالم بالضيوف. تعلّم سيف الليلة درسًا جديدًا: القهوة العربية تُقدَّم باليد اليمنى، وللأكبر سنًا أولًا، والسلام قبل الكلام. ثم ألقى العمّ خليفة قصيدةً نبطية عن الوطن فتمايل الحضور طربًا، وريم ترهف أذنيها الطويلتين خلف الباب.',
     whisper:'أدركت ريم أن الثقافة ليست في الكتب فقط… بل في طريقة الكلام، وتقديم القهوة، واحترام الكبير.' },
   { scene:'arts', lead:'فرحُ الجيران',
     text:'وكان عند الجيران عرسٌ تلك الليلة: نساءٌ ينقشن الحناء على الأيادي الصغيرة، وثوبٌ يتلألأ بخيوط «التلّي» الذهبية، وصبيةٌ يؤدّون «العيّالة» على إيقاع الطبول. همس الجد: «هذه ألواننا التي تميّزنا عن كل شعوب الأرض». وفوق دلّة القهوة… لمعت الإشارة الرابعة!',
     whisper:'«جوهرة الكرم لمن يملأ سلّته من كنوزنا الأصيلة ويعرفها من الدخيل» — قالت الخريطة.' }
  ],
  discover:{
   chips:[
    {i:'speech',t:'اللغة العربية: لغة القرآن وهويتنا الأولى'},
    {i:'dallah',t:'القهوة العربية والتمر: رمز الضيافة والكرم'},
    {i:'scroll',t:'الشعر النبطي وفن العيّالة في الأعياد'},
    {i:'kandura',t:'الكندورة والعباءة: لباسنا الذي نفخر به'},
    {i:'henna',t:'الحناء والتلّي: نقوش الأمهات والجدات'}
   ],
   traits:[
    {t:'اللغة أولًا',d:'العربية أساس هويتنا وبها نفكر ونحلم ونتكلم.'},
    {t:'كرم الضيافة',d:'الضيف عندنا مُكرَّم: قهوة وتمر وترحيب قبل أي سؤال.'},
    {t:'أدب المجلس',d:'السلام، واحترام الكبير، والإصغاء لمن يتكلم.'},
    {t:'فنون أصيلة',d:'العيالة والحربية والشعر النبطي تحكي أفراحنا.'}
   ],
   past:'كان المجلس مدرسة الأخلاق: فيه تُروى الحكايات والأشعار وتُصنع القرارات ويتعلم الصغار من الكبار.',
   now:'تحتفي الإمارات بثقافتها في المهرجانات والمتاحف، وتدعم اللغة العربية، وما تزال القهوة رمز كرمنا أمام العالم.'
  },
  gameTitle:'سلّةُ الكنوز', gameDesc:'التقط رموز الإمارات الأصيلة واحذر الدخيل! لديك ٣ قلوب فقط والسرعة تزداد.',
  winMsg:'ملأت السلة بالكنوز الأصيلة وميّزتها عن الدخيل!'
 },
 {
  key:'turath', name:'التُّراث', tag:'المحطة الأخيرة: الميناء القديم', icon:'camel',
  gemColor:'#dcd6c6', gemName:'لؤلؤة الأجداد', game:'memory',
  pages:[
   { scene:'sea', lead:'حيث بدأت الحكاية',
     text:'في الصباح الأخير قادتهم الخريطة إلى الميناء القديم. وقفوا أمام سفينة غوصٍ خشبية عتيقة، فأخرج الجد صورةً قديمة بالأبيض والأسود: «هذا أبي — جدُّ جدِّك يا سيف — كان غوّاصًا. يحبس نفَسه ويغوص إلى قاع البحر ليجمع اللؤلؤ ويطعم أهله… قبل النفط بزمنٍ طويل. من هنا بدأت حكايتنا».',
     whisper:'شعرت ريم أن لكل شيءٍ قديم حكاية… وأن الأجداد تركوا كنزًا أغلى من اللؤلؤ: صبرهم وحكمتهم.' },
   { scene:'falcon', lead:'الصقرُ والنخلة',
     text:'في مهرجان التراث المجاور حطّ صقرٌ مدرَّب على يد فتى، ومرّت هجنٌ تستعد للسباق، وامتد النخيل كجيشٍ أخضر يعطي التمر والظل. قال الجد: «من لا يعرف ماضيه لا يعرف طريقه». نظر سيف إلى العقد: بقيت جوهرةٌ واحدة… فلمعت الإشارة الأخيرة فوق صندوق الذكريات!',
     whisper:'«لؤلؤة الأجداد لمن يحفظ ذاكرتهم ويطابق كنوزهم قبل فوات الوقت» — آخر ما كُتب على الخريطة.' }
  ],
  discover:{
   chips:[
    {i:'dhow',t:'الغوص على اللؤلؤ وسفن المحامل الشراعية'},
    {i:'falcon',t:'الصقّارة: صيد الصقور رياضة الآباء'},
    {i:'camel',t:'سباقات الهجن في الأعياد والمهرجانات'},
    {i:'palm',t:'النخلة أم الخير: تمرٌ وظل وسعف للبيوت'},
    {i:'fort1',t:'الحصون والبراجيل: عمارة صنعت للصحراء'}
   ],
   traits:[
    {t:'جسرٌ للماضي',d:'يربطنا بالأجداد فنعرف من نحن ومن أين جئنا.'},
    {t:'قيمٌ محفوظة',d:'الصبر والاجتهاد والتعاون وصلتنا من حياتهم الصعبة.'},
    {t:'ماديّ ومعنوي',d:'أدوات وبيوت وسفن… وأيضًا حكايات وأمثال وأهازيج.'},
    {t:'إرثٌ يُورَّث',d:'كنز ينتقل من جيل إلى جيل ولا يفنى إذا حفظناه.'}
   ],
   past:'عاش الأجداد على الغوص ورعي الإبل وزراعة النخيل؛ حياةٌ قاسية علمتهم الصبر والتعاون والرضا.',
   now:'تحفظ الإمارات تراثها في المتاحف ومهرجانات الصقور والهجن، ليبقى الماضي حيًا في قلب أحدث دولة.'
  },
  gameTitle:'ذاكرةُ الأجداد', gameDesc:'عشرة أزواج هذه المرة وساعةٌ تدق! طابق كل رمزين قبل انتهاء الوقت.',
  winMsg:'حفظت ذاكرة الأجداد كاملة قبل فوات الوقت!'
 }
];

/* ---------- gems progress ---------- */
let gems = JSON.parse(localStorage.getItem('reem_gems')||'[]');
function saveGems(){localStorage.setItem('reem_gems',JSON.stringify(gems));}

/* ================================================================
   HOME
   ================================================================ */
function neckSVG(){
  const pts=[[56,30],[98,45],[140,50],[182,45],[224,30]];
  let s='<svg viewBox="0 0 280 66" style="width:100%">';
  s+='<path d="M20 8 Q140 88 260 8" fill="none" stroke="#b98d1c" stroke-width="3" stroke-dasharray="1 6" stroke-linecap="round"/>';
  pts.forEach((p,i)=>{
    if(gems.includes(i)){
      s+='<circle cx="'+p[0]+'" cy="'+p[1]+'" r="12" fill="'+CH[i].gemColor+'" stroke="rgba(0,0,0,.15)"/>'
        +'<circle cx="'+(p[0]-4)+'" cy="'+(p[1]-4)+'" r="3.5" fill="rgba(255,255,255,.75)"/>';
    } else {
      s+='<circle cx="'+p[0]+'" cy="'+p[1]+'" r="11" fill="rgba(0,0,0,.05)" stroke="#b9a97f" stroke-width="2" stroke-dasharray="3 3"/>';
    }
  });
  return s+'</svg>';
}
function renderHome(){
  document.getElementById('neckHost').innerHTML=neckSVG();
  document.getElementById('neckLabel').textContent='جواهر العقد: '+AR_N[gems.length]+' / ٥';
  const g=document.getElementById('chapterGrid'); g.innerHTML='';
  CH.forEach((c,i)=>{
    const got=gems.includes(i);
    const el=document.createElement('div');
    el.className='ch-card';
    el.innerHTML='<div class="ch-gem'+(got?' earned':'')+'" style="--g:'+c.gemColor+'">'+(got?'✓':'')+'</div>'
      +'<div class="ch-emoji">'+pic(c.icon,40)+'</div>'
      +'<div class="ch-name">'+c.name+'</div>'
      +'<div class="ch-tag">'+c.tag+'</div>';
    el.onclick=()=>{Snd.flip(); openChapter(i);};
    g.appendChild(el);
  });
}

/* ================================================================
   routing
   ================================================================ */
function show(id){document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  const sc=document.querySelector('#'+id+' .scroll'); if(sc)sc.scrollTo(0,0);}
function goHome(){renderHome(); show('home');}
let cur=0, curPage=0;
const PAGES_PER=3;

/* ================================================================
   BOOK
   ================================================================ */
function openChapter(i){cur=i; curPage=0; renderBook(0); show('book');}
function turnPage(dir){
  const paper=document.getElementById('paper');
  Snd.flip();
  paper.classList.add(dir>0?'flip-out':'flip-out-b');
  setTimeout(()=>{curPage+=dir; renderBook(dir);},270);
}
function renderBook(dir){
  const c=CH[cur];
  document.getElementById('bookTitle').textContent='الفصل '+AR_N[cur+1]+': '+c.name;
  const dots=document.getElementById('dots'); dots.innerHTML='';
  for(let p=0;p<PAGES_PER;p++){const d=document.createElement('i'); if(p===curPage)d.className='on'; dots.appendChild(d);}
  const paper=document.getElementById('paper');
  const pageNo='صفحة '+(cur*PAGES_PER+curPage+1)+' من '+(CH.length*PAGES_PER);
  let html='';
  if(curPage<2){
    const pg=c.pages[curPage];
    const si=SCENE_IMG[pg.scene];
    const sceneHTML= si
      ? '<div class="scene" style="background:'+(si.bg||sceneBG(pg.scene))+'">'
        +'<img class="scene-img" src="img/'+IMGS[si.img]+'" alt="" style="object-fit:'+(si.fit||'cover')+'"></div>'
      : '<div class="scene" style="background:'+sceneBG(pg.scene)+'">'+(SCENES[pg.scene]||'')+'</div>';
    html='<div class="page">'
      +sceneHTML
      +'<div class="story-card"><span class="lead">'+pg.lead+'</span>'+pg.text
      +'<div class="whisper">'+pg.whisper+'</div></div>'
      +'<div class="hint-swipe">اسحب الصفحة لتقليبها أو استخدم الأزرار</div>'
      +'</div><div class="pageno">'+pageNo+'</div>';
  } else {
    const d=c.discover;
    window._tn={past:d.past,now:d.now};
    html='<div class="page">'
      +'<div class="gem-banner" style="--g:'+c.gemColor+'"><div class="g"></div>'
      +'<div><h5>'+c.gemName+'</h5><p>أنهِ لعبة «'+c.gameTitle+'» لتضمّها إلى العقد!</p></div></div>'
      +'<div class="sec-title">المس البطاقات لتكتشف '+c.name+' حولك</div>'
      +'<div class="chips">'+d.chips.map(ch=>
        '<div class="chip" onclick="toggleChip(this)"><div class="in">'
        +'<div class="f">'+pic(ch.i,38)+'<small>اضغط لتقلب</small></div>'
        +'<div class="b">'+ch.t+'</div></div></div>').join('')+'</div>'
      +'<div class="sec-title">'+ic('star',17)+' أسرار '+c.name+'</div>'
      +'<div class="acc">'+d.traits.map(t=>
        '<div class="acc-row"><div class="acc-h" onclick="toggleAcc(this)">'+t.t
        +'<span class="pm">+</span></div><div class="acc-b">'+t.d+'</div></div>').join('')+'</div>'
      +'<div class="tn-switch"><div class="tn-tabs">'
      +'<button class="on" onclick="tnShow(0,this)">زمن الأجداد</button>'
      +'<button onclick="tnShow(1,this)">زماننا اليوم</button></div>'
      +'<div class="tn-body" id="tnBody">'+d.past+'</div></div>'
      +'</div><div class="pageno">'+pageNo+'</div>';
  }
  paper.innerHTML=html;
  paper.scrollTop=0;
  paper.className='paper '+(dir>0?'flip-in':dir<0?'flip-in-b':'');
  setTimeout(()=>{paper.className='paper';},340);

  const pager=document.getElementById('pager'); pager.innerHTML='';
  const back=document.createElement('button'); back.className='btn ghost'; back.style.flex='0 0 36%';
  back.textContent = curPage===0?'الفصول':'‹ السابق';
  back.onclick=()=> curPage===0?goHome():turnPage(-1);
  const next=document.createElement('button'); next.className='btn'; next.style.flex='1';
  if(curPage<2){ next.textContent = curPage===1?'اكتشف ›':'التالي ›'; next.onclick=()=>turnPage(1); }
  else { next.className='btn gold'; next.innerHTML=ic('controller',20,true)+' العب: '+c.gameTitle;
    next.onclick=startGame; }
  pager.append(back,next);
}
window.toggleChip=el=>{el.classList.toggle('open'); Snd.ding();};
window.toggleAcc=el=>{el.parentElement.classList.toggle('open'); Snd.ding();};
window.tnShow=(i,btn)=>{
  btn.parentElement.querySelectorAll('button').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on'); Snd.ding();
  const b=document.getElementById('tnBody');
  b.style.animation='none'; void b.offsetWidth; b.style.animation='';
  b.textContent = i===0?window._tn.past:window._tn.now;
};
(function(){
  const paper=document.getElementById('paper');
  let sx=0,sy=0;
  paper.addEventListener('touchstart',e=>{sx=e.touches[0].clientX; sy=e.touches[0].clientY;},{passive:true});
  paper.addEventListener('touchend',e=>{
    const dx=e.changedTouches[0].clientX-sx, dy=e.changedTouches[0].clientY-sy;
    if(Math.abs(dy)>50||Math.abs(dx)<60)return;
    if(dx>0 && curPage<2) turnPage(1);
    else if(dx<0 && curPage>0) turnPage(-1);
  },{passive:true});
})();

/* مشاهد بصور المستخدم الملوّنة */
const SCENE_IMG={
  dawn:  {img:'mosque',  fit:'contain', bg:'linear-gradient(180deg,#dff1ff,#fff8e8)'},
  dates: {img:'dallah',  fit:'contain', bg:'#ffffff'},
  union: {img:'family',  fit:'cover'},
  rules: {img:'traffic', fit:'cover'},
  clean: {img:'park',    fit:'cover'},
  majlis:{img:'diyafa',  fit:'cover'},
  arts:  {img:'urs',     fit:'cover'},
  falcon:{img:'palm',    fit:'contain', bg:'linear-gradient(180deg,#ffe9b8,#ffd990)'}
};
function sceneBG(k){return ({
  dawn:'linear-gradient(180deg,#ffd59e,#ffb27a,#e88b5a)',
  dates:'linear-gradient(180deg,#f6e4b8,#e9c583)',
  flag:'linear-gradient(180deg,#eaf6ef,#cde7d6)',
  union:'linear-gradient(180deg,#fbe9c8,#f0cf9a)',
  clean:'linear-gradient(180deg,#dff1ff,#bfe3ff)',
  rules:'linear-gradient(180deg,#eef2f7,#d7dfe9)',
  majlis:'linear-gradient(180deg,#f3e6c8,#e3c78e)',
  arts:'linear-gradient(180deg,#fbe7d0,#f3c9a0)',
  sea:'linear-gradient(180deg,#bfe6ff,#7ec5e8)',
  falcon:'linear-gradient(180deg,#ffe9b8,#e9c07a)'
})[k]||'#eee';}

const SCENES={
 dawn:`<svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMax slice"><circle cx="200" cy="150" r="60" fill="#fff2c9"/><g fill="#c98b52"><path d="M0 200 Q100 150 200 190 T400 185 V260 H0Z"/></g><g fill="#a86a3a"><path d="M0 225 Q120 195 240 220 T400 215 V260 H0Z"/></g><g transform="translate(175,120)"><rect x="0" y="30" width="50" height="40" fill="#e8d3a8"/><path d="M0 30 h50 l-25 -22Z" fill="#0b7a4b"/><rect x="20" y="8" width="4" height="16" fill="#0b7a4b"/><circle cx="22" cy="6" r="4" fill="#c9a227"/></g></svg>`,
 dates:`<svg viewBox="0 0 400 260"><g transform="translate(160,60)"><rect x="0" y="70" width="80" height="70" rx="10" fill="#caa15e"/><ellipse cx="40" cy="70" rx="42" ry="14" fill="#8a5a2e"/><g fill="#6b3f1d"><circle cx="22" cy="66" r="6"/><circle cx="40" cy="70" r="6"/><circle cx="58" cy="66" r="6"/><circle cx="31" cy="58" r="6"/><circle cx="49" cy="58" r="6"/></g></g><g transform="translate(90,120)"><path d="M20 60 q-6 -40 0 -55 q6 15 0 55" fill="#8a5a2e"/><path d="M20 8 q-20 -14 -36 -6 q14 12 36 6 M20 8 q20 -14 36 -6 q-14 12 -36 6 M20 4 q0 -16 0 -18" stroke="#0b7a4b" stroke-width="5" fill="none" stroke-linecap="round"/></g></svg>`,
 flag:`<svg viewBox="0 0 400 260"><rect x="60" y="40" width="8" height="180" fill="#8a7c63"/><g transform="translate(68,40)"><rect width="40" height="120" fill="#c8102e"/><rect x="40" width="180" height="40" fill="#009a44"/><rect x="40" y="40" width="180" height="40" fill="#fff"/><rect x="40" y="80" width="180" height="40" fill="#111"/></g><g fill="#e7c891"><circle cx="300" cy="180" r="14"/><circle cx="330" cy="185" r="14"/><circle cx="315" cy="150" r="12"/></g></svg>`,
 union:`<svg viewBox="0 0 400 260"><g stroke="#8a5a2e" stroke-width="6" fill="none"><path d="M120 210 v-70"/></g><circle cx="120" cy="120" r="34" fill="#0b7a4b"/><g fill="#0b7a4b"><ellipse cx="150" cy="150" rx="26" ry="14"/><ellipse cx="95" cy="150" rx="22" ry="12"/></g><g fill="#c9a227"><circle cx="250" cy="90" r="10"/><circle cx="285" cy="110" r="10"/><circle cx="230" cy="125" r="10"/><circle cx="262" cy="140" r="10"/><circle cx="296" cy="150" r="10"/><circle cx="238" cy="160" r="10"/><circle cx="272" cy="172" r="10"/></g></svg>`,
 clean:`<svg viewBox="0 0 400 260"><rect x="0" y="200" width="400" height="60" fill="#bde3c3"/><rect x="150" y="120" width="60" height="90" rx="8" fill="#0b7a4b"/><rect x="158" y="110" width="44" height="14" rx="4" fill="#095c39"/><circle cx="180" cy="80" r="20" fill="#e7c891"/><g transform="translate(250,120)"><path d="M10 90 q-4 -50 0 -70 q4 20 0 70" fill="#8a5a2e"/><path d="M10 22 q-16 -12 -30 -4 q12 10 30 4 M10 22 q16 -12 30 -4 q-12 10 -30 4" stroke="#0b7a4b" stroke-width="4" fill="none" stroke-linecap="round"/></g><g transform="translate(80,150)"><circle cx="0" cy="0" r="12" fill="#e7c891"/><rect x="-8" y="10" width="16" height="30" rx="6" fill="#c8102e"/></g></svg>`,
 rules:`<svg viewBox="0 0 400 260"><rect x="60" y="180" width="280" height="30" fill="#5a5f66"/><g><rect x="180" y="90" width="16" height="90" fill="#333"/><rect x="170" y="50" width="36" height="60" rx="8" fill="#222"/><circle cx="188" cy="64" r="8" fill="#c8102e"/><circle cx="188" cy="84" r="8" fill="#c9a227"/><circle cx="188" cy="98" r="8" fill="#0b7a4b"/></g><g stroke="#fff" stroke-width="6" stroke-dasharray="16 12"><path d="M60 195 h280"/></g><g transform="translate(90,140)"><rect x="0" y="20" width="56" height="26" rx="8" fill="#0a84ff"/><circle cx="12" cy="48" r="8" fill="#222"/><circle cx="44" cy="48" r="8" fill="#222"/></g></svg>`,
 majlis:`<svg viewBox="0 0 400 260"><rect x="40" y="170" width="320" height="50" rx="10" fill="#b5462f"/><rect x="40" y="160" width="320" height="16" fill="#c9a227"/><g transform="translate(190,90)"><path d="M0 40 q-18 0 -18 -18 v-14 h30 v14 q0 18 -12 18Z" fill="#e9e4d8"/><rect x="-4" y="6" width="4" height="16" fill="#e9e4d8"/><ellipse cx="-6" cy="40" rx="18" ry="6" fill="#caa15e"/></g><g transform="translate(120,120)" fill="#8a5a2e"><circle cx="0" cy="0" r="9"/><circle cx="24" cy="4" r="9"/><circle cx="48" cy="0" r="9"/></g></svg>`,
 arts:`<svg viewBox="0 0 400 260"><g transform="translate(150,70)"><path d="M50 60 q-40 0 -40 40 q0 30 40 40 q40 -10 40 -40 q0 -40 -40 -40Z" fill="#a8431f"/><path d="M50 80 v50 M35 100 h30" stroke="#fff" stroke-width="4"/></g><g fill="#c9a227"><circle cx="120" cy="200" r="6"/><circle cx="260" cy="190" r="6"/><circle cx="290" cy="150" r="6"/><circle cx="100" cy="150" r="6"/></g><g transform="translate(60,60)" stroke="#c8102e" stroke-width="3" fill="none"><path d="M0 0 q10 14 0 28 q-10 14 0 28"/><path d="M14 0 q10 14 0 28 q-10 14 0 28"/></g></svg>`,
 sea:`<svg viewBox="0 0 400 260"><path d="M0 170 h400 v90 H0Z" fill="#4fa3cf"/><g><path d="M120 170 l160 0 -20 30 -120 0Z" fill="#8a5a2e"/><rect x="196" y="70" width="6" height="100" fill="#6b3f1d"/><path d="M202 80 q60 20 0 70Z" fill="#f3e7c8"/></g><path d="M0 185 q40 -12 80 0 t80 0 t80 0 t80 0 t80 0" stroke="#fff" fill="none" stroke-width="3" opacity=".6"/><g transform="translate(90,205)"><circle r="8" fill="#fff"/><circle r="4" fill="#e8e3d5"/></g></svg>`,
 falcon:`<svg viewBox="0 0 400 260"><g transform="translate(150,60)"><ellipse cx="40" cy="60" rx="26" ry="34" fill="#8a6a45"/><circle cx="40" cy="30" r="18" fill="#a8865c"/><path d="M40 30 l14 8 -14 6Z" fill="#c9a227"/><path d="M14 60 q-40 -10 -30 20 q26 -6 40 -6Z" fill="#6b4a2a"/><circle cx="46" cy="26" r="3" fill="#241c10"/></g><g stroke="#0b7a4b" stroke-width="6"><path d="M300 210 v-70"/></g><g fill="#0b7a4b"><ellipse cx="330" cy="140" rx="28" ry="12"/><ellipse cx="272" cy="140" rx="24" ry="10"/></g><g fill="#8a5a2e"><circle cx="310" cy="150" r="4"/><circle cx="298" cy="146" r="4"/></g></svg>`
};

/* ================================================================
   sheets / win flow
   ================================================================ */
function showSheet(o){
  const em=document.getElementById('ovEmoji'), gm=document.getElementById('ovGem');
  if(o.gem){em.style.display='none'; gm.style.display='block'; gm.style.setProperty('--g',o.gem);}
  else {em.style.display='block'; gm.style.display='none'; em.innerHTML=ic(o.icon||'burst',62);}
  document.getElementById('ovTitle').textContent=o.title;
  document.getElementById('ovText').textContent=o.text;
  const btn=document.getElementById('ovBtn'); btn.textContent=o.btn||'متابعة';
  btn.onclick=()=>{closeOverlay(); if(o.cb)o.cb();};
  document.getElementById('overlay').classList.add('show');
}
function closeOverlay(){document.getElementById('overlay').classList.remove('show');}

function winChapter(){
  const c=CH[cur];
  const first=!gems.includes(cur);
  if(first){gems.push(cur); saveGems();}
  const all=gems.length>=CH.length;
  Snd.fanfare(); fireConfetti();
  showSheet({
    gem:first?c.gemColor:null, icon:'burst',
    title:first?c.gemName+'!':'أحسنت من جديد!',
    text:c.winMsg+(first?' انضمت '+c.gemName+' إلى العقد.':''),
    btn: all&&first?'شاهد العقد الكامل':(cur<CH.length-1?'المحطة التالية ›':'العودة للخريطة'),
    cb(){ stopAllGames();
      if(all&&first){grandFinale();}
      else if(cur<CH.length-1){openChapter(cur+1);}
      else goHome();
    }
  });
}
function grandFinale(){
  fireConfetti(); Snd.fanfare(); setTimeout(()=>{Snd.fanfare(); fireConfetti();},700);
  showSheet({icon:'trophy', title:'اكتمل عقدُ الهوية!',
    text:'خمس جواهر تلمع في العقد: الإيمان، والوفاء، والمسؤولية، والكرم، ولؤلؤة الأجداد. علّقه الجد سالم في صدر المجلس وقال: «العقد الحقيقي صار في قلبيكما… هذا هو معنى أن تكون إماراتيًا».',
    btn:'العودة إلى البداية', cb:goHome});
}

/* ================================================================
   GAMES
   ================================================================ */
function startGame(){
  const c=CH[cur];
  document.getElementById('gameTitle').textContent=c.gameTitle;
  document.getElementById('gh').textContent=c.gameTitle;
  document.getElementById('gp').textContent=c.gameDesc;
  document.getElementById('gameFoot').innerHTML='';
  show('game');
  ({connect:initConnect, maze:initMaze, catch:initCatch, simon:initSimon, memory:initMemory})[c.game]();
}
function backToBook(){stopAllGames(); curPage=2; renderBook(0); show('book');}
let stopAllGames=()=>{};
function wrapStage(node){const s=document.createElement('div'); s.className='game-stage'; s.appendChild(node); return s;}
function wait(ms){return new Promise(r=>setTimeout(r,ms));}

/* ---------- GAME 1: وصّل الأنوار — شبكة أنابيب مثل Flow Free ---------- */
const FG_LEVELS=[{N:5,K:4},{N:6,K:5},{N:7,K:6}];
const FG_COLORS=['#e63946','#2563eb','#f4c430','#16a34a','#f97316','#9333ea'];
const FG_ICONS=['mosque','crescent','dallah','palm','beads','fort1'];
let fg={};
function initConnect(){fg={level:0}; buildFlow(); stopAllGames=()=>{};}
function fgNb(c,N){const x=c%N,y=(c/N)|0,r=[];
  if(x>0)r.push(c-1); if(x<N-1)r.push(c+1); if(y>0)r.push(c-N); if(y<N-1)r.push(c+N); return r;}
/* توليد لوحة قابلة للحل دائمًا: نحفر مسارات متعرجة غير متقاطعة ثم نظهر طرفيها فقط */
function fgCarve(N,K){
  for(let t=0;t<900;t++){
    const used=Array(N*N).fill(-1), paths=[]; let ok=true;
    for(let k=0;k<K&&ok;k++){
      const free=[]; used.forEach((v,i)=>{if(v<0)free.push(i);});
      if(!free.length){ok=false;break;}
      let cur=free[(Math.random()*free.length)|0];
      const path=[cur]; used[cur]=k;
      const target=4+((Math.random()*(N+2))|0);
      while(path.length<target){
        const nb=fgNb(cur,N).filter(c=>used[c]<0);
        if(!nb.length)break;
        cur=nb[(Math.random()*nb.length)|0]; used[cur]=k; path.push(cur);
      }
      if(path.length<3)ok=false; else paths.push(path);
    }
    if(ok)return paths;
  }
  return null;
}
function buildFlow(){
  const L=FG_LEVELS[fg.level], N=L.N;
  let sol=fgCarve(N,L.K);
  fg.N=N; fg.cell=44; fg.S=N*44;
  fg.pairs=sol.map((p,k)=>({icon:FG_ICONS[k],color:FG_COLORS[k],a:p[0],b:p[p.length-1],sol:p,path:[],done:false}));
  fg.drawing=-1;
  const wrap=document.getElementById('gameBody'); wrap.innerHTML='';
  const host=document.createElement('div'); host.className='cn-host';
  const S=fg.S, cell=fg.cell;
  let svg='<svg id="fgSvg" viewBox="0 0 '+S+' '+S+'" style="touch-action:none;border-radius:18px;display:block">';
  svg+='<rect width="'+S+'" height="'+S+'" rx="16" fill="#1b1b1f"/>';
  for(let i=1;i<N;i++){
    svg+='<line x1="'+(i*cell)+'" y1="4" x2="'+(i*cell)+'" y2="'+(S-4)+'" stroke="#33333a" stroke-width="1.5"/>';
    svg+='<line y1="'+(i*cell)+'" x1="4" y2="'+(i*cell)+'" x2="'+(S-4)+'" stroke="#33333a" stroke-width="1.5"/>';
  }
  svg+='<g id="fgFill"></g><g id="fgPaths"></g><g id="fgEnds"></g></svg>';
  host.innerHTML=svg;
  wrap.appendChild(wrapStage(host));
  const el=document.getElementById('fgSvg');
  const cellAt=e=>{const r=el.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width*S, y=(e.clientY-r.top)/r.height*S;
    const cx=Math.floor(x/cell), cy=Math.floor(y/cell);
    if(cx<0||cy<0||cx>=N||cy>=N)return -1; return cy*N+cx;};
  el.addEventListener('pointerdown',e=>{e.preventDefault(); el.setPointerCapture(e.pointerId);
    const c=cellAt(e); if(c>=0)fgDown(c);});
  el.addEventListener('pointermove',e=>{if(fg.drawing<0)return;
    const c=cellAt(e); if(c>=0)fgDrag(c);});
  el.addEventListener('pointerup',()=>{fg.drawing=-1;});
  document.getElementById('gameFoot').innerHTML=
    '<span class="pill">المرحلة: '+AR_N[fg.level+1]+' / ٣</span>'
    +'<span class="pill goldy" id="fgLeft">وصلت: 0 / '+fg.pairs.length+'</span>'
    +'<button class="btn ghost" id="fgReset" style="padding:9px 14px">'+ic('refresh',18)+'</button>';
  document.getElementById('fgReset').onclick=()=>{fg.pairs.forEach(p=>{p.path=[];p.done=false;});
    fg.drawing=-1; fgRender(); Snd.flip();};
  fgRender();
}
function fgOccupied(c,except){ /* هل الخلية مشغولة بمسار أو طرف زوج آخر */
  for(let k=0;k<fg.pairs.length;k++){
    if(k===except)continue;
    const p=fg.pairs[k];
    if(p.a===c||p.b===c)return true;
    if(p.path.includes(c))return true;
  }
  return false;
}
function fgDown(c){
  const k=fg.pairs.findIndex(p=>p.a===c||p.b===c);
  if(k>=0){const p=fg.pairs[k]; p.done=false; p.path=[c]; fg.drawing=k; Snd.ding(); fgRender(); return;}
  const k2=fg.pairs.findIndex(p=>p.path.includes(c));
  if(k2>=0){const p=fg.pairs[k2]; p.done=false;
    p.path=p.path.slice(0,p.path.indexOf(c)+1); fg.drawing=k2; fgRender();}
}
function fgDrag(c){
  const p=fg.pairs[fg.drawing]; if(!p)return;
  let guard=fg.N*3;
  while(guard-->0){
    let last=p.path[p.path.length-1];
    if(c===last)break;
    const N=fg.N, lx=last%N, ly=(last/N)|0, cx=c%N, cy=(c/N)|0;
    const dx=cx-lx, dy=cy-ly;
    let n;
    if(Math.abs(dx)>=Math.abs(dy)&&dx!==0) n=last+(dx>0?1:-1);
    else if(dy!==0) n=last+(dy>0?N:-N);
    else break;
    const start=p.path[0], partner=(start===p.a?p.b:p.a);
    if(n===partner){p.path.push(n); p.done=true; fg.drawing=-1; Snd.star(); fgRender(); fgCheckWin(); return;}
    if(p.path.includes(n)){p.path=p.path.slice(0,p.path.indexOf(n)+1); continue;}
    if(fgOccupied(n,fg.drawing))break;   /* لا عبور فوق مسار آخر */
    p.path.push(n);
  }
  fgRender();
}
function fgCheckWin(){
  const done=fg.pairs.filter(p=>p.done).length;
  document.getElementById('fgLeft').textContent='وصلت: '+done+' / '+fg.pairs.length;
  if(done===fg.pairs.length){
    if(fg.level<2){fg.level++; toast('أحسنت! شبكة أكبر في المرحلة التالية','star'); setTimeout(buildFlow,900);}
    else setTimeout(winChapter,400);
  }
}
function fgRender(){
  const cell=fg.cell, half=cell/2;
  const cx=c=>(c%fg.N)*cell+half, cy=c=>((c/fg.N)|0)*cell+half;
  let fills='', lines='', ends='';
  fg.pairs.forEach((p,k)=>{
    p.path.forEach(c=>{
      fills+='<rect x="'+((c%fg.N)*cell+2)+'" y="'+(((c/fg.N)|0)*cell+2)+'" width="'+(cell-4)+'" height="'+(cell-4)+'" rx="8" fill="'+p.color+'" opacity=".16"/>';
    });
    if(p.path.length>1){
      const pts=p.path.map(c=>cx(c)+','+cy(c)).join(' ');
      lines+='<polyline points="'+pts+'" fill="none" stroke="'+p.color+'" stroke-width="'+(cell*.34)+'" stroke-linecap="round" stroke-linejoin="round" opacity=".95"/>';
    }
    [p.a,p.b].forEach(c=>{
      const s=cell*.42, o=s/2;
      const inner=IMGS[p.icon]
        ? '<image href="img/'+IMGS[p.icon]+'" x="'+(cx(c)-o)+'" y="'+(cy(c)-o)+'" width="'+s+'" height="'+s+'" clip-path="inset(0 round 6)"/>'
        : '<g transform="translate('+(cx(c)-o)+','+(cy(c)-o)+') scale('+(s/48)+')">'+iconInner(p.icon)+'</g>';
      ends+='<circle cx="'+cx(c)+'" cy="'+cy(c)+'" r="'+(cell*.4)+'" fill="'+p.color+'"'+(p.done?'':' opacity=".92"')+'/>'
        +'<circle cx="'+cx(c)+'" cy="'+cy(c)+'" r="'+(cell*.3)+'" fill="#fffdf7"/>'
        +inner;
    });
  });
  document.getElementById('fgFill').innerHTML=fills;
  document.getElementById('fgPaths').innerHTML=lines;
  document.getElementById('fgEnds').innerHTML=ends;
}

/* ---------- GAME 2: المتاهة (مع مؤقت) ---------- */
const MAZE_MAP=[
 "1111111111111",
 "1S001000100I1",
 "1011101010101",
 "10I0001010001",
 "1011111011101",
 "1000000I00101",
 "1110111110101",
 "10I01000I0001",
 "101I101011101",
 "100010001I0H1",
 "1111111111111"
];
let mz={};
function initMaze(){
  const rows=MAZE_MAP.length, cols=MAZE_MAP[0].length;
  mz={rows,cols,stars:0,total:0,px:0,py:0,cells:[],time:50,timer:null,over:false};
  const wrap=document.getElementById('gameBody'); wrap.innerHTML='';
  const grid=document.createElement('div'); grid.id='maze';
  const size=Math.min(23, Math.floor(290/cols));
  mz.size=size;
  grid.style.gridTemplateColumns='repeat('+cols+','+size+'px)';
  grid.style.gridTemplateRows='repeat('+rows+','+size+'px)';
  mz.map=MAZE_MAP.map(r=>r.split(''));
  for(let y=0;y<rows;y++)for(let x=0;x<cols;x++){
    const ch=mz.map[y][x]; const c=document.createElement('div');
    c.className='mcell '+(ch==='1'?'wall':(ch==='H'?'home':'path'));
    if(ch==='S'){mz.px=x;mz.py=y;}
    if(ch==='H'){mz.hx=x;mz.hy=y;}
    if(ch==='I'){mz.total++; c.dataset.star='1';}
    mz.cells.push(c); grid.appendChild(c);
  }
  wrap.appendChild(wrapStage(grid));
  const pad=document.createElement('div'); pad.className='mpad';
  pad.innerHTML='<div class="sp"></div><button data-d="U">▲</button><div class="sp"></div>'
    +'<button data-d="L">◀</button><div class="sp"></div><button data-d="R">▶</button>'
    +'<div class="sp"></div><button data-d="D">▼</button><div class="sp"></div>';
  pad.querySelectorAll('button').forEach(b=>b.onclick=()=>move(b.dataset.d));
  wrap.appendChild(pad);
  document.getElementById('gameFoot').innerHTML=
    '<span class="pill" id="mzTime">'+ic('clock',16)+' 50</span>'
    +'<span class="pill" id="mzStars">النجوم: 0 / '+mz.total+'</span>'
    +'<span class="pill goldy">اجمعها ثم عُد للبيت</span>';
  const kh=e=>{const k={ArrowUp:'U',ArrowDown:'D',ArrowLeft:'L',ArrowRight:'R'}[e.key]; if(k){e.preventDefault();move(k);}};
  window.addEventListener('keydown',kh);
  let sx=0,sy=0;
  grid.addEventListener('touchstart',e=>{sx=e.touches[0].clientX; sy=e.touches[0].clientY;},{passive:true});
  grid.addEventListener('touchend',e=>{
    const dx=e.changedTouches[0].clientX-sx, dy=e.changedTouches[0].clientY-sy;
    if(Math.max(Math.abs(dx),Math.abs(dy))<24)return;
    if(Math.abs(dx)>Math.abs(dy)) move(dx>0?'R':'L'); else move(dy>0?'D':'U');
  },{passive:true});
  mz.timer=setInterval(()=>{
    if(mz.over)return;
    mz.time--;
    const t=document.getElementById('mzTime');
    if(t){t.innerHTML=ic('clock',16)+' '+mz.time; if(mz.time<=10)t.className='pill warn';}
    if(mz.time<=0){
      clearInterval(mz.timer); mz.over=true; Snd.buzz();
      showSheet({icon:'clock', title:'غربت الشمس!',
        text:'انتهى الوقت قبل أن تعود ريم إلى البيت. المواطن الصالح يسبق الوقت — حاول من جديد وأسرع!',
        btn:'إعادة المحاولة', cb:initMaze});
    }
  },1000);
  stopAllGames=()=>{window.removeEventListener('keydown',kh); clearInterval(mz.timer);};
  drawMaze();
}
function idx(x,y){return y*mz.cols+x;}
function move(d){
  if(mz.over)return;
  let nx=mz.px,ny=mz.py;
  if(d==='U')ny--; if(d==='D')ny++; if(d==='L')nx--; if(d==='R')nx++;
  if(nx<0||ny<0||nx>=mz.cols||ny>=mz.rows)return;
  if(mz.map[ny][nx]==='1')return;
  mz.px=nx; mz.py=ny;
  const cell=mz.cells[idx(nx,ny)];
  if(cell.dataset.star==='1'){cell.dataset.star='0'; mz.stars++; Snd.star();
    document.getElementById('mzStars').textContent='النجوم: '+mz.stars+' / '+mz.total;
    toast('+1','star');}
  drawMaze();
  if(mz.px===mz.hx&&mz.py===mz.hy){
    if(mz.stars>=mz.total){mz.over=true; clearInterval(mz.timer); setTimeout(winChapter,250);}
    else {Snd.buzz(); toast('بقيت نجوم! '+mz.stars+' / '+mz.total);}
  }
}
function drawMaze(){
  const px=Math.max(12,mz.size-4);
  mz.cells.forEach((c,i)=>{
    const x=i%mz.cols,y=Math.floor(i/mz.cols); const ch=mz.map[y][x];
    if(x===mz.px&&y===mz.py){c.innerHTML=ic('gazelleMini',px);}
    else if(ch==='H'){c.innerHTML=ic('home',px);}
    else if(c.dataset.star==='1'){c.innerHTML=ic('star',px);}
    else c.innerHTML='';
  });
}

/* ---------- GAME 3: سلة الكنوز ---------- */
const GOOD=['camel','mosque','palm','dallah','falcon','star','fish','fort1','beads','flag'];
const BAD=['burger','soda','robot','cap','controller'];
let cg={};
function initCatch(){
  const wrap=document.getElementById('gameBody'); wrap.innerHTML='';
  const area=document.createElement('div'); area.id='catchArea';
  const basket=document.createElement('div'); basket.id='basket'; basket.innerHTML=ic('basket',50);
  area.appendChild(basket);
  wrap.appendChild(wrapStage(area));
  document.getElementById('gameFoot').innerHTML='<span class="pill" id="cgScore">النقاط: 0</span>'
    +'<span class="pill warn" id="cgHearts"></span>'
    +'<span class="pill goldy">الهدف: 15</span>';
  cg={score:0,goal:15,hearts:3,bx:150,items:[],running:true,area,basket,spawnT:0};
  drawHearts();
  const W=()=>area.clientWidth;
  basket.style.right=(W()/2-25)+'px'; cg.bx=W()/2;
  const setPos=cx=>{const rc=area.getBoundingClientRect();
    let x=cx-rc.left; x=Math.max(25,Math.min(W()-25,x));
    basket.style.right=(W()-x-25)+'px'; cg.bx=x;};
  const pm=e=>{const cx=e.touches?e.touches[0].clientX:e.clientX; setPos(cx);};
  area.addEventListener('pointermove',pm);
  area.addEventListener('touchmove',pm,{passive:true});
  const kh=e=>{if(e.key==='ArrowLeft')cg.bx=Math.max(25,cg.bx-28);
    if(e.key==='ArrowRight')cg.bx=Math.min(W()-25,cg.bx+28);
    basket.style.right=(W()-cg.bx-25)+'px';};
  window.addEventListener('keydown',kh);
  let raf;
  const loop=()=>{
    if(!cg.running)return;
    cg.spawnT++;
    const interval=Math.max(14, 30-Math.floor(cg.score*1.1));
    if(cg.spawnT>interval){cg.spawnT=0; spawnItem(area);}
    for(let i=cg.items.length-1;i>=0;i--){
      const it=cg.items[i]; it.y+=it.sp; it.el.style.top=it.y+'px';
      const bTop=area.clientHeight-56;
      if(it.y>bTop && it.y<area.clientHeight-8 && Math.abs(it.x-cg.bx)<42){
        if(it.good){cg.score++; Snd.star(); toast('+1','star');}
        else{cg.hearts--; Snd.buzz(); toast('هذا ليس من تراثنا!'); drawHearts();}
        document.getElementById('cgScore').textContent='النقاط: '+cg.score;
        it.el.remove(); cg.items.splice(i,1);
        if(cg.hearts<=0){cg.running=false; cancelAnimationFrame(raf);
          setTimeout(()=>showSheet({icon:'oops',title:'انتهت القلوب!',
            text:'التقطت أشياء ليست من كنوز الإمارات. ركّز جيدًا وحاول من جديد!',
            btn:'إعادة المحاولة',cb:initCatch}),300);
          return;}
        if(cg.score>=cg.goal){cg.running=false; cancelAnimationFrame(raf);
          setTimeout(winChapter,200); return;}
        continue;
      }
      if(it.y>area.clientHeight){it.el.remove(); cg.items.splice(i,1);}
    }
    raf=requestAnimationFrame(loop);
  };
  raf=requestAnimationFrame(loop);
  stopAllGames=()=>{cg.running=false; cancelAnimationFrame(raf);
    window.removeEventListener('keydown',kh);};
}
function drawHearts(){
  let h='';
  for(let i=0;i<3;i++)h+=ic(i<cg.hearts?'heart':'heartEmpty',17);
  document.getElementById('cgHearts').innerHTML=h;
}
function spawnItem(area){
  const good=Math.random()>0.38;
  const name=good?GOOD[Math.floor(Math.random()*GOOD.length)]:BAD[Math.floor(Math.random()*BAD.length)];
  const el=document.createElement('div'); el.className='falling'; el.innerHTML=pic(name,38);
  const x=25+Math.random()*(area.clientWidth-50);
  el.style.left=(x-19)+'px'; el.style.top='-40px';
  area.appendChild(el);
  cg.items.push({el,x,y:-40,sp:2.0+cg.score*0.09+Math.random()*1.4,good});
}

/* ---------- GAME 4: نبض الاتحاد ---------- */
let sm={};
function initSimon(){
  const wrap=document.getElementById('gameBody'); wrap.innerHTML='';
  const grid=document.createElement('div'); grid.className='simon-grid';
  const labels=['mosque','flag','camel','star'];
  for(let i=0;i<4;i++){const p=document.createElement('div'); p.className='spad s'+i;
    p.innerHTML=ic(labels[i],38,true); p.onclick=()=>press(i); grid.appendChild(p);}
  wrap.appendChild(wrapStage(grid));
  sm={seq:[],step:0,accept:false,pads:[...grid.children],round:0,target:7};
  document.getElementById('gameFoot').innerHTML='<span class="pill" id="smRound">الجولة: 0 / '+sm.target+'</span>'
    +'<button class="btn ghost" id="smBtn">ابدأ</button>';
  document.getElementById('smBtn').onclick=nextRound;
  stopAllGames=()=>{sm.accept=false;};
}
function nextRound(){
  sm.round++;
  const b=document.getElementById('smBtn'); if(b)b.style.display='none';
  document.getElementById('smRound').textContent='الجولة: '+sm.round+' / '+sm.target;
  if(sm.round===1){sm.seq.push(Math.floor(Math.random()*4)); sm.seq.push(Math.floor(Math.random()*4));}
  else sm.seq.push(Math.floor(Math.random()*4));
  sm.step=0; sm.accept=false;
  playSeq();
}
function light(i,ms){return new Promise(r=>{const p=sm.pads[i]; p.classList.add('lit');
  Snd.pad(i); setTimeout(()=>{p.classList.remove('lit'); setTimeout(r,110);},ms);});}
async function playSeq(){await wait(420);
  const speed=Math.max(170,430-sm.round*40);
  for(const i of sm.seq){await light(i,speed);}
  sm.accept=true; toast('كرّر التسلسل');}
function press(i){ if(!sm.accept)return;
  sm.pads[i].classList.add('lit'); Snd.pad(i);
  setTimeout(()=>sm.pads[i].classList.remove('lit'),140);
  if(i===sm.seq[sm.step]){ sm.step++;
    if(sm.step===sm.seq.length){ sm.accept=false;
      if(sm.round>=sm.target){setTimeout(winChapter,350);}
      else {Snd.ding(); toast('أحسنت!'); setTimeout(nextRound,650);}
    }
  } else {
    sm.accept=false; Snd.buzz(); toast('خطأ! أعد المحاولة');
    const g=document.querySelector('.simon-grid');
    if(g)g.animate([{filter:'brightness(1)'},{filter:'brightness(1.6) saturate(2)'},{filter:'brightness(1)'}],{duration:400});
    setTimeout(()=>{sm.step=0; playSeq();},900);
  }
}

/* ---------- GAME 5: ذاكرة الأجداد ---------- */
const MEM=['camel','mosque','palm','dallah','falcon','shell','fort1','drum','dhow','beads'];
let mm={};
function initMemory(){
  const wrap=document.getElementById('gameBody'); wrap.innerHTML='';
  const grid=document.createElement('div'); grid.id='memGrid';
  const deck=MEM.concat(MEM).sort(()=>Math.random()-0.5);
  mm={first:null,lock:false,matched:0,moves:0,time:100,timer:null};
  deck.forEach(sym=>{
    const card=document.createElement('div'); card.className='mcard'; card.dataset.s=sym;
    card.innerHTML='<div class="in"><div class="mface mfront">'+ic('crescent',22)+'</div>'
      +'<div class="mface mback">'+pic(sym,30)+'</div></div>';
    card.onclick=()=>flip(card); grid.appendChild(card);
  });
  wrap.appendChild(wrapStage(grid));
  document.getElementById('gameFoot').innerHTML='<span class="pill" id="mmTime">'+ic('clock',16)+' 100</span>'
    +'<span class="pill" id="mmMoves">المحاولات: 0</span>'
    +'<span class="pill goldy" id="mmPairs">الأزواج: 0 / 10</span>';
  mm.timer=setInterval(()=>{
    mm.time--;
    const t=document.getElementById('mmTime');
    if(t){t.innerHTML=ic('clock',16)+' '+mm.time; if(mm.time<=15)t.className='pill warn';}
    if(mm.time<=0){clearInterval(mm.timer); mm.lock=true; Snd.buzz();
      showSheet({icon:'clock',title:'انتهى الوقت!',
        text:'ذاكرة الأجداد تحتاج تركيزًا أكبر. أعد المحاولة وكن أسرع!',
        btn:'إعادة المحاولة',cb:initMemory});}
  },1000);
  stopAllGames=()=>clearInterval(mm.timer);
}
function flip(card){
  if(mm.lock||card.classList.contains('flip')||card.classList.contains('done'))return;
  card.classList.add('flip'); Snd.ding();
  if(!mm.first){mm.first=card; return;}
  mm.moves++; document.getElementById('mmMoves').textContent='المحاولات: '+mm.moves;
  if(mm.first.dataset.s===card.dataset.s){
    Snd.star();
    setTimeout(()=>{mm.first.classList.add('done'); card.classList.add('done');
      mm.first=null; mm.matched++;
      document.getElementById('mmPairs').textContent='الأزواج: '+mm.matched+' / 10';
      if(mm.matched===10){clearInterval(mm.timer); setTimeout(winChapter,300);}
    },360);
  } else {
    mm.lock=true;
    setTimeout(()=>{card.classList.remove('flip'); mm.first.classList.remove('flip');
      mm.first=null; mm.lock=false;},700);
  }
}

/* ================================================================
   toast & confetti
   ================================================================ */
let toastT;
function toast(m,icn){const t=document.getElementById('toast');
  t.innerHTML=(icn?ic(icn,15):'')+m; t.classList.add('show');
  clearTimeout(toastT); toastT=setTimeout(()=>t.classList.remove('show'),1100);}
function fireConfetti(){const c=document.getElementById('confetti'); c.innerHTML='';
  const cols=['#0b7a4b','#c8102e','#c9a227','#ffffff','#0a84ff'];
  for(let i=0;i<80;i++){const s=document.createElement('i');
    s.style.left=Math.random()*100+'%'; s.style.background=cols[i%cols.length];
    s.style.animationDuration=(1.6+Math.random()*1.8)+'s'; s.style.animationDelay=(Math.random()*.4)+'s';
    s.style.transform='rotate('+Math.random()*360+'deg)'; c.appendChild(s);}
  setTimeout(()=>{c.innerHTML='';},3600);}

/* ---------- boot ---------- */
renderHome();
