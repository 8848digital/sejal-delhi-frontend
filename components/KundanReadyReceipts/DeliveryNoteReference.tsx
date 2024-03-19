import React from 'react';
import SearchSelectInputField from '../SearchSelectInputField/SearchSelectInputField';

const DeliveryNoteReference = ({
  DeliveryRefNo,
  receiptData,
  setReceiptData,
  deliveryNoteRefNo,
  setDeliveryNoteRefNo,
  setStateForDocStatus,
  readOnlyFields,
  setKunKarigarDropdownReset,
  handleGetItemsByDeliveryRef,
  defaultData,
}: any) => {
  const updatedRefList: any =
    DeliveryRefNo?.length > 0 &&
    DeliveryRefNo.map((data: any) => ({
      karigar_name: data,
    }));
  console.log('default value', defaultData);
  return (
    <>
      <div className="row align-items-center w-50">
        <div className="col-5">
          <SearchSelectInputField
            karigarData={updatedRefList}
            defaultValue={
              defaultData !== undefined
                ? defaultData[0]?.delivery_note_ref_no
                : ''
            }
            recipitData={receiptData}
            setRecipitData={setReceiptData}
            selectedDropdownValue={deliveryNoteRefNo}
            setSelectedDropdownValue={setDeliveryNoteRefNo}
            setStateForDocStatus={setStateForDocStatus}
            placeholder={'Delivery Note Ref no.'}
            className={'form-control input-sm border border-secondary'}
            readOnlyFields={readOnlyFields}
            setSelectDropDownReset={setKunKarigarDropdownReset}
            name="delivery_note_ref_no"
          />
        </div>
        <div className="col-4">
          <button
            type="button"
            className="btn btn-outline-primary py-0 "
            onClick={() => {
              if (!readOnlyFields) {
                handleGetItemsByDeliveryRef();
              }
            }}
            disabled={readOnlyFields}
            // onClick={handleGetItemsByDeliveryRef}
          >
            Get Items
          </button>
        </div>
      </div>
    </>
  );
};

export default DeliveryNoteReference;
