# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Location, type: :model do
  let(:subject) { FactoryBot.build(:location, address: FactoryBot.build(:address)) }

  describe 'validations' do
    it 'must have a name', type: :unit do
      expect(subject).to be_valid

      subject.name = ''
      expect(subject).not_to be_valid

      subject.name = nil
      expect(subject).not_to be_valid

      expect(subject.errors.full_messages).to include "Name can't be blank"
    end

    it 'must have a has_bar', type: :unit do
      expect(subject).to be_valid

      subject.has_bar = nil
      expect(subject).not_to be_valid

      expect(subject.errors.full_messages).to include 'Has bar must be boolean'
    end

    it 'must have a has_restaurant', type: :unit do
      expect(subject).to be_valid

      subject.has_restaurant = nil
      expect(subject).not_to be_valid

      expect(subject.errors.full_messages).to include 'Has restaurant must be boolean'
    end
    it 'must have an address', type: :unit do
      expect(subject).to be_valid

      subject.address = nil
      expect(subject).not_to be_valid

      expect(subject.errors.full_messages).to include 'Address must exist'
    end
  end

  describe 'defaults' do
    let(:subject) { Location.new }

    it 'has_bar to false', type: :unit do
      expect(subject.has_bar).to be false
    end

    it 'has_restaurant to false', type: :unit do
      expect(subject.has_restaurant).to be false
    end

    it 'lane_count to 0', type: :unit do
      expect(subject.lane_count).to be 0
    end
  end
end
