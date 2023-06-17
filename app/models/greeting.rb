class Greeting < ApplicationRecord
  def self.random
    @greetings = Greeting.all
    @random = Greeting.order('RANDOM()').limit(1).first
  end
end
