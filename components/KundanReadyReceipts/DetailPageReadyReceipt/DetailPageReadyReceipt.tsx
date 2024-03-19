import UseKundanKarigarDetailHook from '@/hooks/PurchaseReceiptHook/PurchaseReceiptDetailHook/kundan-karigar-detail-hook';
import React, { useEffect, useState } from 'react';
import KundanTable from '../KundanTable';
import KundanKarigarReadyReceiptMasterTable from '../KundanKarigarReadyReceiptMasterTable';
import useReadyReceiptKarigar from '@/hooks/PurchaseReceiptHook/purchase-receipt-master-hook';
import DocStatusButtonChanges from '../../ButtonChanges/DocStatusButtonChanges';
import PurchaseReceiptModal from '../../ModalMaster/PurchaseReceiptModal';
import '../../../styles/detailPage.module.css';
import Loader from '../../NoRecord/Loader';
import NoRecord from '../../NoRecord/NoRecord';
import { useRouter } from 'next/router';
import DeliveryNoteReference from '../DeliveryNoteReference';

const DetailPageReadyReceipt = () => {
  const {
    defaultKarigarData,
    readOnlyFields,
    setReadOnlyFields,
    isLoading,
    handlePrintApi,
  } = UseKundanKarigarDetailHook();

  const { query } = useRouter();
  const {
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
    handleUpdateReceipt,
    setShowSaveButtonForAmendFlow,
    showSaveButtonForAmendFlow,
    HandleAmendButtonForDuplicateChitti,
    selectedKundanKarigarDropdownValue,
    setSelectedKundanKarigarDropdownValue,
    calculateEditTotal,
    handleClearFileUploadInput,
    lastInputRef,
    firstInputRef,
    setMatWt,
    HandleUpdateDocStatus,
    handleTabPressOnModal,
    setKunKarigarDropdownReset,
    warehouseListData,
    selectedLocation,
    setSelectedLocation,
    specificDataFromStore,
    deliveryRefDropdownData,
    deliveryNoteRefNo,
    setDeliveryNoteRefNo,
    handleGetItemsByDeliveryRef,
  } = useReadyReceiptKarigar();

  // const SpecificDataFromStore: any = useSelector(get_specific_receipt_data);
  const router = useRouter();
  const [tabDisabled, setTabDisabled] = useState<boolean>(false);

  useEffect(() => {
    if (defaultKarigarData?.length > 0 && defaultKarigarData !== null) {
      defaultKarigarData.map((data: any) => {
        setTableData(data?.items);
        setReceiptData(data);
        setReadyReceiptType(data?.custom_ready_receipt_type);
        setSelectedDropdownValue(data?.custom_karigar);
        // setSelectedLocation(data?.set_warehouse);
      });
    }
  }, [
    defaultKarigarData,
    setReadyReceiptType,
    setSelectedDropdownValue,
    setReceiptData,
    setTableData,
    setSelectedLocation,
  ]);
  useEffect(() => {
    setTabDisabled(true); // Disable Tab key
    setTimeout(() => {
      setTabDisabled(false); // Enable Tab key after 2 seconds
    }, 2000);
  }, []);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (tabDisabled && event.key === 'Tab') {
        event.preventDefault(); // Prevent default Tab behavior
      }
    };

    window.addEventListener('keydown', handleKeyDown); // Add event listener

    return () => {
      window.removeEventListener('keydown', handleKeyDown); // Cleanup on component unmount
    };
  }, [tabDisabled]);
  console.log('karigar data', defaultKarigarData);
  return (
    <div className="container">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {specificDataFromStore?.data?.length === 0 && isLoading === false ? (
            <NoRecord
              title="Ready Receipt"
              content="Sorry for disappointing you! We’re unable to find any relevant data"
              backButtonUrl={`/readyReceipt/${query?.receipt}`}
            />
          ) : (
            <div>
              {defaultKarigarData?.length > 0 &&
                defaultKarigarData !== null &&
                defaultKarigarData.map((data: any, index: any) => (
                  <div key={index}>
                    <DocStatusButtonChanges
                      data={data}
                      stateForDocStatus={stateForDocStatus}
                      setStateForDocStatus={setStateForDocStatus}
                      handleUpdateReceipt={handleUpdateReceipt}
                      readOnlyFields={readOnlyFields}
                      setReadOnlyFields={setReadOnlyFields}
                      setShowSaveButtonForAmendFlow={
                        setShowSaveButtonForAmendFlow
                      }
                      showSaveButtonForAmendFlow={showSaveButtonForAmendFlow}
                      HandleAmendButtonForDuplicateChitti={
                        HandleAmendButtonForDuplicateChitti
                      }
                      handlePrintApi={handlePrintApi}
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
                      HandleUpdateDocStatus={HandleUpdateDocStatus}
                      HandleDeleteReceipt={HandleDeleteReceipt}
                    />
                  </div>
                ))}

              <div className=" table">
                <KundanTable
                  handleReceiptChange={handleReceiptChange}
                  recieptData={receiptData}
                  karigarData={karigarData}
                  setRecipitData={setReceiptData}
                  selectedDropdownValue={selectedDropdownValue}
                  setSelectedDropdownValue={setSelectedDropdownValue}
                  defaultKarigarData={defaultKarigarData}
                  setReadyReceiptType={setReadyReceiptType}
                  setStateForDocStatus={setStateForDocStatus}
                  readOnlyFields={readOnlyFields}
                  setReadOnlyFields={setReadOnlyFields}
                  warehouseListData={warehouseListData}
                  selectedLocation={selectedLocation}
                  setSelectedLocation={setSelectedLocation}
                  // kunKarigarDropdownReset={kunKarigarDropdownReset}
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
                  defaultData={defaultKarigarData}
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
              <div className="table">
                <KundanKarigarReadyReceiptMasterTable
                  handleFieldChange={handleFieldChange}
                  tableData={tableData}
                  selectedKundanKarigarDropdownValue={
                    selectedKundanKarigarDropdownValue
                  }
                  setSelectedKundanKarigarDropdownValue={
                    setSelectedKundanKarigarDropdownValue
                  }
                  handleDeleteRow={handleDeleteRow}
                  handleTabPress={handleTabPress}
                  setTableData={setTableData}
                  kundanKarigarData={kundanKarigarData}
                  handleModal={handleModal}
                  setStateForDocStatus={setStateForDocStatus}
                  readOnlyFields={readOnlyFields}
                  setReadOnlyFields={setReadOnlyFields}
                  calculateEditTotal={calculateEditTotal}
                  handleClearFileUploadInput={handleClearFileUploadInput}
                  keyValue={'edit'}
                  handleUpdateReceipt={handleUpdateReceipt}
                  lastInputRef={lastInputRef}
                  firstInputRef={firstInputRef}
                  setMatWt={setMatWt}
                  setKunKarigarDropdownReset={setKunKarigarDropdownReset}
                  specificDataFromStore={specificDataFromStore}
                />
              </div>
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
          )}
        </>
      )}
    </div>
  );
};

export default DetailPageReadyReceipt;
