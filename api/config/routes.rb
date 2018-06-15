Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    post 'user/token' => 'user_token#create'
    get 'users/current' => 'users#current'
    resources :pages, only: %i(index show)
  end
end
