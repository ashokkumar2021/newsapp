import styles from '../../styles/article.module.css';
import Link from 'next/link'
const Feed = ({pageNumber , articles}) => {
    const page = [1,2,3,4,5];

    return (
        <div className={styles.main}>
            {articles.map((article , index) => (
                <div key={index} className={styles.post}>
                  <Link href={article.url}><h1>{article.title}</h1></Link>
                  <p>{article.description}</p> 
                  {!!article.urlToImage &&<img src={article.urlToImage} />} 
               </div>     
            ))}
            <div >
                <ul className={styles.pages}>
               {page.map((index) => (
                <Link href={`/feed/${index}`}><li className={pageNumber === index ? styles.active : ''} key={index}>{index}</li></Link> 
               ))}
             </ul>
            </div>
        </div>
        
    );
};

export async function getServerSideProps(context){
    const pageNumber = context.query.slug;
    if(!pageNumber || pageNumber < 1 || pageNumber > 5){
    return {
        props : {
            articles : [],
            pageNumber : 1,
        }
    }
}
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&pageSize=5&page=${pageNumber}` ,
    {
        headers : {
            Authorization : 'Bearer 79ec1bd576a845eebb959419737b4ace' ,
        },
    },
);
const resjson = await res.json();

const { articles } = resjson;
return {
    props : {
        articles ,
        pageNumber : Number.parseInt(pageNumber)
    }
}
};

export default Feed
