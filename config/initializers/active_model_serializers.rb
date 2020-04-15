# frozen_string_literal: true

# config/initializers/active_model_serializers.rb
require 'active_model_serializers/register_jsonapi_renderer'

ActiveModelSerializers.config.adapter = :json
ActiveModelSerializers.config.key_transform = :underscore
