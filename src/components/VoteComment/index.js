import React, { useState, useEffect } from 'react';
import { Put } from '../../services/api';
import axios from 'axios';

import { VoteCommentContainer } from './styles';

import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';

function VoteComment( { commentId, postId, commentCount, getEspecificPost } ) {

    const idComment = commentId
    const idPost = postId;
    const countComment = commentCount
    const token = window.localStorage.getItem('token');

    const key = {
        headers: {
          Authorization: token
        }
      }

    const VoteCommentUP = async() => {
        const body = {
            direction: 1
        }

        await Put(`posts/${idPost}/comment/${idComment}/vote`, body, key)
        .then(response =>{
        })
        .catch(error =>{
            console.log(error)
        })

        getEspecificPost(idPost)
    }

    const VoteCommentDown = async() => {
        const body = {
            direction: -1
        }

        await Put(`posts/${idPost}/comment/${idComment}/vote`, body, key)
        .then(response =>{
        })
        .catch(error =>{
            console.log(error.data)
        })

        getEspecificPost(idPost)
    }

    return(

        <VoteCommentContainer>
            <CaretUpOutlined onClick={VoteCommentUP}/>
            {countComment}
            <CaretDownOutlined onClick={VoteCommentDown}/>
        </VoteCommentContainer>

    );
}
export default VoteComment;