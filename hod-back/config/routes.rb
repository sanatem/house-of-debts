Rails.application.routes.draw do
 root 'welcome#index'

 get 'houses' => 'house#index'
 get 'users' => 'user#index'
 get 'balance' => 'balance#user'
 post 'deposit' => 'deposit#create'

end
