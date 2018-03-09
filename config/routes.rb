Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :songs, only: [:index, :show, :create, :update, :delete]
  end

  root "static_pages#root"
end
