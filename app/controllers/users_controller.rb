class UsersController < ApplicationController
  def new
    @user = User.new
    @number = User.count
  end
  
  def show
    
    if params[:id]
      @user = User.find_by_id(params[:id])
    else
    params[:name]
     @user = User.find_by_name(params[:name])
   end
     
    
  end
end
