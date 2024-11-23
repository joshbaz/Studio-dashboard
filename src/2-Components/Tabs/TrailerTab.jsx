import React from 'react'
import Button from '../Buttons/Button'
import ViewTrailerFilm from '../ViewForms/ViewTrailerFilm';
import TrailersForm from '../Forms/TrailersForm';

const TrailerTab = () => {
  const [editing, setEditing] = React.useState(false);
  const formRef = React.useRef();

  const handleEditing = () => {
    setEditing(() => !editing)
  }

  const handleFormSubmit = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();
    } else {
      alert("No form")
    }
  };

  const handleAPISubmission = (editInfo) => {
    alert(`form submitted ${editInfo.title}`);
    handleEditing()
  }
  return (
    <div className="flex relative flex-col gap-6 pt-4">
      {
        <div>
          <ViewTrailerFilm />
        </div>
      }
      {/**FORM**/}
      {/** VIEW DETAILS */}


      {/** Buttons */}
    
    </div>
  )
}

export default TrailerTab