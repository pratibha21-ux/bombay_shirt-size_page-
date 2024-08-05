import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import YourSizeModal from '../YourSizeModal/YourSizeModal';
import './EditProfilePage.css';
import img1 from '../../Image/img4.png';

const EditProfilePage = () => {
  const [profileData, setProfileData] = useState({
    upperBodyShape: 'Athletic',
    lowerBodyShape: 'Flat',
    height: '5\'10"',
    shirtSize: '38',
    shoulderType: 'Average',
    preferredFitType: 'Structured'
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = (data) => {
    setProfileData(data);
    handleCloseModal();
  };

  const handleClosePage = () => {
    navigate('/'); 
  };

  return (
    <div className="edit-profile">
      <div className="edit-profile-left">
        <a href={img1}><img src={img1} alt="Profile Image" /></a>
      </div>

      <div className="edit-profile-right">
        <div className="profile">
          <div className="Size">
            <h2>Your Size</h2>
            <button onClick={handleClosePage}>X</button>
          </div>
          <div className="user">
            <h4 className='left'>I'm New</h4>
            <h4 className='right'>I've Shopped Before</h4>
          </div>
          <hr/>
          <div className="heading">
            <h2>Profile</h2>
            <button onClick={handleOpenModal}>Edit</button>
          </div>

          <div className="profile-item">
            <strong>Upper Body Shape:</strong>
            <p>{profileData.upperBodyShape}</p>
        
          </div>

          <div className="profile-item">
            <strong>Lower Body Shape:</strong>
            <p>{profileData.lowerBodyShape}</p>
          
          </div>

          <div className="profile-item">
            <strong>Height:</strong>
            
          </div>

          <div className="heading">
            <h2>Shirt Sizing</h2>
            <button onClick={handleOpenModal}>Edit</button>
          </div>
          <div className="profile-item">
            <strong>Shirt Size:</strong>
            <p>{profileData.shirtSize}</p>
          
          </div>

          <div className="profile-item">
            <strong>Shoulder Type:</strong>
            <p>{profileData.shoulderType}</p>
           
          </div>

          <div className="profile-item">
            <strong>Preferred Fit Type:</strong>
            <p>{profileData.preferredFitType}</p>
     </div>


          <div>
            <h4>We guarantee the fit you need</h4>
            <div className="heading">
              <h4>94% of our customers love their fit the first time.</h4>
              <h4 type="button" className="learn">Learn more</h4>
            </div>
          </div>
          <div className="button">
            <button onClick={handleClosePage}>Continue</button>
          </div>
        </div>
        <YourSizeModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSave={handleSave}
          initialData={profileData}
        />
      </div>
    </div>
  );
};

export default EditProfilePage;
