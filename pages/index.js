import Head from "next/head";
import { useQuery } from "urql";
import { PRODUCT_QUERY } from "../lib/query";
import Product from "../components/Product/Product";
import { GalleryStyled } from "../styles/Gallery";
import { useStateContext } from "../lib/context";
import { PaginationContainer } from "../styles/Pagination";

import { Pagination, CircularProgress } from "@mui/material";
import Sort from "../components/Sort/Sort";

export default function Home() {
    const {
        searchTag,
        setSearchTag,
        searchTitle,
        setSearchTitle,
        searchMinPrice,
        setSearchMinPrice,
        searchMaxPrice,
        setSearchMaxPrice,
        sortAlph,
        setSortAlph,
        tags,
        setTags,
        page,
        setPage,
        pagesOffset,
        setPagesOffset,
        pagesSize,
        pagesCount,
        setPagesCount,
    } = useStateContext();

    //fetch products from strapi
    const [results] = useQuery({
        query: PRODUCT_QUERY,
        variables: {
            PageLimit: pagesSize,
            PageOffset: pagesOffset,
            Name: searchTitle,
            MinPrice: searchMinPrice,
            MaxPrice: searchMaxPrice,
            Sort: sortAlph,
            Tag: searchTag,
        },
    });
    const { data, fetching, error } = results;

    const _changePage = (e, value) => {
        e.preventDefault();
        setPage(value);
        setPagesOffset(pagesSize * (value - 1));
    };

    //check for the data coming in
    if (fetching) return <CircularProgress />;
    if (error) return <p>Oh no... {error.message}</p>;
    const products = data.products.data;

    // const products = null;

    const { pageCount, pageSize, total } = data.products.meta.pagination;
    setTags(data.tags.data);
    setPagesCount(pageCount);

    return (
        <>
            <Head>
                <title>Styled</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"></link>
            </Head>

            <main>
                <div>
                    {/* <Sort /> */}

                    <GalleryStyled>{products && products.map((product) => <Product product={product.attributes} key={product.attributes.slug} />)}</GalleryStyled>
                </div>

                <PaginationContainer>
                    <Pagination count={pagesCount} page={page} shape={"rounded"} onChange={_changePage} />
                </PaginationContainer>
            </main>
        </>
    );
}
