import { useState, useEffect } from 'react';
import ProfileView from '../view/ProfileView';
import { getProfile } from '../api/api';
const ProfilePresenter = () => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      setIsLoading(true);
      try {
        const data = await getProfile()
        console.log(data)
        setUserData(data);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };

    fetchUserData();
  }, []);

  return <ProfileView userData={userData} isLoading={isLoading} error={error} />;
};

export default ProfilePresenter;