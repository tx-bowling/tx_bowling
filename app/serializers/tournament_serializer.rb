# frozen_string_literal: true

# Json serializer for Tournament
class TournamentSerializer < ActiveModel::Serializer
  attributes :id,
             :name,
             :location_id,
             :entry_cost,
             :side_pots_available,
             :link_to_source,
             :contact_id,
             :schedule_ids,
             :flier,
             :created_at,
             :updated_at
end
