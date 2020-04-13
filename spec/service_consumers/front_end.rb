
Pact.provider_states_for "TX Bowling - Front End" do

  # set_up do
  #   AnimalService::DATABASE[:animals].truncate
  # end

  provider_state "there are multiple locations" do
    set_up do
      FactoryBot.create_list(:location, 2)
    end
  end
end

# Pact.provider_states_for "TX Bowling - Front End" do
#
#   set_up do
#     AnimalService::DATABASE[:animals].truncate
#   end
#
#   provider_state "there is an alligator named Mary" do
#     set_up do
#       AnimalService::DATABASE[:animals].insert(name: 'Mary')
#     end
#   end
#
#   provider_state "there is not an alligator named Mary" do
#     no_op
#   end
#
#   provider_state "an error occurs retrieving an alligator" do
#     set_up do
#       allow(AnimalService::AnimalRepository).to receive(:find_alligator_by_name).and_raise("Argh!!!")
#     end
#   end
# end
