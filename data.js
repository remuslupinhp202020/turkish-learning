const syllabus = [
    // --- SECTION: ALPHABET ---
    {
        type: "table",
        title: "1. The Alphabet (Vowels)",
        description: "Turkish uses Latin script (like English) but pronunciation is consistent (like Hindi).",
        headers: ["Letter", "Hindi Sound", "Turkish Example"],
        rows: [
            ["A", "आ", "Arkadaş (अरकादाश)"],
            ["E", "ए", "Ekmek (एकमेक)"],
            ["I (no dot)", "अ", "Ilık (अलिक) - *Throat sound*"],
            ["İ (dotted)", "ई", "İyi (ई-ई)"],
            ["Ö", "ओ+ए mix", "Öğrenci (ओरेंजी)"],
            ["Ü", "उ+इ mix", "Üzüm (उइ-ज़ुम)"]
        ]
    },

    // --- SECTION: SENTENCE STRUCTURE THEORY ---
    {
        type: "theory",
        title: "2. Theory: How to Build Sentences (Sentence Formation)",
        content: `
            <p>This is the most important part. Turkish sentence structure is almost identical to Hindi.</p>
            <h3>The Golden Rule: SOV (Subject - Object - Verb)</h3>
            <ul>
                <li><strong>English (SVO):</strong> I (Subject) drink (Verb) tea (Object).</li>
                <li><strong>Hindi (SOV):</strong> मैं (Subject) चाय (Object) पीता हूँ (Verb).</li>
                <li><strong>Turkish (SOV):</strong> Ben (Subject) çay (Object) içiyorum (Verb).</li>
            </ul>
            <p><strong>Conclusion:</strong> Do not translate from English logic. Translate from Hindi logic. Put the verb at the very end.</p>
        `
    },

    // --- SECTION: VOCABULARY FOR SENTENCES ---
    {
        type: "table",
        title: "3. Vocabulary for Sentence Building",
        description: "Memorize these basic words to build your first sentences.",
        headers: ["English", "Hindi", "Turkish"],
        rows: [
            ["I", "मैं", "Ben (बेन)"],
            ["You", "तुम", "Sen (सेन)"],
            ["Bread", "रोटी", "Ekmek (एकमेक)"],
            ["Water", "पानी", "Su (सू)"],
            ["Tea", "चाय", "Çay (चाय)"],
            ["Apple", "सेब", "Elma (एल्मा)"],
            ["To Eat", "खाना", "Yemek (येमेक)"],
            ["To Drink", "पीना", "İçmek (इचमेक)"],
            ["To Want", "चाहना", "İstemek (इस्तेमेक)"]
        ]
    },

    // --- SECTION: GRAMMAR LOGIC (CONJUGATION) ---
    {
        type: "theory",
        title: "4. Theory: Verb Conjugation (Present Continuous)",
        content: `
            <p>To say "I am doing something" (Raha hoon/Rahi hoon), Turkish uses the suffix <strong>-iyor</strong>.</p>
            <p><strong>The Formula:</strong> [Verb Root] + [iyor] + [Person Suffix]</p>
            <p><strong>Example: İçmek (To Drink)</strong> -> Root is 'İç'</p>
            <ul>
                <li><strong>Ben (I):</strong> İç + iyor + um = <strong>İçiyorum</strong> (Main pee raha hoon)</li>
                <li><strong>Sen (You):</strong> İç + iyor + sun = <strong>İçiyorsun</strong> (Tum pee rahe ho)</li>
                <li><strong>O (He/She):</strong> İç + iyor = <strong>İçiyor</strong> (Voh pee raha hai)</li>
                <li><strong>Biz (We):</strong> İç + iyor + uz = <strong>İçiyoruz</strong> (Hum pee rahe hain)</li>
            </ul>
        `
    },

    // --- SECTION: FULL SENTENCE TABLE ---
    {
        type: "table",
        title: "5. Practice Sentences (Present Tense)",
        description: "Notice the order: Subject -> Object -> Verb",
        headers: ["English", "Hindi", "Turkish"],
        rows: [
            ["I am drinking water.", "मैं पानी पी रहा हूँ।", "Ben su içiyorum. (बेन सू इचियोरुम)"],
            ["You are eating bread.", "तुम रोटी खा रहे हो।", "Sen ekmek yiyorsun. (सेन एकमेक यियोरसून)"],
            ["He is drinking tea.", "वह चाय पी रहा है।", "O çay içiyor. (ओ चाय इचियोर)"],
            ["We want an apple.", "हम सेब चाहते हैं।", "Biz elma istiyoruz. (बिज़ एल्मा इस्तियोरुज़)"]
        ]
    },

    // --- SECTION: EXERCISES ---
    {
        type: "exercise",
        title: "6. Practice Exercises (Test Yourself)",
        questions: [
            {
                question: "Translate to Turkish: <strong>I am eating.</strong> (Hint: Eat = Ye)",
                answer: "Yiyorum (Ye + iyor + um)"
            },
            {
                question: "Translate to Turkish: <strong>You are drinking tea.</strong> (Hint: Tea = Çay, Drink = İç)",
                answer: "Çay içiyorsun."
            },
            {
                question: "Translate to Turkish: <strong>We are coming.</strong> (Hint: Come = Gel)",
                answer: "Geliyoruz."
            },
            {
                question: "Identify the Subject, Object, and Verb in: <strong>Ben su istiyorum.</strong>",
                answer: "Subject: Ben (I), Object: Su (Water), Verb: İstiyorum (Want)."
            }
        ]
    },

    // --- SECTION: VOCABULARY EXPANSION ---
    {
        type: "table",
        title: "7. Expanded Vocabulary: Common Places",
        headers: ["English", "Hindi", "Turkish"],
        rows: [
            ["School", "विद्यालय", "Okul (ओकुल)"],
            ["Home", "घर", "Ev (एव)"],
            ["Work", "काम", "İş (इश)"],
            ["Street", "सड़क", "Sokak (सोकाक)"],
            ["Market", "बाज़ार", "Çarşı (चारशी)"]
        ]
    },

    {
        type: "theory",
        title: "8. Theory: Direction (To/From)",
        content: `
            <p>How to say "To the school" or "From the house".</p>
            <ul>
                <li><strong>To (Dative Case):</strong> Add <strong>-e</strong> or <strong>-a</strong> at the end.</li>
                <li>Examples: Ev (House) -> <strong>Eve</strong> (To house), Okul (School) -> <strong>Okula</strong> (To school).</li>
                <br>
                <li><strong>From (Ablative Case):</strong> Add <strong>-den</strong> or <strong>-dan</strong>.</li>
                <li>Examples: Ev<strong>den</strong> (From house), Okul<strong>dan</strong> (From school).</li>
            </ul>
        `
    },

    {
        type: "table",
        title: "9. Sentences with Direction",
        headers: ["English", "Hindi", "Turkish"],
        rows: [
            ["I am going to school.", "मैं स्कूल जा रहा हूँ।", "Ben okula gidiyorum. (बेन ओकुला गिदियोरुम)"],
            ["We are coming from home.", "हम घर से आ रहे हैं।", "Biz evden geliyoruz. (बिज़ एव्देन गेलियोरुज़)"],
            ["He is going to work.", "वह काम पर जा रहा है।", "O işe gidiyor. (ओ इसे गिदियोर)"]
        ]
    }
];
