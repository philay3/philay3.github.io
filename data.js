/* =========================================================
   data.js — notebook content
   Each day has a number, title, date, and array of pages.
   Pages are HTML strings. Add new days by appending to days[].
   ========================================================= */

const programData = {
  title: "Next Chapter Lab Notebook",

  days: [

    /* ===================== DAY 1 ===================== */
    {
      number: 1,
      title: "Talking to AI",
      date: "April 2026",
      pages: [

        /* --- Cover --- */
        `
        <div class="nb-cover">
          <h1>Day 1</h1>
          <h2>Talking to AI</h2>
          <p class="rule">~ ~ ~ ~ ~ ~ ~</p>
          <p class="meta">April 2026 · lab notebook</p>
          <p class="sig">— Chops</p>
        </div>
        `,

        /* --- Exercise 1 --- */
        `
        <h3 class="nb-h">Ex. 1 — ask AI something you're curious about</h3>
        <p class="nb-p">Tried: "explain how a car engine works like I'm 10."</p>
        <p class="nb-p ai">AI's take: <span class="hl">four cylinders = four runners in a relay,
          each taking turns pushing the car. Air + gas + spark = mini explosion = push forward.</span></p>
        <p class="nb-arrow">→ low stakes, high payoff. First time a mechanical concept clicked
          in 30 seconds.</p>
        `,

        /* --- Exercise 2 --- */
        `
        <h3 class="nb-h">Ex. 2 — ask AI to write something</h3>
        <p class="nb-p">Asked for a 3-sentence bio for socials.</p>
        <p class="nb-p"><em>v1 (AI):</em> <span class="ai">"tech enthusiast pivoting into software
          development with 7+ years in IT. Passionate about cybersecurity. Always learning,
          always building."</span></p>
        <p class="nb-p nb-soft">→ generic. Sounded like every LinkedIn bio.</p>
        <p class="nb-p"><em>v2 (after feedback):</em> <span class="ai hl">"IT systems guy turned
          legal-AI seller, now circling back to code with a focus on security. Seven years
          breaking and fixing things in healthcare and enterprise IT. I learn out loud."</span></p>
        <p class="nb-arrow">** loop: prompt → output → feedback → iterate **</p>
        `,

        /* --- Exercise 3 --- */
        `
        <h3 class="nb-h">Ex. 3 — ask AI something it can't answer</h3>
        <p class="nb-p"><strong>Q:</strong> "what color shirt am I wearing?"</p>
        <p class="nb-p ai" style="padding-left:14px"><strong>A:</strong> "probably navy blue!"
          <span class="nb-soft">(I'm in gray.)</span></p>
        <p class="nb-p"><strong>Q:</strong> "what did I eat for breakfast?"</p>
        <p class="nb-p ai" style="padding-left:14px"><strong>A:</strong> listed eggs and toast.
          <span class="nb-soft">(just coffee.)</span></p>
        <p class="nb-p"><strong>Q:</strong> "who's in my class right now?"</p>
        <p class="nb-p ai" style="padding-left:14px"><strong>A:</strong> made up three plausible names.</p>
        <p class="nb-arrow">→ <span class="hl">doesn't know. Sounds like it does.</span> That
          confident-but-wrong is the dangerous mode. Worth remembering anytime I ship something
          it wrote.</p>
        `,

        /* --- Exercise 4 --- */
        `
        <h3 class="nb-h">Ex. 4 — the prediction game</h3>
        <p class="nb-p" style="margin-top:4px"><strong>Part A — finish the sentence</strong></p>
        <ul class="nb-list">
          <li>"best thing about Fridays..." — me: leaving work early.
            <span class="ai">AI: the weekend on the horizon.</span></li>
          <li>"if I had any superpower..." — me: invisibility.
            <span class="ai">AI: time manipulation.</span></li>
          <li>"hardest part starting something new..." — me: not knowing if you'll be any good.
            <span class="ai">AI: the uncertainty of the unknown.</span></li>
        </ul>
        <p class="nb-p nb-soft">ran prompt #1 three times → different each time. Same shape, new words.</p>
        <p class="nb-arrow">→ <span class="hl">AI averages, I'm specific. Same prompt ≠ same answer.
          It's sampling, not retrieving.</span></p>

        <p class="nb-p" style="margin-top:18px"><strong>Part B — break it on purpose</strong></p>
        <ul class="nb-list">
          <li>"what year is it?" → <span class="ai">2024.</span> Off.</li>
          <li>"letters in 'strawberry'" → <span class="ai">2 r's.</span> Wrong, it's 3.</li>
          <li>"what's my middle name?" → <span class="ai">made one up.</span></li>
        </ul>
        <p class="nb-arrow">got wrong: <span class="hl">strawberry letter count</span>.
          <em>Why</em> → it sees TOKENS (chunks), not characters. Counting letters inside a word
          is genuinely hard for a token-based model.</p>
        `,

        /* --- Exercise 5 --- */
        `
        <h3 class="nb-h">Ex. 5 — AI can code</h3>
        <p class="nb-p">Prompt: simple HTML page, big blue "Hello, World!" centered, light gray bg.</p>

        <span class="nb-codelabel">code AI gave me:</span>
<pre class="nb-code">&lt;body style="background:#eee; text-align:center;"&gt;
  &lt;h1 style="color:blue; font-size:64px;"&gt;
    Hello, World!
  &lt;/h1&gt;
&lt;/body&gt;</pre>

        <p class="nb-p">Pasted into Replit → big blue letters, gray bg. ✓</p>

        <span class="nb-codelabel">found — where each piece lives:</span>
<pre class="nb-code">&lt;h1 style="color:blue;       <span class="c-comment">&lt;-- color lives here</span>
           font-size:64px;"&gt;
    Hello, World!            <span class="c-comment">&lt;-- text lives here</span>
&lt;/h1&gt;</pre>

        <span class="nb-codelabel">my changes (L1 + L2 + L3):</span>
<pre class="nb-code">&lt;h1 style="color:red;        <span class="c-comment">&lt;-- was: blue</span>
           font-size:64px;"&gt;
    Chops                    <span class="c-comment">&lt;-- was: Hello, World!</span>
&lt;/h1&gt;
&lt;p&gt;Building, breaking,       <span class="c-comment">&lt;-- new line</span>
   learning.&lt;/p&gt;</pre>

        <p class="nb-arrow">→ first time I "wrote code" by reading & modifying. Felt like cheating.
          Also felt like the future.</p>
        `

      ]
    },

    /* ===================== DAY 2 ===================== */
    {
      number: 2,
      title: "Reading code & better prompts",
      date: "April 2026",
      pages: [

        /* --- Cover --- */
        `
        <div class="nb-cover">
          <h1>Day 2</h1>
          <h2>Reading code & better prompts</h2>
          <p class="rule">~ ~ ~ ~ ~ ~ ~</p>
          <p class="meta">April 2026 · lab notebook</p>
          <p class="sig">— Chops</p>
        </div>
        `,

        /* --- Exercise 1: Prompt Makeover --- */
        `
        <h3 class="nb-h">Ex. 1 — prompt makeover</h3>
        <p class="nb-p">Three lazy prompts → made each one specific.</p>

        <p class="nb-p"><strong>A. Calculator</strong></p>
        <p class="nb-p nb-soft"><em>before:</em> "write code for a calculator"</p>
        <p class="nb-p"><em>after:</em> <span class="hl">"vanilla HTML/JS calculator. Two number
          inputs, +/−/×/÷ buttons, result display. Dark bg, light buttons. No frameworks."</span></p>
        <p class="nb-p nb-soft">→ added platform + ops + UI → got runnable code instead of pseudocode.</p>

        <p class="nb-p"><strong>B. Resume</strong></p>
        <p class="nb-p nb-soft"><em>before:</em> "help me with my resume"</p>
        <p class="nb-p"><em>after:</em> <span class="hl">"7 yrs IT (enterprise, healthcare,
          hardware) → legal-AI sales now → pivoting to junior dev / SOC analyst. One page,
          action verbs, transferable skills over sales tasks."</span></p>
        <p class="nb-p nb-soft">→ context about WHO + WHERE → tailored advice not generic tips.</p>

        <p class="nb-p"><strong>C. Quiz</strong></p>
        <p class="nb-p nb-soft"><em>before:</em> "make a quiz"</p>
        <p class="nb-p"><em>after:</em> <span class="hl">"10-question multiple-choice quiz on JS
          fundamentals (vars, functions, conditionals, loops). Audience: 1-week bootcamp
          beginner. Output as HTML, 4 options each, answer key at bottom."</span></p>
        <p class="nb-p nb-soft">→ specified topic + length + format + audience → got working HTML.</p>

        <p class="nb-arrow">→ pattern: <strong>WHO</strong> is this for, <strong>WHAT</strong>
          exactly, <strong>HOW</strong> should it look. AI fills in the blanks if you don't.</p>
        `,

        /* --- Exercise 2: Reading Code That AI Wrote --- */
        `
        <h3 class="nb-h">Ex. 2 — reading code that AI wrote</h3>
        <p class="nb-p">Asked AI for a name + color greeting. Read it BEFORE running.</p>

        <span class="nb-codelabel">code AI gave:</span>
<pre class="nb-code">const name = prompt("What is your name?");
const color = prompt("What is your favorite color?");
const message = "Hello, " + name + "! Your favorite color is " + color + ".";
document.write(message);</pre>

        <p class="nb-p"><strong>What I figured out:</strong></p>
        <ul class="nb-list">
          <li><span class="hl">prompt()</span> = popup that asks the user, returns whatever they
            typed (string)</li>
          <li><span class="hl">const</span> = a variable that can't be reassigned</li>
          <li><span class="hl">+</span> with text = concatenation. Glues strings together</li>
          <li>"Marcus" + "green" → <span class="ai">"Hello, Marcus! Your favorite color is green."</span></li>
          <li>Click cancel? → prompt returns <span class="ai">null</span> →
            <span class="ai">"Hello, null!..."</span> 😬</li>
        </ul>

        <span class="nb-codelabel">my mod — added food:</span>
<pre class="nb-code">const food = prompt("What's your favorite food?");
const message = "Hello, " + name + "! Your favorite color is "
  + color + " and your favorite food is " + food + ".";</pre>

        <p class="nb-arrow">→ reading first, running second. Easier to spot what each line does.</p>
        `,

        /* --- Peer Activity: Prompt Partners --- */
        `
        <h3 class="nb-h">peer activity — prompt partners</h3>
        <p class="nb-p">Paired up. Same task, different prompts, no peeking.</p>
        <p class="nb-p"><strong>Task:</strong> get AI to write a bio for someone changing
          careers into tech.</p>

        <p class="nb-p"><em>my prompt:</em> "Write a 3-sentence bio for someone with 7 yrs IT
          background pivoting into junior dev work. Casual but professional. Mention transferable
          skills."</p>

        <p class="nb-p"><em>their prompt:</em> "Write a LinkedIn bio for a former teacher, 5 yrs
          experience, transitioning into front-end dev. Show their teaching skills as an asset
          for tech."</p>

        <p class="nb-arrow">→ <span class="hl">theirs got the better result.</span> Why? They
          named the platform (LinkedIn) and explicitly tied the old skills to the new field.
          I left both implicit.</p>
        <p class="nb-p nb-soft">lesson: spell out the medium and the bridge.</p>
        `,

        /* --- Exercise 3: Tip Calculator --- */
        `
        <h3 class="nb-h">Ex. 3 — tip calculator</h3>

        <span class="nb-codelabel">trace with bill = 50, tip% = 20:</span>
<pre class="nb-code">bill        = 50
tipPercent  = 20
tip         = 50 * (20/100) = <span class="c-comment">10</span>
total       = 50 + 10       = <span class="c-comment">60</span></pre>

        <p class="nb-p"><strong>L1 — split between 2:</strong></p>
<pre class="nb-code">const perPerson = total / 2;
document.write("Each owes: $" + perPerson.toFixed(2));
<span class="c-comment">// 60 / 2 = $30 each</span></pre>

        <p class="nb-p"><strong>L2 — variable # of people:</strong></p>
<pre class="nb-code">const people = parseInt(prompt("How many people?"));
const perPerson = total / people;</pre>

        <p class="nb-p"><strong>L3 — generous tipper flag:</strong></p>
<pre class="nb-code">if (tip &gt; 20) {
  document.write("Generous tipper!");
}</pre>

        <p class="nb-arrow">→ <span class="hl">first time stacking modifications.</span> Each one
          small, but they compound.</p>
        `,

        /* --- Exercise 4: Temperature Converter --- */
        `
        <h3 class="nb-h">Ex. 4 — temperature converter</h3>

        <span class="nb-codelabel">trace with F = 212 (boiling water):</span>
<pre class="nb-code">F          = 212
F - 32     = <span class="c-comment">180</span>
180 * 5/9  = <span class="c-comment">100</span>   <span class="c-comment">// = 100°C ✓</span></pre>

        <p class="nb-p"><strong>L1 — flip direction (C → F):</strong></p>
<pre class="nb-code">const C = parseFloat(prompt("Celsius:"));
const F = (C * 9/5) + 32;
document.write(C + "°C = " + F + "°F");</pre>

        <p class="nb-p"><strong>L2 — let user pick direction:</strong></p>
<pre class="nb-code">const dir = prompt("Convert (1) F→C or (2) C→F?");
if (dir === "1") {
  <span class="c-comment">// F to C math</span>
} else {
  <span class="c-comment">// C to F math</span>
}</pre>

        <p class="nb-p"><strong>L3 — round to 1 decimal:</strong></p>
<pre class="nb-code">result.toFixed(1)   <span class="c-comment">// "100.0" not "100.000..."</span></pre>

        <p class="nb-arrow">→ <span class="hl">.toFixed(n) is the move</span> for clean number output.</p>
        `,

        /* --- Exercise 5: Compliment Generator --- */
        `
        <h3 class="nb-h">Ex. 5 — compliment generator</h3>
        <p class="nb-p">First time using arrays + Math.random(). New territory.</p>

        <p class="nb-p"><strong>Q&amp;A on the new pieces:</strong></p>
        <ul class="nb-list">
          <li>compliments live in → <span class="hl">an array</span></li>
          <li>Math.random() → <span class="ai">number between 0 and 1</span> (e.g. 0.234)</li>
          <li>Math.floor() → <span class="ai">rounds DOWN</span> to a whole number</li>
          <li>compliments.length → <span class="hl">how many items in the array</span></li>
          <li>random()=0.7, 5 compliments → floor(0.7 × 5) = floor(3.5) =
            <span class="hl">index 3</span></li>
        </ul>

        <p class="nb-p"><strong>L2 — pick TWO at random:</strong></p>
<pre class="nb-code">const i1 = Math.floor(Math.random() * compliments.length);
const i2 = Math.floor(Math.random() * compliments.length);
<span class="c-comment">// might be the same index, that's OK</span></pre>

        <p class="nb-p"><strong>L3 — keep going while user says yes:</strong></p>
<pre class="nb-code">let again = "yes";
while (again === "yes") {
  <span class="c-comment">// pick + display compliment</span>
  again = prompt("Want another? yes/no");
}</pre>

        <p class="nb-arrow">→ arrays + random + loop. Three new tools in 30 min. Brain is full.</p>
        `

      ]
    },

    /* ===================== DAY 3 ===================== */
    {
      number: 3,
      title: "Sequence · selection · iteration",
      date: "April 2026",
      pages: [

        /* --- Cover --- */
        `
        <div class="nb-cover">
          <h1>Day 3</h1>
          <h2>Sequence · selection · iteration</h2>
          <p class="rule">~ ~ ~ ~ ~ ~ ~</p>
          <p class="meta">April 2026 · lab notebook</p>
          <p class="sig">— Chops</p>
        </div>
        `,

        /* --- Warm-up: Predict the Path --- */
        `
        <h3 class="nb-h">warm-up — predict the path</h3>
        <p class="nb-p">Given:</p>
<pre class="nb-code">const weather = "rainy";
if (weather === "sunny")      console.log("Wear sunglasses!");
else if (weather === "rainy") console.log("Grab an umbrella!");
else                          console.log("Check the forecast.");</pre>

        <ul class="nb-list">
          <li>weather="rainy" → <span class="hl">"Grab an umbrella!"</span>
            <span class="nb-soft">(2nd branch hits)</span></li>
          <li>weather="cloudy" → <span class="hl">"Check the forecast."</span>
            <span class="nb-soft">(falls to else)</span></li>
          <li>weather="Rainy" → <span class="hl">"Check the forecast."</span>
            <span class="nb-soft">(=== is case-sensitive, no match)</span></li>
        </ul>

        <p class="nb-arrow">→ <span class="hl">=== checks for an EXACT match</span> — case, type,
          everything. Bit me before in PowerShell. Same idea.</p>
        `,

        /* --- Exercise 1: Sequence (hourly wage) --- */
        `
        <h3 class="nb-h">Ex. 1 — build with sequence</h3>
        <p class="nb-p"><em>my prompt:</em> "JS that asks for hourly wage and hours worked,
          calculates weekly pay, displays it."</p>

        <span class="nb-codelabel">code AI gave:</span>
<pre class="nb-code">const wage  = parseFloat(prompt("Hourly wage?"));
const hours = parseFloat(prompt("Hours this week?"));
const pay   = wage * hours;
document.write("You earned $" + pay.toFixed(2) + " this week.");</pre>

        <p class="nb-p"><strong>Trace — $15/hr, 40 hrs:</strong></p>
<pre class="nb-code">wage  = 15
hours = 40
pay   = 15 * 40 = <span class="c-comment">600</span>
output: "You earned $600.00 this week."</pre>

        <p class="nb-p"><strong>Modification — 8% tax:</strong></p>
<pre class="nb-code">const takeHome = pay * 0.92;
document.write("After tax: $" + takeHome.toFixed(2));
<span class="c-comment">// 600 * 0.92 = $552</span></pre>

        <p class="nb-arrow">→ <span class="hl">order matters.</span> takeHome can't run before
          pay exists. That's sequence in one sentence.</p>
        `,

        /* --- Exercise 2: Selection (temperature) --- */
        `
        <h3 class="nb-h">Ex. 2 — build with selection</h3>
        <p class="nb-p"><em>prompt:</em> ask for temp, give different message for each range.</p>

        <span class="nb-codelabel">structure AI built:</span>
<pre class="nb-code">if      (temp &lt; 32)   { /* freezing */ }
else if (temp &lt;= 60)  { /* chilly  */ }
else if (temp &lt;= 80)  { /* perfect */ }
else                  { /* hot     */ }</pre>

        <p class="nb-p"><strong>Traces:</strong></p>
        <ul class="nb-list">
          <li>temp = 45 → not &lt;32, IS &lt;=60 → <span class="hl">"chilly. grab a jacket."</span></li>
          <li>temp = 80 → not &lt;32, not &lt;=60, IS &lt;=80 → <span class="hl">"perfect weather!"</span></li>
        </ul>

        <p class="nb-p"><strong>Modification — exact 72:</strong></p>
<pre class="nb-code">if (temp === 72) {
  document.write("The perfect temperature!");
} else if (temp &lt; 32) { ... }
<span class="c-comment">// has to come FIRST or the &lt;=80 branch grabs it</span></pre>

        <p class="nb-p"><strong>Edge cases I tried:</strong></p>
        <ul class="nb-list">
          <li>negative number → still hits "freezing" (works, &lt;32 catches it)</li>
          <li>typed a word → <span class="ai">NaN</span> → no comparison true → falls to last
            <em>else</em> → "hot." 😬</li>
        </ul>

        <p class="nb-arrow">→ <span class="hl">order of conditions matters as much as the conditions.</span>
          First match wins.</p>
        `,

        /* --- Exercise 3: Iteration (grocery list) --- */
        `
        <h3 class="nb-h">Ex. 3 — build with iteration</h3>
        <p class="nb-p"><em>prompt:</em> 5 grocery items + prices, loop through, show each, total.</p>

<pre class="nb-code">const items = [
  { name: "Apples", price: 1.25 },
  { name: "Bread",  price: 3.50 },
  { name: "Eggs",   price: 4.99 },
  { name: "Milk",   price: 6.20 },
  { name: "Cheese", price: 5.75 }
];

let total = 0;
for (let i = 0; i &lt; items.length; i++) {
  document.write(items[i].name + ": $" + items[i].price);
  total += items[i].price;
}
document.write("Total: $" + total.toFixed(2));</pre>

        <p class="nb-p"><strong>Reading the loop:</strong></p>
        <ul class="nb-list">
          <li>starts at <span class="hl">i = 0</span></li>
          <li>ends when <span class="hl">i = items.length (5)</span></li>
          <li>runs <span class="hl">5 times</span> — once per item</li>
        </ul>

        <p class="nb-p"><strong>Modification — 10% off items over $5:</strong></p>
<pre class="nb-code">if (items[i].price &gt; 5) {
  const sale = items[i].price * 0.9;
  document.write(items[i].name + ": was $" + items[i].price
    + ", now $" + sale.toFixed(2));
  total += sale;
} else {
  total += items[i].price;
}</pre>

        <p class="nb-arrow">→ <span class="hl">selection INSIDE iteration.</span> Loop hits
          every item, condition decides what to do with it.</p>
        `,

        /* --- Pair Exercise: Prompt / Read Swap --- */
        `
        <h3 class="nb-h">pair exercise — prompt / read swap</h3>
        <p class="nb-p"><strong>Round 1 — I prompt, partner reads code blind.</strong></p>
        <p class="nb-p"><em>my prompt:</em> "JS that picks a random song from a list of 5,
          displays it with its artist."</p>
        <p class="nb-p"><em>partner's read:</em> <span class="ai">"makes a list of songs,
          generates a random number, picks one, shows it on the page."</span></p>
        <p class="nb-p nb-soft">→ they nailed it from the code alone.</p>

        <p class="nb-p" style="margin-top:14px"><strong>Round 2 — swap.</strong> Their code → mine to read.</p>
        <p class="nb-p"><em>their code:</em> a function that reverses a string.</p>
        <p class="nb-p"><em>my guess:</em> "loops backwards through a string and builds a new one."</p>
        <p class="nb-p nb-soft">→ <span class="hl">close — but I missed they used .split() +
          .reverse() built-ins, not a manual loop.</span></p>

        <p class="nb-arrow">→ <span class="hl">harder than I thought.</span> Reading is faster
          than writing, but I projected my approach onto theirs at first.</p>
        `,

        /* --- Bug Hunt 1: Off-by-One --- */
        `
        <h3 class="nb-h">bug hunt 1 — the off-by-one</h3>
        <p class="nb-p">Should print numbers 1–5. Doesn't.</p>

<pre class="nb-code">const numbers = [1, 2, 3, 4, 5];

for (let i = 1; i &lt;= numbers.length; i++) {
  document.write("Number: " + numbers[i]);
}</pre>

        <p class="nb-p"><strong>Expected:</strong> 1, 2, 3, 4, 5</p>
        <p class="nb-p"><strong>Actual:</strong> <span class="ai">2, 3, 4, 5, undefined</span></p>

        <p class="nb-p"><strong>The bug:</strong> <span class="hl">i starts at 1, not 0. Arrays
          are zero-indexed.</span> So we skip numbers[0]=1, and on the last loop we ask for
          numbers[5] which doesn't exist → undefined.</p>

        <p class="nb-p"><strong>Fix:</strong></p>
<pre class="nb-code">for (let i = 0; i &lt; numbers.length; i++) {
       <span class="c-comment">^ start at 0    ^ &lt; not &lt;=</span>
}</pre>

        <p class="nb-arrow">→ <em>"arrays start at 0, not 1"</em> — tattoo'd on my brain now.</p>
        `,

        /* --- Bug Hunt 2: The "Logic Error" (trick) --- */
        `
        <h3 class="nb-h">bug hunt 2 — the "logic error"</h3>
        <p class="nb-p">Setup said: student scored 85, program says they failed. Find the bug.</p>

<pre class="nb-code">const score = 85;
let grade;

if      (score &gt;= 90) grade = "A";
else if (score &gt;= 80) grade = "B";
else if (score &gt;= 70) grade = "C";
else                  grade = "F";

if (grade === "F") { /* fail msg  */ }
else               { /* pass msg  */ }</pre>

        <p class="nb-p"><strong>Traced it myself:</strong></p>
        <ul class="nb-list">
          <li>score = 85, &gt;=90? no</li>
          <li>&gt;=80? <span class="hl">YES → grade = "B"</span></li>
          <li>grade==="F"? no → "passed! Grade: B"</li>
        </ul>

        <p class="nb-p"><span class="hl">Wait — the code is correct. The setup lied. There's no bug.</span></p>

        <p class="nb-arrow">→ <span class="hl">trust your trace, not the description.</span>
          AI (and people) get confidently wrong sometimes. That was the whole point of the exercise.</p>
        `,

        /* --- Bug Hunt 3: Missing Total --- */
        `
        <h3 class="nb-h">bug hunt 3 — missing piece</h3>
        <p class="nb-p">Shopping list shows items, but total is always $0.</p>

<pre class="nb-code">let total = 0;

for (let i = 0; i &lt; items.length; i++) {
  document.write(items[i].name + ": $" + items[i].price);
  <span class="c-comment">// !! never adds to total !!</span>
}

document.write("Total: $" + total.toFixed(2));</pre>

        <p class="nb-p"><strong>The bug:</strong> <span class="hl">loop never updates total.</span>
          It's set to 0 once and never touched again.</p>

        <p class="nb-p"><strong>Fix — one line inside the loop:</strong></p>
<pre class="nb-code">total += items[i].price;
<span class="c-comment">// adds each item's price to running total</span></pre>

        <p class="nb-p"><strong>Extension — average price:</strong></p>
<pre class="nb-code">const avg = total / items.length;
document.write("Avg per item: $" + avg.toFixed(2));</pre>

        <p class="nb-arrow">→ <span class="hl">a loop that doesn't change anything is just heat.</span>
          Mutation is the point.</p>
        `,

        /* --- Extend: Combine Everything --- */
        `
        <h3 class="nb-h">extend — sequence + selection + iteration</h3>
        <p class="nb-p">5 students with scores. Loop through, grade each, count A's.</p>

<pre class="nb-code">const students = [
  { name: "Marcus",  score: 92 },
  { name: "Keisha",  score: 85 },
  { name: "David",   score: 78 },
  { name: "Aaliyah", score: 96 },
  { name: "Ray",     score: 64 }
];

let aCount = 0;
let totalScore = 0;

for (let i = 0; i &lt; students.length; i++) {
  const s = students[i];
  totalScore += s.score;

  if      (s.score &gt;= 90) { /* A */ aCount++; }
  else if (s.score &gt;= 80) { /* B */ }
  else if (s.score &gt;= 70) { /* C */ }
  else                    { /* needs improvement */ }
}

document.write("A's: " + aCount);
document.write("Avg: " + (totalScore / students.length).toFixed(1));</pre>

        <p class="nb-p"><strong>My count:</strong> Marcus (92), Aaliyah (96) →
          <span class="hl">2 A's</span> ✓</p>
        <p class="nb-p"><strong>Average:</strong> (92+85+78+96+64) / 5 = 415/5 →
          <span class="hl">83.0</span></p>

        <p class="nb-arrow">→ all three pieces in one program: <span class="hl">setup (sequence)
          → loop (iteration) → grade decision (selection).</span> First time something felt
          like a real program.</p>
        `

      ]
    },

    /* ===================== DAY 4 ===================== */
    {
      number: 4,
      title: "TBD",
      date: null,
      placeholder: true
    },

    /* ===================== DAY 5 ===================== */
    {
      number: 5,
      title: "TBD",
      date: null,
      placeholder: true
    }

  ]
};