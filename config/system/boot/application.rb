# frozen_string_literal: true

# Use bootable componets to manually register framework dependencies
TxBowling::Container.boot(:application) do |app|
  # app.register(:name) { instance/class }
end
