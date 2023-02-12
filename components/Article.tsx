const Article = ( { article }: any) => {
    return (
        <div className="text-3xl font-bold underline">
        {article.title}
        </div>
    );
    };

    export default Article;
