Rails.application.routes.draw do
  resources :campaign_player_notes
  resources :campaign_players
  resources :enc_locations
  resources :enc_monsters
  resources :enc_npcs
  resources :player_notes
  resources :enc_items
  resources :encs
  resources :locations
  resources :monsters
  resources :npcs
  resources :campaigns
  resources :players
  resources :items
  # resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/campaignencs/:id', to: 'encs#campaignencs'
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
end
