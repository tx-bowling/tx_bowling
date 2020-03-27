# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Address, type: :model do
  let(:subject) { FactoryBot.build(:address, :with_coordinates) }
  let(:geocoder) { Geocoder }

  before(:each) do
    TxBowling::Container.stub('geocoder', geocoder)
  end

  it 'requires street_1', type: :unit do
    expect(subject).to be_valid

    subject.street_1 = nil
    expect(subject).not_to be_valid

    subject.street_1 = ''
    expect(subject).not_to be_valid

    expect(subject.errors.full_messages).to include "Street 1 can't be blank"
  end

  it 'requires city', type: :unit do
    expect(subject).to be_valid

    subject.city = nil
    expect(subject).not_to be_valid

    subject.city = ''
    expect(subject).not_to be_valid

    expect(subject.errors.full_messages).to include "City can't be blank"
  end

  it 'requires state', type: :unit do
    expect(subject).to be_valid

    subject.state = nil
    expect(subject).not_to be_valid

    subject.state = ''
    expect(subject).not_to be_valid

    expect(subject.errors.full_messages).to include "State can't be blank"
  end

  it 'requires zip', type: :unit do
    expect(subject).to be_valid

    subject.zip = nil
    expect(subject).not_to be_valid

    subject.zip = ''
    expect(subject).not_to be_valid

    expect(subject.errors.full_messages).to include "Zip can't be blank"
  end

  it 'requires a found address', type: :unit do
    expect(subject).to be_valid

    subject.latitude = nil
    expect(subject).not_to be_valid

    subject.longitude = nil
    expect(subject).not_to be_valid

    subject.latitude = '12.123'
    expect(subject).not_to be_valid

    expect(subject.errors.full_messages).to include "Address can't be found"
  end

  describe '#generate_geolocation', type: :unit do
    let(:subject) { address.send(:generate_geolocation) }
    let(:formatted_address) do
      "#{address.street_1}, #{address.city}, #{address.state} #{address.zip}"
    end

    context 'with a valid address', type: :unit do
      let(:address) { FactoryBot.build(:address, :valid_for_webmock) }
      let(:lat) { Faker::Address.latitude.to_s }
      let(:lon) { Faker::Address.longitude.to_s }

      before(:each) do
        allow(geocoder).to receive(:search).with(formatted_address).and_return(
          [Geocoder::Result::Base.new({ 'lat': lat, 'lon': lon })]
        )
      end

      it 'sets latitude and longitude' do
        expect(subject.latitude).to eq lat
        expect(subject.longitude).to eq lon
      end
    end

    context 'with an invalid address', type: :unit do
      let(:address) { FactoryBot.build(:address, :invalid_for_webmock) }

      before(:each) do
        allow(geocoder).to receive(:search).with(formatted_address).and_return([])
      end

      it 'sets latitude and longitude to nil' do
        expect(subject.latitude).to eq nil
        expect(subject.longitude).to eq nil
      end
    end

    it 'gets called before save', type: :integration do
      address = FactoryBot.build(:address, :invalid_for_webmock)
      expect { address.save! }. to raise_error ActiveRecord::RecordInvalid
    end
  end
end