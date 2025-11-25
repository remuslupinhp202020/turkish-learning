/* 
    COMPREHENSIVE DATA FILE FOR TURKISH LEARNING
    Includes: Alphabet, Grammar Logic, 12 Tenses, Modals, Cases, Vocabulary, and Exercises.
    Master Verb used for Tenses: Gelmek (To Come)
*/

const syllabus = [
    // ==========================================
    // PART 1: THE FUNDAMENTALS
    // ==========================================
    {
        type: "table",
        title: "1. Alphabet - Vowels (स्वर)",
        description: "Turkish vowels are the key to pronunciation. <b>Ö</b> and <b>Ü</b> are unique sounds.",
        headers: ["Letter", "Hindi Sound", "Turkish Example"],
        rows: [
            ["A", "आ", "Arkadaş (अरकादाश) - Friend"],
            ["E", "ए", "Ekmek (एकमेक) - Bread"],
            ["I (dotless)", "अ (deep throat)", "Işık (अशिक) - Light"],
            ["İ (dotted)", "ई", "İyi (ई-ई) - Good"],
            ["O", "ओ", "Okul (ओकुल) - School"],
            ["Ö", "ओ+ए (rounded)", "Öğrenci (ओरेंजी) - Student"],
            ["U", "ऊ", "Uzun (उज़ुन) - Long"],
            ["Ü", "उ+इ (pouted)", "Üzüm (उइ-ज़ुम) - Grape"]
        ]
    },
    {
        type: "table",
        title: "2. Alphabet - Special Consonants",
        headers: ["Letter", "Hindi Sound", "Turkish Example"],
        rows: [
            ["C", "ज (J)", "Cam (जाम) - Glass"],
            ["Ç", "च (Ch)", "Çay (चाय) - Tea"],
            ["Ğ", "Silent (lengthens vowel)", "Dağ (दा...अ) - Mountain"],
            ["J", "झ़ (Soft J)", "Jilet (झीलेट) - Razor"],
            ["Ş", "श (Sh)", "Şeker (शेकेर) - Sugar"],
            ["Y", "य (Y)", "Yok (योक) - No/Absent"]
        ]
    },
    {
        type: "table",
        title: "3. Numbers (संख्याएँ)",
        headers: ["Number", "Hindi", "Turkish"],
        rows: [
            ["0", "शून्य", "Sıfır (सिफिर)"],
            ["1", "एक", "Bir (बिर)"],
            ["2", "दो", "İki (इकि)"],
            ["3", "तीन", "Üç (उच)"],
            ["4", "चार", "Dört (दूर्त)"],
            ["5", "पाँच", "Beş (बेश)"],
            ["6", "छह", "Altı (अल्त)"],
            ["7", "सात", "Yedi (येदि)"],
            ["8", "आठ", "Sekiz (सेकिज़)"],
            ["9", "नौ", "Dokuz (दोकुज़)"],
            ["10", "दस", "On (ओन)"],
            ["20", "बीस", "Yirmi (यिरमि)"],
            ["50", "पचास", "Elli (एल्लि)"],
            ["100", "सौ", "Yüz (यूज़)"]
        ]
    },
    {
        type: "table",
        title: "4. Days of the Week",
        headers: ["English", "Hindi", "Turkish"],
        rows: [
            ["Monday", "सोमवार", "Pazartesi (पाज़ारतेसी)"],
            ["Tuesday", "मंगलवार", "Salı (साली)"],
            ["Wednesday", "बुधवार", "Çarşamba (चारशाम्बा)"],
            ["Thursday", "गुरुवार", "Perşembe (पेरशेम्बे)"],
            ["Friday", "शुक्रवार", "Cuma (जुमा)"],
            ["Saturday", "शनिवार", "Cumartesi (जुमारतेसी)"],
            ["Sunday", "रविवार", "Pazar (पाज़ार)"]
        ]
    },
    {
        type: "table",
        title: "5. Months of the Year",
        headers: ["English", "Hindi", "Turkish"],
        rows: [
            ["January", "जनवरी", "Ocak (ओजाक)"],
            ["February", "फ़रवरी", "Şubat (शुबात)"],
            ["March", "मार्च", "Mart (मार्ट)"],
            ["April", "अप्रैल", "Nisan (निसान)"],
            ["May", "मई", "Mayıs (मायिस)"],
            ["June", "जून", "Haziran (हाज़िरान)"],
            ["July", "जुलाई", "Temmuz (तेम्मुज़)"],
            ["August", "अगस्त", "Ağustos (आउस्तोस)"],
            ["September", "सितंबर", "Eylül (एल्यूल)"],
            ["October", "अक्टूबर", "Ekim (एकिम)"],
            ["November", "नवंबर", "Kasım (कासिम)"],
            ["December", "दिसंबर", "Aralık (अरालिक)"]
        ]
    },

    // ==========================================
    // PART 2: NOUNS, PRONOUNS & LOGIC
    // ==========================================
    {
        type: "theory",
        title: "6. Theory: Vowel Harmony (Golden Rule)",
        content: `
            <p>Turkish adds suffixes to words. The suffix must match the word's last vowel.</p>
            <ul>
                <li><b>Hard Vowels (a, ı, o, u):</b> Suffixes will use 'a' or 'ı'. (e.g., -lar, -da)</li>
                <li><b>Soft Vowels (e, i, ö, ü):</b> Suffixes will use 'e' or 'i'. (e.g., -ler, -de)</li>
            </ul>
        `
    },
    {
        type: "table",
        title: "7. Pluralization (-lar / -ler)",
        headers: ["Word", "Plural Rule", "Turkish Result"],
        rows: [
            ["Car (Araba)", "Ends in 'a' (Hard) -> add lar", "Arabalar (गाड़ियाँ)"],
            ["House (Ev)", "Ends in 'e' (Soft) -> add ler", "Evler (घर - बहुवचन)"],
            ["Day (Gün)", "Ends in 'ü' (Soft) -> add ler", "Günler (दिन - बहुवचन)"],
            ["Friend (Arkadaş)", "Ends in 'a' (Hard) -> add lar", "Arkadaşlar (मित्रों)"]
        ]
    },
    {
        type: "table",
        title: "8. Personal Pronouns",
        headers: ["English", "Hindi", "Turkish"],
        rows: [
            ["I", "मैं", "Ben (बेन)"],
            ["You", "तुम / आप", "Sen (सेन) / Siz (सिज़ - Formal)"],
            ["He / She / It", "वह", "O (ओ)"],
            ["We", "हम", "Biz (बिज़)"],
            ["They", "वे", "Onlar (ओनलार)"]
        ]
    },
    {
        type: "table",
        title: "9. Possessive Pronouns (My, Your)",
        description: "In Turkish, you add a suffix to the NOUN to show possession.",
        headers: ["English", "Hindi", "Turkish Rule (Example: Ev - House)"],
        rows: [
            ["My house", "मेरा घर", "Ev<b>im</b> (एविम)"],
            ["Your house", "तुम्हारा घर", "Ev<b>in</b> (एविन)"],
            ["His/Her house", "उसका घर", "Ev<b>i</b> (एवी)"],
            ["Our house", "हमारा घर", "Ev<b>imiz</b> (एविमिज़)"],
            ["Their house", "उनका घर", "Ev<b>leri</b> (एवलेरी)"]
        ]
    },

    // ==========================================
    // PART 3: THE MASTER TENSE MATRIX (12 TENSES)
    // VERB: GELMEK (TO COME)
    // ==========================================
    {
        type: "theory",
        title: "10. Theory: The 12 Tenses",
        content: `
            <p>We will map all English/Hindi tenses to Turkish using one verb: <b>Gelmek (To Come)</b>.</p>
            <p>Root word: <b>Gel</b></p>
        `
    },
    {
        type: "table",
        title: "11. Simple Present / Aorist (Habitual)",
        description: "Used for general facts or habits. (Ta hai / Ti hai)",
        headers: ["English", "Hindi", "Turkish (Gel + ir + suffix)"],
        rows: [
            ["I come", "मैं आता हूँ", "Gelirim (गेलिरिम)"],
            ["You come", "तुम आते हो", "Gelirsin (गेलिरसिन)"],
            ["He comes", "वह आता है", "Gelir (गेलिर)"],
            ["We come", "हम आते हैं", "Geliriz (गेलिरिज़)"],
            ["They come", "वे आते हैं", "Gelirler (गेलिरलेर)"]
        ]
    },
    {
        type: "table",
        title: "12. Present Continuous (Action Now)",
        description: "Happening right now. (Raha hai / Rahi hai)",
        headers: ["English", "Hindi", "Turkish (Gel + iyor + suffix)"],
        rows: [
            ["I am coming", "मैं आ रहा हूँ", "Geliyorum (गेलियोरुम)"],
            ["You are coming", "तुम आ रहे हो", "Geliyorsun (गेलियोरसून)"],
            ["He is coming", "वह आ रहा है", "Geliyor (गेलियोर)"],
            ["We are coming", "हम आ रहे हैं", "Geliyoruz (गेलियोरुज़)"]
        ]
    },
    {
        type: "table",
        title: "13. Simple Past (Definite)",
        description: "Completed action. (Ya / Yi / Ye)",
        headers: ["English", "Hindi", "Turkish (Gel + di + suffix)"],
        rows: [
            ["I came", "मैं आया", "Geldim (गेल्दिम)"],
            ["You came", "तुम आए", "Geldin (गेल्दिन)"],
            ["He came", "वह आया", "Geldi (गेल्दि)"],
            ["We came", "हम आए", "Geldik (गेल्दिक) - *Note 'k' for We*"]
        ]
    },
    {
        type: "table",
        title: "14. Simple Future",
        description: "Will happen. (Ga / Gi / Ge)",
        headers: ["English", "Hindi", "Turkish (Gel + ecek + suffix)"],
        rows: [
            ["I will come", "मैं आऊँगा", "Geleceğim (गेलेजेइम)"],
            ["You will come", "तुम आओगे", "Geleceksin (गेलेजेकसिन)"],
            ["He will come", "वह आएगा", "Gelecek (गेलेजेक)"]
        ]
    },
    {
        type: "table",
        title: "15. Past Continuous",
        description: "Was happening in the past. (Raha tha)",
        headers: ["English", "Hindi", "Turkish (Gel + iyor + du + m)"],
        rows: [
            ["I was coming", "मैं आ रहा था", "Geliyordum (गेलियोरदुम)"],
            ["You were coming", "तुम आ रहे थे", "Geliyordun (गेलियोरदुन)"],
            ["He was coming", "वह आ रहा था", "Geliyordu (गेलियोरदु)"]
        ]
    },
    {
        type: "table",
        title: "16. Present Perfect",
        description: "Action completed recently. Turkish usually uses Past Definite for this.",
        headers: ["English", "Hindi", "Turkish"],
        rows: [
            ["I have come", "मैं आ गया हूँ", "Geldim (गेल्दिम) *Common Usage"],
            ["He has come", "वह आ गया है", "Geldi (गेल्दि)"]
        ]
    },
    {
        type: "table",
        title: "17. Past Perfect",
        description: "Happened before another past action. (Chuka tha)",
        headers: ["English", "Hindi", "Turkish (Gel + miş + ti + m)"],
        rows: [
            ["I had come", "मैं आ चुका था", "Gelmiştim (गेल्मिश्तिम)"],
            ["You had come", "तुम आ चुके थे", "Gelmiştin (गेल्मिश्तिन)"]
        ]
    },
    {
        type: "table",
        title: "18. Future Continuous",
        description: "Will be happening. (Raha hounga)",
        headers: ["English", "Hindi", "Turkish (Geliyor + olacağım)"],
        rows: [
            ["I will be coming", "मैं आ रहा हूँगा", "Geliyor olacağım (गेलियोर ओलाजाइम)"]
        ]
    },
    {
        type: "table",
        title: "19. Future Perfect",
        description: "Will have completed. (Chuka hounga)",
        headers: ["English", "Hindi", "Turkish (Gelmiş + olacağım)"],
        rows: [
            ["I will have come", "मैं आ चुका हूँगा", "Gelmiş olacağım (गेल्मिश ओलाजाइम)"]
        ]
    },
    {
        type: "table",
        title: "20. Reported Past (The 'Gossip' Tense)",
        description: "<b>Unique to Turkish:</b> You didn't see it, you heard it. (Suna hai ki...)",
        headers: ["English", "Hindi", "Turkish (Gel + miş)"],
        rows: [
            ["Apparently he came", "सुना है कि वह आया", "Gelmiş (गेल्मिश)"],
            ["They say I came", "कहते हैं मैं आया", "Gelmişim (गेल्मिशिम)"]
        ]
    },
    {
        type: "table",
        title: "21. Conditional Tense (If)",
        description: "Conditions. (Agar...)",
        headers: ["English", "Hindi", "Turkish (Gel + se)"],
        rows: [
            ["If I come", "अगर मैं आऊँ", "Gelsem (गेल्सेम)"],
            ["If you come", "अगर तुम आओ", "Gelsen (गेल्सेन)"]
        ]
    },

    // ==========================================
    // PART 4: EXERCISE (TENSES)
    // ==========================================
    {
        type: "exercise",
        title: "22. Exercise: Tenses Practice",
        questions: [
            {
                question: "Verb: <b>Gitmek</b> (To Go). <br>Convert to Present Continuous (I am going).",
                answer: "Gidiyorum (Git -> Gid + iyor + um)"
            },
            {
                question: "Verb: <b>Yemek</b> (To Eat). <br>Convert to Simple Past (He ate).",
                answer: "Yedi (Ye + di)"
            },
            {
                question: "Verb: <b>Bakmak</b> (To Look). <br>Convert to Future (We will look).",
                answer: "Bakacağız (Bak + acağ + ız)"
            }
        ]
    },

    // ==========================================
    // PART 5: MODAL VERBS
    // ==========================================
    {
        type: "table",
        title: "23. Modals: Can, Must, Want",
        headers: ["English", "Hindi", "Turkish Rule"],
        rows: [
            ["I can come (Ability)", "मैं आ सकता हूँ", "Gel<b>ebil</b>irim (गेलेबिलिरिम)"],
            ["I must come (Necessity)", "मुझे आना है", "Gel<b>meli</b>yim (गेल्मेलियिम)"],
            ["I want to come (Desire)", "मैं आना चाहता हूँ", "Gelmek <b>istiyorum</b> (गेल्मेक इस्तियोरुम)"],
            ["Come! (Command)", "आओ!", "Gel! (गेल)"],
            ["Don't come! (Negative)", "मत आओ!", "Gel<b>me</b>! (गेल्मे)"]
        ]
    },

    // ==========================================
    // PART 6: CASES & SYNTAX
    // ==========================================
    {
        type: "theory",
        title: "24. Theory: The Case System (State of Nouns)",
        content: `
            <p>Nouns change form based on their role in the sentence. Example word: <b>Ev</b> (House).</p>
        `
    },
    {
        type: "table",
        title: "25. Noun Cases (The Table)",
        headers: ["Case Name", "English/Hindi Concept", "Turkish Example"],
        rows: [
            ["Nominative", "Subject (House)", "Ev (एव)"],
            ["Accusative", "The Object (House <b>ko</b>)", "Evi (एवी)"],
            ["Dative", "To (House <b>ko</b>)", "Eve (एवे)"],
            ["Locative", "In/At (House <b>mein</b>)", "Evde (एवदे)"],
            ["Ablative", "From (House <b>se</b>)", "Evden (एवदेन)"],
            ["Genitive", "Of (House <b>ka</b>)", "Evin (एविन)"]
        ]
    },
    {
        type: "table",
        title: "26. Question Particles",
        headers: ["Sentence", "Hindi", "Turkish (Mı/Mi/Mu/Mü)"],
        rows: [
            ["Are you coming?", "क्या तुम आ रहे हो?", "Geliyor <b>musun</b>? (गेलियोर मुसुन)"],
            ["Is this a cat?", "क्या यह बिल्ली है?", "Bu kedi <b>mi</b>? (बु केदी मि)"],
            ["Is it good?", "क्या यह अच्छा है?", "İyi <b>mi</b>? (ई-ई मि)"]
        ]
    },

    // ==========================================
    // PART 7: VOCABULARY EXPANSION
    // ==========================================
    {
        type: "table",
        title: "27. Common Adjectives",
        headers: ["English", "Hindi", "Turkish"],
        rows: [
            ["Good / Bad", "अच्छा / बुरा", "İyi / Kötü (ई-ई / क्योत्यू)"],
            ["Big / Small", "बड़ा / छोटा", "Büyük / Küçük (ब्यूक / क्युचुक)"],
            ["Hot / Cold", "गर्म / ठंडा", "Sıcak / Soğuk (सिजाक / सोउक)"],
            ["Beautiful / Ugly", "सुंदर / बदसूरत", "Güzel / Çirkin (ग्यूज़ेल / चिरकिन)"],
            ["Fast / Slow", "तेज़ / धीरा", "Hızlı / Yavaş (हिज़ली / यवाश)"],
            ["Expensive / Cheap", "महंगा / सस्ता", "Pahalı / Ucuz (पहाली / उजूज़)"]
        ]
    },
    {
        type: "table",
        title: "28. Colors",
        headers: ["English", "Hindi", "Turkish"],
        rows: [
            ["Red", "लाल", "Kırmızı (किरमिज़ी)"],
            ["White", "सफेद", "Beyaz (बेयाज़)"],
            ["Black", "काला", "Siyah (सियाह)"],
            ["Blue", "नीला", "Mavi (मावी)"],
            ["Green", "हरा", "Yeşil (येशिल)"],
            ["Yellow", "पीला", "Sarı (सारी)"]
        ]
    },
    {
        type: "table",
        title: "29. Family Members",
        headers: ["English", "Hindi", "Turkish"],
        rows: [
            ["Mother", "माँ", "Anne (अन्ने)"],
            ["Father", "पिता", "Baba (बाबा)"],
            ["Sister", "बहन", "Kız kardeş (किज़ करदेश)"],
            ["Brother", "भाई", "Erkek kardeş (एर्केक करदेश)"],
            ["Aunt (Paternal)", "बुआ", "Hala (हाला)"],
            ["Aunt (Maternal)", "मौसी", "Teyze (तेयज़े)"],
            ["Uncle (Paternal)", "चाचा", "Amca (अमजा)"],
            ["Uncle (Maternal)", "मामा", "Dayı (दायी)"]
        ]
    },
    {
        type: "table",
        title: "30. Body Parts",
        headers: ["English", "Hindi", "Turkish"],
        rows: [
            ["Head", "सिर", "Baş (बाश)"],
            ["Eye", "आंख", "Göz (ग्योज़)"],
            ["Hand", "हाथ", "El (एल)"],
            ["Foot", "पैर", "Ayak (अयाक)"],
            ["Stomach", "पेट", "Mide (मीदे)"]
        ]
    },
    {
        type: "table",
        title: "31. Common Foods",
        headers: ["English", "Hindi", "Turkish"],
        rows: [
            ["Bread", "रोटी", "Ekmek (एकमेक)"],
            ["Water", "पानी", "Su (सू)"],
            ["Tea", "चाय", "Çay (चाय)"],
            ["Coffee", "कॉफ़ी", "Kahve (काहवे)"],
            ["Chicken", "मुर्गी", "Tavuk (तावुक)"],
            ["Meat", "मांस", "Et (एत)"],
            ["Vegetable", "सब्जी", "Sebze (सेब्ज़े)"]
        ]
    },
    {
        type: "table",
        title: "32. Professions",
        headers: ["English", "Hindi", "Turkish"],
        rows: [
            ["Doctor", "डॉक्टर", "Doktor (दोकतोर)"],
            ["Teacher", "अध्यापक", "Öğretmen (ओरेतमेन)"],
            ["Student", "छात्र", "Öğrenci (ओरेंजी)"],
            ["Engineer", "अभियन्ता", "Mühendis (म्युहेंदिस)"],
            ["Driver", "चालक", "Şoför (शोफ्योर)"]
        ]
    },

    // ==========================================
    // PART 8: PHRASES & CONVERSATION
    // ==========================================
    {
        type: "table",
        title: "33. Survival Phrases",
        headers: ["English", "Hindi", "Turkish"],
        rows: [
            ["I don't understand", "मैं समझा नहीं", "Anlamıyorum (अनला-मियोरुम)"],
            ["Do you speak English?", "क्या आप अंग्रेजी बोलते हैं?", "İngilizce biliyor musunuz? (इंगिलिज़्जे बिलियोर मुसुनुज़)"],
            ["Where is the toilet?", "शौचालय कहाँ है?", "Tuvalet nerede? (तुवालेट नेरेदे)"],
            ["How much is this?", "यह कितने का है?", "Ne kadar? (ने कदार)"],
            ["Help!", "मदद!", "İmdat! (इम्दात)"]
        ]
    },
    {
        type: "table",
        title: "34. Introduction Conversation",
        headers: ["English", "Hindi", "Turkish"],
        rows: [
            ["Hello, what is your name?", "नमस्ते, आपका नाम क्या है?", "Merhaba, adınız ne? (मेरहाबा, अदिनिज़ ने)"],
            ["My name is John.", "मेरा नाम जॉन है।", "Benim adım John. (बेनिम अदिम जॉन)"],
            ["Nice to meet you.", "आपसे मिल कर खुशी हुई।", "Memnun oldum. (मेमनून ओल्दुम)"],
            ["See you later.", "बाद में मिलते हैं।", "Görüşürüz. (ग्यूरुशुरुज़)"]
        ]
    }
];
