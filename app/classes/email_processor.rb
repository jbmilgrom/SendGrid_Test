class EmailProcessor
  
  # attr_accessor :body, :email, :name
  def initialize(email)
    @email = email
  end

  def process
    puts @email
  	Post.create!({ body: @email.body, from: @email.from })
  end
  # def self.process(email)
  #   Post.create!({ body: email.body, sender: email.from })
  # end
end