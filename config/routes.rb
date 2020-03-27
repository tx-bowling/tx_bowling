# frozen_string_literal: true

Rails.application.routes.draw do
  resources :locations
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'home#index'
  resource :locations, except: %i[delete destroy]
  resource :addresses, only: [:create]
end
