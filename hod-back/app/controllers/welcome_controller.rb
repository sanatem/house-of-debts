class WelcomeController < ApplicationController
def index
  render json: {response: "Welcome!"}
end

end
