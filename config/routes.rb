# require 'api_constraints'

Rails.application.routes.draw do

  get 'hello_world', to: 'hello_world#index'


  # root 'v1/chats#index'
  root 'appointments#index'

  devise_for :users

  resources :appointments


  namespace :v1, defaults: { format: :json} do

      resources :chats do
      resources :messages
      end

      resources :users, only: [:create]

      resource :login, only: [:create], controller: :sessions


  end

end
