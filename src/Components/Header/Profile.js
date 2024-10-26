  import React, { useState, useEffect, useRef } from 'react';
  import { Button, Form, Input, message, Upload } from 'antd';
  import { UploadOutlined } from '@ant-design/icons';
  import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
  import { doc, getDoc, updateDoc } from 'firebase/firestore';
  import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
  import { useNavigate } from 'react-router-dom';
  import { auth, db, storage } from '../../firebase'; // Ensure correct path
  import { IoMdAddCircleOutline, IoMdArrowBack, IoMdArrowForward } from 'react-icons/io';

  const Profile = () => {
    const [form] = Form.useForm();
    const [user, setUser] = useState(null);
    const [profileData, setProfileData] = useState({});
    const [profileImage, setProfileImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, async (currentUser) => {
        if (currentUser) {
          setUser(currentUser);
          const userDoc = await getDoc(doc(db, 'members', currentUser.uid));
          if (userDoc.exists()) {
            const data = userDoc.data();
            setProfileData(data);
            form.setFieldsValue(data);
          }
        }
      });
    }, [form]);

    const onFinish = async (values) => {
      setLoading(true);
      try {
        let imageUrl = profileData.profileImage;

        if (profileImage) {
          const imageRef = ref(storage, `profileImages/${user.uid}`);
          await uploadBytes(imageRef, profileImage);
          imageUrl = await getDownloadURL(imageRef);
        }

        const updatedData = { ...values, profileImage: imageUrl };
        await updateDoc(doc(db, 'members', user.uid), updatedData);

        message.success('Profile updated successfully!');
        setProfileData(updatedData);
      } catch (error) {
        message.error('Error updating profile: ' + error.message);
      } finally {
        setLoading(false);
      }
    };

    const uploadProps = {
      beforeUpload: (file) => {
        setProfileImage(file);
        return false; // Prevent auto upload
      },
      onRemove: () => {
        setProfileImage(null); // Remove selected image
      },
    };

    const handleLogout = async () => {
      try {
        await signOut(auth);
        message.success('Logged out successfully!');
        navigate('/login');
        window.location.reload();
      } catch (error) {
        message.error('Error logging out: ' + error.message);
      }
    };

    const fromInputRef = useRef(null);
    const toInputRef = useRef(null);

    useEffect(() => {
      const loadAutocomplete = () => {
        if (window.google) {
          const fromAutocomplete = new window.google.maps.places.Autocomplete(fromInputRef.current);
          const toAutocomplete = new window.google.maps.places.Autocomplete(toInputRef.current);

          fromAutocomplete.addListener('place_changed', () => {
            const place = fromAutocomplete.getPlace();
            if (place && place.formatted_address) {
              setProfileData((prevData) => ({
                ...prevData,
                from: place.formatted_address,
              }));
            }
          });

          toAutocomplete.addListener('place_changed', () => {
            const place = toAutocomplete.getPlace();
            if (place && place.formatted_address) {
              setProfileData((prevData) => ({
                ...prevData,
                to: place.formatted_address,
              }));
            }
          });
        } else {
          console.error('Google Maps JavaScript API not loaded');
        }
      };

      const intervalId = setInterval(() => {
        if (window.google) {
          loadAutocomplete();
          clearInterval(intervalId);
        }
      }, 100);

      return () => {
        clearInterval(intervalId);
      };
    }, []);

    return (
      <div className='w-screen md:w-[100%]'>
        <div className='text-center content-center self-center mx-3 lg:mx-10 mt-20 flex justify-center flex-col'>
          <Form form={form} layout="vertical" hideRequiredMark onFinish={onFinish}>
            <h2 className='text-center my-10 text-2xl font-bold text-gray-400'>Edit Your Profile</h2>

            <div className='grid grid-cols-1 lg:flex w-[100%] gap-10'>
              <div className='w-[40%]'>
                <h2 className='text-start my-10 text-2xl font-bold text-black border-b-2 p-4 border-b-black'>Personal Info</h2>
                <div className='flex gap-5'>
                  <Form.Item name="first_name" label="First Name" rules={[{ required: true, message: 'Please input your first name!' }]}>
                    <Input className='h-12' />
                  </Form.Item>

                  <Form.Item name="last_name" label="Last Name" rules={[{ required: true, message: 'Please input your last name!' }]}>
                    <Input className='h-12' />
                  </Form.Item>
                </div>

                <div className='flex w-[100%] gap-5'>
                  <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Please input your email!' }]}>
                    <Input className='h-12 w-96' disabled />
                  </Form.Item>

                  <Form.Item name="phone" label="Phone Number" rules={[{ required: true, message: 'Please input your phone number!' }]}>
                    <Input className='h-12' />
                  </Form.Item>
                </div>

                <div className='flex gap-5'>
                  <Form.Item name="residence" label="Residence">
                    <Input className='h-12 w-96' />
                  </Form.Item>

                  <Form.Item name="dateOfBirth" label="Date of Birth">
                    <Input className='h-12' />
                  </Form.Item>
                </div>

                <div className='flex gap-5'>
                  <Form.Item name="countryOfOrigin" label="Country Of Origin">
                    <Input className='h-12' />
                  </Form.Item>

                  <Form.Item name="state_of_origin" label="State Of Origin">
                    <Input className='h-12' />
                  </Form.Item>

                  <Form.Item name="lga" label="LGA/Province">
                    <Input className='h-12' />
                  </Form.Item>
                </div>
              </div>

              <div className='w-[40%]'>
                <h2 className='text-start my-10 text-2xl font-bold text-black border-b-2 p-4 border-b-black'>Bethel Info</h2>

                <Form.Item name="bethel" label="Bethel">
                  <Input className='h-12' />
                </Form.Item>

                <div className='flex gap-10'>
                  <Form.Item name="country" label="Country">
                    <Input className='h-12' />
                  </Form.Item>

                  <Form.Item name="state" label="State">
                    <Input className='h-12' />
                  </Form.Item>

                  <Form.Item name="area" label="Area">
                    <Input className='h-12' />
                  </Form.Item>
                </div>

                <Form.Item name="nation" label="Nation (Nigerian Only)">
                  <Input className='h-12 w-44' />
                </Form.Item>

                <div className='flex gap-10'>
                  <Form.Item name="dateOfBaptism" label="Date of Baptism">
                    <Input className='h-12' />
                  </Form.Item>

                  <Form.Item  label="Baptism Certificate">
                    <Upload listType="picture">
                      <Button className='h-12 w-44' icon={<UploadOutlined />}>Upload</Button>
                    </Upload>
                  </Form.Item>

                  <Form.Item name="pew" label="Pew">
                    <Input className='h-12' />
                  </Form.Item>
                </div>
              </div>

              <Form.Item name="profileImage" label="Profile Image">
                <Upload {...uploadProps} listType="picture">
                  <Button className='h-16 w-28' icon={<UploadOutlined />}>Upload</Button>
                </Upload>
              </Form.Item>
            </div>

            <div className='mt-10 flex justify-between'>
              <Button className='bg-red-400 w-28 h-10' type="primary" onClick={handleLogout}>
                Logout
              </Button>

              <Button className='bg-blue-500 w-28 h-10 text-white'  loading={loading}>
                <IoMdAddCircleOutline /> Add Child
              </Button>

              <Button className='bg-blue-500 w-28 h-10' type="primary" htmlType="submit" loading={loading}>
                <IoMdArrowForward /> Complete
              </Button>
            </div>
          </Form>
        </div>
      </div>
    );
  };

  export default Profile;
