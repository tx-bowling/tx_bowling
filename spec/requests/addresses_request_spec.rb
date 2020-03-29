require 'rails_helper'

RSpec.describe "Addresses", type: :request do
  let(:valid_attributes) do
    skip('Add a hash of attributes valid for your model')
  end

  let(:invalid_attributes) do
    skip('Add a hash of attributes invalid for your model')
  end

  describe "GET /index" do
    it "renders a successful response" do
      Address.create! valid_attributes
      get addresses_url
      expect(response).to be_successful
    end
  end

  describe 'POST /create' do
    context 'with valid parameters' do
      it 'creates a new Location' do
        expect do
          post addresses_url, params: { address: valid_attributes }
        end.to change(Address, :count).by(1)
      end

      it 'redirects to the created address' do
        post addresses_url, params: { address: valid_attributes }
        expect(response).to redirect_to(address_url(Address.last))
      end
    end

    context 'with invalid parameters' do
      it 'does not create a new Location' do
        expect do
          post addresses_url, params: { address: invalid_attributes }
        end.to change(Address, :count).by(0)
      end

      it "renders an unsuccessful response (i.e. to display the 'new' template)" do
        post addresses_url, params: { address: invalid_attributes }
        expect(response).to be_successful
      end
    end
  end
end
