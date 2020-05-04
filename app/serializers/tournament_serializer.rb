# frozen_string_literal: true

# Json serializer for Tournament
class TournamentSerializer < ActiveModel::Serializer
  attributes :id,
             :name,
             :location_id,
             :entry_fee,
             :side_pots_available,
             :source_url,
             :source_description,
             :contact_id,
             :schedule_ids,
             :flier,
             :created_at,
             :updated_at
end
