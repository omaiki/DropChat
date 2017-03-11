# require 'api_constraints'

Rails.application.routes.draw do

  devise_for :users

  root to: 'site#welcome'


  namespace :v1, defaults: { format: :json} do

      resources :chats do
      resources :messages
      end

      resources :users, only: [:create]

      resource :login, only: [:create], controller: :sessions


  end

end
