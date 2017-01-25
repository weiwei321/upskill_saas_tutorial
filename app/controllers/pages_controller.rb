class PagesController < ApplicationController
  #Get request for / which us the homepage
  def home
    @basic_plan = Plan.find(1)
    @pro_plan = Plan.find(2)
  end
  
  def about
  end 
end