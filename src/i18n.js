import i18n from "i18next";                      
// Bindings for React: allow components to
// re-render when language changes.
import { initReactI18next } from "react-i18next";

i18n
  // Add React bindings as a plugin.
  .use(initReactI18next)
  // Initialize the i18next instance.
  .init({
    // Config options

    // Specifies the default language (locale) used
    // when a user visits our site for the first time.
    // We use English here, but feel free to use
    // whichever locale you want.                   
    lng: "en",

    // Fallback locale used when a translation is
    // missing in the active locale. Again, use your
    // preferred locale here. 
    fallbackLng: "en",

    // Enables useful output in the browser’s
    // dev console.
    debug: true,

    // Normally, we want `escapeValue: true` as it
    // ensures that i18next escapes any code in
    // translation messages, safeguarding against
    // XSS (cross-site scripting) attacks. However,
    // React does this escaping itself, so we turn 
    // it off in i18next.
    interpolation: {
      escapeValue: false,
    },

    // Translation messages. Add any languages
    // you want here.
    resources: {
      // English
      en: {
        // `translation` is the default namespace.
        // More details about namespaces shortly.
        translation: {
          "case_1_contents": "Realization of Kyushu's first disaster prevention camera system that consolidates information on weather, roads, rivers, waterways, etc.",
          "case_1_department": "Shiraishi Town, Saga Prefecture",
          "case_2_contents": "Verified effectiveness in controlling rainwater runoff into sewers that cause water pollution.",
          "case_2_department": "NPO Rainwater Citizens' Association",
          "case_3_contents": "Aiming for a total switch from the old system to RisKma by consolidating all information on one screen.",
          "case_3_department": "Fukuroi City, Shizuoka Prefecture",
          "case_4_contents": "Evaluated a proposal to centralize both surveillance cameras and flood risk management systems. Utilize consulting for future measures.",
          "case_4_department": "Hachioji City, Tokyo",
          "case_5_contents": "Contributing to Gunma Prefecture's efforts to become “No. 1 in disaster resilience” through a demonstration project at an industrial park",
          "case_5_department": "Future Investment and Digital Industry Division, Gunma Prefecture",
          "case_6_contents": "Heavy rainfall management system developed and introduced jointly with Tomakomai City receives the Minister of Land, Infrastructure, Transport and Tourism Award (Sewerage of Circulation Award)",
          "case_6_department": "Tomakomai City, Hokkaido",
        },
      },
      // Arabic
      jp: {
        translation: {
          "case_1_contents": "気象、道路、河川、水路等の情報を集約した九州初の防災カメラシステムを実現",
          "case_1_department": "佐賀県 白石町 様",
          "case_2_contents": "水質汚濁の原因となる下水道への雨水の流出抑制効果を検証",
          "case_2_department": "NPO 雨水市民の会 様",
          "case_3_contents": "全情報を1画面に集約旧システムからRisKmaへ全面的な切り替えを目指す",
          "case_3_department": "静岡県 袋井市 様",
          "case_4_contents": "監視カメラと水害リスク管理システムの双方を一元化した提案を評価。コンサルティングを、今後の施策に活かす",
          "case_4_department": "東京都 八王子市 様",
          "case_5_contents": "工業団地での実証事業を通じて、「災害レジリエンスNo.1」の実現を目指す群馬県の取組に貢献",
          "case_5_department": "群馬県未来投資・デジタル産業課 様",
          "case_6_contents": "苫小牧市と共同で開発・導入した大雨管理システムが国土交通大臣賞（循環のみち下水道賞）を受賞",
          "case_6_department": "北海道 苫小牧市 様",
        },
      },
    },
  });

export default i18n;
