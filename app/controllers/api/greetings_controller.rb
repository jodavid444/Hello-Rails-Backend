class Api::GreetingsController < ApplicationController
  def index
    response.headers['Access-Control-Allow-Origin'] = '*'
    @greeting = Greeting.order('RANDOM()').first
    render json: @greeting
  end
end
