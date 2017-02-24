# require 'api_constraints'

Rails.application.routes.draw do

  devise_for :users


  namespace :v1, defaults: { format: :json} do

      resources :chats do
      resources :messages
      end

      resource :login, only: [:create], controller: :sessions
      resources :users, only: [:create]


  end

end
