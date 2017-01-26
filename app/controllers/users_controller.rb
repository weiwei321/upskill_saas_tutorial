class UsersController < ApplicationController
  
  # GET /users/:id
  def shown
    @user = User.find( params[:id] )
    
  end
  
  
end
