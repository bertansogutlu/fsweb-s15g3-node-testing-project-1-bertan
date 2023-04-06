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
    const actual = kereYap(2,sayici.asagiSay)
    expect(actual).toBe(expected);
  });
  test("[8] sayıcı sonunda sıfıra ulaşır ama daha aşağı saymaz", () => {
    const expected = 0;
    const actual = kereYap(1000,sayici.asagiSay)
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
    const actual = kereYap(2,mevsimler.sonraki)
    expect(actual).toBe(expected);
  });
  test('[11] mevsimler.sonraki ÜÇÜNCÜ çağırılışında "kış" döndürüyor', () => {
    const expected = "kış";
    const actual = kereYap(3,mevsimler.sonraki)
    expect(actual).toBe(expected);
  });
  test('[12] mevsimler.sonraki DÖRDÜNCÜ çağırılışında "ilkbahar" döndürüyor', () => {
    const expected = "ilkbahar";
    const actual = kereYap(4,mevsimler.sonraki)
    expect(actual).toBe(expected);
  });
  test('[13] mevsimler.sonraki BEŞİNCİ çağırılışında "yaz" döndürüyor', () => {
    const expected = "yaz";
    const actual = kereYap(5,mevsimler.sonraki)
    expect(actual).toBe(expected);
  });
  test('[14] mevsimler.sonraki KIRKINCI çağırılışında "ilkbahar" döndürüyor', () => {
    const expected = "ilkbahar";
    const actual = kereYap(40,mevsimler.sonraki)
    expect(actual).toBe(expected);
  });
});

describe("[Görev 6] Araba", () => {
  let focus;
  beforeEach(() => {
    focus = new utils.Araba("focus", 20, 30); // her test yeni bir araba oluşturur
  });
  test("[15] arabayı sürünce güncellenmiş odometer döndürüyor", () => {
    expect(kereYap(3,focus.sur,100)).toBe(300);
    expect(kereYap(2,focus.sur,150)).toBe(600);
    expect(kereYap(2,focus.sur,200)).toBe(600);
  });
  test("[16] arabayı sürmek benzin tüketiyor", () => {
    expect(focus.sur(300)).toBe(300);
    expect(focus.depo).toBe(10);
  });
  test("[17] benzinalma arabayı sürmeye izin veriyor", () => {
    expect(focus.sur(600)).toBe(600);
    expect(focus.depo).toBe(0);
    expect(focus.sur(300)).toBe(600);
    expect(focus.benzinal(10)).toBe(300)
    expect(focus.sur(300)).toBe(900);
  });
  test("[18] dolu depoya benzin alma etki etmiyor", () => {
    expect(focus.benzinal(10)).toBe(600)
  });
});

describe("[Görev 7] asenkronCiftSayi", () => {
  test("[19] bir çift sayı verilirse true çözümlüyor", () => {
    utils.asenkronCiftSayi(2).then(result => {
      expect(result).toBeTruthy()
    })
  });
  test("[20] tek sayı verilirse false çözümlüyor", async () => {
    expect(await utils.asenkronCiftSayi(1)).toBeFalsy()
  });
});

function kereYap(kere,callback,parameter) {
  let result;
  for (let index = 0; index < kere; index++) {
    result = callback(parameter)
  }
  return result;
}