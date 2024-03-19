import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/readyReceipts.module.css';
import KundanListing from './KundanReadyReceiptsListing';
import KundanKarigarReadyReceiptMasterTable from './KundanKarigarReadyReceiptMasterTable';
import KundanTable from './KundanTable';
import PurchaseReceiptModal from '../ModalMaster/PurchaseReceiptModal';
import useReadyReceiptKarigar from '@/hooks/PurchaseReceiptHook/purchase-receipt-master-hook';
import TabSection from '../TabSection';
import SearchSelectInputField from '../SearchSelectInputField/SearchSelectInputField';
import DeliveryNoteReference from './DeliveryNoteReference';

const ReadyReceiptKundanKarigarMaster = () => {
  const {
    kundanListing,
    setKundanListing,
    handleCreate,
    handleReceiptChange,
    handleAddRow,
    karigarData,
    setReceiptData,
    handleFieldChange,
    tableData,
    handleDeleteRow,
    handleTabPress,
    setTableData,
    kundanKarigarData,
    handleModal,
    handleModalFieldChange,
    materialWeight,
    materialListData,
    calculateRowValue,
    handleDeleteChildTableRow,
    receiptData,
    setMaterialWeight,
    closeModal,
    handleSaveModal,
    showModal,
    lastPartOfURL,
    HandleDeleteReceipt,
    selectedDropdownValue,
    setSelectedDropdownValue,
    readyReceiptType,
    setReadyReceiptType,
    stateForDocStatus,
    setStateForDocStatus,
    readOnlyFields,
    setReadOnlyFields,
    HandleUpdateDocStatus,
    handleTabPressOnModal,
    HandleEmptyReadyReceiptForm,
    selectedKundanKarigarDropdownValue,
    setSelectedKundanKarigarDropdownValue,
    kunKarigarDropdownReset,
    setKunKarigarDropdownReset,
    calculateEditTotal,
    purchasRecieptListParams,
    handleClearFileUploadInput,
    handleUpdateReceipt,
    setMatWt,
    warehouseListData,
    selectedLocation,
    setSelectedLocation,
    firstInputRef,
    lastInputRef,
    specificDataFromStore,
    handleGetItemsByDeliveryRef,
    deliveryNoteRefNo,
    setDeliveryNoteRefNo,
    deliveryRefDropdownData,
  } = useReadyReceiptKarigar();

  const capitalizeWords: any = (word: any) => {
    return word?.replace(/\b\w/g, (char: any) => char?.toUpperCase());
  };
  const receiptName: any = capitalizeWords(lastPartOfURL);
  console.log('selected location', selectedLocation);

  return (
    <div className="container-lg ">
      <div>
        <div className="d-flex justify-content-center">
          <TabSection
            firstTabHeading={`Ready Receipts ${receiptName} Karigar`}
            secondTabHeading="Create New Ready Receipt"
          />
        </div>
        <div className="tab-content " id="pills-tabContent">
          <div
            className="tab-pane fade show active tab-width"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div className="tab-responsive row">
              <div className="col-11 mx-auto">
                <KundanListing
                  kundanListing={kundanListing}
                  setKundanListing={setKundanListing}
                  HandleDeleteReceipt={HandleDeleteReceipt}
                  HandleUpdateDocStatus={HandleUpdateDocStatus}
                  karigarData={karigarData}
                  colPlaceholder1={'Receipt No.'}
                  colPlaceholder2={'Karigar'}
                  deleteApiVersion={'v1'}
                  deleteApiMethod={'delete_purchase_receipt'}
                  deleteApiEntity={'purchase_receipt'}
                  purchasRecieptListParams={purchasRecieptListParams}
                  printApiMethod={
                    lastPartOfURL === 'kundan'
                      ? 'print_purchase_receipt_kundan'
                      : 'print_purchase_receipt_mangalsutra'
                  }
                  printApiEntity={
                    lastPartOfURL === 'kundan'
                      ? 'purchase_receipt'
                      : 'purchase_receipt'
                  }
                  kunKarigarDropdownReset={kunKarigarDropdownReset}
                  setKunKarigarDropdownReset={setKunKarigarDropdownReset}
                />
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div>
              <div className={`${styles.button_field} mb-1`}>
                <button
                  type="submit"
                  onClick={HandleEmptyReadyReceiptForm}
                  className=" btn btn-outline-primary px-2 py-0 form-submit-button"
                >
                  New
                </button>
                <button
                  type="button"
                  className={`btn btn-outline-primary form-submit-button px-2 py-0 ms-3`}
                  onClick={handleCreate}
                >
                  Create
                </button>
              </div>
              <div className=" ">
                <KundanTable
                  handleReceiptChange={handleReceiptChange}
                  receiptData={receiptData}
                  karigarData={karigarData}
                  setReceiptData={setReceiptData}
                  selectedDropdownValue={selectedDropdownValue}
                  setSelectedDropdownValue={setSelectedDropdownValue}
                  readyReceiptType={readyReceiptType}
                  setReadyReceiptType={setReadyReceiptType}
                  stateForDocStatus={stateForDocStatus}
                  setStateForDocStatus={setStateForDocStatus}
                  readOnlyFields={readOnlyFields}
                  setReadOnlyFields={setReadOnlyFields}
                  warehouseListData={warehouseListData}
                  selectedLocation={selectedLocation}
                  setSelectedLocation={setSelectedLocation}
                  kunKarigarDropdownReset={kunKarigarDropdownReset}
                  setKunKarigarDropdownReset={setKunKarigarDropdownReset}
                />
              </div>
              <div className="container d-flex justify-content-between p-0 mb-1">
                <DeliveryNoteReference
                  DeliveryRefNo={deliveryRefDropdownData}
                  receiptData={receiptData}
                  setReceiptData={setReceiptData}
                  deliveryNoteRefNo={deliveryNoteRefNo}
                  setDeliveryNoteRefNo={setDeliveryNoteRefNo}
                  setStateForDocStatus={setStateForDocStatus}
                  readOnlyFields={readOnlyFields}
                  setKunKarigarDropdownReset={setKunKarigarDropdownReset}
                  handleGetItemsByDeliveryRef={handleGetItemsByDeliveryRef}
                />
                <div>
                  <button
                    className="btn btn-link p-0"
                    onClick={() => {
                      if (!readOnlyFields) {
                        handleAddRow('tableRow');
                      }
                    }}
                  >
                    Add Row
                  </button>
                </div>
              </div>
              <div>
                <KundanKarigarReadyReceiptMasterTable
                  handleFieldChange={handleFieldChange}
                  tableData={tableData}
                  handleDeleteRow={handleDeleteRow}
                  handleTabPress={handleTabPress}
                  setTableData={setTableData}
                  selectedKundanKarigarDropdownValue={
                    selectedKundanKarigarDropdownValue
                  }
                  setSelectedKundanKarigarDropdownValue={
                    setSelectedKundanKarigarDropdownValue
                  }
                  kundanKarigarData={kundanKarigarData}
                  handleModal={handleModal}
                  selectedDropdownValue={selectedDropdownValue}
                  setSelectedDropdownValue={setSelectedDropdownValue}
                  stateForDocStatus={stateForDocStatus}
                  setStateForDocStatus={setStateForDocStatus}
                  readOnlyFields={readOnlyFields}
                  setReadOnlyFields={setReadOnlyFields}
                  materialWeight={materialWeight}
                  kunKarigarDropdownReset={kunKarigarDropdownReset}
                  setKunKarigarDropdownReset={setKunKarigarDropdownReset}
                  calculateEditTotal={calculateEditTotal}
                  handleClearFileUploadInput={handleClearFileUploadInput}
                  handleCreate={handleCreate}
                  setMatWt={setMatWt}
                  firstInputRef={firstInputRef}
                  lastInputRef={lastInputRef}
                  specificDataFromStore={specificDataFromStore}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <PurchaseReceiptModal
          tableData={tableData}
          showModal={showModal}
          closeModal={closeModal}
          handleModalFieldChange={handleModalFieldChange}
          handleAddRow={handleAddRow}
          materialWeight={materialWeight}
          setMaterialWeight={setMaterialWeight}
          materialListData={materialListData}
          calculateRowValue={calculateRowValue}
          handleDeleteChildTableRow={handleDeleteChildTableRow}
          setRecipitData={setReceiptData}
          recipitData={receiptData}
          selectedDropdownValue={selectedDropdownValue}
          setSelectedDropdownValue={setSelectedDropdownValue}
          handleSaveModal={handleSaveModal}
          setStateForDocStatus={setStateForDocStatus}
          readOnlyFields={readOnlyFields}
          setReadOnlyFields={setReadOnlyFields}
          handleTabPressOnModal={handleTabPressOnModal}
        />
      </div>
    </div>
  );
};

export default ReadyReceiptKundanKarigarMaster;
