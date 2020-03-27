require 'rails_helper'

RSpec.describe Location, type: :model do
  let(:subject) { FactoryBot.build(:location, address: FactoryBot.build(:address, :with_coordinates)) }

  describe 'validations' do
    it 'must have a name' do
      expect(subject.valid?).to be true

      subject.name = ''
      expect(subject.valid?).to be false

      subject.name = nil
      expect(subject.valid?).to be false
    end
    it 'must have a has_bar' do
      expect(subject.valid?).to be true

      subject.has_bar = nil
      expect(subject.valid?).to be false
    end
    it 'must have a has_restaurant' do
      expect(subject.valid?).to be true

      subject.has_restaurant = nil
      expect(subject.valid?).to be false
    end
    it 'must have an address' do
      expect(subject.valid?).to be true

      subject.address = nil
      expect(subject.valid?).to be false
    end
  end

  describe 'defaults' do
    let(:subject) { Location.new }

    it 'has_bar to false' do
      expect(subject.has_bar).to be false
    end

    it 'has_restaurant to false' do
      expect(subject.has_restaurant).to be false
    end

    it 'lane_count to 0' do
      expect(subject.lane_count).to be 0
    end
  end
end
