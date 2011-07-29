# == Schema Information
#
# Table name: users
#
#  id         :integer         not null, primary key
#  name       :string(255)
#  email      :string(255)
#  created_at :datetime
#  updated_at :datetime
#

class User < ActiveRecord::Base
  
  attr_accessible :name, :email
  
  # => validation of name
  validates :name, :presence => true, 
                   :uniqueness => true,
                   :length => { :minimum => 3, 
                                :maximum => 20 }
  # => validation of email
  email_regex = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  
  validates :email, :presence => true,
  # => email nie jest case sensitive
                    :uniqueness => { :case_sensitive => false },
                    :format => { :with => email_regex } 
end
