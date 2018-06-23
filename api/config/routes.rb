Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    # Get login token from Knock
    post 'user/token' => 'user_token#create'

    # User actions
    get 'users/current' => 'users#current'
    resources :pages, only: %i(index show)
    resources :posts, only: %i(index show)
    resources :events, only: %i(index show create update)
    resources :users, only: %i(index show)
    resources :managers, only: %i(index show)
    resources :promoters, only: %i(index show)
  end
end
