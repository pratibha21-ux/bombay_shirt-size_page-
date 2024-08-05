import { useState } from 'react';
import { Link } from 'react-router-dom';
import YourSizeModal from '../YourSizeModal/YourSizeModal'; 
import img1 from '../../Image/img2.png';
import img2 from '../../Image/img1.png';
import './Product.css';
import { useNavigate } from 'react-router-dom';

const Product = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSizeCalculated, setIsSizeCalculated] = useState(false);
  const navigate = useNavigate();

  const handleEditProfileClick = () => {
    navigate('/edit-profile');
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.classList.add('modal-open');
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove('modal-open');
  };

  const handleSizeCalculated = () => {
    setIsSizeCalculated(true);
  };

  return (
    <>
      <div className='container'>
        <div className="container-left">
          <a href={img1}><img src={img1} alt="Image 1" /></a>
          <a href={img2}><img src={img2} alt="Image 2" /></a>
        </div>
        <div className="container-right">
          <div className="left">
            <h1>Cotton Checked Shirt-White & Navy</h1>
            <Link to="/edit-profile">
                <span className='editbutton' onClick={handleEditProfileClick}>Edit size</span>
              </Link>
          </div>
          
          <div className='Cont'>
            <div className='cont-left'>
              <h3>Rs. 2,890.00</h3>
              <h4>Incl. of all taxes</h4>
            </div>
            <div className='cont-right'>
              <h4>Ships in 8 Days</h4>
            </div>
            <hr />
          </div>
          <div className='button'>
            <button onClick={handleOpenModal}>Select size</button>
          </div>
        </div>
      </div>
      <YourSizeModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSizeCalculated} // Handle size calculation
      />
    </>
  );
};

export default Product;
