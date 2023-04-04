import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
    const { data, loading, error } = useFetch("/courses/countByType");

    const images = [
        "https://soft-review.com.ua/wp-content/uploads/2020/06/JavaScript-frameworks-pana.svg",
        "https://almaty.tv/news_photo/1634202757_news_b.jpeg",
        "https://checkroi.ru/wp-content/uploads/2022/07/professiya-veb-dizajner-ot-skypro-768x514.jpeg",
        "https://texterra.ru/upload/iblock/6d9/socialprev.jpg",
    ];
    return (
        <div className="pList">
            {loading ? (
                "loading"
            ) : (
                <>
                    {data &&
                        images.map((img, i) => (
                            <div className="pListItem" key={i}>
                                <img src={img} alt="" className="pListImg" />
                                <div className="pListTitles">
                                    <h1>{data[i]?.type}</h1>
                                    <h2>
                                        {data[i]?.count} {data[i]?.type}
                                    </h2>
                                </div>
                            </div>
                        ))}
                </>
            )}
        </div>
    );
};

export default PropertyList;
