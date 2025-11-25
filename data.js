/* 
    DATA FILE: TURKISH LEARNING SYLLABUS
    Structure: English | Hindi | Turkish (with Hindi Pronunciation)
*/

const syllabus = [
    // --- SECTION 1: ALPHABET ---
    {
        title: "1. Alphabet - Vowels (स्वर)",
        headers: ["English Letter", "Hindi Sound", "Turkish Letter (Pronunciation)"],
        rows: [
            ["A", "आ", "A (आ) - Like f'a'ther"],
            ["E", "ए", "E (ए) - Like b'e'd"],
            ["I (no dot)", "अ (dull)", "I (अ) - Guttural sound (Kap'a'li)"],
            ["İ (dotted)", "ई", "İ (ई) - Like mach'i'ne"],
            ["O", "ओ", "O (ओ) - Like g'o'"],
            ["Ö", "अ+ओ (mix)", "Ö (ओए) - Round mouth (German Ö)"],
            ["U", "ऊ", "U (ऊ) - Like m'oo'n"],
            ["Ü", "ई+ऊ (mix)", "Ü (उइ) - Pouted lips (French U)"]
        ]
    },
    {
        title: "2. Alphabet - Unique Consonants (व्यंजन)",
        headers: ["English Letter", "Hindi Sound", "Turkish Letter (Pronunciation)"],
        rows: [
            ["C", "ज", "C (जे) - *Important: Sound is J*"],
            ["Ç", "च", "Ç (चे) - Like 'Ch'air"],
            ["Ğ", "Silent", "Ğ (युमुशाक गे) - Lengthens previous vowel"],
            ["J", "झ़", "J (झे) - Soft J (Mea's'ure)"],
            ["Ş", "श", "Ş (शे) - Like 'Sh'oe"],
            ["Y", "य", "Y (ये) - Like 'Y'es"]
        ]
    },

    // --- SECTION 2: BASICS ---
    {
        title: "3. Numbers (संख्याएँ)",
        headers: ["Number", "Hindi", "Turkish"],
        rows: [
            ["One", "एक", "Bir (बिर)"],
            ["Two", "दो", "İki (इकि)"],
            ["Three", "तीन", "Üç (उच)"],
            ["Four", "चार", "Dört (दूर्त)"],
            ["Five", "पाँच", "Beş (बेश)"],
            ["Six", "छह", "Altı (अल्त)"],
            ["Seven", "सात", "Yedi (येदि)"],
            ["Eight", "आठ", "Sekiz (सेकिज़)"],
            ["Nine", "नौ", "Dokuz (दोकुज़)"],
            ["Ten", "दस", "On (ओन)"]
        ]
    },
    {
        title: "4. Colors (रंग)",
        headers: ["English", "Hindi", "Turkish"],
        rows: [
            ["Red", "लाल", "Kırmızı (किरमिज़ी)"],
            ["White", "सफेद", "Beyaz (बेयाज़)"],
            ["Black", "काला", "Siyah (सियाह)"],
            ["Blue", "नीला", "Mavi (मावी)"],
            ["Green", "हरा", "Yeşil (येशिल)"]
        ]
    },

    // --- SECTION 3: NOUNS & GENDER CONCEPT ---
    {
        title: "5. People & Gender Logic (लिंग)",
        headers: ["English", "Hindi (Gendered)", "Turkish (Gender Neutral)"],
        rows: [
            ["Man", "आदमी (Masculine)", "Adam (आदम)"],
            ["Woman", "औरत (Feminine)", "Kadın (कादिन)"],
            ["Boy", "लड़का (Masculine)", "Erkek çocuk (एर्केक चोजुक)"],
            ["Girl", "लड़की (Feminine)", "Kız çocuk (किज़ चोजुक)"],
            ["He / She / It", "वह (M) / वह (F) / यह", "O (ओ) - *Same for all*"],
            ["Student", "छात्र / छात्रा", "Öğrenci (ओरेंजी) - *Unisex*"],
            ["Teacher", "शिक्षक / शिक्षिका", "Öğretmen (ओरेतमेन) - *Unisex*"]
        ]
    },

    // --- SECTION 4: ARTICLES ---
    {
        title: "6. Articles (A, An, The)",
        headers: ["English Concept", "Hindi Equivalent", "Turkish Rule"],
        rows: [
            ["A / An (Indefinite)", "एक (Ek)", "Bir (बिर) - e.g. Bir elma (An apple)"],
            ["The (Definite)", "कोई शब्द नहीं (No word)", "*No separate word*. Explained by suffixes."],
            ["The Book (Specific)", "वह किताब", "Kitab-ı (किताबी) - Suffix indicates 'The'"],
            ["A Book (General)", "एक किताब", "Bir kitap (बिर किताप)"]
        ]
    },

    // --- SECTION 5: PRONOUNS & VERBS ---
    {
        title: "7. Pronouns (सर्वनाम)",
        headers: ["English", "Hindi", "Turkish"],
        rows: [
            ["I", "मैं", "Ben (बेन)"],
            ["You (Singular)", "तुम / आप", "Sen (सेन) / Siz (सिज़ - Formal)"],
            ["He / She", "वह", "O (ओ)"],
            ["We", "हम", "Biz (बिज़)"],
            ["They", "वे", "Onlar (ओनलार)"]
        ]
    },
    {
        title: "8. Common Verbs (Infinitive Form)",
        headers: ["English", "Hindi (na ends)", "Turkish (mak/mek ends)"],
        rows: [
            ["To Come", "आना", "Gelmek (गेलमेक)"],
            ["To Go", "जाना", "Gitmek (गितमेक)"],
            ["To Eat", "खाना", "Yemek (येमेक)"],
            ["To Drink", "पीना", "İçmek (इचमेक)"],
            ["To Speak", "बोलना", "Konuşmak (कोनुश्मक)"],
            ["To Want", "चाहना", "İstemek (इस्तेमेक)"],
            ["To Understand", "समझना", "Anlamak (अनलामक)"]
        ]
    },

    // --- SECTION 6: TENSES (COMPARATIVE) ---
    {
        title: "9. Present Continuous Tense (Currently doing)",
        headers: ["English", "Hindi (Raha hai)", "Turkish (-(i)yor)"],
        rows: [
            ["I am coming", "मैं आ रहा हूँ", "Geliyorum (गेल-इयोर-उम)"],
            ["You are going", "तुम जा रहे हो", "Gidiyorsun (गिद-इयोर-सुन)"],
            ["He is eating", "वह खा रहा है", "Yiyor (यि-योर)"],
            ["We are speaking", "हम बोल रहे हैं", "Konuşuyoruz (कोनुश-उयोर-उज़)"],
            ["They are drinking", "वे पी रहे हैं", "İçiyorlar (इच-इयोर-लार)"]
        ]
    },
    {
        title: "10. Simple Present / Aorist (Habits)",
        headers: ["English", "Hindi (Ta hai)", "Turkish (-(e/a)r)"],
        rows: [
            ["I drink tea", "मैं चाय पीता हूँ", "Çay içerim (चाय इचेरिम)"],
            ["We go to school", "हम स्कूल जाते हैं", "Okula gideriz (ओकुला गिदेरिज़)"],
            ["He works", "वह काम करता है", "Çalışır (चालिशिर)"]
        ]
    },
    {
        title: "11. Past Tense (Completed)",
        headers: ["English", "Hindi (Ya/Yi/Ye)", "Turkish (-di/-du)"],
        rows: [
            ["I came", "मैं आया", "Geldim (गेल्दिम)"],
            ["You saw", "तुमने देखा", "Gördün (ग्युर्द्युन)"],
            ["He went", "वह गया", "Gitti (गित्ति)"]
        ]
    },
    {
        title: "12. Future Tense",
        headers: ["English", "Hindi (Ga/Gi/Ge)", "Turkish (-ecek/-acak)"],
        rows: [
            ["I will go", "मैं जाऊँगा", "Gideceğim (गिदेजेइम)"],
            ["We will come", "हम आएंगे", "Geleceğiz (गेलेजेइज़)"],
            ["Wait!", "रुको!", "Bekle! (बेक्ले)"]
        ]
    },

    // --- SECTION 7: ADJECTIVES ---
    {
        title: "13. Common Adjectives (विशेषण)",
        headers: ["English", "Hindi", "Turkish"],
        rows: [
            ["Good", "अच्छा", "İyi (ई-ई)"],
            ["Bad", "बुरा", "Kötü (क्योत्यू)"],
            ["Beautiful", "सुंदर", "Güzel (ग्यूज़ेल)"],
            ["Big", "बड़ा", "Büyük (ब्यूक)"],
            ["Small", "छोटा", "Küçük (क्युचुक)"],
            ["Hot", "गर्म", "Sıcak (सिजाक)"],
            ["Cold", "ठंडा", "Soğuk (सोउक)"]
        ]
    },

    // --- SECTION 8: COMMON SENTENCES ---
    {
        title: "14. Daily Sentences",
        headers: ["English", "Hindi", "Turkish"],
        rows: [
            ["My name is...", "मेरा नाम ... है", "Benim adım... (बेनिम अदिम...)"],
            ["Where are you from?", "आप कहाँ से हैं?", "Nerelisiniz? (नेरे-लिसिनिज़)"],
            ["I don't understand.", "मैं समझा नहीं", "Anlamıyorum. (अनला-मियोरुम)"],
            ["Where is the toilet?", "शौचालय कहाँ है?", "Tuvalet nerede? (तुवालेट नेरेदे)"],
            ["I love you.", "मैं तुमसे प्यार करता हूँ", "Seni seviyorum. (सेनी सेवियोरुम)"]
        ]
    }
];
