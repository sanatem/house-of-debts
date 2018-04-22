class House < ApplicationRecord
  has_and_belongs_to_many :users

  def users_to_contribute(contribution)
    # byebug
    contributors = users.reject{|user| user == contribution.user}
    contributors.each { |user| user.create_debt(contribution)  }
  end

  def balance_for(user)
    user_contributions = Contribution.where(user: user, house: self)
    user_contributions.sum(&:amount)
  end

end
