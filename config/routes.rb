Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :update]
    resource :session, only: [:create, :destroy]
    resources :songs, only: [:index, :show, :create, :destroy]
    resources :comments, only: [:index, :show, :create, :destroy]
  end

  root "static_pages#root"
end
