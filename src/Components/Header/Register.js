import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Drawer, Form, Input, Row, Select, Space, message } from 'antd';
import { auth, db, createUserWithEmailAndPassword, setDoc, doc, onAuthStateChanged } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;

const Register = () => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
    form.resetFields();
  };

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const { email, password, first_name, pew, gender, middle_name,
        last_name, phone, state, bethel } = values;
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, 'members', user.uid), {
        uid: user.uid,
        email,
        first_name,
        middle_name,
        last_name,
        phone,
        pew,
        gender,
        state,
        bethel,
      });

      message.success('Registration successful!');
      onClose();
      navigate('/profile');
      window.location.reload();
    } catch (error) {
      message.error(error.message);
      setLoading(false);
    }
  };

  return (
    <div className='text-center content-center mt-10 self-center flex justify-center'>
      <Button className='bg-blue-500 shadow-xl h-12 font-bold w-44' type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        Register
      </Button>
      <Drawer title="Create a new account" width={720} onClose={onClose} open={open} bodyStyle={{ paddingBottom: 80,}} extra={
          <Space>
       
          </Space>}>
        <Form form={form} className='text-center' layout="vertical" hideRequiredMark onFinish={onFinish}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="email"
                label="Email" rules={[{required: true, message: 'Enter your Email',},]}>
                <Input className='h-12' placeholder="Please Enter your Email" />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item name="first_name" label="First Name" rules={[{ required: true, message: 'Your sure Name',},]}>
                <Input className='h-12' placeholder="Please enter Your First Name" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="middle_name"
                label="Middle Name" rules={[{required: true, message: 'Enter your Middle Name',},]}>
                <Input className='h-12' placeholder="Please Enter your Middle Name" />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item name="last_name" label="Sur Name" rules={[{ required: true, message: 'Your Sur Name',},]}>
                <Input className='h-12' placeholder="Please enter Your Sur Name" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="pew" label="Pew" rules={[{required: true, message: 'Please Priestly Body',},]}>
              <Select className='h-12' placeholder="Please choose gender">
              <Option value="sister">Sister</Option>
                  <Option value="brother">Brother</Option>
                  <Option value="choir">Chorister</Option>
                  <Option value="spirited">Spirited Child</Option>
                  <Option value="elder">Elder</Option>
                  <Option value="ordained_one">Ordained One</Option>
                  <Option value="cps">Christ Practical Student</Option>
                  <Option value="cnp">Christ Natural Preacher</Option>
                  <Option value="tcw">True Christ Witness</Option>
                  <Option value="bm">Blessed Mother </Option>
                  <Option value="dv">Divine Vanguard </Option>
                  <Option value="ca">Christ Ambassador </Option>
                  <Option value="bishop">Bishop </Option>
                  <Option value="eminence">Eminence </Option>
                  <Option value="hg">Archbishop </Option>
                  <Option value="shephered">Christ Shepherd </Option>
                  <Option value="sabath">Sabath </Option>
                  <Option value="144">144,000 Virgin </Option>
                </Select>
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item className='h-12' name="gender"
                label="Gender" rules={[ {required: true, message: 'Please choose gender',}, ]}>
                <Select className='h-12' placeholder="Please choose gender">
                  <Option value="brother">Brother</Option>
                  <Option value="sister">Sister</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="state" label="State"
                rules={[{ required: true, message: 'Please Enter your State or province', }, ]}>
                <Input className='h-12' style={{width: '100%', }}placeholder="Please enter your State or Province"/>
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item name="bethel" label="Bethel"
                rules={[{ required: true, message: 'Please Enter Bethel', }, ]}>
                <Input className='h-12' style={{width: '100%',}} placeholder="Please enter your Bethel"/>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
          <Col span={12}>
          <Form.Item name="phone" label="Phone Number" rules={[{required: true, message: 'Enter Phone Number', },]} >
            <Input className='h-12' placeholder="Please Enter Valid Phone Number" />
          </Form.Item>
        </Col>

          <Col span={12}>
          <Form.Item name="password" label="Password" rules={[{required: true, message: 'Enter Password', },]} >
            <Input.Password className='h-12' placeholder="Please Create Password" />
          </Form.Item>
        </Col>
        </Row>

        <Button className='bg-[#ff0000] rounded-2xl font-bold w-56 h-10 self-center' htmlType="submit" type="primary" loading={loading}  onClick={() => form.submit()}>
        Signup
      </Button>
        </Form>
      </Drawer>
    </div>
  );
};

export default Register;
