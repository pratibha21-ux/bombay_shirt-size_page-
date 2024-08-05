import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './YourSizeModal.css';
import Athletic from '../../Image/Athletic.jpg';
import Slight_Belly from '../../Image/Athletic.jpg';
import Significant_Belly from '../../Image/Athletic.jpg';
import Flat from '../../Image/Athletic.jpg';
import Standard from '../../Image/Athletic.jpg';
import Heavy from '../../Image/Athletic.jpg';
import Average from '../../Image/Athletic.jpg';
import Sloping from '../../Image/Athletic.jpg';
import Super_Slim from '../../Image/Athletic.jpg';
import Structured from '../../Image/Athletic.jpg';
import Relaxed from '../../Image/Athletic.jpg';

const OptionGroup = ({ options, selectedOption, onOptionSelect, id }) => (
  <div id={id} className="option-group">
    {options.map(option => (
      <div
        key={option.value}
        className={`option ${selectedOption === option.value ? 'selected' : ''}`}
        onClick={() => onOptionSelect(option.value)}
      >
        <img src={option.imgSrc} alt={option.label} />
        <span>{option.label}</span>
      </div>
    ))}
  </div>
);

OptionGroup.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      imgSrc: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  selectedOption: PropTypes.string.isRequired,
  onOptionSelect: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

const YourSizeModal = ({ isOpen, onClose, onSave, initialData }) => {
  const [answers, setAnswers] = useState({
    upperBodyShape: '',
    lowerBodyShape: '',
    height: '',
    shirtSize: '',
    shoulderType: '',
    preferredFitType: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (initialData) {
      setAnswers(initialData);
    }
  }, [initialData]);

  const handleAnswerChange = (question, value) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [question]: value
    }));
  };

  const answeredQuestions = Object.values(answers).filter(answer => answer !== '').length;
  const totalQuestions = Object.keys(answers).length;
  const progressPercentage = Math.round((answeredQuestions / totalQuestions) * 100);
  const allQuestionsAnswered = answeredQuestions === totalQuestions;

  if (!isOpen) return null;

  const handleCalculateSizeClick = () => {
    onSave(answers); // Save the answers
    navigate('/edit-profile'); // Navigate to EditProfilePage
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h1>Your Size</h1>
        <p>We guarantee the fit you need.</p>
        <p>94% of our customers love their fit the first time.</p>
        <div className="progress-bar">
          <div className="progress-bar-fill" style={{ width: `${progressPercentage}%` }}></div>
        </div>
        <p>{progressPercentage}% Complete</p>
        <form>
          <p>Question {answeredQuestions} of {totalQuestions}</p>

          <p className="heading">Select Upper Body Shape</p>
          <OptionGroup
            options={[
              { value: 'Athletic', imgSrc: Athletic, label: 'Athletic' },
              { value: 'Slight Belly', imgSrc: Slight_Belly, label: 'Slight Belly' },
              { value: 'Significant Belly', imgSrc: Significant_Belly, label: 'Significant Belly' }
            ]}
            selectedOption={answers.upperBodyShape}
            onOptionSelect={(value) => handleAnswerChange('upperBodyShape', value)}
            id="upper-body-shape"
          />

          <p className="heading">Select Lower Body Shape</p>
          <OptionGroup
            options={[
              { value: 'Flat', imgSrc: Flat, label: 'Flat' },
              { value: 'Standard', imgSrc: Standard, label: 'Standard' },
              { value: 'Heavy', imgSrc: Heavy, label: 'Heavy' }
            ]}
            selectedOption={answers.lowerBodyShape}
            onOptionSelect={(value) => handleAnswerChange('lowerBodyShape', value)}
            id="lower-body-shape"
          />

          <p className="heading">Select Height</p>
          <div id="height" className="height">
            {['5\'1', '5\'2', '5\'3', '5\'4', '5\'5', '5\'6', '5\'7', '5\'8', '5\'9', '5\'10', '5\'11', '6\'1', '6\'2', '6\'3', '6\'4', '6\'5', '6\'6'].map(height => (
              <button
                key={height}
                type="button"
                onClick={() => handleAnswerChange('height', height)}
                className={answers.height === height ? 'selected' : ''}
              >
                {height}
              </button>
            ))}
          </div>

          <p className="heading">Select Shirt Size</p>
          <div id="shirt-size" className="shirt">
            {['36', '38', '40', '42', '44'].map(size => (
              <button
                key={size}
                type="button"
                onClick={() => handleAnswerChange('shirtSize', size)}
                className={answers.shirtSize === size ? 'selected' : ''}
              >
                {size}
              </button>
            ))}
          </div>

          <p className="heading">Select Shoulder Type</p>
          <OptionGroup
            options={[
              { value: 'Average', imgSrc: Average, label: 'Average' },
              { value: 'Sloping', imgSrc: Sloping, label: 'Sloping' }
            ]}
            selectedOption={answers.shoulderType}
            onOptionSelect={(value) => handleAnswerChange('shoulderType', value)}
            id="shoulder-type"
          />

          <p className="heading">Select Preferred Fit Type</p>
          <OptionGroup
            options={[
              { value: 'Super Slim', imgSrc: Super_Slim, label: 'Super Slim' },
              { value: 'Structured', imgSrc: Structured, label: 'Structured' },
              { value: 'Relaxed', imgSrc: Relaxed, label: 'Relaxed' }
            ]}
            selectedOption={answers.preferredFitType}
            onOptionSelect={(value) => handleAnswerChange('preferredFitType', value)}
            id="preferred-fit-type"
          />
        </form>
        <div className="button">
          <button 
            className={`btn ${allQuestionsAnswered ? 'active' : ''}`} 
            disabled={!allQuestionsAnswered}
            onClick={handleCalculateSizeClick}
          >
            Calculate Size
          </button>
        </div>
      </div>
    </div>
  );
};

YourSizeModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  initialData: PropTypes.shape({
    upperBodyShape: PropTypes.string,
    lowerBodyShape: PropTypes.string,
    height: PropTypes.string,
    shirtSize: PropTypes.string,
    shoulderType: PropTypes.string,
    preferredFitType: PropTypes.string
  })
};

export default YourSizeModal;
