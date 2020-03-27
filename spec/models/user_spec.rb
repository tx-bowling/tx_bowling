# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do
  let(:subject) { FactoryBot.build(:user) }

  describe 'validations' do
    it 'requires email', type: :unit do
      expect(subject).to be_valid

      subject.email = ''
      expect(subject).not_to be_valid

      subject.email = nil
      expect(subject).not_to be_valid

      expect(subject.errors.full_messages).to include "Email can't be blank"
    end

    it 'requires encrypted_password', type: :unit do
      expect(subject).to be_valid

      subject.encrypted_password = ''
      expect(subject).not_to be_valid

      subject.encrypted_password = nil
      expect(subject).not_to be_valid

      expect(subject.errors.full_messages).to include "Encrypted password can't be blank"
    end

    it 'requires first_name', type: :unit do
      expect(subject).to be_valid

      subject.first_name = ''
      expect(subject).not_to be_valid

      subject.first_name = nil
      expect(subject).not_to be_valid

      expect(subject.errors.full_messages).to include "First name can't be blank"
    end

    it 'requires last_name', type: :unit do
      expect(subject).to be_valid

      subject.last_name = ''
      expect(subject).not_to be_valid

      subject.last_name = nil
      expect(subject).not_to be_valid

      expect(subject.errors.full_messages).to include "Last name can't be blank"
    end
  end
end
