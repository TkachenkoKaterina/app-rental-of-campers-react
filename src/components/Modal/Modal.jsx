import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../store/catalogsSlice";
import { fetchCatalogById } from "../../store/operations";
import css from "./Modal.module.css";

const Modal = ({ onClose, children }) => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.catalogs.isModalOpen);
  const selectedItemId = useSelector((state) => state.catalogs.selectedItemId);
  // const selectedCatalogItem = useSelector(
  //   (state) => state.catalogs.selectedCatalogItem
  // );

  useEffect(() => {
    if (isModalOpen && selectedItemId) {
      dispatch(fetchCatalogById(selectedItemId));
      // fetchCatalogById(selectedItemId).then((item) => {
      //   // Dispatch an action to store the fetched item in Redux store
      //   // dispatch(setSelectedCatalogItem(item));
      // });
    }
  }, [isModalOpen, selectedItemId, dispatch]);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <>
      {isModalOpen && (
        <div className={css.modalOverlay} onClick={handleCloseModal}>
          <div className={css.modal} onClick={(e) => e.stopPropagation()}>
            <button className={css.closeButton} onClick={handleCloseModal}>
              Close
            </button>
            {/* Render details of the selected catalog item here */}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
