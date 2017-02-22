require 'api_constraints'

Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      get 'chats/index'
    end
  end

  namespace :api do
    namespace :v1 do
      get 'chats/show'
    end
  end

  namespace :api do
    namespace :v1 do
      get 'chats/create'
    end
  end

  devise_for :users



  namespace :api, defaults: { format: :json }, constraints: { subdomain: 'api' }, path: '/'  do

    namespace :v1, constraints: ApiConstraints.new(version: 1, default: true) do

      # root 'welcome#index'

      # resources :chats
      # resources :messages




      resource :login, only: [:create], controller: :sessions
      resources :users, only: [:create]


    end
  end

end
