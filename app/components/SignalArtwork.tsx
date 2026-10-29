/** From scattered observations, through interpretation, toward a possible direction. */
export default function SignalArtwork() {
  return <div className="signal-art" aria-hidden="true">
    <div className="signal-caption"><span>FROM CURIOSITY TO CLARITY</span><span className="signal-mark">↗</span></div>
    <svg className="signal-canvas" viewBox="0 0 560 520" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="signal-thread" x1="30" y1="280" x2="510" y2="210" gradientUnits="userSpaceOnUse"><stop stopColor="#d4c5a6" stopOpacity=".03"/><stop offset=".48" stopColor="#d4c5a6" stopOpacity=".55"/><stop offset=".65" stopColor="#f6e8c9"/><stop offset="1" stopColor="#d4c5a6" stopOpacity=".75"/></linearGradient>
        <radialGradient id="signal-halo"><stop stopColor="#e2d0a6" stopOpacity=".19"/><stop offset="1" stopColor="#d4c5a6" stopOpacity="0"/></radialGradient>
        <linearGradient id="possibility" x1="310" y1="260" x2="515" y2="190" gradientUnits="userSpaceOnUse"><stop stopColor="#d4c5a6" stopOpacity="0"/><stop offset="1" stopColor="#d4c5a6" stopOpacity=".07"/></linearGradient>
      </defs>
      <ellipse cx="285" cy="260" rx="165" ry="190" fill="url(#signal-halo)"/>
      <g stroke="#d4c5a6" strokeOpacity=".08" strokeWidth=".6"><path d="M 38 110 H 520 M 38 190 H 520 M 38 270 H 520 M 38 350 H 520 M 38 430 H 520"/><path d="M 105 95 V 430 M 195 95 V 430 M 285 95 V 430 M 375 95 V 430 M 465 95 V 430"/></g>
      <g fill="#d4c5a6">{Array.from({length:78},(_,i)=><circle key={i} cx={35+(i*67%185)} cy={108+(i*97%290)} r={i%9===0?2.1:1.1} opacity={.12+(i%5)*.08}/>)}</g>
      <g stroke="url(#signal-thread)" strokeWidth=".8">{Array.from({length:19},(_,i)=>{
        const y=110+i*16;
        return <path key={i} d={`M 22 ${y} C 105 ${y+Math.sin(i*1.6)*85}, 156 ${330-i*7}, 280 ${259+(i-9)*2.2}`}/>;
      })}</g>
      <ellipse cx="285" cy="260" rx="24" ry="104" fill="#141613" fillOpacity=".5" stroke="#d4c5a6" strokeOpacity=".65" strokeWidth="1"/>
      <ellipse cx="285" cy="260" rx="34" ry="119" stroke="#d4c5a6" strokeOpacity=".15" strokeWidth=".6"/>
      <path d="M 285 260 C 355 245 405 170 516 126 L 516 262 C 414 260 360 268 285 260 Z" fill="url(#possibility)"/>
      <path d="M 285 260 C 360 260 415 248 516 262 M 285 260 C 355 245 405 170 516 126" stroke="#d4c5a6" strokeOpacity=".18" strokeWidth=".8" strokeDasharray="3 7"/>
      <path d="M 285 260 C 355 259 409 210 487 192" stroke="url(#signal-thread)" strokeWidth="2"/>
      <g fill="#e8d7b4"><circle cx="285" cy="260" r="3.5"/><circle cx="369" cy="239" r="3"/><circle cx="431" cy="211" r="3"/><circle cx="487" cy="192" r="4"/></g>
      <circle cx="487" cy="192" r="11" stroke="#d4c5a6" strokeOpacity=".3"/>
      <path d="M 487 176 V 151 H 511" stroke="#d4c5a6" strokeOpacity=".45" strokeWidth=".7"/>
      <g fill="#b0a68f" fontFamily="monospace" fontSize="8" letterSpacing="1.8"><text x="44" y="447">OBSERVE</text><text x="250" y="447">INTERPRET</text><text x="443" y="447">ANTICIPATE</text></g>
      <path d="M 43 417 H 517" stroke="#d4c5a6" strokeOpacity=".17" strokeWidth=".6"/>
    </svg>
    <div className="signal-footer"><span>See the pattern.<br/>Find the direction.</span><span className="signal-signature">An exploration of what comes next</span></div>
  </div>;
}
