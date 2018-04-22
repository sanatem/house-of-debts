class User < ApplicationRecord
  has_and_belongs_to_many :houses
  has_many :contributions

  def create_debt(contribution)
    Contribution.create(amount: contribution.amount * -1, user: self, house: contribution.house, date: Date.today, reason: contribution.reason)
  end

  def balance
    houses.map { |house|
      {hash_tag: house.hash_tag, balance: house.balance_for(self)}
    }
  end

end
