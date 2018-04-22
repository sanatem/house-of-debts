class UserController < ApplicationController

  def index
    json_response(User.all)
  end
end
