/** Decorative illustration of scattered observations becoming a coherent signal. */
export default function SignalArtwork() {
  const lines = Array.from({ length: 27 }, (_, i) => {
    const y = 90 + i * 11;
    const bend = Math.sin(i * .24) * 48;
    return <path key={i} d={`M -35 ${y + bend} C 100 ${y - 100}, 135 ${450 - y}, 265 ${260 + (i - 13) * 3} S 430 ${140 + i * 6}, 590 ${195 + i * 6}`} opacity={.15 + Math.sin(i / 26 * Math.PI) * .6} />;
  });
  return <div className="signal-art" aria-hidden="true">
    <div className="signal-caption"><span>THE ART OF FINDING CLARITY</span><span className="signal-mark">↗</span></div>
    <svg className="signal-canvas" viewBox="0 0 560 520" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="signal-thread" x1="0" y1="270" x2="560" y2="220" gradientUnits="userSpaceOnUse"><stop stopColor="#d4c5a6" stopOpacity="0"/><stop offset=".32" stopColor="#b5a17a"/><stop offset=".62" stopColor="#f0e6ce"/><stop offset="1" stopColor="#d4c5a6" stopOpacity=".1"/></linearGradient>
        <radialGradient id="signal-halo"><stop stopColor="#d4c5a6" stopOpacity=".12"/><stop offset="1" stopColor="#d4c5a6" stopOpacity="0"/></radialGradient>
      </defs>
      <ellipse cx="285" cy="263" rx="240" ry="210" fill="url(#signal-halo)"/>
      <g stroke="#d4c5a6" strokeWidth=".6" opacity=".18"><path d="M 38 65 V 455 H 526"/><path d="M 38 145 H 45 M 38 225 H 45 M 38 305 H 45 M 38 385 H 45 M 118 448 V 455 M 198 448 V 455 M 278 448 V 455 M 358 448 V 455 M 438 448 V 455"/></g>
      <g fill="#d4c5a6">{Array.from({length:58},(_,i)=><circle key={i} cx={48+(i*71%185)} cy={84+(i*97%345)} r={i%7===0?2:1} opacity={.12+(i%5)*.065}/>)}</g>
      <g stroke="url(#signal-thread)" strokeWidth="1.1" strokeLinecap="round">{lines}</g>
      <path d="M 263 260 C 330 259 389 229 455 243" stroke="#efe2c4" strokeWidth="1.3"/>
      <circle cx="455" cy="243" r="12" stroke="#d4c5a6" strokeOpacity=".2"/><circle cx="455" cy="243" r="3" fill="#eadab8"/>
      <path d="M 455 226 V 187 H 484" stroke="#d4c5a6" strokeWidth=".7" strokeOpacity=".45"/>
    </svg>
    <div className="signal-footer"><span>Complexity, considered.</span><span className="signal-signature">A perspective by Ali Orhan</span></div>
  </div>;
}
