# frozen_string_literal: true

# Base mailer to inherit from
class ApplicationMailer < ActionMailer::Base
  default from: 'from@example.com'
  layout 'mailer'
end
