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
      title: "TBD",
      date: null,
      placeholder: true
    },

    /* ===================== DAY 3 ===================== */
    {
      number: 3,
      title: "TBD",
      date: null,
      placeholder: true
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
