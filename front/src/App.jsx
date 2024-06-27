import React from 'react';
import { connect } from 'react-redux';
import WordDisplay from './components/WordDisplay.jsx';
import { setTypedText } from './store/WordSlice';

const App = ({ typedText, setTypedText }) => {
  
  const handleInputChange = (e) => {
    setTypedText(e.target.value);
  };

  return (
      <div>
        <WordDisplay typedText={typedText} handleInputChange={handleInputChange} />
      </div>
    );
}

  const mapStateToProps = (state) => {
    return {
      typedText: state.typedText,
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      setTypedText: (text) => dispatch(setTypedText(text)),
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(App);