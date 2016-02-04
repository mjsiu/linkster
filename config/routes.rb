Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users
    resources :links, only: [:index, :create, :destroy, :edit]
    resources :link_lists, only: [:index, :create, :destroy, :edit]
    resources :link_list_items, only: [:show, :create, :destroy, :edit]
  end
  resources :users, only: [:new, :show, :create]
  resource :session, only: [:new, :create, :destroy]
  root to: "static_pages#root"
end
