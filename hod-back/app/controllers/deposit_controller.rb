class DepositController < ApplicationController

  def create
    house_tag = params["house"].downcase
    username = params["username"].downcase

    user = User.find_or_create_by(username: username)
    house = House.find_or_create_by(hash_tag: house_tag)

    user.houses << house unless user.houses.include?(house)

    # byebug

    contribution = Contribution.new(house: house, user: user, amount: params[:amount], date: Date.today, reason: params[:reason])
# byebug

    house.users_to_contribute(contribution)

    house.users

    user.save!
    house.save!
    contribution.save!

    json_response({response: "OK"})
  end

end
