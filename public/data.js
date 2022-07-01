const ładowarka1 = "./images/accessories/ładowarki/ładowarkaUSBC.jpg";
const ładowarka2 = "./images/accessories/ładowarki/ładowarkaMicro.jpg";
const ładowarka3 = "./images/accessories/ładowarki/ładowarkaIphone.jpg";
const szybka1 = "./images/accessories/szkła/szkło.jpg";
const szybka2 = "./images/accessories/szkła/hydrożel.jpg";
const szybka3 = "./images/accessories/szkła/folia.jpg";
const powerbank1 = "./images/accessories/powerbanki/10000mAh.jpg";
const powerbank2 = "./images/accessories/powerbanki/20000mAh.jpg";
const powerbank3 = "./images/accessories/powerbanki/30000mAh.jpg";
const głośnik1 = "./images/accessories/głośniki&słuchawki/głośnik.jpg";
const głośnik2 = "./images/accessories/głośniki&słuchawki/douszne.jpg";
const głośnik3 = "./images/accessories/głośniki&słuchawki/nauszne.jpg";
const memory1 = "./images/accessories/memory/micro.jpg";
const memory2 = "./images/accessories/memory/sdxc.jpg";
const inne1 = "./images/accessories/inne/uchwyt.jpg";
const inne2 = "./images/accessories/inne/selfieSick.jpg";
const inne3 = "./images/accessories/inne/ładowarkaSamochodowa.jpg";
const batery1 = "./images/accessories/baterie/batery1.png";
const batery2 = "./images/accessories/baterie/batery2.png";
const batery3 = "./images/accessories/baterie/batery3.png";

export const questionsData = [
  {
    id: 1,
    title: "Czy można płacić kartą?",
    info: "Niestety nie posiadamy terminala w naszym sklepie. Ale spokojnie, bankomat znajduje się 100m od nas.",
  },
  {
    id: 2,
    title: "Czy dostanę telefon zastępczy na czas naprawy?",
    info: "Nie, nie dajemy telefonu zastępczego. Dobrze byś przygotował/przygotowała sobie jakiś stary telefon na okres naprawy.",
  },
  {
    id: 3,
    title: "Czy moje pliki w telefonie zostaną utracone w trakcie naprawy?",
    info: "Bardzo możliwe, ale zależy to od typu naprawy. W wielu przypadkach wiąże się to z aktualizowaniem oprogramowania i Twoje dane mogą zostać utracone. Przed oddaniem urządzenia do naprawy postaraj się zrobić kopię zapasową swoich zdjęć i innych danych.",
  },
  {
    id: 4,
    title: "Czy należy formatować baterię w nowym telefonie?",
    info: "Kiedyś tak się robiło ale był wtedy inny typ baterii. Dzisiaj stosuje się baterie typu  Li-Ion (litowo-jonowe), które działają inaczej. W tego rodzaju bateriach nie zaleca się rozładowywania ich całkowicie gdyż skutkuje to skróceniem ich żywotności.",
  },
  {
    id: 5,
    title:
      "Czy można wymienić tylko pękniętą szybkę w telefonie bez wymiany całego wyświetlacza?",
    info: "To zależy od modelu telefonu i stopnia uszkodzenia. W większości przypadków jest to możliwe jednak że, nie we wszystkich jest to opłacalne. Czasami lepiej zapłacić ciut więcej i wymienić cały wyświetlacz.",
  },
  {
    id: 6,
    title: "Czy znajdę tutaj jakiś telefon odpowiedni dla seniora?",
    info: "Tak, w naszej ofercie są również telefony dla seniorów! Wiele starszych osób ma problemy z obsługą nowych smartfonów i czują się niekomfortowo używając ich. W naszym sklepie pomożemy dobrać odpowiedni telefon, który będzie funkcjonalny i jednocześnie łatwy w obsłudze.",
  },
];

export const accessoriesData = {
  ładowarki: {
    items: [
      {
        id: 1,
        name: "USB-C",
        img: ładowarka1,
      },
      {
        id: 2,
        name: "USB-MIKRO",
        img: ładowarka2,
      },
      {
        id: 3,
        name: "USB-IPHONE",
        img: ładowarka3,
      },
    ],
    info: "Ładowarki są nam niezbędne do utrzymania naszych kochanych telefonów przy życiu. Jeśli Twoja się zgubiła, zepsuła lub po prostu potrzebujesz nowej, u mnie znajdziesz wszystkie najbardziej popularne rodzaje. ",
  },
  szkła: {
    items: [
      {
        id: 1,
        name: "HARTOWANE",
        img: szybka1,
      },
      {
        id: 2,
        name: "HYDROŻELOWE",
        img: szybka2,
      },
      {
        id: 2,
        name: "FOLIE",
        img: szybka3,
      },
    ],
    info: "Każdemu z nas zdarza się upuścić telefon. Niestety nie raz kończy się to roztrzaskanym wyświetlaczem. Najlepszą ochroną w tym przypadku są szkła i folie zabezpieczające. Przy zakupie ich w moim sklepie, pomagam w ich założeniu gratis!",
  },
  powerbanki: {
    items: [
      {
        id: 1,
        name: "10000 mAh",
        img: powerbank1,
      },
      {
        id: 2,
        name: "20000 mAh",
        img: powerbank2,
      },
      {
        id: 3,
        name: "30000 mAh",
        img: powerbank3,
      },
    ],
    info: "Powerbanki są szczególnie przydatne podczas podróży i wycieczek. Gdy nie mamy bezpośrednio dostępu do prądu, a nasz sprzęt (nie tylko telefon) już prawie wyczerpał swoją baterię - powerbank może okazać się wybawieniem!",
  },
  głośniki: {
    items: [
      {
        id: 1,
        name: "GŁOŚNIKI",
        img: głośnik1,
      },
      {
        id: 2,
        name: "SŁUCHAWKI DOUSZNE",
        img: głośnik2,
      },
      {
        id: 3,
        name: "SŁUCHAWKI NAUSZNE",
        img: głośnik3,
      },
    ],
    info: "Głośniki i słuchawki to chyba ulubiony gadżet do telefonów. W moim sklepie znajdziesz głośniki bluetooth przydatne do rozkręcenia małej imprezki oraz słuchawki - nauszne,douszne, z kablem i bez. ",
  },
  memoriesCard: {
    items: [
      {
        id: 1,
        name: "microSDXC",
        img: memory1,
      },
      {
        id: 2,
        name: "SDXC",
        img: memory2,
      },
    ],
    info: "Karty pamięci są bardzo przydatne do: telefonów, głośników, aparatów, odtwarzaczy muzyki i wielu innych urządzeń. Im więcej pamięci posiadamy tym lepiej, jednakże przed zakupem należy sprawdzić do jakiej wielkości nasze urządzenie może obsłużyć kartę pamięci. ",
  },
  bateries: {
    items: [
      {
        id: 1,
        name: "MAX-COM",
        img: batery1,
      },
      {
        id: 2,
        name: "SAMSUNG",
        img: batery2,
      },
      {
        id: 2,
        name: "NOKIA",
        img: batery3,
      },
    ],
    info: "Dla posiadaczy starszych modeli telefonów dostępne mamy nowe baterie. Jeśli szukasz baterii do konkretnego telefonu, zadzwoń do nas, a my sprawdzimy czy mamy taką w swojej ofercie.",
  },
  others: {
    items: [
      {
        id: 1,
        name: "UCHWYT NA TELEFON",
        img: inne1,
      },
      {
        id: 2,
        name: "SELFIE STICK",
        img: inne2,
      },
      {
        id: 3,
        name: "ŁADOWARKA SAMOCHODOWA",
        img: inne3,
      },
    ],
    info: "W moim sklepie znajdziesz również wiele innych przydatnych akcesorii jak np. uchwyty na telefon do auta, ładowarki samochodowe czy selfie sticki, które umożliwią Ci robienie efektownych zdjęć. ",
  },
};
