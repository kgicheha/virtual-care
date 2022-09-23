Rails.application.routes.draw do
  resources :appointments, only: [:index, :show, :create , :update, :destroy]
  resources :doctors, only: [:index, :show, :create , :update, :destroy]
  resources :patients, only: [:index, :show, :create , :update, :destroy]

  post "/signup", to: "patients#create"
  get "/me", to: "patients#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
