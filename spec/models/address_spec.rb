# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Address, type: :model do
  let(:subject) { FactoryBot.build(:address) }

  it 'requires street_address', type: :unit do
    expect(subject).to be_valid

    subject.street_address = nil
    expect(subject).not_to be_valid

    subject.street_address = ''
    expect(subject).not_to be_valid

    expect(subject.errors.full_messages).to include "Street address can't be blank"
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

  it 'requires zip_code', type: :unit do
    expect(subject).to be_valid

    subject.zip_code = nil
    expect(subject).not_to be_valid

    subject.zip_code = ''
    expect(subject).not_to be_valid

    expect(subject.errors.full_messages).to include "Zip code can't be blank"
  end
end
