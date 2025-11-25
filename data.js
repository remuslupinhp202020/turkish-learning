/* 
    COMPREHENSIVE DATA FILE FOR TURKISH LEARNING
    Updated: Pronunciations added, Possessives split, Exercises added, Phrases expanded.
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
    // PART 2: NOUNS & PRONOUNS
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
        title: "7a. Pluralization Rules (-lar / -ler)",
        description: "Look at the last vowel. Hard = lar, Soft = ler.",
        headers: ["Word", "Plural Rule", "Turkish Result (Pronunciation)"],
        rows: [
            ["Car (Araba)", "Ends in 'a' (Hard) -> add lar", "Arabalar (अराबलार)"],
            ["House (Ev)", "Ends in 'e' (Soft) -> add ler", "Evler (एवलेर)"],
            ["Day (Gün)", "Ends in 'ü' (Soft) -> add ler", "Günler (ग्युनलेर)"],
            ["Book (Kitap)", "Last vowel 'a' (Hard) -> add lar", "Kitaplar (कितापलार)"]
        ]
    },
    {
        type: "table",
        title: "7b. Pluralization Practice List",
        description: "More words to practice the sound.",
        headers: ["English", "Hindi", "Turkish Plural"],
        rows: [
            ["Dogs", "कुत्ते", "Köpekler (क्योपेकलेर)"],
            ["Cats", "बिल्लियाँ", "Kediler (केदिलेर)"],
            ["Apples", "सेब", "Elmalar (एल्मालार)"],
            ["Schools", "विद्यालय", "Okullar (ओकुल्लार)"],
            ["Doctors", "डॉक्टर", "Doktorlar (दोकतोरलार)"]
        ]
    },
    {
        type: "table",
        title: "8. Personal Pronouns (Subject)",
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
        title: "9a. Possessive Words (My, Your...)",
        description: "First, learn the words for 'My', 'Your', etc.",
        headers: ["English", "Hindi", "Turkish"],
        rows: [
            ["My", "मेरा", "Benim (बेनिम)"],
            ["Your (Singular)", "तुम्हारा", "Senin (सेनिन)"],
            ["His / Her / Its", "उसका", "Onun (ओनुन)"],
            ["Our", "हमारा", "Bizim (बिज़िम)"],
            ["Your (Plural/Formal)", "आपका", "Sizin (सिज़िन)"],
            ["Their", "उनका", "Onların (ओनलारिन)"]
        ]
    },
    {
        type: "table",
        title: "9b. Possessive Suffixes (My House)",
        description: "In Turkish, saying 'Benim' is not enough. You MUST add a suffix to the noun too.",
        headers: ["English", "Hindi", "Turkish Rule (Noun + Suffix)"],
        rows: [
            ["My house", "मेरा घर", "Benim ev<b>im</b> (बेनिम एविम)"],
            ["Your house", "तुम्हारा घर", "Senin ev<b>in</b> (सेनिन एविन)"],
            ["His house", "उसका घर", "Onun ev<b>i</b> (ओनुन एवी)"],
            ["Our house", "हमारा घर", "Bizim ev<b>imiz</b> (बिज़िम एविमिज़)"],
            ["Their house", "उनका घर", "Onların ev<b>leri</b> (ओनलारिन एवलेरी)"]
        ]
    },

    // ==========================================
    // PART 3: THE MASTER TENSE MATRIX
    // VERB: GELMEK (TO COME)
    // ==========================================
    {
        type: "theory",
        title: "10. Theory: The Master Verb List",
        content: `
            <p>We will use <b>Gelmek (To Come)</b> to demonstrate all tenses.</p>
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
    // ==========================================
    // INSERT THIS NEW SECTION AFTER SECTION 25
    // ==========================================
    {
        type: "theory",
        title: "25b. Theory: The Definite Article ('The')",
        content: `
            <p>Turkish has no word for "The". Instead, we change the ending of the object.</p>
            <p><b>The Rule (4-way Harmony):</b></p>
            <ul>
                <li>If word ends in <b>e/i</b> → add <b>-i</b> (Peynir → Peynir<b>i</b>)</li>
                <li>If word ends in <b>a/ı</b> → add <b>-ı</b> (Portakal → Portakal<b>ı</b>)</li>
                <li>If word ends in <b>o/u</b> → add <b>-u</b> (Limon → Limon<b>u</b>)</li>
                <li>If word ends in <b>ö/ü</b> → add <b>-ü</b> (Süt → Süt<b>ü</b>)</li>
            </ul>
            <p><b>Important Exceptions:</b></p>
            <ul>
                <li><b>Buffer 'Y':</b> If word ends in a vowel, add 'y' first. (Elma → Elma<b>yı</b>, Su → Su<b>yu</b>).</li>
                <li><b>Softening (K → Ğ):</b> Words ending in K change to Ğ. (Balık → Balı<b>ğı</b>).</li>
            </ul>
        `
    },
    {
        type: "table",
        title: "25c. Practice: 'I eat THE...'",
        description: "Subject + Object(with suffix) + Verb.",
        headers: ["English", "Hindi", "Turkish"],
        rows: [
            // Vowel Harmony: O/U -> U
            ["She eats the lemon", "वह नींबू खाती है", "O limon<b>u</b> yer. (ओ लिमोनु येर)"],
            // Vowel Harmony: E/I -> I
            ["I eat the cheese", "मैं पनीर खाता हूँ", "Ben peynir<b>i</b> yerim. (बेन पेयनिरि येरिम)"],
            ["You eat the meat", "तुम मांस खाते हो", "Sen et<b>i</b> yersin. (सेन एति येरसिन)"],
            // Buffer 'Y' Rule (Elma ends in vowel)
            ["You eat the apple", "तुम सेब खाते हो", "Sen elma<b>yı</b> yersin. (सेन एल्मा-यी येरसिन)"],
            // Softening Rule (Balık ends in K -> Ğ)
            ["We eat the fish", "हम मछली खाते हैं", "Biz balı<b>ğı</b> yeriz. (बिज़ बालाइ येरिज़)"],
            // Buffer 'Y' + Harmony U
            ["They drink the water", "वे पानी पीते हैं", "Onlar su<b>yu</b> içerler. (ओनलार सुयु इचेरलेर)"],
            // Harmony Ö/Ü -> Ü
            ["I drink the milk", "मैं दूध पीता हूँ", "Ben süt<b>ü</b> içerim. (बेन सुत्यु इचेरिम)"],
            // Harmony A/I -> I
            ["She eats the orange", "वह संतरा खाती है", "O portakal<b>ı</b> yer. (ओ पोर्तकाली येर)"],
            // Softening Rule (Yağ implies 'oil', usually used with 'uses' but fits pattern)
            ["I eat/consume the oil", "मैं तेल खाता हूँ", "Ben yağ<b>ı</b> yerim. (बेन या-ई येरिम)"]
        ]
    },
    {
        type: "exercise",
        title: "26. Exercise: Noun Cases",
        questions: [
            {
                question: "Word: <b>Okul</b> (School). Say 'To School'.",
                answer: "Okula (Okul + a)"
            },
            {
                question: "Word: <b>İş</b> (Work). Say 'From Work'.",
                answer: "İşten (İş + ten)"
            },
            {
                question: "Word: <b>Araba</b> (Car). Say 'In the Car'.",
                answer: "Arabada (Araba + da)"
            }
        ]
    },
    {
        type: "table",
        title: "27. Question Particles",
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
        title: "28. Common Adjectives",
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
        title: "29. Colors",
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
        title: "30. Family Members",
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
        title: "31. Body Parts",
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
        title: "32. Common Foods",
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
        title: "33. Professions",
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
        title: "34. Detailed Greetings",
        headers: ["English", "Hindi", "Turkish"],
        rows: [
            ["Good Morning", "सुप्रभात", "Günaydın (ग्युनायदिन)"],
            ["Good Afternoon", "शुभ दोपहर", "Tünaydın (तुनायदिन)"],
            ["Good Evening", "शुभ संध्या", "İyi akşamlar (ई-ई अकशामलार)"],
            ["Good Night", "शुभ रात्रि", "İyi geceler (ई-ई गेजेलेर)"],
            ["Welcome", "स्वागत है", "Hoşgeldiniz (होशगेल्दिनिज़)"]
        ]
    },
    {
        type: "table",
        title: "35. Language Skills Phrases",
        headers: ["English", "Hindi", "Turkish"],
        rows: [
            ["I know English", "मैं अंग्रेजी जानता हूँ", "İngilizce biliyorum (इंगिलिज़्जे बिलियोरुम)"],
            ["I know Turkish", "मैं तुर्की जानता हूँ", "Türkçe biliyorum (तुर्कचे बिलियोरुम)"],
            ["I don't know English", "मैं अंग्रेजी नहीं जानता", "İngilizce bilmiyorum (इंगिलिज़्जे बिलमियोरुम)"],
            ["I don't know Turkish", "मैं तुर्की नहीं जानता", "Türkçe bilmiyorum (तुर्कचे बिलमियोरुम)"],
            ["Do you speak English?", "क्या आप अंग्रेजी बोलते हैं?", "İngilizce konuşuyor musunuz? (कोनुशुयोर मुसुनुज़)"]
        ]
    },
    {
        type: "table",
        title: "36. Emotions & Actions",
        headers: ["English", "Hindi", "Turkish"],
        rows: [
            ["I love you", "मैं तुमसे प्यार करता हूँ", "Seni seviyorum (सेनी सेवियोरुम)"],
            ["I hate you", "मैं तुमसे नफरत करता हूँ", "Senden nefret ediyorum (सेंडेन नेफ्रेत एदियोरुम)"],
            ["I am sleeping", "मैं सो रहा हूँ", "Uyuyorum (उयुयोरुम)"],
            ["I am hungry", "मुझे भूख लगी है", "Acıktım (अजिकतिम)"],
            ["I am thirsty", "मुझे प्यास लगी है", "Susadım (सुसादिम)"]
        ]
    },
    {
        type: "table",
        title: "37. Introduction Conversation",
        headers: ["English", "Hindi", "Turkish"],
        rows: [
            ["Hello, what is your name?", "नमस्ते, आपका नाम क्या है?", "Merhaba, adınız ne? (मेरहाबा, अदिनिज़ ने)"],
            ["My name is John.", "मेरा नाम जॉन है।", "Benim adım John. (बेनिम अदिम जॉन)"],
            ["Nice to meet you.", "आपसे मिल कर खुशी हुई।", "Memnun oldum. (मेमनून ओल्दुम)"],
            ["See you later.", "बाद में मिलते हैं।", "Görüşürüz. (ग्यूरुशुरुज़)"]
        ]
    },
    // ==========================================
    // PART 9: SEASONS, TIME & LOGIC WORDS
    // ==========================================
    {
        type: "table",
        title: "38. Seasons (Mousam)",
        headers: ["English", "Hindi", "Turkish"],
        rows: [
            ["Summer", "गर्मी", "Yaz (याज़)"],
            ["Winter", "सर्दी", "Kış (किश)"],
            ["Spring", "वसंत", "İlkbahar (इल्क-बहार)"],
            ["Autumn/Fall", "पतझड़", "Sonbahar (सोन-बहार)"]
        ]
    },
    {
        type: "table",
        title: "39. Directions & Location",
        headers: ["English", "Hindi", "Turkish"],
        rows: [
            ["Right", "दायां", "Sağ (साअ)"],
            ["Left", "बायां", "Sol (सोल)"],
            ["Straight", "सीधा", "Düz (द्यूज़)"],
            ["Here", "यहाँ", "Burada (बुरादा)"],
            ["There", "वहाँ", "Orada (ओरादा)"]
        ]
    },
    {
        type: "table",
        title: "40. Telling Time",
        headers: ["English", "Hindi", "Turkish"],
        rows: [
            ["What time is it?", "समय क्या हुआ है?", "Saat kaç? (सात कच)"],
            ["Hour / Clock", "घंटा / घड़ी", "Saat (सात)"],
            ["Minute", "मिनट", "Dakika (दाकिका)"],
            ["It is 3 o'clock", "तीन बजे हैं", "Saat üç. (सात उच)"],
            ["It is 5 o'clock", "पाँच बजे हैं", "Saat beş. (सात बेश)"]
        ]
    },
    {
        type: "table",
        title: "41. Connecting Words (Conjunctions)",
        description: "Words to connect sentences.",
        headers: ["English", "Hindi", "Turkish"],
        rows: [
            ["And", "aur (और)", "Ve (वे)"],
            ["But", "lekin (लेकिन)", "Ama (अमा)"],
            ["Or", "ya (या)", "Veya (वेया)"],
            ["Because", "kyunki (क्योंकि)", "Çünkü (चुनक्यू)"],
            ["With", "saath (साथ)", "İle (इले)"]
        ]
    },

    // ==========================================
    // PART 10: FINAL CHALLENGE
    // ==========================================
    {
        type: "exercise",
        title: "42. Final Mixed Practice",
        questions: [
            {
                question: "Translate: <b>I am coming because I love you.</b>",
                answer: "Geliyorum çünkü seni seviyorum."
            },
            {
                question: "Translate: <b>My house is here.</b> (Hint: House=Ev, My House=Evim)",
                answer: "Evim burada."
            },
            {
                question: "Translate: <b>I do not speak Turkish.</b> (Hint: Bilmek = To Know)",
                answer: "Türkçe bilmiyorum."
            }
        ]
    }
];
