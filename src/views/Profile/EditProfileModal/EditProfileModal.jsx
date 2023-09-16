import { ContainerModalReview, ModalEdit } from "./EditProfileModal.Styled"

export const EditProfileModal = ({setShowModal}) => {

    const showModal = ()=> {
        setShowModal(false)
      }
    return (
        <ContainerModalReview>
            <ModalEdit>
                <button onClick={showModal}> X </button>
            </ModalEdit>
        </ContainerModalReview>
    );
};