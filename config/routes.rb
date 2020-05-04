# frozen_string_literal: true

Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'home#index'
  scope :api, as: nil, defaults: { format: :json } do
    scope :v1 do
      devise_for :users

      resources :events
      resources :locations, only: %i[create show]
      resources :schedules, only: %i[create]
      resources :addresses, only: %i[create show]
      resources :tournaments do
        get 'location', to: 'locations#show'
        get 'schedules', to: 'schedules#index'
      end
    end
  end
end
