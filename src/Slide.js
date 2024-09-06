import { useTranslation } from "react-i18next";

const Slide = () => {
    const { t } = useTranslation();
    
    const caseStudy = [
        {
          type: "1",
          pdf: `${window.location.origin}/pdf/RisKma-shiraishi.pdf`,
          img: {
            src: require("./assets/img/photo-book-shiraishi.png"),
            alt: "photo-book-shiraishi",
          },
        },
        {
          type: "2",
          pdf: `${window.location.origin}/pdf/RisKma-amamizu.pdf`,
          img: {
            src: require("./assets/img/photo-book-amamizu.png"),
            alt: "photo-book-amamizu",
          },
        },
        {
          type: "3",
          pdf: `${window.location.origin}/pdf/RisKma-袋井市.pdf`,
          img: {
            src: require("./assets/img/photo-book-fukuroi.png"),
            alt: "photo-book-fukuroi",
          },
        },
        {
          type: "4",
          pdf: `${window.location.origin}/pdf/RisKma-八王子市.pdf`,
          img: {
            src: require("./assets/img/photo-book-hachioji.png"),
            alt: "photo-book-hachioji",
          },
        },
        {
          type: "5",
          pdf: `${window.location.origin}/pdf/RisKma-群馬県.pdf`,
          img: {
            src: require("./assets/img/photo-book-gunma.png"),
            alt: "photo-book-gunma",
          },
        },
        {
          type: "6",
          pdf: `${window.location.origin}/pdf/RisKma-苫小牧市.pdf`,
          img: {
            src: require("./assets/img/photo-book-tomakomai.png"),
            alt: "photo-book-tomakomai",
          },
        },
      ];
    return (
        <div className="slide-background">
        {
            caseStudy.map((item, index) => {
                return (
                    <>
                        <div>
                            <div>
                                <div>{ t("case_" + (index + 1) + "_contents") }</div>
                                <div>{ t("case_" + (index + 1) + "_department") }</div>
                            </div>
                            <div>
                                <img src={item.src} />
                            </div>
                        </div>
                    </>
                )
            })
        }
        </div>
    )
}

export default Slide;