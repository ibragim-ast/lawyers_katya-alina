type DataType = {
  title: string;
  img: string;
  list: string[];
};

export const data: DataType[] = [
  {
    title: "Семейные споры",
    img: "../src/assets/images/family_disputs.svg",
    list: [
      "Расторжение брака",
      "Взыскание алиментов (простое – через судебный приказ, или сложное – в твердой денежной сумме)",
      "Определение места жительства ребенка",
      "Определение порядка общения с ребенком",
      "Лишение родительских прав",
      "Усыновление (удочерение)",
      "Раздел совместно нажитого имущества (движимого и недвижимого, в том числе общих долгов – кредитных обязательств)",
      "Оспаривание брачных контрактов",
    ],
  },
  {
    title: "Трудовые споры",
    img: "../src/assets/images/labor_disputs.svg",
    list: [
      "Споры о восстановление на работе (незаконное увольнение)",
      "Споры о взыскании заработной платы",
      "Споры по трудовым гарантиям",
      "Споры, возникающие из причинения вреда на рабочем месте",
      "Компенсация морального вреда",
    ],
  },
  {
    title: "Наследственные споры",
    img: "../src/assets/images/hereditary_disputs.svg",
    list: [
      "Оформление наследства",
      "Установление факта принятия наследства",
      "Восстановление пропущенного срока на принятие наследства",
      "Оспаривание завещания",
      "Установление факта  родственных связей",
      "Выдел доли в наследственном имуществе",
    ],
  },
  {
    title: "Земельные споры",
    img: "../src/assets/images/land_disputs.svg",
    list: [
      "Признание права собственности на земельный участок",
      "Оформление прав на землю через МФЦ, в том числе сопровождение сделок с земельными участками",
      "Споры с администрацией по аренде земельных участков",
      "Выкуп земельного участка",
      "Защита нарушенных прав собственника земельного участка",
      "Снижение кадастровой стоимости земельного участка",
      "Споры, связанные с уточнением границ земельных участков",
    ],
  },
  {
    title: "Споры с застройщиками",
    img: "../src/assets/images/developers_disputs.svg",
    list: [
      "Взыскание неустойки за просрочку в сдачи готового жилья",
      "Споры по качеству жилых помещений",
      "Споры, связанные с договором долевого участия в строительстве, в том числе его расторжение",
      "Возврат денежных средств за жилое помещение",
    ],
  },
  {
    title: "Защита прав потребителей",
    img: "../src/assets/images/consumer_protection.svg",
    list: [
      "Возврат товара",
      "Споры по гарантии",
      "Взыскание неустоек и других штрафов",
      "Расторжение договора",
    ],
  },
  {
    title: "Жилищные споры",
    img: "../src/assets/images/housing_disputes.svg",
    list: [
      "Узаконение жилого дома (самовольная постройка), квартиры",
      "Выселение и вселение через суд в жилое помещение",
      "Признание и оспаривание приватизации",
      "Снятие с регистрационного учета",
      "Восстановление в очереди по учету малоимущих и нуждающихся граждан",
      "Споры по жилищных программам",
      "Споры с ЖКХ, ЖЭУ, ЕРКЦ, ТСЖ (оспаривание Протоколов собраний, оспаривание коммунальных услуг)",
      "Выдел доли в жилом помещении в натуре",
      "Защита прав собственника жилого помещения",
      "Оформление документов на строительство жилого дома",
      "Представительство в МФЦ по вопросу сделок с недвижимостью",
      "Споры с банками (ипотека)",
    ],
  },
  {
    title: "Вопросы, связанные с ООО, ИП и НКО",
    img: "../src/assets/images/commercial_disputes.svg",
    list: [
      "Создание ООО, ИП, АО, ПАО",
      "Реорганизация ООО (слияние, разделение, присоединение, преобразование, выделение)",
      "Ликвидация ООО, ИП",
      "Создание некоммерческих организаций (Фонды, Общественные организации, Благотворительные организации и др.)",
      "Внесение изменений в учредительные документы ООО и в сведения ЕГРЮЛ",
      "Проведение общих собраний учредителей и акционеров",
      "Представление интересов в налоговой инспекции по вопросу государственной регистрации предприятия или внесения изменений в ЕГРЮЛ или учредительные документы предприятия",
    ],
  },
  {
    title: "Административные споры",
    img: "../src/assets/images/administrative_disputes.svg",
    list: [
      "Споры с налоговой (оспаривание незаконно начисленных налогов и пеней)",
      "Споры со службой судебных приставов-исполнителей, коллекторских организаций",
      "Споры с МВД по вопросу миграции, иммиграции, депортации",
      "Помощь в оформлении патента, вида на жительства, гражданства для иностранных граждан",
      "Обжалование действий (решений) и бездействий органов власти и местного самоуправления (Администрации, Министерств и ведомств и др. структур)",
    ],
  },
];
