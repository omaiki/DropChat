require 'api_constraints'

Rails.application.routes.draw do


  namespace :api do
    scope module: :v1 do

      resources :chats
      devise_for :users
      resource :login, only: [:create], controller: :sessions
      resources :users, only: [:create]



    end
  end

end
