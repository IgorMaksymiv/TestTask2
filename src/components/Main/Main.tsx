import React, { useState } from "react";

import styles from './main.module.css'
import Paggination from "../Paggination/Paggination";
import Card from "../Card/Card";
import AdvertisCard from "../AdvertisCard/AdvertisCard";
import SearchDollar from "../uikit/Icons/24/SearchDollar";
import DollarIcon from "../uikit/Icons/24/DollarIcon";
import Filter from "../Filter/Filter";
import { Link } from 'react-router-dom';

import img1 from '../../assets/img/Rectangle 16.svg'
import img2 from '../../assets/img/Rectangle 17.svg'
import img3 from '../../assets/img/Rectangle 18.svg'


interface Prop {
    Array: any[];
}

function Main({ Array }: Prop) {
    const itemsPerPage = 11;
    const [currentPageData, setCurrentPageData] = useState(Array.slice(0, itemsPerPage));

    const handlePageChange = (newPage: any) => {
        const startIndex = (newPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setCurrentPageData(Array.slice(startIndex, endIndex));
        console.log('Page Change')
    };

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.content_left}>
                    <div className={styles.background}>
                        <p className={styles.title}>
                            Найкращі ідеї для стартапу в Україні в 2023 за <br /> версією InVenture
                        </p>
                        <p className={styles.subtitle}>
                            InVenture зібрав найцікавіші та найперспективніші ідеї для запуску стартапу в 2023 році в Україні. <br /> Який краще запустити стартап у 2023 році? Яка стартап ідея може спрацювати в Україні у 2023 році?
                        </p>
                    </div>
                    <p className={styles.left_title}>Інвестиційні пропозиції: продаж бізнесу, інвестиції, стартапи</p>
                    <div className={styles.cards_container}>
                        {currentPageData.map((item, index) => (
                            <Link
                                to={`/card/${item.id}`}
                                key={item.id}
                                className={`${styles.custom_link} 
                                ${index === 9 ? styles.width_penultimate_link : ''} 
                                ${index === 10 ? styles.width_last_link : ''}`}
                            >
                                <Card
                                    key={item.id}
                                    item={item}
                                    index={index}
                                />
                            </Link>
                        ))}
                    </div>
                    <div className={styles.main_pagination}>
                        <Paggination
                            totalItems={34}
                            itemsPerPage={11}
                            onPageChange={handlePageChange}
                        />
                    </div>
                    <div className={styles.main_text}>
                        <p>InVenture представляє бізнес новини України 2022 / 2023 «Інвестиційні новини України та інвестиційні новини світу». Інвестиційні новини, фінансові новини, бізнес новини в Україні розділені за такими рубриками: а) новини M&A та новини компаній б) венчурні новини, новини стартапів, новини ІТ ринку г) новини макроекономіки та державні фінанси д) банківські новини та новини кредитування е) новини фондового ринку та новини IPO ж) новини нерухомості.</p>
                        <p>Новини інвестицій 2022 – це головні події в Україні та світі, які відстежує InVenture. Також доступні: фінансова аналітика, думки експертів та прогнози в галузі інвестицій та фінансів. Інвестиційний ринок України сьогодні та новини бізнесу, фінансові новини та бізнес новини для інвесторів.</p>
                        <p>Моніторинг новин InVenture – останні бізнес новини у сфері: фінанси, інвестиція, макроекономіка, держава та приватний капітал в Україні та світі. Ринок інвестицій сьогодні – усі фінансові новини дня на тему інвестиції в Україні. Новини та події ринку: інвестиція, фінанси, фінанси Україна, стартапи, венчурний капітал, венчурні фонди, кредити та ЄБРР, МВФ, Світовий Банк та інші фінансові організації, мінфін, економіка та макроекономіка.</p>
                        <p>Останні бізнес новини про інвестиції – прямі інвестиції, венчурна інвестиція, портфельні інвестиції, акції, облігації, єврооблігації, євробонди, форекс, фондовий ринок, блокчейн, біткойн, криптовалюта, банки, банківські кредити та депозити, комерційна нерухомість, державні та приватні. Бізнес новини великих компаній в Україні, а також новини світових компаній та новини компаній світу. Свіжі новини бізнесу та інвестиції, події, факти, думки експертів, коментарі, інвестиції Україна. Останні новини інвестиції сьогодні. Інвестиція дня – новина дня. Ділові новини, фінансові новини та події у сфері інвестицій та бізнес новини в Україні. Аналітичні огляди та бізнес аналітика.</p>
                    </div>
                </div>
                <div className={styles.content_right}>
                    <div className={styles.advertis_cards}>
                        <AdvertisCard
                            icon={<SearchDollar />}
                            title="Знайти інвестора"
                            subtitle="Продати бізнес або нерухомість"
                            background="red"
                        />
                        <AdvertisCard
                            icon={<DollarIcon />}
                            title="Інвестувати"
                            subtitle="Купити бізнес або нерухомість"
                            background="blue"
                        />
                    </div>
                    <Filter />
                    <div className={styles.advertis_container}>
                        <img src={img1} alt="img" />
                        <img src={img2} alt="img" />
                        <img src={img3} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;
