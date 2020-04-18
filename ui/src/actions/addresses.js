import AddressesService from './../services/addresses';

// GET ADDRESSES -----------------------------------------------
export const GET_ADDRESSES_STARTED = 'GET_ADDRESSES_STARTED';
export const GET_ADDRESSES_SUCCESS = 'GET_ADDRESSES_SUCCESS';
export const GET_ADDRESSES_FAILURE = 'GET_ADDRESSES_FAILURE';

const getAddressesStarted = () => ({
  type: GET_ADDRESSES_STARTED,
});

const getAddressesSuccess = (addressesData) => {
  let data = {};
  addressesData.forEach(address => (data[address.id] = address));

  return {
    type: GET_ADDRESSES_SUCCESS,
    payload: {
      data: data,
    },
  };
};

export const getAddressesFailure = (errorMessage) => ({
  type: GET_ADDRESSES_FAILURE,
  payload: {
    errorMessage,
  },
});

export const getAddresses = () => {
  return (dispatch) => {
    dispatch(getAddressesStarted());
    new AddressesService()
      .getAddresses()
      .then(res => {
        dispatch(getAddressesSuccess(res.data));
      })
      .catch(err => {
        dispatch(getAddressesFailure(err.message));
      });
  };
};

// GET ADDRESS -----------------------------------------------
export const GET_ADDRESS_STARTED = 'GET_ADDRESS_STARTED';
export const GET_ADDRESS_SUCCESS = 'GET_ADDRESS_SUCCESS';
export const GET_ADDRESS_FAILURE = 'GET_ADDRESS_FAILURE';

const getAddressStarted = () => ({
  type: GET_ADDRESS_STARTED,
});

const getAddressSuccess = (addressData) => {
  return {
    type: GET_ADDRESS_SUCCESS,
    payload: {
      address: addressData.address,
    },
  };
};

export const getAddressFailure = (errorMessage) => ({
  type: GET_ADDRESS_FAILURE,
  payload: {
    errorMessage,
  },
});

export const getAddress = (id) => {
  return (dispatch) => {
    dispatch(getAddressStarted());
    new AddressesService()
      .getAddress(id)
      .then(res => {
        dispatch(getAddressSuccess(res.data));
      })
      .catch(err => {
        dispatch(getAddressFailure(err.message));
      });
  };
};
