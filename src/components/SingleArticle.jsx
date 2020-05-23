import React, { useEffect, useState } from "react";
import { Placeholder, Grid, Container } from "semantic-ui-react";
import axios from 'axios';
import Ads1 from './Ads1'

const SingleArticle = (props) => {
  const [article, setArticle] = useState({})

  useEffect(() => {
    const chooseArticle = async () => {
      let response = await axios.get(`/articles/${props.match.params.id}`);
      setArticle(response.data.article);
    };
    chooseArticle()
  }, [])

  return (
    <Container align="center" style={{paddingTop: "45px", width: "55%"}}>
      <Grid stretched>
        <Grid.Row centered>
          <Placeholder
            style={{ height: 250, width: 900 }}
            key={article.id}
            id={"article-" + article.id + "-title"}
          >
            <Placeholder.Image />
            <h5 style={{ textAlign: "center" }}>{article.title}</h5>
          </Placeholder>
        </Grid.Row>
        <Grid.Row centered>
            <p key={article.id} id={"article-" + article.id + "-body"} style={{ textAlign: "left" }}>
              {article.body}
            </p>
        </Grid.Row>
        <Grid.Row centered>
          <Ads1/>
        </Grid.Row>
      </Grid>
    </Container>
  );
};
export default SingleArticle;