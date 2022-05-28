import React, { useContext } from "react";
import { Box, Skeleton, Stack, Text } from "@chakra-ui/react";
import { NewsContext } from "./newsContext";
import NewsArticle from "./newsArticle";

function News() {
	const { data } = useContext(NewsContext);
	console.log(data);
	return (
    <Box>
		<Box>
        {data
			? 	data.articles.map((news) => (
					<Box>
						<NewsArticle data={news} key={news.url} />
					</Box>
				))
			: (
			<Stack>
				<Skeleton height="20px" />
				<Skeleton height="20px" />
				<Skeleton height="20px" />
			</Stack>
			)
        }
      </Box>
    </Box>
  );
}

export default News;