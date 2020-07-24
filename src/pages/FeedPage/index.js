import React, { useState, useEffect } from 'react';
import { Get } from '../../services/api';
import { useHistory } from 'react-router-dom';
import CreatePost from '../../components/CreatePost/index';
import VotePost from '../../components/VotePost/index';

import { 
  FeedContainer,
  FeedLeft,
  CardContainer,
  FeedRight,
  VoteCardContainer,
  EachCardContainer,
  VoteAndCardContainer
} from './styles';

import { Card } from 'antd';

function FeedPage() {
  const history = useHistory();
  const token = window.localStorage.getItem('token');
  const [posts, setPosts] = useState([]);

  const key = { headers: { Authorization: token } };

  useEffect(() =>{ 
    getPosts()
    verifyToken()
  }, [setPosts,])

  const getPosts = async() => {
    await Get('/posts', key)
    .then(response =>{
      setPosts(response.data.posts)
    }).catch(error =>{
      console.log(error)
    })}

  const verifyToken = () => {
    if(token === null){
      history.push('/')
    }}

  return (<>
    <FeedContainer>
      <FeedLeft />
      <CardContainer>
      <CreatePost getPosts={getPosts} />
      <hr />
        {posts.map(post => {
          return(
            <VoteAndCardContainer>
              <VoteCardContainer>
                <VotePost post={post} getPosts={getPosts} />
              </VoteCardContainer>
              <EachCardContainer>
                <Card key={post.id} hoverable
                  extra={<span 
                  onClick = { ( () => { history.push (`/post/${post.id}`) } ) }
                    style={{
                      color: 'blue',
                      fontWeight: 400,
                      fontSize: '1.15em',
                      fontFamily: 'Nanum Gothic, sans-serif',
                    }}
                  > Abrir
                  </span>}
                  title={post.username} bordered="true"
                  style={{ 
                    marginBottom: '2.5vh' }}>
                <p> {post.text} </p>
                </Card>            
              </EachCardContainer>
            </VoteAndCardContainer>
          )})}
        </CardContainer>
      <FeedRight />
    </FeedContainer>
  </>
  );}
export default FeedPage;