import React from 'react'
import Button from '../Buttons/Button'
import Audience from '../Forms/Audience';
import ViewAudienceDetails from '../ViewForms/ViewAudienceDetails';
import { useUpdateFilm } from '../../5-Store/TanstackStore/services/mutations';
import { Alert, Snackbar } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { updateEpisodeContent, updateFilmContent } from '../../5-Store/TanstackStore/services/api';
import { queryClient } from '../../lib/tanstack';
import { useParams } from 'react-router-dom';

const AudienceTab = ({film, type}) => {
  const [editing, setEditing] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState(null);
  const formRef = React.useRef();
  let params = useParams();

   //mutation for update film
  //updateFilmContent
  const updateFilmMutation = useMutation(
    {
      mutationFn: type === "episode" ? updateEpisodeContent : updateFilmContent,
      onSuccess: async (data) => {
       // console.log("success", data);
        setSnackbarMessage({ message: data.message, severity: "success" });
        type === "episode" ? await queryClient.invalidateQueries({ queryKey: ["film", params?.id] }) : await queryClient.invalidateQueries({ queryKey: ["film", params?.id] })
        ;
        handleEditing();
      },
      onError: (error) => {
        console.log("error", error);
        setSnackbarMessage({
          message: error?.message,
          severity: "error",
        });
      }
    }
  );

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
    updateFilmMutation.mutate(editInfo);
  }

  
  return (
    <div className="flex relative flex-col gap-6 pt-4">
      {
        editing ? (
          <div >
            <Audience innerref={formRef} handleStepNext={handleAPISubmission} type={type}   editdata={true}
            film={film} />
          </div>
        ) : (<div>
          <ViewAudienceDetails film={film} type={type}  />
        </div>)
      }

      {/** Buttons */}
      {
        editing ? (<div className="flex gap-4 justify-end border-t border-t-[#FFFAF6] border-opacity-40 pt-6">
          <Button onClick={handleEditing} className="w-max min-w-[150px] px-4 rounded-full bg-secondary-300 ">Back</Button>
          {
            updateFilmMutation.isPending ? (
              <Button
             disabled
              className="w-max min-w-[150px] px-4 rounded-full"
            >
              Submitting...
            </Button>
            ) : (
              <Button
              onClick={handleFormSubmit}
              className="w-max min-w-[150px] px-4 rounded-full"
            >
              Save & Close form
            </Button>
            )
          }
        </div>) : (<div className="flex justify-end border-t border-t-[#FFFAF6] border-opacity-40 pt-6"><Button onClick={handleEditing} className="w-max min-w-[150px] px-4 rounded-full ">Edit Details</Button></div>)
      }

        {/** snackbar */}
        <Snackbar
        open={snackbarMessage !== null}
        autoHideDuration={6000}
        onClose={() => setSnackbarMessage(null)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity={snackbarMessage?.severity} variant="filled">
          {snackbarMessage?.message}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default AudienceTab