
import img1 from '../../Image/img4.png';
import './Prouctdes.css';

const ProductDescription = () => {
  return (
    <div className='description'>
      <div className="description-left"> 
        <a href={img1}><img src={img1} alt="Image 1" /></a>
      </div>
      <div className="description-right">
        <div className='heading'>
          <h5>Product Description</h5>
        </div>
        <hr />
        <div className="text">
          <p>This checked shirt is one you can wear for a quintessential office look.
             It is made with a lightweight, high-quality 100% cotton fabric.</p>
        </div>
        <div className='data'>
          <span>Product Type - Custom Made</span>
        </div>
        <div className="model-description">     
          <p>The model is and is wearing a shirt custom-made to his unique size.</p>
        </div>
        <div className='heading'>
          <h5>Design Details</h5>
        </div>
        <hr />
        <p>Polo Collar | Single Button Cuffs | Regular Placket</p>
        <div className="heading">
          <h5>Fabric Details</h5>
        </div>
        <hr />
        <h4 className='data'>
          <span>Fabric - 100% cotton</span>
        </h4>
      </div>
    </div>
  );
};

export default ProductDescription;
