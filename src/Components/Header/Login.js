import React, { useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Drawer, Form, Input, Space, message, Card } from 'antd';
import { auth, signInWithEmailAndPassword, db } from '../../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';
// import logo from "./download (9)1.jpeg"; // Your logo image

const Login = () => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null); // State to store logged-in user
  const [userData, setUserData] = useState(null); // State to store fetched user data
  const navigate = useNavigate();

  const handleRefresh = () => {
    navigate('/profile');
    window.location.reload();
  };
  // Check if user is logged in or not and fetch data from Firestore
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // Set the logged-in user
        
        // Fetch user data from Firestore
        const userDoc = await getDoc(doc(db, 'members', currentUser.uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data()); // Set the fetched user data
        } else {
          message.error("User data not found!");
        }
      } else {
        setUser(null); // No user is logged in
        setUserData(null); // Reset user data
      }
    });
    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

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
      const { email, password } = values;
      await signInWithEmailAndPassword(auth, email, password);
      message.success('Login successful!');
      onClose();
      setUser(auth.currentUser); // Update the user state with the logged-in user
    } catch (error) {
      message.error(error.message);
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      message.success('Logged out successfully');
      setUser(null);
      setUserData(null); // Clear user data on logout
    } catch (error) {
      message.error('Failed to log out');
    }
  };

  return (
    <div className='text-center content-center self-center flex mt-10 justify-center'>
      <Button className='bg-blue-500 w-44 font-bold h-12 shadow-lg' type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        Login
      </Button>
      <Drawer
        title={user ? `Welcome, ${userData?.first_name} ${userData?.last_name}` : "Login to your account"}
        width={500}
        onClose={onClose}
        open={open}
        bodyStyle={{ paddingBottom: 80 }}
        extra={<Space></Space>}
      >
        {user ? (
          // Display user details if logged in
          <div className='text-center'>
            <Card className='w-full'>
              <img
                src={userData?.profileImage}
                alt="Profile_image"
                className="rounded-full inline w-32 border-2 h-32 object-cover"
              />
              <p className='flex text-start flex-col'><strong className='text-gray-400 p-2'>Full Name</strong> 
                <p className='w-96 p-2 border-2 rounded-xl'>
                  {`${userData?.first_name} ${userData?.middle_name} ${userData?.last_name}`}
                </p>
              </p>

              <p className='flex text-start flex-col'><strong className='text-gray-400 p-2'>Email Address</strong> 
                <p className='w-96 p-2 border-2 rounded-xl'>{user.email}</p>
              </p>

              <p className='flex text-start flex-col'><strong className='text-gray-400 p-2'>Phone Number</strong> 
                <p className='w-96 p-2 border-2 rounded-xl'>{userData?.phone}</p>
              </p>

              <p className='flex text-start flex-col'><strong className='text-gray-400 p-2'>Pew</strong> 
                <p className='w-96 p-2 border-2 rounded-xl'>{userData?.pew}</p>
              </p>
              
              <div className='flex gap-5'>
                <p className='flex text-start flex-col'><strong className='text-gray-400 p-2'>State of Origin</strong> 
                  <p className='w-44 p-2 border-2 rounded-xl text-center'>{userData?.state}</p>
                </p>

                <p className='flex text-start flex-col '><strong className='text-gray-400 p-2'>Bethel</strong> 
                  <p className='w-44 p-2 border-2 rounded-xl text-center '>{userData?.bethel}</p>
                </p>
              </div>

              <Link onClick={handleRefresh}  to={"/profile"}>
                <Button className='bg-[#ff0000] rounded-xl font-bold w-56 h-10 self-center mt-5 text-white'>
                  Edit Profile
                </Button>
              </Link>

              <Button className='bg-gray-400 rounded-xl font-bold w-56 h-10 self-center mt-5 text-white' onClick={handleLogout}>
                Logout
              </Button>
            </Card>
          </div>
        ) : (
          // Show login form if no user is logged in
          <Form form={form} className="text-center" layout="vertical" onFinish={onFinish}>
            <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Enter your email' }]}>
              <Input className='h-12' placeholder="Enter your email" />
            </Form.Item>
            <Form.Item name="password" label="Password" rules={[{ required: true, message: 'Enter your password' }]}>
              <Input.Password className='h-12' placeholder="Enter your password" />
            </Form.Item>
            <a href='#' className='block'>Forgot Password?. Reset</a>
            <Button className='bg-[#ff0000] rounded-2xl font-bold w-56 h-10 self-center' type="primary" htmlType="submit" loading={loading}>
              Login
            </Button>
          </Form>
        )}
      </Drawer>
    </div>
  );
};

export default Login;
