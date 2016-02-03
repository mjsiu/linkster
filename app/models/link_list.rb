# == Schema Information
#
# Table name: link_lists
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  title       :string           not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class LinkList < ActiveRecord::Base

  belongs_to :user
  has_many :links
end
