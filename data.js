/* 
    DATA FILE: TURKISH LEARNING SYLLABUS
    Structure: English | Hindi | Turkish
*/

const syllabus = [
    // --- PART 1: ALPHABET & BASICS ---
    {
        title: "1. Alphabet - Vowels (स्वर)",
        description: "Turkish is phonetic. 'Ö' and 'Ü' are unique sounds not found in English but similar to German/French.",
        headers: ["English Letter", "Hindi Sound", "Turkish Letter (Pronunciation)"],
        rows: [
            ["A", "आ", "A (आ)"],
            ["E", "ए", "E (ए)"],
            ["I (no dot)", "अ (dull)", "I (अ) - Guttural, back of throat"],
            ["İ (dotted)", "ई", "İ (ई) - Like mach'i'ne"],
            ["O", "ओ", "O (ओ)"],
            ["Ö", "अ+ओ (mix)", "Ö (ओए) - Round lips tight"],
            ["U", "ऊ", "U (ऊ)"],
            ["Ü", "ई+ऊ (mix)", "Ü (उइ) - Pouted lips"]
        ]
    },
    {
        title: "2. Greetings (अभिवादन)",
        description: "Basic words to start a conversation.",
        headers: ["English", "Hindi", "Turkish"],
        rows: [
            ["Hello", "नमस्ते", "Merhaba (मेरहाबा)"],
            ["Good Morning", "सुप्रभात", "Günaydın (ग्युनायदिन)"],
            ["How are you?", "आप कैसे हैं?", "Nasılsın? (नासिल्सिन्न)"],
            ["I am fine", "मैं ठीक हूँ", "İyiyim (ई-ई-इम)"],
            ["Thank you", "धन्यवाद", "Teşekkürler (ते-शेक-कुर-लेर)"]
        ]
    },

    // --- PART 2: GRAMMAR LOGIC ---
    {
        title: "3. The Golden Rule: Vowel Harmony",
        description: "<b>This is the most important rule in Turkish.</b><br> If the last vowel of a word is 'Hard' (a, ı, o, u), the suffix must be 'Hard'.<br> If the last vowel is 'Soft' (e, i, ö, ü), the suffix must be 'Soft'.",
        headers: ["Vowel Type", "Hindi Equivalent Concept", "Example Words"],
        rows: [
            ["Hard Vowels (a, ı, o, u)", "भारी स्वर", "Araba (Car), Kapı (Door)"],
            ["Soft Vowels (e, i, ö, ü)", "हल्के स्वर", "Ev (House), Kedi (Cat)"]
        ]
    },
    {
        title: "4. Plurals (Singular vs Plural)",
        description: "Based on Vowel Harmony: Use <b>-lar</b> for Hard words, <b>-ler</b> for Soft words. Similar to Hindi changing sounds (Ladka -> Ladke).",
        headers: ["English", "Hindi", "Turkish (Rule Applied)"],
        rows: [
            ["Cars", "गाड़ियाँ", "Arabalar (Araba + lar)"],
            ["Books", "किताबें", "Kitaplar (Kitap + lar)"],
            ["Houses", "घर (बहुवचन)", "Evler (Ev + ler)"],
            ["Cats", "बिल्लियाँ", "Kediler (Kedi + ler)"]
        ]
    },

    // --- PART 3: PRONOUNS & VERB ALIGNMENT ---
    {
        title: "5. Personal Pronouns",
        description: "Turkish pronouns are gender-neutral. 'O' means He, She, and It.",
        headers: ["English", "Hindi", "Turkish"],
        rows: [
            ["I", "मैं", "Ben (बेन)"],
            ["You", "तुम / आप", "Sen (सेन) / Siz (सिज़)"],
            ["He / She / It", "वह", "O (ओ)"],
            ["We", "हम", "Biz (बिज़)"],
            ["They", "वे", "Onlar (ओनलार)"]
        ]
    },
    {
        title: "6. Subject-Verb Agreement (To be - Present)",
        description: "How to say 'I am...', 'You are...'. In Hindi we say 'Main ... hoon'. In Turkish, we add a suffix to the adjective/noun.<br><b>Rule:</b> I (-im), You (-sin), We (-iz), They (-ler).",
        headers: ["English Sentence", "Hindi Sentence", "Turkish Sentence"],
        rows: [
            ["I am a teacher", "मैं शिक्षक हूँ", "Ben öğretmenim (Ben öğretmen + im)"],
            ["You are a teacher", "तुम शिक्षक हो", "Sen öğretmensin (Sen öğretmen + sin)"],
            ["He is a teacher", "वह शिक्षक है", "O öğretmen (No suffix for He/She)"],
            ["We are teachers", "हम शिक्षक हैं", "Biz öğretmeniz (Biz öğretmen + iz)"],
            ["They are teachers", "वे शिक्षक हैं", "Onlar öğretmenler (Onlar öğretmen + ler)"]
        ]
    },

    // --- PART 4: CASES (PREPOSITIONS) ---
    {
        title: "7. Location & Direction (Cases)",
        description: "Turkish uses suffixes where English uses Prepositions and Hindi uses Postpositions. It aligns perfectly with Hindi logic.<br><b>Locative:</b> -de/-da (In/At)<br><b>Dative:</b> -e/-a (To)<br><b>Ablative:</b> -den/-dan (From)",
        headers: ["English (Preposition)", "Hindi (Postposition)", "Turkish (Suffix)"],
        rows: [
            ["In the house", "घर में (Ghar mein)", "Evde (Ev + de)"],
            ["To the house", "घर को (Ghar ko)", "Eve (Ev + e)"],
            ["From the house", "घर से (Ghar se)", "Evden (Ev + den)"],
            ["At school", "स्कूल में", "Okulda (Okul + da)"],
            ["To school", "स्कूल को", "Okula (Okul + a)"]
        ]
    },

    // --- PART 5: TENSES ---
    {
        title: "8. Present Continuous Tense (Action Now)",
        description: "Formula: Verb Stem + <b>iyor</b> + Person Suffix.<br>Equivalent to Hindi 'Raha hai'.<br>Example Verb: Gelmek (To come) -> Stem: Gel",
        headers: ["English", "Hindi", "Turkish (Gel + iyor + suffix)"],
        rows: [
            ["I am coming", "मैं आ रहा हूँ", "Geliyorum (Gel-iyor-um)"],
            ["You are coming", "तुम आ रहे हो", "Geliyorsun (Gel-iyor-sun)"],
            ["He is coming", "वह आ रहा है", "Geliyor (Gel-iyor)"],
            ["We are coming", "हम आ रहे हैं", "Geliyoruz (Gel-iyor-uz)"],
            ["They are coming", "वे आ रहे हैं", "Geliyorlar (Gel-iyor-lar)"]
        ]
    },
    {
        title: "9. Common Verbs",
        description: "Infinitive verbs in Turkish end in -mak or -mek (like Hindi verbs end in -na).",
        headers: ["English", "Hindi", "Turkish"],
        rows: [
            ["To Go", "जाना", "Gitmek (गितमेक)"],
            ["To See", "देखना", "Görmek (ग्योर्मेक)"],
            ["To Take", "लेना", "Almak (अलमक)"],
            ["To Give", "देना", "Vermek (वेरमेक)"],
            ["To Sleep", "सोना", "Uyumak (उयुमक)"]
        ]
    },

    // --- PART 6: VOCABULARY ---
    {
        title: "10. Family (परिवार)",
        description: "Terms for family members.",
        headers: ["English", "Hindi", "Turkish"],
        rows: [
            ["Mother", "माँ", "Anne (अन्ने)"],
            ["Father", "पिता", "Baba (बाबा)"],
            ["Older Brother", "बड़ा भाई", "Abi (अभी)"],
            ["Older Sister", "बड़ी बहन", "Abla (अबला)"],
            ["Younger Sibling", "छोटा भाई/बहन", "Kardeş (करदेश)"]
        ]
    }
];
