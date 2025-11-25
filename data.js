/* 
    DATA STRUCTURE:
    Each section is an object with a 'title' and 'rows'.
    Each 'row' contains [English, Hindi, Turkish_Word + (Pronunciation)]
*/

const syllabus = [
    {
        title: "1. Turkish Alphabet - Vowels (स्वर)",
        headers: ["English Letter", "Hindi Sound", "Turkish Letter (Pronunciation)"],
        rows: [
            ["A", "आ", "A (आ) - Like f'a'ther"],
            ["E", "ए", "E (ए) - Like b'e'd"],
            ["I (dotless)", "अ (dull)", "I (अ) - Like s'u'pport (guttural sound)"],
            ["İ (dotted)", "ई", "İ (ई) - Like mach'i'ne"],
            ["O", "ओ", "O (ओ) - Like g'o'"],
            ["Ö", "अ + ओ mix", "Ö (ओए) - Like G'er'man"],
            ["U", "ऊ", "U (ऊ) - Like m'oo'n"],
            ["Ü", "ई + ऊ mix", "Ü (उइ) - Like f'ew'"]
        ]
    },
    {
        title: "2. Turkish Alphabet - Unique Consonants (व्यंजन)",
        headers: ["English Letter", "Hindi Sound", "Turkish Letter (Pronunciation)"],
        rows: [
            ["C", "ज", "C (जे) - *Important: C is J sound*"],
            ["Ç", "च", "Ç (चे) - Like 'Ch'air"],
            ["G", "ग", "G (गे) - Like 'G'o"],
            ["Ğ", "Silent/Lengthener", "Ğ (युमुशाक गे) - Extends previous vowel"],
            ["H", "ह", "H (हे) - Always pronounced"],
            ["J", "झ़", "J (झे) - Like Mea's'ure (Soft J)"],
            ["Ş", "श", "Ş (शे) - Like 'Sh'oe"],
            ["Y", "य", "Y (ये) - Like 'Y'es"]
        ]
    },
    {
        title: "3. Basic Greetings (अभिवादन)",
        headers: ["English", "Hindi", "Turkish (Pronunciation)"],
        rows: [
            ["Hello", "नमस्ते", "Merhaba (मेरहाबा)"],
            ["Good Morning", "सुप्रभात", "Günaydın (ग्युनायदिन)"],
            ["How are you?", "आप कैसे हैं?", "Nasılsın? (नासिल्सिन्न?)"],
            ["I am fine", "मैं ठीक हूँ", "Iyiyim (ई-ई-इम)"],
            ["Thank you", "धन्यवाद", "Teşekkürler (ते-शेक-कुर-लेर)"],
            ["Yes", "हाँ", "Evet (एवेत)"],
            ["No", "नहीं", "Hayır (हाइर)"]
        ]
    }
];
