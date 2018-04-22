class BalanceController < ApplicationController

  def user
    # byebug
    username = params["username"].downcase

    user = User.find_by(username: username)

    json_response(resolve_balance(user))
  end

  def resolve_balance(user)
    { balances: user.balance}
  end

end
