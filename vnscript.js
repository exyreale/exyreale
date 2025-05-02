document.addEventListener("DOMContentLoaded", () => {

    const openingScript = [
        { action: () => { changeBackground('game_bg1.png'); playMusic('story-music'); currentLine++; showDialogue(); } },

        { text: 'I remember, Zack would always say, “Embrace your dreams and whatever happens, protect your honor as Midgard’s brawler!”' },
        { text: 'I cannot help myself but feel determined to be as strong as him.' },
        { text: 'After some pondering, I decided to meet Zack. But then, I saw Tifa.' },
        { text: '“Hey, what are you thinking about?”', speakers: 'tifa', primarySpeaker: 'tifa' },
        { text: '“Tifa…”', speakers: 'tifa' },
        { text: 'This is my childhood friend, Tifa.', speakers: 'tifa', primarySpeaker: 'tifa' },
        { text: 'Always worrying about me.', speakers: 'tifa' },
        { text: 'She always takes care of me even if she disagrees with my goal to become Brawler First Class.', speakers: 'tifa' },
        { text: '“Thinking about picking fights again? You haven’t even recovered from these wounds!”', speakers: 'tifa', primarySpeaker: 'tifa' },
        { text: 'She says, her fingertips grazing over the wounded skin.', speakers: 'tifa' },
        { text: 'I hissed from the sting, instinctively pulling away my arm from her grasp.', speakers: 'tifa' },
        { text: '“See, you’re still hurt.”', speakers: 'tifa', primarySpeaker: 'tifa' },
        { text: '“Don’t worry too much. I will be fine.”', speakers: 'tifa' },
        { text: '“That’s what you always say, Y/N.” She frowns at me, clearly exasperated.', speakers: 'tifa', primarySpeaker: 'tifa' },
        { text: '“…”', speakers: 'tifa', primarySpeaker: 'tifa' },
        { text: '“…”', speakers: 'tifa' },
        { text: '“Alright,”  I said with reluctance. “I won’t. I’ll rest.”', speakers: 'tifa' },
        { text: '“You promise me that?”', speakers: 'tifa', primarySpeaker: 'tifa' },   
        { text: '“Yeah—”', speakers: 'tifa', primarySpeaker: 'tifa' },
        { text: '“Y/N!” Then, someone calls me.' },
        { text: 'That familiar cheery voice and surprisingly, not who you really expect to be so friendly.' },
        { text: '“Zack.”' },
        { text: '“Come with me. Aerith told me she had an idea about…” Zack trails off, his eyes darting over to Tifa.', speakers: ['tifa', 'zack'], primarySpeaker: 'zack' },
        { text: '“No, don’t look at me like that."', speakers: ['tifa','zack'],  primarySpeaker: 'zack' },
        { text: 'You’re getting it wrong. We’re not going to pick fights… yet.” Zack says unconvincingly.', speakers: ['tifa','zack'], primarySpeaker: 'zack' },
        { text: 'Tifa shakes her head, turning her heel to return to her seat.', speakers: ['tifa','zack'], primarySpeaker: [] },
        { text: '“Just be careful.” Tifa says, relenting eventually. She’s still very worried.', speakers: ['tifa','zack'],  primarySpeaker: 'tifa' },
        { text: '“I’ll be fine, I promise.”', speakers: ['tifa','zack'], primarySpeaker: [] },

        { action: () => { fadeOut(); }},
        { action: () => { fadeIn(); changeBackground('game_bg2.png'); playMusic('story-music2'); currentLine++; showDialogue(); } },

        { text: '“I heard there are good fighters out there from Shinra Private Academy,” Aerith starts.', speaker: ['aerith', 'zack'], primarySpeaker: 'aerith' },
        { text: '“Ever heard of Angeal?” Zack questions. “He seems strong. And friendly.”', speaker: ['aerith', 'zack'], primarySpeaker: 'zack' },
        { text: '“We’re not here to make friends with them, aren’t we?” I asked.', speaker: ['aerith', 'zack'], primarySpeaker: []},
        { text: '“Well, no. Not really.”', speakers: ['aerith', 'zack'], primarySpeaker: 'zack' },
        { text: '“What do you mean not really? We’re not befriending them at all.” Aerith retorts.', speakers: ['aerith', 'zack'], primarySpeaker: 'aerith' },
        { text: '“Y/N.”', speakers: 'aerith', primarySpeaker: 'aerith' },
        { text: 'She’s so intimidating.', speakers: 'aerith', primarySpeaker: []},
        { text: '“Sneak this in,” she hands me a small slip of paper.', speakers: 'aerith', primarySpeaker: 'aerith' },
        { text: '“Let’s see if they’re truly strong as they seem to be.”', speakers: 'aerith', primarySpeaker: 'aerith' },
        { text: '...', action: () => { fadeOut(); } },
        { action: () => {  fadeIn(); startStoryGame(); }}
    ];

    const victoryGame = [
        { action: () => { fadeOut(); setTimeout(() => { textBox.style.display = 'block'; }, 1000); } },
        { action: () => { fadeIn(); changeBackground('game_bg3.png'); playMusic('story-music2'); currentLine++; showDialogue(); }},

        { text: 'Aerith is always so bold. I wonder if Cetra leaders are always this intense.'},
        { text: '“Thud!”'},
        { text: 'Shinra Private Academy always says their security is top notch, and somehow…' },
        { text: 'I can just go through the backdoor without anything being alerted. What’s up with that?'},
        { text: 'I snuck up at the nearby room, quickly getting in by the windows. Unbelievable, they do not lock their windows.'},
        { text: 'I slipped the piece of paper by the desk and quickly got out without any problems. It almost feels strange; it went well so easily.' },
        { text: 'Anyway, this is part of my quest as Midgard’s Brawler: First Class. If Shinra Private Academy’s truly strong as Zack said…'},
        { text: '“Heh,” I chuckled subconsciously. A part of me is thrilled.' },

        { action: () => { fadeOut(); }},
        { action: () => { fadeIn(); changeBackground('game_bg1.png'); playMusic('story-music3'); currentLine++; showDialogue(); }},

        { text: '“Angeal.”', speaker: 'angeal', primarySpeaker: [] },
        { text: '“Yeah? What is it?”', speaker: 'angeal', primarySpeaker: 'angeal' },
        { text: '“I’ve found a slip of paper on my desk.”', speaker: 'angeal', primarySpeaker: [] },
        { text: '“And? What is it about then?”', speaker: 'angeal' },
        { text: '“… Do I really have to read it to you?”', speaker: 'angeal', primarySpeaker: [] },
        { text: '“Why, yes. How would I know what it is?”', speaker: 'angeal', primarySpeaker: 'angeal' },
        { text: '“Fine.”', speaker: 'angeal', primarySpeaker: [] },
        { text: 'The white-haired boy clears his throat, but he couldn’t say it out loud.', speaker: 'angeal', primarySpeaker: [] },
        { text: '“No, nevermind. It’s too embarrassing.” He says, his cheeks flushing slightly.', speaker: 'angeal', primarySpeaker: [] },
        { text: 'Angeal laughs, making the white-haired boy even more conscious.', speaker: 'angeal', primarySpeaker: [] },
        { text: '“Why can’t you just read it?”', speaker: 'angeal', primarySpeaker: 'angeal' },
        { text: '“That’s not important! I’m saying, you should take this more seriously.”', speaker: 'angeal', primarySpeaker: [] },
        { text: '“Loosen up a little, Sephiroth.” Angeal then drapes his arms over Sephiroth’s shoulders.', speaker: 'angeal', primarySpeaker: 'angeal' },
        { text: '“Do you want me to ask who placed this on your desk? Make an announcement?” Angeal then gently pinches Sephiroth’s cheek, making him flustered and flinch away.', speaker: 'angeal' },
        { text: '“Hey! What’s that for?”', speakers: ['angeal', 'miniroth'], primarySpeaker: 'miniroth' },
        { text: '“You’re too uptight, Sephiroth. Remember, I had a friend named Zack there? Yeah, they’re pretty cool people.”', speakers: ['angeal', 'miniroth'], primarySpeaker: 'angeal' },
        { text: '“I don’t think so. Don’t they pick fights all the time?” Sephiroth’s nose scrunched.', speakers: ['angeal', 'miniroth'], primarySpeaker: 'miniroth' },
        { text: '“Right. Of course you don’t. And no, they don’t. Few squabbles don’t define them.” Angeal sighs and shakes his head.', speakers: ['angeal', 'miniroth'], primarySpeaker: 'angeal' },
        { text: '“You can just give it a try. Who knows? Maybe they just want to befriend you, yeah?”', speakers: ['angeal', 'miniroth'], primarySpeaker: 'angeal' },
        { text: 'Angeal nods his head a little, coaxing Sephiroth’s approval but to no avail.', speakers: ['angeal', 'miniroth'], primarySpeaker: [] },
        { text: '“A student council led by their emotions is second-rate.”', speakers: ['angeal', 'miniroth'], primarySpeaker: 'miniroth' },
        { text: '“Whatever you say, kid with no social skills.”', speakers: ['angeal', 'miniroth'], primarySpeaker: 'angeal' },
        { text: '“What did you just say?”', speakers: ['angeal', 'miniroth'], primarySpeaker: 'miniroth' },

        { action: () => { fadeOut(); }},
        { action: () => { fadeIn(); currentLine++; showDialogue(); }},
        
        { text: '“Hmph,” Sephiroth huffs.', speaker: 'miniroth', primarySpeaker: 'miniroth' },
        { text: '“Fine. Maybe it won’t hurt to give it a try.”',speaker: 'miniroth', primarySpeaker: 'miniroth' },
        { text: 'He tore a piece of paper, writing back with a very serious expression.', speaker: 'miniroth', primarySpeaker: [] },
        { text: '“I’ll meet you at four in the afternoon. Be punctual.”', speaker: 'miniroth', primarySpeaker: [] },

        { action: () => { fadeOut(); }},
        { action: () =>  { fadeIn(); playMusic('story-music4'); changeBackground('game_bg4.png'); currentLine++; showDialogue(); }},

        { text: '“Someone wrote back. Guess it’s happening.”' },
        { text: 'Zack smiles widely. “I bet it’s Angeal. I can’t wait to show him who’s boss!”', speaker: 'zack' },
        { text: 'He’s very excited. Did he really want to brawl with someone from Shinra that bad?', speaker: 'zack', primarySpeaker: [] },
        { text: '“Well, he told us he would meet us by four in the afternoon.”', speaker: 'zack', primarySpeaker: [] },
        { text: 'Zack looks at me with shock and what seemed like… triumph. “What, really?”', speaker: 'zack' },
        { text: '“Yeah, he said so in the letter.”', speaker: 'zack', primarySpeaker: [] },
        { text: '“But Aerith and I have a date later! I cannot be there then!” He says, his voice showing his disappointment and something I can’t really put my finger on.', speaker: 'zack'},
        { text: 'Like excitement.', speaker: 'zack', primarySpeaker: 'zack' },
        { text: '“Well, if you guys have a date… You’ve got me. I can show Angeal who’s boss.” And show you that I’ll be a strong Midgard Brawler: First Class.', speaker: 'zack', primarySpeaker: [] },
        { text: 'Zack flashes a small grin. “That’s the spirit.”', speaker: 'zack', primarySpeaker: 'zack' },
        { text: '“My honor and my dreams, I will share those with you.” His hand gently tapped my shoulder.', speaker: 'zack', primarySpeaker: 'zack' },
        { text: '“You’ll make it as a Top Brawler of Midgard in no time!”', speaker: 'zack', primarySpeaker: 'zack' },

        { action: () => { fadeOut(); }},
        { action: () => { fadeIn(); playMusic('story-music5'); currentLine++; showDialogue(); }},

        { text: 'Time passed by so quickly after Zack left.' },
        { text: 'I sat by the flower garden, finding myself a little comforted with the sight of it.' },
        { text: 'Aerith took care of them so well, to see them bloom so brightly like this in spring is fascinating.' },

        { text: '“Are you that person who sent that letter?”',  action: () => { playMusic(''); }},
        { text: 'He’s here.'},
        { text: '“Angeal, come and show me what you’ve got!” I say with pride.' },
        { text: 'I turn to look at him and to my surprise, he’s already so close to me.', action: () => { playMusic('menu-music'); }},

        { text: '“Woah!” I stumbled, nearly falling off from surprise.' },
        { text: 'He catches me with his hand, wrapping around my wrist. Gentle, but enough to keep me steady.' },
        { text: '“So careless.” He says to me. As I look towards him, he quickly pulls away his hand, as if he got burned.' },
        { text: 'He clears his throat, his eyes widening. He seemed flustered.' },
        { text: '“Hmph,” he simply huffs. Almost as if he thinks this is a waste of time.', speaker: 'miniroth', primarySpeaker: 'miniroth' },
        { text: 'I wouldn’t let him underestimate me!', speaker: 'miniroth', primarySpeaker: [] },
        { text: 'My fist clenched, about to lunge at him but then…', speaker: 'miniroth', primarySpeaker: [] },
        { text: 'His eyes were intense. Almost piercing through mine.', speaker: 'miniroth', primarySpeaker: [] },
        { text: '“Well, aren’t you going to punch me?”', speaker: 'miniroth', primarySpeaker: 'miniroth' },
        { text: '“…” To my surprise, I stopped.', speaker: 'miniroth', primarySpeaker: [] },
        { text: 'My fist falls to my side as I looked at the ground.', speaker: 'miniroth', primarySpeaker: [] },
        { text: 'How can someone’s eyes be so fear-inducing?', speaker: 'miniroth', primarySpeaker: [] },
        { text: 'A shiver goes through my spine as I felt him hold my shoulders.', speaker: 'miniroth', primarySpeaker: [] },
        { text: 'He leans down a little, gauging my reactions.', speaker: 'miniroth', primarySpeaker: [] },
        { text: '“You’re acting strange.”', speaker: 'miniroth', primarySpeaker: 'miniroth' },
        { text: 'I gasp in surprise, my eyes widening as I saw his expression.', speaker: 'miniroth', primarySpeaker: [] },
        { text: 'He looked a little concerned.', speaker: 'miniroth', primarySpeaker: [] },
        { text: '“What?” I asked, finding my voice meek. I feel a little caught off guard.', speaker: 'miniroth', primarySpeaker: [] },
        { text: 'He then leans away, shaking his head while he crosses his arms at me.', speaker: 'miniroth', primarySpeaker: [] },
        { text: '“So what is it you’re truly after?”', speaker: 'miniroth', primarySpeaker: 'miniroth' },
        { text: 'I couldn’t answer him.', speaker: 'miniroth', primarySpeaker: [] },
        { text: '“What’s your name?”', speaker: 'miniroth', primarySpeaker: 'miniroth' },
        { text: '“Y/N.”', speaker: 'miniroth', primarySpeaker: [] },
        { text: '“… Name’s Sephiroth.”', speaker: 'miniroth', primarySpeaker: 'miniroth' },
        { text: '“… Nice to meet you, Sephiroth.” I say, my mouth parts as I was caught off guard once more, but this time, by my own words.', speaker: 'miniroth', primarySpeaker: [] },
        { text: 'Sephiroth bites back a chuckle, but his expression doesn’t say less of what he truly feels.', speaker: 'miniroth', primarySpeaker: [] },
        { text: 'He’s amused; I can tell.', speakers: 'miniroth', primarySpeaker: [] },
        { text: '“How unexpected.” Sephiroth says, finally cracking a small, soft smile.', speakers: 'miniroth', primarySpeaker: 'miniroth' },
        { text: '"What do you mean?"', speaker: 'miniroth', primarySpeaker: [] },
        { text: '“I just didn’t think someone from Midgard could have hands that can write such cute poems,”', speaker: 'miniroth', primarySpeaker: 'miniroth' },
        { text: '“But I digress,” he shakes his head a little. “You called me here, saying in the poem that you wish to meet me.”', speaker: 'miniroth', primarySpeaker: 'miniroth' },
        { text: 'What did he mean poem? Did Aerith... do this?', speaker: 'miniroth', primarySpeaker: [] },
        { text: '“... You’re silent... Don’t tell me...” His eyes narrowed. Suddenly skeptical.', speaker: 'miniroth', primarySpeaker: 'miniroth' },
        { text: '“No!” I exclaimed. Surprisingly loud.', speaker: 'miniroth', primarySpeaker: [] },
        { text: 'I really don’t have the heart to tell him this is a misunderstanding...', speaker: 'miniroth', primarySpeaker: [] },
        { text: '“Well! Zack– I meant someone told me that... that Shinra students are really strong opponents!”', speaker: 'miniroth', primarySpeaker: [] },
        { text: 'He stares at me. This is embarrassing! I can’t believe they set me up!', speaker: 'miniroth', primarySpeaker: [] },
        { text: '“Okay... So, let me get this straight. You wrote me a poem because you wish to see how strong I am?” He asks.', speaker: 'miniroth', primarySpeaker: 'miniroth' },
        { text: '“... Yeah!” I said, lying through my teeth.', speaker: 'miniroth', primarySpeaker: [] },
        { text: 'He laughs. Probably something he held back for quite long.', speaker: 'miniroth', primarySpeaker: [] },
        { text: '“Why? Is... is that not a valid reason to meet you?” I asked, slightly offended.', speaker: 'miniroth', primarySpeaker: [] },
        { text: '“You have quite the humor.” He says with a gentle smile.', speaker: 'miniroth', primarySpeaker: 'miniroth' },
        { text: '“Fine,” He relents. “I’ll indulge you. After all, I’ve never really had someone hand me a sweet poem.”', speaker: 'miniroth', primarySpeaker: 'miniroth' },
        { text: '“Since we’re in the topic of indulgence,” his soft hands gently holds mine. “Indulge me for a walk as we speak, Y/N. You’ve piqued my interest.”', speaker: 'miniroth', primarySpeaker: 'miniroth' },
        { action: () => { fadeOut(); setTimeout(() => { window.location.href = 'vngame.html'; }, 6000); }}
    ];
        
    const failGame = [ 
        { action: () => { fadeOut(); setTimeout(() => { textBox.style.display = 'block'; }, 1000); } },
        { action: () => { fadeIn(); changeBackground('game_bg3.png'); playMusic('story-music2'); currentLine++; showDialogue(); }},

        { text: 'Aerith is always so bold. I wonder if Cetra leaders are always this intense.'},
        { text: '“Thud!”'},
        { text: 'Shinra Private Academy always says their security is top notch, and somehow…' },
        { text: 'I can just go through the backdoor without anything being alerted. What’s up with that?'},
        { text: 'I snuck up at the nearby room, quickly getting in by the windows. Unbelievable, they do not lock their windows.'},
        { text: 'I slipped the piece of paper by the desk and quickly got out without any problems. It almost feels strange; it went well so easily.' },
        { text: 'Anyway, this is part of my quest as Midgard’s Brawler: First Class. If Shinra Private Academy’s truly strong as Zack said…'},
        { text: '“Heh,” I chuckled subconsciously. A part of me is thrilled.' },

        { action: fadeOut },
        { action: () => {fadeIn(); changeBackground('game_bg1.png'); currentLine++; showDialogue(); }},

        { text: '“Angeal.”', speaker: 'angeal', primarySpeaker: [] },
        { text: '“Yeah? What is it?”', speaker: 'angeal', primarySpeaker: 'angeal' },
        { text: '“I’ve found a slip of paper on my desk.”', speaker: 'angeal', primarySpeaker: [] },
        { text: '“And? What is it about then?”', speaker: 'angeal', primarySpeaker: 'angeal'},
        { text: '“… Do I really have to read it to you?”', speaker: 'angeal', primarySpeaker: [] },
        { text: '“Why, yes. How would I know what it is?”', speaker: 'angeal', primarySpeaker: 'angeal' },
        { text: '“Fine.”', speaker: 'angeal', primarySpeaker: [] },
        { text: 'The white-haired boy takes a deep breath.', speaker: 'angeal', primarySpeaker: [] },
        { text: '“Sephiroth, come forth,”', speakers: ['angeal', 'miniroth'], primarySpeaker: 'miniroth' },
        { text: '“We’ll conquer worlds,”', speakers: ['angeal', 'miniroth'], primarySpeaker: 'miniroth' },
        { text: '“I thought of a wonderful present for you,”', speakers: ['angeal', 'miniroth'], primarySpeaker: 'miniroth' },
        { text: '“… Shall I give you despair?”', speakers: ['angeal', 'miniroth'], primarySpeaker: 'miniroth' },
        { text: 'Angeal bursts out laughing.', speakers: ['angeal', 'miniroth'], primarySpeaker: [] },
        { text: '“Geez! Who in their right mind would write that? Tough luck… I almost thought you received a love letter!”', speakers: ['angeal', 'miniroth'], primarySpeaker: 'angeal' },
        { text: 'Sephiroth frowns. Angeal notices his utter disappointment.', speakers: ['angeal', 'miniroth'], primarySpeaker: [] },
        { text: '“Oh, now…” Angeal then offers a small, comforting smile.', speakers: ['angeal', 'miniroth'], primarySpeaker: 'angeal' },
        { text: '“I’m not sulking.” Sephiroth retorts.', speakers: ['angeal', 'miniroth'], primarySpeaker: 'miniroth'  },
        { text: '“I never said you were…”', speakers: ['angeal', 'miniroth'], primarySpeaker: 'angeal' },

        { action: fadeOut },
        { action: () => {fadeIn(); changeBackground('game_bg2.png'); currentLine++; showDialogue(); }},

        { text: '“…”', speakers: ['aerith', 'zack'], primarySpeaker: 'aerith' },
        { text: '“Huh...” Zack rubs the back of his head, eyes darting over to Aerith.', speakers: ['aerith', 'zack'], primarySpeaker: 'zack' },
        { text: '“Yeah, there was no reply.” Aerith then sighs.', speakers: ['aerith', 'zack'], primarySpeaker: 'aerith' },
        { text: '“You think we went a little overboard with that one?” Zack asks.', speakers: ['aerith', 'zack'], primarySpeaker: 'zack' },
        { text: '“Yeah, we might’ve…”', speakers: ['aerith', 'zack'], primarySpeaker: 'aerith' },

        { action: () => showRetryBox() }
    ];

    const choices = [
        { word: "Flee", correct: false },
        { word: "Melancholy", correct: false },
        { word: "Comfort", correct: true },
        { word: "Distress", correct: false },
        { word: "Torment", correct: false },
        { word: "Misery", correct: false },
        { word: "Hurt", correct: false },
        { word: "Agony", correct: false },

        { word: "Love", correct: true },
        { word: "Death", correct: false },
        { word: "Disdain", correct: false },
        { word: "Cage", correct: false },
        { word: "Gone", correct: false },
        { word: "Depart", correct: false },
        { word: "Demise", correct: false },
        { word: "Ruination", correct: false },

        { word: "Condescending", correct: false },
        { word: "Superiority", correct: false },
        { word: "Flawless", correct: false },
        { word: "Arrogance", correct: false },
        { word: "Mundane", correct: true },
        { word: "Hero", correct: false },
        { word: "Infallible", correct: false },
        { word: "Divine", correct: false },
    ];

    let currentScript = openingScript;
    let currentLine = 0;

    let nextScript = victoryGame;
    let nextLine = 0;

    let failScript = failGame;
    let failLine = 0;

    let score = 0;
    let isTyping = false;
    let currentTypingTimeouts = [];

    const miniroth = document.getElementById("miniroth-img");
    const chibiroth = document.getElementById("chibiroth-img");
    const tifa = document.getElementById("tifa-img");
    const aerith = document.getElementById("aerith-img");
    const zack = document.getElementById("zack-img");
    const angeal = document.getElementById("angeal-img");

    const textBox = document.getElementById("dialogue");
    const choicesDiv = document.getElementById("choices");

    function updateCharacterDisplay(speakers, primarySpeaker) {
        const characters = { tifa, aerith, zack, miniroth, angeal };
    
        if (typeof speakers === 'string') {
            speakers = [speakers];
        }
    
        if (!speakers || speakers.length === 0) {
            Object.values(characters).forEach(el => {
                el.style.display = 'none';
                el.style.filter = 'grayscale(100%)';
            });
            return;
        }      
    
        Object.entries(characters).forEach(([id, el]) => {
            if (speakers.includes(id)) {
                el.style.display = 'block';
                const shouldDim = !primarySpeaker || id !== primarySpeaker;
                el.style.filter = shouldDim ? 'grayscale(100%)' : 'grayscale(0%)';
    
                if (speakers.length === 1) {
                    el.style.left = '50%';
                    el.style.transform = 'translateX(-50%)';
                } else {
                    if (id === speakers[0]) {
                        el.style.left = '10%';
                        el.style.transform = 'translateX(0%)';
                    } else if (id === speakers[1]) {
                        el.style.left = '90%';
                        el.style.transform = 'translateX(-100%)';
                    }
                }
            } else {
                el.style.display = 'none';
                el.style.filter = 'grayscale(100%)';
            }
        });
    }
        
    
    function clearTimeouts() {
        currentTypingTimeouts.forEach(timeout => clearTimeout(timeout));
        currentTypingTimeouts = [];
    }

    function typeText(text) {
        let i = 0;
        isTyping = true;
        textBox.textContent = "";
        clearTimeouts();
        const speed = 15;

        function type() {
            if (i < text.length) {
                textBox.textContent += text.charAt(i);
                const timeout = setTimeout(type, speed);
                currentTypingTimeouts.push(timeout);
                i++;
            } else {
                isTyping = false;
            }
        }
        type();
    }

    function fadeOut() {
        const fadeOverlay = document.getElementById('fade-overlay');
        fadeOverlay.style.opacity = 1;
    }

    function fadeIn() {
        const fadeOverlay = document.getElementById('fade-overlay');
        fadeOverlay.style.opacity = 1;

        setTimeout(() => {
            fadeOverlay.style.opacity = 0;
        }, 500);
    }

    function changeBackground(imageUrl) {
        const gameContainer = document.getElementById('game-container');
        gameContainer.style.backgroundImage = `url('icon/${imageUrl}')`;
    }       

    function playMusic(musicId) {
        const allAudio = document.querySelectorAll('audio');
    
        allAudio.forEach(audio => {
            if (audio.id !== musicId) {
                if (!audio.paused) {
                    let fadeAudio = setInterval(() => {
                        if (audio.volume > 0.05) {
                            audio.volume -= 0.05;
                        } else {
                            clearInterval(fadeAudio);
                            audio.pause();
                            audio.currentTime = 0;
                            audio.volume = 0.1;
                        }
                    }, 50);
                } else {
                    audio.pause();
                    audio.currentTime = 0;
                    audio.volume = 0.1;
                }
                audio.loop = false;
            }
        });
    
        const musicToPlay = document.getElementById(musicId);
        if (musicToPlay) {
            musicToPlay.volume = 0.1;
            musicToPlay.loop = true;
            musicToPlay.play();
        }
    }
    

    function showDialogue() {
        const currentScene = currentScript[currentLine];

        if (!currentScene) return;

        choicesDiv.innerHTML = "";
        chibiroth.style.display = "none";

        if (currentScene.speakers || currentScene.speaker) {
            const speakers = currentScene.speakers || [currentScene.speaker];
            const primarySpeaker = currentScene.primarySpeaker || speakers[0];
            updateCharacterDisplay(speakers, primarySpeaker);
        } else {
            updateCharacterDisplay([], null);
        }

        if (currentScene.action) {
            currentScene.action();
            return;
        }

        if (isTyping) return;

        if (currentScene.text) {
            typeText(currentScene.text);
        }
    }

    function startStoryGame() {
        textBox.style.display = "none";
        miniroth.style.display = "none";
        tifa.style.display = "none";
        aerith.style.display = "none";
        zack.style.display = "none";
        angeal.style.display = "none";
        chibiroth.src = "icon/sephiroth_chibi.png";
        chibiroth.style.display = "block";

        const gameContainer = document.getElementById('game-container');
        gameContainer.style.backgroundImage = "url('icon/storygame_bg.png')";

        playMusic('story-game');

        let index = 0;
        showChoiceSet();

        function showChoiceSet() {
            choicesDiv.innerHTML = "";
            const set = choices.slice(index, index + 8);

            if (set.length === 0) {
                showPostGame();
                return;
            }

            set.forEach(choice => {
                const btn = document.createElement("button");
                btn.innerText = choice.word;
                btn.onclick = () => {
                    if (choice.correct) {
                        score++;
                        chibiroth.classList.remove("bounce");
                        chibiroth.offsetHeight;
                        chibiroth.classList.add("bounce");
                    }
                    index += 8;
                    showChoiceSet();
                };
                choicesDiv.appendChild(btn);
            });
        }
    }

    function showPostGame() {
        choicesDiv.innerHTML = "";
        chibiroth.style.display = "none";
        miniroth.src = "icon/sephiroth_sprite.png";
        miniroth.style.display = "block";
        miniroth.style.animation = "none";

        if (score >= 3) {
            currentScript = victoryGame;
        } else {
            currentScript = failGame;
        }

        currentLine = 0;
        showDialogue();
    }

    // strictly for main menu
    const menuMusic = document.getElementById('menu-music');
    menuMusic.volume = 0.1;

    function playMenuMusic() {
        menuMusic.play();
    }

    playMenuMusic();

    function stopMenuMusic() {
        menuMusic.pause();
        menuMusic.currentTime = 0;
    }

    const burger = document.getElementById('hmenu');
    const pause = document.getElementById('pause-menu');
    const back = document.getElementById('back-btn');
    const home = document.getElementById('home-btn');

    burger.addEventListener('click', () => {
        const gameContainer = document.getElementById('game-container');
        if (pause.style.display === 'none' || pause.style.display === '') {
            pause.style.display = 'block';
            gameContainer.style.filter = 'blur(4px)';
            burger.innerHTML = '▶';
        } else {
            pause.style.display = 'none';
            gameContainer.style.filter = 'none';
            burger.innerHTML = '⏸';
        }
    });

    // retry when failed
    function showRetryBox() {
        const retryBox = document.getElementById('retry-box');
        const gameContainer = document.getElementById('game-container');
        retryBox.style.display = 'block';
        gameContainer.style.filter = 'blur(4px)';
    }
    
    const retryButton = document.getElementById('retry-button');

    retryButton.addEventListener('click', () => {
        const gameContainer = document.getElementById('game-container');
        const retryBox = document.getElementById('retry-box');
        retryBox.style.display = 'none';
        gameContainer.style.filter = 'none';
        startStoryGame();
    });

    back.addEventListener('click', () => {
        window.location.href = 'vngame.html';
    });

    home.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    // start game and exit game
    function startGame() {
        burger.style.display = 'block'
        document.getElementById("menu").style.display = "none";
        document.getElementById("game-container").style.display = "block";
        stopMenuMusic();
        fadeIn();
        showDialogue();
    }
    
    function exitGame() {
        stopMenuMusic();
        window.location.href = "index.html";
    }
    
    window.startGame = startGame;
    window.exitGame = exitGame;

    textBox.addEventListener("click", () => {
        if (!isTyping) {
            currentLine++;
            showDialogue();
    }

    window.addEventListener('load', playMenuMusic);
    showDialogue();
    });
});
