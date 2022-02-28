Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :test, only: %i[index]
      resources :likes, only: %i[index create]
      resources :chat_rooms, only: %i[index show]
      resources :messages, only: %i[create]
      resources :users, only: %i[index show update]
      resources :posts, only: %i[index create destroy]

      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
        registrations: 'api/v1/auth/registrations'
      }

      namespace :auth do
        resources :sessions, only: %i[index]
      end

      get :health_check, to: 'health_check#index'
    end
  end
end
