# Use bootable componets to manually register framework dependencies
TxBowling::Container.boot(:application) do |app|
  app.register(:geocoder) { Geocoder }
end
