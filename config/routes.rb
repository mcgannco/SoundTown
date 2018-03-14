Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :index, :show]
    resource :session, only: [:create, :destroy]
    resources :songs, only: [:index, :show, :create, :destroy]
    resources :comments, only: [:index, :show, :create, :destroy]
  end

  root "static_pages#root"
end
