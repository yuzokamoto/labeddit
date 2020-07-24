import React, { useState, useEffect } from "react";
import { Post } from '../../services/api';
import { 
  CreatePostContainer,
}  from './styles';

import { 
  Form,
  Input,
  Col,
  Row,
  Button,
  message
} from 'antd';

import 'antd/dist/antd.css';

function CreatePost( { getPosts } ) {

  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [resp, setResp] = useState(false);
  const { TextArea } = Input;
  const [form] = Form.useForm();

  const token = window.localStorage.getItem('token');

  const onReset = () => {
    form.resetFields()
  };

  let key = { headers: { Authorization: token } };

  const body = {
    text: text,
    title: title
  }

  const Postar = async() => {
    await Post('/posts', body, key)
    .then(response => {
      setResp(response.data.success)
      console.log(response)
      success()
      verify()
      onReset()
    })
    .catch(error => {
      erro()
      console.log(error.response)
    })
  }

  useEffect(() => {
    verify()
  }, [])

  const verify = () => {
    if(resp === true){
      getPosts()
      setResp(false)
    }}

  const success = () => {
      message.success('Mensagem enviada com sucesso');
  };
    
  const erro = () => {
      message.error('Erro ao enviar mensagem, tente novamente');
  };

  return (

    <CreatePostContainer>      
          <Form  form={form} style={{marginTop: '2vh'}}>
            <Row gutter={[6, 6]}>
              <Col span={24}>

                <Form.Item
                value={title} onChange={ (t) =>  setTitle(t.target.value) }
                label="Título: "
                name="titulo"
                rules={[
                  {
                    required: true,
                    message: 'Insira o título da publicação',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              </Col>
            </Row>

            <Row gutter={[16, 16]}>
              <Col span={24}>

                <Form.Item
                  value={text} onChange={ (m) => setText(m.target.value)}
                  label="Mensagem: "
                  name="mensagem"
                  rules={[
                    {
                      required: true,
                      message: 'Insira a mensagem da publicação',
                    },
                  ]}
                >
                  <TextArea autoSize={{ minRows: 2, maxRows: 7 }}/>
                </Form.Item>

              </Col>
            </Row>

            <Row>
            <Col span={24} style={{display: 'flex', justifyContent: 'flex-end'}}>

              <Button onClick={onReset}> Reset </Button>
              <Button type="primary" htmlType="submit" onClick={Postar}
               style={{
                 marginLeft: '2vh',
                 marginBottom: '2vh',
                 marginRight: '2vh'}}
              > Comentar
              </Button>
              </Col>
            </Row>
          </Form>
    </CreatePostContainer>
  );
}
export default CreatePost;