import AddressesService from './../services/addresses';

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
