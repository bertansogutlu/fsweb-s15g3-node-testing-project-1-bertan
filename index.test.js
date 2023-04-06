const utils = require("./index");

describe("[Görev 1] nesneyiTrimle", () => {
  test("[1] propları trimlenmiş bir nesne döndürüyor", () => {
    // ÖRNEK
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.nesneyiTrimle(input);
    expect(actual).toEqual(expected);
  });
});

describe("[Görev 2] verileniTrimle", () => {
  test("[3] verilen propu trimliyor", () => {
    const inputObj = { isim: "  jane  ", yas: " 34 " };
    const inputStr = "isim";
    const actual = utils.verileniTrimle(inputObj, inputStr);
    expect(actual).toHaveProperty("isim","jane");
  });
  test("[4] verilen dışındaki proplar trimlenmeden döndürülüyor", () => {
    const inputObj = { isim: "  jane  ", yas: " 34 " };
    const inputStr = "isim";
    const expected = { isim: "jane", yas: " 34 " };
    const actual = utils.verileniTrimle(inputObj, inputStr);
    expect(actual).toEqual(expected);
  });
});

describe("[Görev 3] enBuyukTamsayiyiBul", () => {
  test("[5] bir dizi nesne içindeki en büyük tamsayiyi döndürüyor { tamsayi: 2 }", () => {
    const input = [{ tamsayi: 1 }, { tamsayi: 3 }, { tamsayi: 2 }, { tamsayi: 100 }, { tamsayi: -200 }]
    const expected = 100;
    const actual = utils.enBuyukTamsayiyiBul(input);
    expect(actual).toBe(expected);
  });
});

describe("[Görev 4] Sayici", () => {
  let sayici;
  beforeEach(() => {
    sayici = new utils.Sayici(3); // her test yeni bir sayı ile başlatılıyor
  });
  test("[6] sayici.asagiSay ilk çağırılışında başlangıç sayışını yapıyor", () => {
    const expected = 3;
    const actual = sayici.asagiSay()
    expect(actual).toBe(expected);
  });
  test("[7] sayici.asagiSay İKİNCİ çağırılışında başlangıç eksi 1 sayıyor", () => {
    const expected = 2;
    sayici.asagiSay()
    const actual = sayici.asagiSay()
    expect(actual).toBe(expected);
  });
  test("[8] sayıcı sonunda sıfıra ulaşır ama daha aşağı saymaz", () => {
    const expected = 0;
    sayici.asagiSay()
    sayici.asagiSay()
    sayici.asagiSay()
    sayici.asagiSay()
    sayici.asagiSay()
    const actual = sayici.asagiSay()
    expect(actual).toBe(expected);
  });
});

describe("[Görev 5] Mevsimler", () => {
  let mevsimler;
  beforeEach(() => {
    mevsimler = new utils.Mevsimler(); // her test yeni bir mevsimle başlar
  });
  test('[9] mevsimler.sonraki İLK çağırılışında "yaz" döndürüyor', () => {
    const expected = "yaz";
    const actual = mevsimler.sonraki()
    expect(actual).toBe(expected);
  });
  test('[10] mevsimler.sonraki İKİNCİ çağırılışında "sonbahar" döndürüyor', () => {
    const expected = "sonbahar";
    mevsimler.sonraki()
    const actual = mevsimler.sonraki()
    expect(actual).toBe(expected);
  });
  test('[11] mevsimler.sonraki ÜÇÜNCÜ çağırılışında "kış" döndürüyor', () => {
    const expected = "kış";
    mevsimler.sonraki()
    mevsimler.sonraki()
    const actual = mevsimler.sonraki()
    expect(actual).toBe(expected);
  });
  test('[12] mevsimler.sonraki DÖRDÜNCÜ çağırılışında "ilkbahar" döndürüyor', () => {});
  test('[13] mevsimler.sonraki BEŞİNCİ çağırılışında "yaz" döndürüyor', () => {});
  test('[14] mevsimler.sonraki KIRKINCI çağırılışında "ilkbahar" döndürüyor', () => {});
});

describe("[Görev 6] Araba", () => {
  let focus;
  beforeEach(() => {
    focus = new utils.Araba("focus", 20, 30); // her test yeni bir araba oluşturur
  });
  test("[15] arabayı sürünce güncellenmiş odometer döndürüyor", () => {});
  test("[16] arabayı sürmek benzin tüketiyor", () => {});
  test("[17] benzinalma arabayı sürmeye izin veriyor", () => {});
  test("[18] dolu depoya benzin alma etki etmiyor", () => {});
});

describe("[Görev 7] asenkronCiftSayi", () => {
  test("[19] bir çift sayı verilirse true çözümlüyor", () => {});
  test("[20] tek sayı verilirse false çözümlüyor", () => {});
});
