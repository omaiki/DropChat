# require 'api_constraints'

Rails.application.routes.draw do

  devise_for :users


  namespace :v1, defaults: { format: :json} do

      resources :chats

      resource :login, only: [:create], controller: :sessions
      resources :users, only: [:create]


  end

end
