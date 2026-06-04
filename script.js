// Sosyal Bilimler & Örgütsel İletişim Sınav Hazırlık Portalı Logic

// 20 Sınav Sorusu ve Cevapları
const QUESTIONS = [
    {
        id: 1,
        ref: "WhatsApp Image 2026-06-04 at 23.51.52.jpeg",
        question: "Ders notlarında geçen tanımlamalar çerçevesinde bilimin ne olduğunu, en temel özelliğini ve bilimin gözlenebilen fenomenler karşısındaki amacını ve niteliklerini açıklayınız.",
        answer: "Ders notlarına göre bilim; belli yöntemlere uygun veriler üretme, bilgileri üretme ve sürekli sorgulama sürecidir. Bilimin en temel ve ayırt edici niteliği 'kendi kendini sürekli sorgulamasıdır'. Bilimin temel amacı, gözlenebildiği fenomenleri tanımlamak ve açıklamak için çalışmaktır. Bulgulara dayanarak ileriyi tahmin etme (öngörü) yeteneğine sahiptir ve ilerlemek için yeni önermelerde bulunur. Niteliksel olarak bilim; nesnel, mantıksal ve tutarlıdır.",
        noteRef: "WhatsApp_Image_2026-06-04_at_23.51.52.md"
    },
    {
        id: 2,
        ref: "WhatsApp Image 2026-06-04 at 23.51.53 (5).jpeg, (12).jpeg, (15).jpeg",
        question: "Sosyal bilimlerdeki Pozitivist Yöntembilim, Yorumlayıcı Sosyal Yaklaşım ve Eleştirel Sosyal Yaklaşım paradigmalarını; veri türleri, mantık yapısı (tümden gelim/tüme varım), araştırma yolu (doğrusal/doğrusal olmayan) ve değişkenlere bakış açıları çerçevesinde karşılaştırarak açıklayınız.",
        answer: "Sosyal bilimlerdeki üç temel yaklaşımın karşılaştırması şu şekildedir:\\n1. Pozitivist Yöntembilim: Nicel (sayısal, katı, kesin) veriler kullanır. Pozitivist doğa bilimlerine güvenir, materyalisttir. Tümden gelim (deduction) yöntemini kullanır. Doğrusal araştırma yolu izler (ne yapacağı önceden bellidir, esnekliği azdır, B ve C planları yapılır). Araştırmaya değişkenler ve hipotezlerle başlar.\\n2. Yorumlayıcı Sosyal Yaklaşım: Esnek veriler (izlenimler, kelimeler, cümleler, fotoğraflar, semboller) kullanır. Bireylerin günlük yaşamlarında eylemlerine nasıl anlam yükledikleriyle ilgilenir. Tüme varım (induction) ve uygulamadaki mantığı (logic in practice) kullanır. Doğrusal olmayan (esnek) araştırma yolu izler (kervan yolda düzülür anlayışı hakimdir). Anlamlar ve bağlam (koşullar) önemlidir.\\n3. Eleştirel Sosyal Yaklaşım: Toplumdaki mevcut durumları kökten eleştirir, tahakküm ilişkilerine ve görünenin arkasındaki yapısal güç dengelerine odaklanır (Karl Marx, Sigmund Freud öncülerindendir). Pozitivistleri 'dar görüşlü olmakla, antidemokratik olmakla ve insani (insancıl) olmamakla' suçlar.",
        noteRef: "WhatsApp_Image_2026-06-04_at_23.51.53_(15).md"
    },
    {
        id: 3,
        ref: "WhatsApp Image 2026-06-04 at 23.51.53 (10).jpeg",
        question: "Sosyal bilimlerin felsefi arka planını oluşturan felsefenin dört temel alanını (Ontoloji, Epistemoloji/Metafizik, Aksiyoloji, Mantık) yazarak, her birinin hangi sorulara yanıt aradığını kısaca belirtiniz.",
        answer: "Felsefenin 4 temel alanı şunlardır:\\n1. Ontoloji (Varlık Felsefesi): Varlığı, olanı sorgular. En temel sorusu 'Ne?' sorusudur.\\n2. Bilgi Felsefesi (Epistemoloji) / Metafizik: Bilginin kaynağını, sınırlarını ve doğruluğunu sorgular. 'Bilgi nedir?', 'Nasıl biliriz?' sorularıyla ilgilenir.\\n3. Aksiyoloji (Değerler Felsefesi): Ahlaki, siyasi ve estetik değer yargılarını inceler.\\n4. Mantık: Düşünceler arasındaki yasa ve ilkeleri inceler. Tartışmanın felsefi incelemesini yapar. 'Tartışma nedir?', 'Nasıl çalışır?', 'Bir tartışmayı kötü yapan nedir?' sorularına yanıt arar.",
        noteRef: "WhatsApp_Image_2026-06-04_at_23.51.53_(10).md"
    },
    {
        id: 4,
        ref: "WhatsApp Image 2026-06-04 at 23.51.53 (10).jpeg",
        question: "Aksiyoloji (değerler felsefesi) nedir? Ders notlarında belirtilen Aksiyolojinin üç temel alt dalını yazarak neyi incelediklerini açıklayınız.",
        answer: "Aksiyoloji, değerler felsefesidir. İyiyi, doğruyu ve güzeli oluşturan değer yargılarını felsefi olarak inceler. Üç temel alt dalı şunlardır:\\n1. Ahlakın Felsefesi (Etik): Bireysel ve toplumsal ahlak kurallarını, iyi ve kötü eylemleri sorgular.\\n2. Siyasetin Felsefesi: Toplumu, iktidarı, devleti ve adalet sistemlerini sorgular.\\n3. Estetik: Güzelliğin ne olduğunu ve sanatın doğasını felsefi olarak inceler.",
        noteRef: "WhatsApp_Image_2026-06-04_at_23.51.53_(10).md"
    },
    {
        id: 5,
        ref: "WhatsApp Image 2026-06-04 at 23.51.53 (10).jpeg",
        question: "Ders notlarında mantık bilimi nasıl tanımlanmıştır? Mantık biliminin cevap aramaya çalıştığı soruları ve incelediği temel ilkeleri açıklayınız.",
        answer: "Ders notlarına göre mantık bilimi; 'tartışmanın felsefi incelemesini yapan bilim' olarak tanımlanır. Mantık bilimi: 'Tartışma nedir?', 'Nasıl çalışır?' ve 'Bir tartışmayı kötü (hatalı/geçersiz) yapan nedir?' sorularının cevabını bulmaya çalışır. Temel olarak, düşünceler arasındaki yasa ve ilkeleri inceler, akıl yürütme kurallarını kurar.",
        noteRef: "WhatsApp_Image_2026-06-04_at_23.51.53_(10).md"
    },
    {
        id: 6,
        ref: "WhatsApp Image 2026-06-04 at 23.51.53 (1).jpeg, (9).jpeg",
        question: "Bilgi felsefesinde (epistemoloji) bilginin kaynağına ilişkin iki temel kamp olan Rasyonalizm ile Empirizm (Deneycilik) arasındaki temel farkı açıklayınız. Pozitivizmin bu iki kamp ve metafizik kavramlar karşısındaki tutumunu belirtiniz.",
        answer: "1. Rasyonalizm (Akılcılık): Doğru bilginin kaynağının akıl ve mantıksal düşünce olduğunu savunur. Akılla kavranabilen metafizik dünyayla ilgilenir.\\n2. Empirizm (Deneycilik): Bilginin tek kaynağının duyu organları, deney ve gözlem yoluyla elde edilen veriler olduğunu savunur.\\n3. Pozitivizmin Tutumu: Pozitivizm, gözlem ve deneyi temel alan empirist kampı benimser. Metafiziği kesinlikle reddeder; çünkü metafizik kavramlar gözlemlenemez ve duyularla sınanamazdır.",
        noteRef: "WhatsApp_Image_2026-06-04_at_23.51.53_(1).md"
    },
    {
        id: 7,
        ref: "WhatsApp Image 2026-06-04 at 23.51.53 (9).jpeg, (10).jpeg",
        question: "Pozitifist, Konvansiyonalist (Uzlaşımcı) ve Realist bilim kuramlarının bilginin kaynağı ve gözlemin rolü konusundaki temel yaklaşımlarını karşılaştırarak açıklayınız. Konvansiyonalizme getirilen en önemli eleştiriyi belirtiniz.",
        answer: "1. Pozitifist Kuram: Maddecidir, materyalisttir. Evrenin nesnel olarak gözlemlenebileceğini ve bilginin istatistiğe, deneye dayandığını savunur.\\n2. Konvansiyonalist Kuram: Nesnel gözlemin doğrudan tarafsız veya faydalı olmadığını savunur. Merkeze nesnel dünyayı değil, bilim insanının kendi kabullerini ve teorik uzlaşılarını koyar. Buna getirilen en büyük eleştiri (Konvansiyonele tepki): 'Eğer merkeze insanı koyarsak, bilimin evrenselliği nerede kalır?' sorusudur.\\n3. Realist Kuram: Sadece dış görünüşle yetinmez, 'görünenin arkasındaki' derin yapılara, gerçek mekanizmalara ve nedenlere odaklanılması gerektiğini savunur.",
        noteRef: "WhatsApp_Image_2026-06-04_at_23.51.53_(9).md"
    },
    {
        id: 8,
        ref: "WhatsApp Image 2026-06-04 at 23.51.52 (1).jpeg",
        question: "Arthur Schopenhauer'ın 'isteme ve tasarım olarak dünya' felsefesinde insan iradesi (isteme) nasıl tanımlanmıştır? İnsanın bu isteme döngüsünden kurtulması için hoca tarafından önerilen çözüm yolunu açıklayınız.",
        answer: "Arthur Schopenhauer'a göre dünya kör bir 'isteme' (irade) ve tasarımdır. İnsan, kendi bitmek bilmeyen istemelerinin esiri ve kölesidir. Bilinçaltımız bu istemelerden oluşur ve haz peşindedir. İstemenin sonu yoktur; bir arzu tatmin edildiğinde hemen ardından bir diğeri doğar. Bu durum insanı sürekli bir acı ve doyumsuzluk döngüsünde bırakır. Hocanın önerdiği çözüm yolu: 'İstemelere karşılık vermemek, istekleri mümkün olduğunca azaltmak ve bastırmaktır.'",
        noteRef: "WhatsApp_Image_2026-06-04_at_23.51.52_(1).md"
    },
    {
        id: 9,
        ref: "WhatsApp Image 2026-06-04 at 23.51.53 (11).jpeg",
        question: "Sosyal bilimlerin temelini oluşturan ve 4. Derste 'Felsefe' ve 'Tinsel' başlıkları altında ayrılan iki büyük kampın (Materyalist ve İdealist) adlarını yazarak, temel savlarını belirtiniz.",
        answer: "Sosyal bilimlerdeki iki temel kamp şunlardır:\\n1. Felsefe (Materyalist Kamp): Maddenin birincil olduğunu, düşüncenin de maddeden türediğini savunan yaklaşımdır.\\n2. Tinsel (İdealist Kamp): Tin (ruh, düşünce, akıl) kavramının birincil olduğunu ve evrenin ruhsal bir temel üzerine kurulduğunu savunan yaklaşımdır.",
        noteRef: "WhatsApp_Image_2026-06-04_at_23.51.53_(11).md"
    },
    {
        id: 10,
        ref: "WhatsApp Image 2026-06-04 at 23.51.52 (5).jpeg, 23.51.53 (1).jpeg",
        question: "Araştırma yöntemlerinde hipotez (hypothesis) ne anlama gelmektedir? Bir tahminin hipotez olabilmesi için ne yapılması gerekir? Hipotez ile varsayım (kabul) arasındaki farkı açıklayınız.",
        answer: "Hipotez; araştırmanın başında, olaylar veya değişkenler arasında tahmin edilen geçici ilişkisel önermedir. Bir tahminin hipotez olabilmesi için 'denenmek ve sınanmak üzere yazılmış olması' gerekir. Sınanmayan veya sınanamayan yargılar hipotez değil, sadece birer varsayım (kabul) olarak kalırlar.",
        noteRef: "WhatsApp_Image_2026-06-04_at_23.51.52_(5).md"
    },
    {
        id: 11,
        ref: "WhatsApp Image 2026-06-04 at 23.51.52 (1).jpeg, (2).jpeg",
        question: "Ders notlarında geçen yönergeler doğrultusunda, bilimsel ve iyi yazılmış bir araştırmada bulunması gereken hipotezin 6 temel özelliğini maddeler halinde yazınız.",
        answer: "İyi bir hipotezin 6 temel özelliği şunlardır:\\n1. Kuramsal bir temele bağlı olmalıdır (rastgele tahmin olamaz).\\n2. Araştırmadaki tüm değişkenler (bağımlı, bağımsız, ara) hipotezde net bir şekilde görünmelidir.\\n3. Bilimsel olarak doğruluğu kanıtlanmış (bilinen) gerçeklerle zıt şeyler yazıolaramaz.\\n4. Değişkenler arası ilişkiyi ve yönünü açıkça tanımlamalıdır.\\n5. Açık, basit ve işlevsel şekilde ifade edilmeli; sınanabilir ve ölçülebilir olmalıdır.\\n6. Araştırmacının mevcut zaman ve olanaklarıyla sınanabilecek bir sınırlılıkta olmalıdır.",
        noteRef: "WhatsApp_Image_2026-06-04_at_23.51.52_(1).md"
    },
    {
        id: 12,
        ref: "WhatsApp Image 2026-06-04 at 23.51.52 (1).jpeg, 23.51.53 (1).jpeg",
        question: "Araştırma yöntemlerinde 'doğru hipotez' diye bir kavramın olamayacağını ve araştırmacının elde ettiği veriler karşısında nasıl bir tutum sergilemesi (yansızlık) gerektiğini açıklayınız.",
        answer: "Bilimsel metodolojide 'doğru hipotez' diye bir şey yoktur. Hipotez sınanmak için yazılır ve veri toplama sonucunda ya doğrulanır ya da yanlışlanır. Araştırmacının yansızlığı (objektifliği) burada devreye girer. Araştırmacı elde ettiği verilere müdahale edemez; hipotezi yanlışlansa dahi bu sonucu dürüstçe kabul etmek ve raporlamak zorundadır. Hipotez kurmak, araştırmacıyı nesnel verilere bağlı kalmaya zorlayarak yansızlığı artıran bir mekanizmadır.",
        noteRef: "WhatsApp_Image_2026-06-04_at_23.51.53_(1).md"
    },
    {
        id: 13,
        ref: "WhatsApp Image 2026-06-04 at 23.51.52 (5).jpeg, 23.51.53 (16).jpeg",
        question: "Bilimsel araştırmalarda değişken (variable) kavramı neyi ifade eder? Bağımsız değişken (etken/neden) ile bağımlı değişken (edilgen/sonuç) arasındaki farkı açıklayarak, bu değişkenlerin araştırmanın başındaki önemini belirtiniz.",
        answer: "Değişken; incelenecek kavrama ya da özelliğe denir. Olgunun kendisi değil, sahip olduğu değişebilen değerlerdir. Bağımsız Değişken: Bağımlı değişken üzerinde etki veya sonuçlar üreten sebep/neden değişkendir. Bağımlı Değişken: Bağımsız değişkenden etkilenen sonuç değişkendir. Önem: Bağımlı ve bağımsız değişkenleri araştırmanın en başında net olarak doğru tespit etmek hayati önem taşır; aksi takdirde araştırma tamamen çöker.\\n(Hocanın Darp Anekdotu: Değişkenlerin işlevsel tanımlanmasının önemini anlatırken, bir öğrencisinin araştırma sırasında yaşlı bir adama doğrudan 'Cinsiyetiniz nedir?' diye sorduğu için darp edildiğini anlatmıştır. Cinsiyet değişmez ama araştırmadaki dağılımı ölçülürken doğru sorulmalıdır).",
        noteRef: "WhatsApp_Image_2026-06-04_at_23.51.52_(5).md"
    },
    {
        id: 14,
        ref: "WhatsApp Image 2026-06-04 at 23.51.52 (5).jpeg, 23.51.53.jpeg",
        question: "Ara (aracı) değişken ne anlama gelir? Ara değişkenin bağımlı ve bağımsız değişkenler karşısındaki görünümünü ve işlevini açıklayınız.",
        answer: "Ara (aracı/düzenleyici) değişken; bağımsız değişken açısından bakıldığında bağımlı (sonuç), bağımlı değişken açısından bakıldığında bağımsız (neden) gibi görünen değişkendir. İşlevi, bağımsız değişkenin bağımlı değişkeni hangi mekanizma, süreç ve yol üzerinden etkilediğini açıklamaktır; nedensel zinciri kurar.",
        noteRef: "WhatsApp_Image_2026-06-04_at_23.51.52_(5).md"
    },
    {
        id: 15,
        ref: "WhatsApp Image 2026-06-04 at 23.51.52 (5).jpeg, 23.51.53 (17).jpeg",
        question: "Ders notlarında Selçuk Üniversitesi SELÇUKSEM antetli notlarında yer alan ve intihar oranını inceleyen örnek olaydaki bağımlı, bağımsız ve ara değişkenleri belirleyerek aralarındaki ilişki mekanizmasını açıklayınız.",
        answer: "SELÇUKSEM notlarındaki intihar örneğinde değişkenler şunlardır:\\n1. Bağımsız Değişken: Medeni Durum (Evli / Bekar)\\n2. Bağımlı Değişken: İntihar etme olasılığı / oranı\\n3. Ara Değişken: Toplumsal bütünleşme\\nİlişki Mekanizması: Evli insanların intihar etme oranı bekarlara göre düşüktür. Çünkü evlilik bağımsız değişkeni, bireyin toplumsal bütünleşmesini (ara değişken) artırır. Toplumsal bütünleşmenin artması da intihar etme olasılığını (bağımlı değişken) düşürür.\\n(Hocanın Korku Anekdotu: En büyük korkusunun 'Çocuğunun nahoş bir hayat sürmesi' olduğunu, çocuğu olan bir insanın intihar edemeyeceğini, bu sorumluluğun insanı hayata bağlayan bir 'ara değişken' olduğunu belirtmiştir).",
        noteRef: "WhatsApp_Image_2026-06-04_at_23.51.52_(5).md"
    },
    {
        id: 16,
        ref: "WhatsApp Image 2026-06-04 at 23.51.53.jpeg, (17).jpeg",
        question: "Ders notlarında ailenin dağılması ve ileride çocuğun gelir seviyesinin düşük olması arasındaki ilişkiyi açıklayan nedensel zincirdeki bağımsız değişkeni, bağımlı değişkeni ve bu sürece aracılık eden en az dört ara değişkeni yazınız.",
        answer: "Bu nedensel zincirde değişkenler şöyledir:\\n1. Bağımsız Değişken: Ailenin dağılması (parçalanmış aile)\\n2. Bağımlı Değişken: Büyüyünce gelir düzeyinin düşük olması\\n3. Ara Değişkenler: Çocuklukta özgüven azlığı, depresyon/psikolojik sorunlar, akademik başarısızlık (düşük notlar) ve iş bulma olasılığının düşük olması.\\nİlişki: Bağımsız değişken (ailenin dağılması), bu sıralı ara değişkenleri tetikleyerek nihai bağımlı değişkene (düşük gelire) yol açar.",
        noteRef: "WhatsApp_Image_2026-06-04_at_23.51.53.md"
    },
    {
        id: 17,
        ref: "WhatsApp Image 2026-06-04 at 23.51.53 (17).jpeg",
        question: "Korelasyon (ilişki) ile nedensellik (causation) arasındaki farkı açıklayarak; ders notlarında geçen internet kullanımı, depresyon ve yaşam doyumu örneği üzerinden pozitif ve negatif korelasyon kavramlarını tanımlayınız.",
        answer: "Nedensellik, bir değişkenin diğerinin doğrudan nedeni olması durumudur (sebep-sonuç). Korelasyon ise iki değişkenin birlikte değişme eğilimidir (sebep olmak zorunda değildir). Ders notlarındaki örneklere göre:\\n1. Pozitif Korelasyon (Doğru Orantı): İki değişkenin aynı yönde değişmesidir. Örnek: İnternet kullanımı arttıkça depresyon oranının da artması.\\n2. Negatif Korelasyon (Ters Orantı): Bir değişken artarken diğerinin azalmasıdır. Örnek: İnternet kullanımı arttıkça yaşam doyumunun azalması.",
        noteRef: "WhatsApp_Image_2026-06-04_at_23.51.53_(17).md"
    },
    {
        id: 18,
        ref: "WhatsApp Image 2026-06-04 at 23.51.53.jpeg",
        question: "Sosyal araştırmalarda nirengi (triangulation) ne anlama gelir? Nirenginin araştırmaya sağladığı temel faydayı belirterek, nirenginin dört ana türünü yazınız.",
        answer: "Nirengi; herhangi bir sosyal konuya, kurama veya ölçüm meselesine birden fazla bakış açısıyla bakmaktır. Temel Faydası: Tek bir yöntemin, veri kaynağının veya gözlemcinin getireceği öznelliği ve sınırlılıkları azaltarak, araştırmanın güvenilirliğini ve geçerliliğini en üst duyeye çıkarmaktır. Dört ana türü: Ölçüm/Veri Nirengisi, Gözlemci Nirengisi, Kuram Nirengisi ve Yöntem Nirengisi'dir.",
        noteRef: "WhatsApp_Image_2026-06-04_at_23.51.53.md"
    },
    {
        id: 19,
        ref: "WhatsApp Image 2026-06-04 at 23.51.53 (5).jpeg, (15).jpeg",
        question: "Ders notlarında geçen Kurtlar Vadisi dizisindeki şiddet oranının ölçülmesi örneği üzerinden ölçüm (veri) nirengisinin nasıl uygulandığını ve birden fazla ölçüt kullanmanın önemini açıklayınız.",
        answer: "Kurtlar Vadisi dizisindeki şiddet oranını sadece sahne sayısına bakarak ölçmek yetersizdir. Ölçüm nirengisi uygulamak için birden fazla kriter birleştirilir:\\n1. Şiddet sahnelerinin süreleri ölçülür (yarım saat, 45 dk, 1 saat gibi süre farkları kaydedilir).\\n2. Şiddetin dozajı/derecesi 1-5 arası (az, orta, çok) derecelendirilir.\\n3. Bu nicel ölçümlerle beraber anketler, uzman görüşleri ve izleyici analizleri birleştirilerek veri nirengisi sağlanır. Böylece tek bir ölçümün veya araştırmacının öznel hatası engellenmiş olur.",
        noteRef: "WhatsApp_Image_2026-06-04_at_23.51.53_(15).md"
    },
    {
        id: 20,
        ref: "WhatsApp Image 2026-06-04 at 23.51.53 (2).jpeg, (4).jpeg",
        question: "Goldhaber (1990) çerçevesinde örgütsel iletişimin tanımını ve içerdiği yedi anahtar kavramı yazınız. Dr. Birol Gülnar'ın Örgütsel İletişim Modeli'nde yer alan yapısal katmanları (Çevre, Kurum/Kültür, İletişim Alanı) ve bu katmanlar arasındaki etkileşimi açıklayınız.",
        answer: "Örgütsel İletişim (Goldhaber, 1990): Çevresel belirsizliğin üstesinden gelmek için birbirine bağlı ilişkiler ağı içerisinde mesajların oluşturulması ve değiştirilmesi sürecidir. 7 anahtar kavramı: süreç, mesaj, ağ, karşılıklı bağlılık, ilişki, çevre ve belirsizliktir.\\nDr. Birol Gülnar'ın Örgütsel İletişim Modeli Katmanları:\\n1. Çevre (En dış daire): Örgütün etkileşimde olduğu dış dünyadır.\\n2. Kurum / Kültür (İç dikdörtgen): Örgütün kendi iç kültürel sınırlarıdır.\\n3. İletişim Alanı (Ortadaki oval): İnsanlar ve Mesajlar arasındaki Gönderim ve Geri bildirim yatay süreçlerini içerir.\\nEtkileşim: Çevre ile kurum/kültür, kurum/kültür ile de iletişim alanı arasında dikey olarak çift yönlü oklarla (çift yönlü dikey oklar) sürekli etkileşim vardır. Örgüt, çevresel belirsizlikleri bu dinamik çift yönlü etkileşim sayesinde yönetir.\\nİletişim Doyumu - İş Doyumu Korelasyonu: Hoca'nın kitabının temel hipotezi: 'İletişim doyumu ile iş doyumu arasında pozitif bir ilişki vardır.' İletişim doyumunun yüksek olması belirsizliği azaltarak ve geri bildirimle çalışanı değerli hissettirerek iş doyumunu doğrudan artırır.",
        noteRef: "WhatsApp_Image_2026-06-04_at_23.51.53_(4).md"
    }
];
const RAW_NOTES = {
    "WhatsApp_Image_2026-06-04_at_23.51.52_(3).md": `
# Transcription of WhatsApp Image 2026-06-04 at 23.51.52 (3).jpeg

## Background Fragments (Partially Visible Papers at the Top)

### Top Left Paper
* \`değişkenler\`
* \`örnekler\`

### Top Right Paper
* \`İletişim Doyumu\`
* \`Hipotez ve Değiş...\`
* \`... Araştı...\`

---

## Main Content

İletişim Doyumu: Çalışanların örgüt içindeki iletişim kanallarının etkililiği, açıklığı, güvenirliği ve katılımcılığına yönelik memnuniyet düzeyidir.

Çalışanların motivasyonunu, iş tatminini ve örgütsel bağlılığını artırır.

İş Doyumu: Çalışanların işlerine ve çalışma ortamlarına yönelik tepkileridir.

Yüksek iş doyumu çalışanların performansını, bağlılığını artırır.

İletişim Doyumu ile iş doyumu arasındaki korelasyon;

Kitaba göre; Çalışanların iş tatminini, etkili bir örgütsel iletişim etkiler.

Açık ve güvenilir iletişim, çalışanların işlerine yönelik belirsizlikleri azaltır.

Düzenli geri bildirim, çalışanların kendilerini değerli hissetmelerini sağlar.
`,
    "WhatsApp_Image_2026-06-04_at_23.51.52_(4).md": `
# Transcription of WhatsApp Image 2026-06-04 at 23.51.52 (4).jpeg

## Background Fragments (Partially Visible Papers at the Top)

### Top Left Paper
* \`değişkenler\`
* \`örnekler\`

### Top Right Paper
* \`İletişim Doyumu\`
* \`Hipotez ve Değiş...\`
* \`... Araştı...\`

---

## Main Content

İletişim Doyumu: Çalışanların örgüt içindeki iletişim kanallarının etkililiği, açıklığı, güvenirliği ve katılımcılığına yönelik memnuniyet düzeyidir.

Çalışanların motivasyonunu, iş tatminini ve örgütsel bağlılığını artırır.

İş Doyumu: Çalışanların işlerine ve çalışma ortamlarına yönelik tepkileridir.

Yüksek iş doyumu çalışanların performansını, bağlılığını artırır.

İletişim Doyumu ile iş doyumu arasındaki korelasyon;

Kitaba göre; Çalışanların iş tatminini, etkili bir örgütsel iletişim etkiler.

Açık ve güvenilir iletişim, çalışanların işlerine yönelik belirsizlikleri azaltır.

Düzenli geri bildirim, çalışanların kendilerini değerli hissetmelerini sağlar.
`,
    "WhatsApp_Image_2026-06-04_at_23.51.52_(5).md": `
# Transcription of WhatsApp Image 2026-06-04 at 23.51.52 (5).jpeg

## Background Fragments (Partially Visible Papers at the Top)

### Top Left Paper
* \`değişkenler\`
* \`örnekler\`

### Top Right Paper
* \`İletişim Doyumu\`
* \`Hipotez ve Değiş...\`
* \`... Araştı...\`

---

## Logo / Header
* **SELÇUKSEM | SELÇUK ÜNİVERSİTESİ** (Sürekli Eğitim Merkezi)
* Selçuk Üniversitesi double-headed eagle emblem.

---

## Main Content

### Değişkenler ve Hipotezler

**Değişken :** İncelenecek kavrama ya da özelliğe denir.

**Bağımsız Değişken:** Bağımlı bir değişken üzerine etki veya sonuçlar üreten neden değişkendir.

**Bağımlı Değişken:** Bağımsız değişkenden etkilenen sonuçtur.

**Ara Değişken:** Bağımsız değişken tarafından bakınca bağımlı, bağımlı değişken tarafından bakınca bağımsız gibi görünür.

**Ör;**
Evli insanların intihar etme olasılığı bekarlara oranla daha düşüktür.
* **Bağımsız değişken:** Medeni durum
* **Bağımlı değişken:** İntihar olasılığı
* **Ara değişken:** Toplumsal bütünleşme

---

### Hipotez :

Araştırmanın en başında olaylar arası tahmin edilen ilişkiye denir.
Denenmek, sınanmak üzere yazılır. Denenmezse varsayım olur.
Kitabın hipotezi; iletişim doyumu ile iş doyumu arasında pozitif ilişki ön g... (*Note: Cut off at the edge of the paper*).

---

## Footer
* $\\boldsymbol{\\mathcal{\\sigma}}$ 332.606 05 62 | $\\triangle$ selcuksem@selcuk.edu.tr
* $\\boxed{\\text{F}}$ 332.606 05 62 | $\\mathcal{W}$ https://selcuksem.selcuk.edu.tr
`,
    "WhatsApp_Image_2026-06-04_at_23.51.52.md": `
# Transcription of WhatsApp Image 2026-06-04 at 23.51.52.jpeg

## Top Left
* \`[Liberaller]\`
* \`[+ Kominist]\`
* \`[Oligarşi] )))\`

---

## Main Content

### [Header in Red Ink]
**Sosyal bil**
**6. hafta** (underlined)

---

### [Text]
... Belli yöntemlere uygun veriler üretme, bilgileri üretmek ve sürekli sorgulama sürecidir.
"Kendi kendini sürekli sorgulamasıdır."

Gözlenebildiği fenomeni tanımlamak, açıklamak için çalışır.

> **[Side note in small text on the right]**
> 3 madde var
> sorusu böyle
> 
> 3
> tek
> soru
> nedir.

Bilim nesnel mantıksal tutarlıdır.
Bulgulara dayanarak ileriyi tahmin etme.
ve ilerlemek için önermelerde bulunma.

Yöntembilim üstün yanlarını sınırlılıklarını başarıları için ara bilimsel...

* **[Enclosed in a bracket pointing from "Pozitif bilimden"]**
  Pozitif bilimden
  $\\rightarrow$ üstün yanları sınırlılıkları inceleyen başarılar ve başarısızlıklar için yapısal nedenler öne sürerler.

> **[Side note on the right]**
> Field Ressearch
> $\\rightarrow$ Alan Araştırması

Bilimsel Süreçler hakkında genellemeler yapan

---

### [Table]

| Pozitifist Yöntembilimi | Yorumlayıcı y.b. | Eleştirel y.b. |
| :--- | :--- | :--- |
| kesin nedensel | y.b. | y.b. |
| İstatistik Final | | |

*(Note: Brand name "Keskin Color" printed at the bottom-left).*
`,
    "WhatsApp_Image_2026-06-04_at_23.51.52_(1).md": `
# Transcription of WhatsApp Image 2026-06-04 at 23.51.52 (1).jpeg

## Left Page

* Hipotezi araştırmanın başında yaparsın.
* Veri toplamayı sistemleştirir.
* herbir sorunun bir amaca hitap etmesi lazım.
* fikirlerin ve kavramların sınanmasını sağlar.
* Kuram geliştirmeye yardım eder.
* Araştırmanın sınanmasını [uygulamaya - *crossed out*] zorlaşması ile yansızlığı arttırır.

> **[Side note on the right of the left page]**
> hoca Anadolu üni. iletişimden mezun.
> en iyi tez bitirme tezidir.
> Ben idealist görünürüm ama pragmatistim.

* [Enclosed in a bracket]
  Her tarafı eşit araştırırsan Doğru sonuca ulaşırsın.
  * **[In Red Ink]** Doğru hipotez [yoktur - *crossed out*]

* Kuramsal bir temele bağlı olmalıdır.
* Ara değişken varsa net görünmelidir.
  $\\rightarrow$ yani tüm değişkenler görülmeli.

* [İyice - *crossed out in blue*] bilinenlerle zıt şeyler yazamazsın.
* değişkenler arası ilişkisi tanımlamalıdır.
* Mevcut zaman ve olanaklarla sınanabilecek sınırlı-lıkta olmalıdır.
* Açık basit ve işlevsel şekilde ifade edilmelidir.
  * $\\rightarrow$ [değişkenler - *crossed out*]
  * $\\rightarrow$ sınanabilir, ölçülebilir olması.

*(Note: Brand name "Keskin Color" printed at the bottom-left).*

---

## Right Page

* "Tanımlamalarımızı olabildiğince işlevsel yapmalıyız."
  $\\rightarrow$ hipotezlerde böyle.

---

* Sınavda 5 soru gelir.
* Hipotezler / değişkenler

> **[Boxed note on the right]**
> bu notlardan 42 (say)

* kitaptan yazılmış hipotezlere bir bakarım ben.
* iletişim ve iş doyumu bak.

---

### [Header in Red Ink]
**Felsefe** (underlined)

**Schopenhauer**
19. yy. sonu Yüzyılıdır.
$\\rightarrow$ isteme ve tasarım olarak dünya
İnsan istemelerinin esiri olur, kölesine dönüşür.
bilinçaltı istemedir hazlarla ilgilidir.

> **[Side note on the right]**
> istemesi bitmeyecek biraz sonra tekrar isteyecek.
> 
> istemenin sonu yok napıcaz?
> $\\rightarrow$ istemelerine karşılık vermemek mümkün oldukça azaltılacak.

*(Note: Brand name "Keskin Color" printed at the bottom-right).*
`,
    "WhatsApp_Image_2026-06-04_at_23.51.52_(2).md": `
# Transcription of WhatsApp Image 2026-06-04 at 23.51.52 (2).jpeg

## Header
**sosyal bilim** (in red ink)

---

## Main Content

* hipotez demek sınanmak üzere yazılır.
  * **[Enclosed in an arrow pointing from the line above]**
    $\\rightarrow$ hipotez ya doğrulanır ya yanlışlanır.

* iletişim doyumu ile iş doyumu arasında pozitif bir ilişki vardır.
  * **[Enclosed in a bracket pointing from the line above]**
    $\\rightarrow$ hocanın kitabının hipotezi

* tahminin bir temeli olmalı
  1. kuramsal önermeler bunu söyler.
  2. çeşitli çalışmalarda gösterilmiş.
  3. 

> **[Side note on the right of the list]**
> 2010'larda [larda - *crossed out*]
> döviz tahminleri tutuyordu.
> Şimdi belirsiz değil tutmuyor.

* Geçici olarak kabul edilen yargısal bir ilişkidir.
* Bütün mesele ölçebilmek | Araştırma Tasarımı nirengi noktası (nok-tası) [türk]
* Araştırmacı her aklına geleni hipotez diyemez.

> **[Side note on the right]**
> hem Özbekistan hem Türkiye de olacak bir Araştırmada geçiyormuş.

* ispatlanmıştır denmez.

*(Note: Brand name "Keskin Color" printed at the bottom-right).*
`,
    "WhatsApp_Image_2026-06-04_at_23.51.53_(3).md": `
# WhatsApp Image 2026-06-04 at 23.51.53 (3)

**SELÇUKSEM | SELÇUK ÜNİVERSİTESİ**

---

### Değişkenler ve Hipotezler

*   **Değişken:** İncelenecek kavrama ya da özelliğe denir.
*   **Bağımsız Değişken:** Bağımlı bir değişken üzerine etki veya sonuçlar üreten neden değişkenidir.
*   **Bağımlı Değişken:** Bağımsız değişkenden etkilenen sonuçtur.
*   **Ara Değişken:** Bağımsız değişken tarafından bakınca bağımlı, bağımlı değişken tarafından bakınca bağımsız gibi görünür.

**Ör:**  
Evli insanların intihar etme olasılığı bekarlara oranla daha düşüktür.  
*   **Bağımsız değişken:** Medeni durum  
*   **Bağımlı değişken:** İntihar olasılığı  
*   **Ara değişken:** Toplumsal bütünleşme  

**Hipotez:**  
Araştırmanın en başında olaylar arası tahmin edilen ilişkiye denir.  
*   Denenmek, sınanmak üzere yazılır. Denenmezse varsayım olur.  
*   Kitabın hipotezi, iletişim doyumu ile iş doyumu arasında pozitif ilişki öngörür.

---
*İletişim Bilgileri (Sayfa Alt Bilgisi):*
*   332.606 05 62
*   selcuksem@selcuk.edu.tr
*   332.606 05 62
*   https://selcuksem.selcuk.edu.tr

---
*Arka Planda Görünen Kısmi Metinler (Zarf/Broşür):*
*   İletişim Doyumu
*   Hipotez ve Değişkenler
*   ...gi, Araştırma
*   www.selcuk.edu.tr / selcuksem.selcuk.edu.tr (kısmen görünmektedir)
`,
    "WhatsApp_Image_2026-06-04_at_23.51.53_(4).md": `
# WhatsApp Image 2026-06-04 at 23.51.53 (4)

**Dr. Birol GÜLNAR**

duygularını, ilişkilerini ve becerilerini kapsar. Bu önermeler şekil 1'de görülmektedir. Bu işlevsel model örgütsel iletişimin tanımının oluşmasına önderlik eder: Örgütsel iletişim; çevresel belirsizliğin üstesinden gelmek için birbirine bağlı ilişkiler ağı içerisinde mesajların oluşturulması ve değiştirilmesi sürecidir. Örgütsel iletişimin bu algılaması yedi anahtar kavramı içerir: süreç, mesaj, ağ, karşılıklı bağlılık, ilişki, çevre ve belirsizlik (Goldhaber, 1990: 16).

### Şekil 1: Örgütsel İletişim Modeli

\`\`\`mermaid
graph TD
    subgraph Cevre_Daire [Çevre - Daire Sınırı]
        subgraph Kurum_Kultur_Kutu [Kurum / Kültür - Dikdörtgen Sınırı]
            subgraph Oval_Iletisim [İletişim Alanı]
                Insanlar([İnsanlar])
                Mesajlar([Mesajlar])
                Insanlar -->|Gönderim| Mesajlar
                Mesajlar -->|Geribildirim| Insanlar
            end
        end
    end

    Cevre_Ust[Çevre] <=> Kurum_Kultur_Ust[Kurum / Kültür]
    Kurum_Kultur_Ust <=> Oval_Iletisim
    Oval_Iletisim <=> Kurum_Kultur_Alt[Kurum / Kültür]
    Kurum_Kultur_Alt <=> Cevre_Alt[Çevre]

    style Cevre_Daire fill:none,stroke:#333,stroke-width:2px
    style Kurum_Kultur_Kutu fill:none,stroke:#333,stroke-width:2px
    style Oval_Iletisim fill:none,stroke:#333,stroke-dasharray: 5 5
\`\`\`

#### Şema Açıklaması (Metinsel Görselleştirme)

*   **Büyük Dış Daire:** Çevre
*   **İçteki Büyük Dikdörtgen:** Kurum / Kültür
*   **Ortadaki Oval Alan:** İletişim Süreci
    *   **Sol Bölüm:** İnsanlar
    *   **Sağ Bölüm:** Mesajlar
    *   **Yönlendirmeler:**
        *   İnsanlar'dan Mesajlar'a sağa doğru bir yatay ok ($\\rightarrow$)
        *   Mesajlar'dan İnsanlar'a sola doğru bir yatay ok ($\\leftarrow$)
*   **Dikey Etkileşimler (Çift Yönlü Oklar $\\updownarrow$):**
    *   En üstte **Çevre** ile üstteki **Kurum/Kültür** arasında çift yönlü dikey ok.
    *   Üstteki **Kurum/Kültür** ile ortadaki **Oval Alan (İnsanlar-Mesajlar)** arasında çift yönlü dikey ok.
    *   Ortadaki **Oval Alan (İnsanlar-Mesajlar)** ile alttaki **Kurum/Kültür** arasında çift yönlü dikey ok.
    *   Alttaki **Kurum/Kültür** ile en alttaki **Çevre** arasında çift yönlü dikey ok.

---
**Kaynak:** Goldhaber, G. M. (1990). *Organizational Communication*. Dubuque, IA: Wm. C. Brown. s: 16

---
**42**
`,
    "WhatsApp_Image_2026-06-04_at_23.51.53_(17).md": `
Evli insanların intihar oranları bekarlara göre yüksektir. / düşüktür.

* Bağımsız değişken = Medeni durumu
* Bağımlı değişken = İntihar oranı
* Ara değişken = toplumsal bütünleşme

$\\rightarrow$ Evlilikte toplumsal bütünleşme daha fazladır.

---

| | |
| :--- | :--- |
| örneğin bir suça yönelik davranış, buna neden olan 4 b.d.<br>1-) ekonomik darlık,<br>2-) Gelecekte suç işleme fırsatı,<br>3-) Sapkın geçmişi varsa<br>4-) Cezaların caydırıcı olmaması,<br><br>$\\rightarrow$ bağımsız<br>**Ailenin dağılması / çocuk**<br>$\\rightarrow$ ara değişken<br>* çocuklukta özgüven azlığı<br>* depresyon<br>* Akademik başarısızlık<br>* iş bulma olasılığının düşüklüğü<br><br>$\\rightarrow$ Bağımlı<br>**Büyüyünce gelir düzeyi düşük olacak.** | 33 yaşında askere gitmiş. Orda doktor dışlanmış. Orduda sinemacı olmuş. hayattaki en büyük korkum şu: çocuğunun istemediği nahoş bir hayat sürmesi korkusu. çocuğun olduğu için hayattan kopmayı düşünemezsin. Bunu sorarsan buda Ara değişkendir şimdi.<br><br>ülkenin %89'unun 10.000 TL bankada bulunmuyor. Bankalardaki mevduatın %78'i %1'in elindeymiş. |

---

Yüzde 90 bağımlı, bağımsız d. bahsederiz.

Tereddütte kaldığında hangisi hangisini etkiler düşün. / Sebep olur.

bazende sadece birbirini etkiler buna korelasyon deriz.
(negatif korelasyon)
İnternet arttıkça kullanımı depresyon artıyor.
"       "         Yaşam doyumu "
(pozitif korelasyon)

bu örnekte sebep olmaz sadece ilişki olur.
Nedensel ilişki olmalı ba- bağımsız d. ..

$\\rightarrow$ Doğru orantı varsa + korelasyon.
Biri artar diğeri azalırsa - korelasyon.

Bir yerde belirleyici geçiyorsa dur Sor.
Burada bağımlı bağımsız değişken vardır.

İletişim doyumuna Sermayenin
iş / Serbest belki de

**Nirengi**
`,
    "WhatsApp_Image_2026-06-04_at_23.51.53_(2).md": `
# WhatsApp Image 2026-06-04 at 23.51.53 (2)

---

*   **Geri Bildirim**  
    Mesajın doğru anlaşılıp anlaşılmadığını gösterir.

*   **İletişim Engelleri**  
    İletişimi bozan unsurlardır; gürültü, jargon farklılığı, değer, Psikolojik engeller, statü farkı

*   **Resmi ve Gayri Resmi İletişim**  
    *   Resmi iletişim: Yazılı bildiriler
    *   Gayri Resmi: Dedikodu

---

**İletişim Doyumu:** Çalışanların örgüt içindeki iletişim kanallarının etkililiği, güvenirliliği ve katılımcılığına yönelik memnuniyet düzeyidir.  
Çalışanların iş tatminini, örgütsel bağlılığını artırır.

**İş Doyumu:** Çalışanların işlerine ve çalışma ortamlarına yönelik tepkileridir.

**İletişim Doyumu ile İş Doyumu arasındaki korelasyon:**  
Çalışanların iş doyumunu, etkili bir iletişim doyumu etkiler.
`,
    "WhatsApp_Image_2026-06-04_at_23.51.53_(5).md": `
# WhatsApp Image 2026-06-04 at 23.51.53 (5)

*(Defterin Sol Sayfası)*

Kurtlar Vadisi gibi yapımlar şiddet içeriyor dedin insanların böyle yapımların etkilediğine yönelik şiddet içeriklerini ölçersin birinde 7 birinde 5 diğerinde 3'lük nirengi burada devreye girer. Bir yarım saat biri 45 dk biri bir saatte aslında bunları ölçmelerini beklemek. Nirengi bu işe yarıyor. Bunu yetersiz sahnedeki şiddet oranlarına bakmak lazım şiddeti oranlamak lazım mesela 1-5 arası az orta çok gibi burada tek yapamazsın. Arkadaşın o nedenle yapacak ki. Başkaca sonuca ulaşasın ölçüm nirengisi budur.

---

#### Gözlemci Nirengi
Birden fazla gözlemci kullanarak böylece ulaşılır güveni test etmek için kullanılır.

---

#### Kuram nirengisi:
Araştırma yaparken ve verileri yorumlarken

---

#### Yöntem Nirengisi:
Nicel ve nitel araştırma tarzlarının birlikte kullanılması

*(Sayfa Altı Markası: Keskin Color)*

---

*(Defterin Sağ Sayfası)*

### Araştırmada nicel ve nitel ....

| nicel y. | ve nitel y. |
| :--- | :--- |
| - Katı veriler kullanılır.<br>sayı gibi veriler kullanır. | - Esnek veriler kullanılır.<br>izlenimler, kelimeler, cümleler fotoğraflar bulunur ve semboller |
| - Pozitivist sosyal bilime güvenir. | - Yorumlayıcı veya sosyal bilime, eleştirel sosyal bilime güvenir. |
| - Yeniden oluşturulmuş mantık kullanır.<br>$\\downarrow$<br>**Tümden gelim**<br>metotta genel hatları vardır zaten | - uygulamada mantık kullanır.<br>$\\downarrow$<br>net bir soru, net bir şey yoktur.<br>**Kervan yolda düzülür** |
| - doğrusal araştırma yolunu izler.<br>$\\downarrow$<br>Ne yapacağı bellidir. $\\rightarrow$ daha az esnektir. (B, C planı yaparız biz) | - doğrusal olmayan yolu izler.<br>$\\downarrow$<br>ne yapacağı belli değildir. $\\rightarrow$ (Süpriz) |
| - değişkenler ve hipotezlerden başlar. | - olaylar ve bağlam önemlidir.<br>hangi koşulda olduğu önemli. |

*(Sayfa Altı Markası: Keskin Color)*
`,
    "WhatsApp_Image_2026-06-04_at_23.51.53_(8).md": `
Örgütsel iletişimin gelişimi; endüstriyel psikolojinin, sosyal psikolojinin, örgütsel davranış ve yönetim biliminin gelişimine eşlik etmiştir. Bu nedenle bu alandaki uzmanlar örgütsel iletişim çalışanlarının tipik olarak türettikleri egemen teorileri, kavramları ve konuları biçimlendirmişlerdir. Örgütsel iletişim üç ana sözlü iletişim geleneğini geliştirmiştir: (1) Topluluğa hitap etme, (2) ikna ve (3) bireylerarası, küçük grup ve kitle iletişimi üzerinde sosyal bilim araştırması. İletişim ve örgütün her ikisinin tanımı da araştırma konularını biçimlendiren gelenekler kadar farklıdır. Çünkü tanımlar çeşitli teorik varsayımları ve kavramları yansıtmaktadır (Putnam, 1982: 193). Konuyla ilgili ilk metinlerde, iletişim tanımları açıkça medya (araç) eksenine odaklanmakta ve mesaj yazımının tamlığı ve netliği araştırmayı biçimlendirmekteydi (McMurry, 1965: 131).
`,
    "WhatsApp_Image_2026-06-04_at_23.51.53_(9).md": `
...leşmiş bulunurlar → Bilim felsefesi verileri

Epistemeler
     ↓
Sosyal bilim

5. hafta
bilgi nedir? → Akıl yoluyla veririz
             → Duyu yoluyla veririz.
                 -) Deneycilik

Rasyonalistler / Empiristler

Klasik Epistemoloji
    -) gelenekselcilik

Pozitifist / Konvansiyonalist / Realizm
    ↓ (Pozitifist)
    maddecidir.
    materyalisttir.

    ↓ (Konvansiyonalist)
    gözlemin faydasızlığını
    savunur
        ↓
        merkeze gözlemi değil
        bilimadamını, merkeze koyar

    ↓ (Realizm)
    görülenin arkasındakine
    bakarız

---
*Notebook Brand:* Keskin Color
`,
    "WhatsApp_Image_2026-06-04_at_23.51.53_(6).md": `
İletişim kurumlarda pek çok işlevleri yerine getirir. Örgütsel bağlamda iletişim altı işlevi yerine getirir. Bu işlevler; bilgi verme, düzenleme, bütünleş(tir)me, yönetim, ikna etme ve sosyalleştirmedir (Richmond vd., 2005: 25):
`,
    "WhatsApp_Image_2026-06-04_at_23.51.53_(7).md": `
Zaman boyutu
Amac boyutu
Kullanim boyutu
Pozitif yontem bilim
Genel kavramlar
Hipotez bağımlı bağımsız değişken
`,
    "WhatsApp_Image_2026-06-04_at_23.51.53_(10).md": `
-> Konvansiyonele tepki

         Bilim
           ↓
Merkeze insanı koyarsak evrensellik nerde?

4 temel felsefe alanı var biri bilim felsefesi
                              -----

Diğeri bilgi felsefesi / metafizik felsefesi
                         ------------------

Ontoloji olanı sorar (Varlık felsefesi) Ne? Sorusu

3. Aksiyoloji (Değerlerin felsefesi)

Etik, 3'e ayrılır.

Ahlakın felsefesi    Siyasetin felsefesi    Estetik
                             ↓                 ↓
                          toplumun          güzelliğin
                                            felsefi
                                            incelemesi

4. Mantık
    tartışmanın felsefi incelemesini yapan bilime
    mantık denir.
        Tartışma nedir?
        // nasıl çalışır?
        Bir // kötü yapan nedir?
    Sorularının cevabını bulmaya çalışır.

    Düşünceler arasındaki yasa ve ilkeleri inceler.

---
*Notebook Brand:* Keskin Color
`,
    "WhatsApp_Image_2026-06-04_at_23.51.53_(11).md": `
- Sosyal bil.-

4. Ders
-------

Felsefe         Tinsel
materyalist     idealist
`,
    "WhatsApp_Image_2026-06-04_at_23.51.53.md": `
# WhatsApp Image 2026-06-04 at 23.51.53

**SELÇUKSEM | SELÇUK ÜNİVERSİTESİ**

---

**Nirengi:** Herhangi bir sosyal konuya ve ölçüm meselesine birden fazla bakış açısıyla bakmaya denir.

*   **Ölçüm Nirengisi:** Nicel Araştırma, farklı kaynaklardan veri toplamak *(Güvenilirlik +)*
*   **Gözlemci Nirengisi:** Nitel Araştırma, farklı kişilerin gözlem yapması *(öznellik -)*
*   **Kuram Nirengisi:** Birden fazla kuramsal perspektif kullanımı *(Çok boyutlu analiz)*
*   **Yöntem Nirengisi:** Nitel ve Nicel verilerin birlikte kullanımı *(derinlik sağlar)*

---

*   **Bağımsız Değişken:** Bağımlı bir değişken üzerine etki veya sonuçlar üreten neden.
*   **Bağımlı Değişken:** Bağımsız değişkenden etkilenen sonuçtur.
*   **Ara Değişken:** Hem neden hem sonuç olabilir.

*   **Ailenin Dağılması:** bağımsız değişken
*   **Suça Yatkınlık:** bağımlı değişken
*   **Özgüven azalması, depresyon, düşük notlar, düşük gelir, iş bulma zorluğu...** [Ara değişken örnekleri]

---
*İletişim Bilgileri (Sayfa Alt Bilgisi):*
*   332.606 05 62
*   selcuksem@selcuk.edu.tr
*   332.606 05 62
*   https://selcuksem.selcuk.edu.tr
`,
    "WhatsApp_Image_2026-06-04_at_23.51.53_(1).md": `
# WhatsApp Image 2026-06-04 at 23.51.53 (1)

**SELÇUKSEM | SELÇUK ÜNİVERSİTESİ**

---

### - Felsefi iki kamp
*   **Rasyonalizm ve Pozitivizm**
*   Bilginin kaynağı rasyonalizme göre akıl ve mantıksal düşünce
*   Pozitivizme göre gözlem ve deney

Pozitivizm metafiziği reddeder. Gözlemlenemezler çünkü.  
Rasyonalizm metafizik kavramlarla ilgilenir.

---

### - Hipotez
*   Denenmek, sınanmak üzerine yazılır. Denenmezse varsayım olur.
*   Kişisel yargılara değil verilere dayanmak zorundadır.
*   Bu yüzden araştırmacı sonuç ne çıkarsa çıksın ona müdahale edemez.
*   Yanlışlansa bile bunu kabul etmek zorundadır.

---

### İletişim Türleri
*(Sayfa solunda dikey olarak "İletişim Türleri" yazmaktadır ve aşağıdaki Örgütsel İletişim maddelerini kapsamaktadır)*

*   **Örgütsel İletişim**
    *   **Dikey İletişim:**
        *   Yukarıdan - Aşağıya: emir veya bilgi akışı
        *   Aşağıdan - Yukarıya: öneri, şikayet
    *   **Yatay İletişim:** Aynı düzeydeki çalışanlar arası bilgi akışı
    *   **Çapraz İletişim:** Hiyerarşi farklı ama işlevsel olarak bağıntılı

*   **İletişim Kanalları**
    *   **Sözlü İletişim:** Toplantı, yüz yüze
    *   **Yazılı İletişim:** e-posta, rapor
    *   **Görsel İletişim:** Sunumlar
    *   **Dijital İletişim:** Mesajlar / uyg. (uygulamalar)

---
*İletişim Bilgileri (Sayfa Alt Bilgisi):*
*   332.606 05 62
*   selcuksem@selcuk.edu.tr
*   332.606 05 62
*   https://selcuksem.selcuk.edu.tr
`,
    "WhatsApp_Image_2026-06-04_at_23.51.53_(12).md": `
<!-- [Redacted / Pixelated text at the top of the page] -->

# 7. Hafta
## Sosyal Bilim

Agust ... Pozitif bilimlerin kurucusu

Yorumlamacı Sosyal Yaklaşım

Bir diyalogu yazılı sözcüklerin okunmasına yada incelenmesine o..

Bir araştırmacı...
Bir düzine insanları bir yıl izlerken anketle mülakatla
verileri toplarken buna karşılık pozitif
Bir araştırmacı binlerce insanla birlikte
nicel araştırmacı tek bir cümleyle ifade
edebilir.

---

insanların nasıl birbirleriyle etkileşim
kurduklarını inceler

Eleştirel Sosyal yaklaşım
Karl Marx / Sigmund Freud

Pozitif yaklaşım dar görüşlü olmakla
anti demokratik ve insancıl değil diye eleştirilir
ler

ölçek ekonomisi
ürün çok olursa düşük adet başı fiyat
`,
    "WhatsApp_Image_2026-06-04_at_23.51.53_(15).md": `
Kurtlar Vadisi gibi yapımlar şiddet içeriyor dedin
insanların böyle yapımlardan etkilendiğine yönelik
şiddetini ölçersin birinde 7
birinde 5 diğerinde 3'lük nirengi
burada devreye girer. Bir yarım saat bir
45 dk biri bir saatte aslında bunlara
bakılarak. Nirengi bu işe yarar
Bununla yetinmeyip sahnedeki şiddet oranına
bakmak lazım. Şiddeti oranlamak lazım mesela
1-5 arası, az orta çok
gibi burada tek yapamazsın. Anketle de uzmanlarla
yapılacaksa. Başka bir sonuca ulaşacaksın
ölçüm nirengisi budur.

### Gözlemci Nirengi
Birden fazla gözlemci kullanarak sonuca ulaşılır
güveni test etmek için de kullanılır

### Kuram nirengisi
Araştırma kuramları ve verileri yorumlarken

### Yöntem Nirengisi
Nicel ve nitel araştırma tarzlarının
birlikte kullanılması

---

## Araştırmada Nicel ve Nitel ...

| nicel y. | ve nitel y. |
| :--- | :--- |
| - Kesin veriler kullanır<br>sayı gibi veriler<br>kullanır. | - Esnek veriler kullanır<br>izlenimler, kelimeler cümleler<br>fotoğraflar kullanır ve semboller |
| - Pozitivist<br>sosyal bilime güvenir | - Yorumlayıcı veya sosyal<br>bilime eleştirel sosyal<br>bilime güvenir |
| - yeniden oluşturulmuş<br>mantık kullanır.<br>$\\rightarrow$ tümdengelim<br>Masada genel hatları<br>vardır zaten | - uygulamadaki mantık<br>kullanır.<br>$\\rightarrow$ net bir Soru<br>net bir şey yoktur.<br>Kervan yolda düzülür |
| - doğrusal araştırma<br>yolu izler<br>$\\rightarrow$ Ne yapacağı<br>bellidir. $\\rightarrow$ | - doğrusal olmayan<br>yolu izler<br>$\\rightarrow$ ne yapacağı<br>belli değildir.<br>Syf $\\rightarrow$ |
| daha az esnektir<br>B, C Planı yaparız biz | |
| - değişkenler ve<br>hipotezler kullanır | - anlamlar ve bağlam<br>önemlidir.<br>hangi koşulda olduğu<br>önemlidir. |
`,
    "WhatsApp_Image_2026-06-04_at_23.51.53_(16).md": `
# Sosyal Bil.

## Değişken meselesi

| | |
| :--- | :--- |
| Önce betimleyin<br>ne olduğunu açıklamaya çalışınız.<br>Sonra değişkenlerini ortaya koyunuz. | enflasyon<br>faiz arasında<br>değişken var mı<br>hangisi etken değ.<br>hangisi edilgen değ. |

$\\rightarrow$ değişen aslında o olgunun kendisi değildir. sahip oldukları değişir.

| | |
| :--- | :--- |
| incelenecek kavramın yada özelliğe değişken diyoruz. | Cinsiyetin kendisi değişmez.<br>Karşıda yaşlı adama cinsiyetin ne diye sormuş darp edilmiş hocanın öğrencisi |

\`\`\`
┌───────────────────┐
│ Bağımsız değişken │
│ bağımlı    //     │
│ Ara        //     │
└───────────────────┘
\`\`\`

Bağımsız değişkenden etkilenen değişkene bağımlı değişken denir.

Bağımlı bağımsız değişkeni en başta tespit etmezsen Araştırma çöker.

iş yerlerindeki taciz oranlarının Cinsiyet üstündeki
destek
(Bağımsız $\\rightarrow$ Cinsiyet, Bağımlı $\\rightarrow$ destek)

---

İstanbul'da kediyi öldürdüler mezarını deştiler.
Bazen şiddet çok sözeldir. Bunlar başka bir şeyden anlamazlar. Son sözü "Eyvallah Kardeşim" olmuş çocuğun.

Bilimle yönetemediğiniz yerler olunca / Araştırmacılar

Bence iki kapıcı getireceğine Türk İslam coğrafyasından insan getirin. Bunlar çok iyi tarım yaparlar.

$\\rightarrow$ burada bağımlı değişken doğum oranlarının düşüşüdür, bağımsız değişken kadınların iş yerindeki etkisi.
ülkende umut görürsen çocuk yaparsın.

Bağımsız değişkenden etkilenen bağımlı değişken denir.

Bağımlı d. ile bağımsız d. arasındaki yol ve bu değişkenler aracılığıyla işlediği değişkendir.

| | |
| :--- | :--- |
| Bağımsızdan bakarsan<br>" gibi | Bağımlıdan bakarsan<br>" gibi görünür. |

~~Şu insan~~
`,
    "WhatsApp_Image_2026-06-04_at_23.51.53_(13).md": `
<!-- [Redacted / Pixelated text at the top of the page] -->

# Sosyoloji

Yorumlayıcı araştırmacı
bir düzine insanla bir yıl yaşarken ve onların Gündelik
yaşamlarında nasıl anlam belirttiklerini kendi eylemlerine
maksadıyla büyük miktarda ayrıntılı veri toplarken
Buna karşılık makrososyolojik araştırmacılar binlerce
insanla olan seçilmiş nicel özellikleri

---

İkinci biçimde ölçekler ve istatistikler
kullanılarak
insanların Nasıl etkileşim kurduklarıyla
ilgilenir.

Eleştirel y.

Herkesi eleştirir. Pozitifçiler Dar görüşlü
anti demokratik insancıl değildir.

<!-- [Redacted / Pixelated text at the bottom of the page] -->
`,
    "WhatsApp_Image_2026-06-04_at_23.51.53_(14).md": `
# Sosyal Bil.

| Sol Sütun | Sağ Sütun |
| :--- | :--- |
| **Nirengi** | ölçemediğim şeyden<br>hele tırsarım |
| her hangi bir soruya<br>teoriye birden fazla<br>açıdan bakmaya Nirengi denir.<br><br>4 tane var.<br>- ölçüm nirengisi<br><br>Araştırmacılar 1'den fazla<br>ölçenlerle, araştırmacının<br>onun tüm yöntemlerini asgari<br>olarak arttıran | 70 bin olmuş<br>Açlık Sınırı<br>17. sıradaymış<br>Türkiye<br>Zimbabwe<br>Enflasyon bizden<br>düşük<br><br>Faiz bizden yüksek olan<br>birkaç ülke var Arjantin<br>Venezuela |
| **Pardöse hikayesi** | ölçebilmek önemli<br>ısı pompası olmayan araçları<br>sattılar var diye<br>Elektrikli Araç ~~Toyota~~<br>ölçmeyi bilmezsen olmaz<br>kamu araç tarex |

---

BYD Çinde %30 indirim Türkiye'ye %30 zam vergisiymiş. Kazığı yemişiz.

**ölçme işi önemli**

Selam
`
};

// Application state variables
let currentQuestionIndex = 0;
let userAnswers = {}; // key: questionId, value: answerText

// Load answers from localStorage on start
function loadState() {
    const saved = localStorage.getItem('social_sciences_quiz_answers');
    if (saved) {
        userAnswers = JSON.parse(saved);
    }
    updateProgressBar();
}

// Save answers to localStorage
function saveState() {
    localStorage.setItem('social_sciences_quiz_answers', JSON.stringify(userAnswers));
    updateProgressBar();
}

// Calculate progress and update UI bar
function updateProgressBar() {
    const total = QUESTIONS.length;
    const answeredCount = Object.keys(userAnswers).filter(id => userAnswers[id].trim().length > 0).length;
    const percentage = Math.round((answeredCount / total) * 100);
    
    const fillEl = document.getElementById('progress-fill');
    const badgeEl = document.getElementById('progress-badge');
    const textEl = document.getElementById('progress-text');
    
    if (fillEl && badgeEl && textEl) {
        fillEl.style.width = percentage + '%';
        badgeEl.textContent = percentage + '%';
        
        if (percentage === 0) {
            textEl.textContent = "Klasik sınava hazırlanmak için 20 sorudan henüz çözdüğünüz olmadı. Başarılar!";
        } else if (percentage < 100) {
            textEl.textContent = "Toplam 20 sorudan " + answeredCount + " tanesini yanıtladınız. Çalışmaya devam, hedeflenen puan: 100!";
        } else {
            textEl.textContent = "Tebrikler! Tüm soruları çözdünüz. Sınavdan 100 almaya hazırsınız!";
        }
    }
}

// -----------------------------------------
// Tab Management
// -----------------------------------------
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabId = btn.getAttribute('data-tab');
        
        // Update active tab buttons
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Update active content
        tabContents.forEach(c => c.classList.remove('active'));
        document.getElementById(tabId).classList.add('active');
        
        // Special render callbacks
        if (tabId === 'tab-answers') {
            renderAnswerKey();
        } else if (tabId === 'tab-notes') {
            renderNotesBrowser();
        }
    });
});

// -----------------------------------------
// Study Guide Sub-navigation
// -----------------------------------------
const studyNavButtons = document.querySelectorAll('.study-nav-btn');
const studySections = document.querySelectorAll('.study-section');

studyNavButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const studyId = btn.getAttribute('data-study');
        
        studyNavButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        studySections.forEach(s => s.classList.remove('active'));
        document.getElementById(studyId).classList.add('active');
    });
});

// -----------------------------------------
// Quiz Logic (İnteraktif Sınav)
// -----------------------------------------
const qNumberEl = document.getElementById('quiz-question-number');
const qRefEl = document.getElementById('quiz-question-ref');
const qTextEl = document.getElementById('quiz-question-text');
const qInputEl = document.getElementById('quiz-answer-input');
const charCounterEl = document.getElementById('char-counter');
const modelAnsCardEl = document.getElementById('quiz-model-answer-card');
const modelAnsTextEl = document.getElementById('quiz-model-answer-text');
const modelRefTextEl = document.getElementById('quiz-model-ref-text');
const showAnsBtn = document.getElementById('quiz-show-ans-btn');

function renderCurrentQuestion() {
    const q = QUESTIONS[currentQuestionIndex];
    qNumberEl.textContent = "Soru " + q.id + " / " + QUESTIONS.length;
    qRefEl.textContent = "Görsel Kaynak: " + q.ref;
    qTextEl.textContent = q.question;
    
    // Set input value
    qInputEl.value = userAnswers[q.id] || "";
    charCounterEl.textContent = qInputEl.value.length + " karakter";
    
    // Collapse answer card on load
    modelAnsCardEl.classList.remove('show');
    showAnsBtn.textContent = "Cevabı Göster";
    
    // Set models answer content
    modelAnsTextEl.textContent = q.answer.replace(/\\n/g, '\n');
    modelRefTextEl.textContent = "Orijinal Not Sayfası: " + q.noteRef.replace(/_/g, ' ');
}

qInputEl.addEventListener('input', () => {
    charCounterEl.textContent = qInputEl.value.length + " karakter";
});

// Toggle Answer Card
showAnsBtn.addEventListener('click', () => {
    const isShowing = modelAnsCardEl.classList.contains('show');
    if (isShowing) {
        modelAnsCardEl.classList.remove('show');
        showAnsBtn.textContent = "Cevabı Göster";
    } else {
        modelAnsCardEl.classList.add('show');
        showAnsBtn.textContent = "Cevabı Gizle";
    }
});

// Save and Next Button
document.getElementById('quiz-save-btn').addEventListener('click', () => {
    const q = QUESTIONS[currentQuestionIndex];
    userAnswers[q.id] = qInputEl.value;
    saveState();
    
    // Move to next question if not at end
    if (currentQuestionIndex < QUESTIONS.length - 1) {
        currentQuestionIndex++;
        renderCurrentQuestion();
    } else {
        alert("Tebrikler! Son soruya ulaştınız. Cevaplarınız tarayıcı hafızasına kaydedildi.");
    }
});

// Prev Button
document.getElementById('quiz-prev-btn').addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderCurrentQuestion();
    }
});

// -----------------------------------------
// Answer Key Render (Cevap Anahtarı)
// -----------------------------------------
function renderAnswerKey() {
    const container = document.getElementById('answers-list-container');
    if (!container) return;
    
    container.innerHTML = "";
    
    QUESTIONS.forEach(q => {
        const card = document.createElement('div');
        card.className = "answer-key-card";
        
        const heading = document.createElement('h3');
        heading.textContent = "Soru " + q.id + ": " + q.question;
        card.appendChild(heading);
        
        const answerPara = document.createElement('p');
        answerPara.style.whiteSpace = "pre-wrap";
        // Format model answers beautifully
        answerPara.innerHTML = "<strong>Sınav Cevabı (100 Puanlık):</strong><br>" + q.answer.replace(/\\n/g, '<br>') + "<br><br><span style=\"color: var(--text-muted); font-size: 0.8rem; font-style: italic;\">Orijinal Kaynak: " + q.noteRef.replace(/_/g, ' ') + "</span>";
        card.appendChild(answerPara);
        
        container.appendChild(card);
    });
}

// -----------------------------------------
// Notes Browser (Orijinal Ders Notları)
// -----------------------------------------
let activeNoteKey = Object.keys(RAW_NOTES)[0];

function renderNotesBrowser() {
    const listContainer = document.getElementById('notes-list-container');
    if (!listContainer) return;
    
    renderNoteList(Object.keys(RAW_NOTES));
    viewNote(activeNoteKey);
}

function renderNoteList(keys) {
    const listContainer = document.getElementById('notes-list-container');
    listContainer.innerHTML = "";
    
    keys.forEach(key => {
        const btn = document.createElement('button');
        btn.className = "note-item " + (key === activeNoteKey ? 'active' : '');
        btn.textContent = key.replace('.md', '').replace(/_/g, ' ');
        btn.addEventListener('click', () => {
            activeNoteKey = key;
            // Update active styling
            document.querySelectorAll('.note-item').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            viewNote(key);
        });
        listContainer.appendChild(btn);
    });
}

function viewNote(key) {
    const titleEl = document.getElementById('note-viewer-title');
    const contentEl = document.getElementById('note-viewer-content');
    
    if (titleEl && contentEl && RAW_NOTES[key]) {
        titleEl.textContent = key.replace('.md', '').replace(/_/g, ' ');
        contentEl.textContent = RAW_NOTES[key];
    }
}

// Search raw notes
const searchInput = document.getElementById('notes-search-input');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filteredKeys = Object.keys(RAW_NOTES).filter(key => {
            const displayName = key.replace(/_/g, ' ').toLowerCase();
            const rawText = RAW_NOTES[key].toLowerCase();
            return displayName.includes(query) || rawText.includes(query);
        });
        renderNoteList(filteredKeys);
    });
}

// Initialize on load
window.addEventListener('DOMContentLoaded', () => {
    loadState();
    renderCurrentQuestion();
});
