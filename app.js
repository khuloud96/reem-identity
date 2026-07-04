/* ================================================================
   ريم وعقد الهوية — كتاب تفاعلي (v2)
   ================================================================ */

/* ---------- clock ---------- */
function tick(){const d=new Date();let h=d.getHours(),m=d.getMinutes();
  document.getElementById('clock').textContent=h+':'+(m<10?'0'+m:m);}
tick(); setInterval(tick,10000);

/* ================================================================
   SOUND ENGINE (WebAudio — ambient + sfx)
   ================================================================ */
const Snd={
 ctx:null, master:null, ambGain:null, timer:null,
 muted:JSON.parse(localStorage.getItem('reem_muted')||'false'),
 ensure(){
   if(!this.ctx){
     const AC=window.AudioContext||window.webkitAudioContext; if(!AC)return null;
     this.ctx=new AC();
     this.master=this.ctx.createGain(); this.master.connect(this.ctx.destination);
     this.ambGain=this.ctx.createGain(); this.ambGain.gain.value=.09; this.ambGain.connect(this.master);
     this.startAmb();
   }
   if(this.ctx.state==='suspended')this.ctx.resume();
   this.master.gain.value=this.muted?0:1;
   return this.ctx;
 },
 tone(f,dur,type,vol,dest,when){
   const c=this.ensure(); if(!c)return;
   dur=dur||.25; type=type||'triangle'; vol=vol||.18; when=when||0;
   const t=c.currentTime+when,o=c.createOscillator(),g=c.createGain();
   o.type=type; o.frequency.value=f; o.connect(g); g.connect(dest||this.master);
   g.gain.setValueAtTime(.0001,t); g.gain.exponentialRampToValueAtTime(vol,t+.02);
   g.gain.exponentialRampToValueAtTime(.0001,t+dur); o.start(t); o.stop(t+dur+.05);
 },
 startAmb(){ /* نغمات صحراوية هادئة في الخلفية */
   const notes=[293.66,349.23,392,440,523.25,587.33];
   this.timer=setInterval(()=>{
     if(this.muted||!this.ctx)return;
     if(Math.random()<.3)return;
     const n=notes[Math.floor(Math.random()*notes.length)];
     this.tone(n,1.7,'triangle',.05,this.ambGain);
     if(Math.random()<.3)this.tone(n/2,2.2,'sine',.035,this.ambGain);
   },700);
 },
 flip(){ const c=this.ensure(); if(!c||this.muted)return;
   const t=c.currentTime, buf=c.createBuffer(1,c.sampleRate*.13,c.sampleRate), d=buf.getChannelData(0);
   for(let i=0;i<d.length;i++)d[i]=(Math.random()*2-1)*(1-i/d.length);
   const src=c.createBufferSource(); src.buffer=buf;
   const f=c.createBiquadFilter(); f.type='bandpass'; f.Q.value=1.2;
   f.frequency.setValueAtTime(450,t); f.frequency.exponentialRampToValueAtTime(1700,t+.12);
   const g=c.createGain(); g.gain.value=.55;
   src.connect(f); f.connect(g); g.connect(this.master); src.start();
 },
 ding(){this.tone(660,.18,'sine',.2); this.tone(880,.26,'sine',.18,null,.09);},
 star(){this.tone(1046,.14,'sine',.2); this.tone(1568,.2,'sine',.15,null,.08);},
 buzz(){this.tone(140,.32,'sawtooth',.16);},
 fanfare(){[523,659,784,1046].forEach((f,i)=>this.tone(f,.4,'triangle',.22,null,i*.13));},
 pad(i){this.tone([330,392,494,587][i],.3,'square',.13);},
 toggle(){this.muted=!this.muted; localStorage.setItem('reem_muted',JSON.stringify(this.muted));
   this.ensure(); updateSndBtn();}
};
function updateSndBtn(){document.getElementById('sndBtn').textContent=Snd.muted?'🔇':'🔊';}
document.getElementById('sndBtn').onclick=()=>Snd.toggle();
document.addEventListener('pointerdown',()=>Snd.ensure(),{once:true});
updateSndBtn();

/* ================================================================
   GAZELLE — غزال ريم (رسم أقرب للواقع: غزال الريم العربي)
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
 <ellipse cx="130" cy="191" rx="70" ry="6" fill="rgba(120,90,30,.18)"/>

 <!-- far-side legs (darker, behind) -->
 <path d="M124 120 C123 136 124 150 122 162 C121 172 122 180 121 186" stroke="#a8804a" stroke-width="4.5" fill="none" stroke-linecap="round"/>
 <path d="M121 186 L121 191" stroke="#3a2c18" stroke-width="4.5" stroke-linecap="round"/>
 <path d="M170 118 C176 130 175 140 168 148 C166 158 168 172 169 186" stroke="#a8804a" stroke-width="5" fill="none" stroke-linecap="round"/>
 <path d="M169 186 L169 191" stroke="#3a2c18" stroke-width="5" stroke-linecap="round"/>

 <!-- tail -->
 <path d="M180 96 C188 100 190 108 186 116" stroke="#b98c4f" stroke-width="4" fill="none" stroke-linecap="round"/>
 <path d="M186 116 L184 124" stroke="#241c10" stroke-width="4" stroke-linecap="round"/>

 <!-- hind thigh + body (slender) -->
 <ellipse cx="160" cy="110" rx="17" ry="20" fill="url(#bodyG)"/>
 <path d="M98 102 C100 88 114 82 132 80 C152 78 168 84 174 94 C178 102 176 113 168 120 C152 131 116 132 104 123 C97 117 96 110 98 102 Z" fill="url(#bodyG)"/>
 <!-- flank stripe -->
 <path d="M104 117 C126 130 154 129 168 118 L167 125 C152 136 118 136 105 125 Z" fill="#9c7743" opacity=".85"/>
 <!-- white belly -->
 <path d="M106 126 C122 136 152 135 166 124 L163 132 C148 141 120 141 108 133 Z" fill="#f7f0e1"/>

 <!-- near-side legs (long & slender) -->
 <path d="M112 122 C110 136 112 150 109 162 C108 172 110 181 108 187" stroke="#c99e60" stroke-width="5" fill="none" stroke-linecap="round"/>
 <path d="M108 187 L108 192" stroke="#3a2c18" stroke-width="5" stroke-linecap="round"/>
 <path d="M158 120 C165 130 164 141 157 149 C155 159 158 172 158 187" stroke="#c99e60" stroke-width="5.5" fill="none" stroke-linecap="round"/>
 <path d="M158 187 L158 192" stroke="#3a2c18" stroke-width="5.5" stroke-linecap="round"/>

 <!-- neck (slender) -->
 <path d="M112 90 C102 80 90 62 84 44 L98 38 C104 56 112 72 124 84 Z" fill="url(#neckG)"/>
 <path d="M108 88 C99 79 89 63 84 48 L89 45 C95 60 103 74 114 84 Z" fill="#efe4cd" opacity=".75"/>

 <!-- horns (long, ringed, swept back) -->
 <path d="M84 32 C76 18 80 6 94 0" stroke="#5d4526" stroke-width="4" fill="none" stroke-linecap="round"/>
 <path d="M91 30 C85 18 89 8 102 2" stroke="#6e5330" stroke-width="3.8" fill="none" stroke-linecap="round"/>
 <path d="M81 28 l7 -2 M79 21 l7 -1 M80 14 l7 0 M84 8 l6 1" stroke="#3f2f18" stroke-width="1.5" opacity=".65"/>

 <!-- ear -->
 <path d="M96 34 C106 26 114 25 118 28 C114 36 106 41 98 42 Z" fill="#c49658"/>
 <path d="M99 34 C105 30 110 29 113 30 C110 35 104 38 99 39 Z" fill="#eeddc2"/>

 <!-- head -->
 <path d="M96 36 C90 28 80 25 71 28 C61 31 54 39 52 47 C51 53 55 57 61 58 C71 59 81 54 87 48 C91 44 95 40 96 36 Z" fill="url(#neckG)"/>
 <!-- muzzle -->
 <path d="M56 50 C51 52 47 55 46 59 C49 62 54 62 58 60 Z" fill="#b98c4f"/>
 <circle cx="47" cy="58" r="2.8" fill="#241c10"/>
 <path d="M49 62 C52 63.5 55 63.5 57 62" stroke="#241c10" stroke-width="1.5" fill="none" stroke-linecap="round"/>
 <!-- eye + tear mark + blaze -->
 <circle cx="70" cy="42" r="4.6" fill="#241c10"/>
 <circle cx="71.5" cy="40.5" r="1.5" fill="#fff"/>
 <path d="M67 47 C63 52 58 55 53 56" stroke="#4a3a24" stroke-width="2.2" fill="none" stroke-linecap="round" opacity=".8"/>
 <path d="M76 35 C72 32 66 32 62 35" stroke="#f2e7d0" stroke-width="2.6" fill="none" stroke-linecap="round" opacity=".9"/>
</svg>`;
document.getElementById('mascotHost').innerHTML = GAZELLE;

/* ================================================================
   CHAPTER DATA — قصة مترابطة: سيف وريم والجد سالم يتبعون الخريطة
   ================================================================ */
const AR_N=['٠','١','٢','٣','٤','٥'];
const CH = [
 {
  key:'deen', name:'الدِّين', tag:'المحطة الأولى: القرية القديمة', emoji:'🕌',
  gemColor:'#0b7a4b', gemName:'جوهرة الإيمان', game:'puzzle',
  pages:[
   { scene:'dawn', lead:'قبل الفجر',
     text:'انطلق سيف وريم مع الجدّ سالم قبل الفجر، فالخريطة تشير إلى القرية القديمة التي وُلد فيها الجد. وصلوا والنجوم ما تزال في السماء… وفجأة علا صوتٌ هادئ فوق البيوت كلها: «اللهُ أكبر». خرج الناس من بيوت الطين نحو المسجد الصغير، وحمل سيف قِربة الماء يساعد المتوضّئين، تمامًا كما كان يفعل الجد وهو في عمره.',
     whisper:'لاحظت ريم أن الجميع توقفوا عن كل شيء في اللحظة نفسها… كأن قلوبهم اتجهت معًا إلى شيءٍ أكبر منهم جميعًا.' },
   { scene:'dates', lead:'ضيفُ الله',
     text:'بعد الصلاة جلس عند الباب مسافرٌ غريب يبدو عليه التعب. أسرع إليه رجلٌ عجوز يحمل التمر والقهوة وقال: «حيّاك الله يا ضيف الله». همس سيف لجدّه: «لكنه لا يعرفه!» فابتسم الجد: «هكذا علّمنا ديننا يا وليدي: رحمةٌ وكرمٌ وصدق… قبل أن يكون كلامًا». وعند محراب المسجد، لمعت على الخريطة أول إشارة!',
     whisper:'قال الجد: «الجوهرة الأولى تنتظر من يُعيد للمسجد صورته الجميلة…»' }
  ],
  discover:{
   chips:[
    {e:'🕌',t:'الأذان يرفع خمس مرات كل يوم يجمع الناس على الصلاة'},
    {e:'🤲',t:'إكرام الضيف والمسافر ولو كان غريبًا'},
    {e:'💝',t:'الصدقة ومساعدة المحتاج بلا انتظار شكر'},
    {e:'🤝',t:'الصدق في البيع والأمانة في العمل'},
    {e:'🌧️',t:'شكر الله على المطر والرزق والخير'}
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
  gameTitle:'أكمِل المسجد', gameDesc:'انزلق بالقطع نحو الفراغ حتى تكتمل صورة المسجد. استعن بالصورة الصغيرة!',
  winMsg:'اكتمل المسجد كما تجتمع القلوب في الصلاة.'
 },
 {
  key:'wala', name:'الولاء', tag:'المحطة الثانية: ساحة العلم', emoji:'🇦🇪',
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
    {e:'🇦🇪',t:'الوقوف باحترام للعلم والنشيد الوطني'},
    {e:'🎉',t:'الاحتفال بيوم الاتحاد ٢ ديسمبر ويوم العلم'},
    {e:'📚',t:'الاجتهاد في الدراسة والعمل لرفعة الوطن'},
    {e:'💪',t:'الوقوف صفًا واحدًا خلف القيادة وقت الشدة'},
    {e:'🏞️',t:'المحافظة على ممتلكات الوطن ونظافته'}
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
  key:'muwatana', name:'المواطَنة', tag:'المحطة الثالثة: حيّنا الجميل', emoji:'🤝',
  gemColor:'#0a84ff', gemName:'جوهرة المسؤولية', game:'maze',
  pages:[
   { scene:'rules', lead:'في طريق العودة',
     text:'بعد المدرسة عادوا مشيًا عبر الحيّ. عند الإشارة الحمراء وقفت السيارات كلها فعبر الأطفال بأمان. قال الجد: «انظرا… حين يحترم كلٌّ منا القانون، يصير الطريق أمانًا للجميع». وعلى الرصيف رأت ريم فتاةً تنحني وتلتقط علبةً وقعت من أحدهم وتضعها في السلة، دون أن يطلب منها أحد.',
     whisper:'فهمت ريم أن البلد ليس أرضًا فقط… بل ناسٌ يحفظون مكانهم كأنه بيتهم.' },
   { scene:'clean', lead:'الحيّ بيتُنا الكبير',
     text:'وجدوا جيران الحي متجمعين يتطوعون لتنظيف الحديقة وزراعة شتلات الغاف. انضم سيف إليهم فورًا، وحملت ريم على ظهرها سلال الشتلات فصفّق لها الصغار! قال الجد: «المواطن الصالح يأخذ حقّه بأدب ويؤدي واجبه بحب». وإذا بالإشارة الثالثة تلمع فوق الحديقة!',
     whisper:'«جوهرة المسؤولية لمن يجمع النجوم كلها ثم يعود إلى البيت سالمًا» — قالت الخريطة.' }
  ],
  discover:{
   chips:[
    {e:'🚦',t:'احترام قوانين المرور وعبور الشارع من المكان الصحيح'},
    {e:'🌳',t:'المحافظة على الحدائق والمرافق العامة'},
    {e:'🙋',t:'التطوع لمساعدة الجيران وخدمة الحي'},
    {e:'🌍',t:'احترام حقوق الآخرين مهما اختلفوا عنا'},
    {e:'🗳️',t:'المشاركة في خدمة المجتمع والمناسبات الوطنية'}
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
  gameTitle:'طريقُ العودة', gameDesc:'متاهة أكبر هذه المرة! اجمع النجوم السبع كلها ثم عُد إلى البيت الأخضر.',
  winMsg:'جمعت النجوم وعدت سالمًا؛ أدّيت الواجب كاملًا!'
 },
 {
  key:'thaqafa', name:'الثقافة', tag:'المحطة الرابعة: مجلس الجد', emoji:'☕',
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
    {e:'🗣️',t:'اللغة العربية: لغة القرآن وهويتنا الأولى'},
    {e:'☕',t:'القهوة العربية والتمر: رمز الضيافة والكرم'},
    {e:'📜',t:'الشعر النبطي وفن العيّالة في الأعياد'},
    {e:'👳',t:'الكندورة والعباءة: لباسنا الذي نفخر به'},
    {e:'🌺',t:'الحناء والتلّي: نقوش الأمهات والجدات'}
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
  key:'turath', name:'التُّراث', tag:'المحطة الأخيرة: الميناء القديم', emoji:'🐪',
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
    {e:'⛵',t:'الغوص على اللؤلؤ وسفن المحامل الشراعية'},
    {e:'🦅',t:'الصقّارة: صيد الصقور رياضة الآباء'},
    {e:'🐪',t:'سباقات الهجن في الأعياد والمهرجانات'},
    {e:'🌴',t:'النخلة أم الخير: تمرٌ وظل وسعف للبيوت'},
    {e:'🏰',t:'الحصون والبراجيل: عمارة صنعت للصحراء'}
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
    el.innerHTML='<div class="ch-gem'+(got?' earned':'')+'" style="--g:'+c.gemColor+'">'+(got?'✓':'◇')+'</div>'
      +'<div class="ch-emoji">'+c.emoji+'</div>'
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
   BOOK — with page-flip
   ================================================================ */
function openChapter(i){cur=i; curPage=0; renderBook(0); show('book');}
function turnPage(dir){ // dir: +1 forward, -1 back
  const paper=document.getElementById('paper');
  Snd.flip();
  paper.classList.add(dir>0?'flip-out':'flip-out-b');
  setTimeout(()=>{
    curPage+=dir;
    renderBook(dir);
  },270);
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
    html='<div class="page">'
      +'<div class="scene" style="background:'+sceneBG(pg.scene)+'">'+(SCENES[pg.scene]||'')+'</div>'
      +'<div class="story-card"><span class="lead">'+pg.lead+'</span>'+pg.text
      +'<div class="whisper">'+pg.whisper+'</div></div>'
      +'<div class="hint-swipe">اسحب الصفحة أو استخدم الأزرار ↔</div>'
      +'</div><div class="pageno">'+pageNo+'</div>';
  } else {
    const d=c.discover;
    window._tn={past:d.past,now:d.now};
    html='<div class="page">'
      +'<div class="gem-banner" style="--g:'+c.gemColor+'"><div class="g"></div>'
      +'<div><h5>'+c.gemName+'</h5><p>أنهِ لعبة «'+c.gameTitle+'» لتضمّها إلى العقد!</p></div></div>'
      +'<div class="sec-title">👆 المس البطاقات لتكتشف '+c.name+' حولك</div>'
      +'<div class="chips">'+d.chips.map(ch=>
        '<div class="chip" onclick="toggleChip(this)"><div class="in">'
        +'<div class="f">'+ch.e+'<small>اضغط لتقلب</small></div>'
        +'<div class="b">'+ch.t+'</div></div></div>').join('')+'</div>'
      +'<div class="sec-title">✨ أسرار '+c.name+'</div>'
      +'<div class="acc">'+d.traits.map(t=>
        '<div class="acc-row"><div class="acc-h" onclick="toggleAcc(this)">'+t.t
        +'<span class="pm">+</span></div><div class="acc-b">'+t.d+'</div></div>').join('')+'</div>'
      +'<div class="tn-switch"><div class="tn-tabs">'
      +'<button class="on" onclick="tnShow(0,this)">⏳ زمن الأجداد</button>'
      +'<button onclick="tnShow(1,this)">🌇 زماننا اليوم</button></div>'
      +'<div class="tn-body" id="tnBody">'+d.past+'</div></div>'
      +'</div><div class="pageno">'+pageNo+'</div>';
  }
  paper.innerHTML=html;
  paper.scrollTop=0;
  paper.className='paper '+(dir>0?'flip-in':dir<0?'flip-in-b':'');
  setTimeout(()=>{paper.className='paper';},340);

  // pager buttons
  const pager=document.getElementById('pager'); pager.innerHTML='';
  const back=document.createElement('button'); back.className='btn ghost'; back.style.flex='0 0 36%';
  back.textContent = curPage===0?'الفصول':'‹ السابق';
  back.onclick=()=> curPage===0?goHome():turnPage(-1);
  const next=document.createElement('button'); next.className='btn'; next.style.flex='1';
  if(curPage<2){ next.textContent = curPage===1?'اكتشف ›':'التالي ›'; next.onclick=()=>turnPage(1); }
  else { next.className='btn gold'; next.style.flex='1'; next.textContent='🎮 العب: '+c.gameTitle;
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
/* swipe pages */
(function(){
  const paper=document.getElementById('paper');
  let sx=0,sy=0;
  paper.addEventListener('touchstart',e=>{sx=e.touches[0].clientX; sy=e.touches[0].clientY;},{passive:true});
  paper.addEventListener('touchend',e=>{
    const dx=e.changedTouches[0].clientX-sx, dy=e.changedTouches[0].clientY-sy;
    if(Math.abs(dy)>50||Math.abs(dx)<60)return;
    if(dx>0 && curPage<2) turnPage(1);      /* سحب لليمين = التالي (كتاب عربي) */
    else if(dx<0 && curPage>0) turnPage(-1);
  },{passive:true});
})();

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
  else {em.style.display='block'; gm.style.display='none'; em.textContent=o.emoji||'🎉';}
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
    gem:first?c.gemColor:null, emoji:'🎉',
    title:first?c.gemName+'!':'أحسنت من جديد!',
    text:c.winMsg+(first?' انضمت '+c.gemName+' إلى العقد.':''),
    btn: all&&first?'شاهد العقد الكامل ✨':(cur<CH.length-1?'المحطة التالية ›':'العودة للخريطة'),
    cb(){ stopAllGames();
      if(all&&first){grandFinale();}
      else if(cur<CH.length-1){openChapter(cur+1);}
      else goHome();
    }
  });
}
function grandFinale(){
  fireConfetti(); Snd.fanfare(); setTimeout(()=>{Snd.fanfare(); fireConfetti();},700);
  showSheet({emoji:'🏆', title:'اكتمل عقدُ الهوية!',
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
  ({puzzle:initPuzzle, maze:initMaze, catch:initCatch, simon:initSimon, memory:initMemory})[c.game]();
}
function backToBook(){stopAllGames(); curPage=2; renderBook(0); show('book');}
let stopAllGames=()=>{};
function wrapStage(node){const s=document.createElement('div'); s.className='game-stage'; s.appendChild(node); return s;}
function wait(ms){return new Promise(r=>setTimeout(r,ms));}

/* ---------- GAME 1: MOSQUE SLIDING PUZZLE (أسهل) ---------- */
function mosqueSVG(){return `data:image/svg+xml;utf8,`+encodeURIComponent(`
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'>
<rect width='300' height='300' fill='#ffe6a8'/>
<circle cx='150' cy='120' r='60' fill='#ffd166'/>
<rect x='40' y='170' width='220' height='110' fill='#e9d3a0'/>
<path d='M40 170 q110 -70 220 0Z' fill='#0b7a4b'/>
<rect x='142' y='60' width='16' height='40' fill='#0b7a4b'/>
<circle cx='150' cy='52' r='12' fill='#c9a227'/>
<rect x='60' y='150' width='24' height='130' fill='#c7ad78'/>
<rect x='216' y='150' width='24' height='130' fill='#c7ad78'/>
<path d='M60 150 q12 -26 24 0Z' fill='#0b7a4b'/>
<path d='M216 150 q12 -26 24 0Z' fill='#0b7a4b'/>
<rect x='128' y='210' width='44' height='70' rx='22' fill='#7a5a2e'/>
<rect x='80' y='200' width='30' height='40' rx='15' fill='#b98a4e'/>
<rect x='190' y='200' width='30' height='40' rx='15' fill='#b98a4e'/>
<circle cx='72' cy='140' r='8' fill='#c9a227'/><circle cx='228' cy='140' r='8' fill='#c9a227'/>
</svg>`);}
let pz={order:[],empty:8,moves:0};
function shuffleByMoves(n){
  pz.order=[...Array(9).keys()]; pz.empty=8;
  let last=-1;
  for(let k=0;k<n;k++){
    const e=pz.empty, er=Math.floor(e/3), ec=e%3, opts=[];
    [[er-1,ec],[er+1,ec],[er,ec-1],[er,ec+1]].forEach(rc=>{
      if(rc[0]>=0&&rc[0]<3&&rc[1]>=0&&rc[1]<3){const i=rc[0]*3+rc[1]; if(i!==last)opts.push(i);}});
    const i=opts[Math.floor(Math.random()*opts.length)];
    pz.order[e]=pz.order[i]; pz.order[i]=8; last=e; pz.empty=i;
  }
  if(isSolved())shuffleByMoves(n);
}
function isSolved(){return pz.order.every((v,i)=>v===i);}
function initPuzzle(){
  const src=mosqueSVG();
  const wrap=document.createElement('div'); wrap.id='puzzleWrap';
  const grid=document.createElement('div'); grid.id='puzzleGrid';
  const side=document.createElement('div'); side.className='pz-side';
  side.innerHTML='<div class="pz-thumb" style="background-image:url(\''+src+'\')"></div><small>الصورة الكاملة</small>';
  wrap.append(grid,side);
  document.getElementById('gameBody').innerHTML='';
  document.getElementById('gameBody').appendChild(wrapStage(wrap));
  shuffleByMoves(12);            /* خلط خفيف = أسهل بكثير */
  pz.moves=0;
  drawPuzzle(src,grid);
  document.getElementById('gameFoot').innerHTML=
    '<span class="pill" id="pzMoves">النقلات: 0</span><button class="btn ghost" id="pzShuf">خلط 🔀</button>';
  document.getElementById('pzShuf').onclick=()=>{shuffleByMoves(12); pz.moves=0;
    document.getElementById('pzMoves').textContent='النقلات: 0'; drawPuzzle(src,grid);};
  stopAllGames=()=>{};
}
function drawPuzzle(src,grid){
  grid.innerHTML='';
  pz.order.forEach((val,idx)=>{
    const t=document.createElement('div');
    if(val===8){t.className='ptile empty';}
    else{
      t.className='ptile';
      const r=Math.floor(val/3), col=val%3;
      t.style.backgroundImage='url("'+src+'")';
      t.style.backgroundPosition=(col*50)+'% '+(r*50)+'%';
    }
    t.onclick=()=>tryMove(idx,src,grid);
    grid.appendChild(t);
  });
}
function tryMove(idx,src,grid){
  const e=pz.empty, er=Math.floor(e/3),ec=e%3, ir=Math.floor(idx/3),ic=idx%3;
  if((Math.abs(er-ir)===1&&ec===ic)||(Math.abs(ec-ic)===1&&er===ir)){
    const a=pz.order[e]; pz.order[e]=pz.order[idx]; pz.order[idx]=a; pz.empty=idx;
    pz.moves++; document.getElementById('pzMoves').textContent='النقلات: '+pz.moves;
    Snd.ding();
    drawPuzzle(src,grid);
    if(isSolved()){
      grid.querySelectorAll('.ptile.empty').forEach(x=>{x.classList.remove('empty');
        x.style.backgroundImage='url("'+src+'")'; x.style.backgroundPosition='100% 100%';});
      setTimeout(winChapter,450);
    }
  }
}

/* ---------- GAME 2: MAZE (أصعب: أكبر + ٧ نجوم) ---------- */
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
  mz={rows,cols,stars:0,total:0,px:0,py:0,cells:[]};
  const wrap=document.getElementById('gameBody'); wrap.innerHTML='';
  const grid=document.createElement('div'); grid.id='maze';
  const size=Math.min(23, Math.floor(290/cols));
  grid.style.gridTemplateColumns='repeat('+cols+','+size+'px)';
  grid.style.gridTemplateRows='repeat('+rows+','+size+'px)';
  mz.map=MAZE_MAP.map(r=>r.split(''));
  for(let y=0;y<rows;y++)for(let x=0;x<cols;x++){
    const ch=mz.map[y][x]; const c=document.createElement('div');
    c.className='mcell '+(ch==='1'?'wall':(ch==='H'?'home':'path'));
    c.style.fontSize=(size*0.68)+'px';
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
  document.getElementById('gameFoot').innerHTML='<span class="pill" id="mzStars">النجوم: 0 / '+mz.total+'</span>'
    +'<span class="pill goldy">اجمعها كلها ثم عُد للبيت 🏠</span>';
  const kh=e=>{const k={ArrowUp:'U',ArrowDown:'D',ArrowLeft:'L',ArrowRight:'R'}[e.key]; if(k){e.preventDefault();move(k);}};
  window.addEventListener('keydown',kh);
  /* سحب بالأصبع فوق المتاهة */
  let sx=0,sy=0;
  grid.addEventListener('touchstart',e=>{sx=e.touches[0].clientX; sy=e.touches[0].clientY;},{passive:true});
  grid.addEventListener('touchend',e=>{
    const dx=e.changedTouches[0].clientX-sx, dy=e.changedTouches[0].clientY-sy;
    if(Math.max(Math.abs(dx),Math.abs(dy))<24)return;
    if(Math.abs(dx)>Math.abs(dy)) move(dx>0?'R':'L'); else move(dy>0?'D':'U');
  },{passive:true});
  stopAllGames=()=>window.removeEventListener('keydown',kh);
  drawMaze();
}
function idx(x,y){return y*mz.cols+x;}
function move(d){
  let nx=mz.px,ny=mz.py;
  if(d==='U')ny--; if(d==='D')ny++; if(d==='L')nx--; if(d==='R')nx++;
  if(nx<0||ny<0||nx>=mz.cols||ny>=mz.rows)return;
  if(mz.map[ny][nx]==='1')return;
  mz.px=nx; mz.py=ny;
  const cell=mz.cells[idx(nx,ny)];
  if(cell.dataset.star==='1'){cell.dataset.star='0'; mz.stars++; Snd.star();
    document.getElementById('mzStars').textContent='النجوم: '+mz.stars+' / '+mz.total;
    toast('⭐ +1');}
  drawMaze();
  if(mz.px===mz.hx&&mz.py===mz.hy){
    if(mz.stars>=mz.total) setTimeout(winChapter,250);
    else {Snd.buzz(); toast('بقيت نجوم! '+mz.stars+' / '+mz.total+' ⭐');}
  }
}
function drawMaze(){
  mz.cells.forEach((c,i)=>{
    const x=i%mz.cols,y=Math.floor(i/mz.cols); const ch=mz.map[y][x];
    if(x===mz.px&&y===mz.py){c.textContent='🦌';}
    else if(ch==='H'){c.textContent='🏠';}
    else if(c.dataset.star==='1'){c.textContent='⭐';}
    else c.textContent='';
  });
}

/* ---------- GAME 3: BASKET CATCH (أصعب: قلوب + تسارع) ---------- */
const GOOD=['🐪','🕌','🌴','☕','🦅','⭐','🐟','🏰','📿','🇦🇪'];
const BAD=['🍔','🎮','🍟','🤖','👟','🎪'];
let cg={};
function initCatch(){
  const wrap=document.getElementById('gameBody'); wrap.innerHTML='';
  const area=document.createElement('div'); area.id='catchArea';
  const basket=document.createElement('div'); basket.id='basket'; basket.textContent='🧺';
  area.appendChild(basket);
  wrap.appendChild(wrapStage(area));
  document.getElementById('gameFoot').innerHTML='<span class="pill" id="cgScore">النقاط: 0</span>'
    +'<span class="pill warn" id="cgHearts">❤️❤️❤️</span>'
    +'<span class="pill goldy">الهدف: 15</span>';
  cg={score:0,goal:15,hearts:3,bx:150,items:[],running:true,area,basket,spawnT:0};
  const W=()=>area.clientWidth;
  basket.style.right=(W()/2-23)+'px'; cg.bx=W()/2;
  const setPos=cx=>{const r=area.getBoundingClientRect();
    let x=cx-r.left; x=Math.max(24,Math.min(W()-24,x));
    basket.style.right=(W()-x-23)+'px'; cg.bx=x;};
  const pm=e=>{const cx=e.touches?e.touches[0].clientX:e.clientX; setPos(cx);};
  area.addEventListener('pointermove',pm);
  area.addEventListener('touchmove',pm,{passive:true});
  const kh=e=>{if(e.key==='ArrowLeft')cg.bx=Math.max(24,cg.bx-28);
    if(e.key==='ArrowRight')cg.bx=Math.min(W()-24,cg.bx+28);
    basket.style.right=(W()-cg.bx-23)+'px';};
  window.addEventListener('keydown',kh);
  let raf;
  const loop=()=>{
    if(!cg.running)return;
    cg.spawnT++;
    const interval=Math.max(14, 30-Math.floor(cg.score*1.1));   /* تسارع الظهور */
    if(cg.spawnT>interval){cg.spawnT=0; spawnItem(area);}
    for(let i=cg.items.length-1;i>=0;i--){
      const it=cg.items[i]; it.y+=it.sp; it.el.style.top=it.y+'px';
      const bTop=area.clientHeight-52;
      if(it.y>bTop && it.y<area.clientHeight-8 && Math.abs(it.x-cg.bx)<40){
        if(it.good){cg.score++; Snd.star(); toast('👍 +1');}
        else{
          cg.hearts--; Snd.buzz(); toast('✋ ليس من تراثنا!');
          document.getElementById('cgHearts').textContent='❤️'.repeat(cg.hearts)+'🖤'.repeat(3-cg.hearts);
        }
        document.getElementById('cgScore').textContent='النقاط: '+cg.score;
        it.el.remove(); cg.items.splice(i,1);
        if(cg.hearts<=0){cg.running=false; cancelAnimationFrame(raf);
          setTimeout(()=>showSheet({emoji:'😅',title:'انتهت القلوب!',
            text:'التقطت أشياء ليست من كنوز الإمارات. ركّز جيدًا وحاول من جديد!',
            btn:'إعادة المحاولة 🔄',cb:initCatch}),300);
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
function spawnItem(area){
  const good=Math.random()>0.38;
  const em=good?GOOD[Math.floor(Math.random()*GOOD.length)]:BAD[Math.floor(Math.random()*BAD.length)];
  const el=document.createElement('div'); el.className='falling'; el.textContent=em;
  const x=24+Math.random()*(area.clientWidth-48);
  el.style.left=(x-17)+'px'; el.style.top='-30px';
  area.appendChild(el);
  cg.items.push({el,x,y:-30,sp:2.0+cg.score*0.09+Math.random()*1.4,good});  /* تسارع السقوط */
}

/* ---------- GAME 4: SIMON (أصعب: ٧ جولات أسرع تبدأ بنغمتين) ---------- */
let sm={};
function initSimon(){
  const wrap=document.getElementById('gameBody'); wrap.innerHTML='';
  const grid=document.createElement('div'); grid.className='simon-grid';
  const labels=['🕌','🇦🇪','🐪','🌟'];
  for(let i=0;i<4;i++){const p=document.createElement('div'); p.className='spad s'+i;
    p.textContent=labels[i]; p.onclick=()=>press(i); grid.appendChild(p);}
  wrap.appendChild(wrapStage(grid));
  sm={seq:[],step:0,accept:false,pads:[...grid.children],round:0,target:7};
  document.getElementById('gameFoot').innerHTML='<span class="pill" id="smRound">الجولة: 0 / '+sm.target+'</span>'
    +'<button class="btn ghost" id="smBtn">ابدأ ▶</button>';
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
  const speed=Math.max(170,430-sm.round*40);        /* أسرع كل جولة */
  for(const i of sm.seq){await light(i,speed);}
  sm.accept=true; toast('كرّر التسلسل 🔁');}
function press(i){ if(!sm.accept)return;
  sm.pads[i].classList.add('lit'); Snd.pad(i);
  setTimeout(()=>sm.pads[i].classList.remove('lit'),140);
  if(i===sm.seq[sm.step]){ sm.step++;
    if(sm.step===sm.seq.length){ sm.accept=false;
      if(sm.round>=sm.target){setTimeout(winChapter,350);}
      else {Snd.ding(); toast('✅ أحسنت'); setTimeout(nextRound,650);}
    }
  } else {
    sm.accept=false; Snd.buzz(); toast('خطأ! أعد المحاولة 🔁');
    const g=document.querySelector('.simon-grid');
    if(g)g.animate([{filter:'brightness(1)'},{filter:'brightness(1.6) saturate(2)'},{filter:'brightness(1)'}],{duration:400});
    setTimeout(()=>{sm.step=0; playSeq();},900);
  }
}

/* ---------- GAME 5: MEMORY (أصعب: ١٠ أزواج + مؤقت) ---------- */
const MEM=['🐪','🕌','🌴','☕','🦅','🐚','🏰','🥁','⛵','🏺'];
let mm={};
function initMemory(){
  const wrap=document.getElementById('gameBody'); wrap.innerHTML='';
  const grid=document.createElement('div'); grid.id='memGrid';
  const deck=[...MEM,...MEM].sort(()=>Math.random()-0.5);
  mm={first:null,lock:false,matched:0,moves:0,time:100,timer:null};
  deck.forEach(sym=>{
    const card=document.createElement('div'); card.className='mcard'; card.dataset.s=sym;
    card.innerHTML='<div class="in"><div class="mface mfront">🌙</div><div class="mface mback">'+sym+'</div></div>';
    card.onclick=()=>flip(card); grid.appendChild(card);
  });
  wrap.appendChild(wrapStage(grid));
  document.getElementById('gameFoot').innerHTML='<span class="pill" id="mmTime">⏱️ 100</span>'
    +'<span class="pill" id="mmMoves">المحاولات: 0</span>'
    +'<span class="pill goldy" id="mmPairs">الأزواج: 0 / 10</span>';
  mm.timer=setInterval(()=>{
    mm.time--;
    const t=document.getElementById('mmTime');
    if(t){t.textContent='⏱️ '+mm.time; if(mm.time<=15)t.className='pill warn';}
    if(mm.time<=0){clearInterval(mm.timer); mm.lock=true; Snd.buzz();
      showSheet({emoji:'⏰',title:'انتهى الوقت!',
        text:'ذاكرة الأجداد تحتاج تركيزًا أكبر. أعد المحاولة وكن أسرع!',
        btn:'إعادة المحاولة 🔄',cb:initMemory});}
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
function toast(m){const t=document.getElementById('toast'); t.textContent=m; t.classList.add('show');
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
