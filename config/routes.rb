# require 'api_constraints'

Rails.application.routes.draw do

  get 'hello_world', to: 'hello_world#index'


  # root 'chats#index'
  root 'appointments#index'

  devise_for :users

  resources :appointments

  resources :chats do
  resources :messages

  # resources :users, only: [:create]

  # resource :login, only: [:create], controller: :sessions


  end

end
